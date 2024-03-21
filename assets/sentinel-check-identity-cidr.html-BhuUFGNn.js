import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as o,b as n,d as e,a,e as c}from"./app-DwRVeH7t.js";const r={},d=n("h1",{id:"sentinel-identity-cidr",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sentinel-identity-cidr"},[n("span",null,"Sentinel - (Identity & CIDR)")])],-1),p=n("blockquote",null,[n("p",null,"Enterprise 기능")],-1),u=n("p",null,[e("Token Role에 "),n("code",null,"bound_cidr"),e("을 적용하거나 여타 인증(AppRole, Userpass 등)에 허용하는 cidr을 적용하는 경우 다시 Token을 발급하거나 인증받지 않는한은 cidr을 기반으로한 차단을 동적으로 적용할 수 없다.")],-1),v=n("p",null,[e("이경우 Sentinel을 사용하여 동적인 정책을 적용할 수 있다. Sentinel은 ACL방식의 기존 "),n("code",null,"Policy"),e("와는 달리 Path가 아닌 다른 검증 조건을 추가할 수 있다.")],-1),m={href:"https://github.com/hashicorp/vault-guides/blob/master/governance/sentinel/README.md",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.hashicorp.com/products/vault/trial",target:"_blank",rel:"noopener noreferrer"},b=c(`<h2 id="테스트-사용자-생성" tabindex="-1"><a class="header-anchor" href="#테스트-사용자-생성"><span>테스트 사용자 생성</span></a></h2><p>Sentinel 적용을 확인하기 위해 모든 권한이 있는 기존 <code>Policy</code> 방식의 정책을 생성한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault policy <span class="token function">write</span> super-user - <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
path &quot;*&quot; {
capabilities = [&quot;create&quot;, &quot;read&quot;, &quot;update&quot;, &quot;delete&quot;, &quot;list&quot;, &quot;sudo&quot;]
}
EOF</span>
</code></pre></div><p>생성한 정책고 앞으로 생성할 Sentinel 정책이 포함된 사용자를 생성한다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/userpass/users/admin <span class="token assign-left variable">password</span><span class="token operator">=</span>password <span class="token assign-left variable">policies</span><span class="token operator">=</span><span class="token string">&quot;super-user, test-rgp&quot;</span>
vault <span class="token function">write</span> auth/userpass/users/rgp <span class="token assign-left variable">password</span><span class="token operator">=</span>password <span class="token assign-left variable">policies</span><span class="token operator">=</span><span class="token string">&quot;super-user, test-rgp&quot;</span>
</code></pre></div><p><code>admin</code>과 <code>rgp</code> 사용자 모두 동일한 정책을 부여 받았다. Sentinel에서는 <code>identity</code> 정보를 기반으로 조건을 부여할 수 있으며, 동일한 정책이 부여되었더라도 어떤 <code>identity</code> 인가에 따라 적용 여부를 선택적으로 검증할 수 있다.</p><p>각 사용자로 로그인하여 Token 정보를 확인하면 <code>entity_id</code> 값을 확인할 수 있다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token assign-left variable">TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>vault login <span class="token parameter variable">-field</span><span class="token operator">=</span>token <span class="token parameter variable">-method</span> userpass <span class="token assign-left variable">username</span><span class="token operator">=</span>admin <span class="token assign-left variable">password</span><span class="token operator">=</span>password<span class="token variable">)</span></span>

$ vault token lookup <span class="token variable">$TOKEN</span>

Key                 Value
---                 -----
display_name        userpass-admin
entity_id           <span class="token number">17230158</span>-d0ad-dd6d-b749-3c7de9e2b4cf
policies            <span class="token punctuation">[</span>default super-user test-rgp<span class="token punctuation">]</span>
renewable           <span class="token boolean">true</span>
ttl                 768h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sentinel-생성" tabindex="-1"><a class="header-anchor" href="#sentinel-생성"><span>Sentinel 생성</span></a></h2><p>다음과 같이 적용할 <code>identity-cidr-check.sentinel</code> 파일을 생성한다. (확장자는 다른 확장자를 사용해도 무방하다. e.g. hcl)</p><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>import <span class="token string">&quot;sockaddr&quot;</span>
import <span class="token string">&quot;strings&quot;</span>

print(identity.entity.id)
print(request.connection.remote_addr)

<span class="token property">precond</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
    <span class="token comment"># admin user</span>
    <span class="token comment"># identity.entity.id is &quot;17230158-d0ad-dd6d-b749-3c7de9e2b4cf&quot; or</span>
    <span class="token comment"># rgp user</span>
    identity.entity.id is <span class="token string">&quot;31cc28c0-9fd0-82b3-a70d-0eef741c5349&quot;</span>
<span class="token punctuation">}</span>

<span class="token property">cidrcheck</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
    <span class="token comment">## Loopback</span>
    <span class="token comment"># sockaddr.is_contained(&quot;127.0.0.0/8&quot;, request.connection.remote_addr) or </span>
    sockaddr.is_contained(<span class="token string">&quot;22.32.4.0/24&quot;</span>, request.connection.remote_addr)
<span class="token punctuation">}</span>

<span class="token property">main</span> <span class="token punctuation">=</span> rule when <span class="token keyword">precond</span> <span class="token punctuation">{</span>
    cidrcheck
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>precond : main 규칙에서 조건으로 부여할 규칙을 정의한다. <ul><li><code>identity.entity.id</code>로 검증할 아이디 내용에는 앞서 확인한 <code>admin</code>과 <code>rgp</code> 사용자의 <code>entity_id</code>를 조건에 넣는다.</li><li><code>admin</code> 사용자의 경우 우선 주석처리하여 진행한다.</li></ul></li><li>cidrcheck : cidr을 검증할 규칙을 정의한다.</li></ul><p>적용하는 방식은 다음과 같다.</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>POLICY=$(base64 identity-cidr-check.sentinel)

vault write sys/policies/rgp/test-rgp \\
      policy=&quot;\${POLICY}&quot; \\
      enforcement_level=&quot;hard-mandatory&quot;
</code></pre></div><h2 id="sentinel-검증" tabindex="-1"><a class="header-anchor" href="#sentinel-검증"><span>Sentinel 검증</span></a></h2><p><code>admin</code> 사용자로 로그인하여 kv를 생성하고 값을 넣는다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault login <span class="token parameter variable">-method</span> userpass <span class="token assign-left variable">username</span><span class="token operator">=</span>admin <span class="token assign-left variable">password</span><span class="token operator">=</span>password
$ vault secrets <span class="token builtin class-name">enable</span> kv
$ vault kv put kv/hello <span class="token assign-left variable">foo</span><span class="token operator">=</span>bar
$ vault kv get kv/hello
<span class="token operator">==</span><span class="token operator">=</span> Data <span class="token operator">==</span><span class="token operator">=</span>
Key    Value
---    -----
foo    bar
</code></pre></div><p><code>rgp</code> 사용자로 로그인하여 kv를 조회해본다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault login <span class="token parameter variable">-method</span> userpass <span class="token assign-left variable">username</span><span class="token operator">=</span>rgp <span class="token assign-left variable">password</span><span class="token operator">=</span>password
$ vault kv get kv/hello
Error making API request.

URL: GET http://127.0.0.1:8200/v1/sys/internal/ui/mounts/kv/hello
Code: <span class="token number">400</span>. Errors:

* <span class="token number">2</span> errors occurred:
	* rgp standard policy <span class="token string">&quot;root/test-rgp&quot;</span> evaluation resulted <span class="token keyword">in</span> denial.

The specific error was:
<span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>

A trace of the execution <span class="token keyword">for</span> policy <span class="token string">&quot;root/test-rgp&quot;</span> is available:

Result: <span class="token boolean">false</span>

Description: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

print<span class="token punctuation">(</span><span class="token punctuation">)</span> output:

31cc28c0-9fd0-82b3-a70d-0eef741c5349
<span class="token number">127.0</span>.0.1


Rule <span class="token string">&quot;main&quot;</span> <span class="token punctuation">(</span>root/test-rgp:19:1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
Rule <span class="token string">&quot;cidrcheck&quot;</span> <span class="token punctuation">(</span>root/test-rgp:14:1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
Rule <span class="token string">&quot;precond&quot;</span> <span class="token punctuation">(</span>root/test-rgp:7:1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">true</span>
	* permission denied
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>cidrcheck 에서 검증하는 cidr에 속하지 못하면 요청 단계에서 권한이 없음을 표기한다.</p><h2 id="identity-동적으로-변경하기" tabindex="-1"><a class="header-anchor" href="#identity-동적으로-변경하기"><span>identity 동적으로 변경하기</span></a></h2><p>앞서 작성한 sentinel 규칙에서 <code>admin</code> 사용자의 <code>identity.id</code>의 주석을 해제하여 다시 적용해 본다.</p>`,22),h=n("div",{class:"language-hcl line-numbers-mode","data-ext":"hcl","data-title":"hcl"},[n("pre",{hcl:"",class:"language-hcl"},[n("code",null,[e(`...생략...

`),n("span",{class:"token property"},"precond"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token keyword"},"rule"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"# admin user"),e(`
    identity.entity.id is `),n("span",{class:"token string"},'"17230158-d0ad-dd6d-b749-3c7de9e2b4cf"'),e(` or
    `),n("span",{class:"token comment"},"# rgp user"),e(`
    identity.entity.id is `),n("span",{class:"token string"},'"31cc28c0-9fd0-82b3-a70d-0eef741c5349"'),e(`
`),n("span",{class:"token punctuation"},"}"),e(`

...생략...
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,[n("code",null,"admin"),e(" 사용자로 로그인하여 kv를 조회해도 cidr 조건에 맞지 않으면 동일한 오류가 발생한다.")],-1),y=n("h2",{id:"cidr-동적으로-변경하기",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cidr-동적으로-변경하기"},[n("span",null,"cidr 동적으로 변경하기")])],-1),_=n("p",null,[e("허용하는 cidr을 추가해본다. 로컬에서 테스트하는 경우 "),n("code",null,"127.0.0.1"),e("이 해당 ip가 될 수 있다.")],-1),f=n("div",{class:"language-hcl","data-ext":"hcl","data-title":"hcl"},[n("pre",{hcl:"",class:"language-hcl"},[n("code",null,[e(`...생략...

`),n("span",{class:"token property"},"cidrcheck"),e(),n("span",{class:"token punctuation"},"="),e(),n("span",{class:"token keyword"},"rule"),e(),n("span",{class:"token punctuation"},"{"),e(`
    `),n("span",{class:"token comment"},"## Loopback"),e(`
    sockaddr.is_contained(`),n("span",{class:"token string"},'"127.0.0.0/8"'),e(`, request.connection.remote_addr) or 
    sockaddr.is_contained(`),n("span",{class:"token string"},'"22.32.4.0/24"'),e(`, request.connection.remote_addr)
`),n("span",{class:"token punctuation"},"}"),e(`

...생략...
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br"),n("br"),n("br"),n("br"),n("br")])],-1),q=n("p",null,[e("적용 후 "),n("code",null,"admin"),e(" 사용자와 "),n("code",null,"rgp"),e(" 사용자 모두 정상적으로 kv의 값을 확인할 수 있다.")],-1);function w(x,S){const s=i("ExternalLinkIcon");return l(),o("div",null,[d,p,u,v,n("ul",null,[n("li",null,[n("p",null,[e("예제 (GitHub) : "),n("a",m,[e("https://github.com/hashicorp/vault-guides/blob/master/governance/sentinel/README.md"),a(s)])])]),n("li",null,[n("p",null,[e("엔터프라이즈 Trial 신청 (30일) : "),n("a",k,[e("https://www.hashicorp.com/products/vault/trial"),a(s)])])])]),b,h,g,y,_,f,q])}const T=t(r,[["render",w],["__file","sentinel-check-identity-cidr.html.vue"]]),E=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/sentinel-check-identity-cidr.html","title":"Sentinel - (Identity & CIDR)","lang":"ko-KR","frontmatter":{"description":"Sentinel을 사용하여 identity 조건에 cidr 검사","tag":["vault","sentinel","cidr","enterprise"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/sentinel-check-identity-cidr.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Sentinel - (Identity & CIDR)"}],["meta",{"property":"og:description","content":"Sentinel을 사용하여 identity 조건에 cidr 검사"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"sentinel"}],["meta",{"property":"article:tag","content":"cidr"}],["meta",{"property":"article:tag","content":"enterprise"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Sentinel - (Identity & CIDR)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"테스트 사용자 생성","slug":"테스트-사용자-생성","link":"#테스트-사용자-생성","children":[]},{"level":2,"title":"Sentinel 생성","slug":"sentinel-생성","link":"#sentinel-생성","children":[]},{"level":2,"title":"Sentinel 검증","slug":"sentinel-검증","link":"#sentinel-검증","children":[]},{"level":2,"title":"identity 동적으로 변경하기","slug":"identity-동적으로-변경하기","link":"#identity-동적으로-변경하기","children":[]},{"level":2,"title":"cidr 동적으로 변경하기","slug":"cidr-동적으로-변경하기","link":"#cidr-동적으로-변경하기","children":[]}],"git":{"createdTime":1668567247000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":3}]},"readingTime":{"minutes":6.58,"words":395},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/sentinel-check-identity-cidr.md","localizedDate":"2022년 11월 16일","excerpt":"\\n<blockquote>\\n<p>Enterprise 기능</p>\\n</blockquote>\\n<p>Token Role에 <code>bound_cidr</code>을 적용하거나 여타 인증(AppRole, Userpass 등)에 허용하는 cidr을 적용하는 경우 다시 Token을 발급하거나 인증받지 않는한은 cidr을 기반으로한 차단을 동적으로 적용할 수 없다.</p>\\n<p>이경우 Sentinel을 사용하여 동적인 정책을 적용할 수 있다. Sentinel은 ACL방식의 기존 <code>Policy</code>와는 달리 Path가 아닌 다른 검증 조건을 추가할 수 있다.</p>"}');export{T as comp,E as data};
