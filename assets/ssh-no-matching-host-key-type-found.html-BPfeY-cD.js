import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,h as n}from"./app-BWMI_1Y2.js";const t={},o=n(`<h1 id="ssh-returns-no-matching-host-key-type-found" tabindex="-1"><a class="header-anchor" href="#ssh-returns-no-matching-host-key-type-found"><span>SSH returns - no matching host key type found</span></a></h1><h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue"><span>Issue</span></a></h2><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ <span class="token function">ssh</span> root@192.168.1.1</span>
<span class="line"></span>
<span class="line">Unable to negotiate with <span class="token number">192.168</span>.1.1 port <span class="token number">22</span>: no matching <span class="token function">host</span> key <span class="token builtin class-name">type</span> found. Their offer: ssh-rsa</span>
<span class="line"></span></code></pre></div><p>일부 환경 설정 및 SSH 버전에 따라 SSH에 사용되는 특정 키가 비활성화되어있는 경우 이같은 오류 메시지가 발생합니다. 이것은 <a href="https://www.openssh.com/legacy.html" target="_blank" rel="noopener noreferrer">OpenSSH Legacy Options</a>에 개시된 글의 내용을 확인해볼 수 있습니다.</p><blockquote><p>OpenSSH는 표준을 준수하는 SSH 구현과의 호환성에 필요한 모든 암호화 알고리즘을 구현하지만, 일부 구형 알고리즘이 취약한 것으로 밝혀졌기 때문에 모든 알고리즘이 기본적으로 사용하도록 설정되어 있지는 않습니다.</p></blockquote><p>위 메시지는 <code>ssh-rsa</code> 타입에 대해 비활성화 된 상태 입니다.</p><h2 id="해결-방법-1" tabindex="-1"><a class="header-anchor" href="#해결-방법-1"><span>해결 방법 1</span></a></h2><p>접속 시 옵션에 추가</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-oHostKeyAlgorithms</span><span class="token operator">=</span>+ssh-rsa root@192.168.1.1</span>
<span class="line"></span></code></pre></div><h2 id="해결-방법-2" tabindex="-1"><a class="header-anchor" href="#해결-방법-2"><span>해결 방법 2</span></a></h2><p>매번 키 알고리즘을 지정할 필요가 없도록 호스트 패턴을 <code>~/.ssh/config</code>에 추가</p><div class="language-ini" data-highlighter="prismjs" data-ext="ini" data-title="~/.ssh/config"><pre class="language-ini"><code><span class="line">...</span>
<span class="line"></span>
<span class="line">Host 192.168.1.1</span>
<span class="line">  <span class="token key attr-name">HostKeyAlgorithms</span><span class="token punctuation">=</span><span class="token value attr-value">+ssh-rsa</span></span>
<span class="line"></span></code></pre></div>`,12),p=[o];function i(r,c){return e(),a("div",null,p)}const d=s(t,[["render",i],["__file","ssh-no-matching-host-key-type-found.html.vue"]]),u=JSON.parse('{"path":"/01-Infrastructure/Linux/TroubleShooting/ssh-no-matching-host-key-type-found.html","title":"SSH returns - no matching host key type found","lang":"ko-KR","frontmatter":{"description":"SSH returns - no matching host key type found.","tag":["ssh"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/01-Infrastructure/Linux/TroubleShooting/ssh-no-matching-host-key-type-found.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"SSH returns - no matching host key type found"}],["meta",{"property":"og:description","content":"SSH returns - no matching host key type found."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-04-09T01:23:44.000Z"}],["meta",{"property":"article:tag","content":"ssh"}],["meta",{"property":"article:modified_time","content":"2024-04-09T01:23:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SSH returns - no matching host key type found\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-09T01:23:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Issue","slug":"issue","link":"#issue","children":[]},{"level":2,"title":"해결 방법 1","slug":"해결-방법-1","link":"#해결-방법-1","children":[]},{"level":2,"title":"해결 방법 2","slug":"해결-방법-2","link":"#해결-방법-2","children":[]}],"git":{"createdTime":1712625824000,"updatedTime":1712625824000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":1.22,"words":73},"filePathRelative":"01-Infrastructure/Linux/TroubleShooting/ssh-no-matching-host-key-type-found.md","localizedDate":"2024년 4월 9일","excerpt":"\\n<h2>Issue</h2>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\">$ <span class=\\"token function\\">ssh</span> root@192.168.1.1</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">Unable to negotiate with <span class=\\"token number\\">192.168</span>.1.1 port <span class=\\"token number\\">22</span>: no matching <span class=\\"token function\\">host</span> key <span class=\\"token builtin class-name\\">type</span> found. Their offer: ssh-rsa</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{d as comp,u as data};