import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as i,b as n,a as l,w as o,e as p,d as c}from"./app-DwRVeH7t.js";const r="/assets/nomad_das-DbYtaXiA.png",u={},d=n("h1",{id:"dynamic-application-sizing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dynamic-application-sizing"},[n("span",null,"Dynamic application sizing")])],-1),v=n("ul",null,[n("li",null,"Nomad autoscaler 배포 후 사용할 수 있는 기능 중에 하나"),n("li",null,"Dynamic application sizing(DAS)의 기능이 설정되어 있는 job을 배포 한 이후 autoscaler job에서 resource의 권고를 받아올 수 있음"),n("li",null,"권고 받은 값을 사용자가 확인 후 허용할 경우 job의 resource의 변화가 정상적으로 적용됨")],-1),m=n("h2",{id:"autoscaler-job은-기존에-사용하던-job을-사용",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autoscaler-job은-기존에-사용하던-job을-사용"},[n("span",null,"autoscaler job은 기존에 사용하던 job을 사용")])],-1),k=p(`<div class="hint-container tip"><p class="hint-container-title">팁</p><p>테스트 및 사용전 확인해야 할 사항은 Nomad의 enterprise, 즉 라이선스가 필요하며, nomad-autosclaer의 경우에도 enterprise여야만 합니다.</p></div><h3 id="demo-job의-배포" tabindex="-1"><a class="header-anchor" href="#demo-job의-배포"><span>Demo job의 배포</span></a></h3><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>job <span class="token string-literal"><span class="token string">&quot;example&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;dc1&quot;</span></span><span class="token punctuation">]</span>

  group <span class="token string-literal"><span class="token string">&quot;cache-lb&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span>

    network <span class="token punctuation">{</span>
      port <span class="token string-literal"><span class="token string">&quot;lb&quot;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string-literal"><span class="token string">&quot;nginx&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span>

      config <span class="token punctuation">{</span>
        image <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;nginx&quot;</span></span>
        ports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;lb&quot;</span></span><span class="token punctuation">]</span>
        volumes <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token comment"># It&#39;s safe to mount this path as a file because it won&#39;t re-render.</span>
          <span class="token string-literal"><span class="token string">&quot;local/nginx.conf:/etc/nginx/nginx.conf&quot;</span></span><span class="token punctuation">,</span>
          <span class="token comment"># This path hosts files that will re-render with Consul Template.</span>
          <span class="token string-literal"><span class="token string">&quot;local/nginx:/etc/nginx/conf.d&quot;</span></span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token comment"># This template overwrites the embedded nginx.conf file so it loads</span>
      <span class="token comment"># conf.d/*.conf files outside of the \`http\` block.</span>
      template <span class="token punctuation">{</span>
        data        <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOF</span></span><span class="token string">
user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
include /etc/nginx/conf.d/*.conf;
</span><span class="token delimiter"><span class="token symbol">EOF</span></span></span>
        destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/nginx.conf&quot;</span></span>
      <span class="token punctuation">}</span>

      <span class="token comment"># This template creates a TCP proxy to Redis.</span>
      template <span class="token punctuation">{</span>
        data          <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOF</span></span><span class="token string">
stream {
  server {
    listen {{ env &quot;NOMAD_PORT_lb&quot; }};
    proxy_pass backend;
  }
  upstream backend {
  {{ range nomadService &quot;redis&quot; }}
    server {{ .Address }}:{{ .Port }};
  {{ else }}server 127.0.0.1:65535; # force a 502
  {{ end }}
  }
}
</span><span class="token delimiter"><span class="token symbol">EOF</span></span></span>
        destination   <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/nginx/nginx.conf&quot;</span></span>
        change_mode   <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;signal&quot;</span></span>
        change_signal <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;SIGHUP&quot;</span></span>
      <span class="token punctuation">}</span>

      resources <span class="token punctuation">{</span>
        cpu    <span class="token operator">=</span> <span class="token number">50</span>
        memory <span class="token operator">=</span> <span class="token number">10</span>
      <span class="token punctuation">}</span>

      scaling <span class="token string-literal"><span class="token string">&quot;cpu&quot;</span></span> <span class="token punctuation">{</span>
        policy <span class="token punctuation">{</span>
          cooldown            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;1m&quot;</span></span>
          evaluation_interval <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;10s&quot;</span></span>

          check <span class="token string-literal"><span class="token string">&quot;95pct&quot;</span></span> <span class="token punctuation">{</span>
            strategy <span class="token string-literal"><span class="token string">&quot;app-sizing-percentile&quot;</span></span> <span class="token punctuation">{</span>
              percentile <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;95&quot;</span></span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      scaling <span class="token string-literal"><span class="token string">&quot;mem&quot;</span></span> <span class="token punctuation">{</span>
        policy <span class="token punctuation">{</span>
          cooldown            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;1m&quot;</span></span>
          evaluation_interval <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;10s&quot;</span></span>

          check <span class="token string-literal"><span class="token string">&quot;max&quot;</span></span> <span class="token punctuation">{</span>
            strategy <span class="token string-literal"><span class="token string">&quot;app-sizing-max&quot;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    service <span class="token punctuation">{</span>
      name         <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis-lb&quot;</span></span>
      port         <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;lb&quot;</span></span>
      address_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;host&quot;</span></span>
      provider     <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;nomad&quot;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  group <span class="token string-literal"><span class="token string">&quot;cache&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">3</span>

    network <span class="token punctuation">{</span>
      port <span class="token string-literal"><span class="token string">&quot;db&quot;</span></span> <span class="token punctuation">{</span>
        to <span class="token operator">=</span> <span class="token number">6379</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string-literal"><span class="token string">&quot;redis&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span>

      config <span class="token punctuation">{</span>
        image <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis:6.0&quot;</span></span>
        ports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;db&quot;</span></span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      resources <span class="token punctuation">{</span>
        cpu    <span class="token operator">=</span> <span class="token number">500</span>
        memory <span class="token operator">=</span> <span class="token number">256</span>
      <span class="token punctuation">}</span>

      scaling <span class="token string-literal"><span class="token string">&quot;cpu&quot;</span></span> <span class="token punctuation">{</span>
        policy <span class="token punctuation">{</span>
          cooldown            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;1m&quot;</span></span>
          evaluation_interval <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;10s&quot;</span></span>

          check <span class="token string-literal"><span class="token string">&quot;95pct&quot;</span></span> <span class="token punctuation">{</span>
            strategy <span class="token string-literal"><span class="token string">&quot;app-sizing-percentile&quot;</span></span> <span class="token punctuation">{</span>
              percentile <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;95&quot;</span></span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      scaling <span class="token string-literal"><span class="token string">&quot;mem&quot;</span></span> <span class="token punctuation">{</span>
        policy <span class="token punctuation">{</span>
          cooldown            <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;1m&quot;</span></span>
          evaluation_interval <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;10s&quot;</span></span>

          check <span class="token string-literal"><span class="token string">&quot;max&quot;</span></span> <span class="token punctuation">{</span>
            strategy <span class="token string-literal"><span class="token string">&quot;app-sizing-max&quot;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      service <span class="token punctuation">{</span>
        name         <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis&quot;</span></span>
        port         <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;db&quot;</span></span>
        address_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;host&quot;</span></span>
        provider     <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;nomad&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="부하-테스트용-job-배포" tabindex="-1"><a class="header-anchor" href="#부하-테스트용-job-배포"><span>부하 테스트용 job 배포</span></a></h3><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>job <span class="token string-literal"><span class="token string">&quot;das-load-test&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;dc1&quot;</span></span><span class="token punctuation">]</span>
  type        <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;batch&quot;</span></span>

  parameterized <span class="token punctuation">{</span>
    payload       <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;optional&quot;</span></span>
    meta_optional <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;requests&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;clients&quot;</span></span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  group <span class="token string-literal"><span class="token string">&quot;redis-benchmark&quot;</span></span> <span class="token punctuation">{</span>
    task <span class="token string-literal"><span class="token string">&quot;redis-benchmark&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span>

      config <span class="token punctuation">{</span>
        image   <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis:6.0&quot;</span></span>
        command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;redis-benchmark&quot;</span></span>

        args <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token string-literal"><span class="token string">&quot;-h&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;\${HOST}&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;-p&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;\${PORT}&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;-n&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;\${REQUESTS}&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;-c&quot;</span></span><span class="token punctuation">,</span>
          <span class="token string-literal"><span class="token string">&quot;\${CLIENTS}&quot;</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      template <span class="token punctuation">{</span>
        destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;secrets/env.txt&quot;</span></span>
        env         <span class="token operator">=</span> <span class="token boolean">true</span>

        data <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOF</span></span><span class="token string">
{{ with nomadService &quot;redis-lb&quot; }}{{ with index . 0 -}}
HOST={{.Address}}
PORT={{.Port}}
{{- end }}{{ end }}
REQUESTS={{ or (env &quot;NOMAD_META_requests&quot;) &quot;100000&quot; }}
CLIENTS={{  or (env &quot;NOMAD_META_clients&quot;) &quot;50&quot; }}
</span><span class="token delimiter"><span class="token symbol">EOF</span></span></span>
      <span class="token punctuation">}</span>

      resources <span class="token punctuation">{</span>
        cpu    <span class="token operator">=</span> <span class="token number">100</span>
        memory <span class="token operator">=</span> <span class="token number">128</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="부하테스트를-진행하고-nomad-ui에서-optimize의-recommended의-값이-변화하였고-accept를-눌러-줄-경우-target-job의-스펙이-변화합니다" tabindex="-1"><a class="header-anchor" href="#부하테스트를-진행하고-nomad-ui에서-optimize의-recommended의-값이-변화하였고-accept를-눌러-줄-경우-target-job의-스펙이-변화합니다"><span>부하테스트를 진행하고 nomad ui에서 Optimize의 Recommended의 값이 변화하였고, Accept를 눌러 줄 경우 target job의 스펙이 변화합니다.</span></a></h3><figure><img src="`+r+'" alt="nomad Optimize" tabindex="0" loading="lazy"><figcaption>nomad Optimize</figcaption></figure>',7);function b(g,q){const s=e("RouteLink");return t(),i("div",null,[d,v,m,n("ul",null,[n("li",null,[l(s,{to:"/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html"},{default:o(()=>[c("AutoScaler job")]),_:1})])]),k])}const _=a(u,[["render",b],["__file","DAS.html.vue"]]),j=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html","title":"Dynamic application sizing","lang":"ko-KR","frontmatter":{"description":"Nomad Dynamic application sizing","tag":["Nomad","sample","job","autoscaler","das"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Dynamic application sizing"}],["meta",{"property":"og:description","content":"Nomad Dynamic application sizing"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"sample"}],["meta",{"property":"article:tag","content":"job"}],["meta",{"property":"article:tag","content":"autoscaler"}],["meta",{"property":"article:tag","content":"das"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Dynamic application sizing\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"autoscaler job은 기존에 사용하던 job을 사용","slug":"autoscaler-job은-기존에-사용하던-job을-사용","link":"#autoscaler-job은-기존에-사용하던-job을-사용","children":[{"level":3,"title":"Demo job의 배포","slug":"demo-job의-배포","link":"#demo-job의-배포","children":[]},{"level":3,"title":"부하 테스트용 job 배포","slug":"부하-테스트용-job-배포","link":"#부하-테스트용-job-배포","children":[]},{"level":3,"title":"부하테스트를 진행하고 nomad ui에서 Optimize의 Recommended의 값이 변화하였고, Accept를 눌러 줄 경우 target job의 스펙이 변화합니다.","slug":"부하테스트를-진행하고-nomad-ui에서-optimize의-recommended의-값이-변화하였고-accept를-눌러-줄-경우-target-job의-스펙이-변화합니다","link":"#부하테스트를-진행하고-nomad-ui에서-optimize의-recommended의-값이-변화하였고-accept를-눌러-줄-경우-target-job의-스펙이-변화합니다","children":[]}]}],"git":{"createdTime":1664763179000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"swbs90","email":"swbs90@naver.com","commits":1}]},"readingTime":{"minutes":6.17,"words":370},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/DAS.md","localizedDate":"2022년 10월 3일","excerpt":"\\n<ul>\\n<li>Nomad autoscaler 배포 후 사용할 수 있는 기능 중에 하나</li>\\n<li>Dynamic application sizing(DAS)의 기능이 설정되어 있는 job을 배포 한 이후 autoscaler job에서 resource의 권고를 받아올 수 있음</li>\\n<li>권고 받은 값을 사용자가 확인 후 허용할 경우 job의 resource의 변화가 정상적으로 적용됨</li>\\n</ul>\\n<h2>autoscaler job은 기존에 사용하던 job을 사용</h2>\\n<ul>\\n<li><a href=\\"/04-HashiCorp/07-Nomad/05-SampleJob/DAS.html\\" target=\\"_blank\\">AutoScaler job</a></li>\\n</ul>"}');export{_ as comp,j as data};
