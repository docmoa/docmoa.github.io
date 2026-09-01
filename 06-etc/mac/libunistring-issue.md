---
url: /06-etc/mac/libunistring-issue.md
description: libunistring.2.dylib not loaded
---
# Library not loaded: libunistring.2.dylib

## 현상

macOS Ventura 업그레이드 후 wget 실행시 오류 발생

```bash
$ wget
dyld[4414]: Library not loaded: /usr/local/opt/libunistring/lib/libunistring.2.dylib
  Referenced from: <1ECBA17E-A426-310D-9902-EFF0D9E10532> /usr/local/Cellar/wget/1.21.3/bin/wget
  Reason: tried: '/usr/local/opt/libunistring/lib/libunistring.2.dylib' (no such file), '/System/Volumes/Preboot/Cryptexes/OS/usr/local/opt/libunistring/lib/libunistring.2.dylib' (no such file), '/usr/local/opt/libunistring/lib/libunistring.2.dylib' (no such file), '/usr/local/lib/libunistring.2.dylib' (no such file), '/usr/lib/libunistring.2.dylib' (no such file, not in dyld cache), '/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib' (no such file), '/System/Volumes/Preboot/Cryptexes/OS/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib' (no such file), '/usr/local/Cellar/libunistring/1.1/lib/libunistring.2.dylib' (no such file), '/usr/local/lib/libunistring.2.dylib' (no such file), '/usr/lib/libunistring.2.dylib' (no such file, not in dyld cache)
[1]    4414 abort      wget
```

## 해결방안 찾기 과정

* <https://stackoverflow.com/questions/50631185/homebrew-will-not-run-wget-command-library-not-loaded>를 참고하여 `brew uninstall --force gettext` 실행했으나 오류

```bash
$ brew uninstall --force gettext
xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun
Error: Refusing to uninstall /usr/local/Cellar/gettext/0.21.1
because it is required by cairo, gdk-pixbuf, git, glib, gnupg, gnutls, gobject-introspection, graphviz, gts, harfbuzz, libidn2, librsvg, libslirp, pango, podman, qemu and wget, which are currently installed.
You can override this and force removal with:
brew uninstall --ignore-dependencies gettext
```

* 오류 메시지에서의 안내대로 `--ignore-dependencies` 추가하여 실행

```bash
$ brew uninstall --ignore-dependencies gettext
Uninstalling /usr/local/Cellar/gettext/0.21.1... (1,983 files, 20.6MB)
```

* `gettext` 재설치하면 도중에 실행이 안됐던 `wget`도 재설치

```bash
$ brew install gettext
...
==> Upgrading wget
1.21.3 -> 1.21.3_1

==> Installing dependencies for wget: openssl@3
==> Installing wget dependency: openssl@3
==> Pouring openssl@3--3.0.7.ventura.bottle.tar.gz
🍺  /usr/local/Cellar/openssl@3/3.0.7: 6,454 files, 28.2MB
==> Installing wget
==> Pouring wget--1.21.3_1.ventura.bottle.1.tar.gz
🍺  /usr/local/Cellar/wget/1.21.3_1: 89 files, 4.2MB
==> Running `brew cleanup wget`...
Removing: /usr/local/Cellar/wget/1.21.3... (89 files, 4.2MB)
==> Checking for dependents of upgraded formulae...
...
```

* `git`도 업그레이드 후 영향을 받았는지 재설치 필요

```log
Error: 'git' must be installed and in your PATH!
Warning: gettext 0.21.1 is already installed and up-to-date.
To reinstall 0.21.1, run:
    brew reinstall gettext
```

* `brew install git`으로 다시 `git`설치

* 마지막 재설치 요구에 따라 `gettext` 재설치

```bash
$ brew reinstall gettext
```

* `wget` 재실행 시 정상 동작 확인

```bash
$ wget
wget: URL 빠짐
사용법: wget [<옵션>]... [URL]...

자세한 옵션은 `wget --help'를 입력하십시오.
```
