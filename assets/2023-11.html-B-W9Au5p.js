import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as r,c as t,h as a}from"./app-BWMI_1Y2.js";const o={},l=a('<h1 id="_2023년-11월" tabindex="-1"><a class="header-anchor" href="#_2023년-11월"><span>2023년 11월</span></a></h1><h2 id="product-소개" tabindex="-1"><a class="header-anchor" href="#product-소개"><span>Product 소개</span></a></h2><ul><li>Infrastructure and security releases open HashiConf 2023 <ul><li><a href="https://www.hashicorp.com/blog/infrastructure-security-lifecycle-releases-open-hashiconf-2023" target="_blank" rel="noopener noreferrer">Hashicorp Blog</a></li><li>샌프란시스코에서 개최된 Hashiconf 2023 에서 8가지의 솔루션에 대해 그룹을 크게 Infrastructure 와 Security 로 구분지어 앞으로의 솔루션 포트폴리오 및 업데이트를 진행하며, Terraform test framework, Vault Secret Sync, Vault Radar 등 워크플로우 개선을 위한 새로운 기능이 공개했습니다. 자세한 사항은 행사 현장을 직접 다녀온 이들이 전해주는 <a href="https://www.linkedin.com/search/results/content/?fromMember=%5B%22ACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo%22%5D&amp;heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo&amp;keywords=jin%20sol%20kim&amp;position=0&amp;searchId=ccb5024f-0353-4b04-a8e3-41e3bace4159&amp;sid=_%40V&amp;update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7126034287874699264%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)" target="_blank" rel="noopener noreferrer">Hashicorp Korea: Hashiconf 2023</a> 에서 확인하세요!</li></ul></li></ul><h2 id="product-update" tabindex="-1"><a class="header-anchor" href="#product-update"><span>Product Update</span></a></h2><ul><li>Terraform <ul><li>CLI <ul><li><a href="https://github.com/hashicorp/terraform/releases/tag/v1.6.0" target="_blank" rel="noopener noreferrer">1.6 Release</a><ul><li><code>terraform test</code> 기능 추가 - 작성한 terraform code 에 대해 .tftest.hcl code 를 작성하여 검증 지원</li><li>Terraform CLI 설치 대상 OS 최소버전 명시 <ul><li>MacOS: 10.15 Catalina 이상</li><li>Windows: Windows 10 또는 Windows Server 2016 이상</li></ul></li><li>S3 Remote Backend 설정 시 AWS 서비스 endpoint 지정에 필요한 환경변수 정의 - <code>AWS_ENDPOINT_URL_DYNAMODB</code>, <code>AWS_ENDPOINT_URL_IAM</code>, <code>AWS_ENDPOINT_URL_S3</code>, <code>AWS_ENDPOINT_URL_STS</code></li></ul></li></ul></li><li><a href="https://developer.hashicorp.com/terraform/enterprise/releases" target="_blank" rel="noopener noreferrer">Enterprise Release</a><ul><li><a href="https://developer.hashicorp.com/terraform/enterprise/releases/2023/v202310-1" target="_blank" rel="noopener noreferrer">10월 Release</a> 출시 (<code>v202310-1 (741)</code>)</li><li>필수 Upgrade Versison: Release Note 에서 * 표기된 Version 은 필수로 거쳐야 하는 Version (예: v202207-2)</li><li>v202309-1 release 부터 FDO (<a href="https://developer.hashicorp.com/terraform/enterprise/flexible-deployments" target="_blank" rel="noopener noreferrer">flexible deployment options</a>) 지원하며,<code>consolidated_services_enabled</code> 설정 여부에 따라 기존 replicated 설치 방식 사용 지원.</li><li>Known Issue 1. Azure DevOps VCS 연동 시 발생하는 Known Issue 에 대해 Azure DevOps Server 의 버전을 <code>2020 Update 1.2 Patch 7</code> 로 업그레이드 하여 해결</li><li>Known Issue 2. GCP 환경에서 <code>consolidated_services_enabled</code> 설정 활성화하고 설치 시 발생하는 Object Storage Issue 는 v202311-1 에서 개선 예정</li></ul></li><li>Provider <ul><li><a href="https://github.com/hashicorp/terraform-provider-aws/releases/tag/v5.23.1" target="_blank" rel="noopener noreferrer">AWS v5.23.1 주요 수정사항</a><ul><li>Bug Fix <ul><li>data-source/aws_lambda_function 에 대해 vpc_config.ipv6_allowed_for_dual_stack 설정 시 발생하는 오류 개선</li></ul></li></ul></li><li><a href="https://github.com/hashicorp/terraform-provider-azurerm/releases/tag/v3.78.0" target="_blank" rel="noopener noreferrer">Azure v3.78.0 주요 수정사항</a><ul><li>신규 resource 추가 <ul><li>azurerm_resource_management_private_link_association</li></ul></li><li>기능 개선 <ul><li>azurerm_redis_enterprise_cluster 에 대한 Japan East 리전 설정 지원</li></ul></li><li>Bug Fix <ul><li>azurerm_backup_policy_vm 에 대해 현재 시간정보 사용 관련 오류 개선</li></ul></li></ul></li><li><a href="https://github.com/hashicorp/terraform-provider-google/releases/tag/v5.4.0" target="_blank" rel="noopener noreferrer">GCP v5.4.0 주요 수정사항</a><ul><li>신규 resource 추가 <ul><li>google_cloud_identity_group_lookup</li><li>google_network_connectivity_policy_based_route</li><li>google_pubsub_schema_iam_</li></ul></li><li>기능 개선 <ul><li>google_bigquery_connection 에 대해 cloud_spanner.use_serverless_analytics 설정 대신 cloud_spanner.use_data_boost 설정 지원</li><li>google_bigquery_connection 에 대해 cloud_spanner.database_role, cloud_spanner.use_data_boost, cloud_spanner.max_parallelism 설정 지원</li><li>google_bigquery_dataset.access 에 대해 iam_member 설정 지원</li></ul></li><li>Bug Fix <ul><li>google_bigquery_capacity_commitment 에 대해 잘못된 capacity_commitment_id 설정으로 인한 자원 재생성 오류 개선</li><li>cloudrunv2 에 대해 annotations 그리고 labels 관련 오류 개선</li></ul></li></ul></li></ul></li></ul></li><li>Vault <ul><li>1.15.1 <ul><li>상세 <a href="https://github.com/hashicorp/vault/releases/tag/v1.15.1" target="_blank" rel="noopener noreferrer">Release Note</a></li><li>Secret Sync 관련 telemetry 추가</li><li>UI 개선</li><li>Audit Device 설정 관련 <code>file</code> 사용 시 SIGHUP 에서 발생하는 log file 재열기 오류 개선</li><li>AWS Auth Method 관련 Client Config 가 존재하지 않는 경우 발생하는 패닉 오류 개선</li><li>Transit Engine 관련 managed key 사용 시 sign/verify 과정 추가 key auto rotation 불가하도록 개선</li><li>DB Secret Engine 관련 Mongo DB 에 대해 admin 이 아닌 계정에 대한 root rotate 지원</li></ul></li></ul></li><li>Consul <ul><li>1.16.2 <ul><li>상세 <a href="https://github.com/hashicorp/consul/releases/tag/v1.16.2" target="_blank" rel="noopener noreferrer">Release Note</a></li><li>Vault 와 연동하여 사용하는 인증서 관련 Leaf Cert 생성 시 발생하는 오류 개선</li><li>Snapshot 기반 복원 후 Envoy Endpoint 올바르게 생성되지 않는 이슈 해결</li></ul></li></ul></li><li>Nomad <ul><li>1.6.2 <ul><li>상세 <a href="https://github.com/hashicorp/nomad/releases/tag/v1.6.2" target="_blank" rel="noopener noreferrer">Release Note</a></li><li>Service Mesh 위해 Consul 연동 시 upstream 설정 관련 DestinationPeer, DestinationType, LocalBindSocketPath 등 설정 지원</li><li>jobspec 관련 여러개의 cron 정의를 위해 crons 지원</li><li>UI 개선</li></ul></li></ul></li></ul>',5),i=[l];function n(s,c){return r(),t("div",null,i)}const d=e(o,[["render",n],["__file","2023-11.html.vue"]]),h=JSON.parse('{"path":"/04-HashiCorp/08-Updates/98-2023/2023-11.html","title":"2023년 11월","lang":"ko-KR","frontmatter":{"description":"2023년 11월 Update","tag":["Hashicorp","Update","Nov"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/08-Updates/98-2023/2023-11.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"2023년 11월"}],["meta",{"property":"og:description","content":"2023년 11월 Update"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-02-14T07:38:50.000Z"}],["meta",{"property":"article:tag","content":"Hashicorp"}],["meta",{"property":"article:tag","content":"Update"}],["meta",{"property":"article:tag","content":"Nov"}],["meta",{"property":"article:modified_time","content":"2024-02-14T07:38:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2023년 11월\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-14T07:38:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product 소개","slug":"product-소개","link":"#product-소개","children":[]},{"level":2,"title":"Product Update","slug":"product-update","link":"#product-update","children":[]}],"git":{"createdTime":1698990531000,"updatedTime":1707896330000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2},{"name":"najihun","email":"51940925+najihun@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.97,"words":298},"filePathRelative":"04-HashiCorp/08-Updates/98-2023/2023-11.md","localizedDate":"2023년 11월 3일","excerpt":"\\n<h2>Product 소개</h2>\\n<ul>\\n<li>Infrastructure and security releases open HashiConf 2023\\n<ul>\\n<li><a href=\\"https://www.hashicorp.com/blog/infrastructure-security-lifecycle-releases-open-hashiconf-2023\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hashicorp Blog</a></li>\\n<li>샌프란시스코에서 개최된 Hashiconf 2023 에서 8가지의 솔루션에 대해 그룹을 크게 Infrastructure 와 Security 로 구분지어 앞으로의 솔루션 포트폴리오 및 업데이트를 진행하며, Terraform test framework, Vault Secret Sync, Vault Radar 등 워크플로우 개선을 위한 새로운 기능이 공개했습니다. 자세한 사항은 행사 현장을 직접 다녀온 이들이 전해주는 <a href=\\"https://www.linkedin.com/search/results/content/?fromMember=%5B%22ACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo%22%5D&amp;heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAABFOyc0BZBke7ai9SSnSjeoYufUuYByUFqo&amp;keywords=jin%20sol%20kim&amp;position=0&amp;searchId=ccb5024f-0353-4b04-a8e3-41e3bace4159&amp;sid=_%40V&amp;update=urn%3Ali%3Afs_updateV2%3A(urn%3Ali%3Aactivity%3A7126034287874699264%2CBLENDED_SEARCH_FEED%2CEMPTY%2CDEFAULT%2Cfalse)\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Hashicorp Korea: Hashiconf 2023</a> 에서 확인하세요!</li>\\n</ul>\\n</li>\\n</ul>"}');export{d as comp,h as data};