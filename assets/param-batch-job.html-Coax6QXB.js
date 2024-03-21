import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as t}from"./app-DwRVeH7t.js";const e={},o=t(`<h1 id="param-batch-job" tabindex="-1"><a class="header-anchor" href="#param-batch-job"><span>param-batch-job</span></a></h1><ul><li>parameter를 받아와서 해당 값을 이용하여 다음으로 실행될 job의 값을 다이나믹하게 넣어 만드는 샘플 <ul><li>meta_required에 원하는 값을 넣고 template에 env &quot;NOMAD_META_메타명(key)&quot;와 같이 넣어주면 된다.</li></ul></li></ul><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">&quot;24-paramete&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;dc1&quot;</span><span class="token punctuation">]</span>
  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">&quot;batch&quot;</span>

  <span class="token keyword">parameterized</span> <span class="token punctuation">{</span>
    <span class="token property">payload</span>       <span class="token punctuation">=</span> <span class="token string">&quot;forbidden&quot;</span>
    <span class="token property">meta_required</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;room_num&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  group <span class="token string">&quot;run-main-job&quot;</span> <span class="token punctuation">{</span>

    task <span class="token string">&quot;run-main-job&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;raw_exec&quot;</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;nomad&quot;</span>
        <span class="token comment"># arguments</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;job&quot;</span>, <span class="token string">&quot;run&quot;</span>, <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>NOMAD_TASK_DIR<span class="token punctuation">}</span></span>/room.job&quot;</span> <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH

#####################

job &quot;{{ env &quot;NOMAD_META_room_num&quot; }}&quot; {
    datacenters = [&quot;dc1&quot;]

    group &quot;jboss&quot; {

        network {
            port &quot;http&quot; {
                to = &quot;8080&quot;
            }
        }
        service {
            port = &quot;http&quot;
            provider = &quot;nomad&quot;
            name = &quot;{{ env &quot;NOMAD_META_room_num&quot; }}&quot;
            check {
                type     = &quot;tcp&quot;
                interval = &quot;10s&quot;
                timeout  = &quot;2s&quot;
            }
        }
        task &quot;http&quot; {
            driver = &quot;docker&quot;
            config {
                image = &quot;jboss/wildfly&quot;
                ports = [&quot;http&quot;]
            }
            resources {
                cpu    = 500
                memory = 282
            }
        }
    }
}

EOH</span>
    <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;local/room.job&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function i(c,l){return a(),s("div",null,p)}const d=n(e,[["render",i],["__file","param-batch-job.html.vue"]]),m=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html","title":"param-batch-job","lang":"ko-KR","frontmatter":{"description":"Nomad Sample","tag":["Nomad","Sample","Job","param","batch"],"author":"Ung","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"param-batch-job"}],["meta",{"property":"og:description","content":"Nomad Sample"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:55:52.000Z"}],["meta",{"property":"article:author","content":"Ung"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Sample"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:tag","content":"param"}],["meta",{"property":"article:tag","content":"batch"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:55:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"param-batch-job\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T06:55:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ung\\"}]}"]]},"headers":[],"git":{"createdTime":1640585468000,"updatedTime":1709880952000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"ung","email":"swbs90@naver.com","commits":1},{"name":"ung","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":1.68,"words":101},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/param-batch-job.md","localizedDate":"2021년 12월 27일","excerpt":"\\n<ul>\\n<li>parameter를 받아와서 해당 값을 이용하여 다음으로 실행될 job의 값을 다이나믹하게 넣어 만드는 샘플\\n<ul>\\n<li>meta_required에 원하는 값을 넣고 template에 env \\"NOMAD_META_메타명(key)\\"와 같이 넣어주면 된다.</li>\\n</ul>\\n</li>\\n</ul>\\n<div class=\\"language-hcl\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code>job <span class=\\"token string\\">\\"24-paramete\\"</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">datacenters</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"dc1\\"</span><span class=\\"token punctuation\\">]</span>\\n  <span class=\\"token property\\">type</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"batch\\"</span>\\n\\n  <span class=\\"token keyword\\">parameterized</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">payload</span>       <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"forbidden\\"</span>\\n    <span class=\\"token property\\">meta_required</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"room_num\\"</span><span class=\\"token punctuation\\">]</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  group <span class=\\"token string\\">\\"run-main-job\\"</span> <span class=\\"token punctuation\\">{</span>\\n\\n    task <span class=\\"token string\\">\\"run-main-job\\"</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token property\\">driver</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"raw_exec\\"</span>\\n\\n      <span class=\\"token keyword\\">config</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">command</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"nomad\\"</span>\\n        <span class=\\"token comment\\"># arguments</span>\\n        <span class=\\"token property\\">args</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"job\\"</span>, <span class=\\"token string\\">\\"run\\"</span>, <span class=\\"token string\\">\\"<span class=\\"token interpolation\\"><span class=\\"token punctuation\\">$</span><span class=\\"token punctuation\\">{</span>NOMAD_TASK_DIR<span class=\\"token punctuation\\">}</span></span>/room.job\\"</span> <span class=\\"token punctuation\\">]</span>\\n      <span class=\\"token punctuation\\">}</span>\\n      <span class=\\"token keyword\\">template</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">data</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token heredoc string\\">&lt;&lt;EOH\\n\\n#####################\\n\\njob \\"{{ env \\"NOMAD_META_room_num\\" }}\\" {\\n    datacenters = [\\"dc1\\"]\\n\\n    group \\"jboss\\" {\\n\\n        network {\\n            port \\"http\\" {\\n                to = \\"8080\\"\\n            }\\n        }\\n        service {\\n            port = \\"http\\"\\n            provider = \\"nomad\\"\\n            name = \\"{{ env \\"NOMAD_META_room_num\\" }}\\"\\n            check {\\n                type     = \\"tcp\\"\\n                interval = \\"10s\\"\\n                timeout  = \\"2s\\"\\n            }\\n        }\\n        task \\"http\\" {\\n            driver = \\"docker\\"\\n            config {\\n                image = \\"jboss/wildfly\\"\\n                ports = [\\"http\\"]\\n            }\\n            resources {\\n                cpu    = 500\\n                memory = 282\\n            }\\n        }\\n    }\\n}\\n\\nEOH</span>\\n    <span class=\\"token property\\">destination</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"local/room.job\\"</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>","copyright":{"author":"Ung"}}');export{d as comp,m as data};
