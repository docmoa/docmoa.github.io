import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,h as p}from"./app-BWMI_1Y2.js";const e={},l=p(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><ul><li>nomad와 consul로 cluster로 구성되어 있는 환경에 L4이후에 nomad로 LB를 해야할 경우 사용 <ul><li>nginx server_name설정에서 도메인을 받아오고 location에서는 각각의 서브도메인 별로 reverse proxy 동작 <ul><li>reverse proxy(up stream)에서는 각각의 consul의 등록된 서비스 호출</li></ul></li></ul></li></ul><div class="language-hcl line-numbers-mode" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line">job <span class="token string">&quot;nginx&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  group <span class="token string">&quot;nginx&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//인증서는 host volume에 업로드</span></span>
<span class="line">    volume <span class="token string">&quot;certs&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">type</span>      <span class="token punctuation">=</span> <span class="token string">&quot;host&quot;</span></span>
<span class="line">      <span class="token property">source</span>    <span class="token punctuation">=</span> <span class="token string">&quot;certs&quot;</span></span>
<span class="line">      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">      port <span class="token string">&quot;http&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">80</span></span>
<span class="line">        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">80</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      port <span class="token string">&quot;https&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">443</span></span>
<span class="line">        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">443</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;nginx&quot;</span></span>
<span class="line">      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span></span>
<span class="line">      <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">check</span> <span class="token punctuation">{</span>    </span>
<span class="line">        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">&quot;tcp&quot;</span></span>
<span class="line">        <span class="token property">port</span>     <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span></span>
<span class="line">        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span></span>
<span class="line">        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">&quot;server&quot;</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;docker&quot;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">volume</span>      <span class="token punctuation">=</span> <span class="token string">&quot;certs&quot;</span></span>
<span class="line">        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;/etc/nginx/certs&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">&quot;nginx&quot;</span></span>
<span class="line">        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span>,<span class="token string">&quot;https&quot;</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token comment">#ports = [&quot;http&quot;,&quot;https&quot;]</span></span>
<span class="line">        <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">&quot;local:/etc/nginx/conf.d&quot;</span>,</span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF</span>
<span class="line"></span>
<span class="line">upstream login.shoping.co.kr {</span>
<span class="line">{{ range service &quot;login&quot; }}</span>
<span class="line">  server {{ .Address }}:{{ .Port }};</span>
<span class="line">{{ else }}server 127.0.0.1:65535; # force a 502</span>
<span class="line">{{ end }}</span>
<span class="line">}</span>
<span class="line">upstream singup.shoping.co.kr {</span>
<span class="line">{{ range service &quot;signup&quot; }}</span>
<span class="line">  server {{ .Address }}:{{ .Port }};</span>
<span class="line">{{ else }}server 127.0.0.1:65535; # force a 502</span>
<span class="line">{{ end }}</span>
<span class="line">}</span>
<span class="line">upstream main.shoping.co.kr {</span>
<span class="line">{{ range service &quot;main&quot; }}</span>
<span class="line">  server {{ .Address }}:{{ .Port }};</span>
<span class="line">{{ else }}server 127.0.0.1:65535; # force a 502</span>
<span class="line">{{ end }}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">server {</span>
<span class="line">   listen 80;</span>
<span class="line">   listen 443 ssl;</span>
<span class="line">   //domain 및 subdomain호출</span>
<span class="line">   server_name *.shoping.co.kr;</span>
<span class="line">   ssl_certificate &quot;/etc/nginx/certs/server.pem&quot;;</span>
<span class="line">   ssl_certificate_key &quot;/etc/nginx/certs/server.key&quot;;</span>
<span class="line">   proxy_read_timeout      300;</span>
<span class="line">   proxy_buffers           64 16k;</span>
<span class="line"></span>
<span class="line">   //각 sub도메인별</span>
<span class="line">   location / {</span>
<span class="line">      if ($host = login.shoping.co.kr) {</span>
<span class="line">        proxy_pass login.shoping.co.kr;</span>
<span class="line">      }</span>
<span class="line">      if ($host = singup.shoping.co.kr) {</span>
<span class="line">        proxy_pass singup.shoping.co.kr;</span>
<span class="line">      }</span>
<span class="line">      if ($host !~ &quot;(.*main)&quot;) {</span>
<span class="line">        proxy_pass main.shoping.co.kr;</span>
<span class="line">      }</span>
<span class="line">   }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">&quot;local/load-balancer.conf&quot;</span></span>
<span class="line">        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">&quot;signal&quot;</span></span>
<span class="line">        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">&quot;SIGHUP&quot;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">2000</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2000</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[l];function i(c,o){return n(),a("div",null,t)}const d=s(e,[["render",i],["__file","nginx.html.vue"]]),k=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html","title":"nginx","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job","reverse proxy","consul service discovery"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:tag","content":"reverse proxy"}],["meta",{"property":"article:tag","content":"consul service discovery"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1633418665000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"swbs90","email":"swbs9000@gmail.com","commits":1}]},"readingTime":{"minutes":3.33,"words":200},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/nginx.md","localizedDate":"2021년 10월 5일","excerpt":"\\n<ul>\\n<li>nomad와 consul로 cluster로 구성되어 있는 환경에 L4이후에 nomad로 LB를 해야할 경우 사용\\n<ul>\\n<li>nginx server_name설정에서 도메인을 받아오고 location에서는 각각의 서브도메인 별로 reverse proxy 동작\\n<ul>\\n<li>reverse proxy(up stream)에서는 각각의 consul의 등록된 서비스 호출</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"language-hcl\\" data-highlighter=\\"prismjs\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code><span class=\\"line\\">job <span class=\\"token string\\">\\"nginx\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">  <span class=\\"token property\\">datacenters</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"dc1\\"</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">  group <span class=\\"token string\\">\\"nginx\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">    <span class=\\"token comment\\">//인증서는 host volume에 업로드</span></span>\\n<span class=\\"line\\">    volume <span class=\\"token string\\">\\"certs\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">type</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"host\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">source</span>    <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"certs\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">read_only</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"> </span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">network</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      port <span class=\\"token string\\">\\"http\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">static</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">80</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">to</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">80</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">      port <span class=\\"token string\\">\\"https\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">to</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">443</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">static</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">443</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">    <span class=\\"token keyword\\">service</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">name</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nginx\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"http\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">tags</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"web\\"</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">check</span> <span class=\\"token punctuation\\">{</span>    </span>\\n<span class=\\"line\\">        <span class=\\"token property\\">type</span>     <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"tcp\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">port</span>     <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"http\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">interval</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"2s\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">timeout</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"2s\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">    task <span class=\\"token string\\">\\"server\\"</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token property\\">driver</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"docker\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">volume_mount</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">volume</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"certs\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">destination</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"/etc/nginx/certs\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">config</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">image</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nginx\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">ports</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"http\\"</span>,<span class=\\"token string\\">\\"https\\"</span><span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\">        <span class=\\"token comment\\">#ports = [\\"http\\",\\"https\\"]</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">volumes</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span></span>\\n<span class=\\"line\\">          <span class=\\"token string\\">\\"local:/etc/nginx/conf.d\\"</span>,</span>\\n<span class=\\"line\\">        <span class=\\"token punctuation\\">]</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">template</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">data</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token heredoc string\\">&lt;&lt;EOF</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">upstream login.shoping.co.kr {</span>\\n<span class=\\"line\\">{{ range service \\"login\\" }}</span>\\n<span class=\\"line\\">  server {{ .Address }}:{{ .Port }};</span>\\n<span class=\\"line\\">{{ else }}server 127.0.0.1:65535; # force a 502</span>\\n<span class=\\"line\\">{{ end }}</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">upstream singup.shoping.co.kr {</span>\\n<span class=\\"line\\">{{ range service \\"signup\\" }}</span>\\n<span class=\\"line\\">  server {{ .Address }}:{{ .Port }};</span>\\n<span class=\\"line\\">{{ else }}server 127.0.0.1:65535; # force a 502</span>\\n<span class=\\"line\\">{{ end }}</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">upstream main.shoping.co.kr {</span>\\n<span class=\\"line\\">{{ range service \\"main\\" }}</span>\\n<span class=\\"line\\">  server {{ .Address }}:{{ .Port }};</span>\\n<span class=\\"line\\">{{ else }}server 127.0.0.1:65535; # force a 502</span>\\n<span class=\\"line\\">{{ end }}</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">server {</span>\\n<span class=\\"line\\">   listen 80;</span>\\n<span class=\\"line\\">   listen 443 ssl;</span>\\n<span class=\\"line\\">   //domain 및 subdomain호출</span>\\n<span class=\\"line\\">   server_name *.shoping.co.kr;</span>\\n<span class=\\"line\\">   ssl_certificate \\"/etc/nginx/certs/server.pem\\";</span>\\n<span class=\\"line\\">   ssl_certificate_key \\"/etc/nginx/certs/server.key\\";</span>\\n<span class=\\"line\\">   proxy_read_timeout      300;</span>\\n<span class=\\"line\\">   proxy_buffers           64 16k;</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">   //각 sub도메인별</span>\\n<span class=\\"line\\">   location / {</span>\\n<span class=\\"line\\">      if ($host = login.shoping.co.kr) {</span>\\n<span class=\\"line\\">        proxy_pass login.shoping.co.kr;</span>\\n<span class=\\"line\\">      }</span>\\n<span class=\\"line\\">      if ($host = singup.shoping.co.kr) {</span>\\n<span class=\\"line\\">        proxy_pass singup.shoping.co.kr;</span>\\n<span class=\\"line\\">      }</span>\\n<span class=\\"line\\">      if ($host !~ \\"(.*main)\\") {</span>\\n<span class=\\"line\\">        proxy_pass main.shoping.co.kr;</span>\\n<span class=\\"line\\">      }</span>\\n<span class=\\"line\\">   }</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">EOF</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">destination</span>   <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"local/load-balancer.conf\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">change_mode</span>   <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"signal\\"</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">change_signal</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"SIGHUP\\"</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">      <span class=\\"token keyword\\">resources</span> <span class=\\"token punctuation\\">{</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">cpu</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">2000</span></span>\\n<span class=\\"line\\">        <span class=\\"token property\\">memory</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">2000</span></span>\\n<span class=\\"line\\">      <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">    <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\">  <span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"><span class=\\"token punctuation\\">}</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{d as comp,k as data};