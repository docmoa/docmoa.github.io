import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as i,c as l,b as n,h as t}from"./app-BWMI_1Y2.js";const r="/assets/vault-login-C8kOrIKh.png",c="/assets/cognito-login-zre45znf.png",s="/assets/cognito-user-info-CvNZMK98.png",d="/assets/vault-entity-alias-id-xr7Vo0bU.png",g={},h=t('<h1 id="aws-cognito를-사용하여-vault의-oidc-인증-설정하기" tabindex="-1"><a class="header-anchor" href="#aws-cognito를-사용하여-vault의-oidc-인증-설정하기"><span>AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기</span></a></h1><h2 id="소개" tabindex="-1"><a class="header-anchor" href="#소개"><span>소개</span></a></h2><p>이 Terraform 코드는 AWS Cognito를 사용하여 Vault의 OIDC(Authentication Method)를 설정하는 방법을 안내합니다. AWS의 인프라 및 보안 서비스와 함께 사용하는 사람들을 위해 만들어졌으며, AWS Cognito를 Identity Provider(IDP)로 사용하여 Vault에 대한 강력한 인증을 설정하는 것을 목표로 합니다.</p><h2 id="aws-cognito-및-vault-설정" tabindex="-1"><a class="header-anchor" href="#aws-cognito-및-vault-설정"><span>AWS Cognito 및 Vault 설정</span></a></h2><p>아래의 Terraform 코드는 AWS Cognito 및 Vault에서 필요한 설정을 포함하고 있습니다. 코드를 사용하기 전에 아래의 요구사항을 충족해야 합니다.</p><h3 id="요구사항" tabindex="-1"><a class="header-anchor" href="#요구사항"><span>요구사항</span></a></h3><ul><li>AWS 계정 및 액세스 권한</li><li>AWS CLI 및 Terraform 설치</li><li>Vault 서버 액세스 및 관리 권한</li></ul><h3 id="설정-방법" tabindex="-1"><a class="header-anchor" href="#설정-방법"><span>설정 방법</span></a></h3><ol><li><code>env.sh</code> 파일을 생성하여 Vault 서버의 주소, 네임스페이스 및 토큰을 설정합니다.</li></ol><ul><li>VAULT_ADDR</li><li>VAULT_NAMESPACE (엔터프라이즈/HCP 인 경우)</li><li>VAULT_TOKEN</li></ul><ol start="2"><li>아래의 Terraform 코드를 사용하여 AWS Cognito 및 Vault를 설정합니다.</li><li>Terraform을 사용하여 코드를 적용하여 설정을 배포합니다.</li></ol><h3 id="terraform-코드" tabindex="-1"><a class="header-anchor" href="#terraform-코드"><span>Terraform 코드</span></a></h3><p><a href="https://github.com/Great-Stone/terraform-vault-oidc-aws-cognito" target="_blank" rel="noopener noreferrer">https://github.com/Great-Stone/terraform-vault-oidc-aws-cognito</a></p><h3 id="코드-설명" tabindex="-1"><a class="header-anchor" href="#코드-설명"><span>코드 설명</span></a></h3><ul><li><code>aws_cognito_user_pool</code>: Vault 인증에 사용될 AWS Cognito 사용자 풀을 생성합니다.</li><li><code>aws_cognito_user_pool_client</code>: Vault에 대한 클라이언트를 생성하고 필요한 OAuth 플로우, 스코프 및 콜백 URL을 설정합니다.</li><li><code>aws_cognito_user_pool_domain</code>: 사용자 풀에 대한 도메인을 생성합니다.</li><li><code>aws_cognito_user</code>: AWS Cognito에 사용자를 추가합니다.</li><li><code>vault_jwt_auth_backend</code>: Vault에서 OIDC(Authentication Method) 백엔드를 설정하여 AWS Cognito를 IDP로 사용합니다.</li><li><code>vault_policy</code>: Vault에서 사용될 정책을 설정합니다.</li><li><code>vault_jwt_auth_backend_role</code>: Vault에서 OIDC(Authentication Method) 역할을 설정하여 AWS Cognito를 사용하여 인증을 관리합니다.</li></ul><h3 id="참고사항" tabindex="-1"><a class="header-anchor" href="#참고사항"><span>참고사항</span></a></h3><ul><li>코드를 적용하기 전에 Terraform 초기화 및 계획 단계를 수행합니다.</li><li>코드를 적용하기 전에 <code>env.sh</code> 파일을 수정하여 Vault 서버의 주소, 네임스페이스 및 토큰을 설정합니다.</li><li>코드를 적용하기 전에 AWS Cognito 사용자 풀 및 클라이언트 설정을 확인합니다.</li><li>코드를 적용한 후에는 Vault 및 AWS Cognito에서 설정을 확인하고 테스트합니다.</li></ul><h2 id="aws-cognito를-사용하는-경우의-장점" tabindex="-1"><a class="header-anchor" href="#aws-cognito를-사용하는-경우의-장점"><span>AWS Cognito를 사용하는 경우의 장점</span></a></h2><ul><li><strong>통합된 보안</strong>: AWS Cognito를 사용하여 Vault에 대한 강력한 인증을 설정하면 AWS 계정의 사용자 및 그룹 관리 시스템과 연동되므로 보안을 강화할 수 있습니다.</li><li><strong>사용자 관리 간소화</strong>: AWS Cognito의 사용자 관리 및 인증 시스템을 통해 사용자 관리를 간소화하고 사용자 경험을 향상시킬 수 있습니다.</li><li><strong>관리 용이성</strong>: AWS에서 호스팅되는 Cognito 서비스를 사용하여 관리 및 운영을 간소화하고 AWS의 다양한 보안 기능을 활용할 수 있습니다.</li></ul><h2 id="vault-인증-스크린샷" tabindex="-1"><a class="header-anchor" href="#vault-인증-스크린샷"><span>Vault 인증 스크린샷</span></a></h2>',20),u=t('<figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Type: OIDC</li><li>Path: cognito</li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Check the <code>sub</code> ID</li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Vault entity alias ID mapped to OIDC sub ID</li></ul>',7);function p(m,C){const o=a("Mermaid");return i(),l("div",null,[h,n(o,{id:"mermaid-168",code:"eJwrTi0sTc1LTnXJTEwvSszlUgCCgsSikszkzILEvBKF0OLUIgzBsMTSnBIMUef89LzMknwusARIn66dHVillcLrhXNebd/xZu4OhTezprzZtBasBCwHVANSiqzkbd+MN3O3vFneoPB6w4y3M2cgmwe1A4eJUFlyzXzTtObNrJVv5k1QAOJXm1YqvFk29/WqVoU3C+a82rwVzQaozzxdFELys1PzgIpaXnevQfEY3GC4olebGoBmYnMyFhOhil9t2vBq8x68IfamZSPIgQCPjclC"}),u])}const A=e(g,[["render",p],["__file","oidc-aws-cognito.html.vue"]]),v=JSON.parse('{"path":"/04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.html","title":"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기","lang":"ko-KR","frontmatter":{"description":"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기","tag":["vault","OIDC","Cognito"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기"}],["meta",{"property":"og:description","content":"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-06-12T02:17:33.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"OIDC"}],["meta",{"property":"article:tag","content":"Cognito"}],["meta",{"property":"article:modified_time","content":"2024-06-12T02:17:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-12T02:17:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"소개","slug":"소개","link":"#소개","children":[]},{"level":2,"title":"AWS Cognito 및 Vault 설정","slug":"aws-cognito-및-vault-설정","link":"#aws-cognito-및-vault-설정","children":[{"level":3,"title":"요구사항","slug":"요구사항","link":"#요구사항","children":[]},{"level":3,"title":"설정 방법","slug":"설정-방법","link":"#설정-방법","children":[]},{"level":3,"title":"Terraform 코드","slug":"terraform-코드","link":"#terraform-코드","children":[]},{"level":3,"title":"코드 설명","slug":"코드-설명","link":"#코드-설명","children":[]},{"level":3,"title":"참고사항","slug":"참고사항","link":"#참고사항","children":[]}]},{"level":2,"title":"AWS Cognito를 사용하는 경우의 장점","slug":"aws-cognito를-사용하는-경우의-장점","link":"#aws-cognito를-사용하는-경우의-장점","children":[]},{"level":2,"title":"Vault 인증 스크린샷","slug":"vault-인증-스크린샷","link":"#vault-인증-스크린샷","children":[]}],"git":{"createdTime":1718158653000,"updatedTime":1718158653000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":3.18,"words":191},"filePathRelative":"04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.md","localizedDate":"2024년 6월 12일","excerpt":"\\n<h2>소개</h2>\\n<p>이 Terraform 코드는 AWS Cognito를 사용하여 Vault의 OIDC(Authentication Method)를 설정하는 방법을 안내합니다. AWS의 인프라 및 보안 서비스와 함께 사용하는 사람들을 위해 만들어졌으며, AWS Cognito를 Identity Provider(IDP)로 사용하여 Vault에 대한 강력한 인증을 설정하는 것을 목표로 합니다.</p>\\n<h2>AWS Cognito 및 Vault 설정</h2>\\n<p>아래의 Terraform 코드는 AWS Cognito 및 Vault에서 필요한 설정을 포함하고 있습니다. 코드를 사용하기 전에 아래의 요구사항을 충족해야 합니다.</p>"}');export{A as comp,v as data};