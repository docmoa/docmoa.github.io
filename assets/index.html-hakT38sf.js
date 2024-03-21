import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as k,r as c,o as p,c as l,b as n,F as m,g as d,d as a,a as s,e as g,w as h,t as r,h as y}from"./app-DwRVeH7t.js";const b=()=>[{path:"/04-HashiCorp/06-Vault/04-UseCase/API-security.html",title:"API 보안을 위한 Vault 활용 (API Key)",lang:"ko-KR",frontmatter:{description:"API 보안을 위한 Vault 활용",tag:["vault","token","pki","mTLS"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/API-security.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"API 보안을 위한 Vault 활용 (API Key)"}],["meta",{property:"og:description",content:"API 보안을 위한 Vault 활용"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-19T23:38:02.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"vault"}],["meta",{property:"article:tag",content:"token"}],["meta",{property:"article:tag",content:"pki"}],["meta",{property:"article:tag",content:"mTLS"}],["meta",{property:"article:modified_time",content:"2024-03-19T23:38:02.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"API 보안을 위한 Vault 활용 (API Key)","image":[""],"dateModified":"2024-03-19T23:38:02.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"1. API를 위한 인증과 인가, API \bKey",slug:"_1-api를-위한-인증과-인가-api-key",link:"#_1-api를-위한-인증과-인가-api-key",children:[]},{level:2,title:"2. API Key를 위한 Vault 요소",slug:"_2-api-key를-위한-vault-요소",link:"#_2-api-key를-위한-vault-요소",children:[{level:3,title:"2.1 Vault Token",slug:"_2-1-vault-token",link:"#_2-1-vault-token",children:[]},{level:3,title:"2.2 Vault Token Role",slug:"_2-2-vault-token-role",link:"#_2-2-vault-token-role",children:[]},{level:3,title:"2.3 자동화",slug:"_2-3-자동화",link:"#_2-3-자동화",children:[]}]}],git:{createdTime:1710859305e3,updatedTime:1710891482e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:5}]},readingTime:{minutes:30.62,words:1837},filePathRelative:"04-HashiCorp/06-Vault/04-UseCase/API-security.md",localizedDate:"2024년 3월 19일",excerpt:`
<blockquote>
<p>참고 1: <a href="https://owasp.org/API-Security/editions/2023/en/0x11-t10/" target="_blank" rel="noopener noreferrer">OWASP Top 10 API Securit Risks - 2023</a><br>
참고 2: <a href="https://cf-assets.www.cloudflare.com/slt3lc6tev37/5zfIEoxvRDHLRbkBaLJqsT/c712b0273971194774fc7326b3b1da34/Whitepaper_A-Guide-to-API-Security_Korean_20220622.pdf" target="_blank" rel="noopener noreferrer">Cloudflare API 보안 가이드</a></p>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html",title:"nomad-pack custom registry",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","nomad-pack","vuepress"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"nomad-pack custom registry"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:56:11.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"nomad-pack"}],["meta",{property:"article:tag",content:"vuepress"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:56:11.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"nomad-pack custom registry","image":[""],"dateModified":"2024-03-08T06:56:11.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"Docker image build",slug:"docker-image-build",link:"#docker-image-build",children:[]},{level:2,title:"vcs 구성",slug:"vcs-구성",link:"#vcs-구성",children:[{level:3,title:"디렉토리 구조",slug:"디렉토리-구조",link:"#디렉토리-구조",children:[]}]},{level:2,title:"nomad-pack registry 등록 및 실행",slug:"nomad-pack-registry-등록-및-실행",link:"#nomad-pack-registry-등록-및-실행",children:[]},{level:2,title:"작동 확인",slug:"작동-확인",link:"#작동-확인",children:[]}],git:{createdTime:16395807e5,updatedTime:1709880971e3,contributors:[{name:"ung",email:"swbs90@naver.com",commits:2},{name:"ung",email:"ung@mz.co.kr",commits:2},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:8.85,words:531},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.md",localizedDate:"2021년 12월 16일",excerpt:`
<ul>
<li>nomad job파일을 템플릿처럼 다룰 수 있게 해주는 고마운 기능
<ul>
<li>nomad-pack custom 메뉴얼 주소 및 커뮤니티 registry
<ul>
<li>nomad-pack: <a href="https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md</a></li>
<li>커뮤니티 registry : <a href="https://github.com/hashicorp/nomad-pack-community-registry" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack-community-registry</a></li>
</ul>
</li>
</ul>
</li>
<li>해당 예제는 Vue.js의 vuepress기반의 컨테이너
<ul>
<li>참조링크
<ul>
<li>gitlab: <a href="https://gitlab.com/swbs9000/vuepress" target="_blank" rel="noopener noreferrer">https://gitlab.com/swbs9000/vuepress</a></li>
<li>docker: <a href="https://hub.docker.com/repository/docker/swbs90/vuepress" target="_blank" rel="noopener noreferrer">https://hub.docker.com/repository/docker/swbs90/vuepress</a> CLI: docker push swbs90/vuepress:0.0.3</li>
<li>vuepress: <a href="https://github.com/docmoa/docs" target="_blank" rel="noopener noreferrer">https://github.com/docmoa/docs</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html",title:"Autoscaler",lang:"ko-KR",frontmatter:{description:"Nomad autoscaler for aws",tag:["Nomad","sample","job","autoscaler","aws"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Autoscaler"}],["meta",{property:"og:description",content:"Nomad autoscaler for aws"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"sample"}],["meta",{property:"article:tag",content:"job"}],["meta",{property:"article:tag",content:"autoscaler"}],["meta",{property:"article:tag",content:"aws"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Autoscaler","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[]}']]},headers:[{level:2,title:"Nomad Autoscaler - sample job",slug:"nomad-autoscaler-sample-job",link:"#nomad-autoscaler-sample-job",children:[]}],git:{createdTime:1644990252e3,updatedTime:1709880952e3,contributors:[{name:"Euimokna-cn",email:"myneck@cnmail.co.kr",commits:3},{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"euimokna",email:"31657666+euimokna@users.noreply.github.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:6.05,words:363},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.md",localizedDate:"2022년 2월 16일",excerpt:`
<ul>
<li>aws cloud 환경에서 별도의 모니터링 툴을 사용하지 않고 nomad-apm 기능을 이용한 auscaler 구성</li>
<li>Nomad Autoscaler 다운로드 :
<ul>
<li>VM환경: <a href="https://releases.hashicorp.com/nomad-autoscaler/" target="_blank" rel="noopener noreferrer">https://releases.hashicorp.com/nomad-autoscaler/</a></li>
<li>Container환경: <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler</a> , <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise</a></li>
</ul>
</li>
<li>주요링크
<ul>
<li>Nomad Autoscaler aws IAM policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg</a></li>
<li>Nomad Autoscaler policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/policy" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/policy</a></li>
<li>Nomad Autoscaler의 nomad-apm 을 사용하는 경우 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad</a></li>
</ul>
</li>
</ul>`},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html",title:"Elastic",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Elastic"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Elastic","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[],git:{createdTime:1632449108e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:2.03,words:122},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/elastic.md",localizedDate:"2021년 9월 24일",excerpt:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"db"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
      <span class="token punctuation">}</span>
      port <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">5601</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span>
      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/elasticsearch/elasticsearch:6.8.9"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span><span class="token punctuation">]</span>
        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span>
            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/elasticsearch/config/elasticsearch.yml"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
network.host: 0.0.0.0
discovery.seed_hosts: ["127.0.0.1"]
xpack.security.enabled: true
xpack.license.self_generated.type: trial
xpack.monitoring.collection.enabled: true
EOH</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token comment"># "discovery.type":"single-node",</span>
        <span class="token property">ES_JAVA_OPTS</span> <span class="token punctuation">=</span> <span class="token string">"-Xms512m -Xmx1024m"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/kibana/kibana:6.8.9"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span>
        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span>
            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/kibana/config/kibana.yml"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
server.name: kibana
elasticsearch.username: elastic
elasticsearch.password: elastic
EOH</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">ELASTICSEARCH_URL</span><span class="token punctuation">=</span><span class="token string">"http://172.28.128.31:9200"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html",title:"elk_version7",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","elk"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"elk_version7"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"elk"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"elk_version7","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"7버전에 elsaticsearch에서 기본패스워드를 찾지 못해서 env로 넣어줌",slug:"_7버전에-elsaticsearch에서-기본패스워드를-찾지-못해서-env로-넣어줌",link:"#_7버전에-elsaticsearch에서-기본패스워드를-찾지-못해서-env로-넣어줌",children:[]},{level:2,title:"logstash는 적당한 샘플을 찾지 못해서 일단은 비워둠",slug:"logstash는-적당한-샘플을-찾지-못해서-일단은-비워둠",link:"#logstash는-적당한-샘플을-찾지-못해서-일단은-비워둠",children:[]}],git:{createdTime:1642040133e3,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"swbs90@naver.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:4.08,words:245},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.md",localizedDate:"2022년 1월 13일",excerpt:`
<h2>7버전에 elsaticsearch에서 기본패스워드를 찾지 못해서 env로 넣어줌</h2>
<h2>logstash는 적당한 샘플을 찾지 못해서 일단은 비워둠</h2>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"elk"</span> <span class="token punctuation">{</span>

    <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

    <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
        <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>kernel<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>"</span>
        <span class="token property">value</span> <span class="token punctuation">=</span> <span class="token string">"linux"</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">update</span> <span class="token punctuation">{</span>
        <span class="token property">stagger</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">max_parallel</span> <span class="token punctuation">=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    group <span class="token string">"elk"</span> <span class="token punctuation">{</span>
        <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

        <span class="token keyword">restart</span> <span class="token punctuation">{</span>
            <span class="token property">attempts</span> <span class="token punctuation">=</span> <span class="token number">2</span>
            <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"1m"</span>
            <span class="token property">delay</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span>
            <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"delay"</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">network</span> <span class="token punctuation">{</span>
          port <span class="token string">"elastic"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">9200</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5601</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

           <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
             <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
             <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
           <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"elasticsearch:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"elastic"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml"</span>,
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
cluster.name: "my-cluster"
network.host: 0.0.0.0
discovery.type: single-node
discovery.seed_hosts: ["127.0.0.1"]
xpack.security.enabled: true
xpack.license.self_generated.type: trial
xpack.monitoring.collection.enabled: true
EOF</span>
        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>
            <span class="token keyword">env</span> <span class="token punctuation">{</span>
              <span class="token property">ELASTIC_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-elasticsearch"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2048</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"kibana"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"kibana:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/kibana.yml:/usr/share/kibana/config/kibana.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
#
# ** THIS IS AN AUTO-GENERATED FILE **
#

# Default Kibana configuration for docker target
server.host: "0.0.0.0"
server.shutdownTimeout: "5s"
elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
elasticsearch.username: elastic
elasticsearch.password: elastic
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-kibana"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"kibana"</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
                <span class="token keyword">check</span> <span class="token punctuation">{</span>
                    <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"http"</span>
                    <span class="token property">path</span> <span class="token punctuation">=</span> <span class="token string">"/"</span>
                    <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
                    <span class="token property">timeout</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1200</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        task <span class="token string">"logstash"</span> <span class="token punctuation">{</span>
            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

            <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span>
              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">config</span> <span class="token punctuation">{</span>
                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"logstash:7.16.2"</span>
                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"logstash"</span><span class="token punctuation">]</span>
                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">"local/logstash.yml:/usr/share/logstash/config/logstash.yml"</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
http.host: "0.0.0.0"
xpack.monitoring.elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]
EOF</span>

        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/logstash.yml"</span>
        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span>
        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span>
      <span class="token punctuation">}</span>

            <span class="token keyword">service</span> <span class="token punctuation">{</span>
                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-logstash"</span>
                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"logstash"</span>
                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">resources</span> <span class="token punctuation">{</span>
                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">200</span>
                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html",title:"Nomad ingress gateway",lang:"ko-KR",frontmatter:{description:"Nomad ingress gateway with consul",tag:["Nomad","Sample","Job",""],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Nomad ingress gateway"}],["meta",{property:"og:description",content:"Nomad ingress gateway with consul"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Nomad ingress gateway","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"Nomad job으로 ingress gateway 사용하기 (with consul)",slug:"nomad-job으로-ingress-gateway-사용하기-with-consul",link:"#nomad-job으로-ingress-gateway-사용하기-with-consul",children:[{level:3,title:"테스트 job (python fastapi)",slug:"테스트-job-python-fastapi",link:"#테스트-job-python-fastapi",children:[]}]},{level:2,title:"만약 service가 http로 떠야한다면 아래와 같이 service등록도 진행해야한다.",slug:"만약-service가-http로-떠야한다면-아래와-같이-service등록도-진행해야한다",link:"#만약-service가-http로-떠야한다면-아래와-같이-service등록도-진행해야한다",children:[]},{level:2,title:"ingress job",slug:"ingress-job",link:"#ingress-job",children:[]}],git:{createdTime:164015281e4,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"admin",email:"sulee@expernet.co.kr",commits:1},{name:"ung",email:"swbs90@naver.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:2.92,words:175},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.md",localizedDate:"2021년 12월 22일",excerpt:`
<h2>Nomad job으로 ingress gateway 사용하기 (with consul)</h2>
<ul>
<li>consul로 설정하는 ingress gateway가 아닌 Nomad job 기동 시에 ingress gateway 활성화 예제
<ul>
<li>hashicorp 공식 예제가 아닌 다른 걸 해보려하다, 특이한 부분을 확인하여 공유합니다.</li>
</ul>
</li>
<li>사전에 Consul Server는 구축되어 있어야 합니다.</li>
</ul>
<h3>테스트 job (python fastapi)</h3>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"22-fastapi"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"fastapi"</span> <span class="token punctuation">{</span>

    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"bridge"</span>
      <span class="token comment">#service가 80으로 뜸, 만약 다른 포트로 뜨는 서비스를 사용 할 경우 image와 to만 변경</span>
      port <span class="token string">"http"</span> <span class="token punctuation">{</span>
        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">80</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"fastapi"</span>
      <span class="token comment">#여기서 port에 위에서 미리 선언한 http를 쓸 경우 다이나믹한 port를 가져오는데 </span>
      <span class="token comment">#그럴 경우 ingress gateway에서 못 읽어 온다.</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"80"</span>
      <span class="token keyword">connect</span> <span class="token punctuation">{</span>
        sidecar_service<span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"fastapi"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"tiangolo/uvicorn-gunicorn-fastapi"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">282</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">scaling</span>  <span class="token punctuation">{</span>
      <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
      <span class="token property">min</span>     <span class="token punctuation">=</span> <span class="token number">1</span>
      <span class="token property">max</span>     <span class="token punctuation">=</span> <span class="token number">3</span>

      <span class="token keyword">policy</span> <span class="token punctuation">{</span>
        <span class="token property">evaluation_interval</span> <span class="token punctuation">=</span> <span class="token string">"5s"</span>
        <span class="token property">cooldown</span>            <span class="token punctuation">=</span> <span class="token string">"1m"</span>
        <span class="token comment">#driver = "nomad-apm"</span>
        check <span class="token string">"mem_allocated_percentage"</span> <span class="token punctuation">{</span>
          <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"nomad-apm"</span>
          <span class="token property">query</span>  <span class="token punctuation">=</span> <span class="token string">"max_memory"</span>

          strategy <span class="token string">"target-value"</span> <span class="token punctuation">{</span>
            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token number">80</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html",title:"Nomad에서 Ansible로 Docker 설치와 Template 주의사항",lang:"ko-KR",frontmatter:{description:"Nomad에서 Aisnble 실행 및 템플릿 주의사항",tag:["Nomad","Ansible","Job","Docker"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Nomad에서 Ansible로 Docker 설치와 Template 주의사항"}],["meta",{property:"og:description",content:"Nomad에서 Aisnble 실행 및 템플릿 주의사항"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Ansible"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"Docker"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Nomad에서 Ansible로 Docker 설치와 Template 주의사항","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[],git:{createdTime:1693402327e3,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:3},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:4.23,words:254},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.md",localizedDate:"2023년 8월 30일",excerpt:`
<blockquote>
<p>참고 : <a href="https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525</a></p>
</blockquote>
<p>Nomad를 통해 Ops작업을 수행할 때 <code>sysbatch</code> 타입의 Job에 Ansible을 <code>raw_exec</code>로 실행하면 전체 노드에서 일괄로 작업을 수행할 수 있다.</p>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html",title:"Wildfly(Jboss)",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","wildfly","JBoss"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Wildfly(Jboss)"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"wildfly"}],["meta",{property:"article:tag",content:"JBoss"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Wildfly(Jboss)","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"Dockerfile과 비교",slug:"dockerfile과-비교",link:"#dockerfile과-비교",children:[]},{level:2,title:"Sample Job",slug:"sample-job",link:"#sample-job",children:[]}],git:{createdTime:1639892483e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:3},{name:"ung",email:"swbs90@naver.com",commits:3},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:5.27,words:316},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/jboss.md",localizedDate:"2021년 12월 19일",excerpt:`
<blockquote>
<p>image info : <a href="https://quay.io/repository/wildfly/wildfly?tab=info" target="_blank" rel="noopener noreferrer">https://quay.io/repository/wildfly/wildfly?tab=info</a><br>
github : <a href="https://github.com/jboss-dockerfiles/wildfly" target="_blank" rel="noopener noreferrer">https://github.com/jboss-dockerfiles/wildfly</a><br>
wildfly docker example : <a href="http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/" target="_blank" rel="noopener noreferrer">http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/</a></p>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html",title:"Jenkins(Java Driver) on Nomad",lang:"ko-KR",frontmatter:{description:"Jenkins WAR 파일로 실행하기",tag:["Nomad","Sample","Job","Jenkins"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Jenkins(Java Driver) on Nomad"}],["meta",{property:"og:description",content:"Jenkins WAR 파일로 실행하기"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://www.datocms-assets.com/2885/1620146573-oversubscription.png?fit=max&fm=webp&q=80&w=2500"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"Jenkins"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Jenkins(Java Driver) on Nomad","image":["https://www.datocms-assets.com/2885/1620146573-oversubscription.png?fit=max&fm=webp&q=80&w=2500"],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"1. Jenkins의 기본 실행 방식",slug:"_1-jenkins의-기본-실행-방식",link:"#_1-jenkins의-기본-실행-방식",children:[]},{level:2,title:"2. Nomad에서의 Java 애플리케이션 실행의 의미",slug:"_2-nomad에서의-java-애플리케이션-실행의-의미",link:"#_2-nomad에서의-java-애플리케이션-실행의-의미",children:[]},{level:2,title:"3. Nomad 구성 요구사항",slug:"_3-nomad-구성-요구사항",link:"#_3-nomad-구성-요구사항",children:[{level:3,title:"3.1 Nomad Client",slug:"_3-1-nomad-client",link:"#_3-1-nomad-client",children:[]},{level:3,title:"3.2 Nomad Scheduler",slug:"_3-2-nomad-scheduler",link:"#_3-2-nomad-scheduler",children:[]}]},{level:2,title:"4. Job Sample",slug:"_4-job-sample",link:"#_4-job-sample",children:[]}],git:{createdTime:166773544e4,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:3},{name:"swbs90",email:"36329083+swbs90@users.noreply.github.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:6.48,words:389},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.md",localizedDate:"2022년 11월 6일",excerpt:`
<blockquote>
<p>Nomad</p>
<ul>
<li>Java Driver : <a href="https://developer.hashicorp.com/nomad/docs/drivers/java" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/docs/drivers/java</a></li>
<li>Schecuduler Config : <a href="https://developer.hashicorp.com/nomad/api-docs/operator/scheduler" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/api-docs/operator/scheduler</a></li>
</ul>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html",title:"Keycloak",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Keycloak"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Keycloak","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[],git:{createdTime:16324491e5,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:1.58,words:95},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/keycloak.md",localizedDate:"2021년 9월 24일",excerpt:`
<p>Keycloak은 Stateful 한 특성이 있어서 볼륨을 붙여주는것이 좋다.</p>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">// nomad namespace apply -description "Keycloak" keycloak</span>

job <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"service"</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>

  group <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    volume <span class="token string">"keycloak-vol"</span> <span class="token punctuation">{</span>
      <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"host"</span>
      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span>
        <span class="token property">volume</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/opt/jboss/keycloak/standalone/data"</span>
        <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"quay.io/keycloak/keycloak:14.0.0"</span>
        <span class="token keyword">port_map</span> <span class="token punctuation">{</span>
          <span class="token property">keycloak</span> <span class="token punctuation">=</span> <span class="token number">8080</span>
          <span class="token property">callback</span> <span class="token punctuation">=</span> <span class="token number">8250</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      
      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">KEYCLOAK_USER</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
        <span class="token property">KEYCLOAK_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">550</span>

        <span class="token keyword">network</span> <span class="token punctuation">{</span>
          port <span class="token string">"keycloak"</span> <span class="token punctuation">{</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18080</span>
          <span class="token punctuation">}</span>
          port <span class="token string">"callback"</span> <span class="token punctuation">{</span>
            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18250</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">service</span> <span class="token punctuation">{</span>
        <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>
        <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"auth"</span><span class="token punctuation">]</span>

        <span class="token keyword">check</span> <span class="token punctuation">{</span>
          <span class="token property">type</span>  <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
          <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
          <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
          <span class="token property">port</span>  <span class="token punctuation">=</span> <span class="token string">"keycloak"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html",title:"MongoDB",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/mongodb.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"MongoDB"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"MongoDB","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[],git:{createdTime:1632449108e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:.9,words:54},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/mongodb.md",localizedDate:"2021년 9월 24일",excerpt:`
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>

  group <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
    <span class="token keyword">network</span> <span class="token punctuation">{</span>
      port <span class="token string">"db"</span> <span class="token punctuation">{</span>
        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">27017</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">service</span> <span class="token punctuation">{</span>
      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span>
      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
      <span class="token keyword">check</span> <span class="token punctuation">{</span>
        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span>
        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span>
        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">"mongodb"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"mongo:3.6.21"</span>
        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">MONGO_INITDB_ROOT_USERNAME</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span>
        <span class="token property">MONGO_INITDB_ROOT_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"password"</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html",title:"param-batch-job",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","param","batch"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"param-batch-job"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"param"}],["meta",{property:"article:tag",content:"batch"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"param-batch-job","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[],git:{createdTime:1640585468e3,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"swbs90@naver.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:1.68,words:101},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.md",localizedDate:"2021년 12월 27일",excerpt:`
<ul>
<li>parameter를 받아와서 해당 값을 이용하여 다음으로 실행될 job의 값을 다이나믹하게 넣어 만드는 샘플
<ul>
<li>meta_required에 원하는 값을 넣고 template에 env "NOMAD_META_메타명(key)"와 같이 넣어주면 된다.</li>
</ul>
</li>
</ul>
<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">"24-paramete"</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"batch"</span>

  <span class="token keyword">parameterized</span> <span class="token punctuation">{</span>
    <span class="token property">payload</span>       <span class="token punctuation">=</span> <span class="token string">"forbidden"</span>
    <span class="token property">meta_required</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"room_num"</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  group <span class="token string">"run-main-job"</span> <span class="token punctuation">{</span>

    task <span class="token string">"run-main-job"</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"raw_exec"</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span>
        <span class="token comment"># arguments</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"job"</span>, <span class="token string">"run"</span>, <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>NOMAD_TASK_DIR<span class="token punctuation">}</span></span>/room.job"</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH

#####################

job "{{ env "NOMAD_META_room_num" }}" {
    datacenters = ["dc1"]

    group "jboss" {

        network {
            port "http" {
                to = "8080"
            }
        }
        service {
            port = "http"
            provider = "nomad"
            name = "{{ env "NOMAD_META_room_num" }}"
            check {
                type     = "tcp"
                interval = "10s"
                timeout  = "2s"
            }
        }
        task "http" {
            driver = "docker"
            config {
                image = "jboss/wildfly"
                ports = ["http"]
            }
            resources {
                cpu    = 500
                memory = 282
            }
        }
    }
}

EOH</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/room.job"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/scouter.html",title:"Scouter",lang:"ko-KR",frontmatter:{description:"Nomad + Consul Sample",tag:["Nomad","Consul","Scouter","Job"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/scouter.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Scouter"}],["meta",{property:"og:description",content:"Nomad + Consul Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Consul"}],["meta",{property:"article:tag",content:"Scouter"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Scouter","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"Scouter - Collector Server",slug:"scouter-collector-server",link:"#scouter-collector-server",children:[]},{level:2,title:"Scouter - Host Agent",slug:"scouter-host-agent",link:"#scouter-host-agent",children:[]},{level:2,title:"Tomcat Sample",slug:"tomcat-sample",link:"#tomcat-sample",children:[]}],git:{createdTime:1639485865e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:10.17,words:610},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/scouter.md",localizedDate:"2021년 12월 14일",excerpt:`
<ul>
<li>공식 Github : <a href="https://github.com/scouter-project/scouter" target="_blank" rel="noopener noreferrer">https://github.com/scouter-project/scouter</a></li>
<li>Scouter 다운로드
<ul>
<li>scouter collector와 host-agent 를 실행하는 job에서 버전정보를 기반으로 다운로드</li>
<li>host agent는 <code>system</code> 타입으로 모든 노드에서 실행되도록 구성</li>
</ul>
</li>
<li>tomcat 다운로드
<ul>
<li>다운로드 받지않고 호스트에 미리 설치해 놓는 방식이 더 가벼워보임 --&gt; 아마도 Packer, Terraform의 조합이면 가능</li>
<li>다운로드 받게 구성하면 컨테이너처럼 Nomad가 배포할 때마다 다운받아서 구성 가능</li>
</ul>
</li>
<li>Template - server.xml
<ul>
<li>server.xml 기본 구성에서 port가 선언되는 자리를 java option에서 받을 수 있도록 변경</li>
<li>Template 구성도 가능하고 미리 구성한 xml을 다운로드 받게 하는것도 괜찮아 보임</li>
</ul>
</li>
<li>Consul과 함께 구성된 경우 Nginx같은 LB 구성 Job 에서 backend를 동적으로 구성 가능</li>
<li>Nomad에 Scouter Collector와 Host Agent를 위한 별도 Namespace를 구성하는 것도 관리를 위해 좋아보임<br>
<code>nomad namespace apply -description "scouter" scouter</code></li>
</ul>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/sidecar-tomcat.html",title:"tomcat-sidecar",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","sidecar","tomcat"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/sidecar-tomcat.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"tomcat-sidecar"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"sidecar"}],["meta",{property:"article:tag",content:"tomcat"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"tomcat-sidecar","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[],git:{createdTime:1634806591e3,updatedTime:1709880952e3,contributors:[{name:"swbs90",email:"swbs90@naver.com",commits:2},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:1.4,words:84},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/sidecar-tomcat.md",localizedDate:"2021년 10월 21일",excerpt:`
<ul>
<li>참고 링크
<ul>
<li><a href="https://discuss.hashicorp.com/t/nomad-error-creating-an-ingress-gateway-with-sidecar-service/24731" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/nomad-error-creating-an-ingress-gateway-with-sidecar-service/24731</a></li>
</ul>
</li>
</ul>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html",title:"ACL Sample",lang:"ko-KR",frontmatter:{description:"Consul Acl Policy Sample",tag:["Consul","Acl","Policy"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"ACL Sample"}],["meta",{property:"og:description",content:"Consul Acl Policy Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-02-28T06:10:47.000Z"}],["meta",{property:"article:tag",content:"Consul"}],["meta",{property:"article:tag",content:"Acl"}],["meta",{property:"article:tag",content:"Policy"}],["meta",{property:"article:modified_time",content:"2024-02-28T06:10:47.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"ACL Sample","image":[""],"dateModified":"2024-02-28T06:10:47.000Z","author":[]}']]},headers:[{level:2,title:"Consul ACL Policy sample",slug:"consul-acl-policy-sample",link:"#consul-acl-policy-sample",children:[]},{level:2,title:"Consul이 Vault의 Storage로 되어야 할 경우",slug:"consul이-vault의-storage로-되어야-할-경우",link:"#consul이-vault의-storage로-되어야-할-경우",children:[]},{level:2,title:"Consul Dns query가 필요할 경우",slug:"consul-dns-query가-필요할-경우",link:"#consul-dns-query가-필요할-경우",children:[]},{level:2,title:"Consul UI 접근권한이 필요할 경우",slug:"consul-ui-접근권한이-필요할-경우",link:"#consul-ui-접근권한이-필요할-경우",children:[]}],git:{createdTime:1648777606e3,updatedTime:1709100647e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:2},{name:"ung",email:"swbs90@naver.com",commits:1}]},readingTime:{minutes:1.18,words:71},filePathRelative:"04-HashiCorp/04-Consul/02-Configuration/acl-sample.md",localizedDate:"2022년 4월 1일",excerpt:`
<h2>Consul ACL Policy sample</h2>
<p>Consul ACL을 활성화 할 경우 default를 deny로 할 지 allow를 할 지 정할 수 있다.<br>
deny로 할 경우에는 하나하나 policy로 tokne을 만들어서 사용해야 한다.</p>
<h2>Consul이 Vault의 Storage로 되어야 할 경우</h2>
<div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>key_prefix "vault/" {
  policy = "write"
}
service "vault" {
   policy = "write"
}
agent_prefix "" {
   policy = "read"
}
session_prefix "" {
   policy = "write"
}
</code></pre></div>`}],v=k({setup(){const o=b();return console.log(o),{pages:o}}}),f=n("h1",{id:"hashicorp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hashicorp"},[n("span",null,"HashiCorp")])],-1),_=n("h2",{id:"recent-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#recent-pages"},[n("span",null,"Recent pages")])],-1),w={key:0},S=n("h2",{id:"packer",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#packer"},[n("span",null,"Packer")])],-1),N=n("blockquote",null,[n("p",null,"다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구")],-1),T={href:"https://www.packer.io",target:"_blank",rel:"noopener noreferrer"},A=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"Alicloud / AWS / Azure / GCP / Naver Cloud / Oracle"),n("li",null,"Hyper-V / OpenStack / QEMU / Vagrant / VirtualBox / VMware"),n("li",null,"Docker / LXC")])],-1),C=n("h2",{id:"vagrant",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vagrant"},[n("span",null,"Vagrant")])],-1),R=n("blockquote",null,[n("p",null,"로컬 개발환경을 관리하는 프로비저닝 자동화 도구")],-1),O={href:"https://www.vagrantup.com",target:"_blank",rel:"noopener noreferrer"},D=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"Virtual Box"),n("li",null,"Hyper-V"),n("li",null,"VMware Workstation"),n("li",null,"Docker")])],-1),x=n("h2",{id:"terraform",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#terraform"},[n("span",null,"Terraform")])],-1),I=n("blockquote",null,[n("p",null,"클라우드, 온프레미스, 플랫폼 서비스의 리소스 프로비저닝과 자동화")],-1),j={href:"https://www.terraform.io/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://registry.terraform.io/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://app.terraform.io/",target:"_blank",rel:"noopener noreferrer"},q=n("h2",{id:"consul",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#consul"},[n("span",null,"Consul")])],-1),U=n("blockquote",null,[n("p",null,"서비스 디스커버리와 서비스 메시로 네트워크 자동화")],-1),E={href:"https://www.consul.io/",target:"_blank",rel:"noopener noreferrer"},H=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"Service Discovery"),n("li",null,"K/V"),n("li",null,"Service Mesh")])],-1),L=n("h2",{id:"boundary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#boundary"},[n("span",null,"Boundary")])],-1),$=n("blockquote",null,[n("p",null,"인증/인가 기반으로 서버와 서비스에 대한 접근관리")],-1),G={href:"https://www.boundaryproject.io/",target:"_blank",rel:"noopener noreferrer"},K=n("h2",{id:"vault",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vault"},[n("span",null,"Vault")])],-1),Z=n("blockquote",null,[n("p",null,"민감 정보의 관리와 접근에 중앙화된 관리 서비스")],-1),M={href:"https://www.vaultproject.io/",target:"_blank",rel:"noopener noreferrer"},V=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"Secret K/V"),n("li",null,"SSH OTP"),n("li",null,"PKI"),n("li",null,"KMS, KMIP"),n("li",null,"Data Encryption"),n("li",null,"Database Credential"),n("li",null,"Cloud Credential")])],-1),z=n("h2",{id:"nomad",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nomad"},[n("span",null,"Nomad")])],-1),W=n("blockquote",null,[n("p",null,"애플리케이션 배포와 실행을 위한 오케스트레이터")],-1),B={href:"https://www.nomadproject.io/",target:"_blank",rel:"noopener noreferrer"},F=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"Docker / Podman / Containerd / LXC"),n("li",null,"Java"),n("li",null,"Exec / Raw_exec"),n("li",null,"QEMU"),n("li",null,"Windows IIS")])],-1),X=n("h2",{id:"waypoint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#waypoint"},[n("span",null,"Waypoint")])],-1),Q=n("blockquote",null,[n("p",null,"단일 구성으로 컨테이너 환경에 애플리케이션 빌드 및 배포")],-1),Y={href:"https://www.waypointproject.io/",target:"_blank",rel:"noopener noreferrer"},nn=n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,"AWS ECS/Lambda/SSM/EC2"),n("li",null,"Azure Container Instance"),n("li",null,"Docker"),n("li",null,"Google Cloud Run"),n("li",null,"Kubernetes"),n("li",null,"Nomad")])],-1),an=g(`<h2 id="etc" tabindex="-1"><a class="header-anchor" href="#etc"><span>Etc.</span></a></h2><details class="hint-container details"><summary>Mac에서 한번에 업데이트 받기 예제</summary><ul><li><code>BIN_DIR</code>로 지정된 <code>/Users/my/Tools/bins/</code>는 PATH에 적용된 위치</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;&lt;&lt;&lt;&lt;&lt;&lt; CHECK POINT HASHICORP RELEASE &gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">RELEASE_URL</span><span class="token operator">=</span><span class="token string">&quot;https://releases.hashicorp.com/&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">DOWNLOAD_DIR</span><span class="token operator">=</span><span class="token string">&quot;/tmp/hashistack-zip/&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">BIN_DIR</span><span class="token operator">=</span><span class="token string">&quot;/Users/my/Tools/bins/&quot;</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${DOWNLOAD_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${DOWNLOAD_DIR}</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${DOWNLOAD_DIR}</span>/*

<span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">SOLUTION</span> <span class="token keyword">in</span> <span class="token string">&quot;terraform&quot;</span> <span class="token string">&quot;consul&quot;</span> <span class="token string">&quot;vault&quot;</span> <span class="token string">&quot;nomad&quot;</span> <span class="token string">&quot;packer&quot;</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token string">&quot;waypoint&quot;</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Check - <span class="token variable">\${SOLUTION}</span>&quot;</span>
    <span class="token assign-left variable">TAG</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsS</span> https://api.github.com/repos/hashicorp/$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span>/releases <span class="token punctuation">\\</span>
    <span class="token operator">|</span> jq <span class="token parameter variable">-re</span> <span class="token string">&#39;.[] | select(.prerelease != true) | .tag_name&#39;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^v\\(.*\\)$/\\1/g&#39;</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-V</span> <span class="token punctuation">\\</span>
    <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span>

    <span class="token builtin class-name">export</span> <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;0.0.0&quot;</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">\${BIN_DIR}</span>/<span class="token variable">\${SOLUTION}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> <span class="token parameter variable">--version</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/v//&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/+ent//&#39;</span><span class="token variable">)</span></span>
        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;boundary&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> version <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-4</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span>
        <span class="token keyword">else</span>
            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> version <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/v//&#39;</span><span class="token variable">)</span></span>
        <span class="token keyword">fi</span>
    <span class="token keyword">fi</span>

    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$TAG</span> <span class="token operator">!=</span> <span class="token variable">$CURRENT_VERSION</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token assign-left variable">TAG</span><span class="token operator">=</span><span class="token variable">\${TAG}</span>+ent
        <span class="token keyword">fi</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt;&gt; <span class="token variable">\${SOLUTION}</span> update <span class="token variable">\${CURRENT_VERSION}</span> --&gt; <span class="token variable">\${TAG}</span>&quot;</span>
        <span class="token assign-left variable">ZIP</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${TAG}</span>_darwin_amd64.zip&quot;</span>
        <span class="token assign-left variable">DOWNLOAD_URL</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${RELEASE_URL}</span><span class="token variable">\${SOLUTION}</span>/<span class="token variable">\${TAG}</span>/<span class="token variable">\${ZIP}</span>&quot;</span>
        <span class="token function">wget</span> <span class="token parameter variable">-O</span> <span class="token string">&quot;<span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span>&quot;</span> <span class="token variable">\${DOWNLOAD_URL}</span>
        <span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span> <span class="token parameter variable">-d</span> <span class="token variable">$BIN_DIR</span>
        <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span> 
        <span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${UPDATE_LIST}</span> <span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${CURRENT_VERSION}</span><span class="token entity" title="\\t">\\t</span>--&gt;&gt;<span class="token entity" title="\\t">\\t</span><span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${TAG}</span>&quot;</span>
    <span class="token keyword">else</span>
        <span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${UPDATE_LIST}</span> <span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${CURRENT_VERSION}</span>&quot;</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-A</span> $<span class="token punctuation">{</span>DOWNLOAD_DIR<span class="token punctuation">}</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">mv</span> <span class="token variable">\${DOWNLOAD_DIR}</span>* /Users/gs/Tools/bins/
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>==== HASHISTACK VERSION ====&quot;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">list</span> <span class="token keyword">in</span> <span class="token variable">$UPDATE_LIST</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$list</span>
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,2);function sn(o,tn,en,on,pn,ln){const i=c("RouterLink"),t=c("ExternalLinkIcon");return p(),l("div",null,[f,_,n("ul",null,[(p(!0),l(m,null,d(o.pages,e=>(p(),l("li",{key:e.key},[s(i,{to:e.path},{default:h(()=>[a(r(e.title),1)]),_:2},1032,["to"]),e.frontmatter.date?(p(),l("span",w," [ "+r(new Date(e.frontmatter.date).toLocaleString())+" ] ",1)):y("",!0)]))),128))]),S,N,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",T,[a("https://www.packer.io"),s(t)])]),A]),C,R,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",O,[a("https://www.vagrantup.com"),s(t)])]),D]),x,I,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",j,[a("https://www.terraform.io/"),s(t)])]),n("li",null,[a("관련 항목 "),n("ul",null,[n("li",null,[a("Provider Registry : "),n("a",P,[a("https://registry.terraform.io/"),s(t)])]),n("li",null,[a("Terraform Cloud : "),n("a",J,[a("https://app.terraform.io/"),s(t)])])])])]),q,U,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",E,[a("https://www.consul.io/"),s(t)])]),H]),L,$,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",G,[a("https://www.boundaryproject.io/"),s(t)])])]),K,Z,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",M,[a("https://www.vaultproject.io/"),s(t)])]),V]),z,W,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",B,[a("https://www.nomadproject.io/"),s(t)])]),F]),X,Q,n("ul",null,[n("li",null,[a("홈페이지 : "),n("a",Y,[a("https://www.waypointproject.io/"),s(t)])]),nn]),an])}const un=u(v,[["render",sn],["__file","index.html.vue"]]),kn=JSON.parse('{"path":"/04-HashiCorp/","title":"HashiCorp","lang":"ko-KR","frontmatter":{"tag":["HashiCorp"],"headerDepth":0,"order":0,"description":"HashiCorp Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Packer 다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구 홈페이지 : https://www.packer.io 관련 항목 Alicloud / AWS /...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"HashiCorp"}],["meta",{"property":"og:description","content":"HashiCorp Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Packer 다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구 홈페이지 : https://www.packer.io 관련 항목 Alicloud / AWS /..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"HashiCorp"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashiCorp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Recent pages","slug":"recent-pages","link":"#recent-pages","children":[]},{"level":2,"title":"Packer","slug":"packer","link":"#packer","children":[]},{"level":2,"title":"Vagrant","slug":"vagrant","link":"#vagrant","children":[]},{"level":2,"title":"Terraform","slug":"terraform","link":"#terraform","children":[]},{"level":2,"title":"Consul","slug":"consul","link":"#consul","children":[]},{"level":2,"title":"Boundary","slug":"boundary","link":"#boundary","children":[]},{"level":2,"title":"Vault","slug":"vault","link":"#vault","children":[]},{"level":2,"title":"Nomad","slug":"nomad","link":"#nomad","children":[]},{"level":2,"title":"Waypoint","slug":"waypoint","link":"#waypoint","children":[]},{"level":2,"title":"Etc.","slug":"etc","link":"#etc","children":[]}],"git":{"createdTime":1628085698000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":7},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":4}]},"readingTime":{"minutes":6.55,"words":393},"filePathRelative":"04-HashiCorp/README.md","localizedDate":"2021년 8월 4일","excerpt":"\\n<h2>Recent pages</h2>\\n<ul>\\n  <li v-for=\\"page in pages\\" :key=\\"page.key\\">\\n    <a :to=\\"page.path\\" href=\\"undefined\\" target=\\"_blank\\">{{ page.title }}</a>\\n    <span v-if=\\"page.frontmatter.date\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\\n<h2>Packer</h2>\\n<blockquote>\\n<p>다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구</p>\\n</blockquote>","autoDesc":true}');export{un as comp,kn as data};
