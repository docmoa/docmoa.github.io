import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as i,e as s}from"./app-DwRVeH7t.js";const l={},t=s(`<h1 id="consul-공통-설정" tabindex="-1"><a class="header-anchor" href="#consul-공통-설정"><span>Consul 공통 설정</span></a></h1><div class="hint-container tip"><p class="hint-container-title">팁</p><p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server, client의 공통설정 파일입니다.<br> 저는 agent.hcl파일안에 다 넣고 실행하지만 나눠서 추후에는 기능별로 나눠서 사용할 예정입니다.</p></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#node name에는 _금지
#node_name
 
client_addr = &quot;0.0.0.0&quot;
bind_addr = &quot;{{ GetInterfaceIP \`ens192\` }}&quot;
advertise_addr = &quot;{{ GetInterfaceIP \`ens224\` }}&quot;
 
#ipv4, ipv6를 나눠서 설정할 수 있음.
#advertise_addr_ipv4
#advertise_addr_ipv6
 
ports {
  #http = 8500
  http = -1
  dns = 8600
  #https = -1
  https = 8500
  serf_lan = 8301
  grpc = 8502
  server = 8300
}
 
#gossip ip 지정
#serf_lan
#gossip 대역대 지정
#serf_lan_allowed_cidrs
 
#사용자 감사, 사용자가 consul에서 사용한 행동을 기록
#audit {
#  enabled = true
#  sink &quot;My sink&quot; {
#    type   = &quot;file&quot;
#    format = &quot;json&quot;
#    path   = &quot;data/audit/audit.json&quot;
#    #consul의 감사작성방법 규칙, 현재는 best-effort만지원
#    delivery_guarantee = &quot;best-effort&quot;
#    rotate_duration = &quot;24h&quot;
#    rotate_max_files = 15
#    rotate_bytes = 25165824
#  }
#}
 
#consul 서버관리 설정 변경
#autopoilt {
#    #새로운 서버가 클러스터에 추가될 때 죽은 서버 자동제거
#    cleanup_dead_servers = ture
#
#    last_contact_threshold = 200ms
#    #최소 quorm 수 지정
#    min_quorum = ni
#    #클러스터에 서버가 추가될 시 안정상태로 되어야 하는 최소 시간
#    server_stabilization_time = 10s
#}
 
#동시에 처리할 수 있는 인증서 서명 요청 제한
#csr_max_concurrent = 0
#서버가 수락할 인증서 서명 요청(CSR)의 최대 수에 대한 속도 제한을 설정
#csr_max_per_second = 50
#클러스터에서 이전 루트 인증서를 교체할 때 사용
#leaf_cert_ttl = 72h
#CA 키 생성 타입
#private_key_type = ec
#CA 키 생성될 길이
#private_key_bits = 256
 
#서버에서만 client를 join할 수 있게 함
#disable remote exec
 
#enable syslog = true
log_level = &quot;DEBUG&quot;
data_dir = &quot;/var/log/consul/consul&quot;
log_file = &quot;/var/log/consul/consul.log&quot;
log_rotate_duration = &quot;24h&quot;
log_rotate_bytes = 104857600
log_rotate_max_files = 100
 
license_path = &quot;/opt/license/consul.license&quot;
 
acl {
  enabled = true
  default_policy = &quot;allow&quot;
  enable_token_persistence = true
 
  #acl policy ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음
  #policy_ttl = 30s
  #acl role ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음
  #role_ttl = 30s
}
 
connect {
  enabled = true
  #vault 연동 옵션
  #ca_provider
}
 
dns_config {
  allow_stale = true,
  max_stale = &quot;87600h&quot;
}
 
#block_endpoints할성화시 restapi 차단
#http_config {
#    block_endpoints = false
#}
 
#segments
 
rpc {
  enable_streaming = true
}
 
encrypt = &quot;7VY2fVm0p6vJUYNS/oex/mr2e59dy4AaGMefTKtUGi0=&quot;
encrypt_verify_incoming = false
encrypt_verify_outgoing = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),a=[t];function d(r,o){return e(),i("div",null,a)}const u=n(l,[["render",d],["__file","common.html.vue"]]),m=JSON.parse('{"path":"/04-HashiCorp/04-Consul/02-Configuration/common.html","title":"Consul 공통 설정","lang":"ko-KR","frontmatter":{"description":"Consul Common Configuration","tag":["Consul","Enterprise","Configuration","Common"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/04-Consul/02-Configuration/common.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Consul 공통 설정"}],["meta",{"property":"og:description","content":"Consul Common Configuration"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"Enterprise"}],["meta",{"property":"article:tag","content":"Configuration"}],["meta",{"property":"article:tag","content":"Common"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Consul 공통 설정\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1629519254000,"updatedTime":1695042774000,"contributors":[{"name":"swbs90","email":"swbs90@naver.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":2.8,"words":168},"filePathRelative":"04-HashiCorp/04-Consul/02-Configuration/common.md","localizedDate":"2021년 8월 21일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">팁</p>\\n<p>최대한 설정값을 넣어보고, 번역기도 돌려보고 물어도 보고 넣은 server, client의 공통설정 파일입니다.<br>\\n저는 agent.hcl파일안에 다 넣고 실행하지만 나눠서 추후에는 기능별로 나눠서 사용할 예정입니다.</p>\\n</div>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>#node name에는 _금지\\n#node_name\\n \\nclient_addr = \\"0.0.0.0\\"\\nbind_addr = \\"{{ GetInterfaceIP `ens192` }}\\"\\nadvertise_addr = \\"{{ GetInterfaceIP `ens224` }}\\"\\n \\n#ipv4, ipv6를 나눠서 설정할 수 있음.\\n#advertise_addr_ipv4\\n#advertise_addr_ipv6\\n \\nports {\\n  #http = 8500\\n  http = -1\\n  dns = 8600\\n  #https = -1\\n  https = 8500\\n  serf_lan = 8301\\n  grpc = 8502\\n  server = 8300\\n}\\n \\n#gossip ip 지정\\n#serf_lan\\n#gossip 대역대 지정\\n#serf_lan_allowed_cidrs\\n \\n#사용자 감사, 사용자가 consul에서 사용한 행동을 기록\\n#audit {\\n#  enabled = true\\n#  sink \\"My sink\\" {\\n#    type   = \\"file\\"\\n#    format = \\"json\\"\\n#    path   = \\"data/audit/audit.json\\"\\n#    #consul의 감사작성방법 규칙, 현재는 best-effort만지원\\n#    delivery_guarantee = \\"best-effort\\"\\n#    rotate_duration = \\"24h\\"\\n#    rotate_max_files = 15\\n#    rotate_bytes = 25165824\\n#  }\\n#}\\n \\n#consul 서버관리 설정 변경\\n#autopoilt {\\n#    #새로운 서버가 클러스터에 추가될 때 죽은 서버 자동제거\\n#    cleanup_dead_servers = ture\\n#\\n#    last_contact_threshold = 200ms\\n#    #최소 quorm 수 지정\\n#    min_quorum = ni\\n#    #클러스터에 서버가 추가될 시 안정상태로 되어야 하는 최소 시간\\n#    server_stabilization_time = 10s\\n#}\\n \\n#동시에 처리할 수 있는 인증서 서명 요청 제한\\n#csr_max_concurrent = 0\\n#서버가 수락할 인증서 서명 요청(CSR)의 최대 수에 대한 속도 제한을 설정\\n#csr_max_per_second = 50\\n#클러스터에서 이전 루트 인증서를 교체할 때 사용\\n#leaf_cert_ttl = 72h\\n#CA 키 생성 타입\\n#private_key_type = ec\\n#CA 키 생성될 길이\\n#private_key_bits = 256\\n \\n#서버에서만 client를 join할 수 있게 함\\n#disable remote exec\\n \\n#enable syslog = true\\nlog_level = \\"DEBUG\\"\\ndata_dir = \\"/var/log/consul/consul\\"\\nlog_file = \\"/var/log/consul/consul.log\\"\\nlog_rotate_duration = \\"24h\\"\\nlog_rotate_bytes = 104857600\\nlog_rotate_max_files = 100\\n \\nlicense_path = \\"/opt/license/consul.license\\"\\n \\nacl {\\n  enabled = true\\n  default_policy = \\"allow\\"\\n  enable_token_persistence = true\\n \\n  #acl policy ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음\\n  #policy_ttl = 30s\\n  #acl role ttl, 줄이면 새로고침 빈도 상승, 성능에 영향을 미칠 수 있음\\n  #role_ttl = 30s\\n}\\n \\nconnect {\\n  enabled = true\\n  #vault 연동 옵션\\n  #ca_provider\\n}\\n \\ndns_config {\\n  allow_stale = true,\\n  max_stale = \\"87600h\\"\\n}\\n \\n#block_endpoints할성화시 restapi 차단\\n#http_config {\\n#    block_endpoints = false\\n#}\\n \\n#segments\\n \\nrpc {\\n  enable_streaming = true\\n}\\n \\nencrypt = \\"7VY2fVm0p6vJUYNS/oex/mr2e59dy4AaGMefTKtUGi0=\\"\\nencrypt_verify_incoming = false\\nencrypt_verify_outgoing = false\\n</code></pre></div>"}');export{u as comp,m as data};
