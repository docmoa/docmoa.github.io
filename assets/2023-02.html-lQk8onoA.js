import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as o,h as l}from"./app-BWMI_1Y2.js";const a={},t=l('<h1 id="_2023년-2월" tabindex="-1"><a class="header-anchor" href="#_2023년-2월"><span>2023년 2월</span></a></h1><h2 id="product-소개" tabindex="-1"><a class="header-anchor" href="#product-소개"><span>Product 소개</span></a></h2><ul><li><p>Terraform Cloud Adds ‘Projects’ to Organize Workspaces at Scale</p><ul><li><a href="https://www.hashicorp.com/blog/terraform-cloud-adds-projects-to-organize-workspaces-at-scale" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li><li>기존의 Terraform Cloud 에서는 연관되는 Workspace 간 그룹화가 불가능하고 Organization 및 Workspace 단위로만 권한 할당이 가능함으로 인해 사용자들은 자원 활용에 대한 제약사항을 고려하여 Organization 및 Workspace 를 분할하는 불편함을 감수해야 했습니다. &#39;Projects&#39; 는 Workspace 를 그룹화하고 Project 단위로 권한 설정을 지원함으로써 앞서 소개한 제약사항을 해소하도록 지원합니다.</li></ul></li></ul><h2 id="product-update" tabindex="-1"><a class="header-anchor" href="#product-update"><span>Product Update</span></a></h2><ul><li>Terraform <ul><li>CLI <ul><li><a href="https://github.com/hashicorp/terraform/releases/tag/v1.3.7" target="_blank" rel="noopener noreferrer">1.3.7 Release</a><ul><li>Module 사용 시 Version Constraint 에 대한 Parsing 관련 오류 개선</li><li>ignore_changes 설정된 resource 가 있을 경우 panic 이 발생하는 오류 개선</li></ul></li></ul></li><li><a href="https://developer.hashicorp.com/terraform/enterprise/releases" target="_blank" rel="noopener noreferrer">Enterprise Release</a><ul><li><a href="https://developer.hashicorp.com/terraform/enterprise/releases/2023/v202301-2" target="_blank" rel="noopener noreferrer">1월 Release</a> 출시 (<code>v202301-2</code>)</li><li>필수 Upgrade Versison: Release Note 에서 * 표기된 Version 은 필수로 거쳐야 하는 Version (예: v202207-2, v202204-2)</li><li>2023년 2월 Release (<code>v202302-1</code>) 을 기점으로 구버전 OS 및 Postrgres DB 에 대한 지원 종료 <ul><li><p>대상 OS</p><ul><li><p>Debian 8, 9</p></li><li><p>Ubuntu 14.04, 16.04</p></li><li><p>Amazon Linux 2014.03, 2014.09, 2015.03, 2015.09, 2016.03, 2016.09, 2017.03, 2017.09, 2018.03</p></li></ul></li><li><p>대상 Postgres</p><ul><li>Postgres 11</li><li>TFE 에 대해 External PostgresSQL 사용하는 경우 최소 버전 12 이상으로 Upgrade 필요 (Release 659 부터 적용)</li></ul></li></ul></li><li>Log Level (debug) 로 설정 시 tfe-atlas, tfe-atlas-ui, tfe-sidekiq 등 일부 구성요소로 인한 대량 log 수집되는 이슈 해결</li><li>Policy Manager 에 대한 Resource 접근 권한 제한, 필요 시 필요한 만큼의 추가 권한 필요</li><li>Private Module 처럼 Organization 간 Provider 공유 가능</li><li>State Rollback 기능 지원</li></ul></li><li>Provider <ul><li><a href="https://github.com/hashicorp/terraform-provider-aws/releases/tag/v4.52.0" target="_blank" rel="noopener noreferrer">AWS v4.52.0 주요 수정사항</a><ul><li>신규 resource 추가: <code>aws_auditmanager resource</code> 추가</li><li>Bug Fix <ul><li>aws_dynamodb_table 에 대해 <code>kms_key_arn</code> 관련 오류 개선</li><li>aws_api_gateway_integration 에 대해 <code>connection type</code> 이 변경되는 오류 개선</li></ul></li></ul></li><li><a href="https://github.com/hashicorp/terraform-provider-azurerm/releases/tag/v3.41.0" target="_blank" rel="noopener noreferrer">Azure v3.41.0 주요 수정사항</a><ul><li>신규 resource 추가: <code>azure_site_recovery_replication_recovery_plan</code></li><li>기능 개선 <ul><li>azurerm_databricks_workspace 에 대해 <code>customer managed key</code> 및 <code>public_network_access_enabled</code> 설정 지원</li><li>azurerm_kubernetes_cluster 에 대해 <code>node_public_ip_tags</code> 설정 지원</li></ul></li><li>Bug Fix <ul><li>azurerm_stream_analytics_output_servicebus 에 대해 MSI Authentication 설정 관련 개선</li></ul></li></ul></li><li><a href="https://github.com/hashicorp/terraform-provider-google/releases/tag/v4.51.0" target="_blank" rel="noopener noreferrer">GCP v4.51.0 주요 수정사항</a><ul><li>신규 resource 추가: <code>google_iam_access_boundary_policy</code>, <code>google_tags_location_tag_bindings</code></li><li>기능 개선 <ul><li>compute 에 대해 google_compute_node_group 의 share_settings 설정 지원</li><li>spanner 에 대해 <code>google_spanner_database_iam_member</code> 및 <code>google_spanner_instance_iam_member</code> 설정 지원</li></ul></li><li>Bug Fix <ul><li>bigquery 에 대해 IAM 설정 및 External Data Config 관련 오류 개선</li></ul></li></ul></li></ul></li></ul></li><li>Vault <ul><li>1.12.2 <ul><li>상세 <a href="https://github.com/hashicorp/vault/blob/main/CHANGELOG.md#1122" target="_blank" rel="noopener noreferrer">CHANGELOG</a></li><li>PKI Secret Engine: 기본 issuer 에 대한 변경을 위해 <code>default_follows_latest_issuer</code> 설정 추가</li><li>Raft Storage: <code>retry_join_as_non_voter</code>설정 추가</li><li>Okta Auth Method 관련 AuthRenew 로 인한 Panic 오류 수정</li><li>ciphertext 가 4 byte 이하인 경우 발생 가능한 deadlock 오류 수정</li><li>Performance Standby Node 에 대한 start up race condition 수정</li></ul></li></ul></li><li>Consul <ul><li>1.14.4 <ul><li>상세 <a href="https://github.com/hashicorp/consul/blob/main/CHANGELOG.md#1144-january-26-2023" target="_blank" rel="noopener noreferrer">CHANGELOG</a></li><li>connect 관련 transparent proxy upstreams 에 필요한 세부 구성 (<code>proxy-defaults</code>, <code>service-default</code>) 수정</li><li>peering 구성 시 이름은 반드시 소문자로 구성 필요. 향후 호환성 등을 고려하여 기존 구성된 peering 에 대해서 이름에 대문자 사용한 경우에 대해 소문자로 재구성 권고</li><li>consul connect envoy 명령어 사용 시 <code>envoy-ready-bind-port</code> 및 <code>envoy-ready-bind-address</code> 설정 지원</li><li>connect 관련 filter expression 이 처리 되도록 ConsulResolver 지원</li><li>인증서 auto-reloading 에 대한 오류 개선</li></ul></li></ul></li><li>Nomad <ul><li>1.4.3 <ul><li>상세 <a href="https://github.com/hashicorp/nomad/blob/main/CHANGELOG.md#143-november-21-2022" target="_blank" rel="noopener noreferrer">CHANGELOG</a></li><li>동일 Job 에 대해 여러 evaluation 이 pending 되어 있는 경우, 가장 최근 성공한 evaluation 에 대해서만 반영</li><li>File Upload, Consul Upstream 설정 등 UI 개선</li><li>Consul 연동 시 gRPC fingerprint 관련 발생 오류 개선 (Consul 1.14 연동부터 적용)</li></ul></li></ul></li></ul>',5),i=[t];function n(c,s){return r(),o("div",null,i)}const u=e(a,[["render",n],["__file","2023-02.html.vue"]]),h=JSON.parse(`{"path":"/04-HashiCorp/08-Updates/98-2023/2023-02.html","title":"2023년 2월","lang":"ko-KR","frontmatter":{"description":"2023년 2월 Update","tag":["Hashicorp","Update","Feb"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/08-Updates/98-2023/2023-02.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"2023년 2월"}],["meta",{"property":"og:description","content":"2023년 2월 Update"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Hashicorp"}],["meta",{"property":"article:tag","content":"Update"}],["meta",{"property":"article:tag","content":"Feb"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2023년 2월\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product 소개","slug":"product-소개","link":"#product-소개","children":[]},{"level":2,"title":"Product Update","slug":"product-update","link":"#product-update","children":[]}],"git":{"createdTime":1675423297000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"najihun","email":"51940925+najihun@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.75,"words":285},"filePathRelative":"04-HashiCorp/08-Updates/98-2023/2023-02.md","localizedDate":"2023년 2월 3일","excerpt":"\\n<h2>Product 소개</h2>\\n<ul>\\n<li>\\n<p>Terraform Cloud Adds ‘Projects’ to Organize Workspaces at Scale</p>\\n<ul>\\n<li><a href=\\"https://www.hashicorp.com/blog/terraform-cloud-adds-projects-to-organize-workspaces-at-scale\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hashicorp Blog</a></li>\\n<li>기존의 Terraform Cloud 에서는 연관되는 Workspace 간 그룹화가 불가능하고 Organization 및 Workspace 단위로만 권한 할당이 가능함으로 인해 사용자들은 자원 활용에 대한 제약사항을 고려하여 Organization 및 Workspace 를 분할하는 불편함을 감수해야 했습니다. 'Projects' 는 Workspace 를 그룹화하고 Project 단위로 권한 설정을 지원함으로써 앞서 소개한 제약사항을 해소하도록 지원합니다.</li>\\n</ul>\\n</li>\\n</ul>"}`);export{u as comp,h as data};