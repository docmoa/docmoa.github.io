import{A as e,Ct as t,H as n,M as r,O as i,g as a,i as o,l as s,m as c,p as l,s as u,u as d}from"./runtime-core.esm-bundler-DwmdDY9i.js";import{t as f}from"./plugin-vue_export-helper-BDNMzG2s.js";var p=()=>[{path:`/02-PublicCloud/AlibabaCloud/CredentialConfig.html`,title:`Alibaba CLI 설정`,lang:`ko-KR`,frontmatter:{description:`Alibaba Cloud CLI`,tag:[`alibaba`,`aliyun`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Alibaba CLI 설정","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/AlibabaCloud/CredentialConfig.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Alibaba CLI 설정`}],[`meta`,{property:`og:description`,content:`Alibaba Cloud CLI`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`aliyun`}],[`meta`,{property:`article:tag`,content:`alibaba`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1629423683e3,updatedTime:1787738564e3,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:6,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:5.7,words:342},filePathRelative:`02-PublicCloud/AlibabaCloud/CredentialConfig.md`,excerpt:`
<h2>1. CLI 설치</h2>
<h3>1.1 Download 방식</h3>
<ul>
<li>Install guide : <a href="https://partners-intl.aliyun.com/help/doc-detail/139508.htm" target="_blank" rel="noopener noreferrer">https://partners-intl.aliyun.com/help/doc-detail/139508.htm</a></li>
<li>Release Download Page : <a href="https://github.com/aliyun/aliyun-cli/releases" target="_blank" rel="noopener noreferrer">https://github.com/aliyun/aliyun-cli/releases</a>
<ul>
<li>CLI 릴리즈 페이지에서 OS에 맞는 파일을 다운로드하여 사용</li>
</ul>
</li>
</ul>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/00-overview.html`,title:`Workshop 안내`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Workshop 안내","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/00-overview.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Workshop 안내`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634565458e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:3,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:2.48,words:149},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/00-overview.md`,excerpt:`
<!-- ![](./image/intro01.png) -->
<hr>
<h2>과정 안내</h2>
<ul>
<li>
<p>이 과정은 IaC 도구인 Terraform을 사용하여 클라우드 리소스를 생성하는 실습(Hands-on)과정입니다.</p>
</li>
<li>
<p>💻 표시는 실제 실습을 수행하는 단계 입니다.</p>
</li>
<li>
<p>사전 준비 사항</p>
<ul>
<li>인터넷 연결이 가능한 사용자 별 랩탑 또는 데스크탑 환경이 필요합니다.</li>
<li>실습을 위한 샘플 코드활용을 위해 <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a>에 접속 가능해야 합니다.</li>
<li><a href="https://www.ncloud.com/" target="_blank" rel="noopener noreferrer">Naver Cloud Platform(NCP)</a>에 회원 가입이 필요합니다.</li>
<li>과정을 실행하기 위해서는 NCP 리소스 사용을 위한 <u><strong>크래딧</strong></u> 또는 <u><strong>결재수단</strong></u> 이 필요합니다. 과정 진행을 위해 강사가 크래딧을 제공할 수 있습니다.</li>
<li>실습을 수행하기 위한 랩탑 환경에 코드 편집기(IDE)로 Visual Studio Code 를 활용합니다.
<ul>
<li>홈페이지 및 다운로드 : <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">https://code.visualstudio.com/</a></li>
</ul>
</li>
</ul>
</li>
<li>
<p>컨텐츠</p>
<ol>
<li><a href="./01-terraform-intro">Terraform 소개</a></li>
<li><a href="./02-terraform-basic">Terraform 기본</a>
<ul>
<li>💻 Lab - Setup and Basic Usage</li>
</ul>
</li>
<li><a href="/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html" target="_blank">Terraform 실행</a> : <code>plan</code> <code>apply</code> <code>destroy</code>
<ul>
<li>💻 Lab - Terraform in Action</li>
</ul>
</li>
<li><a href="/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html" target="_blank">테라폼 프로비저닝 도구 사용 및 구성</a>
<ul>
<li>💻 Lab - Terraform으로 프로비저닝 하기</li>
</ul>
</li>
<li><a href="/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html" target="_blank">테라폼 상태파일(State)</a></li>
<li><a href="/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html" target="_blank">Terraform Cloud</a>
<ul>
<li>💻 Lab - Terraform Remote State</li>
</ul>
</li>
</ol>
</li>
</ul>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html`,title:`01. 테라폼 소개`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"01. 테라폼 소개","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`01. 테라폼 소개`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634565458e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:3,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:3,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:4.75,words:285},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.md`,excerpt:`
<h2>NCP 서버를 어떻게 프로비저닝 하죠?</h2>
<p>새로운 NCP의 인스턴스를 프로비저닝 할 수있는 몇 가지 다른 방법을 살펴 보겠습니다. 시작하기 전에 다음을 포함한 몇 가지 기본 정보를 수집해야합니다 (더 많은 옵션이 있습니다).</p>
<ul>
<li>서버 이름</li>
<li>운영 체제 (Image)</li>
<li>VM 크기</li>
<li>지리적 위치 (Region)</li>
<li>보안 그룹</li>
</ul>
<h2>서버 만들기 Method 1:  nCloud Console (GUI)</h2>

<hr>
<h2>서버 만들기 Method 2:  nCloud CLI</h2>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-terraform-basic.html`,title:`02. 테라폼 기본`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"02. 테라폼 기본","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-terraform-basic.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`02. 테라폼 기본`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634645557e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:3,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:6.2,words:372},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-terraform-basic.md`,excerpt:`
<h2>Terraform 이란?</h2>
<figure><figcaption>logo</figcaption></figure>
<ul>
<li>
<p>Terraform은 오픈 소스 프로비저닝 도구입니다.</p>
<ul>
<li>Terraform Github : <a href="https://github.com/hashicorp/terraform" target="_blank" rel="noopener noreferrer">https://github.com/hashicorp/terraform</a></li>
</ul>
</li>
<li>
<p>Go로 작성된 단일 바이너리로 제공됩니다. Terraform은 크로스 플랫폼이며 Linux, Windows 또는 MacOS에서 실행할 수 있습니다.</p>
</li>
<li>
<p>terraform 설치는 쉽습니다. zip 파일을 다운로드하고 압축을 풀고 실행하기 만하면됩니다.</p>
<ul>
<li>다운로드 : <a href="https://www.terraform.io/downloads.html" target="_blank" rel="noopener noreferrer">https://www.terraform.io/downloads.html</a></li>
</ul>
</li>
</ul>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-z-lab_terraform_basic.html`,title:`💻 Lab - Setup and Basic Usage`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"💻 Lab - Setup and Basic Usage","image":["https://icons.iconarchive.com/icons/bogo-d/project/16/OS-Windows-7-icon.png"],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-z-lab_terraform_basic.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`💻 Lab - Setup and Basic Usage`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:image`,content:`https://icons.iconarchive.com/icons/bogo-d/project/16/OS-Windows-7-icon.png`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634645557e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:9,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:3,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:11.45,words:687},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/02-z-lab_terraform_basic.md`,excerpt:`
<hr>
<h2>🏡 Moving in - Explore Your Workspace</h2>
<p>@slidestart blood</p>
<h3>Terraform 명령줄 도구는 MacOS, FreeBSD, OpenBSD, Windows, Solaris 및 Linux에서 사용할 수 있습니다.</h3>
<hr>
<h3>Terraform 언어는 사람과 기계가 읽을 수 있도록 설계되었습니다.</h3>
<hr>
<h3>대부분의 최신 코드 편집기는 Terraform 구문 강조 표시를 지원합니다.</h3>
<p>@slideend</p>
<h3>테라폼 설치 및 구성</h3>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html`,title:`03. 테라폼 실행`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"03. 테라폼 실행","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`03. 테라폼 실행`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634730149e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:4,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:6.72,words:403},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-terraform-in-Action.md`,excerpt:`
<h2>리소스 분석</h2>
<p>모든 Terraform으로 구성되는 리소스는 정확히 동일한 방식으로 구성됩니다.</p>
<div class="language-hcl" data-highlighter="prismjs" data-ext="hcl"><pre><code class="language-hcl"><span class="line">resource type <span class="token string">"name"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">parameter</span> <span class="token punctuation">=</span> <span class="token string">"foo"</span></span>
<span class="line">  <span class="token property">parameter2</span> <span class="token punctuation">=</span> <span class="token string">"bar"</span></span>
<span class="line">  <span class="token property">list</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">"one"</span>, <span class="token string">"two"</span>, <span class="token string">"three"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-z-lab_terraform_action.html`,title:`💻 Lab - Terraform in Action`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"💻 Lab - Terraform in Action","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-z-lab_terraform_action.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`💻 Lab - Terraform in Action`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634730149e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:3,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:3,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:10.88,words:653},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/03-z-lab_terraform_action.md`,excerpt:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 받은 디렉토리내의 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>📈 Terraform Graph</h2>
<p>@slidestart blood</p>
<h3>Terraform Graph는 모든 인프라에 대한 시각적 표현을 제공할 수 있습니다.</h3>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html`,title:`04. 테라폼 프로비저닝 도구 사용 및 구성`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"04. 테라폼 프로비저닝 도구 사용 및 구성","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`04. 테라폼 프로비저닝 도구 사용 및 구성`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634733306e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:2.95,words:177},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-ncp-provisioning-and-configuration.md`,excerpt:`
<h2>Terraform 프로비저닝 도구 사용</h2>
<p>Terraform을 사용하여 가상 머신 또는 컨테이너를 세우고 나면 운영 체제와 애플리케이션을 구성 할 수 있습니다.</p>
<p>여기에서 <mark>Provisioner</mark> 가 등장합니다.</p>
<p>Terraform은 Bash, Powershell, Chef, Puppet, Ansible 등을 포함한 여러 유형의 Provisioner를 지원합니다.</p>
<p><a href="https://www.terraform.io/docs/provisioners/index.html" target="_blank" rel="noopener noreferrer">https://www.terraform.io/docs/provisioners/index.html</a></p>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-z-lab_provisioners_variables_outputs.html`,title:`💻 Lab - Provisioners, Variables, Outputs`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"💻 Lab - Provisioners, Variables, Outputs","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-z-lab_provisioners_variables_outputs.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`💻 Lab - Provisioners, Variables, Outputs`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634733306e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:2,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:4.33,words:260},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/04-z-lab_provisioners_variables_outputs.md`,excerpt:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 실습을 진행한 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>🛠️ Use a Provisioner</h2>
<p>@slidestart blood</p>
<h3>Terraform 프로비저닝 도구는 생성 시 한 번 실행됩니다.</h3>
<hr>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html`,title:`05. 테라폼 상태파일(State)`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"05. 테라폼 상태파일(State)","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`05. 테라폼 상태파일(State)`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634784217e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:3,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:2.38,words:143},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.md`,excerpt:`
<h2>Terraform State</h2>
<p>Terraform은 <sub>stateful</sub> 애플리케이션입니다. 즉, state file 내부에서 빌드 한 모든 내용을 추적합니다.</p>
<p>앞서의 실습에서 반복된 <code>Apply</code> 작업 간에 Workspace 디렉토리에 나타난 <code>terraform.tfstate</code> 및 <code>terraform.tfstate.backup</code> 파일을 보셨을 것입니다.</p>
<p>상태 파일은 Terraform이 알고있는 모든 것에 대한 기록 소스입니다.</p>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html`,title:`06. Terraform Cloud`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"06. Terraform Cloud","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`06. Terraform Cloud`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634784217e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:1.9,words:114},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-terraform-cloud.md`,excerpt:`
<h2>Terraform Cloud</h2>
<p>Terraform Cloud는 Terraform을 사용하여 코드로 인프라를 작성하고 구축하기위한 최고의 워크 플로를 제공하는 <mark>무료</mark> 로 시작하는 SaaS 애플리케이션입니다.</p>
<figure><figcaption></figcaption></figure>
<ul>
<li>State 저장 및 관리</li>
<li>Terraform 실행을보고 승인하기위한 웹 UI</li>
<li>개인 모듈 레지스트리</li>
<li>VCS (Version Control System) 통합</li>
<li>CLI, API 또는 GUI 기반 작업</li>
<li>실행 이벤트 알림</li>
<li>자동화를위한 전체 HTTP API</li>
</ul>`},{path:`/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-z-lab_terraform_cloud.html`,title:`💻 Lab - Terraform Cloud 연결`,lang:`ko-KR`,frontmatter:{description:`Naver Cloud Platform에서의 Terraform 실습`,tag:[`ncloud`,`ncp`,`terraform`,`workshop`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"💻 Lab - Terraform Cloud 연결","image":[""],"dateModified":"2026-08-26T10:02:44.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-z-lab_terraform_cloud.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`💻 Lab - Terraform Cloud 연결`}],[`meta`,{property:`og:description`,content:`Naver Cloud Platform에서의 Terraform 실습`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-08-26T10:02:44.000Z`}],[`meta`,{property:`article:tag`,content:`workshop`}],[`meta`,{property:`article:tag`,content:`terraform`}],[`meta`,{property:`article:tag`,content:`ncp`}],[`meta`,{property:`article:tag`,content:`ncloud`}],[`meta`,{property:`article:modified_time`,content:`2026-08-26T10:02:44.000Z`}]]},git:{createdTime:1634784217e3,updatedTime:1787738564e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:2,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:3,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:6.62,words:397},filePathRelative:`02-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/06-z-lab_terraform_cloud.md`,excerpt:`
<h3>편집기에서 열기</h3>
<figure><figcaption></figcaption></figure>
<ul>
<li>VSCode를 실행하고 File(파일) 메뉴에서 <code>Open Folder...</code> 를 클릭합니다.</li>
<li>앞서 실습을 진행한 <code>lab02</code>을 열어줍니다.</li>
</ul>
<hr>
<h2>☁️ Terraform Configuration</h2>
<p>@slidestart blood</p>
<h3>Terraform Cloud</h3>
<h3>Remote State 저장소는 모든 사용자에게 무료입니다.</h3>`}],m=a({setup(){let e=p();return console.log(e),{pages:e}}}),h=JSON.parse(`{"path":"/02-PublicCloud/","title":"Public Cloud","lang":"ko-KR","frontmatter":{"tag":["Cloud"],"toc":{"levels":0},"description":"Public Cloud Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Public Cloud\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-08-26T10:02:44.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docmoa.github.io/02-PublicCloud/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Public Cloud"}],["meta",{"property":"og:description","content":"Public Cloud Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2026-08-26T10:02:44.000Z"}],["meta",{"property":"article:tag","content":"Cloud"}],["meta",{"property":"article:modified_time","content":"2026-08-26T10:02:44.000Z"}]]},"git":{"createdTime":1695042774000,"updatedTime":1787738564000,"contributors":[{"name":"Great-Stone","username":"Great-Stone","email":"hahohh@gmail.com","commits":3,"url":"https://github.com/Great-Stone"}]},"readingTime":{"minutes":1,"words":60},"filePathRelative":"02-PublicCloud/README.md","excerpt":"\\n<h2>Recent pages</h2>\\n<ul>\\n  <li v-for=\\"page in pages\\" :key=\\"page.key\\">\\n    <a :to=\\"page.path\\" href=\\"undefined\\" target=\\"_blank\\">{{ page.title }}</a>\\n    <span v-if=\\"page.frontmatter.date\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\\n","autoDesc":true}`),g={key:0};function _(a,f,p,m,h,_){let v=r(`RouterLink`);return i(),d(`div`,null,[f[0]||=u(`h1`,{id:`public-cloud`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#public-cloud`},[u(`span`,null,`Public Cloud`)])],-1),f[1]||=u(`h2`,{id:`recent-pages`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#recent-pages`},[u(`span`,null,`Recent pages`)])],-1),u(`ul`,null,[(i(!0),d(o,null,e(a.pages,e=>(i(),d(`li`,{key:e.key},[c(v,{to:e.path},{default:n(()=>[l(t(e.title),1)]),_:2},1032,[`to`]),e.frontmatter.date?(i(),d(`span`,g,` [ `+t(new Date(e.frontmatter.date).toLocaleString())+` ] `,1)):s(``,!0)]))),128))])])}var v=f(m,[[`render`,_]]);export{h as _pageData,v as default};