import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as r,c as i,b as n,d as s,a as e,e as t}from"./app-DwRVeH7t.js";const l={},c=n("h1",{id:"terraform-코드-상에서-vault-연동하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#terraform-코드-상에서-vault-연동하기"},[n("span",null,"Terraform 코드 상에서 Vault 연동하기")])],-1),u={class:"hint-container tip"},d=n("p",{class:"hint-container-title"},"팁",-1),v={href:"https://learn.hashicorp.com/tutorials/terraform/secrets-vault?in=vault/secrets-management",target:"_blank",rel:"noopener noreferrer"},k={href:"https://registry.terraform.io/providers/hashicorp/vault/latest/docs#using-vault-credentials-in-terraform-configuration",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.youtube.com/watch?v=fOybhcbuxJ0",target:"_blank",rel:"noopener noreferrer"},h=t(`<p>Terraform Enterprise/Terraform Cloud를 사용할 때 Workspace의 변수(Variable)를 Vault를 사용하여 설정하는 것은 Terraform의 TFE 프로바이더와 Vault Provider를 사용하여 가능하다.</p><p>이번 예제는 Terraform Configuration Template에서 Vault를 사용하는 예제이다. Vault 인증 시 AppRole인증을 사용하였으나 기타 지원되는 인증 방법을 사용할 수 있다.</p><p>AWS Provider 설정 시 필요한 access_key와 secret_key를 환경 변수 설정이 아니라 코드 실행 시 Vault AWS 시크릿 엔진을 사용하도록 구성된 예제로, 코드는 다음과 같이 4개의 파일로 구성된다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>❯ tree
<span class="token builtin class-name">.</span>
├── ec2.tf
├── provider.tf
├── terraform.tfvars
└── variables.tf

<span class="token number">0</span> directories, <span class="token number">4</span> files
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">경고</p><p>위 예제를 사용하기 위해서는 Vault 상의 AWS 시크릿 엔진이 구성되어 있어야 하고, 인증을 위한 AppRole 구성 그리고 정책이 사전에 설정되어 있어야 한다.</p></div>`,5),b={id:"_1-provider-설정-provider-tf",tabindex:"-1"},_={class:"header-anchor",href:"#_1-provider-설정-provider-tf"},f={href:"http://provider.tf",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>사용할 프로바이더로 aws(자원 배포 대상)와 vault를 지정.</p><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">terraform</span> <span class="token punctuation">{</span>
  <span class="token keyword">required_providers</span> <span class="token punctuation">{</span>
    <span class="token property">aws</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">source</span>  <span class="token punctuation">=</span> <span class="token string">&quot;hashicorp/aws&quot;</span>
      <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;3.23.0&quot;</span>
    <span class="token punctuation">}</span>
    <span class="token property">vault</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
      <span class="token property">source</span>  <span class="token punctuation">=</span> <span class="token string">&quot;hashicorp/vault&quot;</span>
      <span class="token property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;2.17.0&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">provider<span class="token type variable"> &quot;vault&quot; </span></span><span class="token punctuation">{</span>
  <span class="token comment"># It is strongly recommended to configure this provider through the environment variables described above, so that each user can have</span>
  <span class="token comment"># separate credentials set in the environment.</span>
  <span class="token comment">#</span>
  <span class="token comment"># This will default to using $VAULT_ADDR</span>
  <span class="token comment"># But can be set explicitly</span>
  <span class="token comment"># address = &quot;https://vault.example.net:8200&quot;</span>
  <span class="token property">address</span> <span class="token punctuation">=</span> var.vault_addr

  
  <span class="token keyword">auth_login</span> <span class="token punctuation">{</span>
  <span class="token property">path</span> <span class="token punctuation">=</span> <span class="token string">&quot;auth/approle/login&quot;</span>
  <span class="token property">parameters</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
    <span class="token property">role_id</span>   <span class="token punctuation">=</span> var.login_approle_role_id
    <span class="token property">secret_id</span> <span class="token punctuation">=</span> var.login_approle_secret_id
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 코드 실행 시 Vault AWS 시크릿 엔진을 사용하여, data 값으로 access_key와 secret_key 생성하여 사용</span>
<span class="token keyword">provider<span class="token type variable"> &quot;aws&quot; </span></span><span class="token punctuation">{</span>
  <span class="token property">region</span>     <span class="token punctuation">=</span> var.region
  <span class="token property">access_key</span> <span class="token punctuation">=</span> data.vault_aws_access_credentials.creds.access_key
  <span class="token property">secret_key</span> <span class="token punctuation">=</span> data.vault_aws_access_credentials.creds.secret_key
  <span class="token comment"># STS Token을 사용하지 않는 경우 주석 처리</span>
  <span class="token property">token</span>      <span class="token punctuation">=</span> data.vault_aws_access_credentials.creds.security_token
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),y={id:"_2-자원-생성-시-사용-설정-ec2-tf",tabindex:"-1"},q={class:"header-anchor",href:"#_2-자원-생성-시-사용-설정-ec2-tf"},w={href:"http://ec2.tf",target:"_blank",rel:"noopener noreferrer"},T=t(`<p>data 소스를 이용하여 Vault에 설정된 AWS 시크릿 엔진을 읽어서 access_key와 secret_key를 생성하고, 해당 정보를 provider에서 사용하게 된다.</p><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">data <span class="token type variable">&quot;vault_aws_access_credentials&quot;</span></span> <span class="token string">&quot;creds&quot;</span> <span class="token punctuation">{</span>
  <span class="token comment"># AWS 시크릿 엔진 경로 : 기본은 AWS</span>
  <span class="token property">backend</span> <span class="token punctuation">=</span> var.aws_sec_path
  <span class="token comment"># AWS 시크릿 엔진 구성 시 사용한  Role 이름</span>
  <span class="token property">role</span>    <span class="token punctuation">=</span> var.aws_sec_role
  <span class="token comment">#STS Token으로 발급받아 설정. 아닌 경우, 다음 코드를 주석 처리 후 실행할 것.</span>
  <span class="token property">type</span> <span class="token punctuation">=</span><span class="token string">&quot;sts&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># AMI 정보 조회</span>
<span class="token keyword">data <span class="token type variable">&quot;aws_ami&quot;</span></span> <span class="token string">&quot;ubuntu&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">most_recent</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>

  <span class="token keyword">filter</span> <span class="token punctuation">{</span>
    <span class="token property">name</span>   <span class="token punctuation">=</span> <span class="token string">&quot;name&quot;</span>
    <span class="token property">values</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;ubuntu/images/hvm-ssd/ubuntu-trusty-14.04-amd64-server-*&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">filter</span> <span class="token punctuation">{</span>
    <span class="token property">name</span>   <span class="token punctuation">=</span> <span class="token string">&quot;virtualization-type&quot;</span>
    <span class="token property">values</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hvm&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  <span class="token property">owners</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;099720109477&quot;</span><span class="token punctuation">]</span> <span class="token comment"># Canonical</span>
<span class="token punctuation">}</span>

<span class="token comment"># Create AWS EC2 Instance</span>
<span class="token keyword">resource <span class="token type variable">&quot;aws_instance&quot;</span></span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">ami</span>           <span class="token punctuation">=</span> data.aws_ami.ubuntu.id
  <span class="token property">instance_type</span> <span class="token punctuation">=</span> <span class="token string">&quot;t2.nano&quot;</span>

  <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span>
    <span class="token property">Name</span>  <span class="token punctuation">=</span> var.name
    <span class="token property">TTL</span>   <span class="token punctuation">=</span> var.ttl
    <span class="token property">owner</span> <span class="token punctuation">=</span> <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">name</span><span class="token punctuation">}</span></span>-guide&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-변수-선언-및-변수-값-지정" tabindex="-1"><a class="header-anchor" href="#_3-변수-선언-및-변수-값-지정"><span>3. 변수 선언 및 변수 값 지정</span></a></h2>`,3),V={id:"_3-1-변수-선언-variables-tf",tabindex:"-1"},S={class:"header-anchor",href:"#_3-1-변수-선언-variables-tf"},A={href:"http://variables.tf",target:"_blank",rel:"noopener noreferrer"},x=t(`<div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token keyword">variable<span class="token type variable"> region </span></span><span class="token punctuation">{</span>
  <span class="token property">default</span><span class="token punctuation">=</span><span class="token string">&quot;ap-northeast-2&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> &quot;name&quot; </span></span><span class="token punctuation">{</span> <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">&quot;vault-dynamic-creds&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> ttl </span></span><span class="token punctuation">{</span> <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">&quot;24h&quot;</span><span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> &quot;vault_addr&quot; </span></span><span class="token punctuation">{</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;Vault Server address format : http://IP_ADDRES:8200&quot;</span>
  <span class="token property">default</span>     <span class="token punctuation">=</span> <span class="token string">&quot;http://127.0.0.1:8200&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> login_approle_role_id </span></span><span class="token punctuation">{</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;AppRole의 Role ID값 설정&quot;</span>
<span class="token punctuation">}</span>
<span class="token keyword">variable<span class="token type variable"> login_approle_secret_id </span></span><span class="token punctuation">{</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;AppRole의 Secret ID값 설정&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># </span>
<span class="token keyword">variable<span class="token type variable"> aws_sec_path </span></span><span class="token punctuation">{</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;AWS 시크릿 엔진 경로, 마지막은 반드시 &#39;/&#39;로 끝나게 설정.&quot;</span>
  <span class="token property">default</span> <span class="token punctuation">=</span> <span class="token string">&quot;aws/&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">variable<span class="token type variable"> aws_sec_role </span></span><span class="token punctuation">{</span>
  <span class="token property">description</span> <span class="token punctuation">=</span> <span class="token string">&quot;AWS 시크릿 엔진 상의 Role 이름&quot;</span>
  <span class="token property">default</span> <span class="token punctuation">=</span><span class="token string">&quot;VAULT상에 생성된 AWS시크릿 엔진의 Role이름&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-변수-값-지정-terraform-tfvars" tabindex="-1"><a class="header-anchor" href="#_3-2-변수-값-지정-terraform-tfvars"><span>3.2 변수 값 지정 (terraform.tfvars)</span></a></h3><div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token property">vault_addr</span><span class="token punctuation">=</span><span class="token string">&quot;http://127.0.0.1:8200&quot;</span> 
<span class="token property">login_approle_role_id</span><span class="token punctuation">=</span><span class="token string">&quot;AppRole의 Role_ID값&quot;</span>
<span class="token property">login_approle_secret_id</span><span class="token punctuation">=</span><span class="token string">&quot;AppRole의 Secret_ID값&quot;</span> 

</code></pre></div><h1 id="개선-아이디어" tabindex="-1"><a class="header-anchor" href="#개선-아이디어"><span>개선 아이디어</span></a></h1><ul><li>terraform.tfvars 상의 Role_ID, Secret_ID값은 Terraform Cloud/Enterprise를 사용하는 경우, Workspace 상의 변수로 설정할 수 있다. --&gt; 해당 작업을 수행하는 별도의 Admin Workspace가 있는 경우, Run Trigger를 활용할 수 있다.</li><li>terraform.tfvars 파일을 Vault Agent, ConsulTemplate 또는 envConsul을 이용하여 설정 후 사용하는 것도 가능.</li></ul>`,5);function R(I,W){const a=p("ExternalLinkIcon");return r(),i("div",null,[c,n("div",u,[d,n("p",null,[n("a",v,[s("Inject Secrets into Terraform Using the Vault Provider"),e(a)])]),n("p",null,[n("a",k,[s("Using Vault credentials in Terraform configuration"),e(a)])]),n("p",null,[n("a",m,[s("Best Practices for using Terraform with Vault"),e(a)])])]),h,n("h2",b,[n("a",_,[n("span",null,[s("1. Provider 설정 ("),n("a",f,[s("provider.tf"),e(a)]),s(")")])])]),g,n("h2",y,[n("a",q,[n("span",null,[s("2. 자원 생성 시 사용 설정 ("),n("a",w,[s("ec2.tf"),e(a)]),s(")")])])]),T,n("h3",V,[n("a",S,[n("span",null,[s("3.1 변수 선언 ("),n("a",A,[s("variables.tf"),e(a)]),s(")")])])]),x])}const U=o(l,[["render",R],["__file","terraform-with-aws-secret-engine.html.vue"]]),D=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/terraform-with-aws-secret-engine.html","title":"Terraform 코드 상에서 Vault 연동하기","lang":"ko-KR","frontmatter":{"head":[["meta",{"name":"Terraform 코드에서 Vault 연동하기","content":"Terraform 코드 상에서 Vault 연동하기"}],["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/terraform-with-aws-secret-engine.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Terraform 코드 상에서 Vault 연동하기"}],["meta",{"property":"og:description","content":"Terraform 코드 상에서 Vault 연동하기 팁 Inject Secrets into Terraform Using the Vault Provider Using Vault credentials in Terraform configuration Best Practices for using Terraform with V..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:author","content":"powhapki"}],["meta",{"property":"article:tag","content":"terraform"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Terraform 코드 상에서 Vault 연동하기\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"powhapki\\"}]}"]],"author":"powhapki","tag":["terraform","vault","aws"],"description":"Terraform 코드 상에서 Vault 연동하기 팁 Inject Secrets into Terraform Using the Vault Provider Using Vault credentials in Terraform configuration Best Practices for using Terraform with V..."},"headers":[{"level":2,"title":"1. Provider 설정 (provider.tf)","slug":"_1-provider-설정-provider-tf","link":"#_1-provider-설정-provider-tf","children":[]},{"level":2,"title":"2. 자원 생성 시 사용 설정 (ec2.tf)","slug":"_2-자원-생성-시-사용-설정-ec2-tf","link":"#_2-자원-생성-시-사용-설정-ec2-tf","children":[]},{"level":2,"title":"3. 변수 선언 및 변수 값 지정","slug":"_3-변수-선언-및-변수-값-지정","link":"#_3-변수-선언-및-변수-값-지정","children":[{"level":3,"title":"3.1 변수 선언 (variables.tf)","slug":"_3-1-변수-선언-variables-tf","link":"#_3-1-변수-선언-variables-tf","children":[]},{"level":3,"title":"3.2 변수 값 지정 (terraform.tfvars)","slug":"_3-2-변수-값-지정-terraform-tfvars","link":"#_3-2-변수-값-지정-terraform-tfvars","children":[]}]}],"git":{"createdTime":1650373852000,"updatedTime":1695042774000,"contributors":[{"name":"powhapki","email":"powhapki@gmail.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":5.88,"words":353},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/terraform-with-aws-secret-engine.md","localizedDate":"2022년 4월 19일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">팁</p>\\n<p><a href=\\"https://learn.hashicorp.com/tutorials/terraform/secrets-vault?in=vault/secrets-management\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Inject Secrets into Terraform Using the Vault Provider</a></p>\\n<p><a href=\\"https://registry.terraform.io/providers/hashicorp/vault/latest/docs#using-vault-credentials-in-terraform-configuration\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Using Vault credentials in Terraform configuration</a></p>\\n<p><a href=\\"https://www.youtube.com/watch?v=fOybhcbuxJ0\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Best Practices for using Terraform with Vault</a></p>\\n</div>","copyright":{"author":"powhapki"},"autoDesc":true}');export{U as comp,D as data};
