import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as r,c as d,b as n,d as e,a as s,e as i}from"./app-DwRVeH7t.js";const o={},c=n("h1",{id:"uml",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uml"},[n("span",null,"UML")])],-1),u={href:"https://github.com/gmunguia/markdown-it-plantuml#readme",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="기본-사용법" tabindex="-1"><a class="header-anchor" href="#기본-사용법"><span>기본 사용법</span></a></h2><p>UML 블록은 <code>@startuml</code> 과 <code>@enduml</code> 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>@startuml
Bob -&gt; Alice : hello
@enduml
</code></pre></div><p>다음과 같이 표기됩니다.</p><p>@startuml<br> Bob -&gt; Alice : hello<br> @enduml</p>`,5),p={href:"http://plantuml.com/",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="plantuml-예제" tabindex="-1"><a class="header-anchor" href="#plantuml-예제"><span>PlantUml 예제</span></a></h2><h3 id="sample-terraform-action" tabindex="-1"><a class="header-anchor" href="#sample-terraform-action"><span>Sample Terraform Action</span></a></h3><div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
actor User
interface Terraform
cloud CLOUD

User -&gt;&gt; Terraform : Apply
User &lt;&lt;- Terraform : State
Terraform -&gt;&gt; CLOUD : Probisioning
CLOUD -&gt;&gt; Terraform : Response
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> actor User<br> interface Terraform<br> cloud CLOUD</p><p>User -&gt;&gt; Terraform : Apply<br> User &lt;&lt;- Terraform : State<br> Terraform -&gt;&gt; CLOUD : Probisioning<br> CLOUD -&gt;&gt; Terraform : Response<br> @enduml</p><h3 id="sequence-diagram" tabindex="-1"><a class="header-anchor" href="#sequence-diagram"><span>Sequence Diagram</span></a></h3>`,6),b={href:"http://plantuml.com/sequence-diagram",target:"_blank",rel:"noopener noreferrer"},g=i(`<div class="language-ini" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
Alice -&gt; Bob: Authentication Request
Bob --&gt; Alice: Authentication Response

Alice -&gt; Bob: Another authentication Request
Alice &lt;-- Bob: another authentication Response
@enduml
</code></pre></div><p>@startuml<br> Alice -&gt; Bob: Authentication Request<br> Bob --&gt; Alice: Authentication Response</p><p>Alice -&gt; Bob: Another authentication Request<br> Alice &lt;-- Bob: another authentication Response<br> @enduml</p><h3 id="usecase-diagram" tabindex="-1"><a class="header-anchor" href="#usecase-diagram"><span>UseCase Diagram</span></a></h3>`,4),h={href:"http://plantuml.com/use-case-diagram",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
:Main Admin: as Admin
(Use the application) as (Use)

User -&gt; (Start)
User --&gt; (Use)

Admin ---&gt; (Use)

note right of Admin : This is an example.

note right of (Use)
  A note can also
  be on several lines
end note

note &quot;This note is connected\\nto several objects.&quot; as N2
(Start) .. N2
N2 .. (Use)
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> :Main Admin: as Admin<br> (Use the application) as (Use)</p><p>User -&gt; (Start)<br> User --&gt; (Use)</p><p>Admin ---&gt; (Use)</p><p>note right of Admin : This is an example.</p><p>note right of (Use)<br> A note can also<br> be on several lines<br> end note</p><p>note &quot;This note is connected\\nto several objects.&quot; as N2<br> (Start) .. N2<br> N2 .. (Use)<br> @enduml</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram"><span>Class Diagram</span></a></h3>`,8),f={href:"http://plantuml.com/class-diagram",target:"_blank",rel:"noopener noreferrer"},w=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
Object &lt;|-- Dummy

class Dummy {
  String data
  void methods()
  -field1
  <span class="token comment">#field2</span>
  ~method1()
  +method2()
}

class Flight {
   flightNumber : Integer
   departureTime : Date
}

class Car

Driver - Car : drives &gt;
Car *- Wheel : have 4 &gt;
Car -- Person : &lt; owns
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> Object &lt;|-- Dummy</p><p>class Dummy {<br> String data<br> void methods()<br> -field1<br> #field2<br> ~method1()<br> +method2()<br> }</p><p>class Flight {<br> flightNumber : Integer<br> departureTime : Date<br> }</p><p>class Car</p><p>Driver - Car : drives &gt;<br> Car *- Wheel : have 4 &gt;<br> Car -- Person : &lt; owns<br> @enduml</p><h3 id="activity-diagram" tabindex="-1"><a class="header-anchor" href="#activity-diagram"><span>Activity Diagram</span></a></h3>`,7),x={href:"http://plantuml.com/activity-diagram-beta",target:"_blank",rel:"noopener noreferrer"},_=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
start
partition Initialization {
    :read config file;
    :init internal variable;
}
partition Running {
    if (multiprocessor?) then (yes)
    fork
        :Treatment 1;
    fork again
        :Treatment 2;
        detach
    end fork
    else (monoproc)
    :Treatment 1;
    :Treatment 2;
    endif
}

stop
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> start<br> partition Initialization {<br> :read config file;<br> :init internal variable;<br> }<br> partition Running {<br> if (multiprocessor?) then (yes)<br> fork<br> :Treatment 1;<br> fork again<br> :Treatment 2;<br> detach<br> end fork<br> else (monoproc)<br> :Treatment 1;<br> :Treatment 2;<br> endif<br> }</p><p>stop<br> @enduml</p><h3 id="component-diagram" tabindex="-1"><a class="header-anchor" href="#component-diagram"><span>Component Diagram</span></a></h3>`,4),y={href:"http://plantuml.com/component-diagram",target:"_blank",rel:"noopener noreferrer"},S=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
package &quot;Some Group&quot; {
  HTTP - [First Component]
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Another Component</span><span class="token punctuation">]</span></span>
}

node &quot;Other Groups&quot; {
  FTP - [Second Component]
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">First Component</span><span class="token punctuation">]</span></span> --&gt; FTP
}

cloud {
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Example 1</span><span class="token punctuation">]</span></span>
}


database &quot;MySql&quot; {
  folder &quot;This is my folder&quot; {
    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Folder 3</span><span class="token punctuation">]</span></span>
  }
  frame &quot;Foo&quot; {
    <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Frame 4</span><span class="token punctuation">]</span></span>
  }
}


<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Another Component</span><span class="token punctuation">]</span></span> --&gt; [Example 1]
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Example 1</span><span class="token punctuation">]</span></span> --&gt; [Folder 3]
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Folder 3</span><span class="token punctuation">]</span></span> --&gt; [Frame 4]
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> package &quot;Some Group&quot; {<br> HTTP - [First Component]<br> [Another Component]<br> }</p><p>node &quot;Other Groups&quot; {<br> FTP - [Second Component]<br> [First Component] --&gt; FTP<br> }</p><p>cloud {<br> [Example 1]<br> }</p><p>database &quot;MySql&quot; {<br> folder &quot;This is my folder&quot; {<br> [Folder 3]<br> }<br> frame &quot;Foo&quot; {<br> [Frame 4]<br> }<br> }</p><p>[Another Component] --&gt; [Example 1]<br> [Example 1] --&gt; [Folder 3]<br> [Folder 3] --&gt; [Frame 4]<br> @enduml</p><h3 id="state-diagram" tabindex="-1"><a class="header-anchor" href="#state-diagram"><span>State Diagram</span></a></h3>`,7),q={href:"http://plantuml.com/state-diagram",target:"_blank",rel:"noopener noreferrer"},T=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; State1
State1 --&gt; [*]
State1 : this is a string
State1 : this is another string

State1 -&gt; State2
State2 --&gt; [*]

scale 350 width
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; NotShooting

state NotShooting {
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; Idle
  Idle --&gt; Configuring : EvConfig
  Configuring --&gt; Idle : EvConfig
}

state Configuring {
  <span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">*</span><span class="token punctuation">]</span></span> --&gt; NewValueSelection
  NewValueSelection --&gt; NewValuePreview : EvNewValue
  NewValuePreview --&gt; NewValueSelection : EvNewValueRejected
  NewValuePreview --&gt; NewValueSelection : EvNewValueSaved

  state NewValuePreview {
     State1 -&gt; State2
  }
}
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> [<em>] --&gt; State1<br> State1 --&gt; [</em>]<br> State1 : this is a string<br> State1 : this is another string</p><p>State1 -&gt; State2<br> State2 --&gt; [*]</p><p>scale 350 width<br> [*] --&gt; NotShooting</p><p>state NotShooting {<br> [*] --&gt; Idle<br> Idle --&gt; Configuring : EvConfig<br> Configuring --&gt; Idle : EvConfig<br> }</p><p>state Configuring {<br> [*] --&gt; NewValueSelection<br> NewValueSelection --&gt; NewValuePreview : EvNewValue<br> NewValuePreview --&gt; NewValueSelection : EvNewValueRejected<br> NewValuePreview --&gt; NewValueSelection : EvNewValueSaved</p><p>state NewValuePreview {<br> State1 -&gt; State2<br> }<br> }<br> @enduml</p><h3 id="network-diagram" tabindex="-1"><a class="header-anchor" href="#network-diagram"><span>Network Diagram</span></a></h3>`,8),U={href:"https://plantuml.com/nwdiag",target:"_blank",rel:"noopener noreferrer"},C=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
nwdiag {
  network dmz {
      <span class="token key attr-name">address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;<span class="token inner-value">210.x.x.x/24</span>&quot;</span>

      // set multiple addresses (using comma)
      <span class="token key attr-name">web01 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;210.x.x.1, 210.x.x.20&quot;];</span>
      <span class="token key attr-name">web02 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;210.x.x.2&quot;];</span>
  }
  network internal {
      <span class="token key attr-name">address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.x/24&quot;;</span>

      <span class="token key attr-name">web01 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.1&quot;];</span>
      <span class="token key attr-name">web02 [address</span> <span class="token punctuation">=</span> <span class="token value attr-value">&quot;172.x.x.2&quot;];</span>
      db01;
      db02;
  }
}
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> nwdiag {<br> network dmz {<br> address = &quot;210.x.x.x/24&quot;</p><pre><code>  // set multiple addresses (using comma)
  web01 [address = &quot;210.x.x.1, 210.x.x.20&quot;];
  web02 [address = &quot;210.x.x.2&quot;];
</code></pre><p>}<br> network internal {<br> address = &quot;172.x.x.x/24&quot;;</p><pre><code>  web01 [address = &quot;172.x.x.1&quot;];
  web02 [address = &quot;172.x.x.2&quot;];
  db01;
  db02;
</code></pre><p>}<br> }<br> @enduml</p><h3 id="gantt-diagram" tabindex="-1"><a class="header-anchor" href="#gantt-diagram"><span>Gantt Diagram</span></a></h3>`,7),N={href:"https://plantuml.com/gantt-diagram",target:"_blank",rel:"noopener noreferrer"},A=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
@startgantt
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Prototype design</span><span class="token punctuation">]</span></span> lasts 15 days
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Test prototype</span><span class="token punctuation">]</span></span> lasts 10 days
-- All example --
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Task 1 (1 day)</span><span class="token punctuation">]</span></span> lasts 1 day
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T2 (5 days)</span><span class="token punctuation">]</span></span> lasts 5 days
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T3 (1 week)</span><span class="token punctuation">]</span></span> lasts 1 week
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T4 (1 week and 4 days)</span><span class="token punctuation">]</span></span> lasts 1 week and 4 days
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">T5 (2 weeks)</span><span class="token punctuation">]</span></span> lasts 2 weeks
@endgantt
@enduml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> @startgantt<br> [Prototype design] lasts 15 days<br> [Test prototype] lasts 10 days<br> -- All example --<br> [Task 1 (1 day)] lasts 1 day<br> [T2 (5 days)] lasts 5 days<br> [T3 (1 week)] lasts 1 week<br> [T4 (1 week and 4 days)] lasts 1 week and 4 days<br> [T5 (2 weeks)] lasts 2 weeks<br> @endgantt<br> @enduml</p><h3 id="mindmap" tabindex="-1"><a class="header-anchor" href="#mindmap"><span>MindMap</span></a></h3>`,3),D={href:"https://plantuml.com/mindmap-diagram",target:"_blank",rel:"noopener noreferrer"},M=i(`<div class="language-ini line-numbers-mode" data-ext="ini" data-title="ini"><pre class="language-ini"><code>@startuml
@startmindmap
* Debian
** Ubuntu
*** Linux Mint
*** Kubuntu
*** Lubuntu
*** KDE Neon
** LMDE
** SolydXK
** SteamOS
** Raspbian with a very long name
<span class="token key attr-name">*** &lt;s&gt;Raspmbc&lt;/s&gt;</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; OSMC</span>
<span class="token key attr-name">*** &lt;s&gt;Raspyfi&lt;/s&gt;</span> <span class="token punctuation">=</span><span class="token value attr-value">&gt; Volumio</span>
@endmindmap
@enduml

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>@startuml<br> @startmindmap</p><ul><li>Debian<br> ** Ubuntu<br> *** Linux Mint<br> *** Kubuntu<br> *** Lubuntu<br> *** KDE Neon<br> ** LMDE<br> ** SolydXK<br> ** SteamOS<br> ** Raspbian with a very long name<br> *** <s>Raspmbc</s> =&gt; OSMC<br> *** <s>Raspyfi</s> =&gt; Volumio<br> @endmindmap<br> @enduml</li></ul>`,3);function L(P,V){const a=l("ExternalLinkIcon");return r(),d("div",null,[c,n("p",null,[n("a",u,[e("markdown-it-plantuml"),s(a)]),e(" 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다.")]),m,n("p",null,[e("다양한 예제는 "),n("a",p,[e("plantuml.com"),s(a)]),e("에서 확인할 수 있습니다.")]),v,n("p",null,[n("a",b,[e("http://plantuml.com/sequence-diagram"),s(a)])]),g,n("p",null,[n("a",h,[e("http://plantuml.com/use-case-diagram"),s(a)])]),k,n("p",null,[n("a",f,[e("http://plantuml.com/class-diagram"),s(a)])]),w,n("p",null,[n("a",x,[e("http://plantuml.com/activity-diagram-beta"),s(a)])]),_,n("p",null,[n("a",y,[e("http://plantuml.com/component-diagram"),s(a)])]),S,n("p",null,[n("a",q,[e("http://plantuml.com/state-diagram"),s(a)])]),T,n("p",null,[n("a",U,[e("https://plantuml.com/nwdiag"),s(a)])]),C,n("p",null,[n("a",N,[e("https://plantuml.com/gantt-diagram"),s(a)])]),A,n("p",null,[n("a",D,[e("https://plantuml.com/mindmap-diagram"),s(a)])]),M])}const F=t(o,[["render",L],["__file","PlantUML.html.vue"]]),O=JSON.parse('{"path":"/00-Howto/03-Tips/PlantUML.html","title":"UML","lang":"ko-KR","frontmatter":{"description":"UML markdown-it-plantuml 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다. 기본 사용법 UML 블록은 @startuml 과 @enduml 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면 다음과 같이 표...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/00-Howto/03-Tips/PlantUML.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"UML"}],["meta",{"property":"og:description","content":"UML markdown-it-plantuml 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다. 기본 사용법 UML 블록은 @startuml 과 @enduml 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면 다음과 같이 표..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"UML\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"기본 사용법","slug":"기본-사용법","link":"#기본-사용법","children":[]},{"level":2,"title":"PlantUml 예제","slug":"plantuml-예제","link":"#plantuml-예제","children":[{"level":3,"title":"Sample Terraform Action","slug":"sample-terraform-action","link":"#sample-terraform-action","children":[]},{"level":3,"title":"Sequence Diagram","slug":"sequence-diagram","link":"#sequence-diagram","children":[]},{"level":3,"title":"UseCase Diagram","slug":"usecase-diagram","link":"#usecase-diagram","children":[]},{"level":3,"title":"Class Diagram","slug":"class-diagram","link":"#class-diagram","children":[]},{"level":3,"title":"Activity Diagram","slug":"activity-diagram","link":"#activity-diagram","children":[]},{"level":3,"title":"Component Diagram","slug":"component-diagram","link":"#component-diagram","children":[]},{"level":3,"title":"State Diagram","slug":"state-diagram","link":"#state-diagram","children":[]},{"level":3,"title":"Network Diagram","slug":"network-diagram","link":"#network-diagram","children":[]},{"level":3,"title":"Gantt Diagram","slug":"gantt-diagram","link":"#gantt-diagram","children":[]},{"level":3,"title":"MindMap","slug":"mindmap","link":"#mindmap","children":[]}]}],"git":{"createdTime":1634225909000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":13.85,"words":831},"filePathRelative":"00-Howto/03-Tips/PlantUML.md","localizedDate":"2021년 10월 15일","excerpt":"\\n<p><a href=\\"https://github.com/gmunguia/markdown-it-plantuml#readme\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">markdown-it-plantuml</a> 플러그인을 활성화 하여 UML 작성이 가능합니다. 아래는 플러그인 개발자의 안내를 풀어 일부 설명합니다.</p>\\n<h2>기본 사용법</h2>\\n<p>UML 블록은 <code>@startuml</code> 과 <code>@enduml</code> 사이에 UML 구성을 위한 구성을 넣어 표기합니다. 아래와 같이 md 파일 내에 작성하면</p>","autoDesc":true}');export{F as comp,O as data};
