import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,h as p}from"./app-BWMI_1Y2.js";const t={},e=p(`<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb"><span>MongoDB</span></a></h1><div class="language-hcl line-numbers-mode" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line">job <span class="token string">&quot;mongodb&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  group <span class="token string">&quot;mongodb&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">      port <span class="token string">&quot;db&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">27017</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">&quot;db&quot;</span></span>
<span class="line">      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">&quot;nomad&quot;</span></span>
<span class="line">      <span class="token keyword">check</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">&quot;tcp&quot;</span></span>
<span class="line">        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span></span>
<span class="line">        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">&quot;mongodb&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;docker&quot;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">&quot;mongo:3.6.21&quot;</span></span>
<span class="line">        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;db&quot;</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">env</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">MONGO_INITDB_ROOT_USERNAME</span> <span class="token punctuation">=</span> <span class="token string">&quot;admin&quot;</span></span>
<span class="line">        <span class="token property">MONGO_INITDB_ROOT_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">&quot;password&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[e];function l(c,i){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","mongodb.html.vue"]]),k=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html","title":"MongoDB","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job"],"author":"Ung","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"MongoDB"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:55:52.000Z"}],["meta",{"property":"article:author","content":"Ung"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:55:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MongoDB\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T06:55:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ung\\"}]}"]]},"headers":[],"git":{"createdTime":1632449108000,"updatedTime":1709880952000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"ung","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":0.9,"words":54},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/mongodb.md","localizedDate":"2021년 9월 24일","excerpt":"\\n<div class=\\"language-hcl\\" data-highlighter=\\"prismjs\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code><span class=\\"line\\">job <span class=\\"token string\\">\\"mongodb\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token property\\">datacenters</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"dc1\\"</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">  group <span class=\\"token string\\">\\"mongodb\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">network</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      port <span class=\\"token string\\">\\"db\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">static</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">27017</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">service</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"db\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">provider</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nomad\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">check</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">type</span>     <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"tcp\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">interval</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"10s\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">timeout</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"2s\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">    task <span class=\\"token string\\">\\"mongodb\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">driver</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"docker\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">config</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">image</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"mongo:3.6.21\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">ports</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"db\\"</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">env</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">MONGO_INITDB_ROOT_USERNAME</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"admin\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">MONGO_INITDB_ROOT_PASSWORD</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"password\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">resources</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">cpu</span>    <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">2000</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">memory</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">1024</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre></div>","copyright":{"author":"Ung"}}');export{d as comp,k as data};