import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-DwRVeH7t.js";const e={},o=t(`<h1 id="consul-kv-sample" tabindex="-1"><a class="header-anchor" href="#consul-kv-sample"><span>Consul KV Sample</span></a></h1><p>Consul의 KV에 값을 저장하고 비교하여 task batch를 수행하는 예제</p><ul><li>curl 을 사용하는 경우<div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET http://127.0.0.1:8500/v1/kv/docmoa/commit_date <span class="token operator">|</span> jq <span class="token parameter variable">-r</span> <span class="token string">&#39;.[0].Value | @base64d&#39;</span>
</code></pre></div></li><li>template의 <code>key</code>를 사용하는 경우<div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token punctuation">{</span><span class="token punctuation">{</span> key <span class="token string">&quot;docmoa/commit_date&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div></li></ul><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">&quot;gs-mac-docmoa-build&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;home&quot;</span><span class="token punctuation">]</span>
  <span class="token property">type</span>        <span class="token punctuation">=</span> <span class="token string">&quot;batch&quot;</span>

  <span class="token keyword">periodic</span> <span class="token punctuation">{</span>
    <span class="token property">cron</span>             <span class="token punctuation">=</span> <span class="token string">&quot;0 */5 * * * * *&quot;</span>
    <span class="token property">prohibit_overlap</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
    <span class="token property">time_zone</span>        <span class="token punctuation">=</span> <span class="token string">&quot;Asia/Seoul&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
    <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>consul<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>&quot;</span>
    <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">&quot;my-macbook-air&quot;</span>
  <span class="token punctuation">}</span>

  group <span class="token string">&quot;docmoa-build&quot;</span> <span class="token punctuation">{</span>
    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span>

    task <span class="token string">&quot;git-pull&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;raw_exec&quot;</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
#!/bin/sh
cd /Users/gslee/workspaces/docs
git pull origin main
        EOH</span>

        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;git.sh&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;git.sh&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">lifecycle</span> <span class="token punctuation">{</span>
        <span class="token property">hook</span>    <span class="token punctuation">=</span> <span class="token string">&quot;prestart&quot;</span>
        <span class="token property">sidecar</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    task <span class="token string">&quot;build&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;raw_exec&quot;</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH
#!/bin/sh
LAST_COMMIT_DATE=$(curl https://api.github.com/repos/docmoa/docs/branches/main | jq -r &#39;.commit.commit.committer.date&#39;)
#STORE_COMMIT_DATE=$(curl -X GET http://127.0.0.1:8500/v1/kv/docmoa/commit_date | jq -r &#39;.[0].Value | @base64d&#39;)
STORE_COMMIT_DATE={{ key &quot;docmoa/commit_date&quot; }}
echo &quot;LAST_COMMIT_DATE = $LAST_COMMIT_DATE&quot;
echo &quot;STORE_COMMIT_DATE = $STORE_COMMIT_DATE&quot;
if [ $LAST_COMMIT_DATE != $STORE_COMMIT_DATE ]; then
  echo &quot;do deploy&quot;
  # something todo...
  # update new value
  curl -X PUT --data $LAST_COMMIT_DATE http://127.0.0.1:8500/v1/kv/docmoa/commit_date
else
  echo &quot;no change&quot;
fi
        EOH</span>

        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;build.sh&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;build.sh&quot;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">256</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),p=[o];function i(l,c){return s(),a("div",null,p)}const d=n(e,[["render",i],["__file","withConsulKV.html.vue"]]),m=JSON.parse(`{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/withConsulKV.html","title":"Consul KV Sample","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/withConsulKV.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Consul KV Sample"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Consul KV Sample\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1633322494000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"great-stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":2.7,"words":162},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/withConsulKV.md","localizedDate":"2021년 10월 4일","excerpt":"\\n<p>Consul의 KV에 값을 저장하고 비교하여 task batch를 수행하는 예제</p>\\n<ul>\\n<li>curl 을 사용하는 경우<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">curl</span> <span class=\\"token parameter variable\\">-X</span> GET http://127.0.0.1:8500/v1/kv/docmoa/commit_date <span class=\\"token operator\\">|</span> jq <span class=\\"token parameter variable\\">-r</span> <span class=\\"token string\\">'.[0].Value | @base64d'</span>\\n</code></pre></div></li>\\n<li>template의 <code>key</code>를 사용하는 경우<div class=\\"language-hcl\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code><span class=\\"token punctuation\\">{</span><span class=\\"token punctuation\\">{</span> key <span class=\\"token string\\">\\"docmoa/commit_date\\"</span> <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">}</span>\\n</code></pre></div></li>\\n</ul>"}`);export{d as comp,m as data};
