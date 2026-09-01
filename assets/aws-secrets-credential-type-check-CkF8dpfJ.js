import{O as e,f as t,u as n}from"./runtime-core.esm-bundler-DwmdDY9i.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/04-HashiCorp/06-Vault/07-Sentinel-Sample/aws-secrets-credential-type-check.html","title":"AWS Secrets Role Type Check","lang":"ko-KR","frontmatter":{"description":"Sentinel - AWS Secrets Role Type Allow/Deny","tag":["Vault","Sentinel","Policy"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AWS Secrets Role Type Check\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-05T05:18:04.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/07-Sentinel-Sample/aws-secrets-credential-type-check.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"AWS Secrets Role Type Check"}],["meta",{"property":"og:description","content":"Sentinel - AWS Secrets Role Type Allow/Deny"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-09-05T05:18:04.000Z"}],["meta",{"property":"article:tag","content":"Policy"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Vault"}],["meta",{"property":"article:modified_time","content":"2024-09-05T05:18:04.000Z"}]]},"git":{"createdTime":1689216508000,"updatedTime":1725513484000,"contributors":[{"name":"Great-Stone","username":"Great-Stone","email":"hahohh@gmail.com","commits":3,"url":"https://github.com/Great-Stone"}]},"readingTime":{"minutes":3.7,"words":222},"filePathRelative":"04-HashiCorp/06-Vault/07-Sentinel-Sample/aws-secrets-credential-type-check.md","excerpt":"\\n<blockquote>\\n<p>Public Terraform Registry - Policy Library</p>\\n<p>Src : <a href=\\"https://registry.terraform.io/policies/Great-Stone/vault-aws-secret-type\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://registry.terraform.io/policies/Great-Stone/vault-aws-secret-type</a></p>\\n</blockquote>\\n<h2>1. EGP용 정책 생성 egp_iam_user_deny.sentinel</h2>"}`),a={name:`aws-secrets-credential-type-check.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="aws-secrets-role-type-check" tabindex="-1"><a class="header-anchor" href="#aws-secrets-role-type-check"><span>AWS Secrets Role Type Check</span></a></h1><blockquote><p>Public Terraform Registry - Policy Library</p><p>Src : <a href="https://registry.terraform.io/policies/Great-Stone/vault-aws-secret-type" target="_blank" rel="noopener noreferrer">https://registry.terraform.io/policies/Great-Stone/vault-aws-secret-type</a></p></blockquote><h2 id="_1-egp용-정책-생성-egp-iam-user-deny-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-egp용-정책-생성-egp-iam-user-deny-sentinel"><span>1. EGP용 정책 생성 egp_iam_user_deny.sentinel</span></a></h2><div class="language-hcl line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="hcl" style="--vp-collapsed-lines:20;"><pre><code class="language-hcl"><span class="line">import <span class="token string">&quot;strings&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># print(request.data)</span></span>
<span class="line"><span class="token property">credential_type</span> <span class="token punctuation">=</span> request.data.credential_type</span>
<span class="line">print(<span class="token string">&quot;CREDENTIAL_TYPE: &quot;</span>, credential_type)</span>
<span class="line"></span>
<span class="line"><span class="token property">allow_role_type</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;federation_token&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token property">role_type_check</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span></span>
<span class="line">  credential_type in allow_role_type</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># Only check AWS Secret Engine</span></span>
<span class="line"><span class="token comment"># Only check create, update</span></span>
<span class="line"><span class="token property">precond</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span></span>
<span class="line">	request.operation in <span class="token punctuation">[</span><span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;update&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token property">main</span> <span class="token punctuation">=</span> rule when <span class="token keyword">precond</span> <span class="token punctuation">{</span></span>
<span class="line">    role_type_check</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul><li><code>precond</code> : API 요청이 POST, UPDATE 인 경우</li><li><code>role_type_check</code> : 요청의 Body에 <code>credential_type</code>의 값이 허용된 type 인지 확인 (e.g. <code>federation_token</code> 허용)</li></ul><h2 id="_2-egp에-정책-설정" tabindex="-1"><a class="header-anchor" href="#_2-egp에-정책-설정"><span>2. EGP에 정책 설정</span></a></h2><p>EGP는 지정된 path에 대해 정책을 적용</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ vault <span class="token function">write</span> /sys/policies/egp/iam_user_deny <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">policy</span><span class="token operator">=</span>@egp_iam_user_deny.sentinel <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">enforcement_level</span><span class="token operator">=</span>hard-mandatory <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">paths</span><span class="token operator">=</span><span class="token string">&quot;aws/roles/*&quot;</span></span>
<span class="line"></span></code></pre></div><ul><li><code>paths</code>로 지정된 API 경로에 요청이 들어오면 동작</li></ul><h2 id="_3-테스트" tabindex="-1"><a class="header-anchor" href="#_3-테스트"><span>3. 테스트</span></a></h2><p>EGP로 지정된 path로 credential_type 이 iam_user 인경우 허용된 타입이 아니므로 거부됨</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ vault <span class="token function">write</span> aws/roles/iam-role <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token assign-left variable">credential_type</span><span class="token operator">=</span>iam_user <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token assign-left variable">policy_document</span><span class="token operator">=</span>-<span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;Version&quot;: &quot;2012-10-17&quot;,</span>
<span class="line">  &quot;Statement&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;Effect&quot;: &quot;Allow&quot;,</span>
<span class="line">      &quot;Action&quot;: &quot;ec2:*&quot;,</span>
<span class="line">      &quot;Resource&quot;: &quot;*&quot;</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>에러 메시지</p><div class="language-log line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="log" style="--vp-collapsed-lines:20;"><pre><code class="language-log"><span class="line"><span class="token property">Error writing data to aws/roles/iam-role:</span> Error making API request<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token property">URL:</span> PUT <span class="token url">http://127.0.0.1:8200/v1/aws/roles/iam-role</span></span>
<span class="line"><span class="token property">Code:</span> <span class="token number">403</span><span class="token punctuation">.</span> Errors<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">*</span> <span class="token number">2</span> errors occurred<span class="token operator">:</span></span>
<span class="line">	<span class="token operator">*</span> egp standard policy <span class="token string">&quot;root/iam_user_deny&quot;</span> evaluation resulted in denial<span class="token punctuation">.</span></span>
<span class="line"></span>
<span class="line"><span class="token property">The specific error was:</span></span>
<span class="line"><span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">A trace of the execution for policy <span class="token string">&quot;root/iam_user_deny&quot;</span> <span class="token property">is available:</span></span>
<span class="line"></span>
<span class="line"><span class="token property">Result:</span> <span class="token boolean">false</span></span>
<span class="line"></span>
<span class="line"><span class="token property">Description:</span> <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line">print<span class="token operator">(</span><span class="token operator">)</span> output<span class="token operator">:</span></span>
<span class="line"></span>
<span class="line"><span class="token property">CREDENTIAL_TYPE:</span>  iam_user</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">Rule <span class="token string">&quot;main&quot;</span> <span class="token operator">(</span>root<span class="token operator">/</span>iam_user_deny<span class="token operator">:</span><span class="token number">19</span><span class="token operator">:</span><span class="token number">1</span><span class="token operator">)</span> <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">Rule <span class="token string">&quot;precond&quot;</span> <span class="token operator">(</span>root<span class="token operator">/</span>iam_user_deny<span class="token operator">:</span><span class="token number">15</span><span class="token operator">:</span><span class="token number">1</span><span class="token operator">)</span> <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">Rule <span class="token string">&quot;role_type_check&quot;</span> <span class="token operator">(</span>root<span class="token operator">/</span>iam_user_deny<span class="token operator">:</span><span class="token number">9</span><span class="token operator">:</span><span class="token number">1</span><span class="token operator">)</span> <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">	<span class="token operator">*</span> permission denied</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><code>federation_token</code>은 생성됩니다.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code class="language-bash"><span class="line">$ vault <span class="token function">write</span> aws/roles/sts-role <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token assign-left variable">credential_type</span><span class="token operator">=</span>federation_token <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token assign-left variable">policy_document</span><span class="token operator">=</span>-<span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;Version&quot;: &quot;2012-10-17&quot;,</span>
<span class="line">  &quot;Statement&quot;: [</span>
<span class="line">    {</span>
<span class="line">      &quot;Effect&quot;: &quot;Allow&quot;,</span>
<span class="line">      &quot;Action&quot;: &quot;ec2:*&quot;,</span>
<span class="line">      &quot;Resource&quot;: &quot;*&quot;</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line">Success<span class="token operator">!</span> Data written to: aws/roles/sts-role</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};