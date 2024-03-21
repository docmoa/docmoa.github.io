import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as u,a as l,w as s,e as i,d as a,b as e}from"./app-DwRVeH7t.js";const d={},h=i(`<h1 id="vault-superuser-생성" tabindex="-1"><a class="header-anchor" href="#vault-superuser-생성"><span>Vault SuperUser 생성</span></a></h1><div class="hint-container caution"><p class="hint-container-title">주의</p><p>해당 방법은 username/password 방식의 Admin권한의 사용자를 생성하나,<br> 보안상 실 구성에는 권장하지 않습니다.</p></div><ol><li>userpass 활성화</li></ol><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth <span class="token builtin class-name">enable</span> userpass
</code></pre></div><ol start="2"><li>권한 추가 (e.g. super-user)</li></ol>`,5),k=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("vault policy "),e("span",{class:"token function"},"write"),a(" super-user - "),e("span",{class:"token operator"},"<<"),a(),e("span",{class:"token string"},`EOF
path "*" {
capabilities = ["create", "read", "update", "delete", "list", "sudo"]
}
EOF`),a(`
`)])])],-1),g=e("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[e("pre",{class:"language-powershell"},[e("code",null,[e("span",{class:"token variable"},"$policy"),a(" = @"),e("span",{class:"token string"},`"
path "`),e("span",{class:"token operator"},"*"),e("span",{class:"token string"},`" {
  capabilities = ["`),a("create"),e("span",{class:"token string"},'", "'),a("read"),e("span",{class:"token string"},'", "'),a("update"),e("span",{class:"token string"},'", "'),a("delete"),e("span",{class:"token string"},'", "'),a("list"),e("span",{class:"token string"},'", "'),a("sudo"),e("span",{class:"token string"},`"]
}
"`),a(`@

vault policy `),e("span",{class:"token function"},"write"),a(" super-user "),e("span",{class:"token operator"},"-"),a(" << "),e("span",{class:"token variable"},"$policy"),a(`
`)])])],-1),m=i(`<ol start="3"><li>계정 생성</li></ol><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/userpass/users/admin <span class="token assign-left variable">password</span><span class="token operator">=</span>password <span class="token assign-left variable">policies</span><span class="token operator">=</span>super-user
</code></pre></div><ol start="4"><li>로그인 또는 토큰 생성</li></ol>`,3),v=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("vault login "),e("span",{class:"token parameter variable"},"-method"),a(" userpass "),e("span",{class:"token assign-left variable"},"username"),e("span",{class:"token operator"},"="),a("admin "),e("span",{class:"token assign-left variable"},"password"),e("span",{class:"token operator"},"="),a(`password
Success`),e("span",{class:"token operator"},"!"),a(` You are now authenticated. The token information displayed below
is already stored `),e("span",{class:"token keyword"},"in"),a(" the token helper. You "),e("span",{class:"token keyword"},"do"),a(" NOT need to run "),e("span",{class:"token string"},'"vault login"'),a(`
again. Future Vault requests will automatically use this token.

Key                    Value
---                    -----
token                  s.vIRSNJYiVMtRFuOwq4pKbYGK
token_accessor         EQz974TUJCy0iV7ALZ8xzGe4
token_duration         768h
token_renewable        `),e("span",{class:"token boolean"},"true"),a(`
token_policies         `),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"default"'),a(),e("span",{class:"token string"},'"super-user"'),e("span",{class:"token punctuation"},"]"),a(`
identity_policies      `),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),a(`
policies               `),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"default"'),a(),e("span",{class:"token string"},'"super-user"'),e("span",{class:"token punctuation"},"]"),a(`
token_meta_username    admin
`)])])],-1),b=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[a("vault token create "),e("span",{class:"token parameter variable"},"-policy"),e("span",{class:"token operator"},"="),a(`super-user
Key                  Value
---                  -----
token                s.DgfYH1dUBxAbBDuPM5U2kkym
token_accessor       6GJDO2KH4yPK0jStQw8gJ63r
token_duration       768h
token_renewable      `),e("span",{class:"token boolean"},"true"),a(`
token_policies       `),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"default"'),a(),e("span",{class:"token string"},'"super-user"'),e("span",{class:"token punctuation"},"]"),a(`
identity_policies    `),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),a(`
policies             `),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},'"default"'),a(),e("span",{class:"token string"},'"super-user"'),e("span",{class:"token punctuation"},"]"),a(`
`)])])],-1);function _(w,y){const o=p("CodeTabs");return c(),u("div",null,[h,l(o,{id:"23",data:[{id:"Linux/MacOS"},{id:"Windows Powershell"}],"tab-id":"shell"},{title0:s(({value:t,isActive:n})=>[a("Linux/MacOS")]),title1:s(({value:t,isActive:n})=>[a("Windows Powershell")]),tab0:s(({value:t,isActive:n})=>[k]),tab1:s(({value:t,isActive:n})=>[g]),_:1}),m,l(o,{id:"46",data:[{id:"Login"},{id:"token"}],"tab-id":"shell"},{title0:s(({value:t,isActive:n})=>[a("Login")]),title1:s(({value:t,isActive:n})=>[a("token")]),tab0:s(({value:t,isActive:n})=>[v]),tab1:s(({value:t,isActive:n})=>[b]),_:1})])}const V=r(d,[["render",_],["__file","super-user-create.html.vue"]]),A=JSON.parse('{"path":"/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html","title":"Vault SuperUser 생성","lang":"ko-KR","frontmatter":{"description":"Vault Super user 만들기","tag":["vault auth"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault SuperUser 생성"}],["meta",{"property":"og:description","content":"Vault Super user 만들기"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-10-25T07:22:33.000Z"}],["meta",{"property":"article:tag","content":"vault auth"}],["meta",{"property":"article:modified_time","content":"2023-10-25T07:22:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault SuperUser 생성\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-25T07:22:33.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1641009317000,"updatedTime":1698218553000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":2},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":2}]},"readingTime":{"minutes":3.2,"words":192},"filePathRelative":"04-HashiCorp/06-Vault/03-Auth_Method/super-user-create.md","localizedDate":"2022년 1월 1일","excerpt":"\\n<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">주의</p>\\n<p>해당 방법은 username/password 방식의 Admin권한의 사용자를 생성하나,<br>\\n보안상 실 구성에는 권장하지 않습니다.</p>\\n</div>\\n<ol>\\n<li>userpass 활성화</li>\\n</ol>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>vault auth <span class=\\"token builtin class-name\\">enable</span> userpass\\n</code></pre></div>"}');export{V as comp,A as data};
