import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-DwRVeH7t.js";const e={},p=t(`<h1 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx"><span>nginx</span></a></h1><ul><li>nomad와 consul로 cluster로 구성되어 있는 환경에 L4이후에 nomad로 LB를 해야할 경우 사용 <ul><li>nginx server_name설정에서 도메인을 받아오고 location에서는 각각의 서브도메인 별로 reverse proxy 동작 <ul><li>reverse proxy(up stream)에서는 각각의 consul의 등록된 서비스 호출</li></ul></li></ul></li></ul><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">&quot;nginx&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span>

  group <span class="token string">&quot;nginx&quot;</span> <span class="token punctuation">{</span>
    <span class="token comment">//인증서는 host volume에 업로드</span>
    volume <span class="token string">&quot;certs&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">type</span>      <span class="token punctuation">=</span> <span class="token string">&quot;host&quot;</span>
      <span class="token property">source</span>    <span class="token punctuation">=</span> <span class="token string">&quot;certs&quot;</span>
      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">&quot;http&quot;</span> <span class="token punctuation">{</span>
        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">80</span>
        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">80</span>
      <span class="token punctuation">}</span>
      port <span class="token string">&quot;https&quot;</span> <span class="token punctuation">{</span>
        <span class="token property">to</span>      <span class="token punctuation">=</span> <span class="token number">443</span>
        <span class="token property">static</span>  <span class="token punctuation">=</span> <span class="token number">443</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;nginx&quot;</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
      <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;web&quot;</span><span class="token punctuation">]</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>    
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">&quot;tcp&quot;</span>
        <span class="token property">port</span>     <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">&quot;server&quot;</span> <span class="token punctuation">{</span>

      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;docker&quot;</span>

      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span>
        <span class="token property">volume</span>      <span class="token punctuation">=</span> <span class="token string">&quot;certs&quot;</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;/etc/nginx/certs&quot;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">&quot;nginx&quot;</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;http&quot;</span>,<span class="token string">&quot;https&quot;</span><span class="token punctuation">]</span>
        <span class="token comment">#ports = [&quot;http&quot;,&quot;https&quot;]</span>
        <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;local:/etc/nginx/conf.d&quot;</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF

upstream login.shoping.co.kr {
{{ range service &quot;login&quot; }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}
upstream singup.shoping.co.kr {
{{ range service &quot;signup&quot; }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}
upstream main.shoping.co.kr {
{{ range service &quot;main&quot; }}
  server {{ .Address }}:{{ .Port }};
{{ else }}server 127.0.0.1:65535; # force a 502
{{ end }}
}

server {
   listen 80;
   listen 443 ssl;
   //domain 및 subdomain호출
   server_name *.shoping.co.kr;
   ssl_certificate &quot;/etc/nginx/certs/server.pem&quot;;
   ssl_certificate_key &quot;/etc/nginx/certs/server.key&quot;;
   proxy_read_timeout      300;
   proxy_buffers           64 16k;

   //각 sub도메인별
   location / {
      if ($host = login.shoping.co.kr) {
        proxy_pass login.shoping.co.kr;
      }
      if ($host = singup.shoping.co.kr) {
        proxy_pass singup.shoping.co.kr;
      }
      if ($host !~ &quot;(.*main)&quot;) {
        proxy_pass main.shoping.co.kr;
      }
   }
}



EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">&quot;local/load-balancer.conf&quot;</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">&quot;signal&quot;</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">&quot;SIGHUP&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2000</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(e,[["render",i],["__file","nginx.html.vue"]]),k=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html","title":"nginx","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job","reverse proxy","consul service discovery"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/nginx.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"nginx"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:tag","content":"reverse proxy"}],["meta",{"property":"article:tag","content":"consul service discovery"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"nginx\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1633418665000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"swbs90","email":"swbs9000@gmail.com","commits":1}]},"readingTime":{"minutes":3.33,"words":200},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/nginx.md","localizedDate":"2021년 10월 5일","excerpt":"\\n<ul>\\n<li>nomad와 consul로 cluster로 구성되어 있는 환경에 L4이후에 nomad로 LB를 해야할 경우 사용\\n<ul>\\n<li>nginx server_name설정에서 도메인을 받아오고 location에서는 각각의 서브도메인 별로 reverse proxy 동작\\n<ul>\\n<li>reverse proxy(up stream)에서는 각각의 consul의 등록된 서비스 호출</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"language-hcl\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code>job <span class=\\"token string\\">\\"nginx\\"</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">datacenters</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"dc1\\"</span><span class=\\"token punctuation\\">]</span>\\n\\n  group <span class=\\"token string\\">\\"nginx\\"</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">//인증서는 host volume에 업로드</span>\\n    volume <span class=\\"token string\\">\\"certs\\"</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">type</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"host\\"</span>\\n      <span class=\\"token property\\">source</span>    <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"certs\\"</span>\\n      <span class=\\"token property\\">read_only</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n    <span class=\\"token punctuation\\">}</span>\\n \\n    <span class=\\"token keyword\\">network</span> <span class=\\"token punctuation\\">{</span>\\n      port <span class=\\"token string\\">\\"http\\"</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">static</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">80</span>\\n        <span class=\\"token property\\">to</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">80</span>\\n      <span class=\\"token punctuation\\">}</span>\\n      port <span class=\\"token string\\">\\"https\\"</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">to</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">443</span>\\n        <span class=\\"token property\\">static</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">443</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">service</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">name</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nginx\\"</span>\\n      <span class=\\"token property\\">port</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"http\\"</span>\\n      <span class=\\"token property\\">tags</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"web\\"</span><span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token keyword\\">check</span> <span class=\\"token punctuation\\">{</span>    \\n        <span class=\\"token property\\">type</span>     <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"tcp\\"</span>\\n        <span class=\\"token property\\">port</span>     <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"http\\"</span>\\n        <span class=\\"token property\\">interval</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"2s\\"</span>\\n        <span class=\\"token property\\">timeout</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"2s\\"</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    task <span class=\\"token string\\">\\"server\\"</span> <span class=\\"token punctuation\\">{</span>\\n\\n      <span class=\\"token property\\">driver</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"docker\\"</span>\\n\\n      <span class=\\"token keyword\\">volume_mount</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">volume</span>      <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"certs\\"</span>\\n        <span class=\\"token property\\">destination</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"/etc/nginx/certs\\"</span>\\n      <span class=\\"token punctuation\\">}</span>\\n\\n      <span class=\\"token keyword\\">config</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">image</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nginx\\"</span>\\n        <span class=\\"token property\\">ports</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"http\\"</span>,<span class=\\"token string\\">\\"https\\"</span><span class=\\"token punctuation\\">]</span>\\n        <span class=\\"token comment\\">#ports = [\\"http\\",\\"https\\"]</span>\\n        <span class=\\"token property\\">volumes</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span>\\n          <span class=\\"token string\\">\\"local:/etc/nginx/conf.d\\"</span>,\\n        <span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token punctuation\\">}</span>\\n\\n      <span class=\\"token keyword\\">template</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">data</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token heredoc string\\">&lt;&lt;EOF\\n\\nupstream login.shoping.co.kr {\\n{{ range service \\"login\\" }}\\n  server {{ .Address }}:{{ .Port }};\\n{{ else }}server 127.0.0.1:65535; # force a 502\\n{{ end }}\\n}\\nupstream singup.shoping.co.kr {\\n{{ range service \\"signup\\" }}\\n  server {{ .Address }}:{{ .Port }};\\n{{ else }}server 127.0.0.1:65535; # force a 502\\n{{ end }}\\n}\\nupstream main.shoping.co.kr {\\n{{ range service \\"main\\" }}\\n  server {{ .Address }}:{{ .Port }};\\n{{ else }}server 127.0.0.1:65535; # force a 502\\n{{ end }}\\n}\\n\\nserver {\\n   listen 80;\\n   listen 443 ssl;\\n   //domain 및 subdomain호출\\n   server_name *.shoping.co.kr;\\n   ssl_certificate \\"/etc/nginx/certs/server.pem\\";\\n   ssl_certificate_key \\"/etc/nginx/certs/server.key\\";\\n   proxy_read_timeout      300;\\n   proxy_buffers           64 16k;\\n\\n   //각 sub도메인별\\n   location / {\\n      if ($host = login.shoping.co.kr) {\\n        proxy_pass login.shoping.co.kr;\\n      }\\n      if ($host = singup.shoping.co.kr) {\\n        proxy_pass singup.shoping.co.kr;\\n      }\\n      if ($host !~ \\"(.*main)\\") {\\n        proxy_pass main.shoping.co.kr;\\n      }\\n   }\\n}\\n\\n\\n\\nEOF</span>\\n\\n        <span class=\\"token property\\">destination</span>   <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"local/load-balancer.conf\\"</span>\\n        <span class=\\"token property\\">change_mode</span>   <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"signal\\"</span>\\n        <span class=\\"token property\\">change_signal</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"SIGHUP\\"</span>\\n      <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token keyword\\">resources</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">cpu</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">2000</span>\\n        <span class=\\"token property\\">memory</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">2000</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n\\n</code></pre></div>"}');export{d as comp,k as data};
