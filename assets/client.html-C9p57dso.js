import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as t}from"./app-DwRVeH7t.js";const s={},l=t(`<h1 id="consul-클라이언트-설정" tabindex="-1"><a class="header-anchor" href="#consul-클라이언트-설정"><span>Consul 클라이언트 설정</span></a></h1><div class="hint-container tip"><p class="hint-container-title">팁</p><p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 Client설정 파일입니다.<br> 네트워크는 프라이빗(온프레이머스) 환경입니다.</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#consul client 설정
server = false

acl = {
  enabled = true
  default_policy = &quot;deny&quot;
  enable_token_persistence = true
  tokens = {
    agent = &quot;f820514a-5215-e741-fcb3-c00857405230&quot;
  }
}

license_path = &quot;/opt/license/consul.license&quot;

retry_join = [&quot;172.30.1.17&quot;,&quot;172.30.1.18&quot;,&quot;172.30.1.19&quot;]

rejoin_after_leave = true


#tls 설정
ca_file = &quot;/opt/ssl/consul/consul-agent-ca.pem&quot;
auto_encrypt = {
  tls = true
}

verify_incoming = false
verify_outgoing = true
verify_server_hostname = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="consul-클라이언트-최소-설정-20220807기준" tabindex="-1"><a class="header-anchor" href="#consul-클라이언트-최소-설정-20220807기준"><span>Consul 클라이언트 최소 설정 (20220807기준)</span></a></h1><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>data_dir = &quot;/opt/consul&quot;

client_addr = &quot;0.0.0.0&quot;

datacenter = &quot;my-dc&quot;

# client
server = false

# Bind addr
bind_addr = &quot;0.0.0.0&quot; # Listen on all IPv4
# Advertise addr - if you want to point clients to a different address than bind or LB.
advertise_addr = &quot;node ip&quot;

# Enterprise License
license_path = &quot;/opt/consul/consul.lic&quot;

# encrypt
encrypt = &quot;7w+zkhqa+YD4GSKXjRWETBIT8hs53Sr/w95oiVxq5Qc=&quot;

# retry_join
retry_join = [&quot;server ip&quot;]

ca_file = &quot;/opt/consul/consul-agent-ca.pem&quot;
cert_file = &quot;/opt/consul/my-dc-client-consul-0.pem&quot;
key_file = &quot;/opt/consul/my-dc-client-consul-0-key.pem&quot;

verify_incoming = false
verify_incoming_rpc = false
verify_outgoing = false
verify_server_hostname = false

ports {
  http = 8500
  dns = 8600
  server = 8300
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),a=[l];function r(d,o){return n(),i("div",null,a)}const v=e(s,[["render",r],["__file","client.html.vue"]]),m=JSON.parse('{"path":"/04-HashiCorp/04-Consul/02-Configuration/client.html","title":"Consul 클라이언트 설정","lang":"ko-KR","frontmatter":{"description":"Consul Client Configuration","tag":["Consul","Enterprise","Configuration","Client"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/04-Consul/02-Configuration/client.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Consul 클라이언트 설정"}],["meta",{"property":"og:description","content":"Consul Client Configuration"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"Enterprise"}],["meta",{"property":"article:tag","content":"Configuration"}],["meta",{"property":"article:tag","content":"Client"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Consul 클라이언트 설정\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1629519876000,"updatedTime":1695042774000,"contributors":[{"name":"admin","email":"sulee@expernet.co.kr","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"swbs90","email":"swbs9000@gmail.com","commits":1},{"name":"swbs90","email":"swbs90@naver.com","commits":1}]},"readingTime":{"minutes":2.3,"words":138},"filePathRelative":"04-HashiCorp/04-Consul/02-Configuration/client.md","localizedDate":"2021년 8월 21일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">팁</p>\\n<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 Client설정 파일입니다.<br>\\n네트워크는 프라이빗(온프레이머스) 환경입니다.</p>\\n</div>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#consul client 설정\\nserver = false\\n\\nacl = {\\n  enabled = true\\n  default_policy = \\"deny\\"\\n  enable_token_persistence = true\\n  tokens = {\\n    agent = \\"f820514a-5215-e741-fcb3-c00857405230\\"\\n  }\\n}\\n\\nlicense_path = \\"/opt/license/consul.license\\"\\n\\nretry_join = [\\"172.30.1.17\\",\\"172.30.1.18\\",\\"172.30.1.19\\"]\\n\\nrejoin_after_leave = true\\n\\n\\n#tls 설정\\nca_file = \\"/opt/ssl/consul/consul-agent-ca.pem\\"\\nauto_encrypt = {\\n  tls = true\\n}\\n\\nverify_incoming = false\\nverify_outgoing = true\\nverify_server_hostname = true\\n</code></pre></div>"}');export{v as comp,m as data};
