import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,h as e}from"./app-BWMI_1Y2.js";const l={},p=e(`<h1 id="vault-secret-engine-조회-스크립트" tabindex="-1"><a class="header-anchor" href="#vault-secret-engine-조회-스크립트"><span>Vault Secret Engine 조회 스크립트</span></a></h1><h2 id="_1-policy" tabindex="-1"><a class="header-anchor" href="#_1-policy"><span>1. Policy</span></a></h2><ul><li><code>namespace</code> 하위 목록을 조회할 수 있는 권한이 필요합니다. <ul><li><code>sys/namespaces/*</code>: 모든 네임스페이스를 나열하고 읽을 수 있는 권한을 부여합니다.</li></ul></li><li>활성화된 Secret Engine을 조회할 수 있는 권한이 필요합니다. <ul><li><code>sys/mounts</code>: 루트 레벨의 마운트 포인트(시크릿 엔진)를 읽을 수 있는 권한을 부여합니다.</li><li><code>+/sys/mounts</code>: 모든 네임스페이스의 마운트 포인트를 읽을 수 있는 권한을 부여합니다.</li><li><code>+/*/metadata/*</code>: 필요한 경우, 모든 네임스페이스의 KV 시크릿 엔진 메타데이터에 접근할 수 있는 권한을 부여합니다.</li></ul></li></ul><div class="language-hcl line-numbers-mode" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line"><span class="token comment"># 모든 네임스페이스에 대한 읽기 권한</span></span>
<span class="line">path <span class="token string">&quot;sys/namespaces/*&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;read&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 모든 네임스페이스의 마운트 포인트(시크릿 엔진) 조회 권한</span></span>
<span class="line">path <span class="token string">&quot;sys/mounts&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;read&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 모든 네임스페이스에서 시크릿 엔진 목록 조회 권한</span></span>
<span class="line">path <span class="token string">&quot;+/sys/mounts&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;read&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 필요한 경우, 특정 시크릿 엔진에 대한 메타데이터 읽기 권한</span></span>
<span class="line"><span class="token comment"># 예: KV 시크릿 엔진</span></span>
<span class="line">path <span class="token string">&quot;+/*/metadata/*&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;list&quot;</span>, <span class="token string">&quot;read&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>정책 생성 :</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">vault policy <span class="token function">write</span> secret-list-getter ./policy.hcl</span>
<span class="line"></span></code></pre></div><h2 id="_2-cli-script-list-vault-secrets-sh" tabindex="-1"><a class="header-anchor" href="#_2-cli-script-list-vault-secrets-sh"><span>2. CLI script (list_vault_secrets.sh)</span></a></h2><ul><li><code>list_vault_secrets.sh</code>의 첫번째 Argument가 기준이 됩니다. (e.g. <code>admin</code>) <ul><li>루트부터 시작: <code>./script.sh</code></li><li>특정 네임스페이스부터 시작: <code>./script.sh admin</code> 또는 <code>./script.sh admin/subns</code></li></ul></li><li>하위 namespace를 조회하여 반복적으로 Secret Engine을 조회합니다.</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 네임스페이스와 시크릿 엔진을 재귀적으로 조회하는 함수</span></span>
<span class="line"><span class="token function-name function">list_secrets</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin class-name">local</span> <span class="token assign-left variable">full_namespace</span><span class="token operator">=</span><span class="token variable">$1</span></span>
<span class="line">    <span class="token builtin class-name">local</span> <span class="token assign-left variable">indent</span><span class="token operator">=</span><span class="token variable">$2</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 현재 네임스페이스 설정</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$full_namespace</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">        <span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_NAMESPACE</span><span class="token operator">=</span><span class="token variable">$full_namespace</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        <span class="token builtin class-name">unset</span> VAULT_NAMESPACE</span>
<span class="line">    <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${indent}</span>Namespace: <span class="token variable">\${VAULT_NAMESPACE<span class="token operator">:-</span>}</span>&quot;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 시크릿 엔진 목록 조회</span></span>
<span class="line">    vault secrets list <span class="token parameter variable">-format</span><span class="token operator">=</span>json <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;to_entries[] | select(.value.type != &quot;system&quot;) | &quot;\\(.key)|\\(.value.type)&quot;&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span><span class="token string">&#39;|&#39;</span> <span class="token builtin class-name">read</span> <span class="token parameter variable">-r</span> engine <span class="token builtin class-name">type</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">\${indent}</span>  Secret Engine: <span class="token variable">$engine</span> (Type: <span class="token variable">$type</span>)&quot;</span></span>
<span class="line">    <span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment"># 하위 네임스페이스 조회</span></span>
<span class="line">    vault namespace list <span class="token parameter variable">-format</span><span class="token operator">=</span>json <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span>/dev/null <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.[]&#39;</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> subns<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">        <span class="token builtin class-name">local</span> new_namespace</span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$full_namespace</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">            <span class="token assign-left variable">new_namespace</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${full_namespace}</span>/<span class="token variable">\${subns}</span>&quot;</span></span>
<span class="line">        <span class="token keyword">else</span></span>
<span class="line">            <span class="token assign-left variable">new_namespace</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$subns</span>&quot;</span></span>
<span class="line">        <span class="token keyword">fi</span></span>
<span class="line">        list_secrets <span class="token string">&quot;<span class="token variable">$new_namespace</span>&quot;</span> <span class="token string">&quot;  <span class="token variable">\${indent}</span>&quot;</span></span>
<span class="line">    <span class="token keyword">done</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># VAULT_TOKEN 환경변수 확인</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">&quot;<span class="token variable">$VAULT_TOKEN</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error: VAULT_TOKEN environment variable is not set.&quot;</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 메인 실행</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;Listing all secret engines in all namespaces:&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 첫 번째 인자가 있으면 해당 네임스페이스부터 시작, 없으면 루트부터 시작</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-n</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    list_secrets <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    list_secrets <span class="token string">&quot;&quot;</span> <span class="token string">&quot;&quot;</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-token-생성-및-실행" tabindex="-1"><a class="header-anchor" href="#_3-token-생성-및-실행"><span>3. Token 생성 및 실행</span></a></h2><p>실행 예시</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>vault token create <span class="token parameter variable">-field</span><span class="token operator">=</span>token <span class="token parameter variable">-policy</span><span class="token operator">=</span>secret-list-getter<span class="token variable">)</span></span> <span class="token punctuation">\\</span></span>
<span class="line">  ./list_vault_secrets.sh <span class="token punctuation">\\</span></span>
<span class="line">  admin</span>
<span class="line"></span></code></pre></div><p>결과 1 (HCP Vault - admin namespace 기준)</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>vault token create <span class="token parameter variable">-field</span><span class="token operator">=</span>token <span class="token parameter variable">-policy</span><span class="token operator">=</span>secret-list-getter<span class="token variable">)</span></span> <span class="token punctuation">\\</span></span>
<span class="line">  ./list_vault_secrets.sh <span class="token punctuation">\\</span></span>
<span class="line">  admin</span>
<span class="line"></span>
<span class="line">Listing all secret engines <span class="token keyword">in</span> all namespaces:</span>
<span class="line">Namespace: admin</span>
<span class="line">  Secret Engine: alicloud/ <span class="token punctuation">(</span>Type: alicloud<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: ansible-ssh/ <span class="token punctuation">(</span>Type: <span class="token function">ssh</span><span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: aws-doormat/ <span class="token punctuation">(</span>Type: aws<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: aws/ <span class="token punctuation">(</span>Type: aws<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: azure/ <span class="token punctuation">(</span>Type: azure<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: ns_cubbyhole<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: gcp/ <span class="token punctuation">(</span>Type: gcp<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: identity/ <span class="token punctuation">(</span>Type: ns_identity<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: kv_v1/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: my_kv/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: pki/ <span class="token punctuation">(</span>Type: pki<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: pki_int/ <span class="token punctuation">(</span>Type: pki<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: pki_kv/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: planetscale/ <span class="token punctuation">(</span>Type: database<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: secret/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: ssh/ <span class="token punctuation">(</span>Type: <span class="token function">ssh</span><span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: sys/ <span class="token punctuation">(</span>Type: ns_system<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: totp/ <span class="token punctuation">(</span>Type: totp<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: transit/ <span class="token punctuation">(</span>Type: transit<span class="token punctuation">)</span></span>
<span class="line">  Namespace: admin/A-Com/</span>
<span class="line">    Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: ns_cubbyhole<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: identity/ <span class="token punctuation">(</span>Type: ns_identity<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: sys/ <span class="token punctuation">(</span>Type: ns_system<span class="token punctuation">)</span></span>
<span class="line">  Namespace: admin/my-namespace/</span>
<span class="line">    Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: ns_cubbyhole<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: identity/ <span class="token punctuation">(</span>Type: ns_identity<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: sys/ <span class="token punctuation">(</span>Type: ns_system<span class="token punctuation">)</span></span>
<span class="line">  Namespace: admin/with-okta/</span>
<span class="line">    Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: ns_cubbyhole<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: identity/ <span class="token punctuation">(</span>Type: ns_identity<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: sample-secret/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: sys/ <span class="token punctuation">(</span>Type: ns_system<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>결과 2 (Vault 설치형 - root(/) namespace 기준)</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>vault token create <span class="token parameter variable">-field</span><span class="token operator">=</span>token <span class="token parameter variable">-policy</span><span class="token operator">=</span>secret-list-getter<span class="token variable">)</span></span> <span class="token punctuation">\\</span></span>
<span class="line">  ./list_vault_secrets.sh</span>
<span class="line"></span>
<span class="line">Listing all secret engines <span class="token keyword">in</span> all namespaces:</span>
<span class="line">Namespace:</span>
<span class="line">  Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: cubbyhole<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: identity/ <span class="token punctuation">(</span>Type: identity<span class="token punctuation">)</span></span>
<span class="line">  Secret Engine: secret/ <span class="token punctuation">(</span>Type: kv<span class="token punctuation">)</span></span>
<span class="line">  Namespace: sub1/</span>
<span class="line">    Secret Engine: aws/ <span class="token punctuation">(</span>Type: aws<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: cubbyhole/ <span class="token punctuation">(</span>Type: ns_cubbyhole<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: identity/ <span class="token punctuation">(</span>Type: ns_identity<span class="token punctuation">)</span></span>
<span class="line">    Secret Engine: sys/ <span class="token punctuation">(</span>Type: ns_system<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),t=[p];function i(c,o){return n(),a("div",null,t)}const d=s(l,[["render",i],["__file","get-all-secret-engine.html.vue"]]),v=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/get-all-secret-engine.html","title":"Vault Secret Engine 조회 스크립트","lang":"ko-KR","frontmatter":{"tag":["vault"],"description":"Vault Secret Engine 조회 스크립트 1. Policy namespace 하위 목록을 조회할 수 있는 권한이 필요합니다. sys/namespaces/*: 모든 네임스페이스를 나열하고 읽을 수 있는 권한을 부여합니다. 활성화된 Secret Engine을 조회할 수 있는 권한이 필요합니다. sys/mount...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/get-all-secret-engine.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault Secret Engine 조회 스크립트"}],["meta",{"property":"og:description","content":"Vault Secret Engine 조회 스크립트 1. Policy namespace 하위 목록을 조회할 수 있는 권한이 필요합니다. sys/namespaces/*: 모든 네임스페이스를 나열하고 읽을 수 있는 권한을 부여합니다. 활성화된 Secret Engine을 조회할 수 있는 권한이 필요합니다. sys/mount..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-07-12T13:58:51.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:modified_time","content":"2024-07-12T13:58:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault Secret Engine 조회 스크립트\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-12T13:58:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. Policy","slug":"_1-policy","link":"#_1-policy","children":[]},{"level":2,"title":"2. CLI script (list_vault_secrets.sh)","slug":"_2-cli-script-list-vault-secrets-sh","link":"#_2-cli-script-list-vault-secrets-sh","children":[]},{"level":2,"title":"3. Token 생성 및 실행","slug":"_3-token-생성-및-실행","link":"#_3-token-생성-및-실행","children":[]}],"git":{"createdTime":1720791388000,"updatedTime":1720792731000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2}]},"readingTime":{"minutes":7.48,"words":449},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/get-all-secret-engine.md","localizedDate":"2024년 7월 12일","excerpt":"\\n<h2>1. Policy</h2>\\n<ul>\\n<li><code>namespace</code>  하위 목록을 조회할 수 있는 권한이 필요합니다.\\n<ul>\\n<li><code>sys/namespaces/*</code>: 모든 네임스페이스를 나열하고 읽을 수 있는 권한을 부여합니다.</li>\\n</ul>\\n</li>\\n<li>활성화된 Secret Engine을 조회할 수 있는 권한이 필요합니다.\\n<ul>\\n<li><code>sys/mounts</code>: 루트 레벨의 마운트 포인트(시크릿 엔진)를 읽을 수 있는 권한을 부여합니다.</li>\\n<li><code>+/sys/mounts</code>: 모든 네임스페이스의 마운트 포인트를 읽을 수 있는 권한을 부여합니다.</li>\\n<li><code>+/*/metadata/*</code>: 필요한 경우, 모든 네임스페이스의 KV 시크릿 엔진 메타데이터에 접근할 수 있는 권한을 부여합니다.</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{d as comp,v as data};