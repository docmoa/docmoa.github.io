import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,h as e}from"./app-BWMI_1Y2.js";const l={},p=e(`<h1 id="jenkins-with-vault" tabindex="-1"><a class="header-anchor" href="#jenkins-with-vault"><span>jenkins with vault</span></a></h1><p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br> 이 예제는 진짜 kv까지만 테스트함</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># approle 엔진 생성</span></span>
<span class="line">$ vault auth <span class="token builtin class-name">enable</span> approle</span>
<span class="line"><span class="token comment"># kv2 enable</span></span>
<span class="line">$ vault secrets <span class="token builtin class-name">enable</span> kv-v2</span>
<span class="line"><span class="token comment"># kv enable</span></span>
<span class="line">$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv</span>
<span class="line"></span>
<span class="line"><span class="token comment"># jenkins 정책으로 될 파일 생성 v1, v2</span></span>
<span class="line">$ <span class="token function">tee</span> jenkins-policy.hcl <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">path &quot;kv/secret/data/jenkins/*&quot; {</span>
<span class="line">  capabilities = [ &quot;read&quot; ]</span>
<span class="line">}</span>
<span class="line">path &quot;kv-v2/data/jenkins/*&quot; {</span>
<span class="line">  capabilities = [ &quot;read&quot; ]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#jenkins 정책 생성</span></span>
<span class="line">vault policy <span class="token function">write</span> jenkins jenkins-policy.hcl</span>
<span class="line"></span>
<span class="line"><span class="token comment">#approle 생성 및 정책 jenkins에 연결</span></span>
<span class="line">vault <span class="token function">write</span> auth/approle/role/jenkins <span class="token assign-left variable">token_policies</span><span class="token operator">=</span><span class="token string">&quot;jenkins&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line"><span class="token assign-left variable">token_ttl</span><span class="token operator">=</span>1h <span class="token assign-left variable">token_max_ttl</span><span class="token operator">=</span>4h</span>
<span class="line"> </span>
<span class="line"><span class="token comment">#Role id, secret id 가져오기</span></span>
<span class="line"></span>
<span class="line">vault <span class="token builtin class-name">read</span> auth/approle/role/jenkins/role-id</span>
<span class="line">vault <span class="token function">write</span> <span class="token parameter variable">-f</span> auth/approle/role/jenkins/secret-id</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv</span>
<span class="line">$ <span class="token function">tee</span> gitlab.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;gitlabIP&quot;: &quot;172.21.2.52&quot;,</span>
<span class="line">  &quot;api-key&quot;: &quot;RjLAbbWsSAzXoyBvo2qL&quot;</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token function">tee</span> gitlab-v2.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">{</span>
<span class="line">  &quot;gitlabIP&quot;: &quot;172.21.2.52&quot;,</span>
<span class="line">  &quot;api-key&quot;: &quot;RjLAbbWsSAzXoyBvo2qL&quot;,</span>
<span class="line">  &quot;version&quot;: &quot;v2&quot;</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">vault kv put kv/secret/data/jenkins/gitlab @gitlab.json</span>
<span class="line">vault kv put kv-v2/jenkins/gitlab @gitlab-v2.json</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v1-pipe-line" tabindex="-1"><a class="header-anchor" href="#v1-pipe-line"><span>v1 pipe line</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># jenkins pipe line v1</span></span>
<span class="line">def secrets <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>path: <span class="token string">&#39;kv%2Fsecret/data/jenkins/gitlab&#39;</span>, engineVersion:1, secretValues: <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;gitlabIP&#39;</span>, vaultKey: <span class="token string">&#39;gitlabIP&#39;</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;API_KEY&#39;</span>, vaultKey: <span class="token string">&#39;api-key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>,</span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line">def configuration <span class="token operator">=</span> <span class="token punctuation">[</span>vaultUrl: <span class="token string">&#39;http://172.21.2.50:8200&#39;</span>,  vaultCredentialId: <span class="token string">&#39;vault-approle&#39;</span>, engineVersion: <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    options <span class="token punctuation">{</span></span>
<span class="line">        buildDiscarder<span class="token punctuation">(</span>logRotator<span class="token punctuation">(</span>numToKeepStr: <span class="token string">&#39;20&#39;</span><span class="token punctuation">))</span></span>
<span class="line">        disableConcurrentBuilds<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    stages<span class="token punctuation">{</span>   </span>
<span class="line">      stage<span class="token punctuation">(</span><span class="token string">&#39;Vault&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        steps <span class="token punctuation">{</span></span>
<span class="line">          withVault<span class="token punctuation">(</span><span class="token punctuation">[</span>configuration: configuration, vaultSecrets: secrets<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">$gitlabIP</span>&quot;</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.API_KEY}</span>&quot;</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;curl -v <span class="token variable">$gitlabIP</span>&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span>  </span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v2-pipe-line" tabindex="-1"><a class="header-anchor" href="#v2-pipe-line"><span>v2 pipe line</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># jenkins pipe line v2</span></span>
<span class="line">def secrets <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span>path: <span class="token string">&#39;kv-v2/jenkins/gitlab&#39;</span>, engineVersion:2, secretValues: <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;gitlabIP&#39;</span>, vaultKey: <span class="token string">&#39;gitlabIP&#39;</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;API_KEY&#39;</span>, vaultKey: <span class="token string">&#39;api-key&#39;</span><span class="token punctuation">]</span>,</span>
<span class="line">    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;version2&#39;</span>, vaultKey: <span class="token string">&#39;version&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">def configuration <span class="token operator">=</span> <span class="token punctuation">[</span>vaultUrl: <span class="token string">&#39;http://172.21.2.50:8200&#39;</span>,  vaultCredentialId: <span class="token string">&#39;vault-approle&#39;</span>, engineVersion: <span class="token number">2</span><span class="token punctuation">]</span></span>
<span class="line">                      </span>
<span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    options <span class="token punctuation">{</span></span>
<span class="line">        buildDiscarder<span class="token punctuation">(</span>logRotator<span class="token punctuation">(</span>numToKeepStr: <span class="token string">&#39;20&#39;</span><span class="token punctuation">))</span></span>
<span class="line">        disableConcurrentBuilds<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    stages<span class="token punctuation">{</span>   </span>
<span class="line">      stage<span class="token punctuation">(</span><span class="token string">&#39;Vault&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        steps <span class="token punctuation">{</span></span>
<span class="line">          withVault<span class="token punctuation">(</span><span class="token punctuation">[</span>configuration: configuration, vaultSecrets: secrets<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.API_KEY}</span>&quot;</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.version2}</span>&quot;</span></span>
<span class="line">            <span class="token function">sh</span> <span class="token string">&quot;curl -v <span class="token variable">\${env.gitlabIP}</span>&quot;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span>  </span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),i=[p];function t(c,o){return s(),a("div",null,i)}const v=n(l,[["render",t],["__file","jenkins-with-vault.html.vue"]]),d=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html","title":"jenkins with vault","lang":"ko-KR","frontmatter":{"description":"Vault를 활용하여 jenkins에 kv secret 활용","tag":["vault","jenkins","screct","kv"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"jenkins with vault"}],["meta",{"property":"og:description","content":"Vault를 활용하여 jenkins에 kv secret 활용"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"jenkins"}],["meta",{"property":"article:tag","content":"screct"}],["meta",{"property":"article:tag","content":"kv"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jenkins with vault\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"v1 pipe line","slug":"v1-pipe-line","link":"#v1-pipe-line","children":[]},{"level":2,"title":"v2 pipe line","slug":"v2-pipe-line","link":"#v2-pipe-line","children":[]}],"git":{"createdTime":1643344857000,"updatedTime":1695042774000,"contributors":[{"name":"ung","email":"swbs90@naver.com","commits":4},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":4.32,"words":259},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.md","localizedDate":"2022년 1월 28일","excerpt":"\\n<p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br>\\n이 예제는 진짜 kv까지만 테스트함</p>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\"><span class=\\"token comment\\"># approle 엔진 생성</span></span>\\n<span class=\\"line\\">$ vault auth <span class=\\"token builtin class-name\\">enable</span> approle</span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># kv2 enable</span></span>\\n<span class=\\"line\\">$ vault secrets <span class=\\"token builtin class-name\\">enable</span> kv-v2</span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># kv enable</span></span>\\n<span class=\\"line\\">$ vault secrets <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token parameter variable\\">-path</span><span class=\\"token operator\\">=</span>kv kv</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\"># jenkins 정책으로 될 파일 생성 v1, v2</span></span>\\n<span class=\\"line\\">$ <span class=\\"token function\\">tee</span> jenkins-policy.hcl <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF</span>\\n<span class=\\"line\\">path \\"kv/secret/data/jenkins/*\\" {</span>\\n<span class=\\"line\\">  capabilities = [ \\"read\\" ]</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">path \\"kv-v2/data/jenkins/*\\" {</span>\\n<span class=\\"line\\">  capabilities = [ \\"read\\" ]</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">EOF</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#jenkins 정책 생성</span></span>\\n<span class=\\"line\\">vault policy <span class=\\"token function\\">write</span> jenkins jenkins-policy.hcl</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#approle 생성 및 정책 jenkins에 연결</span></span>\\n<span class=\\"line\\">vault <span class=\\"token function\\">write</span> auth/approle/role/jenkins <span class=\\"token assign-left variable\\">token_policies</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"jenkins\\"</span> <span class=\\"token punctuation\\">\\\\</span></span>\\n<span class=\\"line\\"><span class=\\"token assign-left variable\\">token_ttl</span><span class=\\"token operator\\">=</span>1h <span class=\\"token assign-left variable\\">token_max_ttl</span><span class=\\"token operator\\">=</span>4h</span>\\n<span class=\\"line\\"> </span>\\n<span class=\\"line\\"><span class=\\"token comment\\">#Role id, secret id 가져오기</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">vault <span class=\\"token builtin class-name\\">read</span> auth/approle/role/jenkins/role-id</span>\\n<span class=\\"line\\">vault <span class=\\"token function\\">write</span> <span class=\\"token parameter variable\\">-f</span> auth/approle/role/jenkins/secret-id</span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">vault secrets <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token parameter variable\\">-path</span><span class=\\"token operator\\">=</span>kv kv</span>\\n<span class=\\"line\\">$ <span class=\\"token function\\">tee</span> gitlab.json <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF</span>\\n<span class=\\"line\\">{</span>\\n<span class=\\"line\\">  \\"gitlabIP\\": \\"172.21.2.52\\",</span>\\n<span class=\\"line\\">  \\"api-key\\": \\"RjLAbbWsSAzXoyBvo2qL\\"</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">EOF</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"token function\\">tee</span> gitlab-v2.json <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF</span>\\n<span class=\\"line\\">{</span>\\n<span class=\\"line\\">  \\"gitlabIP\\": \\"172.21.2.52\\",</span>\\n<span class=\\"line\\">  \\"api-key\\": \\"RjLAbbWsSAzXoyBvo2qL\\",</span>\\n<span class=\\"line\\">  \\"version\\": \\"v2\\"</span>\\n<span class=\\"line\\">}</span>\\n<span class=\\"line\\">EOF</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\">vault kv put kv/secret/data/jenkins/gitlab @gitlab.json</span>\\n<span class=\\"line\\">vault kv put kv-v2/jenkins/gitlab @gitlab-v2.json</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{v as comp,d as data};