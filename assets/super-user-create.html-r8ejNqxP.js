import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as r,c as u,b as i,w as e,h as o,g as a,a as s}from"./app-BWMI_1Y2.js";const d={},h=o(`<h1 id="vault-superuser-생성" tabindex="-1"><a class="header-anchor" href="#vault-superuser-생성"><span>Vault SuperUser 생성</span></a></h1><div class="hint-container caution"><p class="hint-container-title">주의</p><p>해당 방법은 username/password 방식의 Admin권한의 사용자를 생성하나,<br> 보안상 실 구성에는 권장하지 않습니다.</p></div><ol><li>userpass 활성화</li></ol><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">vault auth <span class="token builtin class-name">enable</span> userpass</span>
<span class="line"></span></code></pre></div><ol start="2"><li>권한 추가 (e.g. super-user)</li></ol>`,5),g=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[a("vault policy "),s("span",{class:"token function"},"write"),a(" super-user - "),s("span",{class:"token operator"},"<<"),a(),s("span",{class:"token string"},"EOF"),a(`
`),s("span",{class:"line"},'path "*" {'),a(`
`),s("span",{class:"line"},'capabilities = ["create", "read", "update", "delete", "list", "sudo"]'),a(`
`),s("span",{class:"line"},"}"),a(`
`),s("span",{class:"line"},"EOF")]),a(`
`),s("span",{class:"line"})])])],-1),k=s("div",{class:"language-powershell","data-highlighter":"prismjs","data-ext":"powershell","data-title":"powershell"},[s("pre",{class:"language-powershell"},[s("code",null,[s("span",{class:"line"},[s("span",{class:"token variable"},"$policy"),a(" = @"),s("span",{class:"token string"},'"'),a(`
`),s("span",{class:"line"},'path "'),s("span",{class:"token operator"},"*"),s("span",{class:"token string"},'" {'),a(`
`),s("span",{class:"line"},'  capabilities = ["'),a("create"),s("span",{class:"token string"},'", "'),a("read"),s("span",{class:"token string"},'", "'),a("update"),s("span",{class:"token string"},'", "'),a("delete"),s("span",{class:"token string"},'", "'),a("list"),s("span",{class:"token string"},'", "'),a("sudo"),s("span",{class:"token string"},'"]'),a(`
`),s("span",{class:"line"},"}"),a(`
`),s("span",{class:"line"},'"'),a("@")]),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},[a("vault policy "),s("span",{class:"token function"},"write"),a(" super-user "),s("span",{class:"token operator"},"-"),a(" << "),s("span",{class:"token variable"},"$policy")]),a(`
`),s("span",{class:"line"})])])],-1),m=o(`<ol start="3"><li>계정 생성</li></ol><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line">vault <span class="token function">write</span> auth/userpass/users/admin <span class="token assign-left variable">password</span><span class="token operator">=</span>password <span class="token assign-left variable">policies</span><span class="token operator">=</span>super-user</span>
<span class="line"></span></code></pre></div><ol start="4"><li>로그인 또는 토큰 생성</li></ol>`,3),v=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[a("vault login "),s("span",{class:"token parameter variable"},"-method"),a(" userpass "),s("span",{class:"token assign-left variable"},"username"),s("span",{class:"token operator"},"="),a("admin "),s("span",{class:"token assign-left variable"},"password"),s("span",{class:"token operator"},"="),a("password")]),a(`
`),s("span",{class:"line"},[a("Success"),s("span",{class:"token operator"},"!"),a(" You are now authenticated. The token information displayed below")]),a(`
`),s("span",{class:"line"},[a("is already stored "),s("span",{class:"token keyword"},"in"),a(" the token helper. You "),s("span",{class:"token keyword"},"do"),a(" NOT need to run "),s("span",{class:"token string"},'"vault login"')]),a(`
`),s("span",{class:"line"},"again. Future Vault requests will automatically use this token."),a(`
`),s("span",{class:"line"}),a(`
`),s("span",{class:"line"},"Key                    Value"),a(`
`),s("span",{class:"line"},"---                    -----"),a(`
`),s("span",{class:"line"},"token                  s.vIRSNJYiVMtRFuOwq4pKbYGK"),a(`
`),s("span",{class:"line"},"token_accessor         EQz974TUJCy0iV7ALZ8xzGe4"),a(`
`),s("span",{class:"line"},"token_duration         768h"),a(`
`),s("span",{class:"line"},[a("token_renewable        "),s("span",{class:"token boolean"},"true")]),a(`
`),s("span",{class:"line"},[a("token_policies         "),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"default"'),a(),s("span",{class:"token string"},'"super-user"'),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"},[a("identity_policies      "),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"},[a("policies               "),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"default"'),a(),s("span",{class:"token string"},'"super-user"'),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"},"token_meta_username    admin"),a(`
`),s("span",{class:"line"})])])],-1),b=s("div",{class:"language-bash","data-highlighter":"prismjs","data-ext":"sh","data-title":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"line"},[a("vault token create "),s("span",{class:"token parameter variable"},"-policy"),s("span",{class:"token operator"},"="),a("super-user")]),a(`
`),s("span",{class:"line"},"Key                  Value"),a(`
`),s("span",{class:"line"},"---                  -----"),a(`
`),s("span",{class:"line"},"token                s.DgfYH1dUBxAbBDuPM5U2kkym"),a(`
`),s("span",{class:"line"},"token_accessor       6GJDO2KH4yPK0jStQw8gJ63r"),a(`
`),s("span",{class:"line"},"token_duration       768h"),a(`
`),s("span",{class:"line"},[a("token_renewable      "),s("span",{class:"token boolean"},"true")]),a(`
`),s("span",{class:"line"},[a("token_policies       "),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"default"'),a(),s("span",{class:"token string"},'"super-user"'),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"},[a("identity_policies    "),s("span",{class:"token punctuation"},"["),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"},[a("policies             "),s("span",{class:"token punctuation"},"["),s("span",{class:"token string"},'"default"'),a(),s("span",{class:"token string"},'"super-user"'),s("span",{class:"token punctuation"},"]")]),a(`
`),s("span",{class:"line"})])])],-1);function _(w,y){const l=c("CodeTabs");return r(),u("div",null,[h,i(l,{id:"23",data:[{id:"Linux/MacOS"},{id:"Windows Powershell"}],"tab-id":"shell"},{title0:e(({value:n,isActive:t})=>[a("Linux/MacOS")]),title1:e(({value:n,isActive:t})=>[a("Windows Powershell")]),tab0:e(({value:n,isActive:t})=>[g]),tab1:e(({value:n,isActive:t})=>[k]),_:1}),m,i(l,{id:"46",data:[{id:"Login"},{id:"token"}],"tab-id":"shell"},{title0:e(({value:n,isActive:t})=>[a("Login")]),title1:e(({value:n,isActive:t})=>[a("token")]),tab0:e(({value:n,isActive:t})=>[v]),tab1:e(({value:n,isActive:t})=>[b]),_:1})])}const V=p(d,[["render",_],["__file","super-user-create.html.vue"]]),A=JSON.parse('{"path":"/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html","title":"Vault SuperUser 생성","lang":"ko-KR","frontmatter":{"description":"Vault Super user 만들기","tag":["vault auth"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault SuperUser 생성"}],["meta",{"property":"og:description","content":"Vault Super user 만들기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:22:33.000Z"}],["meta",{"property":"article:tag","content":"vault auth"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:22:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault SuperUser 생성\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-25T07:22:33.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1628154737000,"updatedTime":1698218553000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2}]},"readingTime":{"minutes":3.2,"words":192},"filePathRelative":"04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.md","localizedDate":"2021년 8월 5일","excerpt":"\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">주의</p>\\n<p>해당 방법은 username/password 방식의 Admin권한의 사용자를 생성하나,<br>\\n보안상 실 구성에는 권장하지 않습니다.</p>\\n</div>\\n<ol>\\n<li>userpass 활성화</li>\\n</ol>\\n<div class=\\"language-bash\\" data-highlighter=\\"prismjs\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"line\\">vault auth <span class=\\"token builtin class-name\\">enable</span> userpass</span>\\n<span class=\\"line\\"></span></code></pre></div>"}');export{V as comp,A as data};