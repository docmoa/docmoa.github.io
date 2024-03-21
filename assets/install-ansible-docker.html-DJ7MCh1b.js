import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as i,c as l,b as n,d as s,a as o,e as p}from"./app-DwRVeH7t.js";const c={},r=n("h1",{id:"nomad에서-ansible로-docker-설치와-template-주의사항",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nomad에서-ansible로-docker-설치와-template-주의사항"},[n("span",null,"Nomad에서 Ansible로 Docker 설치와 Template 주의사항")])],-1),d={href:"https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525",target:"_blank",rel:"noopener noreferrer"},u=p(`<p>Nomad를 통해 Ops작업을 수행할 때 <code>sysbatch</code> 타입의 Job에 Ansible을 <code>raw_exec</code>로 실행하면 전체 노드에서 일괄로 작업을 수행할 수 있다.</p><p>Ansible에서 사용하는 문법 중 <code>{{}}</code>의 부호로 팩트를 사용하는 경우 Nomad에서 사용하는 Template의 <code>{{}}</code>과 겹쳐 오류가 발생한다.</p><div class="language-log" data-ext="log" data-title="log"><pre class="language-log"><code><span class="token property">Template failed:</span> <span class="token operator">(</span>dynamic<span class="token operator">)</span><span class="token operator">:</span> parse<span class="token operator">:</span> template<span class="token operator">:</span> <span class="token operator">:</span><span class="token number">23</span><span class="token operator">:</span> function <span class="token string">&quot;ansible_distribution_release&quot;</span> not defined
</code></pre></div><p>이경우 Nomad에서 다음과 같이 표기하여 템플릿 문자에 대한 치환이 가능하다.</p><div class="language-hcl" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code> <span class="token punctuation">{</span><span class="token punctuation">{</span> --&gt; <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;{{&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
 <span class="token punctuation">}</span><span class="token punctuation">}</span> --&gt; <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token string">&quot;}}&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><p>다음은 Ansible에서 <code>apt_repository</code> 수행 시 <code>ansible_architecture</code>와 <code>ansible_distribution_release</code> 같은 팩트 값을 Template으로 Playbook을 작성한 예제 이다.</p><div class="language-hcl line-numbers-mode" data-ext="hcl" data-title="hcl"><pre class="language-hcl"><code>job <span class="token string">&quot;install-ansible-docker&quot;</span> <span class="token punctuation">{</span>
  <span class="token property">datacenters</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;hashitalks-kr&quot;</span><span class="token punctuation">]</span>  <span class="token comment"># 사용할 데이터 센터 이름으로 수정</span>

  <span class="token property">type</span> <span class="token punctuation">=</span> <span class="token string">&quot;sysbatch&quot;</span>  <span class="token comment"># 배치 작업 유형</span>

  <span class="token keyword">constraint</span> <span class="token punctuation">{</span>
    <span class="token property">attribute</span> <span class="token punctuation">=</span> <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>attr<span class="token punctuation">.</span>os<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span>&quot;</span>
    <span class="token property">value</span>     <span class="token punctuation">=</span> <span class="token string">&quot;ubuntu&quot;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">parameterized</span> <span class="token punctuation">{</span>
    <span class="token property">payload</span>       <span class="token punctuation">=</span> <span class="token string">&quot;forbidden&quot;</span>
  <span class="token punctuation">}</span>

  group <span class="token string">&quot;install- group&quot;</span> <span class="token punctuation">{</span>

    task <span class="token string">&quot;install-ansible-task&quot;</span> <span class="token punctuation">{</span>
      <span class="token keyword">lifecycle</span> <span class="token punctuation">{</span>
        <span class="token property">hook</span> <span class="token punctuation">=</span> <span class="token string">&quot;prestart&quot;</span>
        <span class="token property">sidecar</span> <span class="token punctuation">=</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
      
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;raw_exec&quot;</span>  <span class="token comment"># 외부 스크립트를 실행</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;local/install_ansible.sh&quot;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;local/install_ansible.sh&quot;</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
#!/bin/bash
sudo apt-get update
sudo apt-get install -y ansible
EOF</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    task <span class="token string">&quot;install-docker-task&quot;</span> <span class="token punctuation">{</span>
      <span class="token property">driver</span> <span class="token punctuation">=</span> <span class="token string">&quot;raw_exec&quot;</span>  <span class="token comment"># 외부 스크립트를 실행</span>

      <span class="token keyword">config</span> <span class="token punctuation">{</span>
        <span class="token property">command</span> <span class="token punctuation">=</span> <span class="token string">&quot;ansible-playbook&quot;</span>
        <span class="token property">args</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;local/playbook.yml&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">env</span> <span class="token punctuation">{</span>
        <span class="token property">JAVA_VERSION</span> <span class="token punctuation">=</span> <span class="token string">&quot;<span class="token interpolation"><span class="token punctuation">$</span><span class="token punctuation">{</span>NOMAD_META_DesiredJavaVersion<span class="token punctuation">}</span></span>&quot;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">template</span> <span class="token punctuation">{</span>
        <span class="token property">destination</span> <span class="token punctuation">=</span> <span class="token string">&quot;local/playbook.yml&quot;</span>
        <span class="token property">data</span> <span class="token punctuation">=</span> <span class="token heredoc string">&lt;&lt;EOF
---
- hosts:
    - localhost
  become: yes
  tasks:
    - name: Install aptitude
      apt:
        name: aptitude
        state: latest
        update_cache: true

    - name: Install required packages
      apt:
        pkg:
          - apt-transport-https
          - ca-certificates
          - curl
          - software-properties-common
          - python3-pip
          - virtualenv
          - python3-setuptools
        state: latest
        update_cache: true

    - name: Add Docker GPG apt Key
      apt_key:
        url: https://download.docker.com/linux/ubuntu/gpg
        state: present

    - name: Add Docker repository
      apt_repository:
        repo: &quot;deb [arch={{ env &quot;attr.cpu.arch&quot; }}] https://download.docker.com/linux/ubuntu {{&quot;{{&quot;}} ansible_lsb.codename {{&quot;}}&quot;}} stable&quot;
        state: present
        update_cache: true

    - name: Update the apt package index
      apt:
        update_cache: true

    - name: Install Docker CE
      apt:
        name: docker-ce
        state: latest

    - name: Install Docker CE etc.
      apt:
        name:
          - docker-ce-cli
          - containerd.io
          - docker-buildx-plugin
          - docker-compose-plugin
        state: present

    - name: Ensure Docker starts on boot
      service:
        name: docker
        enabled: true
        state: started
EOF</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">resources</span> <span class="token punctuation">{</span>
        <span class="token property">cpu</span>    <span class="token punctuation">=</span> <span class="token number">500</span>
        <span class="token property">memory</span> <span class="token punctuation">=</span> <span class="token number">256</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(m,b){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,n("blockquote",null,[n("p",null,[s("참고 : "),n("a",d,[s("https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525"),o(a)])])]),u])}const g=e(c,[["render",v],["__file","install-ansible-docker.html.vue"]]),y=JSON.parse('{"path":"/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html","title":"Nomad에서 Ansible로 Docker 설치와 Template 주의사항","lang":"ko-KR","frontmatter":{"description":"Nomad에서 Aisnble 실행 및 템플릿 주의사항","tag":["Nomad","Ansible","Job","Docker"],"author":"GS","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Nomad에서 Ansible로 Docker 설치와 Template 주의사항"}],["meta",{"property":"og:description","content":"Nomad에서 Aisnble 실행 및 템플릿 주의사항"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2024-03-08T06:55:52.000Z"}],["meta",{"property":"article:author","content":"GS"}],["meta",{"property":"article:tag","content":"Nomad"}],["meta",{"property":"article:tag","content":"Ansible"}],["meta",{"property":"article:tag","content":"Job"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:modified_time","content":"2024-03-08T06:55:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nomad에서 Ansible로 Docker 설치와 Template 주의사항\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-08T06:55:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"GS\\"}]}"]]},"headers":[],"git":{"createdTime":1693402327000,"updatedTime":1709880952000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":3},{"name":"ung","email":"ung@mz.co.kr","commits":1}]},"readingTime":{"minutes":4.23,"words":254},"filePathRelative":"04-HashiCorp/07-Nomad/05-SampleJob/install-ansible-docker.md","localizedDate":"2023년 8월 30일","excerpt":"\\n<blockquote>\\n<p>참고 : <a href=\\"https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discuss.hashicorp.com/t/escape-characters-recognized-as-a-variable-in-template-stanza/40525</a></p>\\n</blockquote>\\n<p>Nomad를 통해 Ops작업을 수행할 때 <code>sysbatch</code> 타입의 Job에 Ansible을 <code>raw_exec</code>로 실행하면 전체 노드에서 일괄로 작업을 수행할 수 있다.</p>","copyright":{"author":"GS"}}');export{g as comp,y as data};
