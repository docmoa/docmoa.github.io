import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DwRVeH7t.js";const t={},p=e(`<h1 id="code-server" tabindex="-1"><a class="header-anchor" href="#code-server"><span>code-server</span></a></h1><ul><li>vs-code를 local이 아닌 환경에서 사용할 수 있도록 도와주는 code-server의 예시입니다.</li><li>이 code의 변수는 nomad variable를 활용해서 배포합니다.</li></ul><h2 id="변수-선언" tabindex="-1"><a class="header-anchor" href="#변수-선언"><span>변수 선언</span></a></h2><ul><li>web ui 접근 password와 code-server terminal에서 사용 할 sudo의 password 를 변수로 선언했습니다.</li></ul><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># nomad var put {path기반의 varialbes} key=vaule</span>
$ nomad var put code/config <span class="token assign-left variable">password</span><span class="token operator">=</span>password
</code></pre></div><h2 id="job-sample" tabindex="-1"><a class="header-anchor" href="#job-sample"><span>job sample</span></a></h2><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">&quot;010-code-server&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span>
  <span class="token property">type</span>        <span class="token punctuation">=</span> <span class="token string">&quot;service&quot;</span>

  group <span class="token string">&quot;code-server&quot;</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">&quot;http&quot;</span> <span class="token punctuation">{</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">8443</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">8443</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;code-server&quot;</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">&quot;nomad&quot;</span>

      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
        <span class="token property">path</span>     <span class="token punctuation">=</span> <span class="token string">&quot;/&quot;</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">&quot;30s&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">&quot;code-server-runner&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;docker&quot;</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
{{ with nomadVar &quot;code/config&quot; }}
PASSWORD={{ .password }}
SUDO_PASSWORD={{ .password }}
{{ end }}
EOH</span>

  <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;secrets/file.env&quot;</span>
  <span class="token property">env</span>         <span class="token punctuation">=</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>


      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">&quot;linuxserver/code-server&quot;</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">PGID</span><span class="token punctuation">=</span><span class="token number">1000</span>
        <span class="token property">PUID</span><span class="token punctuation">=</span><span class="token number">1000</span>
      <span class="token punctuation">}</span>


      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">900</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[p];function i(l,c){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","code-server.html.vue"]]),v=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/code-server.html","title":"code-server","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job","vs-code"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/code-server.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"code-server"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:tag","content":"vs-code"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"code-server\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"변수 선언","slug":"변수-선언","link":"#변수-선언","children":[]},{"level":2,"title":"job sample","slug":"job-sample","link":"#job-sample","children":[]}],"git":{"createdTime":1669181764000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"이웅희","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":2.03,"words":122},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/code-server.md","localizedDate":"2022년 11월 23일","excerpt":"\\n<ul>\\n<li>vs-code를 local이 아닌 환경에서 사용할 수 있도록 도와주는 code-server의 예시입니다.</li>\\n<li>이 code의 변수는 nomad variable를 활용해서 배포합니다.</li>\\n</ul>\\n<h2>변수 선언</h2>\\n<ul>\\n<li>web ui 접근 password와 code-server terminal에서 사용 할 sudo의 password 를 변수로 선언했습니다.</li>\\n</ul>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># nomad var put {path기반의 varialbes} key=vaule</span>\\n$ nomad var put code/config <span class=\\"token assign-left variable\\">password</span><span class=\\"token operator\\">=</span>password\\n</code></pre></div>"}');export{u as comp,v as data};
