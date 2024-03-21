import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,b as n,d as s,a as e,e as c}from"./app-DwRVeH7t.js";const r={},p=n("h1",{id:"autoscaler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#autoscaler"},[n("span",null,"Autoscaler")])],-1),u=n("li",null,"aws cloud 환경에서 별도의 모니터링 툴을 사용하지 않고 nomad-apm 기능을 이용한 auscaler 구성",-1),d={href:"https://releases.hashicorp.com/nomad-autoscaler/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://hub.docker.com/r/hashicorp/nomad-autoscaler",target:"_blank",rel:"noopener noreferrer"},v={href:"https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.nomadproject.io/tools/autoscaling/policy",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad",target:"_blank",rel:"noopener noreferrer"},q=c(`<h2 id="nomad-autoscaler-sample-job" tabindex="-1"><a class="header-anchor" href="#nomad-autoscaler-sample-job"><span>Nomad Autoscaler - sample job</span></a></h2><ul><li>Nomad Autoscaler는 Container환경과 Non-Container환경 모두 설치 가능</li><li>디버깅이 필요한 경우 <code>log_level = &quot;DEBUG&quot;</code> 옵션 설정</li><li>Nomad Autoscaler sampe job의 <code>target &quot;aws-asg&quot;</code> 설정방법 <ul><li>aws_asg_name은 aws cloud 환경의 Auto Scaling 그룹에 존재해야 함.</li><li>node_class는 nomad client에 동일하게 설정해야 함.</li></ul></li><li>주요 튜닝 포인트 <ul><li><code>policy</code>의 cooldown, evaluation_interval 값을 워크로드 특성에 맞게 적절하게 설정</li></ul></li><li>오토스케일링 기준 <ul><li>메모리 : <code>check &quot;mem_allocated_percentage&quot;</code></li><li>cpu : <code>check &quot;cpu_allocated_percentage&quot;</code></li></ul></li></ul><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">locals</span> <span class="token punctuation">{</span>
    <span class="token property">autoscaler_ver</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.3.3&quot;</span>
    <span class="token comment">#autoscaler_ver = &quot;0.3.5&quot;</span>
<span class="token punctuation">}</span>

job <span class="token string">&quot;autoscalerEnt&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span>

  group <span class="token string">&quot;autoscalerEnt&quot;</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">&quot;http&quot;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">&quot;autoscaler&quot;</span> <span class="token punctuation">{</span>
      <span class="token comment">// docker 기반의 Nomad Autoscaler는 다음과 같이 설정 </span>
      <span class="token comment">//   driver = &quot;docker&quot;</span>
      <span class="token comment">//   config {</span>
      <span class="token comment">//     image   = &quot;hashicorp/nomad-autoscaler-enterprise:0.3.3&quot;</span>
      <span class="token comment">//     command = &quot;nomad-autoscaler&quot;</span>
      <span class="token comment">//     args = [</span>
      <span class="token comment">//       &quot;agent&quot;,</span>
      <span class="token comment">//       &quot;-config&quot;,</span>
      <span class="token comment">//       &quot;$\${NOMAD_TASK_DIR}/config.hcl&quot;,</span>
      <span class="token comment">//       &quot;-policy-dir&quot;,</span>
      <span class="token comment">//       &quot;$\${NOMAD_TASK_DIR}/policies/&quot;,</span>
      <span class="token comment">//     ]</span>
      <span class="token comment">//     ports = [&quot;http&quot;]</span>
      <span class="token comment">//   }</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;exec&quot;</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;/usr/local/bin/nomad-autoscaler&quot;</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;agent&quot;</span>,
          <span class="token string">&quot;-config&quot;</span>,
          <span class="token string">&quot;$\${NOMAD_TASK_DIR}/config.hcl&quot;</span>,
          <span class="token string">&quot;-http-bind-address&quot;</span>,
          <span class="token string">&quot;0.0.0.0&quot;</span>,
          <span class="token string">&quot;-http-bind-port&quot;</span>,
          <span class="token string">&quot;$\${NOMAD_PORT_http}&quot;</span>,
          <span class="token string">&quot;-policy-dir&quot;</span>,
          <span class="token string">&quot;$\${NOMAD_TASK_DIR}/policies/&quot;</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">artifact</span> <span class="token punctuation">{</span>
        <span class="token property">source</span>      <span class="token punctuation">=</span> <span class="token string">&quot;https://releases.hashicorp.com/nomad-autoscaler/<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">autoscaler_ver</span><span class="token punctuation">}</span></span>+ent/nomad-autoscaler_<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">local</span><span class="token punctuation">.</span><span class="token type variable">autoscaler_ver</span><span class="token punctuation">}</span></span>+ent_linux_amd64.zip&quot;</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;/usr/local/bin&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span>        <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
nomad {
  address = &quot;http://{{env &quot;attr.unique.network.ip-address&quot; }}:4646&quot;  #Adding nomad server addresss
  token = &quot;&lt;#Adding nomad server token &gt;&quot;  
}

apm &quot;nomad-apm&quot; {
  driver = &quot;nomad-apm&quot;
  config  = {
    address = &quot;http://{{env &quot;attr.unique.network.ip-address&quot; }}:4646&quot;
  }  
}

dynamic_application_sizing {
  // Lower the evaluate interval so we can reproduce recommendations after only
  // 5 minutes, rather than having to wait for 24hrs as is the default.
  evaluate_after = &quot;5m&quot;
}

#log_level = &quot;DEBUG&quot;

target &quot;aws-asg&quot; {
  driver = &quot;aws-asg&quot;
  config = {
    aws_region = &quot;{{ $x := env &quot;attr.platform.aws.placement.availability-zone&quot; }}{{ $length := len $x |subtract 1 }}{{ slice $x 0 $length}}&quot;
  }
}

strategy &quot;target-value&quot; {
  driver = &quot;target-value&quot;
}

  EOF</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;$\${NOMAD_TASK_DIR}/config.hcl&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
scaling &quot;cluster_policy_media&quot; {
  enabled = true
  min     = 1
  max     = 100
  
  policy {
    cooldown            = &quot;5m&quot;
    evaluation_interval = &quot;20s&quot;
    
    check &quot;mem_allocated_percentage&quot; {
      source = &quot;nomad-apm&quot;
      query  = &quot;percentage-allocated_memory&quot;
      strategy &quot;target-value&quot; {
        target = 82
      }
    }

    // check &quot;cpu_allocated_percentage&quot; {
    //   source = &quot;nomad-apm&quot;
    //   query  = &quot;percentage-allocated_cpu&quot;

    //   strategy &quot;target-value&quot; {
    //     target = 80
    //   }
    // }    

    target &quot;aws-asg&quot; {
      dry-run             = &quot;false&quot;
      aws_asg_name        = &quot;nomad_client_media_autoscaler&quot; 
      node_class          = &quot;client_web&quot;
      node_drain_deadline = &quot;3m&quot;
      node_purge          = &quot;true&quot;
    }
  }
}

EOF</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;$\${NOMAD_TASK_DIR}/policies/hashistack.hcl&quot;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">200</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">256</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">service</span> <span class="token punctuation">{</span>
        <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;autoscaler&quot;</span>
        <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
        <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">&quot;nomad&quot;</span>
        
        <span class="token keyword">check</span> <span class="token punctuation">{</span>
          <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">&quot;http&quot;</span>
          <span class="token property">path</span>     <span class="token punctuation">=</span> <span class="token string">&quot;/v1/health&quot;</span>
          <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">&quot;5s&quot;</span>
          <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">&quot;2s&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(_,w){const a=o("ExternalLinkIcon");return i(),l("div",null,[p,n("ul",null,[u,n("li",null,[s("Nomad Autoscaler 다운로드 : "),n("ul",null,[n("li",null,[s("VM환경: "),n("a",d,[s("https://releases.hashicorp.com/nomad-autoscaler/"),e(a)])]),n("li",null,[s("Container환경: "),n("a",m,[s("https://hub.docker.com/r/hashicorp/nomad-autoscaler"),e(a)]),s(" , "),n("a",v,[s("https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise"),e(a)])])])]),n("li",null,[s("주요링크 "),n("ul",null,[n("li",null,[s("Nomad Autoscaler aws IAM policy 관련 : "),n("a",b,[s("https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg"),e(a)])]),n("li",null,[s("Nomad Autoscaler policy 관련 : "),n("a",k,[s("https://www.nomadproject.io/tools/autoscaling/policy"),e(a)])]),n("li",null,[s("Nomad Autoscaler의 nomad-apm 을 사용하는 경우 : "),n("a",h,[s("https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad"),e(a)])])])])]),q])}const A=t(r,[["render",g],["__file","autoscaler.html.vue"]]),N=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html","title":"Autoscaler","lang":"ko-KR","frontmatter":{"description":"Nomad autoscaler for aws","tag":["Nomad","sample","job","autoscaler","aws"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Autoscaler"}],["meta",{"property":"og:description","content":"Nomad autoscaler for aws"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:55:52.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"sample"}],["meta",{"property":"article:tag","content":"job"}],["meta",{"property":"article:tag","content":"autoscaler"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:55:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Autoscaler\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T06:55:52.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Nomad Autoscaler - sample job","slug":"nomad-autoscaler-sample-job","link":"#nomad-autoscaler-sample-job","children":[]}],"git":{"createdTime":1644990252000,"updatedTime":1709880952000,"contributors":[{"name":"Euimokna-cn","email":"myneck@cnmail.co.kr","commits":3},{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"euimokna","email":"31657666+euimokna@users.noreply.github.com","commits":1},{"name":"ung","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":6.05,"words":363},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.md","localizedDate":"2022년 2월 16일","excerpt":"\\n<ul>\\n<li>aws cloud 환경에서 별도의 모니터링 툴을 사용하지 않고 nomad-apm 기능을 이용한 auscaler 구성</li>\\n<li>Nomad Autoscaler 다운로드 :\\n<ul>\\n<li>VM환경: <a href=\\"https://releases.hashicorp.com/nomad-autoscaler/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://releases.hashicorp.com/nomad-autoscaler/</a></li>\\n<li>Container환경: <a href=\\"https://hub.docker.com/r/hashicorp/nomad-autoscaler\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://hub.docker.com/r/hashicorp/nomad-autoscaler</a> , <a href=\\"https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise</a></li>\\n</ul>\\n</li>\\n<li>주요링크\\n<ul>\\n<li>Nomad Autoscaler aws IAM policy 관련 : <a href=\\"https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg</a></li>\\n<li>Nomad Autoscaler policy 관련 : <a href=\\"https://www.nomadproject.io/tools/autoscaling/policy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nomadproject.io/tools/autoscaling/policy</a></li>\\n<li>Nomad Autoscaler의 nomad-apm 을 사용하는 경우 : <a href=\\"https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad</a></li>\\n</ul>\\n</li>\\n</ul>"}');export{A as comp,N as data};
