import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,e as s}from"./app-DwRVeH7t.js";const t={},l=s(`<h1 id="transit-key-exportable-deny" tabindex="-1"><a class="header-anchor" href="#transit-key-exportable-deny"><span>Transit Key Exportable Deny</span></a></h1><h2 id="_1-egp용-정책-생성-exportable-deny-sentinel" tabindex="-1"><a class="header-anchor" href="#_1-egp용-정책-생성-exportable-deny-sentinel"><span>1. EGP용 정책 생성 exportable_deny.sentinel</span></a></h2><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>import <span class="token string">&quot;strings&quot;</span>

<span class="token property">exportable</span> <span class="token punctuation">=</span> request.data.exportable

<span class="token property">exportable_check</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
  exportable is <span class="token string">&quot;false&quot;</span>
<span class="token punctuation">}</span>

<span class="token property">main</span> <span class="token punctuation">=</span> <span class="token keyword">rule</span> <span class="token punctuation">{</span>
  exportable_check
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>exportable_check</code> : 요청의 Body에 <code>exportable</code>의 값이 <code>false</code>인 경우에 <mark>TRUE</mark> 반환</li></ul><h2 id="_2-egp에-정책-설정" tabindex="-1"><a class="header-anchor" href="#_2-egp에-정책-설정"><span>2. EGP에 정책 설정</span></a></h2><p>EGP는 지정된 path에 대해 정책을 적용</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> sys/policies/egp/exportable-check <span class="token punctuation">\\</span>
  <span class="token assign-left variable">policy</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>base64 <span class="token parameter variable">-i</span> exportable-deny.sentinel<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">paths</span><span class="token operator">=</span><span class="token string">&quot;*&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">enforcement_level</span><span class="token operator">=</span><span class="token string">&quot;hard-mandatory&quot;</span>
</code></pre></div><ul><li><code>paths</code>로 지정된 API 경로에 요청이 들어오면 동작</li></ul><h2 id="_3-테스트" tabindex="-1"><a class="header-anchor" href="#_3-테스트"><span>3. 테스트</span></a></h2><h3 id="_3-1-test-policy" tabindex="-1"><a class="header-anchor" href="#_3-1-test-policy"><span>3.1 Test Policy</span></a></h3><p><code>transit</code> 경로에 모든 권한이 있는 사용자</p><div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>vault policy write transit-admin - &lt;&lt; EOF
path <span class="token string">&quot;transit&quot;</span> <span class="token punctuation">{</span>
<span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;read&quot;</span>, <span class="token string">&quot;update&quot;</span>, <span class="token string">&quot;delete&quot;</span>, <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

path <span class="token string">&quot;transit/*&quot;</span> <span class="token punctuation">{</span>
<span class="token property">capabilities</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;create&quot;</span>, <span class="token string">&quot;read&quot;</span>, <span class="token string">&quot;update&quot;</span>, <span class="token string">&quot;delete&quot;</span>, <span class="token string">&quot;list&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
EOF
</code></pre></div><h3 id="_3-2-policy-token-생성" tabindex="-1"><a class="header-anchor" href="#_3-2-policy-token-생성"><span>3.2 Policy Token 생성</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>vault token create <span class="token parameter variable">-policy</span><span class="token operator">=</span>transit-admin<span class="token variable">)</span></span>
</code></pre></div><h3 id="_3-3-sentinel-테스트" tabindex="-1"><a class="header-anchor" href="#_3-3-sentinel-테스트"><span>3.3 Sentinel 테스트</span></a></h3><p><code>exportable</code> 옵션이 <code>false인</code> 경우 정상적으로 수행</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> <span class="token parameter variable">-f</span> transit/keys/my-key-name <span class="token assign-left variable">exportable</span><span class="token operator">=</span>false

Key                       Value
---                       -----
allow_plaintext_backup    <span class="token boolean">false</span>
auto_rotate_period        0s
deletion_allowed          <span class="token boolean">false</span>
derived                   <span class="token boolean">false</span>
exportable                <span class="token boolean">false</span>
imported_key              <span class="token boolean">false</span>
keys                      map<span class="token punctuation">[</span><span class="token number">1</span>:1702877441<span class="token punctuation">]</span>
latest_version            <span class="token number">1</span>
min_available_version     <span class="token number">0</span>
min_decryption_version    <span class="token number">1</span>
min_encryption_version    <span class="token number">0</span>
name                      my-key-name
supports_decryption       <span class="token boolean">true</span>
supports_derivation       <span class="token boolean">true</span>
supports_encryption       <span class="token boolean">true</span>
supports_signing          <span class="token boolean">false</span>
<span class="token builtin class-name">type</span>                      aes256-gcm96
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>exportable</code> 옵션이 <code>false인</code> 경우 거부됨</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault <span class="token function">write</span> <span class="token parameter variable">-f</span> transit/keys/my-key-name <span class="token assign-left variable">exportable</span><span class="token operator">=</span>true

Error writing data to transit/keys/my-key-name: Error making API request.

URL: PUT http://127.0.0.1:8200/v1/transit/keys/my-key-name
Code: <span class="token number">403</span>. Errors:

* <span class="token number">2</span> errors occurred:
	* egp standard policy <span class="token string">&quot;root/exportable-check&quot;</span> evaluation resulted <span class="token keyword">in</span> denial.

The specific error was:
<span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>

A trace of the execution <span class="token keyword">for</span> policy <span class="token string">&quot;root/exportable-check&quot;</span> is available:

Result: <span class="token boolean">false</span>

Description: <span class="token operator">&lt;</span>none<span class="token operator">&gt;</span>

Rule <span class="token string">&quot;main&quot;</span> <span class="token punctuation">(</span>root/exportable-check:9:1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
Rule <span class="token string">&quot;exportable_check&quot;</span> <span class="token punctuation">(</span>root/exportable-check:5:1<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token boolean">false</span>
	* permission denied


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),i=[l];function o(p,r){return a(),e("div",null,i)}const u=n(t,[["render",o],["__file","transit-secrets-key-exportable-deny.html.vue"]]),k=JSON.parse('{"path":"/04-HashiCorp/06-Vault/07-Sentinel-Sample/transit-secrets-key-exportable-deny.html","title":"Transit Key Exportable Deny","lang":"ko-KR","frontmatter":{"description":"Sentinel - Transit Secrets Key Exportable Option Deny","tag":["Vault","Sentinel","Policy"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/07-Sentinel-Sample/transit-secrets-key-exportable-deny.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Transit Key Exportable Deny"}],["meta",{"property":"og:description","content":"Sentinel - Transit Secrets Key Exportable Option Deny"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-12-18T05:48:39.000Z"}],["meta",{"property":"article:tag","content":"Vault"}],["meta",{"property":"article:tag","content":"Sentinel"}],["meta",{"property":"article:tag","content":"Policy"}],["meta",{"property":"article:modified_time","content":"2023-12-18T05:48:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Transit Key Exportable Deny\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-18T05:48:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. EGP용 정책 생성 exportable_deny.sentinel","slug":"_1-egp용-정책-생성-exportable-deny-sentinel","link":"#_1-egp용-정책-생성-exportable-deny-sentinel","children":[]},{"level":2,"title":"2. EGP에 정책 설정","slug":"_2-egp에-정책-설정","link":"#_2-egp에-정책-설정","children":[]},{"level":2,"title":"3. 테스트","slug":"_3-테스트","link":"#_3-테스트","children":[{"level":3,"title":"3.1 Test Policy","slug":"_3-1-test-policy","link":"#_3-1-test-policy","children":[]},{"level":3,"title":"3.2 Policy Token 생성","slug":"_3-2-policy-token-생성","link":"#_3-2-policy-token-생성","children":[]},{"level":3,"title":"3.3 Sentinel 테스트","slug":"_3-3-sentinel-테스트","link":"#_3-3-sentinel-테스트","children":[]}]}],"git":{"createdTime":1702878519000,"updatedTime":1702878519000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":3.85,"words":231},"filePathRelative":"04-HashiCorp/06-Vault/07-Sentinel-Sample/transit-secrets-key-exportable-deny.md","localizedDate":"2023년 12월 18일","excerpt":"\\n<h2>1. EGP용 정책 생성 exportable_deny.sentinel</h2>\\n<div class=\\"language-hcl\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code>import <span class=\\"token string\\">\\"strings\\"</span>\\n\\n<span class=\\"token property\\">exportable</span> <span class=\\"token punctuation\\">=</span> request.data.exportable\\n\\n<span class=\\"token property\\">exportable_check</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token keyword\\">rule</span> <span class=\\"token punctuation\\">{</span>\\n  exportable is <span class=\\"token string\\">\\"false\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token property\\">main</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token keyword\\">rule</span> <span class=\\"token punctuation\\">{</span>\\n  exportable_check\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{u as comp,k as data};
