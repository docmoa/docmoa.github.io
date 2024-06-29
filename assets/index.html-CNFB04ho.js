import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as c,r as i,o as e,c as t,a as n,F as r,e as u,g as k,b as m,w as d,f as g,t as p,h}from"./app-B_LCFs7C.js";const y=()=>[{path:"/04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-backup-restore.html",title:"Terraform Enterprise Backup & Restore",lang:"ko-KR",frontmatter:{description:"Terraform Enterprise Backup & Restore",tag:["Terraform","backup","restore"],author:"hognod(ddim), dyana(ddim)",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-backup-restore.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Terraform Enterprise Backup & Restore"}],["meta",{property:"og:description",content:"Terraform Enterprise Backup & Restore"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-06-29T05:27:54.000Z"}],["meta",{property:"article:author",content:"hognod(ddim), dyana(ddim)"}],["meta",{property:"article:tag",content:"Terraform"}],["meta",{property:"article:tag",content:"backup"}],["meta",{property:"article:tag",content:"restore"}],["meta",{property:"article:modified_time",content:"2024-06-29T05:27:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Terraform Enterprise Backup & Restore","image":[""],"dateModified":"2024-06-29T05:27:54.000Z","author":[{"@type":"Person","name":"hognod(ddim), dyana(ddim)"}]}']]},headers:[{level:2,title:"1. Backup & Restore 개요",slug:"_1-backup-restore-개요",link:"#_1-backup-restore-개요",children:[]},{level:2,title:"2. 인증 및 보안",slug:"_2-인증-및-보안",link:"#_2-인증-및-보안",children:[]},{level:2,title:"3. Mounted Disk 배포 시 Backup & Restore",slug:"_3-mounted-disk-배포-시-backup-restore",link:"#_3-mounted-disk-배포-시-backup-restore",children:[{level:3,title:"3.1. docker-compose.yaml bind 경로 추가",slug:"_3-1-docker-compose-yaml-bind-경로-추가",link:"#_3-1-docker-compose-yaml-bind-경로-추가",children:[]},{level:3,title:"3.2. aux 폴더 내용 전송",slug:"_3-2-aux-폴더-내용-전송",link:"#_3-2-aux-폴더-내용-전송",children:[]},{level:3,title:"3.3. Restore",slug:"_3-3-restore",link:"#_3-3-restore",children:[]}]}],git:{createdTime:171930261e4,updatedTime:1719638874e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ddim",email:"ddim@example.com",commits:1}]},readingTime:{minutes:5.6,words:336},filePathRelative:"04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-backup-restore.md",localizedDate:"2024년 6월 25일",excerpt:`
<h2>1. Backup &amp; Restore 개요</h2>
<p>Backup은 Object Storage와 PostgreSQL을 포함한 모든 데이터를 대상으로 이루어진다. 다만, 설치 구성요소들에 대한 Backup이 되는 것은 아니기 때문에 Restore시 새로운 Terraform Enterprise의 설치가 필요하다.</p>
<p>아래와 같은 주의 사항이 존재</p>
<ul>
<li>Backup된 Terraform Enterprise와 Restore된 Terraform Enterprise 사이에 버전 차이가 있어서는 안된다. 즉, Backup을 진행한 버전 그대로 Restore 과정을 진행해야 한다.</li>
<li>Backup된 PostgreSQL과 Restore된 PostgreSQL 사이에 버전 차이가 있어서는 안된다. 즉, Backup을 진행한 버전 그대로 Restore 과정을 진행해야 한다.</li>
<li>Restore 과정 진행 시 Terraform Enterprise는 application data가 없는 상태로 새로 설치되어야 한다.</li>
<li>Restore 과정이 완료된 후 Terraform Enterprise는 재시작이 필요하다.</li>
</ul>`,copyright:{author:"hognod(ddim), dyana(ddim)"}},{path:"/04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-requirement-flex.html",title:"Terraform Enterprise Requirements - Flexible Deployment",lang:"ko-KR",frontmatter:{description:"Terraform Enterprise 설치 요구사항 정리",tag:["Terraform","Enterprise","tfe"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-requirement-flex.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Terraform Enterprise Requirements - Flexible Deployment"}],["meta",{property:"og:description",content:"Terraform Enterprise 설치 요구사항 정리"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-06-26T00:58:39.000Z"}],["meta",{property:"article:tag",content:"Terraform"}],["meta",{property:"article:tag",content:"Enterprise"}],["meta",{property:"article:tag",content:"tfe"}],["meta",{property:"article:modified_time",content:"2024-06-26T00:58:39.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Terraform Enterprise Requirements - Flexible Deployment","image":[""],"dateModified":"2024-06-26T00:58:39.000Z","author":[]}']]},headers:[{level:2,title:"1. License File",slug:"_1-license-file",link:"#_1-license-file",children:[]},{level:2,title:"2. TLS Certification",slug:"_2-tls-certification",link:"#_2-tls-certification",children:[]},{level:2,title:"3. 실행 환경",slug:"_3-실행-환경",link:"#_3-실행-환경",children:[]},{level:2,title:"4. Data Store",slug:"_4-data-store",link:"#_4-data-store",children:[{level:3,title:"4.1 Disk",slug:"_4-1-disk",link:"#_4-1-disk",children:[]},{level:3,title:"4.2 PostgreSQL",slug:"_4-2-postgresql",link:"#_4-2-postgresql",children:[]},{level:3,title:"4.3 Object Storage",slug:"_4-3-object-storage",link:"#_4-3-object-storage",children:[]},{level:3,title:"4.4 Redis",slug:"_4-4-redis",link:"#_4-4-redis",children:[]},{level:3,title:"4.5 HashiCorp Vault (옵션)",slug:"_4-5-hashicorp-vault-옵션",link:"#_4-5-hashicorp-vault-옵션",children:[]}]},{level:2,title:"5. Network",slug:"_5-network",link:"#_5-network",children:[{level:3,title:"5.1 Ingress",slug:"_5-1-ingress",link:"#_5-1-ingress",children:[]},{level:3,title:"5.2 Egress",slug:"_5-2-egress",link:"#_5-2-egress",children:[]}]}],git:{createdTime:1719363519e3,updatedTime:1719363519e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:5.13,words:308},filePathRelative:"04-HashiCorp/03-Terraform/06-TerraformEnterprise/tfe-requirement-flex.md",localizedDate:"2024년 6월 26일",excerpt:`
<blockquote>
<p><a href="https://developer.hashicorp.com/terraform/enterprise/flexible-deployments/install" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/terraform/enterprise/flexible-deployments/install</a></p>
</blockquote>
<blockquote>
<p>v202406-1 기준</p>
</blockquote>`},{path:"/04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.html",title:"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기",lang:"ko-KR",frontmatter:{description:"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기",tag:["vault","OIDC","Cognito"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기"}],["meta",{property:"og:description",content:"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-06-12T02:17:33.000Z"}],["meta",{property:"article:tag",content:"vault"}],["meta",{property:"article:tag",content:"OIDC"}],["meta",{property:"article:tag",content:"Cognito"}],["meta",{property:"article:modified_time",content:"2024-06-12T02:17:33.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"AWS Cognito를 사용하여 Vault의 OIDC 인증 설정하기","image":[""],"dateModified":"2024-06-12T02:17:33.000Z","author":[]}']]},headers:[{level:2,title:"소개",slug:"소개",link:"#소개",children:[]},{level:2,title:"AWS Cognito 및 Vault 설정",slug:"aws-cognito-및-vault-설정",link:"#aws-cognito-및-vault-설정",children:[{level:3,title:"요구사항",slug:"요구사항",link:"#요구사항",children:[]},{level:3,title:"설정 방법",slug:"설정-방법",link:"#설정-방법",children:[]},{level:3,title:"Terraform 코드",slug:"terraform-코드",link:"#terraform-코드",children:[]},{level:3,title:"코드 설명",slug:"코드-설명",link:"#코드-설명",children:[]},{level:3,title:"참고사항",slug:"참고사항",link:"#참고사항",children:[]}]},{level:2,title:"AWS Cognito를 사용하는 경우의 장점",slug:"aws-cognito를-사용하는-경우의-장점",link:"#aws-cognito를-사용하는-경우의-장점",children:[]},{level:2,title:"Vault 인증 스크린샷",slug:"vault-인증-스크린샷",link:"#vault-인증-스크린샷",children:[]}],git:{createdTime:1718158653e3,updatedTime:1718158653e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:3.18,words:191},filePathRelative:"04-HashiCorp/06-Vault/03-Auth_Method/oidc-aws-cognito.md",localizedDate:"2024년 6월 12일",excerpt:`
<h2>소개</h2>
<p>이 Terraform 코드는 AWS Cognito를 사용하여 Vault의 OIDC(Authentication Method)를 설정하는 방법을 안내합니다. AWS의 인프라 및 보안 서비스와 함께 사용하는 사람들을 위해 만들어졌으며, AWS Cognito를 Identity Provider(IDP)로 사용하여 Vault에 대한 강력한 인증을 설정하는 것을 목표로 합니다.</p>
<h2>AWS Cognito 및 Vault 설정</h2>
<p>아래의 Terraform 코드는 AWS Cognito 및 Vault에서 필요한 설정을 포함하고 있습니다. 코드를 사용하기 전에 아래의 요구사항을 충족해야 합니다.</p>`},{path:"/04-HashiCorp/07-Nomad/03-TroubleShooting/failed-to-create-nomad-cgroup-memory.html",title:"Failed to start (failed to create nomad cgroup memory)",lang:"ko-KR",frontmatter:{description:"failed to create nomad cgroup memory",tag:["Nomad","Error"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/03-TroubleShooting/failed-to-create-nomad-cgroup-memory.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Failed to start (failed to create nomad cgroup memory)"}],["meta",{property:"og:description",content:"failed to create nomad cgroup memory"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-04-25T10:38:17.000Z"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Error"}],["meta",{property:"article:modified_time",content:"2024-04-25T10:38:17.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Failed to start (failed to create nomad cgroup memory)","image":[""],"dateModified":"2024-04-25T10:38:17.000Z","author":[]}']]},headers:[{level:2,title:"Error log",slug:"error-log",link:"#error-log",children:[]},{level:2,title:"Check Filesystem Mount Options",slug:"check-filesystem-mount-options",link:"#check-filesystem-mount-options",children:[]},{level:2,title:"Add read-write to cgroup",slug:"add-read-write-to-cgroup",link:"#add-read-write-to-cgroup",children:[]},{level:2,title:"Verify Kernel Support and Parameters",slug:"verify-kernel-support-and-parameters",link:"#verify-kernel-support-and-parameters",children:[]}],git:{createdTime:1714041497e3,updatedTime:1714041497e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:5.47,words:328},filePathRelative:"04-HashiCorp/07-Nomad/03-TroubleShooting/failed-to-create-nomad-cgroup-memory.md",localizedDate:"2024년 4월 25일",excerpt:`
<p>오류 메시지는 파일 시스템이 읽기 전용으로 마운트된 Linux 시스템에서 <code>cgroup</code>을 수정하려고 할 때 문제가 있음을 나타냅니다. 이 문제는 컨테이너 및 컨테이너화되지 않은 애플리케이션을 오케스트레이션하는 클러스터 관리자 및 스케줄러인 Nomad가 관리하는 환경에서 발생할 수 있습니다.</p>
<h2>Error log</h2>
<div class="language-log" data-highlighter="prismjs" data-ext="log" data-title="log"><pre class="language-log"><code><span class="line"><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></span>
<span class="line"><span class="token date number">Apr 25</span> <span class="token time number">11:27:31</span> raspberrypi nomad<span class="token punctuation">[</span><span class="token number">20120</span><span class="token punctuation">]</span><span class="token operator">:</span>     <span class="token date number">2024-04-25T</span><span class="token time number">11:27:31.007+0100</span> <span class="token punctuation">[</span><span class="token level info keyword">INFO</span><span class="token punctuation">]</span>  <span class="token property">client.proclib.cg1:</span> <span class="token property">initializing nomad cgroups:</span> cores<span class="token operator">=</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">3</span></span>
<span class="line"><span class="token date number">Apr 25</span> <span class="token time number">11:27:31</span> raspberrypi nomad<span class="token punctuation">[</span><span class="token number">20120</span><span class="token punctuation">]</span><span class="token operator">:</span>     <span class="token date number">2024-04-25T</span><span class="token time number">11:27:31.008+0100</span> <span class="token punctuation">[</span><span class="token level error important">ERROR</span><span class="token punctuation">]</span> <span class="token property">agent:</span> <span class="token property">error starting agent:</span> error<span class="token operator">=</span><span class="token string">"client setup failed: failed to initialize process manager: failed to create nomad cgroup memory: mkdir /sys/fs/cgroup/memory: read-only file system"</span></span>
<span class="line"><span class="token date number">Apr 25</span> <span class="token time number">11:27:31</span> raspberrypi systemd<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">:</span> nomad<span class="token punctuation">.</span>service<span class="token operator">:</span> Service RestartSec<span class="token operator">=</span><span class="token number">100ms</span> expired<span class="token punctuation">,</span> scheduling restart<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre></div>`},{path:"/04-HashiCorp/03-Terraform/04-TroubleShooting/apply-aborted.html",title:"Terraform Apply Aborted - Tainted",lang:"ko-KR",frontmatter:{description:"Terraform Apply 도중 중단되는 상황",tag:["Terraform","State"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/03-Terraform/04-TroubleShooting/apply-aborted.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Terraform Apply Aborted - Tainted"}],["meta",{property:"og:description",content:"Terraform Apply 도중 중단되는 상황"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-04-12T05:22:33.000Z"}],["meta",{property:"article:tag",content:"Terraform"}],["meta",{property:"article:tag",content:"State"}],["meta",{property:"article:modified_time",content:"2024-04-12T05:22:33.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Terraform Apply Aborted - Tainted","image":[""],"dateModified":"2024-04-12T05:22:33.000Z","author":[]}']]},headers:[{level:2,title:"정상 동작의 예",slug:"정상-동작의-예",link:"#정상-동작의-예",children:[]},{level:2,title:"Terraform Apply 도중 네트워크가 끊긴다면?",slug:"terraform-apply-도중-네트워크가-끊긴다면",link:"#terraform-apply-도중-네트워크가-끊긴다면",children:[]},{level:2,title:"복구 방안",slug:"복구-방안",link:"#복구-방안",children:[]}],git:{createdTime:1712899353e3,updatedTime:1712899353e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:6,words:360},filePathRelative:"04-HashiCorp/03-Terraform/04-TroubleShooting/apply-aborted.md",localizedDate:"2024년 4월 12일",excerpt:`
<h2>정상 동작의 예</h2>
<h2>Terraform Apply 도중 네트워크가 끊긴다면?</h2>
<p>클라우드들의 API의 경우 대부분 Sync로 동작하므로, Terraform이 생성 요청을 하면 그에 대한 응답을 받습니다. AWS의 경우 네트워크가 단절 되더라도, 이미 요청한 API 대한 응답을 AWS에서 반환하므로 timeout으로 인한 에러가발생 한 이후 응답을 기준으로 State가 작성됩니다. 다만 정상적인 완료 응답을 받지 못했으므로 Terraform State에는 해당 리소스는 <code>tainted</code>(불확실한) 상태로 기록됩니다.</p>`},{path:"/04-HashiCorp/06-Vault/04-UseCase/API-security.html",title:"API 보안을 위한 Vault 활용 (API Key)",lang:"ko-KR",frontmatter:{description:"API 보안을 위한 Vault 활용",tag:["vault","token","pki","mTLS"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/API-security.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"API 보안을 위한 Vault 활용 (API Key)"}],["meta",{property:"og:description",content:"API 보안을 위한 Vault 활용"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-19T23:38:02.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"vault"}],["meta",{property:"article:tag",content:"token"}],["meta",{property:"article:tag",content:"pki"}],["meta",{property:"article:tag",content:"mTLS"}],["meta",{property:"article:modified_time",content:"2024-03-19T23:38:02.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"API 보안을 위한 Vault 활용 (API Key)","image":[""],"dateModified":"2024-03-19T23:38:02.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"1. API를 위한 인증과 인가, API \bKey",slug:"_1-api를-위한-인증과-인가-api-key",link:"#_1-api를-위한-인증과-인가-api-key",children:[]},{level:2,title:"2. API Key를 위한 Vault 요소",slug:"_2-api-key를-위한-vault-요소",link:"#_2-api-key를-위한-vault-요소",children:[{level:3,title:"2.1 Vault Token",slug:"_2-1-vault-token",link:"#_2-1-vault-token",children:[]},{level:3,title:"2.2 Vault Token Role",slug:"_2-2-vault-token-role",link:"#_2-2-vault-token-role",children:[]},{level:3,title:"2.3 자동화",slug:"_2-3-자동화",link:"#_2-3-자동화",children:[]}]}],git:{createdTime:1710859305e3,updatedTime:1710891482e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:5}]},readingTime:{minutes:30.62,words:1837},filePathRelative:"04-HashiCorp/06-Vault/04-UseCase/API-security.md",localizedDate:"2024년 3월 19일",excerpt:`
<blockquote>
<p>참고 1: <a href="https://owasp.org/API-Security/editions/2023/en/0x11-t10/" target="_blank" rel="noopener noreferrer">OWASP Top 10 API Securit Risks - 2023</a><br>
참고 2: <a href="https://cf-assets.www.cloudflare.com/slt3lc6tev37/5zfIEoxvRDHLRbkBaLJqsT/c712b0273971194774fc7326b3b1da34/Whitepaper_A-Guide-to-API-Security_Korean_20220622.pdf" target="_blank" rel="noopener noreferrer">Cloudflare API 보안 가이드</a></p>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html",title:"nomad-pack custom registry",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","nomad-pack","vuepress"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"nomad-pack custom registry"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:56:11.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"nomad-pack"}],["meta",{property:"article:tag",content:"vuepress"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:56:11.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"nomad-pack custom registry","image":[""],"dateModified":"2024-03-08T06:56:11.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"Docker image build",slug:"docker-image-build",link:"#docker-image-build",children:[]},{level:2,title:"vcs 구성",slug:"vcs-구성",link:"#vcs-구성",children:[{level:3,title:"디렉토리 구조",slug:"디렉토리-구조",link:"#디렉토리-구조",children:[]}]},{level:2,title:"nomad-pack registry 등록 및 실행",slug:"nomad-pack-registry-등록-및-실행",link:"#nomad-pack-registry-등록-및-실행",children:[]},{level:2,title:"작동 확인",slug:"작동-확인",link:"#작동-확인",children:[]}],git:{createdTime:16395807e5,updatedTime:1709880971e3,contributors:[{name:"ung",email:"swbs90@naver.com",commits:2},{name:"ung",email:"ung@mz.co.kr",commits:2},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:8.85,words:531},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/nomad-pack.md",localizedDate:"2021년 12월 16일",excerpt:`
<ul>
<li>nomad job파일을 템플릿처럼 다룰 수 있게 해주는 고마운 기능
<ul>
<li>nomad-pack custom 메뉴얼 주소 및 커뮤니티 registry
<ul>
<li>nomad-pack: <a href="https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack/blob/main/docs/writing-packs.md</a></li>
<li>커뮤니티 registry : <a href="https://github.com/hashicorp/nomad-pack-community-registry" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/nomad-pack-community-registry</a></li>
</ul>
</li>
</ul>
</li>
<li>해당 예제는 Vue.js의 vuepress기반의 컨테이너
<ul>
<li>참조링크
<ul>
<li>gitlab: <a href="https://gitlab.com/swbs9000/vuepress" target="_blank" rel="noopener noreferrer">https://gitlab.com/swbs9000/vuepress</a></li>
<li>docker: <a href="https://hub.docker.com/repository/docker/swbs90/vuepress" target="_blank" rel="noopener noreferrer">https://hub.docker.com/repository/docker/swbs90/vuepress</a> CLI: docker push swbs90/vuepress:0.0.3</li>
<li>vuepress: <a href="https://github.com/docmoa/docs" target="_blank" rel="noopener noreferrer">https://github.com/docmoa/docs</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html",title:"Autoscaler",lang:"ko-KR",frontmatter:{description:"Nomad autoscaler for aws",tag:["Nomad","sample","job","autoscaler","aws"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Autoscaler"}],["meta",{property:"og:description",content:"Nomad autoscaler for aws"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"sample"}],["meta",{property:"article:tag",content:"job"}],["meta",{property:"article:tag",content:"autoscaler"}],["meta",{property:"article:tag",content:"aws"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Autoscaler","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[]}']]},headers:[{level:2,title:"Nomad Autoscaler - sample job",slug:"nomad-autoscaler-sample-job",link:"#nomad-autoscaler-sample-job",children:[]}],git:{createdTime:1644990252e3,updatedTime:1709880952e3,contributors:[{name:"Euimokna-cn",email:"myneck@cnmail.co.kr",commits:3},{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"euimokna",email:"31657666+euimokna@users.noreply.github.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:6.05,words:363},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/autoscaler.md",localizedDate:"2022년 2월 16일",excerpt:`
<ul>
<li>aws cloud 환경에서 별도의 모니터링 툴을 사용하지 않고 nomad-apm 기능을 이용한 auscaler 구성</li>
<li>Nomad Autoscaler 다운로드 :
<ul>
<li>VM환경: <a href="https://releases.hashicorp.com/nomad-autoscaler/" target="_blank" rel="noopener noreferrer">https://releases.hashicorp.com/nomad-autoscaler/</a></li>
<li>Container환경: <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler</a> , <a href="https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/hashicorp/nomad-autoscaler-enterprise</a></li>
</ul>
</li>
<li>주요링크
<ul>
<li>Nomad Autoscaler aws IAM policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/target/aws-asg</a></li>
<li>Nomad Autoscaler policy 관련 : <a href="https://www.nomadproject.io/tools/autoscaling/policy" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/policy</a></li>
<li>Nomad Autoscaler의 nomad-apm 을 사용하는 경우 : <a href="https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/tools/autoscaling/plugins/apm/nomad</a></li>
</ul>
</li>
</ul>`},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html",title:"Elastic",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/elastic.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Elastic"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Elastic","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[],git:{createdTime:1632449108e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:2.03,words:122},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/elastic.md",localizedDate:"2021년 9월 24일",excerpt:`
<div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line">job <span class="token string">"elastic"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  group <span class="token string">"elastic"</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">      port <span class="token string">"db"</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      port <span class="token string">"kibana"</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">5601</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"db"</span></span>
<span class="line">      <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span></span>
<span class="line">      <span class="token keyword">check</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">type</span>     <span class="token punctuation">=</span> <span class="token string">"tcp"</span></span>
<span class="line">        <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span></span>
<span class="line">        <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/elasticsearch/elasticsearch:6.8.9"</span></span>
<span class="line">        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"db"</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span></span>
<span class="line">            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span></span>
<span class="line">            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/elasticsearch/config/elasticsearch.yml"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH</span>
<span class="line">network.host: 0.0.0.0</span>
<span class="line">discovery.seed_hosts: ["127.0.0.1"]</span>
<span class="line">xpack.security.enabled: true</span>
<span class="line">xpack.license.self_generated.type: trial</span>
<span class="line">xpack.monitoring.collection.enabled: true</span>
<span class="line">EOH</span></span>
<span class="line">        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">env</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment"># "discovery.type":"single-node",</span></span>
<span class="line">        <span class="token property">ES_JAVA_OPTS</span> <span class="token punctuation">=</span> <span class="token string">"-Xms512m -Xmx1024m"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">2000</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">"kibana"</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"docker.elastic.co/kibana/kibana:6.8.9"</span></span>
<span class="line">        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token property">mount</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">type</span>   <span class="token punctuation">=</span> <span class="token string">"bind"</span></span>
<span class="line">            <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span></span>
<span class="line">            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token string">"/usr/share/kibana/config/kibana.yml"</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOH</span>
<span class="line">server.name: kibana</span>
<span class="line">elasticsearch.username: elastic</span>
<span class="line">elasticsearch.password: elastic</span>
<span class="line">EOH</span></span>
<span class="line">        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">env</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">ELASTICSEARCH_URL</span><span class="token punctuation">=</span><span class="token string">"http://172.28.128.31:9200"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">1000</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html",title:"elk_version7",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","elk"],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"elk_version7"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"elk"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"elk_version7","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"7버전에 elsaticsearch에서 기본패스워드를 찾지 못해서 env로 넣어줌",slug:"_7버전에-elsaticsearch에서-기본패스워드를-찾지-못해서-env로-넣어줌",link:"#_7버전에-elsaticsearch에서-기본패스워드를-찾지-못해서-env로-넣어줌",children:[]},{level:2,title:"logstash는 적당한 샘플을 찾지 못해서 일단은 비워둠",slug:"logstash는-적당한-샘플을-찾지-못해서-일단은-비워둠",link:"#logstash는-적당한-샘플을-찾지-못해서-일단은-비워둠",children:[]}],git:{createdTime:1642040133e3,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"swbs90@naver.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:4.08,words:245},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/elk_version7.md",localizedDate:"2022년 1월 13일",excerpt:`
<h2>7버전에 elsaticsearch에서 기본패스워드를 찾지 못해서 env로 넣어줌</h2>
<h2>logstash는 적당한 샘플을 찾지 못해서 일단은 비워둠</h2>
<div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line">job <span class="token string">"elk"</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">constraint</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>kernel<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>"</span></span>
<span class="line">        <span class="token property">value</span> <span class="token punctuation">=</span> <span class="token string">"linux"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">update</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">stagger</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span></span>
<span class="line">        <span class="token property">max_parallel</span> <span class="token punctuation">=</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    group <span class="token string">"elk"</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">restart</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">attempts</span> <span class="token punctuation">=</span> <span class="token number">2</span></span>
<span class="line">            <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"1m"</span></span>
<span class="line">            <span class="token property">delay</span> <span class="token punctuation">=</span> <span class="token string">"15s"</span></span>
<span class="line">            <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"delay"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">          port <span class="token string">"elastic"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">9200</span></span>
<span class="line">            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">9200</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          port <span class="token string">"kibana"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5601</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          port <span class="token string">"logstash"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">to</span>     <span class="token punctuation">=</span> <span class="token number">5000</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        task <span class="token string">"elasticsearch"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">           <span class="token keyword">constraint</span> <span class="token punctuation">{</span></span>
<span class="line">             <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span></span>
<span class="line">             <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span></span>
<span class="line">           <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"elasticsearch:7.16.2"</span></span>
<span class="line">                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"elastic"</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">"local/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml"</span>,</span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF</span>
<span class="line">cluster.name: "my-cluster"</span>
<span class="line">network.host: 0.0.0.0</span>
<span class="line">discovery.type: single-node</span>
<span class="line">discovery.seed_hosts: ["127.0.0.1"]</span>
<span class="line">xpack.security.enabled: true</span>
<span class="line">xpack.license.self_generated.type: trial</span>
<span class="line">xpack.monitoring.collection.enabled: true</span>
<span class="line">EOF</span></span>
<span class="line">        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/elasticsearch.yml"</span></span>
<span class="line">        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span></span>
<span class="line">        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">env</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">ELASTIC_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span></span>
<span class="line">                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-elasticsearch"</span></span>
<span class="line">                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"elastic"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span></span>
<span class="line">                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">2048</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        task <span class="token string">"kibana"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">constraint</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span></span>
<span class="line">              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"kibana:7.16.2"</span></span>
<span class="line">                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"kibana"</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">"local/kibana.yml:/usr/share/kibana/config/kibana.yml"</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF</span>
<span class="line">#</span>
<span class="line"># ** THIS IS AN AUTO-GENERATED FILE **</span>
<span class="line">#</span>
<span class="line"></span>
<span class="line"># Default Kibana configuration for docker target</span>
<span class="line">server.host: "0.0.0.0"</span>
<span class="line">server.shutdownTimeout: "5s"</span>
<span class="line">elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]</span>
<span class="line">elasticsearch.username: elastic</span>
<span class="line">elasticsearch.password: elastic</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/kibana.yml"</span></span>
<span class="line">        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span></span>
<span class="line">        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-kibana"</span></span>
<span class="line">                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"kibana"</span></span>
<span class="line">                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span></span>
<span class="line">                <span class="token keyword">check</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"http"</span></span>
<span class="line">                    <span class="token property">path</span> <span class="token punctuation">=</span> <span class="token string">"/"</span></span>
<span class="line">                    <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span></span>
<span class="line">                    <span class="token property">timeout</span> <span class="token punctuation">=</span> <span class="token string">"2s"</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">500</span></span>
<span class="line">                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1200</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        task <span class="token string">"logstash"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">constraint</span> <span class="token punctuation">{</span></span>
<span class="line">              <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>unique<span class="token punctuation">.</span>hostname<span class="token punctuation">}</span></span>"</span></span>
<span class="line">              <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">"slave2"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"logstash:7.16.2"</span></span>
<span class="line">                <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"logstash"</span><span class="token punctuation">]</span></span>
<span class="line">                <span class="token property">volumes</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">"local/logstash.yml:/usr/share/logstash/config/logstash.yml"</span></span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      <span class="token keyword">template</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF</span>
<span class="line">http.host: "0.0.0.0"</span>
<span class="line">xpack.monitoring.elasticsearch.hosts: [ "http://{{ env "NOMAD_IP_elk" }}:{{ env "NOMAD_PORT_elk" }}" ]</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line">        <span class="token property">destination</span>   <span class="token punctuation">=</span> <span class="token string">"local/logstash.yml"</span></span>
<span class="line">        <span class="token property">change_mode</span>   <span class="token punctuation">=</span> <span class="token string">"signal"</span></span>
<span class="line">        <span class="token property">change_signal</span> <span class="token punctuation">=</span> <span class="token string">"SIGHUP"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>TASKGROUP<span class="token punctuation">}</span></span>-logstash"</span></span>
<span class="line">                <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"logstash"</span></span>
<span class="line">                <span class="token property">provider</span> <span class="token punctuation">=</span> <span class="token string">"nomad"</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token property">cpu</span> <span class="token punctuation">=</span> <span class="token number">200</span></span>
<span class="line">                <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">1024</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html",title:"Nomad ingress gateway",lang:"ko-KR",frontmatter:{description:"Nomad ingress gateway with consul",tag:["Nomad","Sample","Job",""],author:"Ung",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Nomad ingress gateway"}],["meta",{property:"og:description",content:"Nomad ingress gateway with consul"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"Ung"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Nomad ingress gateway","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"Ung"}]}']]},headers:[{level:2,title:"Nomad job으로 ingress gateway 사용하기 (with consul)",slug:"nomad-job으로-ingress-gateway-사용하기-with-consul",link:"#nomad-job으로-ingress-gateway-사용하기-with-consul",children:[{level:3,title:"테스트 job (python fastapi)",slug:"테스트-job-python-fastapi",link:"#테스트-job-python-fastapi",children:[]}]},{level:2,title:"만약 service가 http로 떠야한다면 아래와 같이 service등록도 진행해야한다.",slug:"만약-service가-http로-떠야한다면-아래와-같이-service등록도-진행해야한다",link:"#만약-service가-http로-떠야한다면-아래와-같이-service등록도-진행해야한다",children:[]},{level:2,title:"ingress job",slug:"ingress-job",link:"#ingress-job",children:[]}],git:{createdTime:164015281e4,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"admin",email:"sulee@expernet.co.kr",commits:1},{name:"ung",email:"swbs90@naver.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:2.92,words:175},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/ingress-gateway.md",localizedDate:"2021년 12월 22일",excerpt:`
<h2>Nomad job으로 ingress gateway 사용하기 (with consul)</h2>
<ul>
<li>consul로 설정하는 ingress gateway가 아닌 Nomad job 기동 시에 ingress gateway 활성화 예제
<ul>
<li>hashicorp 공식 예제가 아닌 다른 걸 해보려하다, 특이한 부분을 확인하여 공유합니다.</li>
</ul>
</li>
<li>사전에 Consul Server는 구축되어 있어야 합니다.</li>
</ul>
<h3>테스트 job (python fastapi)</h3>
<div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line">job <span class="token string">"22-fastapi"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">  group <span class="token string">"fastapi"</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">mode</span> <span class="token punctuation">=</span> <span class="token string">"bridge"</span></span>
<span class="line">      <span class="token comment">#service가 80으로 뜸, 만약 다른 포트로 뜨는 서비스를 사용 할 경우 image와 to만 변경</span></span>
<span class="line">      port <span class="token string">"http"</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">to</span> <span class="token punctuation">=</span> <span class="token number">80</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"fastapi"</span></span>
<span class="line">      <span class="token comment">#여기서 port에 위에서 미리 선언한 http를 쓸 경우 다이나믹한 port를 가져오는데 </span></span>
<span class="line">      <span class="token comment">#그럴 경우 ingress gateway에서 못 읽어 온다.</span></span>
<span class="line">      <span class="token property">port</span> <span class="token punctuation">=</span> <span class="token string">"80"</span></span>
<span class="line">      <span class="token keyword">connect</span> <span class="token punctuation">{</span></span>
<span class="line">        sidecar_service<span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">"fastapi"</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"tiangolo/uvicorn-gunicorn-fastapi"</span></span>
<span class="line">        <span class="token property">ports</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"http"</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">282</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">scaling</span>  <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">enabled</span> <span class="token punctuation">=</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token property">min</span>     <span class="token punctuation">=</span> <span class="token number">1</span></span>
<span class="line">      <span class="token property">max</span>     <span class="token punctuation">=</span> <span class="token number">3</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">policy</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">evaluation_interval</span> <span class="token punctuation">=</span> <span class="token string">"5s"</span></span>
<span class="line">        <span class="token property">cooldown</span>            <span class="token punctuation">=</span> <span class="token string">"1m"</span></span>
<span class="line">        <span class="token comment">#driver = "nomad-apm"</span></span>
<span class="line">        check <span class="token string">"mem_allocated_percentage"</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"nomad-apm"</span></span>
<span class="line">          <span class="token property">query</span>  <span class="token punctuation">=</span> <span class="token string">"max_memory"</span></span>
<span class="line"></span>
<span class="line">          strategy <span class="token string">"target-value"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">target</span> <span class="token punctuation">=</span> <span class="token number">80</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div>`,copyright:{author:"Ung"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html",title:"Nomad에서 Ansible로 Docker 설치와 Template 주의사항",lang:"ko-KR",frontmatter:{description:"Nomad에서 Aisnble 실행 및 템플릿 주의사항",tag:["Nomad","Ansible","Job","Docker"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Nomad에서 Ansible로 Docker 설치와 Template 주의사항"}],["meta",{property:"og:description",content:"Nomad에서 Aisnble 실행 및 템플릿 주의사항"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Ansible"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"Docker"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Nomad에서 Ansible로 Docker 설치와 Template 주의사항","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[],git:{createdTime:169338236e4,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:3},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:4.23,words:254},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.md",localizedDate:"2023년 8월 30일",excerpt:`
<blockquote>
<p>참고 : <a href="https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525</a></p>
</blockquote>
<p>Nomad를 통해 Ops작업을 수행할 때 <code>sysbatch</code> 타입의 Job에 Ansible을 <code>raw_exec</code>로 실행하면 전체 노드에서 일괄로 작업을 수행할 수 있다.</p>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html",title:"Wildfly(Jboss)",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job","wildfly","JBoss"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/jboss.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Wildfly(Jboss)"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"wildfly"}],["meta",{property:"article:tag",content:"JBoss"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Wildfly(Jboss)","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"Dockerfile과 비교",slug:"dockerfile과-비교",link:"#dockerfile과-비교",children:[]},{level:2,title:"Sample Job",slug:"sample-job",link:"#sample-job",children:[]}],git:{createdTime:1639892483e3,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:3},{name:"ung",email:"swbs90@naver.com",commits:3},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:5.27,words:316},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/jboss.md",localizedDate:"2021년 12월 19일",excerpt:`
<blockquote>
<p>image info : <a href="https://quay.io/repository/wildfly/wildfly?tab=info" target="_blank" rel="noopener noreferrer">https://quay.io/repository/wildfly/wildfly?tab=info</a><br>
github : <a href="https://github.com/jboss-dockerfiles/wildfly" target="_blank" rel="noopener noreferrer">https://github.com/jboss-dockerfiles/wildfly</a><br>
wildfly docker example : <a href="http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/" target="_blank" rel="noopener noreferrer">http://www.mastertheboss.com/soa-cloud/docker/deploying-applications-on-your-docker-wildfly-image/</a></p>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html",title:"Jenkins(Java Driver) on Nomad",lang:"ko-KR",frontmatter:{description:"Jenkins WAR 파일로 실행하기",tag:["Nomad","Sample","Job","Jenkins"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Jenkins(Java Driver) on Nomad"}],["meta",{property:"og:description",content:"Jenkins WAR 파일로 실행하기"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://www.datocms-assets.com/2885/1620146573-oversubscription.png?fit=max&fm=webp&q=80&w=2500"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:tag",content:"Jenkins"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Jenkins(Java Driver) on Nomad","image":["https://www.datocms-assets.com/2885/1620146573-oversubscription.png?fit=max&fm=webp&q=80&w=2500"],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[{level:2,title:"1. Jenkins의 기본 실행 방식",slug:"_1-jenkins의-기본-실행-방식",link:"#_1-jenkins의-기본-실행-방식",children:[]},{level:2,title:"2. Nomad에서의 Java 애플리케이션 실행의 의미",slug:"_2-nomad에서의-java-애플리케이션-실행의-의미",link:"#_2-nomad에서의-java-애플리케이션-실행의-의미",children:[]},{level:2,title:"3. Nomad 구성 요구사항",slug:"_3-nomad-구성-요구사항",link:"#_3-nomad-구성-요구사항",children:[{level:3,title:"3.1 Nomad Client",slug:"_3-1-nomad-client",link:"#_3-1-nomad-client",children:[]},{level:3,title:"3.2 Nomad Scheduler",slug:"_3-2-nomad-scheduler",link:"#_3-2-nomad-scheduler",children:[]}]},{level:2,title:"4. Job Sample",slug:"_4-job-sample",link:"#_4-job-sample",children:[]}],git:{createdTime:166773544e4,updatedTime:1709880952e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:3},{name:"swbs90",email:"36329083+swbs90@users.noreply.github.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:6.48,words:389},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/jenkins_java_driver.md",localizedDate:"2022년 11월 6일",excerpt:`
<blockquote>
<p>Nomad</p>
<ul>
<li>Java Driver : <a href="https://developer.hashicorp.com/nomad/docs/drivers/java" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/docs/drivers/java</a></li>
<li>Schecuduler Config : <a href="https://developer.hashicorp.com/nomad/api-docs/operator/scheduler" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/nomad/api-docs/operator/scheduler</a></li>
</ul>
</blockquote>`,copyright:{author:"GS"}},{path:"/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html",title:"Keycloak",lang:"ko-KR",frontmatter:{description:"Nomad Sample",tag:["Nomad","Sample","Job"],author:"GS",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/keycloak.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Keycloak"}],["meta",{property:"og:description",content:"Nomad Sample"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-03-08T06:55:52.000Z"}],["meta",{property:"article:author",content:"GS"}],["meta",{property:"article:tag",content:"Nomad"}],["meta",{property:"article:tag",content:"Sample"}],["meta",{property:"article:tag",content:"Job"}],["meta",{property:"article:modified_time",content:"2024-03-08T06:55:52.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Keycloak","image":[""],"dateModified":"2024-03-08T06:55:52.000Z","author":[{"@type":"Person","name":"GS"}]}']]},headers:[],git:{createdTime:16324491e5,updatedTime:1709880952e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1},{name:"ung",email:"ung@mz.co.kr",commits:1}]},readingTime:{minutes:1.58,words:95},filePathRelative:"04-HashiCorp/07-Nomad/05-SampleJob/keycloak.md",localizedDate:"2021년 9월 24일",excerpt:`
<p>Keycloak은 Stateful 한 특성이 있어서 볼륨을 붙여주는것이 좋다.</p>
<div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line"><span class="token comment">// nomad namespace apply -description "Keycloak" keycloak</span></span>
<span class="line"></span>
<span class="line">job <span class="token string">"keycloak"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"service"</span></span>
<span class="line">  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"dc1"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token property">namespace</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span></span>
<span class="line"></span>
<span class="line">  group <span class="token string">"keycloak"</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">count</span> <span class="token punctuation">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    volume <span class="token string">"keycloak-vol"</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">"host"</span></span>
<span class="line">      <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token property">source</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    task <span class="token string">"keycloak"</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">"docker"</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">volume_mount</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">volume</span> <span class="token punctuation">=</span> <span class="token string">"keycloak-vol"</span></span>
<span class="line">        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">"/opt/jboss/keycloak/standalone/data"</span></span>
<span class="line">        <span class="token property">read_only</span> <span class="token punctuation">=</span> <span class="token boolean">false</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">config</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">image</span> <span class="token punctuation">=</span> <span class="token string">"quay.io/keycloak/keycloak:14.0.0"</span></span>
<span class="line">        <span class="token keyword">port_map</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">keycloak</span> <span class="token punctuation">=</span> <span class="token number">8080</span></span>
<span class="line">          <span class="token property">callback</span> <span class="token punctuation">=</span> <span class="token number">8250</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      </span>
<span class="line">      <span class="token keyword">env</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">KEYCLOAK_USER</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span></span>
<span class="line">        <span class="token property">KEYCLOAK_PASSWORD</span> <span class="token punctuation">=</span> <span class="token string">"admin"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">resources</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">550</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">network</span> <span class="token punctuation">{</span></span>
<span class="line">          port <span class="token string">"keycloak"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18080</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          port <span class="token string">"callback"</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token property">static</span> <span class="token punctuation">=</span> <span class="token number">18250</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">service</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">"keycloak"</span></span>
<span class="line">        <span class="token property">tags</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"auth"</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">check</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">type</span>  <span class="token punctuation">=</span> <span class="token string">"tcp"</span></span>
<span class="line">          <span class="token property">interval</span> <span class="token punctuation">=</span> <span class="token string">"10s"</span></span>
<span class="line">          <span class="token property">timeout</span>  <span class="token punctuation">=</span> <span class="token string">"2s"</span></span>
<span class="line">          <span class="token property">port</span>  <span class="token punctuation">=</span> <span class="token string">"keycloak"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div>`,copyright:{author:"GS"}}],b=c({setup(){const s=y();return console.log(s),{pages:s}}}),v=n("h1",{id:"hashicorp",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hashicorp"},[n("span",null,"HashiCorp")])],-1),f=n("h2",{id:"recent-pages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#recent-pages"},[n("span",null,"Recent pages")])],-1),w={key:0},_=k(`<h2 id="packer" tabindex="-1"><a class="header-anchor" href="#packer"><span>Packer</span></a></h2><blockquote><p>다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구</p></blockquote><ul><li>홈페이지 : <a href="https://www.packer.io" target="_blank" rel="noopener noreferrer">https://www.packer.io</a></li><li>관련 항목 <ul><li>Alicloud / AWS / Azure / GCP / Naver Cloud / Oracle</li><li>Hyper-V / OpenStack / QEMU / Vagrant / VirtualBox / VMware</li><li>Docker / LXC</li></ul></li></ul><h2 id="vagrant" tabindex="-1"><a class="header-anchor" href="#vagrant"><span>Vagrant</span></a></h2><blockquote><p>로컬 개발환경을 관리하는 프로비저닝 자동화 도구</p></blockquote><ul><li>홈페이지 : <a href="https://www.vagrantup.com" target="_blank" rel="noopener noreferrer">https://www.vagrantup.com</a></li><li>관련 항목 <ul><li>Virtual Box</li><li>Hyper-V</li><li>VMware Workstation</li><li>Docker</li></ul></li></ul><h2 id="terraform" tabindex="-1"><a class="header-anchor" href="#terraform"><span>Terraform</span></a></h2><blockquote><p>클라우드, 온프레미스, 플랫폼 서비스의 리소스 프로비저닝과 자동화</p></blockquote><ul><li>홈페이지 : <a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">https://www.terraform.io/</a></li><li>관련 항목 <ul><li>Provider Registry : <a href="https://registry.terraform.io/" target="_blank" rel="noopener noreferrer">https://registry.terraform.io/</a></li><li>Terraform Cloud : <a href="https://app.terraform.io/" target="_blank" rel="noopener noreferrer">https://app.terraform.io/</a></li></ul></li></ul><h2 id="consul" tabindex="-1"><a class="header-anchor" href="#consul"><span>Consul</span></a></h2><blockquote><p>서비스 디스커버리와 서비스 메시로 네트워크 자동화</p></blockquote><ul><li>홈페이지 : <a href="https://www.consul.io/" target="_blank" rel="noopener noreferrer">https://www.consul.io/</a></li><li>관련 항목 <ul><li>Service Discovery</li><li>K/V</li><li>Service Mesh</li></ul></li></ul><h2 id="boundary" tabindex="-1"><a class="header-anchor" href="#boundary"><span>Boundary</span></a></h2><blockquote><p>인증/인가 기반으로 서버와 서비스에 대한 접근관리</p></blockquote><ul><li>홈페이지 : <a href="https://www.boundaryproject.io/" target="_blank" rel="noopener noreferrer">https://www.boundaryproject.io/</a></li></ul><h2 id="vault" tabindex="-1"><a class="header-anchor" href="#vault"><span>Vault</span></a></h2><blockquote><p>민감 정보의 관리와 접근에 중앙화된 관리 서비스</p></blockquote><ul><li>홈페이지 : <a href="https://www.vaultproject.io/" target="_blank" rel="noopener noreferrer">https://www.vaultproject.io/</a></li><li>관련 항목 <ul><li>Secret K/V</li><li>SSH OTP</li><li>PKI</li><li>KMS, KMIP</li><li>Data Encryption</li><li>Database Credential</li><li>Cloud Credential</li></ul></li></ul><h2 id="nomad" tabindex="-1"><a class="header-anchor" href="#nomad"><span>Nomad</span></a></h2><blockquote><p>애플리케이션 배포와 실행을 위한 오케스트레이터</p></blockquote><ul><li>홈페이지 : <a href="https://www.nomadproject.io/" target="_blank" rel="noopener noreferrer">https://www.nomadproject.io/</a></li><li>관련 항목 <ul><li>Docker / Podman / Containerd / LXC</li><li>Java</li><li>Exec / Raw_exec</li><li>QEMU</li><li>Windows IIS</li></ul></li></ul><h2 id="waypoint" tabindex="-1"><a class="header-anchor" href="#waypoint"><span>Waypoint</span></a></h2><blockquote><p>단일 구성으로 컨테이너 환경에 애플리케이션 빌드 및 배포</p></blockquote><ul><li>홈페이지 : <a href="https://www.waypointproject.io/" target="_blank" rel="noopener noreferrer">https://www.waypointproject.io/</a></li><li>관련 항목 <ul><li>AWS ECS/Lambda/SSM/EC2</li><li>Azure Container Instance</li><li>Docker</li><li>Google Cloud Run</li><li>Kubernetes</li><li>Nomad</li></ul></li></ul><h2 id="etc" tabindex="-1"><a class="header-anchor" href="#etc"><span>Etc.</span></a></h2><details class="hint-container details"><summary>Mac에서 한번에 업데이트 받기 예제</summary><ul><li><code>BIN_DIR</code>로 지정된 <code>/Users/my/Tools/bins/</code>는 PATH에 적용된 위치</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;&lt;&lt;&lt;&lt;&lt;&lt; CHECK POINT HASHICORP RELEASE &gt;&gt;&gt;&gt;&gt;&gt;&gt;&quot;</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">RELEASE_URL</span><span class="token operator">=</span><span class="token string">&quot;https://releases.hashicorp.com/&quot;</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">DOWNLOAD_DIR</span><span class="token operator">=</span><span class="token string">&quot;/tmp/hashistack-zip/&quot;</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">BIN_DIR</span><span class="token operator">=</span><span class="token string">&quot;/Users/my/Tools/bins/&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">\${DOWNLOAD_DIR}</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">\${DOWNLOAD_DIR}</span></span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">\${DOWNLOAD_DIR}</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${DOWNLOAD_DIR}</span>/*</span>
<span class="line"></span>
<span class="line"><span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">SOLUTION</span> <span class="token keyword">in</span> <span class="token string">&quot;terraform&quot;</span> <span class="token string">&quot;consul&quot;</span> <span class="token string">&quot;vault&quot;</span> <span class="token string">&quot;nomad&quot;</span> <span class="token string">&quot;packer&quot;</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token string">&quot;waypoint&quot;</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Check - <span class="token variable">\${SOLUTION}</span>&quot;</span></span>
<span class="line">    <span class="token assign-left variable">TAG</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsS</span> https://api.github.com/repos/hashicorp/$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span>/releases <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token operator">|</span> jq <span class="token parameter variable">-re</span> <span class="token string">&#39;.[] | select(.prerelease != true) | .tag_name&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/^v\\(.*\\)$/\\1/g&#39;</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-V</span> <span class="token punctuation">\\</span></span>
<span class="line">    <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span></span>
<span class="line"></span>
<span class="line">    <span class="token builtin class-name">export</span> <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token string">&quot;0.0.0&quot;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token string">&quot;<span class="token variable">\${BIN_DIR}</span>/<span class="token variable">\${SOLUTION}</span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> <span class="token parameter variable">--version</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/v//&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/+ent//&#39;</span><span class="token variable">)</span></span></span>
<span class="line">        <span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;boundary&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> version <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-4</span> <span class="token operator">|</span> <span class="token function">tail</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $3}&#39;</span><span class="token variable">)</span></span></span>
<span class="line">        <span class="token keyword">else</span></span>
<span class="line">            <span class="token assign-left variable">CURRENT_VERSION</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>$<span class="token punctuation">{</span>SOLUTION<span class="token punctuation">}</span> version <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-1</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/v//&#39;</span><span class="token variable">)</span></span></span>
<span class="line">        <span class="token keyword">fi</span></span>
<span class="line">    <span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$TAG</span> <span class="token operator">!=</span> <span class="token variable">$CURRENT_VERSION</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">\${SOLUTION}</span> <span class="token operator">=</span> <span class="token string">&quot;consul-terraform-sync&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">            <span class="token assign-left variable">TAG</span><span class="token operator">=</span><span class="token variable">\${TAG}</span>+ent</span>
<span class="line">        <span class="token keyword">fi</span></span>
<span class="line">        <span class="token builtin class-name">echo</span> <span class="token string">&quot;&gt;&gt;&gt;&gt; <span class="token variable">\${SOLUTION}</span> update <span class="token variable">\${CURRENT_VERSION}</span> --&gt; <span class="token variable">\${TAG}</span>&quot;</span></span>
<span class="line">        <span class="token assign-left variable">ZIP</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${TAG}</span>_darwin_amd64.zip&quot;</span></span>
<span class="line">        <span class="token assign-left variable">DOWNLOAD_URL</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${RELEASE_URL}</span><span class="token variable">\${SOLUTION}</span>/<span class="token variable">\${TAG}</span>/<span class="token variable">\${ZIP}</span>&quot;</span></span>
<span class="line">        <span class="token function">wget</span> <span class="token parameter variable">-O</span> <span class="token string">&quot;<span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span>&quot;</span> <span class="token variable">\${DOWNLOAD_URL}</span></span>
<span class="line">        <span class="token function">unzip</span> <span class="token parameter variable">-o</span> <span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span> <span class="token parameter variable">-d</span> <span class="token variable">$BIN_DIR</span></span>
<span class="line">        <span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token variable">\${DOWNLOAD_DIR}</span><span class="token variable">\${ZIP}</span> </span>
<span class="line">        <span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${UPDATE_LIST}</span> <span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${CURRENT_VERSION}</span><span class="token entity" title="\\t">\\t</span>--&gt;&gt;<span class="token entity" title="\\t">\\t</span><span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${TAG}</span>&quot;</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        <span class="token assign-left variable">UPDATE_LIST</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${UPDATE_LIST}</span> <span class="token variable">\${SOLUTION}</span>_<span class="token variable">\${CURRENT_VERSION}</span>&quot;</span></span>
<span class="line">    <span class="token keyword">fi</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> <span class="token parameter variable">-A</span> $<span class="token punctuation">{</span>DOWNLOAD_DIR<span class="token punctuation">}</span><span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    <span class="token function">mv</span> <span class="token variable">\${DOWNLOAD_DIR}</span>* /Users/gs/Tools/bins/</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\n">\\n</span>==== HASHISTACK VERSION ====&quot;</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">list</span> <span class="token keyword">in</span> <span class="token variable">$UPDATE_LIST</span></span>
<span class="line"><span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token variable">$list</span></span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,26);function T(s,S,N,A,R,C){const o=i("RouterLink");return e(),t("div",null,[v,f,n("ul",null,[(e(!0),t(r,null,u(s.pages,a=>(e(),t("li",{key:a.key},[m(o,{to:a.path},{default:d(()=>[g(p(a.title),1)]),_:2},1032,["to"]),a.frontmatter.date?(e(),t("span",w," [ "+p(new Date(a.frontmatter.date).toLocaleString())+" ] ",1)):h("",!0)]))),128))]),_])}const I=l(b,[["render",T],["__file","index.html.vue"]]),q=JSON.parse('{"path":"/04-HashiCorp/","title":"HashiCorp","lang":"ko-KR","frontmatter":{"tag":["HashiCorp"],"headerDepth":0,"order":0,"description":"HashiCorp Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Packer 다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구 홈페이지 : https://www.packer.io 관련 항목 Alicloud / AWS /...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"HashiCorp"}],["meta",{"property":"og:description","content":"HashiCorp Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Packer 다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구 홈페이지 : https://www.packer.io 관련 항목 Alicloud / AWS /..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"HashiCorp"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HashiCorp\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Recent pages","slug":"recent-pages","link":"#recent-pages","children":[]},{"level":2,"title":"Packer","slug":"packer","link":"#packer","children":[]},{"level":2,"title":"Vagrant","slug":"vagrant","link":"#vagrant","children":[]},{"level":2,"title":"Terraform","slug":"terraform","link":"#terraform","children":[]},{"level":2,"title":"Consul","slug":"consul","link":"#consul","children":[]},{"level":2,"title":"Boundary","slug":"boundary","link":"#boundary","children":[]},{"level":2,"title":"Vault","slug":"vault","link":"#vault","children":[]},{"level":2,"title":"Nomad","slug":"nomad","link":"#nomad","children":[]},{"level":2,"title":"Waypoint","slug":"waypoint","link":"#waypoint","children":[]},{"level":2,"title":"Etc.","slug":"etc","link":"#etc","children":[]}],"git":{"createdTime":1627556976000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":7},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":4}]},"readingTime":{"minutes":6.55,"words":393},"filePathRelative":"04-HashiCorp/README.md","localizedDate":"2021년 7월 29일","excerpt":"\\n<h2>Recent pages</h2>\\n<ul>\\n  <li v-for=\\"page in pages\\" :key=\\"page.key\\">\\n    <a :to=\\"page.path\\" href=\\"undefined\\" target=\\"_blank\\">{{ page.title }}</a>\\n    <span v-if=\\"page.frontmatter.date\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\\n<h2>Packer</h2>\\n<blockquote>\\n<p>다양한 플랫폼에 대한 VM, 컨테이너 이미지 생성 자동화 도구</p>\\n</blockquote>","autoDesc":true}');export{I as comp,q as data};
