import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{d as l,r,o as a,c as o,a as e,F as c,e as d,b as m,w as g,f as u,t as s,h}from"./app-B_LCFs7C.js";const k=()=>[{path:"/05-Software/NodeJS/package-update-tool.html",title:"Node.js package version update tool NCU",lang:"ko-KR",frontmatter:{description:"Node.js의 필요 패키지의 최신 버전으로 package.json을 업데이트하는 툴",tag:["nodejs"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/NodeJS/package-update-tool.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Node.js package version update tool NCU"}],["meta",{property:"og:description",content:"Node.js의 필요 패키지의 최신 버전으로 package.json을 업데이트하는 툴"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-06-27T02:09:20.000Z"}],["meta",{property:"article:tag",content:"nodejs"}],["meta",{property:"article:modified_time",content:"2024-06-27T02:09:20.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Node.js package version update tool NCU","image":[""],"dateModified":"2024-06-27T02:09:20.000Z","author":[]}']]},headers:[{level:2,title:"1. 배경",slug:"_1-배경",link:"#_1-배경",children:[]},{level:2,title:"2. npm-check-updates",slug:"_2-npm-check-updates",link:"#_2-npm-check-updates",children:[]},{level:2,title:"3. 선택적 업데이트",slug:"_3-선택적-업데이트",link:"#_3-선택적-업데이트",children:[]}],git:{createdTime:171945416e4,updatedTime:171945416e4,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:4.77,words:286},filePathRelative:"05-Software/NodeJS/package-update-tool.md",localizedDate:"2024년 6월 27일",excerpt:`
<blockquote>
<p>npm-check-updates - <a href="https://www.npmjs.com/package/npm-check-updates" target="_blank" rel="noopener noreferrer">https://www.npmjs.com/package/npm-check-updates</a></p>
</blockquote>
<h2>1. 배경</h2>
<p><code>npm install</code>을 사용하여 패키지 설치를 하는 경우 <code>package.json</code>에는 보통 패치버전을 허용하는 형태로 저장된다.</p>`},{path:"/05-Software/NodeJS/required-node-version.html",title:"Required Node.js engine version",lang:"ko-KR",frontmatter:{description:"Node.js의 버전 요구사항을 package.js에 추가하기",tag:["nodejs"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/NodeJS/required-node-version.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Required Node.js engine version"}],["meta",{property:"og:description",content:"Node.js의 버전 요구사항을 package.js에 추가하기"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2024-06-27T02:09:20.000Z"}],["meta",{property:"article:tag",content:"nodejs"}],["meta",{property:"article:modified_time",content:"2024-06-27T02:09:20.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Required Node.js engine version","image":[""],"dateModified":"2024-06-27T02:09:20.000Z","author":[]}']]},headers:[{level:2,title:"1. 배경",slug:"_1-배경",link:"#_1-배경",children:[]},{level:2,title:"2. 필요 버전 명시하기",slug:"_2-필요-버전-명시하기",link:"#_2-필요-버전-명시하기",children:[]}],git:{createdTime:171945416e4,updatedTime:171945416e4,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:3.88,words:233},filePathRelative:"05-Software/NodeJS/required-node-version.md",localizedDate:"2024년 6월 27일",excerpt:`
<p><code>Docmoa</code>에서 사용하는 패키지를 업데이트 하던 중 다음과 같은 오류가 발생하였다.</p>
<h2>1. 배경</h2>
<div class="language-log" data-highlighter="prismjs" data-ext="log" data-title="log"><pre class="language-log"><code><span class="line"><span class="token operator">$</span> npm run dev</span>
<span class="line"></span>
<span class="line"><span class="token url">file:///Users/gs/workspaces/docs/docmoa/node_modules/execa/lib/utils/max-listeners.js:1</span></span>
<span class="line">import <span class="token operator">{</span>addAbortListener<span class="token operator">}</span> from <span class="token string">'node:events'</span><span class="token operator">;</span></span>
<span class="line">        <span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span><span class="token operator">^</span></span>
<span class="line"><span class="token property">SyntaxError:</span> The requested module <span class="token string">'node:events'</span> does not provide an export named <span class="token string">'addAbortListener'</span></span>
<span class="line">    at ModuleJob<span class="token punctuation">.</span>_instantiate <span class="token operator">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>esm<span class="token operator">/</span>module_job<span class="token operator">:</span><span class="token number">123</span><span class="token operator">:</span><span class="token number">21</span><span class="token operator">)</span></span>
<span class="line">    at async ModuleJob<span class="token punctuation">.</span>run <span class="token operator">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>esm<span class="token operator">/</span>module_job<span class="token operator">:</span><span class="token number">189</span><span class="token operator">:</span><span class="token number">5</span><span class="token operator">)</span></span>
<span class="line">    at async Promise<span class="token punctuation">.</span>all <span class="token operator">(</span>index <span class="token number">0</span><span class="token operator">)</span></span>
<span class="line">    at async ESMLoader<span class="token punctuation">.</span>import <span class="token operator">(</span>node<span class="token operator">:</span>internal<span class="token operator">/</span>modules<span class="token operator">/</span>esm<span class="token operator">/</span>loader<span class="token operator">:</span><span class="token number">530</span><span class="token operator">:</span><span class="token number">24</span><span class="token operator">)</span></span>
<span class="line">    at async loadUserConfig <span class="token operator">(</span><span class="token url">file:///Users/gs/workspaces/docs/docmoa/node_modules/@vuepress/cli/dist/index.js:77:18)</span></span>
<span class="line">    at async CAC<span class="token punctuation">.</span>dev <span class="token operator">(</span><span class="token url">file:///Users/gs/workspaces/docs/docmoa/node_modules/@vuepress/cli/dist/index.js:443:52)</span></span>
<span class="line"></span></code></pre></div>`},{path:"/05-Software/Tomcat/tomcat101/03-installation.html",title:"3. Tomcat 설치",lang:"ko-KR",frontmatter:{description:"Tomcat",tag:["Tomcat","Java"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Tomcat/tomcat101/03-installation.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"3. Tomcat 설치"}],["meta",{property:"og:description",content:"Tomcat"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://github.com/Great-Stone/great-stone.github.io/blob/master/assets/img/Tomcat_youtube/JavaHomeOnWindows.png?raw=true"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-10-25T07:28:39.000Z"}],["meta",{property:"article:tag",content:"Tomcat"}],["meta",{property:"article:tag",content:"Java"}],["meta",{property:"article:modified_time",content:"2023-10-25T07:28:39.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"3. Tomcat 설치","image":["https://github.com/Great-Stone/great-stone.github.io/blob/master/assets/img/Tomcat_youtube/JavaHomeOnWindows.png?raw=true"],"dateModified":"2023-10-25T07:28:39.000Z","author":[]}']]},headers:[{level:2,title:"3.1 설치파일 받기",slug:"_3-1-설치파일-받기",link:"#_3-1-설치파일-받기",children:[]},{level:2,title:"3.2 윈도우에 설치하기",slug:"_3-2-윈도우에-설치하기",link:"#_3-2-윈도우에-설치하기",children:[]},{level:2,title:"3.3 유닉스/리눅스/맥 에 설치하기",slug:"_3-3-유닉스-리눅스-맥-에-설치하기",link:"#_3-3-유닉스-리눅스-맥-에-설치하기",children:[]},{level:2,title:"3.4 설치 후 작업",slug:"_3-4-설치-후-작업",link:"#_3-4-설치-후-작업",children:[{level:3,title:"3.4.1 Java Home 설정하기",slug:"_3-4-1-java-home-설정하기",link:"#_3-4-1-java-home-설정하기",children:[]}]}],git:{createdTime:1640259507e3,updatedTime:1698218919e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:2},{name:"Administrator",email:"admin@example.com",commits:1}]},readingTime:{minutes:6.9,words:414},filePathRelative:"05-Software/Tomcat/tomcat101/03-installation.md",localizedDate:"2021년 12월 23일",excerpt:`
<ul>
<li>설치파일 받기</li>
<li>윈도우에 설치하기</li>
<li>유닉스/리눅스에 설치하기</li>
<li>설치 후 작업</li>
<li>디렉토리 구조</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/621YGq7ulS4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`},{path:"/05-Software/Tomcat/tomcat101/04-configuration.html",title:"4. Tomcat 환경설정",lang:"ko-KR",frontmatter:{description:"Tomcat",tag:["Tomcat","Java"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Tomcat/tomcat101/04-configuration.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"4. Tomcat 환경설정"}],["meta",{property:"og:description",content:"Tomcat"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/tomcatService-20200628205826895.jpg?token=ADUAZXKZXYIDH75QYMNK75267EUOU"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-10-25T07:28:39.000Z"}],["meta",{property:"article:tag",content:"Tomcat"}],["meta",{property:"article:tag",content:"Java"}],["meta",{property:"article:modified_time",content:"2023-10-25T07:28:39.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"4. Tomcat 환경설정","image":["https://raw.githubusercontent.com/Great-Stone/images/master/uPic/tomcatService-20200628205826895.jpg?token=ADUAZXKZXYIDH75QYMNK75267EUOU"],"dateModified":"2023-10-25T07:28:39.000Z","author":[]}']]},headers:[{level:2,title:"4.1 리스너",slug:"_4-1-리스너",link:"#_4-1-리스너",children:[]},{level:2,title:"4.2 Java Options",slug:"_4-2-java-options",link:"#_4-2-java-options",children:[{level:3,title:"4.3 ClassLoader",slug:"_4-3-classloader",link:"#_4-3-classloader",children:[]},{level:3,title:"4.4 setenv",slug:"_4-4-setenv",link:"#_4-4-setenv",children:[]},{level:3,title:"4.5 web.xml",slug:"_4-5-web-xml",link:"#_4-5-web-xml",children:[]},{level:3,title:"4.6 Log",slug:"_4-6-log",link:"#_4-6-log",children:[]}]}],git:{createdTime:1640259507e3,updatedTime:1698218919e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:2},{name:"Great-Stone",email:"hahohh@gmail.com",commits:2}]},readingTime:{minutes:9.2,words:552},filePathRelative:"05-Software/Tomcat/tomcat101/04-configuration.md",localizedDate:"2021년 12월 23일",excerpt:`
<ul>
<li>리스너</li>
<li>자바옵션</li>
<li>클래스로더</li>
<li>setenv?</li>
<li>web.xml</li>
<li>로그</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/DFBJ7r1u0Jo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`},{path:"/05-Software/Tomcat/tomcat101/05-deployment.html",title:"5. Tomcat 애플리케이션 배포",lang:"ko-KR",frontmatter:{description:"Tomcat",tag:["Tomcat","Java"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Tomcat/tomcat101/05-deployment.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"5. Tomcat 애플리케이션 배포"}],["meta",{property:"og:description",content:"Tomcat"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/appVersion.jpg?token=ADUAZXOCLTBA3NROCYL7SF267EUQK"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-19T11:31:31.000Z"}],["meta",{property:"article:tag",content:"Tomcat"}],["meta",{property:"article:tag",content:"Java"}],["meta",{property:"article:modified_time",content:"2023-09-19T11:31:31.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"5. Tomcat 애플리케이션 배포","image":["https://raw.githubusercontent.com/Great-Stone/images/master/uPic/appVersion.jpg?token=ADUAZXOCLTBA3NROCYL7SF267EUQK"],"dateModified":"2023-09-19T11:31:31.000Z","author":[]}']]},headers:[{level:2,title:"5.1 Web Application",slug:"_5-1-web-application",link:"#_5-1-web-application",children:[]},{level:2,title:"5.2 by Manager",slug:"_5-2-by-manager",link:"#_5-2-by-manager",children:[]},{level:2,title:"5.3 by webapps DIR",slug:"_5-3-by-webapps-dir",link:"#_5-3-by-webapps-dir",children:[]},{level:2,title:"5.4 by context.xml",slug:"_5-4-by-context-xml",link:"#_5-4-by-context-xml",children:[]},{level:2,title:"5.5 ROOT",slug:"_5-5-root",link:"#_5-5-root",children:[]},{level:2,title:"5.6 Auto Deployment & Hot Deployment",slug:"_5-6-auto-deployment-hot-deployment",link:"#_5-6-auto-deployment-hot-deployment",children:[{level:3,title:"5.6.1 webapps 'autoDeploy'",slug:"_5-6-1-webapps-autodeploy",link:"#_5-6-1-webapps-autodeploy",children:[]},{level:3,title:"5.6.2 jsp 'checkInterval'",slug:"_5-6-2-jsp-checkinterval",link:"#_5-6-2-jsp-checkinterval",children:[]},{level:3,title:"5.6.3 Class 'reloadable'",slug:"_5-6-3-class-reloadable",link:"#_5-6-3-class-reloadable",children:[]}]},{level:2,title:"5.7 Parallel Deployment",slug:"_5-7-parallel-deployment",link:"#_5-7-parallel-deployment",children:[]}],git:{createdTime:1640259507e3,updatedTime:1695123091e3,contributors:[{name:"Great-Stone",email:"hahohh@gmail.com",commits:2},{name:"Administrator",email:"admin@example.com",commits:1}]},readingTime:{minutes:11.77,words:706},filePathRelative:"05-Software/Tomcat/tomcat101/05-deployment.md",localizedDate:"2021년 12월 23일",excerpt:`
<ul>
<li>Web Application</li>
<li>by Manager</li>
<li>by webapps DIR</li>
<li>by context.xml</li>
<li>ROOT</li>
<li>Auto Deployment &amp; Hot Deployment</li>
<li>Parallel Deployment</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/Hg-D7szI2t4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`},{path:"/05-Software/",title:"Software",lang:"ko-KR",frontmatter:{tag:["Software"],headerDepth:0,description:"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹...",head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Software"}],["meta",{property:"og:description",content:"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹..."}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"Software"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Software","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"Recent pages",slug:"recent-pages",link:"#recent-pages",children:[]},{level:2,title:"Jenkins",slug:"jenkins",link:"#jenkins",children:[]},{level:2,title:"Tomcat",slug:"tomcat",link:"#tomcat",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:4},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:1.03,words:62},filePathRelative:"05-Software/README.md",localizedDate:"2021년 12월 24일",excerpt:`
<h2>Recent pages</h2>
<ul>
  <li v-for="page in pages" :key="page.key">
    <a :to="page.path" href="undefined" target="_blank">{{ page.title }}</a>
    <span v-if="page.frontmatter.date">
      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]
    </span>
  </li>
</ul>
<h2>Jenkins</h2>
`,autoDesc:!0},{path:"/05-Software/Jenkins/pipeline101/00-introduction.html",title:"Pipeline on Jenkins 101 : Introduction",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/00-introduction.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"Pipeline on Jenkins 101 : Introduction"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"Pipeline on Jenkins 101 : Introduction","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"Jenkins 실행 및 구성",slug:"jenkins-실행-및-구성",link:"#jenkins-실행-및-구성",children:[]},{level:2,title:"GitHub 계정생성",slug:"github-계정생성",link:"#github-계정생성",children:[]},{level:2,title:"Jenkins Theme (Optional)",slug:"jenkins-theme-optional",link:"#jenkins-theme-optional",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:4.78,words:287},filePathRelative:"05-Software/Jenkins/pipeline101/00-introduction.md",localizedDate:"2021년 12월 24일",excerpt:`
<blockquote>
<p>Update at 31 Jul, 2019</p>
</blockquote>
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
</table>`},{path:"/05-Software/Jenkins/pipeline101/01-cicd.html",title:"1. CI/CD",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/01-cicd.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"1. CI/CD"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"1. CI/CD","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"1.1 CI/CD Concept Definitions",slug:"_1-1-ci-cd-concept-definitions",link:"#_1-1-ci-cd-concept-definitions",children:[]},{level:2,title:"1.2 Delivery vs Deployment",slug:"_1-2-delivery-vs-deployment",link:"#_1-2-delivery-vs-deployment",children:[]},{level:2,title:"1.3 Jenkins for CI/CD",slug:"_1-3-jenkins-for-ci-cd",link:"#_1-3-jenkins-for-ci-cd",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:1.17,words:70},filePathRelative:"05-Software/Jenkins/pipeline101/01-cicd.md",localizedDate:"2021년 12월 24일",excerpt:`
<h2>1.1 CI/CD Concept Definitions</h2>
<ul>
<li>Continuous integration</li>
<li>Continuous delivery</li>
<li>Continuous deployment</li>
<li>Source control management (SCM)</li>
</ul>
<h2>1.2 Delivery vs Deployment</h2>
<ul>
<li>Continuous Delivery requires user intervention
<ul>
<li>When? : Stage to Production</li>
</ul>
</li>
</ul>`},{path:"/05-Software/Jenkins/pipeline101/02-jobs.html",title:"2. Jobs",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/02-jobs.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"2. Jobs"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"2. Jobs","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"2.1 New pipeline",slug:"_2-1-new-pipeline",link:"#_2-1-new-pipeline",children:[]},{level:2,title:"2.2 New pipeline",slug:"_2-2-new-pipeline",link:"#_2-2-new-pipeline",children:[]},{level:2,title:"2.3 Parameterizing a job",slug:"_2-3-parameterizing-a-job",link:"#_2-3-parameterizing-a-job",children:[]},{level:2,title:"2.4 Creating multiple steps for a job",slug:"_2-4-creating-multiple-steps-for-a-job",link:"#_2-4-creating-multiple-steps-for-a-job",children:[]},{level:2,title:"2.5 Adding scripts as a job step",slug:"_2-5-adding-scripts-as-a-job-step",link:"#_2-5-adding-scripts-as-a-job-step",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:9.13,words:548},filePathRelative:"05-Software/Jenkins/pipeline101/02-jobs.md",localizedDate:"2021년 12월 24일",excerpt:`
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
<div class="language-groovy" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="line">node <span class="token punctuation">{</span></span>
<span class="line">   echo <span class="token string">'Hello World'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div></li>
<li>
<p>좌측 <code>Build now</code>클릭</p>
</li>
<li>
<p>좌측 <code>Build History</code>의 최근 빌드된 항목(e.g. #1) 우측에 마우스를 가져가면 dropdown 버튼이 생깁니다. 해당 버튼을 클릭하여 <code>Console Output</code> 클릭</p>
</li>
<li>
<p>수행된 <code>echo</code> 동작 출력을 확인합니다.</p>
<div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">Started by user GyuSeok.Lee</span>
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
<span class="line"></span></code></pre></div></li>
</ol>`},{path:"/05-Software/Jenkins/pipeline101/03-builds.html",title:"3. Builds",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/03-builds.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"3. Builds"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"3. Builds","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"3.1 Tracking build state",slug:"_3-1-tracking-build-state",link:"#_3-1-tracking-build-state",children:[]},{level:2,title:"3.2 Polling SCM for build triggering",slug:"_3-2-polling-scm-for-build-triggering",link:"#_3-2-polling-scm-for-build-triggering",children:[]},{level:2,title:"3.3 Connecting Jenkins to GitHub",slug:"_3-3-connecting-jenkins-to-github",link:"#_3-3-connecting-jenkins-to-github",children:[]},{level:2,title:"3.4 Webhook build triggering",slug:"_3-4-webhook-build-triggering",link:"#_3-4-webhook-build-triggering",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:8.12,words:487},filePathRelative:"05-Software/Jenkins/pipeline101/03-builds.md",localizedDate:"2021년 12월 24일",excerpt:`
<h2>3.1 Tracking build state</h2>
<p>Pipeline이 수행되는 동작을 추적하는 과정을 확인합니다. 이를 이를 위한 Pipeline 타입의 Item을 추가로 생성합니다. (e.g. 03-01.TrackingBuildState)</p>
<p>Pipeline에 다음과 같이 스크립트를 추가합니다.</p>
<div class="language-groovy" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="line">pipeline <span class="token punctuation">{</span></span>
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
<span class="line"></span></code></pre></div>`},{path:"/05-Software/Jenkins/pipeline101/04-agent.html",title:"4. Agents and Distributing Builds",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/04-agent.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"4. Agents and Distributing Builds"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"4. Agents and Distributing Builds","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"4.1 Adding an SSH build agent to Jenkins",slug:"_4-1-adding-an-ssh-build-agent-to-jenkins",link:"#_4-1-adding-an-ssh-build-agent-to-jenkins",children:[]},{level:2,title:"4.2 Using Docker images for agents",slug:"_4-2-using-docker-images-for-agents",link:"#_4-2-using-docker-images-for-agents",children:[]},{level:2,title:"4.3 Configuring specific agents",slug:"_4-3-configuring-specific-agents",link:"#_4-3-configuring-specific-agents",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:11.55,words:693},filePathRelative:"05-Software/Jenkins/pipeline101/04-agent.md",localizedDate:"2021년 12월 24일",excerpt:`
<p>빌드를 수행하기 위한 Worker로 다중 Jenkins를 컨트롤 할 수 있습니다. 이때 명령을 수행하는 Jenkins는 <code>Master</code>, 빌드를 수행하는 Jenkins는 <code>Worker</code>로 구분합니다. 여기서는 Worker의 연결을 원격 호스트의 Jenkins를 SSH를 통해 연결하는 방식과 컨테이너로 구성된 Jenkins를 연결하는 과정을 확인 합니다.</p>
<p>Master-Slave 방식, 또는 Master-Agent 방식으로 표현합니다.</p>
<div class="hint-container tip">
<p class="hint-container-title">팁</p>
<p>※ Slave 호스트에 Jenkins를 설치할 필요는 없습니다.</p>
</div>`},{path:"/05-Software/Jenkins/pipeline101/05-plugins.html",title:"5. Plugins",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/05-plugins.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"5. Plugins"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"5. Plugins","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"5.1 Adding plugins via plugin manager",slug:"_5-1-adding-plugins-via-plugin-manager",link:"#_5-1-adding-plugins-via-plugin-manager",children:[]},{level:2,title:"5.2 Using shared libraries",slug:"_5-2-using-shared-libraries",link:"#_5-2-using-shared-libraries",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:3.27,words:196},filePathRelative:"05-Software/Jenkins/pipeline101/05-plugins.md",localizedDate:"2021년 12월 24일",excerpt:`
<p>Jenkins가 유용한 툴인 이유중 하나는 방대한 양의 플러그인 입니다. Jenkins의 기능을 확장시키고, 관리, 빌드 정책 등을 확장 시켜주고, 타 서비스와의 연계를 쉽게 가능하도록 합니다.</p>
<p><a href="https://plugins.jenkins.io/" target="_blank" rel="noopener noreferrer">Plugin Index</a></p>
<figure><figcaption>1564450122219</figcaption></figure>
<h2>5.1 Adding plugins via plugin manager</h2>`},{path:"/05-Software/Jenkins/pipeline101/06-notifications.html",title:"6. Notifications",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/06-notifications.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"6. Notifications"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:image",content:"http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"6. Notifications","image":["http://myjenkins.com/buildStatus/icon?job=05-02.UsingSharedLibraries","http://myjenkins.com/buildStatus/icon?job=libraries"],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"6.1 Notifications of build state",slug:"_6-1-notifications-of-build-state",link:"#_6-1-notifications-of-build-state",children:[]},{level:2,title:"6.2 Build state badges for SCM",slug:"_6-2-build-state-badges-for-scm",link:"#_6-2-build-state-badges-for-scm",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:3.12,words:187},filePathRelative:"05-Software/Jenkins/pipeline101/06-notifications.md",localizedDate:"2021년 12월 24일",excerpt:`
<p>Jenkins빌드의 결과를 받아볼 수 있는 몇가지 방안에 대해 알아봅니다.</p>
<h2>6.1 Notifications of build state</h2>
<p>Jenkins에서는 플러그인이나 외부 툴에 의해 빌드에 대한 결과를 받아 볼 수 있습니다. 대표적으로는 Jenkins의 슬랙 플러그인을 사용하여 슬랙으로 빌드에 결과를 받아보거나, <a href="http://catlight.io" target="_blank" rel="noopener noreferrer">catlight.io</a> 에서 데스크탑용 어플리케이션에 연동하는 방법도 있습니다.</p>`},{path:"/05-Software/Jenkins/pipeline101/07-testing.html",title:"7. Testing",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/07-testing.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"7. Testing"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"7. Testing","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"7.1 Code coverage tests and reports",slug:"_7-1-code-coverage-tests-and-reports",link:"#_7-1-code-coverage-tests-and-reports",children:[]},{level:2,title:"7.2 Using test results to stop the build",slug:"_7-2-using-test-results-to-stop-the-build",link:"#_7-2-using-test-results-to-stop-the-build",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:3.4,words:204},filePathRelative:"05-Software/Jenkins/pipeline101/07-testing.md",localizedDate:"2021년 12월 24일",excerpt:`
<h2>7.1 Code coverage tests and reports</h2>
<p>테스트 Pipeline 구성시 테스트 과정을 지정할 수 있습니다.  Testing을 위한 <code>Pipeline</code> 타입의 Item을 추가로 생성합니다. (e.g. 07-01.CodeCoverageTestsAndReports)</p>
<p>설정은 다음과 같이 수행합니다.</p>
<ol>
<li>
<p><code>Pipeline</code> 스크립트에 다음과 같이 입력 합니다. 테스트와 빌드, 검증 후 결과를 보관하는 단계까지 이루어 집니다.</p>
<div class="language-groovy" data-highlighter="prismjs" data-ext="groovy" data-title="groovy"><pre class="language-groovy"><code><span class="line">pipeline <span class="token punctuation">{</span></span>
<span class="line">    agent any</span>
<span class="line">    stages <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Build'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  echo This &gt; app.sh</span>
<span class="line">                  echo That &gt;&gt; app.sh</span>
<span class="line">                '''</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Test'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  grep This app.sh &gt;&gt; \${BUILD_ID}.cov</span>
<span class="line">                  grep That app.sh &gt;&gt; \${BUILD_ID}.cov</span>
<span class="line">                '''</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token function">stage</span><span class="token punctuation">(</span><span class="token string">'Coverage'</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            steps <span class="token punctuation">{</span></span>
<span class="line">                sh <span class="token string">'''</span>
<span class="line">                  app_lines=\`cat app.sh | wc -l\`</span>
<span class="line">                  cov_lines=\`cat \${BUILD_ID}.cov | wc -l\`</span>
<span class="line">                  echo The app has \`expr $app_lines - $cov_lines\` lines uncovered &gt; \${BUILD_ID}.rpt</span>
<span class="line">                  cat \${BUILD_ID}.rpt</span>
<span class="line">                '''</span></span>
<span class="line">                archiveArtifacts <span class="token interpolation-string"><span class="token string">"</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">env<span class="token punctuation">.</span>BUILD_ID</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.rpt"</span></span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div></li>
<li>
<p>빌드가 완료되면 해당 Job화면을 리로드 합니다. Pipeline에 <code>archiveArtifacts</code>가 추가되었으므로 해당 Job에서 이를 관리합니다.<br>
</p>
</li>
<li>
<p>해당 아카이브에는 코드 검증 후의 결과가 저장 됩니다.</p>
</li>
</ol>`},{path:"/05-Software/Jenkins/pipeline101/08-restapi.html",title:"8. REST API",lang:"ko-KR",frontmatter:{description:"jenkins 101",tag:["cicd","jenkins"],head:[["meta",{property:"og:url",content:"https://docmoa.github.io/05-Software/Jenkins/pipeline101/08-restapi.html"}],["meta",{property:"og:site_name",content:"docmoa"}],["meta",{property:"og:title",content:"8. REST API"}],["meta",{property:"og:description",content:"jenkins 101"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"ko-KR"}],["meta",{property:"og:updated_time",content:"2023-09-18T13:12:54.000Z"}],["meta",{property:"article:tag",content:"cicd"}],["meta",{property:"article:tag",content:"jenkins"}],["meta",{property:"article:modified_time",content:"2023-09-18T13:12:54.000Z"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"Article","headline":"8. REST API","image":[""],"dateModified":"2023-09-18T13:12:54.000Z","author":[]}']]},headers:[{level:2,title:"8.1 Triggering builds via the REST API",slug:"_8-1-triggering-builds-via-the-rest-api",link:"#_8-1-triggering-builds-via-the-rest-api",children:[]},{level:2,title:"8.2 Retriving build status via the REST API",slug:"_8-2-retriving-build-status-via-the-rest-api",link:"#_8-2-retriving-build-status-via-the-rest-api",children:[]}],git:{createdTime:164032788e4,updatedTime:1695042774e3,contributors:[{name:"Administrator",email:"admin@example.com",commits:1},{name:"Great-Stone",email:"hahohh@gmail.com",commits:1}]},readingTime:{minutes:2.77,words:166},filePathRelative:"05-Software/Jenkins/pipeline101/08-restapi.md",localizedDate:"2021년 12월 24일",excerpt:`
<p>Jenkins는 외부 서비스와의 연동이나 정보 조회를 위한 API를 제공합니다.</p>
<h2>8.1 Triggering builds via the REST API</h2>
<p>Jenkins REST API 테스트를 위해서는 Jenkins에 인증 가능한 Token을 취득하고 curl이나 Postman 같은 도구를 사용하여 확인 가능 합니다. 우선 Token을 얻는 방법은 다음과 같습니다.</p>
<ol>
<li>
<p>Jenkins에 로그인 합니다.</p>
</li>
<li>
<p>우측 상단의 로그인 아이디에 마우스를 호버하면 드롭박스 버튼이 나타납니다. <code>설정</code>을 클릭합니다.</p>
</li>
<li>
<p><code>API Token</code>에서 <code>Current token</code>을 확인합니다. 등록된 Token이 없는 경우 다음과 같이 신규 Token을 발급 받습니다.</p>
<ul>
<li>
<p><code>ADD NEW TOKEN</code>을 클릭합니다.</p>
</li>
<li>
<p>이름을 기입하는 칸에 로그인 한 아이디를 등록합니다. (e.g. admin)</p>
</li>
<li>
<p><code>GENERATE</code>를 클릭하여 Token을 생성합니다.</p>
</li>
</ul>
</li>
<li>
<p>이름과 Token을 사용하여 다음과 같이 curl로 접속하면 <code>Jenkins-Crumb</code> 프롬프트가 나타납니다.</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ <span class="token function">curl</span> <span class="token parameter variable">--user</span> <span class="token string">"admin:TOKEN"</span> <span class="token string">'http://myjenkins.com/crumbIssuer/api/xml?xpath=concat(//crumbRequestField,":",//crumb)'</span></span>
<span class="line"></span>
<span class="line">Jenkins-Crumb:89e1fd9c402824c89465f6b97f49b605</span>
<span class="line"></span></code></pre></div></li>
<li>
<p><code>Crumb</code>를 확인했으면 다시 헤더 값에 <code>Jenkins-Crumb:</code>를 추가하여 <code>02-04.MultiStep</code> Job을 빌드하기 위해 다음과 같이 요청합니다.</p>
<div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">$ <span class="token function">curl</span> <span class="token parameter variable">-X</span> POST http://myjenkins.com/job/02-04.MultiStep/build <span class="token parameter variable">--user</span> gyulee:11479bdec9cada082d189938a3946348be --data-urlencode <span class="token assign-left variable">json</span><span class="token operator">=</span><span class="token string">''</span> <span class="token parameter variable">-H</span> <span class="token string">"Jenkins-Crumb:89e1fd9c402824c89465f6b97f49b605"</span></span>
<span class="line"></span></code></pre></div></li>
</ol>`}],y=l({setup(){const n=k();return console.log(n),{pages:n}}}),f=e("h1",{id:"software",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#software"},[e("span",null,"Software")])],-1),b=e("h2",{id:"recent-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#recent-pages"},[e("span",null,"Recent pages")])],-1),v={key:0},_=e("h2",{id:"jenkins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jenkins"},[e("span",null,"Jenkins")])],-1),T=e("ul",null,[e("li",null,"젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다.")],-1),w=e("h2",{id:"tomcat",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tomcat"},[e("span",null,"Tomcat")])],-1),S=e("ul",null,[e("li",null,"아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹 애플리케이션 서버이다.")],-1);function j(n,J,x,R,D,A){const i=r("RouterLink");return a(),o("div",null,[f,b,e("ul",null,[(a(!0),o(c,null,d(n.pages,t=>(a(),o("li",{key:t.key},[m(i,{to:t.path},{default:g(()=>[u(s(t.title),1)]),_:2},1032,["to"]),t.frontmatter.date?(a(),o("span",v," [ "+s(new Date(t.frontmatter.date).toLocaleString())+" ] ",1)):h("",!0)]))),128))]),_,T,w,S])}const Z=p(y,[["render",j],["__file","index.html.vue"]]),I=JSON.parse('{"path":"/05-Software/","title":"Software","lang":"ko-KR","frontmatter":{"tag":["Software"],"headerDepth":0,"description":"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/05-Software/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Software"}],["meta",{"property":"og:description","content":"Software Recent pages [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ] Jenkins 젠킨스는 소프트웨어 개발 시 지속적 통합 서비스를 제공하는 툴이다. Tomcat 아파치 톰캣은 아파치 소프트웨어 재단에서 개발한 서블릿 컨테이너만 있는 웹..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Software"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Software\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Recent pages","slug":"recent-pages","link":"#recent-pages","children":[]},{"level":2,"title":"Jenkins","slug":"jenkins","link":"#jenkins","children":[]},{"level":2,"title":"Tomcat","slug":"tomcat","link":"#tomcat","children":[]}],"git":{"createdTime":1640327880000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":4},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":1.03,"words":62},"filePathRelative":"05-Software/README.md","localizedDate":"2021년 12월 24일","excerpt":"\\n<h2>Recent pages</h2>\\n<ul>\\n  <li v-for=\\"page in pages\\" :key=\\"page.key\\">\\n    <a :to=\\"page.path\\" href=\\"undefined\\" target=\\"_blank\\">{{ page.title }}</a>\\n    <span v-if=\\"page.frontmatter.date\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\\n<h2>Jenkins</h2>\\n","autoDesc":true}');export{Z as comp,I as data};
