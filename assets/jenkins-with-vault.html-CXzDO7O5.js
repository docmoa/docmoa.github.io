import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DwRVeH7t.js";const t={},i=e(`<h1 id="jenkins-with-vault" tabindex="-1"><a class="header-anchor" href="#jenkins-with-vault"><span>jenkins with vault</span></a></h1><p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br> 이 예제는 진짜 kv까지만 테스트함</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># approle 엔진 생성</span>
$ vault auth <span class="token builtin class-name">enable</span> approle
<span class="token comment"># kv2 enable</span>
$ vault secrets <span class="token builtin class-name">enable</span> kv-v2
<span class="token comment"># kv enable</span>
$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv

<span class="token comment"># jenkins 정책으로 될 파일 생성 v1, v2</span>
$ <span class="token function">tee</span> jenkins-policy.hcl <span class="token operator">&lt;&lt;</span><span class="token string">EOF
path &quot;kv/secret/data/jenkins/*&quot; {
  capabilities = [ &quot;read&quot; ]
}
path &quot;kv-v2/data/jenkins/*&quot; {
  capabilities = [ &quot;read&quot; ]
}
EOF</span>

<span class="token comment">#jenkins 정책 생성</span>
vault policy <span class="token function">write</span> jenkins jenkins-policy.hcl

<span class="token comment">#approle 생성 및 정책 jenkins에 연결</span>
vault <span class="token function">write</span> auth/approle/role/jenkins <span class="token assign-left variable">token_policies</span><span class="token operator">=</span><span class="token string">&quot;jenkins&quot;</span> <span class="token punctuation">\\</span>
<span class="token assign-left variable">token_ttl</span><span class="token operator">=</span>1h <span class="token assign-left variable">token_max_ttl</span><span class="token operator">=</span>4h
 
<span class="token comment">#Role id, secret id 가져오기</span>

vault <span class="token builtin class-name">read</span> auth/approle/role/jenkins/role-id
vault <span class="token function">write</span> <span class="token parameter variable">-f</span> auth/approle/role/jenkins/secret-id


vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>kv kv
$ <span class="token function">tee</span> gitlab.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;gitlabIP&quot;: &quot;172.21.2.52&quot;,
  &quot;api-key&quot;: &quot;RjLAbbWsSAzXoyBvo2qL&quot;
}
EOF</span>

<span class="token function">tee</span> gitlab-v2.json <span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;gitlabIP&quot;: &quot;172.21.2.52&quot;,
  &quot;api-key&quot;: &quot;RjLAbbWsSAzXoyBvo2qL&quot;,
  &quot;version&quot;: &quot;v2&quot;
}
EOF</span>

vault kv put kv/secret/data/jenkins/gitlab @gitlab.json
vault kv put kv-v2/jenkins/gitlab @gitlab-v2.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v1-pipe-line" tabindex="-1"><a class="header-anchor" href="#v1-pipe-line"><span>v1 pipe line</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># jenkins pipe line v1</span>
def secrets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>path: <span class="token string">&#39;kv%2Fsecret/data/jenkins/gitlab&#39;</span>, engineVersion:1, secretValues: <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;gitlabIP&#39;</span>, vaultKey: <span class="token string">&#39;gitlabIP&#39;</span><span class="token punctuation">]</span>,
    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;API_KEY&#39;</span>, vaultKey: <span class="token string">&#39;api-key&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>,
<span class="token punctuation">]</span>
def configuration <span class="token operator">=</span> <span class="token punctuation">[</span>vaultUrl: <span class="token string">&#39;http://172.21.2.50:8200&#39;</span>,  vaultCredentialId: <span class="token string">&#39;vault-approle&#39;</span>, engineVersion: <span class="token number">1</span><span class="token punctuation">]</span>

pipeline <span class="token punctuation">{</span>
    agent any
    options <span class="token punctuation">{</span>
        buildDiscarder<span class="token punctuation">(</span>logRotator<span class="token punctuation">(</span>numToKeepStr: <span class="token string">&#39;20&#39;</span><span class="token punctuation">))</span>
        disableConcurrentBuilds<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    stages<span class="token punctuation">{</span>   
      stage<span class="token punctuation">(</span><span class="token string">&#39;Vault&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        steps <span class="token punctuation">{</span>
          withVault<span class="token punctuation">(</span><span class="token punctuation">[</span>configuration: configuration, vaultSecrets: secrets<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">$gitlabIP</span>&quot;</span>
            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.API_KEY}</span>&quot;</span>
            <span class="token function">sh</span> <span class="token string">&quot;curl -v <span class="token variable">$gitlabIP</span>&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v2-pipe-line" tabindex="-1"><a class="header-anchor" href="#v2-pipe-line"><span>v2 pipe line</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># jenkins pipe line v2</span>
def secrets <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span>path: <span class="token string">&#39;kv-v2/jenkins/gitlab&#39;</span>, engineVersion:2, secretValues: <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;gitlabIP&#39;</span>, vaultKey: <span class="token string">&#39;gitlabIP&#39;</span><span class="token punctuation">]</span>,
    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;API_KEY&#39;</span>, vaultKey: <span class="token string">&#39;api-key&#39;</span><span class="token punctuation">]</span>,
    <span class="token punctuation">[</span>envVar: <span class="token string">&#39;version2&#39;</span>, vaultKey: <span class="token string">&#39;version&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>

def configuration <span class="token operator">=</span> <span class="token punctuation">[</span>vaultUrl: <span class="token string">&#39;http://172.21.2.50:8200&#39;</span>,  vaultCredentialId: <span class="token string">&#39;vault-approle&#39;</span>, engineVersion: <span class="token number">2</span><span class="token punctuation">]</span>
                      
pipeline <span class="token punctuation">{</span>
    agent any
    options <span class="token punctuation">{</span>
        buildDiscarder<span class="token punctuation">(</span>logRotator<span class="token punctuation">(</span>numToKeepStr: <span class="token string">&#39;20&#39;</span><span class="token punctuation">))</span>
        disableConcurrentBuilds<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    stages<span class="token punctuation">{</span>   
      stage<span class="token punctuation">(</span><span class="token string">&#39;Vault&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        steps <span class="token punctuation">{</span>
          withVault<span class="token punctuation">(</span><span class="token punctuation">[</span>configuration: configuration, vaultSecrets: secrets<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.API_KEY}</span>&quot;</span>
            <span class="token function">sh</span> <span class="token string">&quot;echo <span class="token variable">\${env.version2}</span>&quot;</span>
            <span class="token function">sh</span> <span class="token string">&quot;curl -v <span class="token variable">\${env.gitlabIP}</span>&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>  
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[i];function p(o,c){return s(),a("div",null,l)}const v=n(t,[["render",p],["__file","jenkins-with-vault.html.vue"]]),d=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html","title":"jenkins with vault","lang":"ko-KR","frontmatter":{"description":"Vault를 활용하여 jenkins에 kv secret 활용","tag":["vault","jenkins","screct","kv"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"jenkins with vault"}],["meta",{"property":"og:description","content":"Vault를 활용하여 jenkins에 kv secret 활용"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"jenkins"}],["meta",{"property":"article:tag","content":"screct"}],["meta",{"property":"article:tag","content":"kv"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jenkins with vault\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"v1 pipe line","slug":"v1-pipe-line","link":"#v1-pipe-line","children":[]},{"level":2,"title":"v2 pipe line","slug":"v2-pipe-line","link":"#v2-pipe-line","children":[]}],"git":{"createdTime":1643344857000,"updatedTime":1695042774000,"contributors":[{"name":"ung","email":"swbs90@naver.com","commits":4},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":4.32,"words":259},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.md","localizedDate":"2022년 1월 28일","excerpt":"\\n<p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br>\\n이 예제는 진짜 kv까지만 테스트함</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># approle 엔진 생성</span>\\n$ vault auth <span class=\\"token builtin class-name\\">enable</span> approle\\n<span class=\\"token comment\\"># kv2 enable</span>\\n$ vault secrets <span class=\\"token builtin class-name\\">enable</span> kv-v2\\n<span class=\\"token comment\\"># kv enable</span>\\n$ vault secrets <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token parameter variable\\">-path</span><span class=\\"token operator\\">=</span>kv kv\\n\\n<span class=\\"token comment\\"># jenkins 정책으로 될 파일 생성 v1, v2</span>\\n$ <span class=\\"token function\\">tee</span> jenkins-policy.hcl <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\npath \\"kv/secret/data/jenkins/*\\" {\\n  capabilities = [ \\"read\\" ]\\n}\\npath \\"kv-v2/data/jenkins/*\\" {\\n  capabilities = [ \\"read\\" ]\\n}\\nEOF</span>\\n\\n<span class=\\"token comment\\">#jenkins 정책 생성</span>\\nvault policy <span class=\\"token function\\">write</span> jenkins jenkins-policy.hcl\\n\\n<span class=\\"token comment\\">#approle 생성 및 정책 jenkins에 연결</span>\\nvault <span class=\\"token function\\">write</span> auth/approle/role/jenkins <span class=\\"token assign-left variable\\">token_policies</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"jenkins\\"</span> <span class=\\"token punctuation\\">\\\\</span>\\n<span class=\\"token assign-left variable\\">token_ttl</span><span class=\\"token operator\\">=</span>1h <span class=\\"token assign-left variable\\">token_max_ttl</span><span class=\\"token operator\\">=</span>4h\\n \\n<span class=\\"token comment\\">#Role id, secret id 가져오기</span>\\n\\nvault <span class=\\"token builtin class-name\\">read</span> auth/approle/role/jenkins/role-id\\nvault <span class=\\"token function\\">write</span> <span class=\\"token parameter variable\\">-f</span> auth/approle/role/jenkins/secret-id\\n\\n\\nvault secrets <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token parameter variable\\">-path</span><span class=\\"token operator\\">=</span>kv kv\\n$ <span class=\\"token function\\">tee</span> gitlab.json <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\n{\\n  \\"gitlabIP\\": \\"172.21.2.52\\",\\n  \\"api-key\\": \\"RjLAbbWsSAzXoyBvo2qL\\"\\n}\\nEOF</span>\\n\\n<span class=\\"token function\\">tee</span> gitlab-v2.json <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\n{\\n  \\"gitlabIP\\": \\"172.21.2.52\\",\\n  \\"api-key\\": \\"RjLAbbWsSAzXoyBvo2qL\\",\\n  \\"version\\": \\"v2\\"\\n}\\nEOF</span>\\n\\nvault kv put kv/secret/data/jenkins/gitlab @gitlab.json\\nvault kv put kv-v2/jenkins/gitlab @gitlab-v2.json\\n</code></pre></div>"}');export{v as comp,d as data};
