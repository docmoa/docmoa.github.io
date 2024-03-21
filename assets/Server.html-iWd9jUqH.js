import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-DwRVeH7t.js";const t={},o=e(`<h1 id="nomad-서버-설정" tabindex="-1"><a class="header-anchor" href="#nomad-서버-설정"><span>Nomad 서버 설정</span></a></h1><div class="hint-container tip"><p class="hint-container-title">팁</p><p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br> 네트워크는 프라이빗(온프레이머스) 환경입니다.</p></div><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="token comment">#nomad server 설정</span>
<span class="token keyword">server</span> <span class="token punctuation">{</span>
  <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">bootstrap_expect</span> <span class="token punctuation">=</span> <span class="token number">3</span>
  <span class="token property">license_path</span><span class="token punctuation">=</span><span class="token string">&quot;/opt/nomad/license/nomad.license&quot;</span>
  <span class="token keyword">server_join</span> <span class="token punctuation">{</span>
    <span class="token property">retry_join</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;172.30.1.17&quot;</span>,<span class="token string">&quot;172.30.1.18&quot;</span>,<span class="token string">&quot;172.30.1.19&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  <span class="token property">raft_protocol</span> <span class="token punctuation">=</span> <span class="token number">3</span>
  <span class="token property">event_buffer_size</span> <span class="token punctuation">=</span> <span class="token number">100</span>
  <span class="token property">non_voting_server</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token property">heartbeat_grace</span> <span class="token punctuation">=</span> <span class="token string">&quot;10s&quot;</span>
<span class="token punctuation">}</span>
 
 
<span class="token comment">#tls 설정</span>
<span class="token keyword">tls</span> <span class="token punctuation">{</span>
  <span class="token property">http</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">rpc</span>  <span class="token punctuation">=</span> <span class="token boolean">true</span>
 
  <span class="token property">ca_file</span>   <span class="token punctuation">=</span> <span class="token string">&quot;/opt/ssl/nomad/nomad-agent-ca.pem&quot;</span>
  <span class="token property">cert_file</span> <span class="token punctuation">=</span> <span class="token string">&quot;/opt/ssl/nomad/global-server-nomad-0.pem&quot;</span>
  <span class="token property">key_file</span>  <span class="token punctuation">=</span> <span class="token string">&quot;/opt/ssl/nomad/global-server-nomad-0-key.pem&quot;</span>
 
  <span class="token comment">#UI오픈할 서버만 변경</span>
  <span class="token property">verify_server_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token property">verify_https_client</span>    <span class="token punctuation">=</span> <span class="token boolean">false</span>
  <span class="token comment">#일반서버는 아래와 같이 설정</span>
  <span class="token property">verify_server_hostname</span> <span class="token punctuation">=</span> <span class="token boolean">true</span>
  <span class="token property">verify_https_client</span>    <span class="token punctuation">=</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nomad-서버-최소-설정-20220807기준" tabindex="-1"><a class="header-anchor" href="#nomad-서버-최소-설정-20220807기준"><span>Nomad 서버 최소 설정 (20220807기준)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>data_dir = &quot;/opt/consul&quot;

client_addr = &quot;0.0.0.0&quot;

datacenter = &quot;my-dc&quot;

#ui
ui_config {
  enabled = true
}

# server
server = true

# Bind addr
bind_addr = &quot;0.0.0.0&quot; # Listen on all IPv4
# Advertise addr - if you want to point clients to a different address than bind or LB.
advertise_addr = &quot;node ip&quot;

# Enterprise License
license_path = &quot;/opt/nomad/nomad.lic&quot;

# bootstrap_expect
bootstrap_expect=1

# encrypt
encrypt = &quot;7w+zkhqa+YD4GSKXjRWETBIT8hs53Sr/w95oiVxq5Qc=&quot;

# retry_join
retry_join = [&quot;server ip&quot;]

key_file = &quot;/opt/consul/my-dc-server-consul-0-key.pem&quot;
cert_file = &quot;/opt/consul/my-dc-server-consul-0.pem&quot;
ca_file = &quot;/opt/consul/consul-agent-ca.pem&quot;
auto_encrypt {
  allow_tls = true
}

verify_incoming = false
verify_incoming_rpc = false
verify_outgoing = false
verify_server_hostname = false

ports {
  http = 8500
  dns = 8600
  server = 8300
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),p=[o];function i(l,c){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","Server.html.vue"]]),v=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/02-Config/Server.html","title":"Nomad 서버 설정","lang":"ko-KR","frontmatter":{"description":"Nomad Server Configuration","tag":["Nomad","Enterprise","Configuration","Server"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/02-Config/Server.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Nomad 서버 설정"}],["meta",{"property":"og:description","content":"Nomad Server Configuration"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Enterprise"}],["meta",{"property":"article:tag","content":"Configuration"}],["meta",{"property":"article:tag","content":"Server"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nomad 서버 설정\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1629555140000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2},{"name":"admin","email":"sulee@expernet.co.kr","commits":2},{"name":"swbs90","email":"swbs90@naver.com","commits":1}]},"readingTime":{"minutes":2.68,"words":161},"filePathRelative":"04-HashiCorp/07-Nomad/02-Config/Server.md","localizedDate":"2021년 8월 21일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">팁</p>\\n<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server설정 파일입니다.<br>\\n네트워크는 프라이빗(온프레이머스) 환경입니다.</p>\\n</div>\\n<div class=\\"language-hcl\\" data-ext=\\"hcl\\" data-title=\\"hcl\\"><pre class=\\"language-hcl\\"><code><span class=\\"token comment\\">#nomad server 설정</span>\\n<span class=\\"token keyword\\">server</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">enabled</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token property\\">bootstrap_expect</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">3</span>\\n  <span class=\\"token property\\">license_path</span><span class=\\"token punctuation\\">=</span><span class=\\"token string\\">\\"/opt/nomad/license/nomad.license\\"</span>\\n  <span class=\\"token keyword\\">server_join</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">retry_join</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"172.30.1.17\\"</span>,<span class=\\"token string\\">\\"172.30.1.18\\"</span>,<span class=\\"token string\\">\\"172.30.1.19\\"</span><span class=\\"token punctuation\\">]</span>\\n  <span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token property\\">raft_protocol</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">3</span>\\n  <span class=\\"token property\\">event_buffer_size</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token number\\">100</span>\\n  <span class=\\"token property\\">non_voting_server</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">false</span>\\n  <span class=\\"token property\\">heartbeat_grace</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"10s\\"</span>\\n<span class=\\"token punctuation\\">}</span>\\n \\n \\n<span class=\\"token comment\\">#tls 설정</span>\\n<span class=\\"token keyword\\">tls</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token property\\">http</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token property\\">rpc</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n \\n  <span class=\\"token property\\">ca_file</span>   <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"/opt/ssl/nomad/nomad-agent-ca.pem\\"</span>\\n  <span class=\\"token property\\">cert_file</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"/opt/ssl/nomad/global-server-nomad-0.pem\\"</span>\\n  <span class=\\"token property\\">key_file</span>  <span class=\\"token punctuation\\">=</span> <span class=\\"token string\\">\\"/opt/ssl/nomad/global-server-nomad-0-key.pem\\"</span>\\n \\n  <span class=\\"token comment\\">#UI오픈할 서버만 변경</span>\\n  <span class=\\"token property\\">verify_server_hostname</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">false</span>\\n  <span class=\\"token property\\">verify_https_client</span>    <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">false</span>\\n  <span class=\\"token comment\\">#일반서버는 아래와 같이 설정</span>\\n  <span class=\\"token property\\">verify_server_hostname</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n  <span class=\\"token property\\">verify_https_client</span>    <span class=\\"token punctuation\\">=</span> <span class=\\"token boolean\\">true</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{u as comp,v as data};
