import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as d,c as u,b as a,d as n,a as s,w as t,e as o}from"./app-DwRVeH7t.js";const v={},m=a("h1",{id:"transit-import",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#transit-import"},[a("span",null,"Transit (Import)")])],-1),k=a("p",null,"키 가져오기(Import) 기능은 HSM, 사용자 정의 키, 기타 외부 시스템에서 기존 키를 가져와야 하는 경우를 지원한다. 공개키(Public Key)만을 가져올 수도 있다.",-1),b={class:"hint-container info"},h=a("p",{class:"hint-container-title"},"links",-1),g={href:"https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK",target:"_blank",rel:"noopener noreferrer"},y={href:"https://developer.hashicorp.com/vault/docs/commands/transit/import",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key",target:"_blank",rel:"noopener noreferrer"},A=a("h2",{id:"_1-cli",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-cli"},[a("span",null,"1. CLI")])],-1),x=a("code",null,"transit import",-1),B=a("code",null,"transit import-version",-1),E={href:"https://developer.hashicorp.com/vault/docs/secrets/transit#bring-your-own-key-byok",target:"_blank",rel:"noopener noreferrer"},K=o(`<ul><li><code>transit import</code> : 키를 새 키로 가져오며 이미 존재하는 경우 실패</li><li><code>transit import-version</code> : 기존 키를 새 버전의 키로 업데이트</li></ul><h2 id="_2-openssl을-사용하여-암복호화" tabindex="-1"><a class="header-anchor" href="#_2-openssl을-사용하여-암복호화"><span>2. OpenSSL을 사용하여 암복호화</span></a></h2><p><code>openssl</code>을 이용하여 RSA 키를 생성해보고, 데이터를 암호화 및 복호화</p><h3 id="_2-1-rsa-키-생성" tabindex="-1"><a class="header-anchor" href="#_2-1-rsa-키-생성"><span>2.1 RSA 키 생성</span></a></h3><p>먼저 <code>openssl</code>을 이용하여 RSA 키쌍을 생성한다. 이 예에서는 2048비트 키를 생성한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># Private 키</span>
openssl genrsa <span class="token parameter variable">-out</span> private_key.pem <span class="token number">2048</span>
<span class="token comment"># Public 키</span>
openssl rsa <span class="token parameter variable">-pubout</span> <span class="token parameter variable">-in</span> private_key.pem <span class="token parameter variable">-out</span> public_key.pem
</code></pre></div><p><code>private_key.pem</code>에 개인 키가 저장되고 <code>public_key.pem</code>에 공개 키가 저장된다.</p>`,7),I={class:"hint-container note"},f=a("p",{class:"hint-container-title"},"생성된 PEM 예제",-1),T=a("div",{class:"language-txt line-numbers-mode","data-ext":"txt","data-title":"txt"},[a("pre",{class:"language-txt"},[a("code",null,`-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxAqZGiw7/Et52
TRHgLFVYi3HbnMB5m/ZBMu/CZxk6H5zFrCIXcBFh+K58P/rMydFh2rveTd6CT1+s
zrphe1MPS9mRjvvgy3Bk1XEEUBYOlmIk/eD3lLJEoTjY1E5bpuxirTgV7rR47XEy
ZsdT6g8Z6s6/M4bjCnJ4ZuBu1VZ3e/5pHrYFSEudy7Xag1Uby1T0Txr/OPPPjVYO
A9jgGAO+0wr4elPHyYua1IDnQGfOVuGMKKei+PybKdUvErtp6Z5PJxl7Ylj0Uq8V
ym2iXyF7deryXj4vwDZg4UdbX6TcNVSCSM5rvKtAf3S7AsSwflG9WO5Kt1t7QGy2
EWVLTrnNAgMBAAECggEASfZJdAB2663+tn/NkFX182GQ2arN4gKBCw01kY1yxQ6g
exhJxnFVUhKPFevF5/wMOU8kYOc4qkpwN8zJpCHbuvB+oIuWQ3++HuPwrVSpYr8D
k2FhtxGyy2pyTmentjQxYanvXXq4fi74tY6siyup07KBYPMu0X90BUs3TBhoYNQE
KlcZXAR20Y+8NCsKa3QmX9yXUOmDUz5i0zWo7Ojwlig96GpJXq8au3NJcarzFZsw
YFkGelNIMCDcH05ao8ujOoKecmusMEOGoue1DOzduFAvFRGoo7Cx1C+O2ORR0uwC
jyO2H7qrIckoBlnjSzJ5GOY2UNyLAGs5cNEy6Na9IQKBgQDmoSCfx/DSC00lFY7H
Z0fsJrQWzhFnj5hyP3bti4GdtCtYxf1jgM+ZPt8SNU1fqWl2+JbDMXM0C65z39bA
YcHYeWYHVXGMVU/6vDyeD3l7ohuNi7GwvnejZmN0QWoIpKQ9OeVZWQ243bKg7UTR
SDWrOj30RJoS6CzfoKUIM+yCLwKBgQDEe4dJ452/0RsLFhuICQmP9GSUCHZCnSBv
RZvWlw6IJ0qL+Ww+fyNKld0BdUFKZsHVamxcEr/e0MMjFYyoq4JGkBJbUZjcg6QI
bSn4ENKNWEnEfCGeEf2o2IZSdiTGtC8kV1zAgIoy9he/imosMufovjHLXV2QsuDA
plaQwD1wwwKBgQCf0nkxQPV6GarUUCQpu0D0Pb3/L76P7crPIXvhEhQ4nWqMkmgO
VG2I3TDpBVchO92CPLL9gX88SfwTAMNpflU/FqHF40hU36oVL+0x+7dMHgLKDEyP
Fu8BpSq2nb5FTxMh+sUdLcF8ouXu734JKelHR403gXLkN1Ehh8nV7WWwsQKBgEfz
9NdaQ6q7KOwmbG6k4JuXJD4R2z0JzZbyJt+u8eNqgCJCdSFt7b6iowylpANbHiDJ
mGUfeKRgTxXKDni2Vj8BA7ftac1XZ/qt/3CYuIKKknkh/C2m6P2sTYRlP5KE6b6l
P5I/gFypQokiZz9IZSUWgaW3y0vyNdxXDdx0iguBAoGBAOR4r7I8WcOM9i/uTSJm
oAlI9FqxCmQg6Yly6alMF5jjC2/F2/7byYB1FcZ0EnTomYb4dEePCMron3pBpFIk
gx2rcjODvK/hU2Uodpy1XF47mx7dGzuTZYLPijRzl3R/5nW05xnDLBRRAQXaBKLj
CYIKBHwiRAEvHioLiDIostz1
-----END PRIVATE KEY-----
`)]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),C=a("div",{class:"language-txt","data-ext":"txt","data-title":"txt"},[a("pre",{class:"language-txt"},[a("code",null,`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
`)])],-1),Y=o(`<h3 id="_2-2-rsa-키로-암호화" tabindex="-1"><a class="header-anchor" href="#_2-2-rsa-키로-암호화"><span>2.2 RSA 키로 암호화</span></a></h3><p>공개 키(<code>public_key.pem</code>)를 사용하여 &quot;This is my data&quot;라는 문자열을 암호화한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;This is my data&quot;</span> <span class="token operator">|</span> openssl rsautl <span class="token parameter variable">-encrypt</span> <span class="token parameter variable">-pubin</span> <span class="token parameter variable">-inkey</span> public_key.pem <span class="token parameter variable">-out</span> encrypted_data.bin
</code></pre></div><details class="hint-container details"><summary>암호화된 데이터</summary><p><code>encrypted_data.bin</code></p><div class="language-txt" data-ext="txt" data-title="txt"><pre class="language-txt"><code>�W�U�F�B��	�����F	��u8-�U&gt;���j��;&quot;\`Z�+�A��)�6u����9��H�W��t)h��,�m��

                                                                          *h��(UL;ZC�l�K��8���*��Y�k?��\`�?�
              �%eܓ�O^
                     K�]���&#39;8�QI�H��2�d���2�Nv$��)F���z���Ձd�B��&quot;�na���x��v/�J-�^�
  ��ΕJ���̳*
          
</code></pre></div></details><h3 id="_2-3-rsa-키로-복호화" tabindex="-1"><a class="header-anchor" href="#_2-3-rsa-키로-복호화"><span>2.3 RSA 키로 복호화</span></a></h3><p>암호화된 데이터를 복호화하려면 개인 키(<code>private_key.pem</code>)를 사용해야 한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>openssl rsautl <span class="token parameter variable">-decrypt</span> <span class="token parameter variable">-inkey</span> private_key.pem <span class="token parameter variable">-in</span> encrypted_data.bin
</code></pre></div><details class="hint-container details"><summary>복호화 실행 결과</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ openssl rsautl <span class="token parameter variable">-decrypt</span> <span class="token parameter variable">-inkey</span> private_key.pem <span class="token parameter variable">-in</span> encrypted_data.bin

This is my data
</code></pre></div></details><h2 id="_3-vault-transit로-키-가져오기" tabindex="-1"><a class="header-anchor" href="#_3-vault-transit로-키-가져오기"><span>3. Vault Transit로 키 가져오기</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Import 주의 사항</p><ul><li><p>대칭 키(예: AES 또는 ChaCha20 키)를 래핑할 때는 키의 원시 바이트를 래핑해야 한다. 예를 들어 AES 128비트 키의 경우 16자 길이의 바이트 배열이 되는데, 이 바이트 배열은 Base64나 다른 인코딩 없이 바로 래핑된다.</p></li><li><p>비대칭 키(예: RSA 또는 ECDSA 키)를 래핑할 때는 이 키의 PKCS8 인코딩된 형식을 원시 DER/바이너리 형식으로 래핑해야 한다.</p></li></ul></div><p>위 <a href="#2-openssl%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EC%95%94%EB%B3%B5%ED%98%B8%ED%99%94">2. OpenSSL을 사용하여 암복호화</a>에서 생성한 개인키를 사용하여 진행한다.</p><h3 id="_3-1-pem-형식의-키를-der로-변환" tabindex="-1"><a class="header-anchor" href="#_3-1-pem-형식의-키를-der로-변환"><span>3.1 PEM 형식의 키를 DER로 변환</span></a></h3><p>OpenSSL로 생성된 비대칭 키는 DER 형식으로 변경이 필요하다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>openssl pkcs8 <span class="token parameter variable">-topk8</span> <span class="token parameter variable">-nocrypt</span> <span class="token parameter variable">-inform</span> PEM <span class="token parameter variable">-outform</span> DER <span class="token parameter variable">-in</span> private_key.pem <span class="token parameter variable">-out</span> private_key.der
</code></pre></div><details class="hint-container details"><summary>DER 내용</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> private_key.der

��0�����F���vM�,UX�qۜ�y��A2��g:�Ŭ<span class="token string">&quot;pa�|?����aڻ�MނO_�κa{SKّ����pd�qP�b$���D�8��N[��b�8�x�q2f�S��ο3��
rxf�n�Vw{�i�HK�˵ڃUT�O�8�ύV����
�zS�ɋ�Ԁ�@g�V�(����)�/�i�O&#39;{bX�R��m�_!{u��^&gt;/�6<span class="token variable"><span class="token variable">\`</span>�G<span class="token punctuation">[</span>_��5T�H�k��@t�İ~Q�X�J�<span class="token punctuation">[</span><span class="token punctuation">{</span>@l�eKN���I�Itv���͐U��a�٪���
<span class="token number">5</span>��r��<span class="token punctuation">{</span>I�qUR�����
                 9O$<span class="token variable">\`</span></span>�8�Jp7�ɤ!ۺ�~���C���T�b��aa���jrNg��41a��]z�~.�����+�Ӳ�<span class="token variable"><span class="token variable">\`</span>�.�tK7Lh<span class="token variable">\`</span></span>�*W<span class="token entity" title="\\v">\\v</span>я�4+
kt&amp;_ܗP�S&gt;b�5����(=�jI^��sIq���0<span class="token variable"><span class="token variable">\`</span>YzSH0 �NZ�ˣ:��rk�0C���
                                                      �ݸP/�����/���Q���<span class="token comment">#���!�(Y�K2y�6P܋k9p�2�ֽ!��� ����</span>
                      M%��gG�<span class="token operator">&amp;</span>��g��r?v틁��+X��c�ϙ<span class="token operator">&gt;</span>�5M_�iv��1s4
                                                              �s���a��yfUq�UO�<span class="token operator">&lt;</span>��ݲ��D�H5�:<span class="token operator">=</span>�D��,ߠ3�/���<span class="token punctuation">{</span>�I㝿�		��dvB� oE�֗�&#39;J��l<span class="token operator">&gt;</span><span class="token comment">#J��uAJf��jl\\����#����F�[Q�܃m)�ҍXI�|!��؆Rv$ƴ/$W\\���2���j,2��1�]]�����V��=p�����y1@�z��P$)�@�=��/�����!{�8�j��hTm��0�W!;݂&lt;��&lt;I��i~U?���HTߪ/�1�L�</span>
                                         L���*���EO<span class="token operator">!</span>��-�<span class="token operator">|</span>����~	<span class="token punctuation">)</span>�GG�7�r�7Q<span class="token operator">!</span>����e����G���ZC��<span class="token punctuation">(</span>�<span class="token operator">&amp;</span>ln����$<span class="token operator">&gt;</span>�<span class="token operator">=</span>     	͖�<span class="token operator">&amp;</span>߮��j�&quot;Bu<span class="token operator">!</span>m����
                                               ��<span class="token punctuation">[</span> ɘex�<span class="token variable">\`</span></span>O�x�V?��i�Wg��p�����y!�-�t�M�e?��龥?�?�\\�B�&quot;</span>g?He%����K�5�W
   ����x��<span class="token operator">&lt;</span>YÌ�/�M<span class="token string">&quot;f�	H�Z�
d �r�L��
        o����ɀu�tt虆�tG��zA�R$��r3����Se(v��\\^;���e�ϊ4s�t�u���,Q���	�
|&quot;</span>D/*
     �2<span class="token punctuation">(</span>���%
</code></pre></div></details><p>그런 다음 가져오기 도구와 함께 사용하려면 키를 줄 바꿈 없이 base64로 인코딩해야 한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">BASE64_KEY</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>base64 <span class="token parameter variable">-i</span> private_key.der<span class="token variable">)</span></span>
</code></pre></div><details class="hint-container details"><summary>BASE64 인코딩 된 DER 내용</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$BASE64_KEY</span>

MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCxAqZGiw7/Et52TRHgLFVYi3HbnMB5m/ZBMu/CZxk6H5zFrCIXcBFh+K58P/rMydFh2rveTd6CT1+szrphe1MPS9mRjvvgy3Bk1XEEUBYOlmIk/eD3lLJEoTjY1E5bpuxirTgV7rR47XEyZsdT6g8Z6s6/M4bjCnJ4ZuBu1VZ3e/5pHrYFSEudy7Xag1Uby1T0Txr/OPPPjVYOA9jgGAO+0wr4elPHyYua1IDnQGfOVuGMKKei+PybKdUvErtp6Z5PJxl7Ylj0Uq8Vym2iXyF7deryXj4vwDZg4UdbX6TcNVSCSM5rvKtAf3S7AsSwflG9WO5Kt1t7QGy2EWVLTrnNAgMBAAECggEASfZJdAB2663+tn/NkFX182GQ2arN4gKBCw01kY1yxQ6gexhJxnFVUhKPFevF5/wMOU8kYOc4qkpwN8zJpCHbuvB+oIuWQ3++HuPwrVSpYr8Dk2FhtxGyy2pyTmentjQxYanvXXq4fi74tY6siyup07KBYPMu0X90BUs3TBhoYNQEKlcZXAR20Y+8NCsKa3QmX9yXUOmDUz5i0zWo7Ojwlig96GpJXq8au3NJcarzFZswYFkGelNIMCDcH05ao8ujOoKecmusMEOGoue1DOzduFAvFRGoo7Cx1C+O2ORR0uwCjyO2H7qrIckoBlnjSzJ5GOY2UNyLAGs5cNEy6Na9IQKBgQDmoSCfx/DSC00lFY7HZ0fsJrQWzhFnj5hyP3bti4GdtCtYxf1jgM+ZPt8SNU1fqWl2+JbDMXM0C65z39bAYcHYeWYHVXGMVU/6vDyeD3l7ohuNi7GwvnejZmN0QWoIpKQ9OeVZWQ243bKg7UTRSDWrOj30RJoS6CzfoKUIM+yCLwKBgQDEe4dJ452/0RsLFhuICQmP9GSUCHZCnSBvRZvWlw6IJ0qL+Ww+fyNKld0BdUFKZsHVamxcEr/e0MMjFYyoq4JGkBJbUZjcg6QIbSn4ENKNWEnEfCGeEf2o2IZSdiTGtC8kV1zAgIoy9he/imosMufovjHLXV2QsuDAplaQwD1wwwKBgQCf0nkxQPV6GarUUCQpu0D0Pb3/L76P7crPIXvhEhQ4nWqMkmgOVG2I3TDpBVchO92CPLL9gX88SfwTAMNpflU/FqHF40hU36oVL+0x+7dMHgLKDEyPFu8BpSq2nb5FTxMh+sUdLcF8ouXu734JKelHR403gXLkN1Ehh8nV7WWwsQKBgEfz9NdaQ6q7KOwmbG6k4JuXJD4R2z0JzZbyJt+u8eNqgCJCdSFt7b6iowylpANbHiDJmGUfeKRgTxXKDni2Vj8BA7ftac1XZ/qt/3CYuIKKknkh/C2m6P2sTYRlP5KE6b6lP5I/gFypQokiZz9IZSUWgaW3y0vyNdxXDdx0iguBAoGBAOR4r7I8WcOM9i/uTSJmoAlI9FqxCmQg6Yly6alMF5jjC2/F2/7byYB1FcZ0EnTomYb4dEePCMron3pBpFIkgx2rcjODvK/hU2Uodpy1XF47mx7dGzuTZYLPijRzl3R/5nW05xnDLBRRAQXaBKLjCYIKBHwiRAEvHioLiDIostz1
</code></pre></div></details><h3 id="_3-2-run-vault-dev-mode-transit-enable-option" tabindex="-1"><a class="header-anchor" href="#_3-2-run-vault-dev-mode-transit-enable-option"><span>3.2 Run Vault <code>dev</code> mode &amp; Transit Enable (Option)</span></a></h3><p>다음 명령어로 Vault를 개발 모드로 실행한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault server <span class="token parameter variable">-dev</span> -dev-root-token-id<span class="token operator">=</span>root
</code></pre></div><p>다른 명령창에서 아래 환경변수를 입력한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span>http://127.0.0.1:8200
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span>root
</code></pre></div><p>환경변수가 적용된 명령창에서 <code>transit</code>을 활성화 한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> transit
</code></pre></div><h3 id="_3-3-transit-import" tabindex="-1"><a class="header-anchor" href="#_3-3-transit-import"><span>3.3 Transit Import</span></a></h3><p>적절한 키 유형으로 기존 키를 가져온다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault transit <span class="token function">import</span> transit/keys/my-key <span class="token variable">$BASE64_KEY</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>rsa-2048
</code></pre></div><details class="hint-container details"><summary>키 가져오기 결과 출력 예제</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault transit <span class="token function">import</span> transit/keys/my-key <span class="token variable">$BASE64_KEY</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>rsa-2048

Retrieving wrapping key.
Wrapping <span class="token builtin class-name">source</span> key with ephemeral key.
Encrypting ephemeral key with wrapping key.
Submitting wrapped key.
Success<span class="token operator">!</span>
</code></pre></div></details><p>적용된 키 정보는 기존 <code>transit</code>의 키 정보를 확인하는 방식과 같다. 키를 가져오면 개인키를 기반으로 공개키가 자동 생성된다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token builtin class-name">read</span> transit/keys/my-key

Key                            Value
---                            -----
allow_plaintext_backup         <span class="token boolean">false</span>
auto_rotate_period             0s
deletion_allowed               <span class="token boolean">false</span>
derived                        <span class="token boolean">false</span>
exportable                     <span class="token boolean">false</span>
imported_key                   <span class="token boolean">true</span>
imported_key_allow_rotation    <span class="token boolean">false</span>
keys                           map<span class="token punctuation">[</span><span class="token number">1</span>:map<span class="token punctuation">[</span>creation_time:2023-09-21T17:21:37.857532+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
<span class="token punctuation">]</span><span class="token punctuation">]</span>
latest_version                 <span class="token number">1</span>
min_available_version          <span class="token number">0</span>
min_decryption_version         <span class="token number">1</span>
min_encryption_version         <span class="token number">0</span>
name                           my-key
supports_decryption            <span class="token boolean">true</span>
supports_derivation            <span class="token boolean">false</span>
supports_encryption            <span class="token boolean">true</span>
supports_signing               <span class="token boolean">true</span>
<span class="token builtin class-name">type</span>                           rsa-2048
</code></pre></div><h3 id="_3-4-transit으로-암호화-복호화" tabindex="-1"><a class="header-anchor" href="#_3-4-transit으로-암호화-복호화"><span>3.4 Transit으로 암호화/복호화</span></a></h3><p>기존 <code>transit</code>의 암호화/복호화 방식과 동일하게 사용한다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> transit/encrypt/my-key <span class="token assign-left variable">plaintext</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token string">&quot;This is my data&quot;</span> <span class="token operator">|</span> base64<span class="token variable">)</span></span>

Key            Value
---            -----
ciphertext     vault:v1:Kbiudy2+vK+IRIWnMKPUOwRXPn1eh3KfvvU+59YSPJgidndodgno+7naujQvxpe8T4+ThI01pqw2SeAB6KST8Uh/WVfM91vJ5kWV2NAXJXy+gqe0K3WxzhMQT2DTkxa2mkcUj4WM9blwFW46P9z5SYuphj7ripfiPu1mclolFFD2CUU0WgdW5IzLugWWOOeUlBTh8zQMpdVVVC9xXH8WtPFErXZu1zbo1quDkoR+lLCoyt0ONfcUB24R9oVvP2RjY63Taeu5Phi8DmHDAkAa4T1xB8DbH0wGKBZoK3s2e+GFTfH5XWlxiY832Ds10IuvtbW/TZhkd2Vq1r1bYj3q9w<span class="token operator">==</span>
key_version    <span class="token number">1</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span>vault <span class="token function">write</span> <span class="token parameter variable">-field</span><span class="token operator">=</span>plaintext transit/decrypt/my-key <span class="token assign-left variable">ciphertext</span><span class="token operator">=</span>vault:v1:Kbiudy2+vK+IRIWnMKPUOwRXPn1eh3KfvvU+59YSPJgidndodgno+7naujQvxpe8T4+ThI01pqw2SeAB6KST8Uh/WVfM91vJ5kWV2NAXJXy+gqe0K3WxzhMQT2DTkxa2mkcUj4WM9blwFW46P9z5SYuphj7ripfiPu1mclolFFD2CUU0WgdW5IzLugWWOOeUlBTh8zQMpdVVVC9xXH8WtPFErXZu1zbo1quDkoR+lLCoyt0ONfcUB24R9oVvP2RjY63Taeu5Phi8DmHDAkAa4T1xB8DbH0wGKBZoK3s2e+GFTfH5XWlxiY832Ds10IuvtbW/TZhkd2Vq1r1bYj3q9w<span class="token operator">==</span><span class="token variable">)</span></span> <span class="token operator">|</span> base64 <span class="token parameter variable">-d</span>

This is my data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-키-버전-추가" tabindex="-1"><a class="header-anchor" href="#_4-키-버전-추가"><span>4. 키 버전 추가</span></a></h2><p>이전과 동일한 키를 <code>transit_import</code>로 추가</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault transit import-version transit/keys/my-key <span class="token variable">$BASE64_KEY</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>rsa-2048

Retrieving wrapping key.
Wrapping <span class="token builtin class-name">source</span> key with ephemeral key.
Encrypting ephemeral key with wrapping key.
Submitting wrapped key.
Success<span class="token operator">!</span>
</code></pre></div><p>신규 추가된 키 확인</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token builtin class-name">read</span> transit/keys/my-key
Key                            Value
---                            -----
allow_plaintext_backup         <span class="token boolean">false</span>
auto_rotate_period             0s
deletion_allowed               <span class="token boolean">false</span>
derived                        <span class="token boolean">false</span>
exportable                     <span class="token boolean">false</span>
imported_key                   <span class="token boolean">true</span>
imported_key_allow_rotation    <span class="token boolean">false</span>
keys                           map<span class="token punctuation">[</span><span class="token number">1</span>:map<span class="token punctuation">[</span>creation_time:2023-09-21T17:21:37.857532+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
<span class="token punctuation">]</span> <span class="token number">2</span>:map<span class="token punctuation">[</span>creation_time:2023-09-21T17:41:44.047857+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv7H/FBtt07km/w4z/qAK
sJZumWinnmn5V/5f8TMfQcOjiyF2J4RTTIjUBEGsXF+/bg2w88f39f+r7Ws4wFHa
91UCgc9MpyQOil42UYN+Rm+kc6hWN26+ZmxqEU/HL1iLPwtu/HGU38MCeS5552M6
VY7BB7vIhheFyEy8+GDwrjZ3bo+f6Vaya6hyMZ7psS7N5OVaN3z7PsN57lzYaxZ6
0vVFJeUeeUq371nl7f0cN3eC8PTI8XgQW7Yy8B4lWKHzjpbA2w1hivh6cuXgE2+c
5MUqkxEKmE8BOMsgm7C+DQ9umQ4q1DkHIWub4oLUg4Tr/VgzECUj+D9tcGLZXFHd
dwIDAQAB
-----END PUBLIC KEY-----
<span class="token punctuation">]</span><span class="token punctuation">]</span>
latest_version                 <span class="token number">2</span>
min_available_version          <span class="token number">0</span>
min_decryption_version         <span class="token number">1</span>
min_encryption_version         <span class="token number">0</span>
name                           my-key
supports_decryption            <span class="token boolean">true</span>
supports_derivation            <span class="token boolean">false</span>
supports_encryption            <span class="token boolean">true</span>
supports_signing               <span class="token boolean">true</span>
<span class="token builtin class-name">type</span>                           rsa-2048
</code></pre></div>`,39),w=a("div",{class:"hint-container caution"},[a("p",{class:"hint-container-title"},"주의 사항"),a("p",null,[n("Vault의 기본 Transit에서 제공하는 키의 순환("),a("code",null,"rotate"),n(")을 사용하지 않고 사용자가 임의로 새로운 키 버전을 추가하기 때문에 동일한 키가 추가될 수 있다. 이 경우, 동일한 개인 키를 Transit으로 가져오면 신규 버전으로 생성된 키(또는 이전 버전의 키)의 암호화 키 또한 동일한 공개키가 생성되므로, 키 버전과 관계 없이 복호화 된다.")]),a("p",null,"동일한 개인키를 신규 버전 추가하여 기존 공개키와 신규 공개키가 같음을 확인하여 재현할 수 있다."),a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{"bash:no-line-numbers":"",class:"language-bash"},[a("code",null,[n("$ vault "),a("span",{class:"token builtin class-name"},"read"),n(` transit/keys/my-key
Key                            Value
---                            -----
allow_plaintext_backup         `),a("span",{class:"token boolean"},"false"),n(`
auto_rotate_period             0s
deletion_allowed               `),a("span",{class:"token boolean"},"false"),n(`
derived                        `),a("span",{class:"token boolean"},"false"),n(`
exportable                     `),a("span",{class:"token boolean"},"false"),n(`
imported_key                   `),a("span",{class:"token boolean"},"true"),n(`
imported_key_allow_rotation    `),a("span",{class:"token boolean"},"false"),n(`
keys                           map`),a("span",{class:"token punctuation"},"["),a("span",{class:"token number"},"1"),n(":map"),a("span",{class:"token punctuation"},"["),n(`creation_time:2023-09-21T17:21:37.857532+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
`),a("span",{class:"token punctuation"},"]"),n(),a("span",{class:"token number"},"2"),n(":map"),a("span",{class:"token punctuation"},"["),n(`creation_time:2023-09-21T17:41:44.047857+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},"]"),n(`
latest_version                 `),a("span",{class:"token number"},"2"),n(`
min_available_version          `),a("span",{class:"token number"},"0"),n(`
min_decryption_version         `),a("span",{class:"token number"},"1"),n(`
min_encryption_version         `),a("span",{class:"token number"},"0"),n(`
name                           my-key
supports_decryption            `),a("span",{class:"token boolean"},"true"),n(`
supports_derivation            `),a("span",{class:"token boolean"},"false"),n(`
supports_encryption            `),a("span",{class:"token boolean"},"true"),n(`
supports_signing               `),a("span",{class:"token boolean"},"true"),n(`
`),a("span",{class:"token builtin class-name"},"type"),n(`                           rsa-2048
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")])]),a("p",null,[n("동일한 개인키가 Transit 키로 가져오기되고, 따라서 같은 공개키가 생성된다. \b앞서 복호화 했던 기존 버전("),a("code",null,"vault:v1:"),n(")의 "),a("code",null,"ciphertext"),n("의 버전을 신규 버전("),a("code",null,"vault:v2:"),n(")으로 변경하여 복호화 요청을 하면 복호화 된다.")]),a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[a("span",{class:"token builtin class-name"},"echo"),n(),a("span",{class:"token variable"},[a("span",{class:"token variable"},"$("),n("vault "),a("span",{class:"token function"},"write"),n(),a("span",{class:"token parameter variable"},"-field"),a("span",{class:"token operator"},"="),n("plaintext transit/decrypt/my-key "),a("span",{class:"token assign-left variable"},"ciphertext"),a("span",{class:"token operator"},"="),n("vault:v2:Kbiudy2+vK+IRIWnMKPUOwRXPn1eh3KfvvU+59YSPJgidndodgno+7naujQvxpe8T4+ThI01pqw2SeAB6KST8Uh/WVfM91vJ5kWV2NAXJXy+gqe0K3WxzhMQT2DTkxa2mkcUj4WM9blwFW46P9z5SYuphj7ripfiPu1mclolFFD2CUU0WgdW5IzLugWWOOeUlBTh8zQMpdVVVC9xXH8WtPFErXZu1zbo1quDkoR+lLCoyt0ONfcUB24R9oVvP2RjY63Taeu5Phi8DmHDAkAa4T1xB8DbH0wGKBZoK3s2e+GFTfH5XWlxiY832Ds10IuvtbW/TZhkd2Vq1r1bYj3q9w"),a("span",{class:"token operator"},"=="),a("span",{class:"token variable"},")")]),n(),a("span",{class:"token operator"},"|"),n(" base64 "),a("span",{class:"token parameter variable"},"-d"),n(`

This is my data
`)])])])],-1),D=o(`<h2 id="_5-주의-사항" tabindex="-1"><a class="header-anchor" href="#_5-주의-사항"><span>5. 주의 사항</span></a></h2><div class="hint-container warning"><p class="hint-container-title">Rotate 불가</p><p>가져온 키는 <code>rotate</code> 기능을 사용할 수 없다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> <span class="token parameter variable">-f</span> transit/keys/my-key/rotate

Error writing data to transit/keys/my-key/rotate: Error making API request.

URL: PUT http://127.0.0.1:8200/v1/transit/keys/my-key/rotate
Code: <span class="token number">500</span>. Errors:

* <span class="token number">1</span> error occurred:
	* imported key my-key does not allow rotation within Vault
</code></pre></div></div><div class="hint-container info"><p class="hint-container-title">최소 버전 설정</p><p>추가된 키 버전에 대해 최소 버전을 지정하는 것은 가능하다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> <span class="token parameter variable">-f</span> transit/keys/my-key/config <span class="token assign-left variable">min_decryption_version</span><span class="token operator">=</span><span class="token number">2</span>

Key                            Value
---                            -----
allow_plaintext_backup         <span class="token boolean">false</span>
auto_rotate_period             0s
deletion_allowed               <span class="token boolean">false</span>
derived                        <span class="token boolean">false</span>
exportable                     <span class="token boolean">false</span>
imported_key                   <span class="token boolean">true</span>
imported_key_allow_rotation    <span class="token boolean">false</span>
keys                           map<span class="token punctuation">[</span><span class="token number">2</span>:map<span class="token punctuation">[</span>creation_time:2023-09-21T17:41:44.047857+09:00 name:rsa-2048 public_key:-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsQKmRosO/xLedk0R4CxV
WItx25zAeZv2QTLvwmcZOh+cxawiF3ARYfiufD/6zMnRYdq73k3egk9frM66YXtT
D0vZkY774MtwZNVxBFAWDpZiJP3g95SyRKE42NROW6bsYq04Fe60eO1xMmbHU+oP
GerOvzOG4wpyeGbgbtVWd3v+aR62BUhLncu12oNVG8tU9E8a/zjzz41WDgPY4BgD
vtMK+HpTx8mLmtSA50BnzlbhjCinovj8mynVLxK7aemeTycZe2JY9FKvFcptol8h
e3Xq8l4+L8A2YOFHW1+k3DVUgkjOa7yrQH90uwLEsH5RvVjuSrdbe0BsthFlS065
zQIDAQAB
-----END PUBLIC KEY-----
<span class="token punctuation">]</span><span class="token punctuation">]</span>
latest_version                 <span class="token number">2</span>
min_available_version          <span class="token number">0</span>
min_decryption_version         <span class="token number">2</span>
min_encryption_version         <span class="token number">0</span>
name                           my-key
supports_decryption            <span class="token boolean">true</span>
supports_derivation            <span class="token boolean">false</span>
supports_encryption            <span class="token boolean">true</span>
supports_signing               <span class="token boolean">true</span>
<span class="token builtin class-name">type</span>                           rsa-2048
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>min_decryption_version</code>이 <code>2</code> 인 경우, 이보다 낮은 버전의 키 버전의 암호화 된 키는 복호화 할 수 없다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> <span class="token parameter variable">-field</span><span class="token operator">=</span>plaintext transit/decrypt/my-key <span class="token assign-left variable">ciphertext</span><span class="token operator">=</span>vault:v1:Kbiudy2+vK+IRIWnMKPUOwRXPn1eh3KfvvU+59YSPJgidndodgno+7naujQvxpe8T4+ThI01pqw2SeAB6KST8Uh/WVfM91vJ5kWV2NAXJXy+gqe0K3WxzhMQT2DTkxa2mkcUj4WM9blwFW46P9z5SYuphj7ripfiPu1mclolFFD2CUU0WgdW5IzLugWWOOeUlBTh8zQMpdVVVC9xXH8WtPFErXZu1zbo1quDkoR+lLCoyt0ONfcUB24R9oVvP2RjY63Taeu5Phi8DmHDAkAa4T1xB8DbH0wGKBZoK3s2e+GFTfH5XWlxiY832Ds10IuvtbW/TZhkd2Vq1r1bYj3q9w<span class="token operator">==</span>
Error writing data to transit/decrypt/my-key: Error making API request.

URL: PUT http://127.0.0.1:8200/v1/transit/decrypt/my-key
Code: <span class="token number">400</span>. Errors:

* ciphertext or signature version is disallowed by policy <span class="token punctuation">(</span>too old<span class="token punctuation">)</span>
</code></pre></div></div><div class="hint-container info"><p class="hint-container-title">Transit으로 암호화된 정보는 Vault에서만 복호화</p><p>Vault Transit의 암호화된 <code>ciphertext</code>는 가져오기 전의 개인 키로 복호화 할 수 없다.<br> (<code>vault:v#:</code>을 포함하거나 제외한 <code>ciphertext</code>의 base64 디코드된 데이터)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$  openssl rsautl <span class="token parameter variable">-decrypt</span> <span class="token parameter variable">-inkey</span> private_key.pem <span class="token parameter variable">-in</span> encrypted_data.bin

RSA operation error
80A095F101000000:error:0200009F:rsa routines:RSA_padding_check_PKCS1_type_2:pkcs decoding error:crypto/rsa/rsa_pk1.c:269:
80A095F101000000:error:02000072:rsa routines:rsa_ossl_private_decrypt:padding check failed:crypto/rsa/rsa_ossl.c:499:
</code></pre></div></div>`,4);function F(V,U){const e=p("ExternalLinkIcon"),r=p("Tabs");return d(),u("div",null,[m,k,a("div",b,[h,a("ul",null,[a("li",null,[a("p",null,[n("Article : "),a("a",g,[n("https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK"),s(e)])])]),a("li",null,[a("p",null,[n("CLI : "),a("a",y,[n("https://developer.hashicorp.com/vault/docs/commands/transit/import"),s(e)])])]),a("li",null,[a("p",null,[n("API : "),a("a",_,[n("https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key"),s(e)])])])])]),A,a("p",null,[x,n("와 "),B,n("은 "),a("a",E,[n("BYOK 메커니즘"),s(e)]),n("을 통해 사용자가 생성한 키를 Transit 엔진에서 사용할 키로 가져온다.")]),K,a("div",I,[f,s(r,{id:"60",data:[{id:"private_key.pem"},{id:"public_key.pem"}]},{title0:t(({value:l,isActive:i})=>[n("private_key.pem")]),title1:t(({value:l,isActive:i})=>[n("public_key.pem")]),tab0:t(({value:l,isActive:i})=>[T]),tab1:t(({value:l,isActive:i})=>[C]),_:1},8,["data"])]),Y,w,D])}const W=c(v,[["render",F],["__file","transit-import.html.vue"]]),P=JSON.parse('{"path":"/04-HashiCorp/06-Vault/02-Secret_Engine/transit-import.html","title":"Transit (Import)","lang":"ko-KR","frontmatter":{"description":"Vault Transit - Import (BYOK)","tag":["vault","transit"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/02-Secret_Engine/transit-import.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Transit (Import)"}],["meta",{"property":"og:description","content":"Vault Transit - Import (BYOK)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-21T11:08:02.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"transit"}],["meta",{"property":"article:modified_time","content":"2023-09-21T11:08:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Transit (Import)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-21T11:08:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. CLI","slug":"_1-cli","link":"#_1-cli","children":[]},{"level":2,"title":"2. OpenSSL을 사용하여 암복호화","slug":"_2-openssl을-사용하여-암복호화","link":"#_2-openssl을-사용하여-암복호화","children":[{"level":3,"title":"2.1 RSA 키 생성","slug":"_2-1-rsa-키-생성","link":"#_2-1-rsa-키-생성","children":[]},{"level":3,"title":"2.2 RSA 키로 암호화","slug":"_2-2-rsa-키로-암호화","link":"#_2-2-rsa-키로-암호화","children":[]},{"level":3,"title":"2.3 RSA 키로 복호화","slug":"_2-3-rsa-키로-복호화","link":"#_2-3-rsa-키로-복호화","children":[]}]},{"level":2,"title":"3. Vault Transit로 키 가져오기","slug":"_3-vault-transit로-키-가져오기","link":"#_3-vault-transit로-키-가져오기","children":[{"level":3,"title":"3.1 PEM 형식의 키를 DER로 변환","slug":"_3-1-pem-형식의-키를-der로-변환","link":"#_3-1-pem-형식의-키를-der로-변환","children":[]},{"level":3,"title":"3.2 Run Vault dev mode & Transit Enable (Option)","slug":"_3-2-run-vault-dev-mode-transit-enable-option","link":"#_3-2-run-vault-dev-mode-transit-enable-option","children":[]},{"level":3,"title":"3.3 Transit Import","slug":"_3-3-transit-import","link":"#_3-3-transit-import","children":[]},{"level":3,"title":"3.4 Transit으로 암호화/복호화","slug":"_3-4-transit으로-암호화-복호화","link":"#_3-4-transit으로-암호화-복호화","children":[]}]},{"level":2,"title":"4. 키 버전 추가","slug":"_4-키-버전-추가","link":"#_4-키-버전-추가","children":[]},{"level":2,"title":"5. 주의 사항","slug":"_5-주의-사항","link":"#_5-주의-사항","children":[]}],"git":{"createdTime":1695292702000,"updatedTime":1695294482000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2}]},"readingTime":{"minutes":22.67,"words":1360},"filePathRelative":"04-HashiCorp/06-Vault/02-Secret_Engine/transit-import.md","localizedDate":"2023년 9월 21일","excerpt":"\\n<p>키 가져오기(Import) 기능은 HSM, 사용자 정의 키, 기타 외부 시스템에서 기존 키를 가져와야 하는 경우를 지원한다. 공개키(Public Key)만을 가져올 수도 있다.</p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">links</p>\\n<ul>\\n<li>\\n<p>Article : <a href=\\"https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://support.hashicorp.com/hc/en-us/articles/9742464723987-Importing-keys-into-transit-secret-engine-BYOK</a></p>\\n</li>\\n<li>\\n<p>CLI : <a href=\\"https://developer.hashicorp.com/vault/docs/commands/transit/import\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://developer.hashicorp.com/vault/docs/commands/transit/import</a></p>\\n</li>\\n<li>\\n<p>API : <a href=\\"https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://developer.hashicorp.com/vault/api-docs/secret/transit#import-key</a></p>\\n</li>\\n</ul>\\n</div>"}');export{W as comp,P as data};
