import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as p,c as i,b as n,d as s,a as e,e as t}from"./app-DwRVeH7t.js";const c={},r=n("h1",{id:"vault-nomad-integration-test",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vault-nomad-integration-test"},[n("span",null,"Vault & Nomad Integration Test")])],-1),u=n("p",null,"Dev Mode 를 활용한 테스트",-1),d=n("li",null,[n("p",null,[n("strong",null,"목적"),s(" : Spring boot 기반 애플리케이션에서 Nomad 를 이용하여 Vault의 dynamic secret 을 최소한의 코드변경으로 사용할 수 있는 워크 플로우 구성")])],-1),v=n("strong",null,"코드 기반 인경우의 예제",-1),k={href:"https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g",target:"_blank",rel:"noopener noreferrer"},m=n("strong",null,"Vault-Nomad Integration",-1),b={href:"https://www.nomadproject.io/docs/integrations/vault-integration",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"Version",-1),h={href:"https://releases.hashicorp.com",target:"_blank",rel:"noopener noreferrer"},q=n("ul",null,[n("li",null,"Nomad v1.3.1 (2b054e38e91af964d1235faa98c286ca3f527e56)"),n("li",null,"Vault v1.10.3 (af866591ee60485f05d6e32dd63dde93df686dfb)")],-1),_={href:"https://www.vaultproject.io/docs/platform/k8s/csi",target:"_blank",rel:"noopener noreferrer"},f=n("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OwUuPw2dcQQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),w=t(`<h2 id="_1-vault" tabindex="-1"><a class="header-anchor" href="#_1-vault"><span>1. Vault</span></a></h2><h3 id="_1-1-vault-dev-run" tabindex="-1"><a class="header-anchor" href="#_1-1-vault-dev-run"><span>1.1 Vault Dev Run</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault server <span class="token parameter variable">-dev</span> -dev-root-token-id<span class="token operator">=</span>root
</code></pre></div><h3 id="_1-2-vault-setup" tabindex="-1"><a class="header-anchor" href="#_1-2-vault-setup"><span>1.2 Vault Setup</span></a></h3><blockquote><p>Another terminal</p></blockquote><h4 id="vault-env" tabindex="-1"><a class="header-anchor" href="#vault-env"><span>Vault Env</span></a></h4><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_ADDR</span><span class="token operator">=</span>http://127.0.0.1:8200
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VAULT_TOKEN</span><span class="token operator">=</span>root
<span class="token builtin class-name">export</span> <span class="token assign-left variable">NOMAD_POLICY</span><span class="token operator">=</span>nomad-server
</code></pre></div><h4 id="vault-policy-for-nomad" tabindex="-1"><a class="header-anchor" href="#vault-policy-for-nomad"><span>Vault Policy for Nomad</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> vault policy <span class="token function">write</span> <span class="token variable">$NOMAD_POLICY</span> -</span>
# Allow creating tokens under &quot;nomad-cluster&quot; token role. The token role name
# should be updated if &quot;nomad-cluster&quot; is not used.
path &quot;auth/token/create/nomad-cluster&quot; {
  capabilities = [&quot;update&quot;]
}

# Allow looking up &quot;nomad-cluster&quot; token role. The token role name should be
# updated if &quot;nomad-cluster&quot; is not used.
path &quot;auth/token/roles/nomad-cluster&quot; {
  capabilities = [&quot;read&quot;]
}

# Allow looking up the token passed to Nomad to validate # the token has the
# proper capabilities. This is provided by the &quot;default&quot; policy.
path &quot;auth/token/lookup-self&quot; {
  capabilities = [&quot;read&quot;]
}

# Allow looking up incoming tokens to validate they have permissions to access
# the tokens they are requesting. This is only required if
# <span class="token variable"><span class="token variable">\`</span>allow_unauthenticated<span class="token variable">\`</span></span> is set to false.
path &quot;auth/token/lookup&quot; {
  capabilities = [&quot;update&quot;]
}

# Allow revoking tokens that should no longer exist. This allows revoking
# tokens for dead tasks.
path &quot;auth/token/revoke-accessor&quot; {
  capabilities = [&quot;update&quot;]
}

# Allow checking the capabilities of our own token. This is used to validate the
# token upon startup.
path &quot;sys/capabilities-self&quot; {
  capabilities = [&quot;update&quot;]
}

# Allow our own token to be renewed.
path &quot;auth/token/renew-self&quot; {
  capabilities = [&quot;update&quot;]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vault-policy-for-aws-db" tabindex="-1"><a class="header-anchor" href="#vault-policy-for-aws-db"><span>Vault Policy for AWS &amp; DB</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> vault policy <span class="token function">write</span> aws_policy -</span>
path &quot;aws/sts/s3&quot; {
  capabilities = [&quot;read&quot;,&quot;update&quot;]
}
EOF</span>

<span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> vault policy <span class="token function">write</span> db_policy -</span>
path &quot;db/creds/mysql&quot; {
  capabilities = [&quot;read&quot;,&quot;update&quot;]
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="create-token-role" tabindex="-1"><a class="header-anchor" href="#create-token-role"><span>Create Token Role</span></a></h4><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/token/roles/nomad-cluster <span class="token assign-left variable">allowed_policies</span><span class="token operator">=</span><span class="token string">&quot;aws_policy,db_policy&quot;</span> <span class="token assign-left variable">disallowed_policies</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$NOMAD_POLICY</span>&quot;</span> <span class="token assign-left variable">token_explicit_max_ttl</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">orphan</span><span class="token operator">=</span>true <span class="token assign-left variable">token_period</span><span class="token operator">=</span><span class="token string">&quot;259200&quot;</span> <span class="token assign-left variable">renewable</span><span class="token operator">=</span>true
</code></pre></div><h4 id="create-token" tabindex="-1"><a class="header-anchor" href="#create-token"><span>Create Token</span></a></h4><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault token create <span class="token parameter variable">-field</span> token <span class="token parameter variable">-policy</span> <span class="token variable">$NOMAD_POLICY</span> <span class="token parameter variable">-period</span> 72h <span class="token parameter variable">-orphan</span> <span class="token operator">&gt;</span> /tmp/token.txt
<span class="token comment"># vault token create -field token -role nomad-cluster -period 72h -orphan &gt; /tmp/token.txt</span>
</code></pre></div><h2 id="_2-nomad" tabindex="-1"><a class="header-anchor" href="#_2-nomad"><span>2. Nomad</span></a></h2><ul><li><p>Docker 이미지 실행을 위해서는 Nomad 실행 환경에 Docker가 설치되어야 합니다.</p></li><li><p>Java 실행을 위해서는 Nomad 실행 환경에 Java가 설치되어야 합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> version
Client:
 Version:           <span class="token number">20.10</span>.9
 API version:       <span class="token number">1.41</span>
 <span class="token punctuation">..</span>.

Server:
 Engine:
  Version:          <span class="token number">20.10</span>.14
  API version:      <span class="token number">1.41</span> <span class="token punctuation">(</span>minimum version <span class="token number">1.12</span><span class="token punctuation">)</span>
  <span class="token punctuation">..</span>.
  
$ <span class="token function">java</span> <span class="token parameter variable">-version</span>
openjdk version <span class="token string">&quot;11.0.14.1&quot;</span> <span class="token number">2022</span>-02-08
OpenJDK Runtime Environment Temurin-11.0.14.1+1 <span class="token punctuation">(</span>build <span class="token number">11.0</span>.14.1+1<span class="token punctuation">)</span>
OpenJDK <span class="token number">64</span>-Bit Server VM Temurin-11.0.14.1+1 <span class="token punctuation">(</span>build <span class="token number">11.0</span>.14.1+1, mixed mode<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_2-1-nomad-dev-run-vault-integrated" tabindex="-1"><a class="header-anchor" href="#_2-1-nomad-dev-run-vault-integrated"><span>2.1 Nomad Dev Run (Vault Integrated)</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nomad agent <span class="token parameter variable">-dev</span> -vault-enabled<span class="token operator">=</span>true -vault-address<span class="token operator">=</span>http://127.0.0.1:8200 -vault-token<span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /tmp/token.txt<span class="token variable">)</span></span> -vault-tls-skip-verify<span class="token operator">=</span>true -vault-create-from-role<span class="token operator">=</span>nomad-cluster
</code></pre></div><h3 id="_2-2-nomad-env" tabindex="-1"><a class="header-anchor" href="#_2-2-nomad-env"><span>2.2. Nomad Env</span></a></h3><blockquote><p>Another terminal</p></blockquote><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NOMAD_ADDR</span><span class="token operator">=</span>http://127.0.0.1:4646
</code></pre></div><h3 id="_2-2-mysql" tabindex="-1"><a class="header-anchor" href="#_2-2-mysql"><span>2.2 Mysql</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">|</span> nomad job run -</span>
job &quot;mysql&quot; {
  datacenters = [&quot;dc1&quot;]

  type = &quot;service&quot;

  group &quot;mysql-group&quot; {
    count = 1

    network {
	    port &quot;db&quot; {
	      to = 3306
      	static = 3306
      }
    }

    task &quot;mysql-task&quot; {
      driver = &quot;docker&quot;

      config {
        image = &quot;mysql:5&quot;
        ports = [&quot;db&quot;]
      }
      
      env {
        MYSQL_ROOT_PASSWORD = &quot;rooooot&quot;
      }
    }
  }
}
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-dynamic-secret" tabindex="-1"><a class="header-anchor" href="#_3-dynamic-secret"><span>3. Dynamic Secret</span></a></h2><h3 id="_3-1-aws" tabindex="-1"><a class="header-anchor" href="#_3-1-aws"><span>3.1 AWS</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">AWS_ACCESS_KEY</span><span class="token operator">=</span>AKIAU3NXDWRUFZSXYRNX
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">AWS_SECRET_KEY</span><span class="token operator">=</span>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">AWS_REGION</span><span class="token operator">=</span>ap-northeast-2

$ vault secrets <span class="token builtin class-name">enable</span> aws

$ vault <span class="token function">write</span> aws/config/root <span class="token punctuation">\\</span>
    <span class="token assign-left variable">access_key</span><span class="token operator">=</span><span class="token variable">$AWS_ACCESS_KEY</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">secret_key</span><span class="token operator">=</span><span class="token variable">$AWS_SECRET_KEY</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">region</span><span class="token operator">=</span><span class="token variable">$AWS_REGION</span>

$ vault <span class="token function">write</span> aws/roles/s3 <span class="token punctuation">\\</span>
    <span class="token assign-left variable">credential_type</span><span class="token operator">=</span>federation_token <span class="token punctuation">\\</span>
    <span class="token assign-left variable">policy_document</span><span class="token operator">=</span>-<span class="token operator">&lt;&lt;</span><span class="token string">EOF
{
  &quot;Version&quot;: &quot;2012-10-17&quot;,
  &quot;Statement&quot;: [
    {
      &quot;Effect&quot;: &quot;Allow&quot;,
      &quot;Action&quot;: [
     		&quot;s3:PutObject&quot;,
      	&quot;s3:PutObjectAcl&quot;
      ],
      &quot;Resource&quot;: &quot;*&quot;
    }
  ]
}
EOF</span>

$ vault <span class="token function">write</span> aws/sts/s3 <span class="token assign-left variable">ttl</span><span class="token operator">=</span>15m

Key                Value
---                -----
lease_id           aws/sts/s3/lasSraK69Ii19tUIzI9yXLnR
lease_duration     14m59s
lease_renewable    <span class="token boolean">false</span>
access_key         ASIAU3NXDWRUOZPCWIGY
secret_key         FXWXK2xHlBbsHhepuZN2yuN5C8kd7qi2PKyMVf+t
security_token     IQoJb3JpZ2luX2VjEND//////////wEaDmFwLW5vcnRoZWFzdC0y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-db" tabindex="-1"><a class="header-anchor" href="#_3-2-db"><span>3.2 DB</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>db database

$ vault <span class="token function">write</span> db/config/my-mysql-database <span class="token punctuation">\\</span>
    <span class="token assign-left variable">plugin_name</span><span class="token operator">=</span>mysql-database-plugin <span class="token punctuation">\\</span>
    <span class="token assign-left variable">connection_url</span><span class="token operator">=</span><span class="token string">&quot;{{username}}:{{password}}@tcp(127.0.0.1:3306)/&quot;</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">allowed_roles</span><span class="token operator">=</span><span class="token string">&quot;mysql&quot;</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">username</span><span class="token operator">=</span><span class="token string">&quot;root&quot;</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;rooooot&quot;</span>

$ vault <span class="token function">write</span> db/roles/mysql <span class="token punctuation">\\</span>
    <span class="token assign-left variable">db_name</span><span class="token operator">=</span>my-mysql-database <span class="token punctuation">\\</span>
    <span class="token assign-left variable">creation_statements</span><span class="token operator">=</span><span class="token string">&quot;CREATE USER &#39;{{name}}&#39;@&#39;%&#39; IDENTIFIED BY &#39;{{password}}&#39;;GRANT SELECT ON *.* TO &#39;{{name}}&#39;@&#39;%&#39;;&quot;</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">default_ttl</span><span class="token operator">=</span><span class="token string">&quot;5s&quot;</span> <span class="token punctuation">\\</span>
    <span class="token assign-left variable">max_ttl</span><span class="token operator">=</span><span class="token string">&quot;10s&quot;</span>

$ vault <span class="token builtin class-name">read</span> db/creds/mysql

Key                Value
---                -----
lease_id           db/creds/mysql/VuufZZP1NO9thZj4pPnNtPdU
lease_duration     10s
lease_renewable    <span class="token boolean">true</span>
password           WkFTPwWPrCe3yeWQoS--
username           v-token-mysql-Cy7p0vP6uOYnW7csKz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-sample-spring-boot" tabindex="-1"><a class="header-anchor" href="#_4-sample-spring-boot"><span>4. Sample Spring-boot</span></a></h2>`,30),y={href:"https://start.spring.io/",target:"_blank",rel:"noopener noreferrer"},S=t(`<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/Spring Initializr 2022-05-27 22-22-15.png" alt="Spring Initializr 2022-05-27 22-22-15" tabindex="0" loading="lazy"><figcaption>Spring Initializr 2022-05-27 22-22-15</figcaption></figure><ul><li>Spring Web</li></ul><details class="hint-container details"><summary>CLI</summary><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> https://start.spring.io/starter.zip <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token assign-left variable">type</span><span class="token operator">=</span>maven-build
    <span class="token parameter variable">-d</span> <span class="token assign-left variable">dependencies</span><span class="token operator">=</span>web <span class="token punctuation">\\</span>
    <span class="token parameter variable">-d</span> <span class="token assign-left variable">javaVersion</span><span class="token operator">=</span><span class="token number">11</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">-o</span> demo.zip
</code></pre></div></details><h3 id="_4-1-demo-app" tabindex="-1"><a class="header-anchor" href="#_4-1-demo-app"><span>4.1 demo app</span></a></h3><p><code>demo&gt;src&gt;main&gt;resources&gt;application.yml</code></p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">dynamic</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DYNAMIC_PROPERTIES_PATH<span class="token punctuation">:</span>/tmp/dynamic.properties<span class="token punctuation">}</span>
<span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>NOMAD_HOST_PORT_http<span class="token punctuation">:</span><span class="token number">8080</span><span class="token punctuation">}</span>
</code></pre></div><p><code>demo&gt;src&gt;main&gt;java&gt;com&gt;example&gt;demo&gt;DemoApplication.java</code></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>example<span class="token punctuation">.</span>demo</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableScheduling</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scheduled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMethod</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>file<span class="token punctuation">.</span></span><span class="token class-name">Files</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>file<span class="token punctuation">.</span></span><span class="token class-name">Paths</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableScheduling</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">FILE_PATH</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${dynamic.path}&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token constant">FILE_PATH</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedRate<span class="token operator">=</span><span class="token number">1000</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">filecheck</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> str <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">readAllLines</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">FILE_PATH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span> path <span class="token operator">=</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> str <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">readAllLines</span><span class="token punctuation">(</span><span class="token class-name">Paths</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token constant">FILE_PATH</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token string">&quot;&lt;h1&gt;AWS&lt;/h1&gt;&quot;</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h2&gt;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h2&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h2&gt;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h2&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h2&gt;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h2&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;br&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h1&gt;MySQL&lt;/h1&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h2&gt;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h2&gt;&quot;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;h2&gt;&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/h2&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-set-dummy-properties-test" tabindex="-1"><a class="header-anchor" href="#_4-2-set-dummy-properties-test"><span>4.2 Set dummy properties &amp; Test</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /tmp/dynamic.properties
<span class="token assign-left variable">aws_access_key</span><span class="token operator">=</span>abc
<span class="token assign-left variable">aws_secret_key</span><span class="token operator">=</span>def
<span class="token assign-left variable">aws_secret_token</span><span class="token operator">=</span>ghi
<span class="token assign-left variable">db_username</span><span class="token operator">=</span>user
<span class="token assign-left variable">db_password</span><span class="token operator">=</span>pw
EOF
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ mvn spring-boot:run
<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>aws_access_key<span class="token operator">=</span>abc, <span class="token assign-left variable">aws_secret_key</span><span class="token operator">=</span>def, <span class="token assign-left variable">aws_secret_token</span><span class="token operator">=</span>ghi, <span class="token assign-left variable">db_username</span><span class="token operator">=</span>user, <span class="token assign-left variable">db_password</span><span class="token operator">=</span>pw<span class="token punctuation">]</span>
</code></pre></div>`,11),x={href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"},A=t(`<figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20220527225739417.png" alt="image-20220527225739417" tabindex="0" loading="lazy"><figcaption>image-20220527225739417</figcaption></figure><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> /tmp/dynamic.properties
<span class="token assign-left variable">aws_access_key</span><span class="token operator">=</span><span class="token number">123</span>
<span class="token assign-left variable">aws_secret_key</span><span class="token operator">=</span><span class="token number">456</span>
<span class="token assign-left variable">aws_secret_token</span><span class="token operator">=</span><span class="token number">789</span>
<span class="token assign-left variable">db_username</span><span class="token operator">=</span>user1
<span class="token assign-left variable">db_password</span><span class="token operator">=</span>pw2
EOF
</code></pre></div><figure><img src="https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20220527225811346.png" alt="image-20220527225811346" tabindex="0" loading="lazy"><figcaption>image-20220527225811346</figcaption></figure><h3 id="_4-3-build-jar" tabindex="-1"><a class="header-anchor" href="#_4-3-build-jar"><span>4.3 build jar</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ mvn <span class="token function">install</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">[</span>INFO<span class="token punctuation">]</span> Building jar: /Users/gs/Downloads/demo/target/demo-0.0.1-SNAPSHOT.jar
<span class="token punctuation">..</span>.
</code></pre></div><h3 id="_4-4-build-container" tabindex="-1"><a class="header-anchor" href="#_4-4-build-container"><span>4.4 build container</span></a></h3><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span>EOF<span class="token operator">&gt;</span> Dockerfile
FROM amazoncorretto:11
ARG <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>target/demo-0.0.1-SNAPSHOT.jar
COPY <span class="token variable">\${JAR_FILE}</span> app.jar
ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
CMD <span class="token function">java</span> <span class="token variable">$JAVA_OPTS</span> <span class="token parameter variable">-server</span> <span class="token parameter variable">-jar</span> app.jar
EOF
</code></pre></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ <span class="token function">docker</span> build <span class="token parameter variable">-t</span> java/vault <span class="token builtin class-name">.</span>
Step <span class="token number">1</span>/5 <span class="token builtin class-name">:</span> FROM amazoncorretto:11
<span class="token number">11</span>: Pulling from library/amazoncorretto
8de5b65bd171: Pull complete 
6d24904f7237: Pull complete 
Digest: sha256:34810d3d08456f7e658747d47aec5afc052fcfb2dcadf25db80a51f63086532d
Status: Downloaded newer image <span class="token keyword">for</span> amazoncorretto:11
 ---<span class="token operator">&gt;</span> 299f114f2f6b
Step <span class="token number">2</span>/5 <span class="token builtin class-name">:</span> ARG <span class="token assign-left variable">JAR_FILE</span><span class="token operator">=</span>target/demo-0.0.1-SNAPSHOT.jar
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 5a0662c5b4a5
Removing intermediate container 5a0662c5b4a5
 ---<span class="token operator">&gt;</span> 608c348e23ac
Step <span class="token number">3</span>/5 <span class="token builtin class-name">:</span> COPY <span class="token variable">\${JAR_FILE}</span> app.jar
 ---<span class="token operator">&gt;</span> 36d147070bd3
Step <span class="token number">4</span>/5 <span class="token builtin class-name">:</span> ENV <span class="token assign-left variable">JAVA_OPTS</span><span class="token operator">=</span><span class="token string">&quot;&quot;</span>
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> 58cb66bb0eab
Removing intermediate container 58cb66bb0eab
 ---<span class="token operator">&gt;</span> f92b3ffeac4d
Step <span class="token number">5</span>/5 <span class="token builtin class-name">:</span> CMD <span class="token function">java</span> <span class="token variable">$JAVA_OPTS</span> <span class="token parameter variable">-server</span> <span class="token parameter variable">-jar</span> app.jar
 ---<span class="token operator">&gt;</span> Running <span class="token keyword">in</span> a5d4d1071697
Removing intermediate container a5d4d1071697
 ---<span class="token operator">&gt;</span> 67ae9829dc07
Successfully built 67ae9829dc07
Successfully tagged java/vault:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-nomad-job-with-dynamic-secret" tabindex="-1"><a class="header-anchor" href="#_5-nomad-job-with-dynamic-secret"><span>5. Nomad Job with dynamic secret</span></a></h2><ul><li><p>Nomad Job 명세의 <code>template</code>을 활용하여 Nomad와 연계된 Vault의 시크릿을 작성 할 수 있음</p><ul><li><p>File (파일)</p></li><li><p>Env (환경변수) : <code>env</code> 설정이 <code>true</code>인경우</p></li></ul></li><li><p>Nomad Job에서는 앞서 Vault에서 선언한 <code>nomad-cluster</code> token role에서 정의한 Policy만을 사용할 수 있음</p></li><li><p><code>change_mode</code> 값이 기본 <code>restart</code>이므로 aws와 db 크리덴셜 같이 ttl 이 적용되는 경우 만료시 자동 갱신되기 때문에 파일과 환경변구 갱신만을 하기 위해서는 <code>noop</code>으로 설정 필요</p></li></ul><h3 id="_5-1-nomad-job-sample-run-java-driver" tabindex="-1"><a class="header-anchor" href="#_5-1-nomad-job-sample-run-java-driver"><span>5.1 Nomad Job Sample Run (Java Driver)</span></a></h3><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>$ cat <span class="token operator">&lt;&lt;</span><span class="token constant">EOF</span> <span class="token operator">|</span> nomad job run <span class="token operator">-</span>
job <span class="token string-literal"><span class="token string">&quot;java-test&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;dc1&quot;</span></span><span class="token punctuation">]</span>

  type <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;service&quot;</span></span>

  group <span class="token string-literal"><span class="token string">&quot;java&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span>

    network <span class="token punctuation">{</span>
	    port <span class="token string-literal"><span class="token string">&quot;http&quot;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment"># random port</span>
    <span class="token punctuation">}</span>
    
    vault <span class="token punctuation">{</span>
      namespace <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span>
      policies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;aws_policy&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&quot;db_policy&quot;</span></span><span class="token punctuation">]</span>
      change_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;noop&quot;</span></span>
    <span class="token punctuation">}</span>

    task <span class="token string-literal"><span class="token string">&quot;java-task&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;java&quot;</span></span>

      config <span class="token punctuation">{</span>
        jar_path <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;/demo/target/demo-0.0.1-SNAPSHOT.jar&quot;</span></span>
      <span class="token punctuation">}</span>
      env <span class="token punctuation">{</span>
        <span class="token constant">DYNAMIC_PROPERTIES_PATH</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/dynamic.properties&quot;</span></span>
      <span class="token punctuation">}</span>
      template <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOH</span></span><span class="token string">
{{- with secret &quot;aws/sts/s3&quot; &quot;ttl=15m&quot; }}
aws_access_key={{ .Data.access_key | toJSON }}
aws_secret_key={{ .Data.secret_key | toJSON }}
aws_secret_token={{ .Data.security_token | toJSON }}
{{- end }}
{{- with secret &quot;db/creds/mysql&quot; }}
db_username={{ .Data.username | toJSON }}
db_password={{ .Data.password | toJSON }}
{{- end }}
      </span><span class="token delimiter"><span class="token symbol">EOH</span></span></span>
				env <span class="token operator">=</span> <span class="token boolean">true</span>
				destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/dynamic.properties&quot;</span></span>
				change_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;noop&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-nomad-job-sample-run-docker-driver" tabindex="-1"><a class="header-anchor" href="#_5-2-nomad-job-sample-run-docker-driver"><span>5.2 Nomad Job Sample Run (Docker Driver)</span></a></h3><div class="hint-container warning"><p class="hint-container-title">경고</p><p>Nomad Dev 모드에서는 파일시스템 접근권한이 없으므로 Prod 모드 구성 필요</p></div><div class="language-ruby line-numbers-mode" data-ext="rb" data-title="rb"><pre class="language-ruby"><code>$ cat <span class="token operator">&lt;&lt;</span><span class="token constant">EOF</span> <span class="token operator">|</span> nomad job run <span class="token operator">-</span>
job <span class="token string-literal"><span class="token string">&quot;docker-test&quot;</span></span> <span class="token punctuation">{</span>
  datacenters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;dc1&quot;</span></span><span class="token punctuation">]</span>

  type <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;service&quot;</span></span>

  group <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span> <span class="token punctuation">{</span>
    count <span class="token operator">=</span> <span class="token number">1</span>

    network <span class="token punctuation">{</span>
	    port <span class="token string-literal"><span class="token string">&quot;http&quot;</span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    vault <span class="token punctuation">{</span>
      namespace <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;&quot;</span></span>
      policies <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;aws_policy&quot;</span></span><span class="token punctuation">,</span><span class="token string-literal"><span class="token string">&quot;db_policy&quot;</span></span><span class="token punctuation">]</span>
      change_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;noop&quot;</span></span>
    <span class="token punctuation">}</span>

    task <span class="token string-literal"><span class="token string">&quot;docker-task&quot;</span></span> <span class="token punctuation">{</span>
      driver <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;docker&quot;</span></span>

      config <span class="token punctuation">{</span>
        image <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;hahohh/java-vault-nomad-demo:0.0.1&quot;</span></span>
        ports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string-literal"><span class="token string">&quot;http&quot;</span></span><span class="token punctuation">]</span>
        volumes <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token string-literal"><span class="token string">&quot;local:/tmp&quot;</span></span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span>
        <span class="token comment"># auth {</span>
        <span class="token comment">#   username = &quot;registry username&quot;</span>
        <span class="token comment">#   password = &quot;registry password&quot;</span>
        <span class="token comment"># }</span>
      <span class="token punctuation">}</span>
      env <span class="token punctuation">{</span>
        <span class="token constant">DYNAMIC_PROPERTIES_PATH</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;/local/dynamic.txt&quot;</span></span>
      <span class="token punctuation">}</span>
      template <span class="token punctuation">{</span>
        data <span class="token operator">=</span> <span class="token string-literal heredoc-string"><span class="token delimiter"><span class="token punctuation">&lt;&lt;</span><span class="token symbol">EOH</span></span><span class="token string">
{{- with secret &quot;aws/sts/s3&quot; &quot;ttl=15m&quot; }}
aws_access_key={{ .Data.access_key | toJSON }}
aws_secret_key={{ .Data.secret_key | toJSON }}
aws_secret_token={{ .Data.security_token | toJSON }}
{{- end }}
{{- with secret &quot;db/creds/mysql&quot; }}
db_username={{ .Data.username | toJSON }}
db_password={{ .Data.password | toJSON }}
{{- end }}
      </span><span class="token delimiter"><span class="token symbol">EOH</span></span></span>
				env <span class="token operator">=</span> <span class="token boolean">true</span>
				destination <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;local/dynamic.txt&quot;</span></span>
				change_mode <span class="token operator">=</span> <span class="token string-literal"><span class="token string">&quot;noop&quot;</span></span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function O(N,E){const a=l("ExternalLinkIcon");return p(),i("div",null,[r,n("blockquote",null,[u,n("ul",null,[d,n("li",null,[n("p",null,[v,s(" : "),n("a",k,[s("https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g"),e(a)])])]),n("li",null,[n("p",null,[m,s(" : "),n("a",b,[s("https://www.nomadproject.io/docs/integrations/vault-integration"),e(a)])])]),n("li",null,[n("p",null,[g,s(" ("),n("a",h,[s("Download"),e(a)]),s(")")]),q]),n("li",null,[n("p",null,[s("Kubernetes 환경인 경우 Vault CSI Provider를 통해 비슷한 구성 가능 : "),n("a",_,[s("https://www.vaultproject.io/docs/platform/k8s/csi"),e(a)])])])])]),f,w,n("blockquote",null,[n("p",null,[n("a",y,[s("https://start.spring.io/"),e(a)])])]),S,n("p",null,[n("a",x,[s("http://localhost:8080"),e(a)])]),A])}const P=o(c,[["render",O],["__file","nomad-integration.html.vue"]]),V=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/nomad-integration.html","title":"Vault & Nomad Integration Test","lang":"ko-KR","frontmatter":{"head":[["meta",{"name":"Vault - Nomad Integration","content":"애플리케이션 변경을 최소화 하여 Vault와 연동하기"}],["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/nomad-integration.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault & Nomad Integration Test"}],["meta",{"property":"og:description","content":"Vault & Nomad Integration Test Dev Mode 를 활용한 테스트 목적 : Spring boot 기반 애플리케이션에서 Nomad 를 이용하여 Vault의 dynamic secret 을 최소한의 코드변경으로 사용할 수 있는 워크 플로우 구성 코드 기반 인경우의 예제 : https://dev.to..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/Spring%20Initializr%202022-05-27%2022-22-15.png"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"nomad"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"aws"}],["meta",{"property":"article:tag","content":"db"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault & Nomad Integration Test\\",\\"image\\":[\\"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/Spring%20Initializr%202022-05-27%2022-22-15.png\\",\\"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20220527225739417.png\\",\\"https://raw.githubusercontent.com/Great-Stone/images/master/uPic/image-20220527225811346.png\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]],"tag":["nomad","vault","aws","db"],"description":"Vault & Nomad Integration Test Dev Mode 를 활용한 테스트 목적 : Spring boot 기반 애플리케이션에서 Nomad 를 이용하여 Vault의 dynamic secret 을 최소한의 코드변경으로 사용할 수 있는 워크 플로우 구성 코드 기반 인경우의 예제 : https://dev.to..."},"headers":[{"level":2,"title":"1. Vault","slug":"_1-vault","link":"#_1-vault","children":[{"level":3,"title":"1.1 Vault Dev Run","slug":"_1-1-vault-dev-run","link":"#_1-1-vault-dev-run","children":[]},{"level":3,"title":"1.2 Vault Setup","slug":"_1-2-vault-setup","link":"#_1-2-vault-setup","children":[]}]},{"level":2,"title":"2. Nomad","slug":"_2-nomad","link":"#_2-nomad","children":[{"level":3,"title":"2.1 Nomad Dev Run (Vault Integrated)","slug":"_2-1-nomad-dev-run-vault-integrated","link":"#_2-1-nomad-dev-run-vault-integrated","children":[]},{"level":3,"title":"2.2. Nomad Env","slug":"_2-2-nomad-env","link":"#_2-2-nomad-env","children":[]},{"level":3,"title":"2.2 Mysql","slug":"_2-2-mysql","link":"#_2-2-mysql","children":[]}]},{"level":2,"title":"3. Dynamic Secret","slug":"_3-dynamic-secret","link":"#_3-dynamic-secret","children":[{"level":3,"title":"3.1 AWS","slug":"_3-1-aws","link":"#_3-1-aws","children":[]},{"level":3,"title":"3.2 DB","slug":"_3-2-db","link":"#_3-2-db","children":[]}]},{"level":2,"title":"4. Sample Spring-boot","slug":"_4-sample-spring-boot","link":"#_4-sample-spring-boot","children":[{"level":3,"title":"4.1 demo app","slug":"_4-1-demo-app","link":"#_4-1-demo-app","children":[]},{"level":3,"title":"4.2 Set dummy properties & Test","slug":"_4-2-set-dummy-properties-test","link":"#_4-2-set-dummy-properties-test","children":[]},{"level":3,"title":"4.3 build jar","slug":"_4-3-build-jar","link":"#_4-3-build-jar","children":[]},{"level":3,"title":"4.4 build container","slug":"_4-4-build-container","link":"#_4-4-build-container","children":[]}]},{"level":2,"title":"5. Nomad Job with dynamic secret","slug":"_5-nomad-job-with-dynamic-secret","link":"#_5-nomad-job-with-dynamic-secret","children":[{"level":3,"title":"5.1 Nomad Job Sample Run (Java Driver)","slug":"_5-1-nomad-job-sample-run-java-driver","link":"#_5-1-nomad-job-sample-run-java-driver","children":[]},{"level":3,"title":"5.2 Nomad Job Sample Run (Docker Driver)","slug":"_5-2-nomad-job-sample-run-docker-driver","link":"#_5-2-nomad-job-sample-run-docker-driver","children":[]}]}],"git":{"createdTime":1653698500000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":3},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":21.18,"words":1271},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/nomad-integration.md","localizedDate":"2022년 5월 28일","excerpt":"\\n<blockquote>\\n<p>Dev Mode 를 활용한 테스트</p>\\n<ul>\\n<li>\\n<p><strong>목적</strong> : Spring boot 기반 애플리케이션에서 Nomad 를 이용하여 Vault의 dynamic secret 을 최소한의 코드변경으로 사용할 수 있는 워크 플로우 구성</p>\\n</li>\\n<li>\\n<p><strong>코드 기반 인경우의 예제</strong> : <a href=\\"https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://dev.to/aws-builders/aws-sts-with-spring-cloud-vault-1e5g</a></p>\\n</li>\\n<li>\\n<p><strong>Vault-Nomad Integration</strong> : <a href=\\"https://www.nomadproject.io/docs/integrations/vault-integration\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.nomadproject.io/docs/integrations/vault-integration</a></p>\\n</li>\\n<li>\\n<p><strong>Version</strong> (<a href=\\"https://releases.hashicorp.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Download</a>)</p>\\n<ul>\\n<li>Nomad v1.3.1 (2b054e38e91af964d1235faa98c286ca3f527e56)</li>\\n<li>Vault v1.10.3 (af866591ee60485f05d6e32dd63dde93df686dfb)</li>\\n</ul>\\n</li>\\n<li>\\n<p>Kubernetes 환경인 경우 Vault CSI Provider를 통해 비슷한 구성 가능 : <a href=\\"https://www.vaultproject.io/docs/platform/k8s/csi\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.vaultproject.io/docs/platform/k8s/csi</a></p>\\n</li>\\n</ul>\\n</blockquote>","autoDesc":true}');export{P as comp,V as data};
