import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,h as o}from"./app-BWMI_1Y2.js";const r={},n=o(`<h1 id="network-code-e-accessdenied-0x80070005" tabindex="-1"><a class="header-anchor" href="#network-code-e-accessdenied-0x80070005"><span>Network : Code E_ACCESSDENIED (0x80070005)</span></a></h1><p><a href="https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9</a><br><a href="https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930" target="_blank" rel="noopener noreferrer">https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930</a></p><h2 id="환경" tabindex="-1"><a class="header-anchor" href="#환경"><span>환경</span></a></h2><blockquote><p>테스트 환경은 MacOS이나 HashiCorp Discuss의 글을 확인해보면 Linux에서도 동일하게 발생하는 것으로 보임</p></blockquote><ul><li>MacOS 카탈리나에서 빅서로 업그레이드</li><li>Vagrant 업데이트 : 2.2.18</li><li>VirtualBox 업데이트 : 6.1.28 r147628</li></ul><h2 id="현상" tabindex="-1"><a class="header-anchor" href="#현상"><span>현상</span></a></h2><p>기존에 VirtualBox에 Host Network Manager에서 vboxnet# 사용중</p><ul><li>IPv4 Address : 172.28.128.1</li><li>IPv4 Network Mask : 255.255.255.0</li><li>DHCP <ul><li>Server Address : 172.28.128.2</li><li>Server Mask : 255.255.255.0</li><li>Lower Address Bound: 172.28.128.3</li><li>Upper Address Bound: 172.28.128.254</li></ul></li></ul><p>Vagrant up 시 에러 발생<br> VM의 Network에 Host-only Network로 해당 vboxnet#이 있어야 하나 목록에 표기 안됨</p><h2 id="해결방안" tabindex="-1"><a class="header-anchor" href="#해결방안"><span>해결방안</span></a></h2><p>Host Network Manager에서 vboxnet#를 삭제후 다시 172.x.x.x로 생성하려고 하니 에러 발생</p><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">Stderr: VBoxManage: error: Code E_ACCESSDENIED <span class="token punctuation">(</span>0x80070005<span class="token punctuation">)</span> - Access denied <span class="token punctuation">(</span>extended info not available<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>기본으로 네트워크 생성시 부여받는 IP(e.g. <code>192.168.56.1</code>) 로는 가능하여 Vagrant의 구성을 해당 IP에 맞게 변경</p>`,13),s=[n];function i(c,l){return t(),a("div",null,s)}const h=e(r,[["render",i],["__file","hostonlynetworkissue.html.vue"]]),m=JSON.parse('{"path":"/04-HashiCorp/02-Vagrant/04-TroubleShooting/hostonlynetworkissue.html","title":"Network : Code E_ACCESSDENIED (0x80070005)","lang":"ko-KR","frontmatter":{"description":"Vagrant에서 Private network 구성시 에러 발생","tag":["vagrant","virtualbox"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/02-Vagrant/04-TroubleShooting/hostonlynetworkissue.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Network : Code E_ACCESSDENIED (0x80070005)"}],["meta",{"property":"og:description","content":"Vagrant에서 Private network 구성시 에러 발생"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vagrant"}],["meta",{"property":"article:tag","content":"virtualbox"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Network : Code E_ACCESSDENIED (0x80070005)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"환경","slug":"환경","link":"#환경","children":[]},{"level":2,"title":"현상","slug":"현상","link":"#현상","children":[]},{"level":2,"title":"해결방안","slug":"해결방안","link":"#해결방안","children":[]}],"git":{"createdTime":1635125433000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":1.68,"words":101},"filePathRelative":"04-HashiCorp/02-Vagrant/04-TroubleShooting/hostonlynetworkissue.md","localizedDate":"2021년 10월 25일","excerpt":"\\n<p><a href=\\"https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discuss.hashicorp.com/t/vagrant-2-2-18-osx-11-6-cannot-create-private-network/30984/9</a><br>\\n<a href=\\"https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discuss.hashicorp.com/t/vagran-can-not-assign-ip-address-to-virtualbox-machine/30930</a></p>"}');export{h as comp,m as data};