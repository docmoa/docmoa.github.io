import{A as e,Ct as t,H as n,M as r,O as i,g as a,i as o,l as s,m as c,p as l,s as u,u as d}from"./runtime-core.esm-bundler-DwmdDY9i.js";import{t as f}from"./plugin-vue_export-helper-BDNMzG2s.js";var p=()=>[{path:`/05-Software/Jenkins/pipeline101/02-jobs.html`,title:`2. Jobs`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"2. Jobs","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/02-jobs.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`2. Jobs`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:9.13,words:548},filePathRelative:`05-Software/Jenkins/pipeline101/02-jobs.md`,excerpt:`
<p>프로젝트는 Job의 일부 입니다. 즉, 모든 프로젝트가 Job이지만 모든 Job이 프로젝트는 아닙니다. Job의 구조는 다음과 같습니다.</p>
<p>FreeStyleProejct, MatrixProject, ExternalJob만 <code>New job</code>에 표시됩니다.</p>
<h2>2.1 New pipeline</h2>
<p>Step 1에서는 <code>stage</code>없이 기본 Pipeline을 실행하여 수행 테스트를 합니다.</p>
<ol>
<li>
<p>Jenkins 로그인</p>
</li>
<li>
<p>좌측 <code>새로운 Item</code> 클릭</p>
</li>
<li>
<p><code>Enter an item name</code>에 Job 이름 설정 (e.g. 2.Jobs)</p>
</li>
<li>
<p><code>Pipeline</code> 선택 후 <code>OK</code> 버튼 클릭</p>
</li>
<li>
<p><code>Pipeline</code> 항목 오른 쪽 <code>Try sample Pipelie...</code>클릭하여 <code>Hello world</code> 클릭 후 저장</p>
<div class="language-groovy" data-highlighter="prismjs" data-ext="groovy"><pre><code class="language-groovy"><span class="line">node <span class="token punctuation">{</span></span>
<span class="line">   echo <span class="token string">'Hello World'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
</div></li>
<li>
<p>좌측 <code>Build now</code>클릭</p>
</li>
<li>
<p>좌측 <code>Build History</code>의 최근 빌드된 항목(e.g. #1) 우측에 마우스를 가져가면 dropdown 버튼이 생깁니다. 해당 버튼을 클릭하여 <code>Console Output</code> 클릭</p>
</li>
<li>
<p>수행된 <code>echo</code> 동작 출력을 확인합니다.</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Started by user GyuSeok.Lee</span>
<span class="line">Running in Durability level: MAX_SURVIVABILITY</span>
<span class="line">[Pipeline] Start of Pipeline</span>
<span class="line">[Pipeline] node</span>
<span class="line">Running on Jenkins in /var/lib/jenkins/workspace/2.Jobs</span>
<span class="line">[Pipeline] {</span>
<span class="line">[Pipeline] echo</span>
<span class="line">Hello World</span>
<span class="line">[Pipeline] }</span>
<span class="line">[Pipeline] // node</span>
<span class="line">[Pipeline] End of Pipeline</span>
<span class="line">Finished: SUCCESS</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`},{path:`/05-Software/Jenkins/pipeline101/03-builds.html`,title:`3. Builds`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"3. Builds","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/03-builds.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`3. Builds`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:7.98,words:479},filePathRelative:`05-Software/Jenkins/pipeline101/03-builds.md`,excerpt:`
<h2>3.1 Tracking build state</h2>
<p>Pipeline이 수행되는 동작을 추적하는 과정을 확인합니다. 이를 이를 위한 Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 03-01.TrackingBuildState)</p>
<p>Pipeline에 다음과 같이 스크립트를 추가합니다.</p>
<div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy"><pre><code class="language-groovy"><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    stages <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Deploy'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">'MINUTES'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    sh <span class="token string">'for n in \`seq 1 10\`; do echo $n; sleep 1; done'</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">                <span class="token function">timeout</span><span class="token punctuation">(</span>time<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> unit<span class="token punctuation">:</span> <span class="token string">'MINUTES'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    sh <span class="token string">'for n in \`seq 1 50\`; do echo $n; sleep 1; done'</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{path:`/05-Software/Jenkins/pipeline101/04-agent.html`,title:`4. Agents and Distributing Builds`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"4. Agents and Distributing Builds","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/04-agent.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`4. Agents and Distributing Builds`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:11.55,words:693},filePathRelative:`05-Software/Jenkins/pipeline101/04-agent.md`,excerpt:`
<p>빌드를 수행하기 위한 Worker로 다중 Jenkins를 컨트롤 할 수 있습니다. 이때 명령을 수행하는 Jenkins는 <code>Master</code>, 빌드를 수행하는 Jenkins는 <code>Worker</code>로 구분합니다. 여기서는 Worker의 연결을 원격 호스트의 Jenkins를 SSH를 통해 연결하는 방식과 컨테이너로 구성된 Jenkins를 연결하는 과정을 확인 합니다.</p>
<p>Master-Slave 방식, 또는 Master-Agent 방식으로 표현합니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>※ Slave 호스트에 Jenkins를 설치할 필요는 없습니다.</p>
</div>`},{path:`/05-Software/Jenkins/pipeline101/05-plugins.html`,title:`5. Plugins`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"5. Plugins","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/05-plugins.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`5. Plugins`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:3.25,words:195},filePathRelative:`05-Software/Jenkins/pipeline101/05-plugins.md`,excerpt:`
<p>Jenkins가 유용한 툴인 이유중 하나는 방대한 양의 플러그인 입니다. Jenkins의 기능을 확장시키고, 관리, 빌드 정책 등을 확장 시켜주고, 타 서비스와의 연계를 쉽게 가능하도록 합니다.</p>
<p><a href="https://plugins.jenkins.io/" target="_blank" rel="noopener noreferrer">Plugin Index</a></p>
<p><code>image/1564450122219.png</code> (이미지 파일 누락으로 생략)</p>
<h2>5.1 Adding plugins via plugin manager</h2>`},{path:`/05-Software/Jenkins/pipeline101/06-notifications.html`,title:`6. Notifications`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"6. Notifications","image":["http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries","http://myjenkins.com/buildStatus/icon?job=libraries"],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/06-notifications.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`6. Notifications`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:image`,content:`http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:3.05,words:183},filePathRelative:`05-Software/Jenkins/pipeline101/06-notifications.md`,excerpt:`
<p>Jenkins빌드의 결과를 받아볼 수 있는 몇가지 방안에 대해 알아봅니다.</p>
<h2>6.1 Notifications of build state</h2>
<p>Jenkins에서는 플러그인이나 외부 툴에 의해 빌드에 대한 결과를 받아 볼 수 있습니다. 대표적으로는 Jenkins의 슬랙 플러그인을 사용하여 슬랙으로 빌드에 결과를 받아보거나, <a href="http://catlight.io" target="_blank" rel="noopener noreferrer">catlight.io</a> 에서 데스크탑용 어플리케이션에 연동하는 방법도 있습니다.</p>`},{path:`/05-Software/Jenkins/pipeline101/07-testing.html`,title:`7. Testing`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"7. Testing","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/07-testing.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`7. Testing`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:3.4,words:204},filePathRelative:`05-Software/Jenkins/pipeline101/07-testing.md`,excerpt:`
<h2>7.1 Code coverage tests and reports</h2>
<p>테스트 Pipeline 구성시 테스트 과정을 지정할 수 있습니다.  Testing을 위한 <code>Pipeline</code> 타입의 Item을 추가로 생성합니다. (e.g. 07-01.CodeCoverageTestsAndReports)</p>
<p>설정은 다음과 같이 수행합니다.</p>
<ol>
<li>
<p><code>Pipeline</code> 스크립트에 다음과 같이 입력 합니다. 테스트와 빌드, 검증 후 결과를 보관하는 단계까지 이루어 집니다.</p>
<div class="language-groovy line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="groovy" style="--vp-collapsed-lines:20;"><pre><code class="language-groovy"><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    stages <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  echo This > app.sh</span>
<span class="line">                  echo That >> app.sh</span>
<span class="line">                '''</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  grep This app.sh >> \${BUILD_ID}.cov</span>
<span class="line">                  grep That app.sh >> \${BUILD_ID}.cov</span>
<span class="line">                '''</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Coverage'</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  app_lines=\`cat app.sh | wc -l\`</span>
<span class="line">                  cov_lines=\`cat \${BUILD_ID}.cov | wc -l\`</span>
<span class="line">                  echo The app has \`expr $app_lines - $cov_lines\` lines uncovered > \${BUILD_ID}.rpt</span>
<span class="line">                  cat \${BUILD_ID}.rpt</span>
<span class="line">                '''</span></span>
<span class="line">                archiveArtifacts <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.rpt"</span></span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></li>
<li>
<p>빌드가 완료되면 해당 Job화면을 리로드 합니다. Pipeline에 <code>archiveArtifacts</code>가 추가되었으므로 해당 Job에서 이를 관리합니다.<br>
</p>
</li>
<li>
<p>해당 아카이브에는 코드 검증 후의 결과가 저장 됩니다.</p>
</li>
</ol>`},{path:`/05-Software/Jenkins/pipeline101/09-security.html`,title:`9. Security`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"9. Security","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/09-security.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`9. Security`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:7.22,words:433},filePathRelative:`05-Software/Jenkins/pipeline101/09-security.md`,excerpt:`
<h2>9.1 Securing your deployment with users</h2>
<p>사용자별 배포수행을 위한 사용자 설정을 설명합니다.</p>
<ul>
<li><code>Jenkins 관리</code>로 이동하여 <code>Configure Global Security</code>를 클릭합니다.</li>
</ul>
<p><code>Enable security</code>는 보안 설정 여부를 설정하는 항목으로 기본적으로는 비활성화되어있습니다. 체크하여 활성화하면 다양한 보안 옵션을 설정할 수 있는 항목이 표기 됩니다.</p>`},{path:`/05-Software/Jenkins/pipeline101/10-artifacts.html`,title:`10. Artifacts`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"10. Artifacts","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/10-artifacts.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`10. Artifacts`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:2.82,words:169},filePathRelative:`05-Software/Jenkins/pipeline101/10-artifacts.md`,excerpt:`
<p>빌드 이후 빌드의 결과를 기록하고 저장하는 방법을 설명합니다.</p>
<h2>10.1 Creating and storing artifacts</h2>
<p>Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 10-01.CreatingAndStoringArtifacts)</p>
<p>Pipeline에 다음과 같이 스크립트를 추가합니다.</p>
<div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy"><pre><code class="language-groovy"><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    stages<span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps<span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'echo "Generating artifacts for \${BUILD_NUMBER}" > output.txt'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Archive'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                archiveArtifacts artifacts<span class="token punctuation">:</span> <span class="token string">'output.txt'</span><span class="token punctuation">,</span> onlyIfSuccessful<span class="token punctuation">:</span> <span class="token boolean">true</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{path:`/05-Software/Jenkins/pipeline101/11-pipelines.html`,title:`11. Pipelines`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"11. Pipelines","image":[""],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/11-pipelines.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`11. Pipelines`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:164032788e4,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:1,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:7.13,words:428},filePathRelative:`05-Software/Jenkins/pipeline101/11-pipelines.md`,excerpt:`
<h2>11.1 Automating deployment with pipelines</h2>
<p>Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 11-01.AutomatingDeploymentWithPipelines)</p>
<p>Pipeline에 다음과 같은 스크립트를 입력합니다.</p>
<div class="language-groovy line-numbers-mode" data-highlighter="prismjs" data-ext="groovy"><pre><code class="language-groovy"><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    stages <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'echo "Hello World"'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'echo "Test Hello World!"'</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`},{path:`/05-Software/Jenkins/pipeline101/13-jenkins_101_single.html`,title:`Pipeline on Jenkins 101 (Single Page)`,lang:`ko-KR`,frontmatter:{description:`jenkins 101`,tag:[`cicd`,`jenkins`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Pipeline on Jenkins 101 (Single Page)","image":["http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries","http://myjenkins.com/buildStatus/icon?job=libraries"],"dateModified":"2026-04-07T07:25:25.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Jenkins/pipeline101/13-jenkins_101_single.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Pipeline on Jenkins 101 (Single Page)`}],[`meta`,{property:`og:description`,content:`jenkins 101`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:image`,content:`http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2026-04-07T07:25:25.000Z`}],[`meta`,{property:`article:tag`,content:`jenkins`}],[`meta`,{property:`article:tag`,content:`cicd`}],[`meta`,{property:`article:modified_time`,content:`2026-04-07T07:25:25.000Z`}]]},git:{createdTime:1640263379e3,updatedTime:1775546725e3,contributors:[{name:`Administrator`,username:`Administrator`,email:`admin@example.com`,commits:3,url:`https://github.com/Administrator`},{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:2,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:65.38,words:3923},filePathRelative:`05-Software/Jenkins/pipeline101/13-jenkins_101_single.md`,excerpt:`
<blockquote>
<p>Update at 31 Jul, 2019</p>
</blockquote>
<h2>Introduction</h2>
<p>Jenkins Pipeline 을 구성하기 위해 VM 환경에서 Jenkins와 관련 Echo System을 구성합니다. 각 Product의 버전은 문서를 작성하는 시점에서의 최신 버전을 위주로 다운로드 및 설치되었습니다. 구성 기반 환경 및 버전은 필요에 따라 변경 가능합니다.</p>
<table>
<thead>
<tr>
<th>Category</th>
<th>Name</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>VM</td>
<td>VirtualBox</td>
<td>6.0.10</td>
</tr>
<tr>
<td>OS</td>
<td>Red Hat Enterprise Linux</td>
<td>8.0.0</td>
</tr>
<tr>
<td>JDK</td>
<td>Red Hat OpenJDK</td>
<td>1.8.222</td>
</tr>
<tr>
<td>Jenkins</td>
<td>Jenkins rpm</td>
<td>2.176.2</td>
</tr>
</tbody>
</table>`},{path:`/05-Software/Keycloak/oidc-oauth-demo.html`,title:`Keycloak OIDC/OAuth 2.0 Demo`,lang:`ko-KR`,frontmatter:{description:`Keycloak OIDC/OAuth 2.0 Demo`,tag:[`Keycloak`,`OIDC`,`OAuth`,`Demo`],toc:!0,head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Keycloak OIDC/OAuth 2.0 Demo","image":[""],"dateModified":"2025-11-27T08:01:04.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Keycloak/oidc-oauth-demo.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Keycloak OIDC/OAuth 2.0 Demo`}],[`meta`,{property:`og:description`,content:`Keycloak OIDC/OAuth 2.0 Demo`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2025-11-27T08:01:04.000Z`}],[`meta`,{property:`article:tag`,content:`Demo`}],[`meta`,{property:`article:tag`,content:`OAuth`}],[`meta`,{property:`article:tag`,content:`OIDC`}],[`meta`,{property:`article:tag`,content:`Keycloak`}],[`meta`,{property:`article:modified_time`,content:`2025-11-27T08:01:04.000Z`}]]},git:{createdTime:1764230464e3,updatedTime:1764230464e3,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:1,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:18.2,words:1092},filePathRelative:`05-Software/Keycloak/oidc-oauth-demo.md`,excerpt:`
<p>Keycloak을 사용하여 OAuth 2.0 및 OIDC를 구현하는 방법을 설명합니다.</p>
<blockquote>
<p>관련 문서: <a href="/06-etc/infomation/oidc-saml-oauth.html" target="_blank">OAuth, OIDC, SAML</a></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">실행 가능한 데모</p>
<p>실행 가능한 데모 코드는 GitHub에서 확인할 수 있습니다:</p>
<ul>
<li><strong>GitHub Repository</strong>: <a href="https://github.com/Great-Stone/keycloak-oidc-oauth-demo" target="_blank" rel="noopener noreferrer">Great-Stone/keycloak-oidc-oauth-demo</a></li>
<li><strong>Release</strong>: <a href="https://github.com/Great-Stone/keycloak-oidc-oauth-demo/releases/tag/v1.0.0" target="_blank" rel="noopener noreferrer">v1.0.0</a></li>
</ul>
<p>이 데모는 Docker Compose를 사용하여 Keycloak 서버와 Node.js Express 클라이언트 앱을 함께 실행할 수 있는 예제를 제공합니다.</p>
</div>`},{path:`/05-Software/Keycloak/saml-demo.html`,title:`Keycloak SAML Demo`,lang:`ko-KR`,frontmatter:{description:`Keycloak SAML Demo`,tag:[`Keycloak`,`SAML`,`Demo`],toc:!0,head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Keycloak SAML Demo","image":[""],"dateModified":"2025-11-27T08:01:04.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/Keycloak/saml-demo.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Keycloak SAML Demo`}],[`meta`,{property:`og:description`,content:`Keycloak SAML Demo`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2025-11-27T08:01:04.000Z`}],[`meta`,{property:`article:tag`,content:`Demo`}],[`meta`,{property:`article:tag`,content:`SAML`}],[`meta`,{property:`article:tag`,content:`Keycloak`}],[`meta`,{property:`article:modified_time`,content:`2025-11-27T08:01:04.000Z`}]]},git:{createdTime:1764230464e3,updatedTime:1764230464e3,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:1,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:15.8,words:948},filePathRelative:`05-Software/Keycloak/saml-demo.md`,excerpt:`
<p>Keycloak을 사용하여 SAML 2.0을 구현하는 방법을 설명합니다.</p>
<blockquote>
<p>관련 문서: <a href="/06-etc/infomation/oidc-saml-oauth.html" target="_blank">OAuth, OIDC, SAML</a></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">실행 가능한 데모</p>
<p>실행 가능한 데모 코드는 GitHub에서 확인할 수 있습니다:</p>
<ul>
<li><strong>GitHub Repository</strong>: <a href="https://github.com/Great-Stone/keycloak-saml-demo" target="_blank" rel="noopener noreferrer">Great-Stone/keycloak-saml-demo</a></li>
</ul>
<p>이 데모는 Docker Compose를 사용하여 Keycloak 서버와 Node.js Express SAML 클라이언트 앱을 함께 실행할 수 있는 예제를 제공합니다.</p>
</div>`},{path:`/05-Software/MongoDB/mongodb-introduction-by-cto.html`,title:`MongoDB 소개`,lang:`ko-KR`,frontmatter:{description:`MongoDB의 CTO이자 공동 창립자(2007~2010년)인 Eliot Horowitz가 MongoDB에 대한 포괄적인 소개와 함께 문서 모델이 관계형 데이터베이스와 어떻게 다른지 안내합니다.`,tag:[`MongoDB`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"MongoDB 소개","image":["https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706154229548.png","https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706154355412.png","https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706154717088.png"],"dateModified":"2024-07-06T08:39:50.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/MongoDB/mongodb-introduction-by-cto.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`MongoDB 소개`}],[`meta`,{property:`og:description`,content:`MongoDB의 CTO이자 공동 창립자(2007~2010년)인 Eliot Horowitz가 MongoDB에 대한 포괄적인 소개와 함께 문서 모델이 관계형 데이터베이스와 어떻게 다른지 안내합니다.`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:image`,content:`https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706154229548.png`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2024-07-06T08:39:50.000Z`}],[`meta`,{property:`article:tag`,content:`MongoDB`}],[`meta`,{property:`article:modified_time`,content:`2024-07-06T08:39:50.000Z`}]]},git:{createdTime:172025519e4,updatedTime:172025519e4,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:1,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:1.92,words:115},filePathRelative:`05-Software/MongoDB/mongodb-introduction-by-cto.md`,excerpt:`
<blockquote>
<p>MongoDB in 5 Minutes with Eliot Horowitz</p>
</blockquote>

<p><a href="https://www.youtube.com/watch?v=EE8ZTQxa0AM" target="_blank" rel="noopener noreferrer">https://www.youtube.com/watch?v=EE8ZTQxa0AM</a></p>
<blockquote>
<p>MongoDB의 CTO이자 공동 창립자(2007~2010년)인 Eliot Horowitz가 MongoDB에 대한 포괄적인 소개와 함께 문서 모델이 관계형 데이터베이스와 어떻게 다른지 안내합니다.</p>
</blockquote>`},{path:`/05-Software/MongoDB/nosql-explained.html`,title:`NoSQL 데이터베이스 - MongoDB`,lang:`ko-KR`,frontmatter:{description:`NoSQL이란 무엇인가요? NoSQL 데이터베이스 설명`,tag:[`MongoDB`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"NoSQL 데이터베이스 - MongoDB","image":["https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706165500563.png","https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706171054646.png"],"dateModified":"2024-07-06T08:39:50.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/MongoDB/nosql-explained.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`NoSQL 데이터베이스 - MongoDB`}],[`meta`,{property:`og:description`,content:`NoSQL이란 무엇인가요? NoSQL 데이터베이스 설명`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:image`,content:`https://raw.githubusercontent.com/Great-Stone/images/master/picgo/image-20240706165500563.png`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2024-07-06T08:39:50.000Z`}],[`meta`,{property:`article:tag`,content:`MongoDB`}],[`meta`,{property:`article:modified_time`,content:`2024-07-06T08:39:50.000Z`}]]},git:{createdTime:172025519e4,updatedTime:172025519e4,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:1,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:9.22,words:553},filePathRelative:`05-Software/MongoDB/nosql-explained.md`,excerpt:`
<blockquote>
<p>원문 : <a href="https://www.mongodb.com/resources/basics/databases/nosql-explained" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/resources/basics/databases/nosql-explained</a><br>
NoSQL 데이터베이스인 MongoDB를 통해 NoSQL의 다양한 유형과 활용에 대해 설명하는 내용입니다. 문서 지향형, 키-값, 와이드-칼럼, 그래프 등 다양한 NoSQL 데이터베이스의 특징과 역사를 다루고 있습니다. 또한 MongoDB를 활용한 NoSQL 쿼리 튜토리얼을 제공하며 Multi-record Transactions에 대한 내용도 다룹니다.</p>
</blockquote>`},{path:`/05-Software/NodeJS/package-update-tool.html`,title:`Node.js package version update tool NCU`,lang:`ko-KR`,frontmatter:{description:`Node.js의 필요 패키지의 최신 버전으로 package.json을 업데이트하는 툴`,tag:[`nodejs`],head:[[`script`,{type:`application/ld+json`},`{"@context":"https://schema.org","@type":"Article","headline":"Node.js package version update tool NCU","image":[""],"dateModified":"2024-06-27T02:09:20.000Z","author":[]}`],[`meta`,{property:`og:url`,content:`https://docmoa.github.io/05-Software/NodeJS/package-update-tool.html`}],[`meta`,{property:`og:site_name`,content:`docmoa`}],[`meta`,{property:`og:title`,content:`Node.js package version update tool NCU`}],[`meta`,{property:`og:description`,content:`Node.js의 필요 패키지의 최신 버전으로 package.json을 업데이트하는 툴`}],[`meta`,{property:`og:type`,content:`article`}],[`meta`,{property:`og:locale`,content:`ko-KR`}],[`meta`,{property:`og:updated_time`,content:`2024-06-27T02:09:20.000Z`}],[`meta`,{property:`article:tag`,content:`nodejs`}],[`meta`,{property:`article:modified_time`,content:`2024-06-27T02:09:20.000Z`}]]},git:{createdTime:171945416e4,updatedTime:171945416e4,contributors:[{name:`Great-Stone`,username:`Great-Stone`,email:`hahohh@gmail.com`,commits:1,url:`https://github.com/Great-Stone`}]},readingTime:{minutes:4.77,words:286},filePathRelative:`05-Software/NodeJS/package-update-tool.md`,excerpt:`
<blockquote>
<p>npm-check-updates - <a href="https://www.npmjs.com/package/npm-check-updates" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/npm-check-updates</a></p>
</blockquote>
<h2>1. 배경</h2>
<p><code>npm install</code>을 사용하여 패키지 설치를 하는 경우 <code>package.json</code>에는 보통 패치버전을 허용하는 형태로 저장된다.</p>`}],m=a({setup(){let e=p();return console.log(e),{pages:e}}}),h=JSON.parse(`{"path":"/05-Software/","title":"Software","lang":"ko-KR","frontmatter":{"tag":["Software"],"toc":{"levels":0},"description":"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Software\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-07-11T02:10:00.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docmoa.github.io/05-Software/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Software"}],["meta",{"property":"og:description","content":"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2025-07-11T02:10:00.000Z"}],["meta",{"property":"article:tag","content":"Software"}],["meta",{"property":"article:modified_time","content":"2025-07-11T02:10:00.000Z"}]]},"git":{"createdTime":1640327880000,"updatedTime":1752199800000,"contributors":[{"name":"Administrator","username":"Administrator","email":"admin@example.com","commits":4,"url":"https://github.com/Administrator"},{"name":"Great-Stone","username":"Great-Stone","email":"hahohh@gmail.com","commits":2,"url":"https://github.com/Great-Stone"}]},"readingTime":{"minutes":1.05,"words":63},"filePathRelative":"05-Software/README.md","excerpt":"\\n<h2>Recent pages</h2>\\n<ul>\\n  <li v-for=\\"page in pages\\" :key=\\"page.key\\">\\n    <a :to=\\"page.path\\" href=\\"undefined\\" target=\\"_blank\\">{{ page.title }}</a>\\n    <span v-if=\\"page.frontmatter.date\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\\n<h2>Jenkins</h2>\\n","autoDesc":true}`),g={key:0};function _(a,f,p,m,h,_){let v=r(`RouterLink`);return i(),d(`div`,null,[f[0]||=u(`h1`,{id:`software`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#software`},[u(`span`,null,`Software`)])],-1),f[1]||=u(`h2`,{id:`recent-pages`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#recent-pages`},[u(`span`,null,`Recent pages`)])],-1),u(`ul`,null,[(i(!0),d(o,null,e(a.pages,e=>(i(),d(`li`,{key:e.key},[c(v,{to:e.path},{default:n(()=>[l(t(e.title),1)]),_:2},1032,[`to`]),e.frontmatter.date?(i(),d(`span`,g,` [ `+t(new Date(e.frontmatter.date).toLocaleString())+` ] `,1)):s(``,!0)]))),128))]),f[2]||=u(`h2`,{id:`jenkins`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#jenkins`},[u(`span`,null,`Jenkins`)])],-1),f[3]||=u(`ul`,null,[u(`li`,null,`젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다.`)],-1),f[4]||=u(`h2`,{id:`tomcat`,tabindex:`-1`},[u(`a`,{class:`header-anchor`,href:`#tomcat`},[u(`span`,null,`Tomcat`)])],-1),f[5]||=u(`ul`,null,[u(`li`,null,`아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹 애플리케이션 서버이다.`)],-1)])}var v=f(m,[[`render`,_]]);export{h as _pageData,v as default};