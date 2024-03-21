import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as t,c as o,b as s,d as i,a as l,e as p}from"./app-DwRVeH7t.js";const r={},c=s("h1",{id:"windows-password-rotation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#windows-password-rotation"},[s("span",null,"Windows Password rotation")])],-1),u={href:"https://scarolan.github.io/painless-password-rotation/#37",target:"_blank",rel:"noopener noreferrer"},d=p(`<p>Kv 추가</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-version</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>systemcreds/ kv
</code></pre></div><p>권한 추가</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault policy <span class="token function">write</span> rotate-windows - <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# Allows hosts to write new passwords
path &quot;systemcreds/data/windows/*&quot; {
  capabilities = [&quot;create&quot;, &quot;update&quot;]
}
# Allow hosts to generate new passphrases
path &quot;gen/passphrase&quot; {
  capabilities = [&quot;update&quot;]
}
# Allow hosts to generate new passwords
path &quot;gen/password&quot; {
  capabilities = [&quot;update&quot;]
}
EOF</span>

$ vault policy <span class="token function">write</span> windowsadmin - <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
# Allows admins to read passwords.
path &quot;systemcreds/*&quot; {
  capabilities = [&quot;list&quot;]
}
path &quot;systemcreds/data/windows/*&quot; {
  capabilities = [&quot;list&quot;, &quot;read&quot;]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>토큰</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault token create <span class="token parameter variable">-policy</span><span class="token operator">=</span>rotate-windows <span class="token parameter variable">-period</span><span class="token operator">=</span>600h
</code></pre></div><p>사용자</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault auth <span class="token builtin class-name">enable</span> userpass 
$ vault <span class="token function">write</span> auth/userpass/users/pwadmin <span class="token assign-left variable">password</span><span class="token operator">=</span>password <span class="token assign-left variable">policies</span><span class="token operator">=</span>windowsadmin
</code></pre></div><p>PowerShell e.g.</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token variable">$VAULT_ADDR</span> = <span class="token variable">$env</span>:USERNAME
<span class="token comment"># Make sure the user exists on the local system.</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">-not</span> <span class="token punctuation">(</span><span class="token function">Get-LocalUser</span> <span class="token variable">$USERNAME</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token string">&#39;$USERNAME does not exist!&#39;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Use TLS</span>
<span class="token comment"># [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12</span>

<span class="token comment"># Import some environment variables.</span>
<span class="token variable">$VAULT_ADDR</span> = <span class="token variable">$env</span>:VAULT_ADDR
<span class="token variable">$VAULT_TOKEN</span> = <span class="token variable">$env</span>:VAULT_TOKEN
<span class="token variable">$HOSTNAME</span> = <span class="token variable">$env</span>:computername

<span class="token comment"># Renew our token before we do anything else.</span>
<span class="token function">Invoke-RestMethod</span> <span class="token operator">-</span>Headers @<span class="token punctuation">{</span><span class="token string">&quot;X-Vault-Token&quot;</span> = $<span class="token punctuation">{</span>VAULT_TOKEN<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span>Method POST <span class="token operator">-</span>Uri $<span class="token punctuation">{</span>VAULT_ADDR<span class="token punctuation">}</span><span class="token operator">/</span>v1/auth/token/renew-self
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">-Not</span> $?<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
   <span class="token function">Write-Output</span> <span class="token string">&quot;Error renewing Vault token lease.&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment"># Fetch a new passphrase from Vault. Adjust the options to fit your requirements.</span>
<span class="token comment">#$NEWPASS = (Invoke-RestMethod -Headers @{&quot;X-Vault-Token&quot; = \${VAULT_TOKEN}} -Method POST -Body &quot;{\`&quot;words\`&quot;:\`&quot;4\`&quot;,\`&quot;separator\`&quot;:\`&quot;-\`&quot;}&quot; -Uri \${VAULT_ADDR}/v1/gen/passphrase).data.value</span>

<span class="token comment"># Fetch a new password from Vault. Adjust the options to fit your requirements.</span>
<span class="token variable">$NEWPASS</span> = c:\\hashicorp\\nomad\\nomad operator keygen

<span class="token comment"># Convert into a SecureString</span>
<span class="token variable">$SECUREPASS</span> = <span class="token function">ConvertTo-SecureString</span> <span class="token variable">$NEWPASS</span> <span class="token operator">-</span>AsPlainText <span class="token operator">-</span>Force

<span class="token comment"># Create the JSON payload to write to Vault&#39;s K/V store. Keep the last 12 versions of this credential.</span>
<span class="token variable">$JSON</span>=<span class="token string">&quot;{ \`&quot;options\`&quot;: { \`&quot;max_versions\`&quot;: 12 }, \`&quot;data\`&quot;: { \`&quot;<span class="token variable">$USERNAME</span>\`&quot;: \`&quot;<span class="token variable">$NEWPASS</span>\`&quot; } }&quot;</span>

<span class="token comment"># First commit the new password to vault, then change it locally.</span>
<span class="token function">Invoke-RestMethod</span> <span class="token operator">-</span>Headers @<span class="token punctuation">{</span><span class="token string">&quot;X-Vault-Token&quot;</span> = $<span class="token punctuation">{</span>VAULT_TOKEN<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token operator">-</span>Method POST <span class="token operator">-</span>Body <span class="token variable">$JSON</span> <span class="token operator">-</span>Uri $<span class="token punctuation">{</span>VAULT_ADDR<span class="token punctuation">}</span><span class="token operator">/</span>v1/systemcreds/<span class="token keyword">data</span><span class="token operator">/</span>windows/$<span class="token punctuation">{</span>HOSTNAME<span class="token punctuation">}</span><span class="token operator">/</span>$<span class="token punctuation">{</span>USERNAME<span class="token punctuation">}</span>_creds
<span class="token keyword">if</span><span class="token punctuation">(</span>$?<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token function">Write-Output</span> <span class="token string">&quot;Vault updated with new password.&quot;</span>
   <span class="token variable">$UserAccount</span> = <span class="token function">Get-LocalUser</span> <span class="token operator">-</span>name <span class="token variable">$USERNAME</span>
   <span class="token variable">$UserAccount</span> <span class="token punctuation">|</span> <span class="token function">Set-LocalUser</span> <span class="token operator">-</span>Password <span class="token variable">$SECUREPASS</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>$?<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token function">Write-Output</span> <span class="token string">&quot;\${USERNAME}&#39;s password was stored in Vault and updated locally.&quot;</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">else</span> <span class="token punctuation">{</span>
       <span class="token function">Write-Output</span> <span class="token string">&quot;Error: \${USERNAME}&#39;s password was stored in Vault but *not* updated locally.&quot;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">Write-Output</span> <span class="token string">&quot;Error saving new password to Vault. Local password will remain unchanged.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Job e.g.</p><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>job <span class="token string-literal"><span class="token string">&quot;pw-update&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;hashistack&quot;</span></span><span class="token punctuation">]</span>
  type        <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;batch&quot;</span></span>

  constraint <span class="token punctuation">{</span>
    attribute <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;\${meta.target}&quot;</span></span>
    value     <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;windows2016&quot;</span></span>
  <span class="token punctuation">}</span>

  periodic <span class="token punctuation">{</span>
    cron             <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;0 */5 * * * * *&quot;</span></span>
    prohibit_overlap <span class="token operator">=</span> <span class="token boolean">true</span>
    time_zone        <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;Asia/Seoul&quot;</span></span>
  <span class="token punctuation">}</span>

  group <span class="token string-literal"><span class="token string">&quot;pw-update&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span>
    task <span class="token string-literal"><span class="token string">&quot;powershell&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;raw_exec&quot;</span></span>
      config <span class="token punctuation">{</span>
        command <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;powershell.exe&quot;</span></span>
        args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;-noprofile&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;-executionpolicy&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;bypass&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;-file&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;local/pw-rotate.ps1&quot;</span></span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
      env <span class="token punctuation">{</span>
        <span class="token constant">VAULT_TOKEN</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;s.EZFCRJhNmjSc9U5b4EX5gwyy&quot;</span></span>
        <span class="token constant">VAULT_ADDR</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;http://172.28.128.21:8200&quot;</span></span>
        <span class="token constant">USERNAME</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;testuser&quot;</span></span>
      <span class="token punctuation">}</span>
      template <span class="token punctuation">{</span>
data <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOF</span></span><span class="token string">
$USERNAME = $env:USERNAME
# Make sure the user exists on the local system.
if (-not (Get-LocalUser $USERNAME)) {
    throw &#39;$USERNAME does not exist!&#39;
}

# Use TLS
# [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

# Import some environment variables.
$VAULT_ADDR = $env:VAULT_ADDR
$VAULT_TOKEN = $env:VAULT_TOKEN
$HOSTNAME = $env:computername

# Renew our token before we do anything else.
Invoke-RestMethod -Headers @{&quot;X-Vault-Token&quot; = \${VAULT_TOKEN}} -Method POST -Uri \${VAULT_ADDR}/v1/auth/token/renew-self
if(-Not $?)
{
   Write-Output &quot;Error renewing Vault token lease.&quot;
}

# Fetch a new password from Vault. Adjust the options to fit your requirements.
$NEWPASS = c:\\hashicorp\\nomad\\nomad operator keygen

# Convert into a SecureString
$SECUREPASS = ConvertTo-SecureString $NEWPASS -AsPlainText -Force

# Create the JSON payload to write to Vault&#39;s K/V store. Keep the last 12 versions of this credential.
$JSON=&quot;{ \`&quot;options\`&quot;: { \`&quot;max_versions\`&quot;: 12 }, \`&quot;data\`&quot;: { \`&quot;$USERNAME\`&quot;: \`&quot;$NEWPASS\`&quot; } }&quot;

# First commit the new password to vault, then change it locally.
Invoke-RestMethod -Headers @{&quot;X-Vault-Token&quot; = \${VAULT_TOKEN}} -Method POST -Body $JSON -Uri \${VAULT_ADDR}/v1/systemcreds/data/windows/\${HOSTNAME}/\${USERNAME}_creds
if($?) {
   Write-Output &quot;Vault updated with new password.&quot;
   $UserAccount = Get-LocalUser -name $USERNAME
   $UserAccount | Set-LocalUser -Password $SECUREPASS
   if($?) {
       Write-Output &quot;\${USERNAME}&#39;s password was stored in Vault and updated locally.&quot;
   }
   else {
       Write-Output &quot;Error: \${USERNAME}&#39;s password was stored in Vault but *not* updated locally.&quot;
   }
}
else {
    Write-Output &quot;Error saving new password to Vault. Local password will remain unchanged.&quot;
}
</span><span class="token delimiter"><span class="token symbol">EOF</span></span></span>
        destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/pw-rotate.ps1&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function v(m,k){const n=e("ExternalLinkIcon");return t(),o("div",null,[c,s("blockquote",null,[s("p",null,[s("a",u,[i("https://scarolan.github.io/painless-password-rotation/#37"),l(n)])])]),d])}const g=a(r,[["render",v],["__file","windows-password-rotation.html.vue"]]),h=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/windows-password-rotation.html","title":"Windows Password rotation","lang":"ko-KR","frontmatter":{"description":"Vault를 활용하여 Windows Password 저장","tag":["vault","windows","nomad","password"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/windows-password-rotation.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Windows Password rotation"}],["meta",{"property":"og:description","content":"Vault를 활용하여 Windows Password 저장"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"windows"}],["meta",{"property":"article:tag","content":"nomad"}],["meta",{"property":"article:tag","content":"password"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Windows Password rotation\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1641009317000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":10.6,"words":636},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/windows-password-rotation.md","localizedDate":"2022년 1월 1일","excerpt":"\\n<blockquote>\\n<p><a href=\\"https://scarolan.github.io/painless-password-rotation/#37\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://scarolan.github.io/painless-password-rotation/#37</a></p>\\n</blockquote>\\n<p>Kv 추가</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ vault secrets <span class=\\"token builtin class-name\\">enable</span> <span class=\\"token parameter variable\\">-version</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span> <span class=\\"token parameter variable\\">-path</span><span class=\\"token operator\\">=</span>systemcreds/ kv\\n</code></pre></div>"}');export{g as comp,h as data};
