import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,e as a}from"./app-DwRVeH7t.js";const i={},t=a(`<h1 id="consul-서버-설정" tabindex="-1"><a class="header-anchor" href="#consul-서버-설정"><span>Consul 서버 설정</span></a></h1><div class="hint-container tip"><p class="hint-container-title">팁</p><p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br> 네트워크는 프라이빗(온프레이머스) 환경입니다.</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#consul server 설정
server = true
ui_config {
  enabled = true
}
bootstrap_expect = 3
  
license_path = &quot;/opt/license/consul.license&quot;
 
retry_join = [&quot;172.30.1.17&quot;,&quot;172.30.1.18&quot;,&quot;172.30.1.19&quot;]
 
performance {
  raft_multiplier = 1
}
 
#raft protocal 버전, consul 업데이트 시 1씩 증가
raft_protocol = 3
 
#node가 완전히 삭제되는 시간
reconnect_timeout = &quot;72h&quot;
 
raft_snapshot_interval = &quot;5s&quot;
 
#해당 서버를 non-voting server로 지정
#read_replica = false
 
limits {
  http_max_conns_per_client = 200
  rpc_handshake_timeout = &quot;5s&quot;
}
 
key_file = &quot;/opt/ssl/consul/dc1-server-consul-0-key.pem&quot;
cert_file = &quot;/opt/ssl/consul/dc1-server-consul-0.pem&quot;
ca_file = &quot;/opt/ssl/consul/consul-agent-ca.pem&quot;
auto_encrypt {
  allow_tls = true
}
 
verify_incoming = false,
verify_incoming_rpc = true
verify_outgoing = true
verify_server_hostname = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="consul-서버-최소-설정-20220807기준" tabindex="-1"><a class="header-anchor" href="#consul-서버-최소-설정-20220807기준"><span>Consul 서버 최소 설정 (20220807기준)</span></a></h1><div class="hint-container tip"><p class="hint-container-title">팁</p><p>최소한의 설정만 있는 consul 설정입니다.</p></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>data_dir <span class="token operator">=</span> <span class="token string">&quot;/opt/consul&quot;</span>

client_addr <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span>

datacenter <span class="token operator">=</span> <span class="token string">&quot;my-dc&quot;</span>

<span class="token comment">#ui</span>
ui_config <span class="token punctuation">{</span>
  enabled <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment"># server</span>
server <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment"># Bind addr</span>
bind_addr <span class="token operator">=</span> <span class="token string">&quot;0.0.0.0&quot;</span> <span class="token comment"># Listen on all IPv4</span>
<span class="token comment"># Advertise addr - if you want to point clients to a different address than bind or LB.</span>
advertise_addr <span class="token operator">=</span> <span class="token string">&quot;node ip&quot;</span>

<span class="token comment"># Enterprise License</span>
license_path <span class="token operator">=</span> <span class="token string">&quot;/opt/consul/consul.lic&quot;</span>

<span class="token comment"># bootstrap_expect</span>
<span class="token assign-left variable">bootstrap_expect</span><span class="token operator">=</span><span class="token number">1</span>

<span class="token comment"># encrypt</span>
encrypt <span class="token operator">=</span> <span class="token string">&quot;7w+zkhqa+YD4GSKXjRWETBIT8hs53Sr/w95oiVxq5Qc=&quot;</span>

<span class="token comment"># retry_join</span>
retry_join <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Server ip&quot;</span><span class="token punctuation">]</span>

key_file <span class="token operator">=</span> <span class="token string">&quot;/opt/consul/my-dc-server-consul-0-key.pem&quot;</span>
cert_file <span class="token operator">=</span> <span class="token string">&quot;/opt/consul/my-dc-server-consul-0.pem&quot;</span>
ca_file <span class="token operator">=</span> <span class="token string">&quot;/opt/consul/consul-agent-ca.pem&quot;</span>
auto_encrypt <span class="token punctuation">{</span>
  allow_tls <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

verify_incoming <span class="token operator">=</span> <span class="token boolean">false</span>
verify_incoming_rpc <span class="token operator">=</span> <span class="token boolean">false</span>
verify_outgoing <span class="token operator">=</span> <span class="token boolean">false</span>
verify_server_hostname <span class="token operator">=</span> <span class="token boolean">false</span>

ports <span class="token punctuation">{</span>
  http <span class="token operator">=</span> <span class="token number">8500</span>
  dns <span class="token operator">=</span> <span class="token number">8600</span>
  server <span class="token operator">=</span> <span class="token number">8300</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function o(r,c){return e(),s("div",null,l)}const u=n(i,[["render",o],["__file","server.html.vue"]]),v=JSON.parse('{"path":"/04-HashiCorp/04-Consul/02-Configuration/server.html","title":"Consul 서버 설정","lang":"ko-KR","frontmatter":{"description":"Consul Server Configuration","tag":["Consul","Enterprise","Configuration","Server"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/04-Consul/02-Configuration/server.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Consul 서버 설정"}],["meta",{"property":"og:description","content":"Consul Server Configuration"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"Enterprise"}],["meta",{"property":"article:tag","content":"Configuration"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Consul 서버 설정\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1629519523000,"updatedTime":1695042774000,"contributors":[{"name":"admin","email":"sulee@expernet.co.kr","commits":2},{"name":"swbs90","email":"swbs90@naver.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":2.95,"words":177},"filePathRelative":"04-HashiCorp/04-Consul/02-Configuration/server.md","localizedDate":"2021년 8월 21일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">팁</p>\\n<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br>\\n네트워크는 프라이빗(온프레이머스) 환경입니다.</p>\\n</div>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#consul server 설정\\nserver = true\\nui_config {\\n  enabled = true\\n}\\nbootstrap_expect = 3\\n  \\nlicense_path = \\"/opt/license/consul.license\\"\\n \\nretry_join = [\\"172.30.1.17\\",\\"172.30.1.18\\",\\"172.30.1.19\\"]\\n \\nperformance {\\n  raft_multiplier = 1\\n}\\n \\n#raft protocal 버전, consul 업데이트 시 1씩 증가\\nraft_protocol = 3\\n \\n#node가 완전히 삭제되는 시간\\nreconnect_timeout = \\"72h\\"\\n \\nraft_snapshot_interval = \\"5s\\"\\n \\n#해당 서버를 non-voting server로 지정\\n#read_replica = false\\n \\nlimits {\\n  http_max_conns_per_client = 200\\n  rpc_handshake_timeout = \\"5s\\"\\n}\\n \\nkey_file = \\"/opt/ssl/consul/dc1-server-consul-0-key.pem\\"\\ncert_file = \\"/opt/ssl/consul/dc1-server-consul-0.pem\\"\\nca_file = \\"/opt/ssl/consul/consul-agent-ca.pem\\"\\nauto_encrypt {\\n  allow_tls = true\\n}\\n \\nverify_incoming = false,\\nverify_incoming_rpc = true\\nverify_outgoing = true\\nverify_server_hostname = false\\n</code></pre></div>"}');export{u as comp,v as data};
