import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as p,b as c,w as a,h as r,g as e,a as t}from"./app-BWMI_1Y2.js";const u="/assets/GUI01-BXuH5Jcw.png",h="/assets/GUI02-D7PXN0N9.png",m="/assets/GUI03-DrpUzYVO.png",g="/assets/GUI04-BArdWfmu.png",v="/assets/GUI05-D_nSi561.png",f="/assets/GUI06-CRJWTx6F.png",k="/assets/infra_tools-B1A7wyiT.png",_="/assets/cloud-provisioning-tools-Bt5prm77.png",b={},N=r('<h1 id="_01-테라폼-소개" tabindex="-1"><a class="header-anchor" href="#_01-테라폼-소개"><span>01. 테라폼 소개</span></a></h1><h2 id="ncp-서버를-어떻게-프로비저닝-하죠" tabindex="-1"><a class="header-anchor" href="#ncp-서버를-어떻게-프로비저닝-하죠"><span>NCP 서버를 어떻게 프로비저닝 하죠?</span></a></h2><p>새로운 NCP의 인스턴스를 프로비저닝 할 수있는 몇 가지 다른 방법을 살펴 보겠습니다. 시작하기 전에 다음을 포함한 몇 가지 기본 정보를 수집해야합니다 (더 많은 옵션이 있습니다).</p><ul><li>서버 이름</li><li>운영 체제 (Image)</li><li>VM 크기</li><li>지리적 위치 (Region)</li><li>보안 그룹</li></ul><h2 id="서버-만들기-method-1-ncloud-console-gui" tabindex="-1"><a class="header-anchor" href="#서버-만들기-method-1-ncloud-console-gui"><span>서버 만들기 Method 1: nCloud Console (GUI)</span></a></h2>',5),C=t("figure",null,[t("img",{src:u,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),y=t("figure",null,[t("img",{src:h,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),S=t("figure",null,[t("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),q=t("figure",null,[t("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),x=t("figure",null,[t("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),T=t("figure",null,[t("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),I=r(`<hr><h2 id="서버-만들기-method-2-ncloud-cli" tabindex="-1"><a class="header-anchor" href="#서버-만들기-method-2-ncloud-cli"><span>서버 만들기 Method 2: nCloud CLI</span></a></h2><blockquote><p>서버 생성을 위한 CLI 가이드 : <a href="https://cli.ncloud-docs.com/docs/cli-server-createserverinstances" target="_blank" rel="noopener noreferrer">https://cli.ncloud-docs.com/docs/cli-server-createserverinstances</a></p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">ncloud server createServerInstances <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--serverImageProductCode</span> SPSW0LINUX000046 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--serverProductCode</span> SPSVRSTAND000003 <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token parameter variable">--serverName</span> ncloud-mktest</span>
<span class="line"></span></code></pre></div><details class="hint-container details"><summary>CLI Options</summary><table><thead><tr><th>파라미터 명</th><th>필수 여부</th><th>타입</th><th>제약사항</th></tr></thead><tbody><tr><td>serverImageProductCode</td><td>Conditional</td><td>String</td><td>Min:1, Max:20</td></tr><tr><td>serverProductCode</td><td>No</td><td>String</td><td>Min:1, Max:20</td></tr><tr><td>memberServerImageNo</td><td>Conditional</td><td>String</td><td></td></tr><tr><td>serverName</td><td>No</td><td>String</td><td>Min:3, Max:30</td></tr><tr><td>serverDescription</td><td>No</td><td>String</td><td>Min:1, Max:1000</td></tr><tr><td>loginKeyName</td><td>No</td><td>String</td><td>Min:3, Max:30</td></tr><tr><td>isProtectServerTermination</td><td>No</td><td>Boolean</td><td></td></tr><tr><td>serverCreateCount</td><td>No</td><td>Integer</td><td>Min:1, Max:20</td></tr><tr><td>serverCreateStartNo</td><td>No</td><td>Integer</td><td></td></tr><tr><td>internetLineTypeCode</td><td>No</td><td>String</td><td>Min:1, Max:5</td></tr><tr><td>feeSystemTypeCode</td><td>No</td><td>String</td><td>Min:1, Max:5</td></tr><tr><td>zoneNo</td><td>No</td><td>String</td><td></td></tr><tr><td>accessControlGroupConfigurationNoList</td><td>No</td><td>List</td><td>Min:0, Max:5</td></tr><tr><td>raidTypeName</td><td>Conditional</td><td>String</td><td></td></tr><tr><td>userData</td><td>No</td><td>String</td><td>Min:1, Max:21847</td></tr><tr><td>initScriptNo</td><td>No</td><td>String</td><td></td></tr><tr><td>instanceTagList.tagKey</td><td>No</td><td>String</td><td></td></tr><tr><td>instanceTagList.tagValue</td><td>No</td><td>String</td><td></td></tr><tr><td>isVaccineInstall</td><td>No</td><td>Boolean</td><td></td></tr><tr><td>blockDevicePartitionList.N.mountPoint</td><td>No</td><td>String</td><td>&quot;/&quot; (root) 경로로 시작하는 마운트 포인트를 입력합니다. 첫 번째 마운트 포인트는 반드시 &quot;/&quot; (root) 파티션이어야 합니다. &quot;/&quot; (root) 하위 명칭은 소문자와 숫자만 허용되며, 소문자로 시작해야합니다. OS 종류에 따라서 /root, /bin, /dev 등의 특정 키워드는 사용 불가능 할 수 있습니다.</td></tr><tr><td>blockDevicePartitionList.N.partitionSize</td><td>No</td><td>String</td><td>Min : 50 GiB</td></tr></tbody></table></details><hr><p><strong>nCloud CLI는 자동화할 수 있는 스크립트 방식을 제공합니다. 하지만 이 작업을 실행하기 전에 예측할 수 있나요?</strong></p><h2 id="서버-만들기-method-3-provision-with-terraform" tabindex="-1"><a class="header-anchor" href="#서버-만들기-method-3-provision-with-terraform"><span>서버 만들기 Method 3: Provision with Terraform</span></a></h2><blockquote><p>nCloud 서버를 생성하는 Terraform 예제 코드 : <a href="https://registry.terraform.io/providers/NaverCloudPlatform/ncloud/latest/docs/resources/server" target="_blank" rel="noopener noreferrer">https://registry.terraform.io/providers/NaverCloudPlatform/ncloud/latest/docs/resources/server</a></p></blockquote><div class="language-hcl line-numbers-mode" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line"><span class="token keyword">resource <span class="token type variable">&quot;ncloud_server&quot;</span></span> <span class="token string">&quot;server&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;tf-test-vm1&quot;</span></span>
<span class="line">  <span class="token property">server_image_product_code</span> <span class="token punctuation">=</span> <span class="token string">&quot;SPSW0LINUX000032&quot;</span></span>
<span class="line">  <span class="token property">server_product_code</span> <span class="token punctuation">=</span> <span class="token string">&quot;SPSVRSTAND000004&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">tag_list</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">tag_key</span> <span class="token punctuation">=</span> <span class="token string">&quot;samplekey1&quot;</span></span>
<span class="line">    <span class="token property">tag_value</span> <span class="token punctuation">=</span> <span class="token string">&quot;samplevalue1&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">tag_list</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">tag_key</span> <span class="token punctuation">=</span> <span class="token string">&quot;samplekey2&quot;</span></span>
<span class="line">    <span class="token property">tag_value</span> <span class="token punctuation">=</span> <span class="token string">&quot;samplevalue2&quot;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="terraform-이란" tabindex="-1"><a class="header-anchor" href="#terraform-이란"><span>Terraform 이란?</span></a></h2><div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line"><span class="token keyword">resource <span class="token type variable">&quot;ncloud_server&quot;</span></span> <span class="token string">&quot;server&quot;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;tf-test-vm1&quot;</span></span>
<span class="line">  <span class="token property">server_image_product_code</span> <span class="token punctuation">=</span> <span class="token string">&quot;SPSW0LINUX000032&quot;</span></span>
<span class="line">  <span class="token property">server_product_code</span> <span class="token punctuation">=</span> <span class="token string">&quot;SPSVRSTAND000004&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><ul><li>실행 가능한 문서</li><li>인간과 기계 모두 해독 가능</li><li>배우기 쉬움</li><li>테스트, 공유, 재사용, 자동화</li><li>모든 주요 클라우드 제공 업체에서 작동 가능</li></ul><h2 id="infrastructure-as-code-iac" tabindex="-1"><a class="header-anchor" href="#infrastructure-as-code-iac"><span>Infrastructure as Code (IaC)</span></a></h2><p>IaC (Infrastructure as Code)는 컴퓨터에서 읽을 수있는 정의 파일을 사용하여 클라우드 인프라를 관리하고 프로비저닝하는 프로세스입니다.</p><p><strong>실행 가능한 &#39;문서&#39;라고 생각하시면 됩니다.</strong></p><h2 id="infrastructure-as-code는-다음과-같은-특징이-있습니다" tabindex="-1"><a class="header-anchor" href="#infrastructure-as-code는-다음과-같은-특징이-있습니다"><span>Infrastructure as Code는 다음과 같은 특징이 있습니다.</span></a></h2><ul><li>인프라 프로비저닝을 위한 체계화된 워크 플로우 제공</li><li>기존 인프라 변경 및 업데이트</li><li>terraform plan 을 사용하여 변경 사항을 안전하게 테스트 및 확인</li><li>애플리케이션 코드 워크플로우 도구 (Git, CI/CD)와 통합</li><li>간편한 공유 및 공동 작업을 위해 재사용 가능한 모듈 제공</li><li>보안 정책(취약점 검사) 및 조직 표준 시행</li><li>서로 다른 팀 간의 협업 활성화</li></ul><h2 id="다른-운영-도구들" tabindex="-1"><a class="header-anchor" href="#다른-운영-도구들"><span>다른 운영 도구들</span></a></h2><figure><img src="`+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>이러한 도구는 OS나 애플리케이션 구성에 적합합니다.</li><li>하지만 클라우드 인프라 및 플랫폼 서비스를 프로비저닝하기 위해 특별히 제작 된 것은 아닙니다.</li></ul><h2 id="native-cloud-프로비저닝-도구들" tabindex="-1"><a class="header-anchor" href="#native-cloud-프로비저닝-도구들"><span>Native-Cloud 프로비저닝 도구들</span></a></h2><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>각 클라우드에는 자체 YAML 또는 JSON 기반 프로비저닝 도구가 있습니다.</li><li>Terraform은 모든 주요 클라우드 제공 업체 및 VM 하이퍼 바이저에서 공통으로 사용할 수 있습니다.</li></ul><h2 id="terraform-vs-json" tabindex="-1"><a class="header-anchor" href="#terraform-vs-json"><span>Terraform vs. JSON</span></a></h2><p>JSON:</p><div class="language-json" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{ &quot;</span>Fn<span class="token operator">:</span><span class="token operator">:</span>Join<span class="token string">&quot; : [ &quot;</span>-<span class="token string">&quot;, [ PilotServerName, vm ] ] }&quot;</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre></div><p>Terraform:</p><div class="language-hcl" data-highlighter="prismjs" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code><span class="line"><span class="token property">name</span> <span class="token punctuation">=</span> <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span><span class="token keyword">var</span><span class="token punctuation">.</span><span class="token type variable">PilotServerName</span><span class="token punctuation">}</span></span>-vm&quot;</span></span>
<span class="line"></span></code></pre></div><p><strong>Terraform 코드 (HCL)는 배우기 쉽고 읽기 쉽습니다. 또한 동등한 JSON 구성보다 50-70 % 더 간결합니다.</strong></p><h2 id="ncp를-위해-terraform을-쓰는-이유" tabindex="-1"><a class="header-anchor" href="#ncp를-위해-terraform을-쓰는-이유"><span>NCP를 위해 Terraform을 쓰는 이유</span></a></h2><ul><li>다중 클라우드 및 하이브리드 인프라 지원</li><li>다른 클라우드 제공 업체로부터 마이그레이션</li><li>프로비저닝 속도 향상</li><li>효율성 향상</li><li>위험 최소화</li></ul>`,32);function P(M,A){const o=l("Tabs");return d(),p("div",null,[N,c(o,{id:"39",data:[{id:"Start"},{id:"서버 이미지 선택"},{id:"서버 설정"},{id:"인증키 설정"},{id:"네트워크 접근 설정"},{id:"최종 확인"}]},{title0:a(({value:n,isActive:s})=>[e("Start")]),title1:a(({value:n,isActive:s})=>[e("서버 이미지 선택")]),title2:a(({value:n,isActive:s})=>[e("서버 설정")]),title3:a(({value:n,isActive:s})=>[e("인증키 설정")]),title4:a(({value:n,isActive:s})=>[e("네트워크 접근 설정")]),title5:a(({value:n,isActive:s})=>[e("최종 확인")]),tab0:a(({value:n,isActive:s})=>[C]),tab1:a(({value:n,isActive:s})=>[y]),tab2:a(({value:n,isActive:s})=>[S]),tab3:a(({value:n,isActive:s})=>[q]),tab4:a(({value:n,isActive:s})=>[x]),tab5:a(({value:n,isActive:s})=>[T]),_:1}),I])}const j=i(b,[["render",P],["__file","01-terraform-intro.html.vue"]]),G=JSON.parse('{"path":"/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html","title":"01. 테라폼 소개","lang":"ko-KR","frontmatter":{"description":"Naver Cloud Platform에서의 Terraform 실습","tag":["ncloud","ncp","terraform","workshop"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"01. 테라폼 소개"}],["meta",{"property":"og:description","content":"Naver Cloud Platform에서의 Terraform 실습"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:28:39.000Z"}],["meta",{"property":"article:tag","content":"ncloud"}],["meta",{"property":"article:tag","content":"ncp"}],["meta",{"property":"article:tag","content":"terraform"}],["meta",{"property":"article:tag","content":"workshop"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:28:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01. 테라폼 소개\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-25T07:28:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"NCP 서버를 어떻게 프로비저닝 하죠?","slug":"ncp-서버를-어떻게-프로비저닝-하죠","link":"#ncp-서버를-어떻게-프로비저닝-하죠","children":[]},{"level":2,"title":"서버 만들기 Method 1:  nCloud Console (GUI)","slug":"서버-만들기-method-1-ncloud-console-gui","link":"#서버-만들기-method-1-ncloud-console-gui","children":[]},{"level":2,"title":"서버 만들기 Method 2:  nCloud CLI","slug":"서버-만들기-method-2-ncloud-cli","link":"#서버-만들기-method-2-ncloud-cli","children":[]},{"level":2,"title":"서버 만들기 Method 3: Provision with Terraform","slug":"서버-만들기-method-3-provision-with-terraform","link":"#서버-만들기-method-3-provision-with-terraform","children":[]},{"level":2,"title":"Terraform 이란?","slug":"terraform-이란","link":"#terraform-이란","children":[]},{"level":2,"title":"Infrastructure as Code (IaC)","slug":"infrastructure-as-code-iac","link":"#infrastructure-as-code-iac","children":[]},{"level":2,"title":"Infrastructure as Code는 다음과 같은 특징이 있습니다.","slug":"infrastructure-as-code는-다음과-같은-특징이-있습니다","link":"#infrastructure-as-code는-다음과-같은-특징이-있습니다","children":[]},{"level":2,"title":"다른 운영 도구들","slug":"다른-운영-도구들","link":"#다른-운영-도구들","children":[]},{"level":2,"title":"Native-Cloud 프로비저닝 도구들","slug":"native-cloud-프로비저닝-도구들","link":"#native-cloud-프로비저닝-도구들","children":[]},{"level":2,"title":"Terraform vs. JSON","slug":"terraform-vs-json","link":"#terraform-vs-json","children":[]},{"level":2,"title":"NCP를 위해 Terraform을 쓰는 이유","slug":"ncp를-위해-terraform을-쓰는-이유","link":"#ncp를-위해-terraform을-쓰는-이유","children":[]}],"git":{"createdTime":1634565458000,"updatedTime":1698218919000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2}]},"readingTime":{"minutes":4.75,"words":285},"filePathRelative":"03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/01-terraform-intro.md","localizedDate":"2021년 10월 18일","excerpt":"\\n<h2>NCP 서버를 어떻게 프로비저닝 하죠?</h2>\\n<p>새로운 NCP의 인스턴스를 프로비저닝 할 수있는 몇 가지 다른 방법을 살펴 보겠습니다. 시작하기 전에 다음을 포함한 몇 가지 기본 정보를 수집해야합니다 (더 많은 옵션이 있습니다).</p>\\n<ul>\\n<li>서버 이름</li>\\n<li>운영 체제 (Image)</li>\\n<li>VM 크기</li>\\n<li>지리적 위치 (Region)</li>\\n<li>보안 그룹</li>\\n</ul>\\n<h2>서버 만들기 Method 1:  nCloud Console (GUI)</h2>\\n\\n<hr>\\n<h2>서버 만들기 Method 2:  nCloud CLI</h2>"}');export{j as comp,G as data};