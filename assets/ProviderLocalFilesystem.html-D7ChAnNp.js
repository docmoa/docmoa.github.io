import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c as l,b as n,d as a,a as e,e as t}from"./app-DwRVeH7t.js";const p={},c=n("h1",{id:"terraform-provider-로컬-디렉토리",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#terraform-provider-로컬-디렉토리"},[n("span",null,"Terraform Provider - 로컬 디렉토리")])],-1),d={href:"https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories",target:"_blank",rel:"noopener noreferrer"},u=n("br",null,null,-1),m={href:"https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers",target:"_blank",rel:"noopener noreferrer"},v=t(`<h2 id="환경" tabindex="-1"><a class="header-anchor" href="#환경"><span>환경</span></a></h2><ul><li><p>OS : CentOS7</p><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code><span class="token key attr-name">NAME</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">CentOS Linux</span>&quot;</span>
<span class="token key attr-name">VERSION</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">7 (Core)</span>&quot;</span>
<span class="token key attr-name">ID</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">centos</span>&quot;</span>
<span class="token key attr-name">ID_LIKE</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">rhel fedora</span>&quot;</span>
<span class="token key attr-name">VERSION_ID</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">7</span>&quot;</span>
<span class="token key attr-name">PRETTY_NAME</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">CentOS Linux 7 (Core)</span>&quot;</span>
<span class="token key attr-name">ANSI_COLOR</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">0;31</span>&quot;</span>
<span class="token key attr-name">CPE_NAME</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">cpe:/o:centos:centos:7</span>&quot;</span>
<span class="token key attr-name">HOME_URL</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">https://www.centos.org/</span>&quot;</span>
<span class="token key attr-name">BUG_REPORT_URL</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">https://bugs.centos.org/</span>&quot;</span>

<span class="token key attr-name">CENTOS_MANTISBT_PROJECT</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">CentOS-7</span>&quot;</span>
<span class="token key attr-name">CENTOS_MANTISBT_PROJECT_VERSION</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">7</span>&quot;</span>
<span class="token key attr-name">REDHAT_SUPPORT_PRODUCT</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">centos</span>&quot;</span>
<span class="token key attr-name">REDHAT_SUPPORT_PRODUCT_VERSION</span><span class="token punctuation">=</span><span class="token value attr-value">&quot;<span class="token inner-value">7</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Terraform</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ terraform version
Terraform v1.0.0
</code></pre></div></li></ul><h2 id="test-provider" tabindex="-1"><a class="header-anchor" href="#test-provider"><span>Test Provider</span></a></h2>`,3),k={href:"https://releases.hashicorp.com/terraform-provider-random/3.1.0/terraform-provider-random_3.1.0_linux_amd64.zip",target:"_blank",rel:"noopener noreferrer"},h={href:"https://releases.hashicorp.com/terraform-provider-nsxt/3.2.1/terraform-provider-nsxt_3.2.1_linux_amd64.zip",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"구성-절차",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#구성-절차"},[n("span",null,"구성 절차")])],-1),f={href:"https://releases.hashicorp.com",target:"_blank",rel:"noopener noreferrer"},g=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("$ "),n("span",{class:"token function"},"wget"),a(` https://releases.hashicorp.com/terraform-provider-nsxt/3.2.1/terraform-provider-nsxt_3.2.1_linux_amd64.zip
$ `),n("span",{class:"token function"},"wget"),a(` https://releases.hashicorp.com/terraform-provider-random/3.1.0/terraform-provider-random_3.1.0_linux_amd64.zip
`)])])],-1),_=t(`<li><p>Plugin 디렉토리 구성<br> 로컬 Provider를 찾기위한 디렉토리 구조를 생성합니다. <code>host_name</code>은 환경마다 상이할 수 있습니다.</p><p><code>~/.terraform.d/plugins/\${host_name}/\${namespace}/\${type}/\${version}/\${target}</code></p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.terraform.d/plugins/localhost.localdomain/vmware/nsxt/3.2.1/linux_amd64
$ <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ~/.terraform.d/plugins/localhost.localdomain/hashicorp/random/3.1.0/linux_amd64
</code></pre></div></li><li><p>Provider 바이너리 파일 구성</p><p>기존에 받아놓은 zip 파일을 압축 해제하고, 생성한 Provider 디렉토리 각각에 맞는 프로바이더를 복사합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">unzip</span> terraform-provider-random_3.1.0_linux_amd64.zip
Archive:  terraform-provider-random_3.1.0_linux_amd64.zip
  inflating: terraform-provider-random_v3.1.0_x5
  
$ <span class="token function">mv</span> ./terraform-provider-random_v3.1.0_x5 ~/.terraform.d/plugins/localhost.localdomain/hashicorp/random/3.1.0/linux_amd64

$ <span class="token function">unzip</span> terraform-provider-nsxt_3.2.1_linux_amd64.zip
Archive:  terraform-provider-nsxt_3.2.1_linux_amd64.zip
  inflating: CHANGELOG.md
  inflating: LICENSE.txt
  inflating: README.md
  inflating: terraform-provider-nsxt_v3.2.1
  
$ <span class="token function">mv</span> ./terraform-provider-nsxt_v3.2.1 ~/.terraform.d/plugins/localhost.localdomain/vmware/nsxt/3.2.1/linux_amd64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>로컬 Provider 구성 확인</p></li>`,3),x=t(`<div class="hint-container info"><p class="hint-container-title">파일 구조</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ tree <span class="token parameter variable">-a</span> ~/.terraform.d/
/root/.terraform.d/
├── <span class="token variable"><span class="token variable">\`</span>plugins<span class="token variable">\`</span></span>
│   └── localhost.localdomain
│       ├── hashicorp
│       │   └── random
│       │       └── <span class="token number">3.1</span>.0
│       │           └── linux_amd64
│       │               └── terraform-provider-random_v3.1.0_x5
│       └── vmware
│           └── nsxt
│               └── <span class="token number">3.2</span>.1
│                   └── linux_amd64
│                       └── terraform-provider-nsxt_v3.2.1
├── checkpoint_cache
└── checkpoint_signature
</code></pre></div></div><ol start="5"><li><p>워크스페이스 생성 (디렉토리) - airgapped 는 임의의 이름 입니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> ./airgapped
$ <span class="token builtin class-name">cd</span> ./airgapped
</code></pre></div></li><li><p>tf 파일 작성</p><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>$ cat <span class="token operator">&lt;&lt;</span><span class="token constant">EOF</span><span class="token operator">&gt;</span> terraform<span class="token punctuation">.</span>tf
terraform <span class="token punctuation">{</span>
  required_providers <span class="token punctuation">{</span>
    nsxt <span class="token operator">=</span> <span class="token punctuation">{</span>
      source <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;localhost.localdomain/vmware/nsxt&quot;</span></span>
      version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;3.2.1&quot;</span></span>
    <span class="token punctuation">}</span>
    random <span class="token operator">=</span> <span class="token punctuation">{</span>
      source <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;localhost.localdomain/hashicorp/random&quot;</span></span>
      version <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;3.1.0&quot;</span></span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

provider <span class="token string-literal"><span class="token string">&quot;nsxt&quot;</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># Configuration options</span>
<span class="token punctuation">}</span>

provider <span class="token string-literal"><span class="token string">&quot;random&quot;</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># Configuration options</span>
<span class="token punctuation">}</span>

resource <span class="token string-literal"><span class="token string">&quot;random_id&quot;</span></span> <span class="token string-literal"><span class="token string">&quot;test&quot;</span></span> <span class="token punctuation">{</span>
  byte_length <span class="token operator">=</span> <span class="token number">8</span>
<span class="token punctuation">}</span>

output <span class="token string-literal"><span class="token string">&quot;random_id&quot;</span></span> <span class="token punctuation">{</span>
  value <span class="token operator">=</span> random_id<span class="token punctuation">.</span>test
<span class="token punctuation">}</span>
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Terraform <code>init</code>을 수행하여 정상적으로 로컬 Provider를 가져오는지 확인합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ terraform init

Initializing the backend<span class="token punctuation">..</span>.

Initializing provider plugins<span class="token punctuation">..</span>.
- Finding localhost.localdomain/vmware/nsxt versions matching <span class="token string">&quot;3.2.1&quot;</span><span class="token punctuation">..</span>.
- Finding localhost.localdomain/hashicorp/random versions matching <span class="token string">&quot;3.1.0&quot;</span><span class="token punctuation">..</span>.
- Installing localhost.localdomain/vmware/nsxt v3.2.1<span class="token punctuation">..</span>.
- Installed localhost.localdomain/vmware/nsxt v3.2.1 <span class="token punctuation">(</span>unauthenticated<span class="token punctuation">)</span>
- Installing localhost.localdomain/hashicorp/random v3.1.0<span class="token punctuation">..</span>.
- Installed localhost.localdomain/hashicorp/random v3.1.0 <span class="token punctuation">(</span>unauthenticated<span class="token punctuation">)</span>

Terraform has created a lock <span class="token function">file</span> .terraform.lock.hcl to record the provider
selections it made above. Include this <span class="token function">file</span> <span class="token keyword">in</span> your version control repository
so that Terraform can guarantee to <span class="token function">make</span> the same selections by default when
you run <span class="token string">&quot;terraform init&quot;</span> <span class="token keyword">in</span> the future.

Terraform has been successfully initialized<span class="token operator">!</span>

You may now begin working with Terraform. Try running <span class="token string">&quot;terraform plan&quot;</span> to see
any changes that are required <span class="token keyword">for</span> your infrastructure. All Terraform commands
should now work.

If you ever <span class="token builtin class-name">set</span> or change modules or backend configuration <span class="token keyword">for</span> Terraform,
rerun this <span class="token builtin class-name">command</span> to reinitialize your working directory. If you forget, other
commands will detect it and remind you to <span class="token keyword">do</span> so <span class="token keyword">if</span> necessary.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2);function q(y,T){const s=o("ExternalLinkIcon");return i(),l("div",null,[c,n("blockquote",null,[n("p",null,[n("a",d,[a("https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories"),e(s)]),u,n("a",m,[a("https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers"),e(s)])])]),v,n("ul",null,[n("li",null,[a("random : "),n("a",k,[a("https://releases.hashicorp.com/terraform-provider-random/3.1.0/terraform-provider-random_3.1.0_linux_amd64.zip"),e(s)])]),n("li",null,[a("nsxt : "),n("a",h,[a("https://releases.hashicorp.com/terraform-provider-nsxt/3.2.1/terraform-provider-nsxt_3.2.1_linux_amd64.zip"),e(s)])])]),b,n("ol",null,[n("li",null,[n("p",null,[a("필요한 Provider zip파일을 "),n("a",f,[a("https://releases.hashicorp.com"),e(s)]),a(" 에서 미리 다운 받습니다. 받아놓은 zip 파일이 있는 경우 대상 시스템에 복사해둡니다.")]),g]),_]),x])}const E=r(p,[["render",q],["__file","ProviderLocalFilesystem.html.vue"]]),O=JSON.parse('{"path":"/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalFilesystem.html","title":"Terraform Provider - 로컬 디렉토리","lang":"ko-KR","frontmatter":{"description":"인터넷 사용 불가 시 로컬환경에서의 프로바이더 구성","tag":["terraform","provider"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalFilesystem.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Terraform Provider - 로컬 디렉토리"}],["meta",{"property":"og:description","content":"인터넷 사용 불가 시 로컬환경에서의 프로바이더 구성"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-19T11:31:31.000Z"}],["meta",{"property":"article:tag","content":"terraform"}],["meta",{"property":"article:tag","content":"provider"}],["meta",{"property":"article:modified_time","content":"2023-09-19T11:31:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Terraform Provider - 로컬 디렉토리\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-19T11:31:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"환경","slug":"환경","link":"#환경","children":[]},{"level":2,"title":"Test Provider","slug":"test-provider","link":"#test-provider","children":[]},{"level":2,"title":"구성 절차","slug":"구성-절차","link":"#구성-절차","children":[]}],"git":{"createdTime":1650413630000,"updatedTime":1695123091000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2},{"name":"Administrator","email":"admin@example.com","commits":1}]},"readingTime":{"minutes":6.68,"words":401},"filePathRelative":"04-HashiCorp/03-Terraform/05-Airgap/ProviderLocalFilesystem.md","localizedDate":"2022년 4월 20일","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.terraform.io/docs/cli/config/config-file.html#implied-local-mirror-directories</a><br>\\n<a href=\\"https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://learn.hashicorp.com/tutorials/terraform/provider-use?in=terraform/providers</a></p>\\n</blockquote>"}');export{E as comp,O as data};
