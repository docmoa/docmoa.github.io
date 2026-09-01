import{O as e,f as t,u as n}from"./runtime-core.esm-bundler-DwmdDY9i.js";import{t as r}from"./plugin-vue_export-helper-BDNMzG2s.js";var i=JSON.parse(`{"path":"/00-Howto/03-Tips/PlantUML.html","title":"UML","lang":"ko-KR","frontmatter":{"description":"UML markdown-it-plantuml 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다. 기본 사용법 UML 블록은 @startuml 과 @enduml 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면 다음과 같이 표...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docmoa.github.io/00-Howto/03-Tips/PlantUML.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"UML"}],["meta",{"property":"og:description","content":"UML markdown-it-plantuml 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다. 기본 사용법 UML 블록은 @startuml 과 @enduml 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면 다음과 같이 표..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}]]},"git":{"createdTime":1627894310000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","username":"Great-Stone","email":"hahohh@gmail.com","commits":5,"url":"https://github.com/Great-Stone"},{"name":"Administrator","username":"Administrator","email":"admin@example.com","commits":1,"url":"https://github.com/Administrator"}]},"readingTime":{"minutes":13.85,"words":831},"filePathRelative":"00-Howto/03-Tips/PlantUML.md","excerpt":"\\n<p><a href=\\"https://github.com/gmunguia/markdown-it-plantuml#readme\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it-plantuml</a> 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다.</p>\\n<h2>기본 사용법</h2>\\n<p>UML 블록은 <code>@startuml</code> 과 <code>@enduml</code> 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면</p>","autoDesc":true}`),a={name:`PlantUML.md`};function o(r,i,a,o,s,c){return e(),n(`div`,null,[...i[0]||=[t(`<h1 id="uml" tabindex="-1"><a class="header-anchor" href="#uml"><span>UML</span></a></h1><p><a href="https://github.com/gmunguia/markdown-it-plantuml#readme" target="_blank" rel="noopener noreferrer">markdown-it-plantuml</a> 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다.</p><h2 id="기본-사용법" tabindex="-1"><a class="header-anchor" href="#기본-사용법"><span>기본 사용법</span></a></h2><p>UML 블록은 <code>@startuml</code> 과 <code>@enduml</code> 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면</p><div class="language-markdown" data-highlighter="prismjs" data-ext="md"><pre><code class="language-markdown"><span class="line">@startuml</span>
<span class="line">Bob -&gt; Alice : hello</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre></div><p>다음과 같이 표기됩니다.</p><img src="https://www.plantuml.com/plantuml/svg/SoWkIImgAStDuNBAJrBGjLDmpCbCJbMmKiX8pSd9vt98pKifpSq10000" alt="PlantUML Diagram"><p>다양한 예제는 <a href="http://plantuml.com/" target="_blank" rel="noopener noreferrer">plantuml.com</a>에서 확인할 수 있습니다.</p><h2 id="plantuml-예제" tabindex="-1"><a class="header-anchor" href="#plantuml-예제"><span>PlantUml 예제</span></a></h2><h3 id="sample-terraform-action" tabindex="-1"><a class="header-anchor" href="#sample-terraform-action"><span>Sample Terraform Action</span></a></h3><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">actor User</span>
<span class="line">interface Terraform</span>
<span class="line">cloud CLOUD</span>
<span class="line"></span>
<span class="line">User -&gt;&gt; Terraform : Apply</span>
<span class="line">User &lt;&lt;- Terraform : State</span>
<span class="line">Terraform -&gt;&gt; CLOUD : Probisioning</span>
<span class="line">CLOUD -&gt;&gt; Terraform : Response</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.plantuml.com/plantuml/svg/NOn13e8m44NtSugv01SWX61qQQ9HEK0fWsdITfgPwSBR6s11TFlU_szGSs8rHN3UM71K4WZPI1Rd2LyauXQM13vodV5ylOqNW7M5JTyV7biybH8_k-gwvaSzpHd1GTRhbi8Mxy9JqC0vv3ViyB_y82sSbM2WFDSKlm00" alt="PlantUML Diagram"><h3 id="sequence-diagram" tabindex="-1"><a class="header-anchor" href="#sequence-diagram"><span>Sequence Diagram</span></a></h3><p><a href="http://plantuml.com/sequence-diagram" target="_blank" rel="noopener noreferrer">http://plantuml.com/sequence-diagram</a></p><div class="language-ini" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">Alice -&gt; Bob: Authentication Request</span>
<span class="line">Bob --&gt; Alice: Authentication Response</span>
<span class="line"></span>
<span class="line">Alice -&gt; Bob: Another authentication Request</span>
<span class="line">Alice &lt;-- Bob: another authentication Response</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre></div><img src="https://www.plantuml.com/plantuml/svg/TSp13O0W3030FrDqWIvW3456S0F49f1WgrBsDn5VHl-NSrN3gMqhPYev4g05Byi0KzD4h3a6pS8mqz6egl6o0AA56t-ekWjNCk-CHHET4BxJZaV4hiEVVd97lBQjN000" alt="PlantUML Diagram"><h3 id="usecase-diagram" tabindex="-1"><a class="header-anchor" href="#usecase-diagram"><span>UseCase Diagram</span></a></h3><p><a href="http://plantuml.com/use-case-diagram" target="_blank" rel="noopener noreferrer">http://plantuml.com/use-case-diagram</a></p><div class="language-ini line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="ini" style="--vp-collapsed-lines:20;"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">:Main Admin: as Admin</span>
<span class="line">(Use the application) as (Use)</span>
<span class="line"></span>
<span class="line">User -&gt; (Start)</span>
<span class="line">User --&gt; (Use)</span>
<span class="line"></span>
<span class="line">Admin ---&gt; (Use)</span>
<span class="line"></span>
<span class="line">note right of Admin : This is an example.</span>
<span class="line"></span>
<span class="line">note right of (Use)</span>
<span class="line">  A note can also</span>
<span class="line">  be on several lines</span>
<span class="line">end note</span>
<span class="line"></span>
<span class="line">note &quot;This note is connected\\nto several objects.&quot; as N2</span>
<span class="line">(Start) .. N2</span>
<span class="line">N2 .. (Use)</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><img src="https://www.plantuml.com/plantuml/svg/NKynRiCm3DprYaEcU8Y7Z1wAv07DqcRhmiXipKAc39C9yln2ab4KtOvtnoFlP4wht-SKXbSInNcSHGUGDHJsLsFunA1bIHB99MjNv29q8LoDLnnUi7yhETqs5wBfDGM7FuncPwpoDJdoPxk20U-J6CH02dxIl2Jk_rlRFd16vICfA5aEm8sH5SOFNYaXYR85rh7wjfHTFL2X669MvUWyVgZdtyLy--RerkzAlyinR9tGzsMw70jeJvnOn_kSVW00" alt="PlantUML Diagram"><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram"><span>Class Diagram</span></a></h3><p><a href="http://plantuml.com/class-diagram" target="_blank" rel="noopener noreferrer">http://plantuml.com/class-diagram</a></p><div class="language-ini line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="ini" style="--vp-collapsed-lines:20;"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">Object &lt;|-- Dummy</span>
<span class="line"></span>
<span class="line">class Dummy {</span>
<span class="line">  String data</span>
<span class="line">  void methods()</span>
<span class="line">  -field1</span>
<span class="line">  <span class="token comment">#field2</span></span>
<span class="line">  ~method1()</span>
<span class="line">  +method2()</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class Flight {</span>
<span class="line">   flightNumber : Integer</span>
<span class="line">   departureTime : Date</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">class Car</span>
<span class="line"></span>
<span class="line">Driver - Car : drives &gt;</span>
<span class="line">Car *- Wheel : have 4 &gt;</span>
<span class="line">Car -- Person : &lt; owns</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><img src="https://www.plantuml.com/plantuml/svg/HOxFImCn48NlyrSyyD8gERHu2aKABeLUL53md3RJtKYIbSdibkAFlrsogtXxtxp7nsoBEj4XHNeylF5HiVaq1isGqeNe65qfC-23W6ULa5jufuw0iGyUYRNhVLai2J2dmD6l2BYQqfg0xtcmcWOtCwmNI_hwi-zYQ3kTz3XD-M581nPOxBDoor8Rp-_rJU6Na1WMZLF-Tzmx8MeaZ2mmbM3XAnRSKSLhWzUEESAYSoFZzlTk39vOIfzXiK5_peMsdFsGuWy0" alt="PlantUML Diagram"><h3 id="activity-diagram" tabindex="-1"><a class="header-anchor" href="#activity-diagram"><span>Activity Diagram</span></a></h3><p><a href="http://plantuml.com/activity-diagram-beta" target="_blank" rel="noopener noreferrer">http://plantuml.com/activity-diagram-beta</a></p><div class="language-ini line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="ini" style="--vp-collapsed-lines:20;"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">start</span>
<span class="line">partition Initialization {</span>
<span class="line">    :read config file;</span>
<span class="line">    :init internal variable;</span>
<span class="line">}</span>
<span class="line">partition Running {</span>
<span class="line">    if (multiprocessor?) then (yes)</span>
<span class="line">    fork</span>
<span class="line">        :Treatment 1;</span>
<span class="line">    fork again</span>
<span class="line">        :Treatment 2;</span>
<span class="line">        detach</span>
<span class="line">    end fork</span>
<span class="line">    else (monoproc)</span>
<span class="line">    :Treatment 1;</span>
<span class="line">    :Treatment 2;</span>
<span class="line">    endif</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">stop</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><img src="https://www.plantuml.com/plantuml/svg/ROwn3i8m34JtV8N7Ci981xgo8dx0D4vhaJYLuo81ujyH0G4IR7VdqpjtnL1jJj5LuIPKO-Cii1KsniWNhFRg003MIkYXpn9uWC2HscVCmWOiHYeOuOJAU7WSRr_0tIp2Chn87A19SpIUDFTKIjRD0cmaWUPCPL4x8UknYhgnLq9B90RBzdq6793bNsdLlbDFXlrOBOd_O2aMWYPboOyddfk_CxzC4i_1tPmhbYVNaVWvnJi0" alt="PlantUML Diagram"><h3 id="component-diagram" tabindex="-1"><a class="header-anchor" href="#component-diagram"><span>Component Diagram</span></a></h3><p><a href="http://plantuml.com/component-diagram" target="_blank" rel="noopener noreferrer">http://plantuml.com/component-diagram</a></p><div class="language-ini line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="ini" style="--vp-collapsed-lines:20;"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">package &quot;Some Group&quot; {</span>
<span class="line">  HTTP - [First Component]</span>
<span class="line">  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Another Component</span><span class="token punctuation">]</span></span></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">node &quot;Other Groups&quot; {</span>
<span class="line">  FTP - [Second Component]</span>
<span class="line">  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">First Component</span><span class="token punctuation">]</span></span> --&gt; FTP</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">cloud {</span>
<span class="line">  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Example 1</span><span class="token punctuation">]</span></span></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line">database &quot;MySql&quot; {</span>
<span class="line">  folder &quot;This is my folder&quot; {</span>
<span class="line">    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Folder 3</span><span class="token punctuation">]</span></span></span>
<span class="line">  }</span>
<span class="line">  frame &quot;Foo&quot; {</span>
<span class="line">    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Frame 4</span><span class="token punctuation">]</span></span></span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Another Component</span><span class="token punctuation">]</span></span> --&gt; [Example 1]</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Example 1</span><span class="token punctuation">]</span></span> --&gt; [Folder 3]</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Folder 3</span><span class="token punctuation">]</span></span> --&gt; [Frame 4]</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><img src="https://www.plantuml.com/plantuml/svg/RO_1QiCm44Jl-ef1TnzAUouEfKukfGNxPd9GhMrZ8cbTIOQ6a7yFab9iGc_BpEoRtJf4vUDiZPZKS5JV1Dco9MmzpvF4MG2xhlj0XRuPVOXuOJkn8nVt0kWtZkE1_5gz2E5O4-HxTZ8e559JG2qDxFGTwPwEgdfE2uat69vr9lIllyfEXl2GYuHMKNsgG91lf_R7b9elDfeyP7SO0yO0Uxf9nKvb9V6OcYzfmojBa0tp4idIKqcagdz-pJUkJrhDnLkAbl7c_F5hSdgsvWe0" alt="PlantUML Diagram"><h3 id="state-diagram" tabindex="-1"><a class="header-anchor" href="#state-diagram"><span>State Diagram</span></a></h3><p><a href="http://plantuml.com/state-diagram" target="_blank" rel="noopener noreferrer">http://plantuml.com/state-diagram</a></p><div class="language-ini line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="ini" style="--vp-collapsed-lines:20;"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; State1</span>
<span class="line">State1 --&gt; [*]</span>
<span class="line">State1 : this is a string</span>
<span class="line">State1 : this is another string</span>
<span class="line"></span>
<span class="line">State1 -&gt; State2</span>
<span class="line">State2 --&gt; [*]</span>
<span class="line"></span>
<span class="line">scale 350 width</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; NotShooting</span>
<span class="line"></span>
<span class="line">state NotShooting {</span>
<span class="line">  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; Idle</span>
<span class="line">  Idle --&gt; Configuring : EvConfig</span>
<span class="line">  Configuring --&gt; Idle : EvConfig</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">state Configuring {</span>
<span class="line">  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; NewValueSelection</span>
<span class="line">  NewValueSelection --&gt; NewValuePreview : EvNewValue</span>
<span class="line">  NewValuePreview --&gt; NewValueSelection : EvNewValueRejected</span>
<span class="line">  NewValuePreview --&gt; NewValueSelection : EvNewValueSaved</span>
<span class="line"></span>
<span class="line">  state NewValuePreview {</span>
<span class="line">     State1 -&gt; State2</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><img src="https://www.plantuml.com/plantuml/svg/dL4zQyCm4DtlLxmv46XJkcGeWPAXImWrT0aPX7M9LHG9hBCz5F_tOZaoSf8fqt7lw-waJH1LItEnT5WSiLn-e10b_4fZYSXXSKpj6bAP01EW4AGsxlo0SLughXC_9LsZLoEmcg8fbCeotjvVq1ajrRJ9pajHUIyn9Goc7C8V0KdwfIqJOedzftSdSsw61R36jXrxmen8nbpHfqcvC9-qu-v7sOOBjboAyOvmZysK-vfRmrsSah3CbEY7uJFJD_zoAQoVCXUgPKq4N1_o9c0u4S3TNm4zzRHXfvkB_GS0" alt="PlantUML Diagram"><h3 id="network-diagram" tabindex="-1"><a class="header-anchor" href="#network-diagram"><span>Network Diagram</span></a></h3><p><a href="https://plantuml.com/nwdiag" target="_blank" rel="noopener noreferrer">https://plantuml.com/nwdiag</a></p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">nwdiag {</span>
<span class="line">  network dmz {</span>
<span class="line">      <span class="token key attr-name">address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">210.x.x.x/24</span>&quot;</span></span>
<span class="line"></span>
<span class="line">      // set multiple addresses (using comma)</span>
<span class="line">      <span class="token key attr-name">web01 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;210.x.x.1, 210.x.x.20&quot;];</span></span>
<span class="line">      <span class="token key attr-name">web02 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;210.x.x.2&quot;];</span></span>
<span class="line">  }</span>
<span class="line">  network internal {</span>
<span class="line">      <span class="token key attr-name">address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.x/24&quot;;</span></span>
<span class="line"></span>
<span class="line">      <span class="token key attr-name">web01 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.1&quot;];</span></span>
<span class="line">      <span class="token key attr-name">web02 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.2&quot;];</span></span>
<span class="line">      db01;</span>
<span class="line">      db02;</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.plantuml.com/plantuml/svg/VOxF2i8m38VlVOgmauAuDWWUXh3t40-T3QFOLkaV9ihUNUPMjiCqkVn2leIl3b7wcAnXhbDQjl1c08vYT_StKFRrdOUIIdaA0KvGeE3xvz0b7WesxSiI0aMmoKJzC9Hv2h19GRiMhdThvNQYEsguWFFAKx63794NbsfnWAi7E4BzmbkxIDv9ioOlZZZBL-odJ-R4FuSCuGofXej5nj6jPpKvbQpv0000" alt="PlantUML Diagram"><h3 id="gantt-diagram" tabindex="-1"><a class="header-anchor" href="#gantt-diagram"><span>Gantt Diagram</span></a></h3><p><a href="https://plantuml.com/gantt-diagram" target="_blank" rel="noopener noreferrer">https://plantuml.com/gantt-diagram</a></p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">@startgantt</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Prototype design</span><span class="token punctuation">]</span></span> lasts 15 days</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Test prototype</span><span class="token punctuation">]</span></span> lasts 10 days</span>
<span class="line">-- All example --</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Task 1 (1 day)</span><span class="token punctuation">]</span></span> lasts 1 day</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T2 (5 days)</span><span class="token punctuation">]</span></span> lasts 5 days</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T3 (1 week)</span><span class="token punctuation">]</span></span> lasts 1 week</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T4 (1 week and 4 days)</span><span class="token punctuation">]</span></span> lasts 1 week and 4 days</span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T5 (2 weeks)</span><span class="token punctuation">]</span></span> lasts 2 weeks</span>
<span class="line">@endgantt</span>
<span class="line">@enduml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.plantuml.com/plantuml/svg/PO-n3i8m34HtVuN7CaIYfTtB7p1aYnWinQfGqxJ2hg1_ZzBI06Bp-TsTvLQKxZeF0TfrwYYgWhlSHnrrcHWzowsBLmmaAbWsw6aHS9P5STfT6HytR0oUGq1-qZ05HcF0MP8UIopAv3ZaG5BWR8N5rfn9FdHAcGTp_nLA4fojTuGKFTQ_1Ny4d6smgDRrn_RMq7Bqs_DfceVm0W00" alt="PlantUML Diagram"><h3 id="mindmap" tabindex="-1"><a class="header-anchor" href="#mindmap"><span>MindMap</span></a></h3><p><a href="https://plantuml.com/mindmap-diagram" target="_blank" rel="noopener noreferrer">https://plantuml.com/mindmap-diagram</a></p><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini"><pre><code class="language-ini"><span class="line">@startuml</span>
<span class="line">@startmindmap</span>
<span class="line">* Debian</span>
<span class="line">** Ubuntu</span>
<span class="line">*** Linux Mint</span>
<span class="line">*** Kubuntu</span>
<span class="line">*** Lubuntu</span>
<span class="line">*** KDE Neon</span>
<span class="line">** LMDE</span>
<span class="line">** SolydXK</span>
<span class="line">** SteamOS</span>
<span class="line">** Raspbian with a very long name</span>
<span class="line"><span class="token key attr-name">*** &lt;s&gt;Raspmbc&lt;/s&gt;</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; OSMC</span></span>
<span class="line"><span class="token key attr-name">*** &lt;s&gt;Raspyfi&lt;/s&gt;</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; Volumio</span></span>
<span class="line">@endmindmap</span>
<span class="line">@enduml</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://www.plantuml.com/plantuml/svg/JOzD2eCm44RtESMii-a5h0IgAxL2fQNRMDCsa9c8oRJrzYK1mTMyuSqFdmfHBv7H2PK9BKsePo6XCgFL9AI4wyWKMKWfeRN4F-WinTmsl5CxRgeQpiRdxRQhwbG7xzRftcICHcC_9BpeCAS_yBNn3He-Pbd1UNe1QJJvM17AD8NZepY44eubz4DtsglrQJTryuxHUg4CJLkMn8pk3m00" alt="PlantUML Diagram">`,48)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};