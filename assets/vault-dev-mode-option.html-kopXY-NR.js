import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as e,e as a}from"./app-DwRVeH7t.js";const t={},o=a(`<h1 id="vault-development-mode-options" tabindex="-1"><a class="header-anchor" href="#vault-development-mode-options"><span>Vault Development Mode Options</span></a></h1><p>볼트 개발 모드 서버를 시작하는 기초적인 커맨드와 실행 후 안내 메시지는 다음과 같다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault server <span class="token parameter variable">-dev</span>

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server configuration:

             Api Address: http://127.0.0.1:8200
                     Cgo: disabled
         Cluster Address: https://127.0.0.1:8201
   Environment Variables: <span class="token environment constant">HOME</span>, ITERM_PROFILE, <span class="token punctuation">..</span>.
              Go Version: go1.19.4
              Listener <span class="token number">1</span>: tcp <span class="token punctuation">(</span>addr: <span class="token string">&quot;127.0.0.1:8200&quot;</span>, cluster address: <span class="token string">&quot;127.0.0.1:8201&quot;</span>, max_request_duration: <span class="token string">&quot;1m30s&quot;</span>, max_request_size: <span class="token string">&quot;33554432&quot;</span>, tls: <span class="token string">&quot;disabled&quot;</span><span class="token punctuation">)</span>
               Log Level: info
                   Mlock: supported: false, enabled: <span class="token boolean">false</span>
           Recovery Mode: <span class="token boolean">false</span>
                 Storage: inmem
                 Version: Vault v1.12.3, built <span class="token number">2023</span>-02-02T09:07:27Z
             Version Sha: 209b3dd99fe8ca320340d08c70cff5f620261f9b

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server started<span class="token operator">!</span> Log data will stream <span class="token keyword">in</span> below:

<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>개발 모드에서 제공하는 옵션을 확인하기 위해 <code>vault server -h</code> 커맨드를 실행하면 하단에서 <code>Dev Opstions</code>를 확인할 수 있다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault server <span class="token parameter variable">-h</span>

<span class="token punctuation">..</span>.
Dev Options:

  <span class="token parameter variable">-dev</span>
      Enable development mode. In this mode, Vault runs in-memory and starts
      unsealed. As the name implies, <span class="token keyword">do</span> not run <span class="token string">&quot;dev&quot;</span> mode <span class="token keyword">in</span> production. The
      default is false.

  -dev-listen-address<span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
      Address to <span class="token builtin class-name">bind</span> to <span class="token keyword">in</span> <span class="token string">&quot;dev&quot;</span> mode. The default is <span class="token number">127.0</span>.0.1:8200. This
      can also be specified via the VAULT_DEV_LISTEN_ADDRESS environment
      variable.

  -dev-no-store-token
      Do not persist the dev root token to the token helper <span class="token punctuation">(</span>usually the <span class="token builtin class-name">local</span>
      filesystem<span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token for-or-select variable">use</span> <span class="token keyword">in</span> future requests. The token will only be displayed
      <span class="token keyword">in</span> the <span class="token builtin class-name">command</span> output. The default is false.

  -dev-root-token-id<span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
      Initial root token. This only applies when running <span class="token keyword">in</span> <span class="token string">&quot;dev&quot;</span> mode.
      This can also be specified via the VAULT_DEV_ROOT_TOKEN_ID environment
      variable.

  -dev-tls
      Enable TLS development mode. In this mode, Vault runs in-memory and
      starts unsealed, with a generated TLS CA, certificate and key. As the
      name implies, <span class="token keyword">do</span> not run <span class="token string">&quot;dev-tls&quot;</span> mode <span class="token keyword">in</span> production. The default is
      false.

  -dev-tls-cert-dir<span class="token operator">=</span><span class="token operator">&lt;</span>string<span class="token operator">&gt;</span>
      Directory where generated TLS files are created <span class="token keyword">if</span> <span class="token variable"><span class="token variable">\`</span>-dev-tls<span class="token variable">\`</span></span> is
      specified. If left unset, files are generated <span class="token keyword">in</span> a temporary directory.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>개발 모드로 실행하는 <code>-dev </code> 옵션 외 다른 옵션에 대한 설명은 다음과 같다.</p><ul><li><code>-dev-listen-address</code> : 기본은 <code>127.0.0.1:8200</code>이며, 변경을 원하는 경우 여기 입력한다. <code>VAULT_DEV_LISTEN_ADDRESS</code> 환경변수로도 대체 가능하다.</li><li><code>-dev-no-store-token</code> : 개발 모드시 사용자 디렉토리에 저장되는 <code>.vault-token</code>을 생성하지 않는 경우 <code>true</code>로 설정한다.</li><li><code>-dev-root-token-id</code>: <code>Root Token</code>은 임의의 값으로 생성되는데, 개발 모드 한정으로 사용자가 지정한 문자열로 정의할 수 있다.</li><li><code>-dev-tls</code> : 개발 모드를 위한 임시 TLS 인증서를 적용하고 <code>Api Address</code>를 <code>HTTPS</code>로 설정한다. 실행 후 출력에 <code>VAULT_CACERT</code> 로 임의 생성된 인증서 위치와 설정을 출력한다.</li><li><code>-dev-tls-cert-dir</code>: <code>-dev-tls</code>가 적용된 경우 사용자가 보유한 인증서를 적용하려는 경우 대상 디렉토리를 지정한다.</li></ul><p>다음과 같이 옵션을 적용한 개발 모드 볼트를 실행하면, <code>Api Address</code>가 지정된 주소로 설정되고, <code>.vault-token</code>은 생성되지 않고, <code>Root Token</code>이 <code>root</code>로 설정되고, 생성된 인증서 위치와 커맨드 실행에 필요한 <code>VAULT_CACERT</code>가 출력되는 것을 확인할 수 있다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault server <span class="token parameter variable">-dev</span> -dev-listen-address<span class="token operator">=</span><span class="token number">0.0</span>.0.0:8200 -dev-no-store-token<span class="token operator">=</span>true -dev-root-token-id<span class="token operator">=</span>root -dev-tls

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server configuration:

             Api Address: https://0.0.0.0:8200
                       <span class="token punctuation">..</span>.
              Listener <span class="token number">1</span>: tcp <span class="token punctuation">(</span>addr: <span class="token string">&quot;0.0.0.0:8200&quot;</span>, cluster address: <span class="token string">&quot;0.0.0.0:8201&quot;</span>, max_request_duration: <span class="token string">&quot;1m30s&quot;</span>, max_request_size: <span class="token string">&quot;33554432&quot;</span>, tls: <span class="token string">&quot;enabled&quot;</span><span class="token punctuation">)</span>

<span class="token operator">==</span><span class="token operator">&gt;</span> Vault server started<span class="token operator">!</span> Log data will stream <span class="token keyword">in</span> below:

<span class="token punctuation">..</span>.

You may need to <span class="token builtin class-name">set</span> the following environment variables:

    $ <span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span><span class="token string">&#39;https://0.0.0.0:8200&#39;</span>
    $ <span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_CACERT</span><span class="token operator">=</span><span class="token string">&#39;/var/folders/5r/8y6t82xd1h183tq1l_whv8yw0000gn/T/vault-tls3194599057/vault-ca.pem&#39;</span>

The unseal key and root token are displayed below <span class="token keyword">in</span> <span class="token keyword">case</span> you want to
seal/unseal the Vault or re-authenticate.

Unseal Key: <span class="token assign-left variable">DfFexcExFfbN3jRu7cRuAvMeLMpP9J9yNTgzvvcO8Gw</span><span class="token operator">=</span>
Root Token: root

Development mode should NOT be used <span class="token keyword">in</span> production installations<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),i=[o];function l(d,r){return s(),e("div",null,i)}const v=n(t,[["render",l],["__file","vault-dev-mode-option.html.vue"]]),u=JSON.parse('{"path":"/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html","title":"Vault Development Mode Options","lang":"ko-KR","frontmatter":{"description":"Vault 개발 모드 실행시 옵션 값 설명","tag":["vault","optinos"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault Development Mode Options"}],["meta",{"property":"og:description","content":"Vault 개발 모드 실행시 옵션 값 설명"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"optinos"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault Development Mode Options\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1676188911000,"updatedTime":1695042774000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":3}]},"readingTime":{"minutes":7.45,"words":447},"filePathRelative":"04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.md","localizedDate":"2023년 2월 12일","excerpt":"\\n<p>볼트 개발 모드 서버를 시작하는 기초적인 커맨드와 실행 후 안내 메시지는 다음과 같다.</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>$ vault server <span class=\\"token parameter variable\\">-dev</span>\\n\\n<span class=\\"token operator\\">==</span><span class=\\"token operator\\">&gt;</span> Vault server configuration:\\n\\n             Api Address: http://127.0.0.1:8200\\n                     Cgo: disabled\\n         Cluster Address: https://127.0.0.1:8201\\n   Environment Variables: <span class=\\"token environment constant\\">HOME</span>, ITERM_PROFILE, <span class=\\"token punctuation\\">..</span>.\\n              Go Version: go1.19.4\\n              Listener <span class=\\"token number\\">1</span>: tcp <span class=\\"token punctuation\\">(</span>addr: <span class=\\"token string\\">\\"127.0.0.1:8200\\"</span>, cluster address: <span class=\\"token string\\">\\"127.0.0.1:8201\\"</span>, max_request_duration: <span class=\\"token string\\">\\"1m30s\\"</span>, max_request_size: <span class=\\"token string\\">\\"33554432\\"</span>, tls: <span class=\\"token string\\">\\"disabled\\"</span><span class=\\"token punctuation\\">)</span>\\n               Log Level: info\\n                   Mlock: supported: false, enabled: <span class=\\"token boolean\\">false</span>\\n           Recovery Mode: <span class=\\"token boolean\\">false</span>\\n                 Storage: inmem\\n                 Version: Vault v1.12.3, built <span class=\\"token number\\">2023</span>-02-02T09:07:27Z\\n             Version Sha: 209b3dd99fe8ca320340d08c70cff5f620261f9b\\n\\n<span class=\\"token operator\\">==</span><span class=\\"token operator\\">&gt;</span> Vault server started<span class=\\"token operator\\">!</span> Log data will stream <span class=\\"token keyword\\">in</span> below:\\n\\n<span class=\\"token punctuation\\">..</span>.\\n</code></pre></div>"}');export{v as comp,u as data};
