import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as s,a,h as e}from"./app-BWMI_1Y2.js";const p={},o=a("h1",{id:"_9-tomcat-쓰레드",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_9-tomcat-쓰레드"},[a("span",null,"9. Tomcat 쓰레드")])],-1),c=a("ul",null,[a("li",null,"Thread?"),a("li",null,"설정"),a("li",null,"Thread Dump")],-1),l=a("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/sKiEidnV0nI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),u=e(`<hr><h2 id="_9-1-thread" tabindex="-1"><a class="header-anchor" href="#_9-1-thread"><span>9.1 Thread?</span></a></h2><p>Thread는 JVM내에 요청된 작업을 동시에 처리하기 위한 작은 cpu라고 볼 수 있습니다. 톰캣에 서비스 처리를 요청하는 경우 해당 요청은 Queue에 쌓여 FIFO로 Thread에 전달되고 Thread에 여유가 있는 경우 Queue에 들어온 요청은 바로 Thread로 전달되어 <code>Queue Length</code>는 0을 유지하지만 Thread가 모두 사용중이여서 더이상의 요청 처리를 하지 못하는 경우 새로 발생한 요청은 Queue에 쌓이면서 지연이 발생합니다.</p><p>Thread가 많을수록 동시에 많은 요청을 처리하기 때문에 작은 Thread 수는 서비스를 지연시키지만 이에 반해 Thread도 자원을 소모하므로 필요이상의 큰 값은 불필요한 JVM의 자원을 소모하게 되고 하나의 프로세스 내의 Thread 수는 톰캣 기준으로 700개 이하로 설정할 것을 권장합니다.</p><p>사실상 요청은 지연이 최소화 되어야 하며 지연이 길어질수록 Thread를 점유하여 동시간대에 사용가능한 Thread 수를 줄이므로 적정한 Thread 개수의 설정 상태에서 요청을 더 많이 받고자 한다면 지연에 대한 문제점을 찾는 것을 우선해야 합니다.</p><h2 id="_9-2-설정" tabindex="-1"><a class="header-anchor" href="#_9-2-설정"><span>9.2 설정</span></a></h2><p>쓰레드는 <code>Connector</code> 기준으로 생성됩니다. 따라서 HTTP나 AJP, SSL이 설정된 <code>Connector</code>마다 다른 쓰레드 수를 설정할 수 있습니다. 또는 하나의 쓰레드 풀을 생성하고 <code>Connector</code>에서 해당 쓰레드 풀의 쓰레드를 같이 사용하도록 설정할 수도 있습니다.</p><h3 id="_9-2-1-connector의-쓰레드-설정" tabindex="-1"><a class="header-anchor" href="#_9-2-1-connector의-쓰레드-설정"><span>9.2.1 Connector의 쓰레드 설정</span></a></h3><p>기본적인 &#39;Connector&#39;는 다음과 같이 설정되어있습니다.</p><div class="language-xml" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">           </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8009<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AJP/1.3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre></div><p>HTTP나 AJP 프로토콜이 정의된 <code>Connector</code>는 설정되어 있지는 않지만 기본값으로 최대 쓰레드 200개의 설정을 가지고 있습니다. 쓰레드 관련 설정값은 다음과 같습니다.</p><table><thead><tr><th>Attribute</th><th>Description</th></tr></thead><tbody><tr><td>maxSpareThreads</td><td>Idle 상태로 유지할 max thread pool size</td></tr><tr><td>maxThreads</td><td>동시 요청에 의해 Connector가 생성 할 수 있는 최대 request 수</td></tr><tr><td>minSpareThreads</td><td>tomcat을 실행할때 최소로 유지할 Idle Thread 수</td></tr><tr><td>maxIdleTime</td><td>Thread를 유지하는 시간(ms)</td></tr></tbody></table><p>이런 설정 값들로 다시금 정의하면 기본 <code>Connector</code>를 다음과 같이 설정할 수 있습니다.</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">maxSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">maxThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">minSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line">           </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8009<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AJP/1.3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">maxSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">maxThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>15<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">minSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-2-2-executor" tabindex="-1"><a class="header-anchor" href="#_9-2-2-executor"><span>9.2.2 Executor</span></a></h3><p><code>Executor</code> 디스크립터는 <code>Connector</code>의 쓰레드 설정에 별도의 실행자로 설정하여 동일한 <code>Executor</code>를 사용하는 <code>Connector</code>는 같은 쓰레드 풀에서 쓰레드를 사용하도록 하는 기능입니다.</p><p>별도의 <code>Connector</code>를 사용하여 서비스하지만 모두 같은 쓰레드 자원을 사용하기 위함이며 <code>connector</code>에 <code>executor</code>라는 설정을 사용하여 공통의 쓰레드 풀을 이용할 수 있습니다. <code>tomcatThreadPool</code>이라는 이름을 갖는 <code>Executor</code>와 각 <code>Connector</code>에 설정하는 예는 다음과 같습니다.</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Executor</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcatThreadPool<span class="token punctuation">&quot;</span></span></span>
<span class="line">          <span class="token attr-name">namePrefix</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>catalina-exec-<span class="token punctuation">&quot;</span></span></span>
<span class="line">          <span class="token attr-name">maxThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>150<span class="token punctuation">&quot;</span></span></span>
<span class="line">          <span class="token attr-name">minSpareThreads</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>4<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">executor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcatThreadPool<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8080<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>HTTP/1.1<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">connectionTimeout</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>20000<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line">           </span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Connector</span> <span class="token attr-name">executor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>tomcatThreadPool<span class="token punctuation">&quot;</span></span></span>
<span class="line">           <span class="token attr-name">port</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8009<span class="token punctuation">&quot;</span></span> <span class="token attr-name">protocol</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>AJP/1.3<span class="token punctuation">&quot;</span></span> <span class="token attr-name">redirectPort</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>8443<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Executor</code>에는 <code>name</code>을 정의하여 다른 <code>Connector</code>에서 해당 <code>Executor</code>를 정의할 수 있는 연결고리를 만듭니다. 그리고 쓰레드의 이름을 정의하는 <code>namePrifix</code>설정으로 다른 쓰레드와 구분할 수 있도록 합니다. 기존 <code>Connector</code>에 설정하던 쓰레드 관련 설정을 <code>Excutor</code>에 함으로서 <code>Connector</code>에 공통 쓰레드 풀을 제공합니다.</p><hr><h2 id="_9-3-thread-dump" tabindex="-1"><a class="header-anchor" href="#_9-3-thread-dump"><span>9.3 Thread Dump</span></a></h2><p>쓰레드 덤프는 실행중인 Thread의 종류와 시작점, 실행한 클래스와 메소드 순서, 현재 상태등을 기록하는 JVM의 고유 기능입니다. 쓰레드 덤프로 서비스의 흐름과 서비스 지연시 수행중인 작업, 병목등을 확인할 수 있습니다.</p><p>쓰레드 덤프의 시작에는 쓰레드 이름과 쓰레드의 정보가 기록되며 이후 쓰레드 상태에 대해 설명합니다.<br> 트레이스의 읽는 순서는 위가 최근 실행한 클래스와 메소드이기 때문에 아래서부터 위로 읽습니다.</p><figure><img src="https://raw.githubusercontent.com/Great-Stone/great-stone.github.io/master/assets/img/Tomcat_youtube/ThreadDump.png" alt="ThreadDump" tabindex="0" loading="lazy"><figcaption>ThreadDump</figcaption></figure><p>쓰레드 덤프를 발생시키는 법은 다음과 같습니다.</p><ol><li><p>프로세스 ID를 확인</p><ul><li><p>유닉스/리눅스/맥</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"> ps -ef | grep java</span>
<span class="line"></span></code></pre></div></li><li><p>JDK 5+</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"> $JAVA_HOME/bin/jps</span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>쓰레드 덤프 발생</p><ul><li><p>유닉스/리눅스/맥</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">kill -3 &lt;pid&gt;</span>
<span class="line"></span></code></pre></div></li><li><p>JDK 5+</p><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line"> $JAVA_HOME/bin/jstack &lt;pid&gt;</span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>쓰레드 덤프 확인</p><ul><li><code>catalina.out</code> 파일 확인</li><li>AIX 플랫폼의 경우 별도의 javacore 파일 확인</li></ul></li></ol>`,26),r=[o,c,l,u];function i(d,m){return t(),s("div",null,r)}const g=n(p,[["render",i],["__file","09-thread.html.vue"]]),v=JSON.parse('{"path":"/05-Software/Tomcat/tomcat101/09-thread.html","title":"9. Tomcat 쓰레드","lang":"ko-KR","frontmatter":{"description":"Tomcat","tag":["Tomcat","Java"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/05-Software/Tomcat/tomcat101/09-thread.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"9. Tomcat 쓰레드"}],["meta",{"property":"og:description","content":"Tomcat"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/Great-Stone/great-stone.github.io/master/assets/img/Tomcat_youtube/ThreadDump.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Tomcat"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"9. Tomcat 쓰레드\\",\\"image\\":[\\"https://raw.githubusercontent.com/Great-Stone/great-stone.github.io/master/assets/img/Tomcat_youtube/ThreadDump.png\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"9.1 Thread?","slug":"_9-1-thread","link":"#_9-1-thread","children":[]},{"level":2,"title":"9.2 설정","slug":"_9-2-설정","link":"#_9-2-설정","children":[{"level":3,"title":"9.2.1 Connector의 쓰레드 설정","slug":"_9-2-1-connector의-쓰레드-설정","link":"#_9-2-1-connector의-쓰레드-설정","children":[]},{"level":3,"title":"9.2.2 Executor","slug":"_9-2-2-executor","link":"#_9-2-2-executor","children":[]}]},{"level":2,"title":"9.3 Thread Dump","slug":"_9-3-thread-dump","link":"#_9-3-thread-dump","children":[]}],"git":{"createdTime":1640259507000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":4.17,"words":250},"filePathRelative":"05-Software/Tomcat/tomcat101/09-thread.md","localizedDate":"2021년 12월 23일","excerpt":"\\n<ul>\\n<li>Thread?</li>\\n<li>설정</li>\\n<li>Thread Dump</li>\\n</ul>\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/sKiEidnV0nI\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen=\\"\\"></iframe>\\n<hr>\\n<h2>9.1 Thread?</h2>\\n<p>Thread는 JVM내에 요청된 작업을 동시에 처리하기 위한 작은 cpu라고 볼 수 있습니다. 톰캣에 서비스 처리를 요청하는 경우 해당 요청은 Queue에 쌓여 FIFO로 Thread에 전달되고 Thread에 여유가 있는 경우 Queue에 들어온 요청은 바로 Thread로 전달되어 <code>Queue Length</code>는 0을 유지하지만 Thread가 모두 사용중이여서 더이상의 요청 처리를 하지 못하는 경우 새로 발생한 요청은 Queue에 쌓이면서 지연이 발생합니다.</p>"}');export{g as comp,v as data};