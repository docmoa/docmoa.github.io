import{_ as b}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as u,o as k,c as m,b as a,d as s,a as l,w as n,e as i}from"./app-DwRVeH7t.js";const h="/assets/vault-csi-flow-DvdzJnPB.png",g="/assets/vault-injection-flow-CLadrJKo.png",A="/assets/vault-injection-kv-check-CbzHh73S.png",d="/assets/vault-injection-pki-check-1-D7VWiJ0Y.png",v="/assets/vault-injection-pki-check-2-DsrKA0yY.png",y="/assets/vault-secrets-operator-flow-C4-nFQzO.png",f="/assets/vault-vso-kv-check-DGaQTUCq.png",V={},I=i('<h1 id="how-to-integrate-vault-with-k8s-csi-injection-vso" tabindex="-1"><a class="header-anchor" href="#how-to-integrate-vault-with-k8s-csi-injection-vso"><span>How to integrate Vault with K8s (CSI &amp; Injection &amp; VSO)</span></a></h1><p>Vault에 저장된 시크릿 또는 발행되는(Dynamic) 시크릿을 획득하기 위해서는, 시크릿을 요청하는 클라이언트(사람/앱/장비)가 다음의 과정을 수행해야 합니다.</p><ol><li>클라이언트가 Vault 토큰을 획득하기 위한 인증 절차</li><li>획득한 Vault 토큰의 수명주기 관리 (갱신과 재요청)</li><li>Vault의 특정 시크릿 경로를 저장하고 해당 시크릿 요청</li><li>동적(Dynamic) 시크릿인 경우 해당 임대(Lease)정보 확인 및 갱신과 재요청</li></ol><p>Vault는 위의 과정을 클라이언트 대신 플랫폼 수준에서 대행할 수 있는 방안을 제공하고 있습니다. 여기서는 Kubernetes 상에서의 Vault와의 통합 구성을 활용하여 위 과정을 대체하고 Kubernetes 플랫폼 자체(Kuberetes Native)의 기능을 사용하듯 Vault의 시크릿을 사용하게 만드는 방식에 대해 설명합니다.</p><p>Kubernetes에 배포되는 컨테이너 애플리케이션이 Vault의 시크릿 데이터를 얻기위해 사용되는 플랫폼 수준(Kubernetes)에서의 통합을 설명합니다. CSI, Sidecar Injection, Vault Secret Operator <sup>VSO</sup>에 대한 설명은 다음 글을 확인해 보세요.</p>',5),E={href:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-integration-three-methods.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/Great-Stone/vault-for-k8s",target:"_blank",rel:"noopener noreferrer"},_={class:"hint-container info"},S=a("p",{class:"hint-container-title"},"정보",-1),K=a("p",null,"아래 링크는 애플리케이션 또는 CICD 수준에서의 통합 예시 목록 입니다.",-1),C={href:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/spring-boot.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.html",target:"_blank",rel:"noopener noreferrer"},M=i('<div class="hint-container tip"><p class="hint-container-title">팁</p><p>Vault와 Kuberentes간의 통합의 세가지 방식은 중복으로 적용 가능합니다.</p></div><div class="hint-container warning"><p class="hint-container-title">준비사항</p><p>구성을 위한 사전 필요 사항은 다음과 같습니다.</p><ul><li>Vault CLI를 위한 바이너리</li><li>Kubectl CLI 도구 및 대상 Kubernetes에 대한 구성 완료</li><li>Helm CLI 도구</li></ul></div><h2 id="_1-csi" tabindex="-1"><a class="header-anchor" href="#_1-csi"><span>1. CSI</span></a></h2>',3),B={href:"https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-secret-store-driver",target:"_blank",rel:"noopener noreferrer"},Q=i('<p>CSI 방식에서는 <code>SecretProviderClass</code> 가 Vault의 정보를 구성하는 역할을 수행하고, 이후 <code>deployment</code>에서 볼륨 형태로 호출하는 방식으로 구성됩니다.</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-1-kubernetes에-csi-드라이버-설치" tabindex="-1"><a class="header-anchor" href="#_1-1-kubernetes에-csi-드라이버-설치"><span>1.1 Kubernetes에 CSI 드라이버 설치</span></a></h3><p>Container Storage Interface(CSI) 드라이버를 설치하면 <code>SecretProviderClass</code> CRD 구성을 사용하여 Kubernets에 외부 시크릿 저장소의 값을 Pod에 마운트 할 수 있습니다.</p><p>먼저 CSI 드라이버 Helm 차트를 등록합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> secrets-store-csi-driver <span class="token punctuation">\\</span>
    https://kubernetes-sigs.github.io/secrets-store-csi-driver/charts
</code></pre></div><p>다음으로 CSI 드라이버를 설치 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> csi secrets-store-csi-driver/secrets-store-csi-driver <span class="token punctuation">\\</span>
    <span class="token parameter variable">--set</span> <span class="token assign-left variable">syncSecret.enabled</span><span class="token operator">=</span>true
</code></pre></div><p>설치가 정상적으로 완료되면 다음의 Pod를 확인할 수 있습니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods

NAME                                 READY   STATUS    RESTARTS   AGE
csi-secrets-store-csi-driver-vkppq   <span class="token number">3</span>/3     Running   <span class="token number">0</span>          20s
</code></pre></div><h3 id="_1-2-csi를-위한-vault-구성-helm" tabindex="-1"><a class="header-anchor" href="#_1-2-csi를-위한-vault-구성-helm"><span>1.2 CSI를 위한 Vault 구성 (Helm)</span></a></h3><p>CSI 드라이버에서 <code>vault</code> 프로바이더를 사용하기 위한 구성을 설치해야 합니다. 이 구성이 설치되면 <code>SecretProviderClass</code> 정의 시 프로바이더 대상으로 <code>vault</code>를 지정할 수 있습니다.</p><p>먼저 Vault Helm 차트를 등록합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> hashicorp https://helm.releases.hashicorp.com
</code></pre></div><p>Vault Helm 차트를 사용하여 1) Kubernetes에 Vault를 설치하는 구성 또는 2) 외부 Vault와 연계하는 구성으로 설치 할 수 있습니다.</p>`,15),j=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("helm "),a("span",{class:"token function"},"install"),s(" vault hashicorp/vault "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"server.dev.enabled=true"'),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"injector.enabled=false"'),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"csi.enabled=true"'),s(`
`)])])],-1),q=a("ul",null,[a("li",null,[a("code",null,"server.dev.enabled"),s(": 개발 모드로 Vault 서버를 구성합니다. 운영 환경 구성시에는 사용하지 않습니다.")]),a("li",null,[a("code",null,"injector.enabled"),s(": Sidecar Injection 방식이 기본 활성화되므로 비활성으로 정의합니다.")]),a("li",null,[a("code",null,"csi.enabled"),s(": CSI 프로바이더 구성 설치를 위해 활성화 합니다.")])],-1),R=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("helm "),a("span",{class:"token function"},"install"),s(" vault hashicorp/vault "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},[s('"global.externalVaultAddr='),a("span",{class:"token variable"},"$EXTERNAL_VAULT_ADDR"),s('"')]),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"injector.enabled=false"'),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"csi.enabled=true"'),s(`
`)])])],-1),T=a("ul",null,[a("li",null,[a("code",null,"global.externalVaultAddr"),s(": 외부 Vault 주소를 입력 합니다.")]),a("li",null,[a("code",null,"injector.enabled"),s(": Sidecar Injection 방식이 기본 활성화되므로 비활성으로 정의합니다.")]),a("li",null,[a("code",null,"csi.enabled"),s(": CSI 프로바이더 구성 설치를 위해 활성화 합니다.")])],-1),N=i(`<p>설치가 정상적으로 완료되면 다음의 Pod를 확인할 수 있습니다. (<code>vault-0</code>는 Vault 서버를 설치한 경우 확인되고, 외부 Vault 서버를 사용하는 경우에는 확인되지 않습니다.)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods

NAME                                 READY   STATUS    RESTARTS   AGE
vault-0                    <span class="token number">1</span>/1     Running   <span class="token number">0</span>          58s
vault-csi-provider-t874l   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          58s
</code></pre></div><h3 id="_1-3-csi에서-사용할-vault-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_1-3-csi에서-사용할-vault-시크릿-정의"><span>1.3 CSI에서 사용할 Vault 시크릿 정의</span></a></h3><p>간단한 예로 Vault KV 시크릿 엔진을 사용합니다.</p><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><details class="hint-container details"><summary>/secret 경로에 KV 시크릿 엔진 활성화 (Optional)</summary><p>Vault가 개발 모드로 실행된 경우 기본적으로 <code>Secret</code>이라는 경로에 KV version2 시크릿 엔진이 활성화되어있습니다. 만약 개발 모드가 아닌경우 다음과 같이 활성화 합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span> secret <span class="token parameter variable">-version</span><span class="token operator">=</span><span class="token number">2</span> kv
</code></pre></div></details><p><code>secret/db-pass</code> 경로에 <code>password</code> 값을 저장 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault kv put secret/db-pass <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;db-secret-password-v1&quot;</span>
</code></pre></div><p>다음과 같이 저장된 값을 확인할 수 있습니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault kv get secret/db-pass

<span class="token operator">==</span><span class="token operator">=</span> Secret Path <span class="token operator">==</span><span class="token operator">=</span>
secret/data/db-pass

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Metadata <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Key                Value
---                -----
created_time       <span class="token number">2023</span>-10-25T11:49:15.6993Z
custom_metadata    <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
deletion_time      n/a
destroyed          <span class="token boolean">false</span>
version            <span class="token number">1</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span> Data <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
Key         Value
---         -----
password    db-secret-password-v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-vault에-인증받기-위한-kubernetes-인증-방식-구성" tabindex="-1"><a class="header-anchor" href="#_1-4-vault에-인증받기-위한-kubernetes-인증-방식-구성"><span>1.4 Vault에 인증받기 위한 Kubernetes 인증 방식 구성</span></a></h3><p>Vault는 Kubernetes의 Service Account 토큰으로 인증할 수 있는 Kubernetes 인증 방식을 제공합니다. CSI 드라이버가 Vault에 저장된 시크릿 정보에 접근하여 시크릿을 획득하는 과정에서 Vault에 대한 인증/인가가 요구되므로 Kubernetes상의 리소스에서는 Kubernetes 인증 방식을 통해 Kubernetes의 방식으로 인증 받는 워크플로를 구성합니다.</p><p>Vault에 Kubernetes 인증 방식을 활성화 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth <span class="token builtin class-name">enable</span> kubernetes
</code></pre></div><p>Kubernetes API 주소를 Kubernetes 인증 방식 구성에 설정 합니다. 이 경우 자동으로 Vault Pod를 위한 자체 Service Account를 사용합니다.</p>`,15),P=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"https://'),a("span",{class:"token variable"},"$KUBERNETES_PORT_443_TCP_ADDR"),s(':443"')]),s(`
`)])])],-1),F=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"'),a("span",{class:"token variable"},"$EXTERNAL_VAULT_ADDR"),s('"')]),s(`
`)])])],-1),L=a("p",null,[s("생성할 Kubernetes 인증 방식의 롤 정의에서 사용되는 정책을 구성합니다. Vault의 "),a("code",null,"secret/data/db-pass"),s(" 경로에 저장된 시크릿을 읽을 수 있는 정책 입니다.")],-1),G=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault policy "),a("span",{class:"token function"},"write"),s(" internal-app - "),a("span",{class:"token operator"},"<<"),a("span",{class:"token string"},`EOF
path "secret/data/db-pass" {
  capabilities = ["read"]
}
EOF`),s(`
`)])])],-1),U=a("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[a("pre",{class:"language-powershell"},[a("code",null,[a("span",{class:"token variable"},"$policy"),s(" = @"),a("span",{class:"token string"},`"
path "`),s("secret/"),a("span",{class:"token keyword"},"data"),a("span",{class:"token operator"},"/"),s("db-pass"),a("span",{class:"token string"},`" {
  capabilities = ["`),s("read"),a("span",{class:"token string"},`"]
}
"`),s(`@

vault policy `),a("span",{class:"token function"},"write"),s(" injection-app "),a("span",{class:"token operator"},"-"),s(" << "),a("span",{class:"token variable"},"$policy"),s(`
`)])])],-1),J=i(`<p>예제의 롤 정의에서는 허용할 Service Account와 Kubernetes Namespace, 부여하는 정책으로 앞서 생성한 <code>internal-app</code> 정책을 할당합니다. 인증된 이후 유효 기간은 20분으로 설정 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/kubernetes/role/database <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_names</span><span class="token operator">=</span>webapp-sa <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_namespaces</span><span class="token operator">=</span>default <span class="token punctuation">\\</span>
    <span class="token assign-left variable">policies</span><span class="token operator">=</span>internal-app <span class="token punctuation">\\</span>
    <span class="token assign-left variable">ttl</span><span class="token operator">=</span>20m
</code></pre></div><h3 id="_1-5-secretproviderclass-구성" tabindex="-1"><a class="header-anchor" href="#_1-5-secretproviderclass-구성"><span>1.5 SecretProviderClass 구성</span></a></h3><p><code>SecretProviderClass</code>를 사용하여 리소스 정의를 합니다. <mark>정의</mark>를 할 뿐 시크릿을 읽는 동작을 수행하지는 않습니다. 다음 예제 리소스 <code>spc-vault-database.yaml</code>파일에 설정한 정의는 <code>vault</code> 프로바이더를 사용하는 경우의 파라미터를 설명합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> secrets<span class="token punctuation">-</span>store.csi.x<span class="token punctuation">-</span>k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> SecretProviderClass
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vault<span class="token punctuation">-</span>database <span class="token comment"># CSI Provider로 호출될 이름</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> vault <span class="token comment"># CSI Provider 유형</span>
  <span class="token key atrule">parameters</span><span class="token punctuation">:</span>
    <span class="token key atrule">vaultAddress</span><span class="token punctuation">:</span> <span class="token string">&quot;http://vault.default:8200&quot;</span>
    <span class="token comment"># Vault에 구성한 Kubernetes 인증의 Role 이름</span>
    <span class="token key atrule">roleName</span><span class="token punctuation">:</span> <span class="token string">&quot;database&quot;</span>
    <span class="token comment"># Vault 주소 - 기본은 vault.default로 서비스 이름을 참조하나,</span>
    <span class="token comment"># 외부 Vault인경우 해당 주소를 지정해야 합니다.</span>
    <span class="token key atrule">vaultAddress</span><span class="token punctuation">:</span> <span class="token string">&quot;https://vault.default:8200&quot;</span>
    <span class="token comment"># Vault에 저장된 시크릿 경로와 대상을 지정합니다.</span>
    <span class="token key atrule">objects</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
      - objectName: &quot;db-password&quot;
        secretPath: &quot;secret/data/db-pass&quot;
        secretKey: &quot;password&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>objects 항목은 리스트 구성으로 다수개의 시크릿을 정의할 수 있습니다.</p><ul><li><code>objectName</code> : 해당 시크릿을 가리키는 이름으로, 최종적으로 이 이름으로 파일이 생성됨</li><li><code>secretPath</code> : Vault에 정의된 시크릿 경로 (KV version2의 경우 API 구조적으로 활성화된 경로 뒤에 <code>data</code>가 붙음)</li><li><code>secretKey</code> : Vault의 시크릿 경로 호출시 반환되는 값의 키 이름</li></ul><p>설정한 <code>spc-vault-database.yaml</code>를 적용합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> spc-vault-database.yaml
</code></pre></div><p>앞서 1) CSI에 사용될 Vault 프로바이더가 설치되고, 2) 인증이 구성되고, 3) 인증을 위한 롤이 정의되고, 4) Vault에 시크릿 값이 저장되고, 5) <code>SecretProviderClass</code>가 정의되었습니다.</p><p>롤에서 정의한 허용하는 Service Account를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create serviceaccount webapp-sa
</code></pre></div><p>앞서 생성된 <code>SecretProviderClass</code>를 <code>Volume</code>으로 정의하여 Pod 정의를 <code>webapp-pod.yaml</code>에 저장합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">kind</span><span class="token punctuation">:</span> Pod
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> webapp
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment"># 롤에서 허용하는 Service Account</span>
  <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> webapp<span class="token punctuation">-</span>sa
  <span class="token key atrule">containers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">image</span><span class="token punctuation">:</span> jweissig/app<span class="token punctuation">:</span>0.0.1
    <span class="token key atrule">name</span><span class="token punctuation">:</span> webapp
    <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span>
    	<span class="token comment"># 아래 volumes에서 정의한 csi 이름</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> secrets<span class="token punctuation">-</span>store<span class="token punctuation">-</span>inline
    	<span class="token comment"># Pod에 마운트할 경로 지정</span>
    	<span class="token comment"># 해당 경로 상에 SecretProviderClass에서 정의한 objectName으로 파일이 생성됨</span>
      <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> <span class="token string">&quot;/mnt/secrets-store&quot;</span>
      <span class="token comment"># 마운트된 파일의 읽기/쓰기 여부</span>
      <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  	  <span class="token comment"># volumeMounts에서 정의될 이름</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> secrets<span class="token punctuation">-</span>store<span class="token punctuation">-</span>inline
      <span class="token key atrule">csi</span><span class="token punctuation">:</span>
        <span class="token key atrule">driver</span><span class="token punctuation">:</span> secrets<span class="token punctuation">-</span>store.csi.k8s.io
        <span class="token comment"># 마운트된 파일의 읽기/쓰기 여부</span>
        <span class="token key atrule">readOnly</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">volumeAttributes</span><span class="token punctuation">:</span>
        	<span class="token comment"># SecretProviderClass로 정의한 이름</span>
          <span class="token key atrule">secretProviderClass</span><span class="token punctuation">:</span> <span class="token string">&quot;vault-database&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>webapp-pod.yaml</code> 정의를 사용하여 Pod를 실행합니다. Pod가 실행되는 시점에 정의한 <code>SecretProviderClass</code>에 의해 지정한 위치에 Vault에 저장된 시크릿이 마운트 됩니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> webapp-pod.yaml
</code></pre></div><p>실행된 Pod를 확인합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods

NAME                                     READY   STATUS    RESTARTS   AGE
webapp                                   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          5m
</code></pre></div><p>Pod 내에 마운트된 시크릿 정보를 확인합니다.</p>`,19),Y=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{bash:"",class:"language-bash"},[a("code",null,[s("$ kubectl "),a("span",{class:"token builtin class-name"},"exec"),s(" webapp -- "),a("span",{class:"token function"},"cat"),s(` /mnt/secrets-store/db-password

db-secret-password-v1
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("div",{class:"highlight-line"}," ")])],-1),z=a("h3",{id:"_1-7-시크릿-갱신",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-7-시크릿-갱신"},[a("span",null,"1.7 \b시크릿 갱신")])],-1),Z=a("p",null,[s("새로운 내용의 시크릿을 동일한 "),a("code",null,"secret/db-pass"),s(" 경로에 다시 저장합니다.")],-1),H=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{bash:"",class:"language-bash"},[a("code",null,[s("$ vault kv put secret/db-pass "),a("span",{class:"token assign-left variable"},"password"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},'"db-secret-password-v2"'),s(`

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(" Secret Path "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(`
secret/data/db-pass

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(" Metadata "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(`
Key                Value
---                -----
created_time       `),a("span",{class:"token number"},"2023"),s(`-10-27T00:06:52.910923Z
custom_metadata    `),a("span",{class:"token operator"},"<"),s("nil"),a("span",{class:"token operator"},">"),s(`
deletion_time      n/a
destroyed          `),a("span",{class:"token boolean"},"false"),s(`
version            `),a("span",{class:"token number"},"2"),s(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," ")]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),O=i(`<p>Vault의 시크릿이 변경되었지만 이전의 시크릿 정보로 마운트 된 기존 Pod에는 변경된 시크릿으로의 갱신이 발생하지 않습니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl <span class="token builtin class-name">exec</span> webapp -- <span class="token function">cat</span> /mnt/secrets-store/db-password

db-secret-password-v1
</code></pre></div><p>이번 예제에서는 Pod를 실행하였으므로, 이미 실행된 Pod를 종료시키고 다시 실행해야 변경된 시크릿을 다시 CSI 드라이버로 요청하여 마운트 됩니다.</p><p>기존 pod를 삭제 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl delete pod webapp
</code></pre></div><p>이전의 정의를 다시 사용하여 Pod를 실행합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> webapp-pod.yaml
</code></pre></div><p>Vault의 변경된 시크릿이 적용된 것을 확인 합니다.</p>`,8),W=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{bash:"",class:"language-bash"},[a("code",null,[s("$ kubectl "),a("span",{class:"token builtin class-name"},"exec"),s(" webapp -- "),a("span",{class:"token function"},"cat"),s(` /mnt/secrets-store/db-password

db-secret-password-v2
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("div",{class:"highlight-line"}," ")])],-1),X=a("h2",{id:"_2-injecting",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_2-injecting"},[a("span",null,"2. Injecting")])],-1),$={href:"https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-sidecar",target:"_blank",rel:"noopener noreferrer"},aa={href:"https://www.hashicorp.com/blog/injecting-vault-secrets-into-kubernetes-pods-via-a-sidecar",target:"_blank",rel:"noopener noreferrer"},sa={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/injector/annotations",target:"_blank",rel:"noopener noreferrer"},na={href:"https://devopscube.com/vault-agent-injector-tutorial/",target:"_blank",rel:"noopener noreferrer"},ea=i('<p>BM/VM 환경에서는 Vault의 시크릿을 획득하고 갱신하는 과정을 지원하기 위해 Vault Agent를 활용할수 있습니다. Kubernetes에서는 애플리케이션 배포 시 Vault Agent를 사이트카로 구성하여 자동화된 구성과 해당 애플리케이션 만을 위한 Vault Agent를 제공할 수 있습니다.</p><p>사이드카 방식이 적용되도록 Kubernetes에 설치되면 <code>Sidecar Injector</code> 서비스가 실행되고, 이 서비스는 <code>annotation</code>이 정의된 배포를 후킹하여 Vault Agent 컨테이너를 주입(Injection) 합니다.</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-1-injection을-위한-vault-구성-helm" tabindex="-1"><a class="header-anchor" href="#_2-1-injection을-위한-vault-구성-helm"><span>2.1 Injection을 위한 Vault 구성 (Helm)</span></a></h3><p>Kubernetes에 <code>Sidecar Injector</code> 서비스를 구성을 설치해야 합니다. 이 구성이 설치되면 <code>annotation</code>에 정의된 내용이 <code>vault-k8s</code> webhook을 호출하여 Pod를 재정의하여 Vault Agent를 사이드카로 주입(Injection)합니다.</p><p>먼저 Vault Helm 차트를 등록합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> hashicorp https://helm.releases.hashicorp.com
</code></pre></div><p>Vault Helm 차트를 사용하여 1) Kubernetes에 Vault를 설치하는 구성 또는 2) 외부 Vault와 연계하는 구성으로 설치 할 수 있습니다.</p>`,8),ta=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("helm "),a("span",{class:"token function"},"install"),s(" vault hashicorp/vault "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"server.dev.enabled=true"'),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"injector.enabled=true"'),s(`
`)])])],-1),la=a("ul",null,[a("li",null,[a("code",null,"server.dev.enabled"),s(": 개발 모드로 Vault 서버를 구성합니다. 운영 환경 구성시에는 사용하지 않습니다.")]),a("li",null,[a("code",null,"injector.enabled"),s(": Sidecar Injection 방식이 기본 값이 "),a("code",null,"true"),s("이나, 명시적으로 선언합니다.")])],-1),ia=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("helm "),a("span",{class:"token function"},"install"),s(" vault hashicorp/vault "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},[s('"global.externalVaultAddr='),a("span",{class:"token variable"},"$EXTERNAL_VAULT_ADDR"),s('"')]),s(),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token parameter variable"},"--set"),s(),a("span",{class:"token string"},'"injector.enabled=true"'),s(`
`)])])],-1),ca=a("ul",null,[a("li",null,[a("code",null,"global.externalVaultAddr"),s(": 외부 Vault 주소를 입력 합니다.")]),a("li",null,[a("code",null,"injector.enabled"),s(": Sidecar Injection 방식이 기본 값이 "),a("code",null,"true"),s("이나, 명시적으로 선언합니다.")])],-1),oa=i(`<p>설치가 정상적으로 완료되면 다음의 Pod를 확인할 수 있습니다.</p><ul><li><code>vault-0</code>는 Vault 서버를 설치한 경우 확인되고, 외부 Vault 서버를 사용하는 경우에는 확인되지 않습니다.</li><li><code>vault-agent-injector-*</code> Pod는 <code>annotation</code> 기반으로 사이드카를 주입하는 역할을 담당합니다.</li></ul><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods

NAME                                    READY   STATUS    RESTARTS   AGE
vault-0                                 <span class="token number">1</span>/1     Running   <span class="token number">0</span>          80s
vault-agent-injector-5945fb98b5-tpglz   <span class="token number">1</span>/1     Running   <span class="token number">0</span>          80s
</code></pre></div><h3 id="_2-2-injection에서-사용할-vault-정적-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_2-2-injection에서-사용할-vault-정적-시크릿-정의"><span>2.2 Injection에서 사용할 Vault 정적 시크릿 정의</span></a></h3><p>Injection을 사용하여 Vault Agent를 사용할 수 있는 환경에서는 시크릿 업데이트를 자동으로 수행할 수 있고, KV 같은 정적(Static)인 시크릿의 경우 해당 시크릿의 생명주기 정보는 별도로 없기 때문에 이후 Injection 구성에서 변경을 확인할 시간 간격을 지정하게 됩니다.</p><p>예제에서는 KV를 활용합니다. Injection에서 사용할 KV 시크릿 엔진을 활성화합니다.</p><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span> for-injection <span class="token parameter variable">-version</span><span class="token operator">=</span><span class="token number">2</span> kv
</code></pre></div><p><code>for-injection/my-pass</code> 경로에 <code>password</code> 값을 저장 합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault kv put for-injection/my-pass <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;my-secret-password-v1&quot;</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Secret Path <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
for-injection/data/my-pass

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Metadata <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Key                Value
---                -----
created_time       <span class="token number">2023</span>-10-27T00:41:16.656713Z
custom_metadata    <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
deletion_time      n/a
destroyed          <span class="token boolean">false</span>
version            <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),pa={class:"hint-container details"},ra=a("summary",null,"저장된 시크릿 값을 확인",-1),ua=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s(`$ vault kv get for-injection/my-pass

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(" Secret Path "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(`
for-injection/data/my-pass

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(" Metadata "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(`
Key                Value
---                -----
created_time       `),a("span",{class:"token number"},"2023"),s(`-10-27T00:41:16.656713Z
custom_metadata    `),a("span",{class:"token operator"},"<"),s("nil"),a("span",{class:"token operator"},">"),s(`
deletion_time      n/a
destroyed          `),a("span",{class:"token boolean"},"false"),s(`
version            `),a("span",{class:"token number"},"1"),s(`

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(" Data "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(`
Key         Value
---         -----
password    my-secret-password-v1
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),da=a("figure",null,[a("img",{src:A,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),va=a("p",null,null,-1),ba=i(`<h3 id="_2-3-injection에서-사용할-vault-동적-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_2-3-injection에서-사용할-vault-동적-시크릿-정의"><span>2.3 Injection에서 사용할 Vault 동적 시크릿 정의</span></a></h3><p>Injection을 사용하여 Vault Agent를 사용할 수 있는 환경에서는 시크릿 업데이트를 자동으로 수행할 수 있고, Database, PKI, Cloud Credential(AWS,Azure,GCP,Ali) 등 동적(Dynamic)인 시크릿의 경우 Vault Agent의 기존 방식 처럼 4/5 지점에서 갱신 작업을 수행 합니다.</p><p>예제에서는 PKI를 활용합니다. Injection에서 사용할 PKI 시크릿 엔진을 활성화 합니다.</p><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>pki pki
vault secrets tune -max-lease-ttl<span class="token operator">=</span>86400s -default-lease-ttl<span class="token operator">=</span>3600s pki
</code></pre></div><p>루트 인증서를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> <span class="token parameter variable">-field</span><span class="token operator">=</span>certificate pki/root/generate/internal <span class="token punctuation">\\</span>
  <span class="token assign-left variable">common_name</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token string">&quot;86400h&quot;</span>
</code></pre></div><p>생성된 루트 인증서에 기반한 PKI 롤을 생성합니다. 예제에서는 동적 시크릿의 교체를 확인하기 위해 주기(<code>ttl</code>, <code>max_ttl</code>)를 짧게 구성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> pki/roles/my-role <span class="token punctuation">\\</span>
  <span class="token assign-left variable">key_bits</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token string">&quot;60s&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">max_ttl</span><span class="token operator">=</span><span class="token string">&quot;60s&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allow_ip_sans</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allowed_domains</span><span class="token operator">=</span><span class="token string">&quot;example.com,my.domain&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allow_subdomains</span><span class="token operator">=</span>true
</code></pre></div>`,9),ka={class:"hint-container details"},ma=a("summary",null,"PKI 인증서 발급 확인",-1),ha=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("$ vault "),a("span",{class:"token function"},"write"),s(" pki/issue/my-role "),a("span",{class:"token assign-left variable"},"common_name"),a("span",{class:"token operator"},"="),s(`my-test.example.com

Key                 Value
---                 -----
ca_chain            `),a("span",{class:"token punctuation"},"["),s(`-----BEGIN CERTIFICATE-----
MIIDIDCCAgigAwIBAgIUR6Auk4MVpeis2oLq0StUwce/v/kwDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjYyMzUyNDlaFw0yMzEwMjcyMzUz
MTlaMA8xDTALBgNVBAMTBHRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQDXmlaX2Qu/rF+AFgWqJBCaNPziJrwsBB8nEUQh2S2XRMD9osoliWpaS33i
iFAxc++Mec/FzKIsB7TskYWyFlv/GPmFG5gKdYfMuEMAgHrxM3OYWibQq0hDajJn
oOcT1DwCx0mZqYdGoFVcw2TdW1vqgKRMx1vWBskaJHoGGpRvEPe7cYLz8itwqQfR
7zkcVw3vdK6U50I7NnV/1wC+WOuwZ6IL5DKC1v3DtE5CrYKf/sBwDZfcdwFEjLpQ
3hSXlVtv6t9E7QABcYqFkP5iebisNVP71L1Qk7oCuk4zqKpkbFytD6Nlf1LMRSFj
SDt+aPuoqlmKrNtGsNcTqlW8k39HAgMBAAGjdDByMA4GA1UdDwEB/wQEAwIBBjAP
BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTwEbHemyl86vBdxfMICjaKOJIoJzAf
BgNVHSMEGDAWgBTwEbHemyl86vBdxfMICjaKOJIoJzAPBgNVHREECDAGggR0ZXN0
MA0GCSqGSIb3DQEBCwUAA4IBAQB2y9QDCSNlr+j4v5H/7s4aZR8EWqbSdGc6F9w2
FrR/bwo9eIxWiABFn/SH+bqHSK7fw4TMPJ0rEnJxBEvIPpA2kvGIxsBzPAdPzQ+A
4F6tSJtiXB5A/7IZn9SQLUrcmcA5SuBGN9GjmPLpYSQg2ykJsTlExkYdg4co2sYV
0F1gE5SXFGEmNTwFlpPSmKY6Zs8fKJZrzf+feCXFRlD/u+I4vftJqu7pwxZvPifR
gPWi3kuzj71b4rEkZW3zNCP9XOtkCO/pNW2hJnc0QiTgQGvWXl/A8rIohsc+by2N
MVr8w8iw1OdwbxI0LyC5siVgn+aER5qryYlpdeKR0/F2LuWX
-----END CERTIFICATE-----`),a("span",{class:"token punctuation"},"]"),s(`
certificate         -----BEGIN CERTIFICATE-----
MIIETjCCAzagAwIBAgIUbrsk5aFaFZ5MB9aeS9DjXlcEvFswDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjcwMDU1MDlaFw0yMzEwMjcwMDU2
MDJaMB4xHDAaBgNVBAMTE215LXRlc3QuZXhhbXBsZS5jb20wggIiMA0GCSqGSIb3
DQEBAQUAA4ICDwAwggIKAoICAQDBSDy7gpekQv6Ro8p+4Szm8iavHv3KRyOoMYOv
UdRlT+2KT6UcZGc9c0RLYS1yvT2QuYm6CeFLs+msYU/mVdLG/ih8YlCiOG9uDyZi
CNqA+MOkxkwgChTfNgeOWQr8uo2J9CaV3bjProtE7weGaK/J5UYDTHxsZxMTom+t
dMCAHol8d888cqVUvHXOth07/OKO5orKBcsxFhq0IAwERNT3kGxIcfOFvhWJfNUn
ihdZMjq8u/CBaD3MhKU2Sn5e40FGLKuIoF0pMxhvPnJARiz53sAMMujoQxVgiIsQ
9DT8phhNKXqufjOYEUUJ0hy/quy+/i4B00SPNsOOcD8vOsz96mhZC9ik4Avz0xdB
KY0UaeULPmztdJW08dEaY1DSJB/k8rPMu4VZAFgxeFgj4byA9UwQ14aMJCZWHZYH
cGbkJjcdFEC1ZhICKIHOO0KSoXpxD9xIQ1UWYvoegqSBSqvecaYf6y52kg7hb4rg
jVFdBKWhBCGJ1RaqnbnBBp+Qk5AAkCyYfUpXXNmpYB7akIXLe3iTL50MkaiTd+GE
xBXhfCYvwbpIZu35bAurwp3+nSTTeJw4d2O7s1L4iqdQ24fERYwEL8euLzzmxsjv
qsmN1cHzbMulrCjVT3ZNBPFiMltoDJXyJDssKTM4nOpxr+FxBiCpbufcy2tDJ4eb
svMxiQIDAQABo4GSMIGPMA4GA1UdDwEB/wQEAwIDqDAdBgNVHSUEFjAUBggrBgEF
BQcDAQYIKwYBBQUHAwIwHQYDVR0OBBYEFGO3lOOstANAUseQaJmGMnCVQkw8MB8G
A1UdIwQYMBaAFPARsd6bKXzq8F3F8wgKNoo4kignMB4GA1UdEQQXMBWCE215LXRl
c3QuZXhhbXBsZS5jb20wDQYJKoZIhvcNAQELBQADggEBADT1aqab6RhLGuAvUgIS
3lZ+B/ltWFQroFRgnfQArlMrVnCE1/7LAH+i7n8Ev7ixK0xP2CYRLwm8McLBEIjm
qWB8ZXJJq4gXqZ6i5kIFvuRILkesSGJbs49TdeAMz6lyJd/BQmzM/uAhnqMrhlRt
H6ZWnC5Z7dRGWT/yIlKL6kMcmxqEZCTt7j76V/8CRRUtxHtEgt4B4R/0lykWM8Ed
HMok6crNYk94Jg/S8MWZlUHtCjDeXMd3mhDVQKaBNeLGjyugDF8KLVpcIMjEjglk
UDG/bqxqwS2/jVUnDFvejbrOkJ/e3NefZa52/fZlXwqnwAlumtHOgEk3j00rHQSA
/04`),a("span",{class:"token operator"},"="),s(`
-----END CERTIFICATE-----
expiration          `),a("span",{class:"token number"},"1698368162"),s(`
issuing_ca          -----BEGIN CERTIFICATE-----
MIIDIDCCAgigAwIBAgIUR6Auk4MVpeis2oLq0StUwce/v/kwDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjYyMzUyNDlaFw0yMzEwMjcyMzUz
MTlaMA8xDTALBgNVBAMTBHRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQDXmlaX2Qu/rF+AFgWqJBCaNPziJrwsBB8nEUQh2S2XRMD9osoliWpaS33i
iFAxc++Mec/FzKIsB7TskYWyFlv/GPmFG5gKdYfMuEMAgHrxM3OYWibQq0hDajJn
oOcT1DwCx0mZqYdGoFVcw2TdW1vqgKRMx1vWBskaJHoGGpRvEPe7cYLz8itwqQfR
7zkcVw3vdK6U50I7NnV/1wC+WOuwZ6IL5DKC1v3DtE5CrYKf/sBwDZfcdwFEjLpQ
3hSXlVtv6t9E7QABcYqFkP5iebisNVP71L1Qk7oCuk4zqKpkbFytD6Nlf1LMRSFj
SDt+aPuoqlmKrNtGsNcTqlW8k39HAgMBAAGjdDByMA4GA1UdDwEB/wQEAwIBBjAP
BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTwEbHemyl86vBdxfMICjaKOJIoJzAf
BgNVHSMEGDAWgBTwEbHemyl86vBdxfMICjaKOJIoJzAPBgNVHREECDAGggR0ZXN0
MA0GCSqGSIb3DQEBCwUAA4IBAQB2y9QDCSNlr+j4v5H/7s4aZR8EWqbSdGc6F9w2
FrR/bwo9eIxWiABFn/SH+bqHSK7fw4TMPJ0rEnJxBEvIPpA2kvGIxsBzPAdPzQ+A
4F6tSJtiXB5A/7IZn9SQLUrcmcA5SuBGN9GjmPLpYSQg2ykJsTlExkYdg4co2sYV
0F1gE5SXFGEmNTwFlpPSmKY6Zs8fKJZrzf+feCXFRlD/u+I4vftJqu7pwxZvPifR
gPWi3kuzj71b4rEkZW3zNCP9XOtkCO/pNW2hJnc0QiTgQGvWXl/A8rIohsc+by2N
MVr8w8iw1OdwbxI0LyC5siVgn+aER5qryYlpdeKR0/F2LuWX
-----END CERTIFICATE-----
private_key         -----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
private_key_type    rsa
serial_number       6e:bb:24:e5:a1:5a:15:9e:4c:07:d6:9e:4b:d0:e3:5e:57:04:bc:5b
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),ga=a("p",null,[a("img",{src:d,alt:"",loading:"lazy"}),a("br"),a("img",{src:v,alt:"",loading:"lazy"})],-1),Aa=i(`<h3 id="_2-4-vault에-인증받기-위한-kubernetes-인증-방식-구성" tabindex="-1"><a class="header-anchor" href="#_2-4-vault에-인증받기-위한-kubernetes-인증-방식-구성"><span>2.4 Vault에 인증받기 위한 Kubernetes 인증 방식 구성</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><p>Vault는 Kubernetes의 Service Account 토큰으로 인증할 수 있는 Kubernetes 인증 방식을 제공합니다. CSI 드라이버가 Vault에 저장된 시크릿 정보에 접근하여 시크릿을 획득하는 과정에서 Vault에 대한 인증/인가가 요구되므로 Kubernetes상의 리소스에서는 Kubernetes 인증 방식을 통해 Kubernetes의 방식으로 인증 받는 워크플로를 구성합니다.</p><p>Vault에 Kubernetes 인증 방식을 활성화 합니다. (이미 구성된 경우 실패합니다.)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth <span class="token builtin class-name">enable</span> kubernetes
</code></pre></div><p>Kubernetes API 주소를 Kubernetes 인증 방식 구성에 설정 합니다. 이 경우 자동으로 Vault Pod를 위한 자체 Service Account를 사용합니다.</p>`,6),ya=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"https://'),a("span",{class:"token variable"},"$KUBERNETES_PORT_443_TCP_ADDR"),s(':443"')]),s(`
`)])])],-1),fa=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"'),a("span",{class:"token variable"},"$EXTERNAL_VAULT_ADDR"),s('"')]),s(`
`)])])],-1),Va=a("p",null,"생성할 Kubernetes 인증 방식의 롤 정의에서 사용되는 정책을 구성합니다. 생서한 Vault KV, PKI의 경로에 저장된 시크릿을 읽고 발행할 수 있는 정책 입니다.",-1),Ia=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault policy "),a("span",{class:"token function"},"write"),s(" injection-app - "),a("span",{class:"token operator"},"<<"),a("span",{class:"token string"},`EOF
path "for-injection/data/my-pass" {
  capabilities = ["read"]
}

path "pki/issue/my-role" {
  capabilities = ["create", "update"]
}
EOF`),s(`
`)])])],-1),Ea=a("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[a("pre",{class:"language-powershell"},[a("code",null,[a("span",{class:"token variable"},"$policy"),s(" = @"),a("span",{class:"token string"},`"
path "`),a("span",{class:"token keyword"},"for"),a("span",{class:"token operator"},"-"),s("injection/"),a("span",{class:"token keyword"},"data"),a("span",{class:"token operator"},"/"),s("my-pass"),a("span",{class:"token string"},`" {
  capabilities = ["`),s("read"),a("span",{class:"token string"},`"]
}

path "`),s("pki/issue/my-role"),a("span",{class:"token string"},`" {
  capabilities = ["`),s("create"),a("span",{class:"token string"},'", "'),s("update"),a("span",{class:"token string"},`"]
}
"`),s(`@

vault policy `),a("span",{class:"token function"},"write"),s(" injection-app "),a("span",{class:"token operator"},"-"),s(" << "),a("span",{class:"token variable"},"$policy"),s(`
`)])])],-1),wa=i(`<p>예제의 롤 정의에서는 허용할 Service Account와 Kubernetes Namespace, 부여하는 정책으로 앞서 생성한 <code>injection-app</code> 정책을 할당합니다. 인증된 이후 유효 기간은 20분으로 설정 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/kubernetes/role/injection <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_names</span><span class="token operator">=</span>webapp-vault <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_namespaces</span><span class="token operator">=</span>default <span class="token punctuation">\\</span>
    <span class="token assign-left variable">policies</span><span class="token operator">=</span>injection-app <span class="token punctuation">\\</span>
    <span class="token assign-left variable">ttl</span><span class="token operator">=</span>20m
</code></pre></div><h3 id="_2-5-sidecar-적용된-애플리케이션-적용" tabindex="-1"><a class="header-anchor" href="#_2-5-sidecar-적용된-애플리케이션-적용"><span>2.5 Sidecar 적용된 애플리케이션 적용</span></a></h3><p>롤에서 정의한 허용하는 Service Account를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create sa webapp-vault
</code></pre></div><p>다음과 같이 정의된 <code>Deployment</code>를 <code>vault-sidecar-deployment.yml</code> 로 정의합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> webapp<span class="token punctuation">-</span>injection
  <span class="token key atrule">labels</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> issues
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> issues
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">1</span>
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-status</span><span class="token punctuation">:</span> <span class="token string">&quot;update&quot;</span>
        <span class="token comment"># KV의 정적 시크릿 저장 대상 파일과 텔플릿 정의</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-secret-my-config.txt</span><span class="token punctuation">:</span> <span class="token string">&quot;for-injection/data/my-pass&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-template-my-config.txt</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          {{- with secret &quot;for-injection/data/my-pass&quot; -}}
          password={{ .Data.data.password }}
          {{- end }}</span>
        <span class="token comment"># PKI의 동적 시크릿 저장 대상 파일과 템플릿 정의 - Cert</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-secret-cert.pem</span><span class="token punctuation">:</span> <span class="token string">&quot;pki/issue/my-role&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-template-cert.pem</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          {{- with secret &quot;pki/issue/my-role&quot; &quot;common_name=test.example.com&quot; &quot;ttl=30s&quot; -}}
          {{ .Data.certificate }}
          {{ .Data.issuing_ca }}
          {{- end }}</span>
        <span class="token comment"># PKI의 동적 시크릿 저장 대상 파일과 템플릿 정의 - Key</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-secret-key.pem</span><span class="token punctuation">:</span> <span class="token string">&quot;pki/issue/my-role&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-template-key.pem</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          {{- with secret &quot;pki/issue/my-role&quot; &quot;common_name=test.example.com&quot; &quot;ttl=30s&quot; -}}
          {{ .Data.private_key }}
          {{- end }}</span>
        <span class="token comment"># Vault의 Kubernetes인증으로 등록되어있는 Role 이름</span>
        <span class="token key atrule">vault.hashicorp.com/role</span><span class="token punctuation">:</span> <span class="token string">&quot;injection&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/template-static-secret-render-interval</span><span class="token punctuation">:</span> <span class="token string">&quot;10s&quot;</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> issues
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceAccountName</span><span class="token punctuation">:</span> webapp<span class="token punctuation">-</span>vault
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> webapp
        <span class="token key atrule">image</span><span class="token punctuation">:</span> jweissig/app<span class="token punctuation">:</span>0.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>spec.template.metadata.annotations</code>에 정의된 <code>vault.hashicorp.com</code>의 설명은 다음과 같습니다.</p><ul><li><code>vault.hashicorp.com/agent-inject</code> : Vault Agent의 사이드카 구성 여부를 지정</li><li><code>vault.hashicorp.com/agent-inject-secret-\\&lt;filename&gt;</code> : <code>filename</code>영역에 문자 값으로 자동 랜더링하여 저장</li><li><code>vault.hashicorp.com/agent-inject-template-\\&lt;filename&gt;</code> : <code>filename</code>영역의 문자값으로 파일을 생성할 때 사용자 정의 방식이 필요한 경우 사용</li><li><code>vault.hashicorp.com/role</code> : kubernetes 인증에 정의한 롤 이름 지정</li><li><code>vault.hashicorp.com/template-static-secret-render-interval</code> : 정적인 시크릿에 대한 검사 주기 설정</li></ul><p>정의한 <code>vault-sidecar-deployment.yml</code>를 적용합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> vault-sidecar-deployment.yml
</code></pre></div><p>생성된 Pod를 확인 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods

NAME                                   READY   STATUS    RESTARTS       AGE
webapp-injection-7768d64fd9-89kqn      <span class="token number">2</span>/2     Running   <span class="token number">0</span>              9m18s
</code></pre></div><p>Pod 내에 애플리케이션 컨테이너 <code>webapp</code>과 Vault Agent인 <code>vault-agent</code> 사이드카 컨테이너가 생성됨을 확인합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods <span class="token punctuation">\\</span>
  <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>issues <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.items[0].metadata.name}&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.spec.containers[*].name}&#39;</span>

webapp vault-agent
</code></pre></div><p>Pod 내 생성된 작용된 시크릿을 확인 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">\\</span>
  <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>issues <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.items[0].metadata.name}&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-c</span> webapp -- <span class="token function">cat</span> /vault/secrets/my-config.txt

<span class="token assign-left variable">password</span><span class="token operator">=</span>my-secret-password-v1
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">\\</span>
  <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>issues <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.items[0].metadata.name}&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-c</span> webapp -- <span class="token function">cat</span> /vault/secrets/cert.pem

-----BEGIN CERTIFICATE-----
MIIESDCCAzCgAwIBAgIUKJqdIZIXXjE021NJzxnhP3Lihu0wDQYJKoZIhvcNAQEL
<span class="token punctuation">..</span>.생략<span class="token punctuation">..</span>.
<span class="token assign-left variable">Mk7y7BOjoZzXiqioAtk61FrjRwrc4vgJk9ESVeMnuJA8SorCAp3iNyVZJvU</span><span class="token operator">=</span>
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIDIDCCAgigAwIBAgIUR6Auk4MVpeis2oLq0StUwce/v/kwDQYJKoZIhvcNAQEL
<span class="token punctuation">..</span>.생략<span class="token punctuation">..</span>.
MVr8w8iw1OdwbxI0LyC5siVgn+aER5qryYlpdeKR0/F2LuWX
-----END CERTIFICATE-----
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">\\</span>
  <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>issues <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.items[0].metadata.name}&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-c</span> webapp -- <span class="token function">cat</span> /vault/secrets/key.pem

-----BEGIN RSA PRIVATE KEY-----
MIIJKAIBAAKCAgEAwSWRRLQ17lpKGaWGCOVaFIafd4NCe8u3LLMKSflutwMh3e7l
<span class="token punctuation">..</span>.생략<span class="token punctuation">..</span>.
cpxBcJwE+orZbH2TJAjVvqyfRrYflOLA6gqkbZd5W6zQClN3orb/E8UzEmg<span class="token operator">=</span>
-----END RSA PRIVATE KEY-----
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">팁</p><p>기본 마운트 경로가 <code>/vault/secrets/&lt;file-name&gt;</code> 이므로, 변경이 필요한경우 다음의 <code>annotation</code> 정의를 추가할 수 있습니다.</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment">## 생략 ##</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
	<span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">annotations</span><span class="token punctuation">:</span>
      	<span class="token comment"># 생략</span>
        <span class="token key atrule">vault.hashicorp.com/agent-inject-file-database-config</span><span class="token punctuation">:</span> <span class="token string">&quot;/some/secret/here.txt&quot;</span>
        <span class="token key atrule">vault.hashicorp.com/secret-volume-path-database-config</span><span class="token punctuation">:</span> <span class="token string">&quot;/app&quot;</span>
</code></pre></div><p>결과 : <code>/app/some/secret/here.txt</code></p></div><h3 id="_2-6-정적-시크릿-자동-갱신" tabindex="-1"><a class="header-anchor" href="#_2-6-정적-시크릿-자동-갱신"><span>2.6 정적 시크릿 자동 갱신</span></a></h3><p>Vault Agent가 시크릿 데이터가 변경됨을 감지하고 대상 Pod에 저장되는 시크릿을 자동으로 갱신합니다.</p><p>정적 시크릿인 KV의 값을 변경해봅니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault kv put for-injection/my-pass <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;my-secret-password-v2&quot;</span>
</code></pre></div><p>다시 Pod내의 저장된 KV 시크릿 값을 확인합니다. 확인 간격을 10초로 정의했으므로, 갱신이 안된경우 다시 확인해봅니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl <span class="token builtin class-name">exec</span> <span class="token punctuation">\\</span>
  <span class="token variable"><span class="token variable">$(</span>kubectl get pod <span class="token parameter variable">-l</span> <span class="token assign-left variable">app</span><span class="token operator">=</span>issues <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.items[0].metadata.name}&quot;</span><span class="token variable">)</span></span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-c</span> webapp -- <span class="token function">cat</span> /vault/secrets/my-config.txt

<span class="token assign-left variable">password</span><span class="token operator">=</span>my-secret-password-v2
</code></pre></div><h3 id="_2-7-동적-시크릿-자동-갱신" tabindex="-1"><a class="header-anchor" href="#_2-7-동적-시크릿-자동-갱신"><span>2.7 동적 시크릿 자동 갱신</span></a></h3><p>Vault가 생성하는 동적 시크릿은 <code>lease</code>에서 생성 후 수명주기를 관리합니다. Vault Agent는 생성한 동적 시크릿의 수명주기를 확인하여 만료되기 전 자동 연장(Renewal) 및 자동 갱신 합니다.</p><p>예제의 인증서의 수명을 <code>60s</code>로 정의하였으므로, 4/5 지점인 약 48초가 지나면 자동갱신됩니다. 앞서 랜더링된 인증서 확인 커맨드를 사용하여 변경되는 인증서를 확인합니다.</p>`,29),_a=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{"bash:no-line-numbers":"",class:"language-bash"},[a("code",null,[s("$ kubectl "),a("span",{class:"token builtin class-name"},"exec"),s(),a("span",{class:"token punctuation"},"\\"),s(`
  `),a("span",{class:"token variable"},[a("span",{class:"token variable"},"$("),s("kubectl get pod "),a("span",{class:"token parameter variable"},"-l"),s(),a("span",{class:"token assign-left variable"},"app"),a("span",{class:"token operator"},"="),s("issues "),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},'"{.items[0].metadata.name}"'),a("span",{class:"token variable"},")")]),s(),a("span",{class:"token punctuation"},"\\"),s(`
  `),a("span",{class:"token parameter variable"},"-c"),s(" webapp -- "),a("span",{class:"token function"},"cat"),s(` /vault/secrets/cert.pem

-----BEGIN CERTIFICATE-----
`),a("span",{class:"token punctuation"},".."),s(".생략"),a("span",{class:"token punctuation"},".."),s(`.
`),a("span",{class:"token assign-left variable"},"Mk7y7BOjoZzXiqioAtk61FrjRwrc4vgJk9ESVeMnuJA8SorCAp3iNyVZJvU"),a("span",{class:"token operator"},"="),s(`
-----END CERTIFICATE-----
`),a("span",{class:"token punctuation"},".."),s(".생략"),a("span",{class:"token punctuation"},".."),s(`.
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br")])],-1),Sa=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{"bash:no-line-numbers":"",class:"language-bash"},[a("code",null,[s("$ kubectl "),a("span",{class:"token builtin class-name"},"exec"),s(),a("span",{class:"token punctuation"},"\\"),s(`
  `),a("span",{class:"token variable"},[a("span",{class:"token variable"},"$("),s("kubectl get pod "),a("span",{class:"token parameter variable"},"-l"),s(),a("span",{class:"token assign-left variable"},"app"),a("span",{class:"token operator"},"="),s("issues "),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},'"{.items[0].metadata.name}"'),a("span",{class:"token variable"},")")]),s(),a("span",{class:"token punctuation"},"\\"),s(`
  `),a("span",{class:"token parameter variable"},"-c"),s(" webapp -- "),a("span",{class:"token function"},"cat"),s(` /vault/secrets/cert.pem

-----BEGIN CERTIFICATE-----
`),a("span",{class:"token punctuation"},".."),s(".생략"),a("span",{class:"token punctuation"},".."),s(`.
`),a("span",{class:"token assign-left variable"},"uDtXjqrZYtEI47dZjsVLxnBDLBoTRmzyxtywRezmvL2aMA5r9Z6WhhmFY2o"),a("span",{class:"token operator"},"="),s(`
-----END CERTIFICATE-----
`),a("span",{class:"token punctuation"},".."),s(".생략"),a("span",{class:"token punctuation"},".."),s(`.
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br")])],-1),Ka=a("h2",{id:"_3-vso-vault-secret-operator",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-vso-vault-secret-operator"},[a("span",null,[s("3. VSO "),a("sup",null,"\bVault"),s(),a("sup",null,"Secret"),s(),a("sup",null,"Operator")])])],-1),Ca={href:"https://developer.hashicorp.com/vault/tutorials/kubernetes/vault-secrets-operator",target:"_blank",rel:"noopener noreferrer"},xa={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/vso",target:"_blank",rel:"noopener noreferrer"},Da=a("p",null,"VSO를 사용하면 Pod가 기존 Kubernetes Secrets을 활용하여 시크릿을 사용하던 방식으로 Vault의 시크릿을 사용하게 됩니다. VSO는 CRD(Custom Resource Definitions)를 구성하여 Vault의 시크릿을 Kubernetes Secrets으로 동기화하는 동작을 수행합니다.",-1),Ma=a("p",null,"애플리케이션 수준, 또는 CSI와 사이드카 인젝션 방식의 구성 또한 Vault 시크릿을 사용하기 위한 다양한 방안을 제공했지만 애플리케이션 또는 기존 배포의 정의에 새로운 구성이 필요합니다. VSO는 Kubernetes의 Secret을 활용하여 기존 사용 경험을 유지하지만 Vault의 시크릿을 사용할 수 있는 방안을 제공합니다.",-1),Ba=a("figure",null,[a("img",{src:y,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Qa={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/vso#supported-kubernetes-versions",target:"_blank",rel:"noopener noreferrer"},ja=i(`<h3 id="_3-1-vso를-위한-vault-구성-helm" tabindex="-1"><a class="header-anchor" href="#_3-1-vso를-위한-vault-구성-helm"><span>3.1 VSO를 위한 Vault 구성 (Helm)</span></a></h3><p>Kubernetes에 <code>Sidecar Injector</code> 서비스를 구성을 설치해야 합니다. 이 구성이 설치되면 <code>annotation</code>에 정의된 내용이 <code>vault-k8s</code> webhook을 호출하여 Pod를 재정의하여 Vault Agent를 사이드카로 주입(Injection)합니다.</p><p>먼저 Vault Helm 차트를 등록합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> hashicorp https://helm.releases.hashicorp.com
</code></pre></div><p>Vault Helm 차트를 사용하여 1) Kubernetes에 Vault를 설치하는 구성 또는 2) 외부 Vault와 연계하는 구성으로 설치 할 수 있습니다.</p><details class="hint-container details"><summary>Vault를 Kubernetes에 설치 (Option)</summary><p>Vault가 별도 구성되어있지 않은 경우 해당 Kubernetes에 Vault 서버를 구성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> vault hashicorp/vault <span class="token punctuation">\\</span>
    <span class="token parameter variable">--set</span> <span class="token string">&quot;server.dev.enabled=true&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--set</span> <span class="token string">&quot;injector.enabled=false&quot;</span> <span class="token punctuation">\\</span>
    <span class="token parameter variable">--set</span> <span class="token string">&quot;csi.enabled=false&quot;</span>
</code></pre></div></details><p>아래와 같이 helm 설치 시 값을 정의한 <code>vault-operator-values.yaml</code> 파일을 생성합니다.</p>`,7),qa=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s(`defaultVaultConnection:
  enabled: `),a("span",{class:"token boolean"},"true"),s(`
  address: http://vault.default.svc.cluster.local:8200
  skipTLSVerify: `),a("span",{class:"token boolean"},"false"),s(`
  spec:
  template:
    spec:
      containers:
      - name: manager
        args:
        - `),a("span",{class:"token string"},'"--client-cache-persistence-model=direct-encrypted"'),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),Ra=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s(`defaultVaultConnection:
  enabled: `),a("span",{class:"token boolean"},"true"),s(`
  `),a("span",{class:"token comment"},"# 연결 가능한 외부 Vault URL을 정의합니다."),s(`
  address: `),a("span",{class:"token string"},'"외부 Vault Url"'),s(`
  skipTLSVerify: `),a("span",{class:"token boolean"},"false"),s(`
  spec:
  template:
    spec:
      containers:
      - name: manager
        args:
        - `),a("span",{class:"token string"},'"--client-cache-persistence-model=direct-encrypted"'),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),Ta=i(`<p>다음을 실행하여 정의한 helm의 값으로 설치를 진행합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm <span class="token function">install</span> vault-secrets-operator <span class="token punctuation">\\</span> hashicorp/vault-secrets-operator <span class="token punctuation">\\</span>
    <span class="token parameter variable">-n</span> vault-secrets-operator-system <span class="token punctuation">\\</span>
    --create-namespace <span class="token punctuation">\\</span>
    <span class="token parameter variable">--values</span> vault-operator-values.yaml
</code></pre></div><p>설치가 완료되면 다음의 Pod를 확인할 수 있습니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get pods <span class="token parameter variable">-n</span> vault-secrets-operator-system

NAME                                                         READY   STATUS    RESTARTS   AGE
vault-secrets-operator-controller-manager-67879cb4d4-wzs6c   <span class="token number">2</span>/2     Running   <span class="token number">0</span>          4h22m
</code></pre></div><h3 id="_3-2-vso에서-사용할-vault-정적-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_3-2-vso에서-사용할-vault-정적-시크릿-정의"><span>3.2 VSO에서 사용할 Vault 정적 시크릿 정의</span></a></h3><p>VSO에서 사용할 KV 시크릿 엔진을 활성화합니다.</p><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span> for-vso <span class="token parameter variable">-version</span><span class="token operator">=</span><span class="token number">2</span> kv
</code></pre></div><p><code>for-vso/my-pass</code> 경로에 <code>password</code> 값을 저장 합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault kv put for-vso/my-pass <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;my-secret-password-v1&quot;</span>

<span class="token operator">==</span><span class="token operator">==</span> Secret Path <span class="token operator">==</span><span class="token operator">==</span>
for-vso/data/my-pass

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Metadata <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Key                Value
---                -----
created_time       <span class="token number">2023</span>-10-27T04:24:18.430362Z
custom_metadata    <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
deletion_time      n/a
destroyed          <span class="token boolean">false</span>
version            <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),Na={class:"hint-container details"},Pa=a("summary",null,"저장된 시크릿 값을 확인",-1),Fa=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s(`$ vault kv get for-vso/my-pass

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(" Secret Path "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(`
for-vso/data/my-pass

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(" Metadata "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"="),s(`
Key                Value
---                -----
created_time       `),a("span",{class:"token number"},"2023"),s(`-10-27T04:24:18.430362Z
custom_metadata    `),a("span",{class:"token operator"},"<"),s("nil"),a("span",{class:"token operator"},">"),s(`
deletion_time      n/a
destroyed          `),a("span",{class:"token boolean"},"false"),s(`
version            `),a("span",{class:"token number"},"1"),s(`

`),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(" Data "),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),a("span",{class:"token operator"},"=="),s(`
Key         Value
---         -----
password    my-secret-password-v1
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),La=a("figure",null,[a("img",{src:f,alt:"",tabindex:"0",loading:"lazy"}),a("figcaption")],-1),Ga=i(`<h3 id="_3-3-vso에서-사용할-vault-pki-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_3-3-vso에서-사용할-vault-pki-시크릿-정의"><span>3.3 VSO에서 사용할 Vault PKI 시크릿 정의</span></a></h3><p>PKI 시크릿의 경우 동적 시크릿으로, 발급 후 만료되기 전 Kubernetes Secret의 내용을 갱신 합니다.</p><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>pki pki
vault secrets tune -max-lease-ttl<span class="token operator">=</span>86400s -default-lease-ttl<span class="token operator">=</span>3600s pki
</code></pre></div><p>루트 인증서를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> <span class="token parameter variable">-field</span><span class="token operator">=</span>certificate pki/root/generate/internal <span class="token punctuation">\\</span>
  <span class="token assign-left variable">common_name</span><span class="token operator">=</span><span class="token string">&quot;test&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token string">&quot;86400h&quot;</span>
</code></pre></div><p>생성된 루트 인증서에 기반한 PKI 롤을 생성합니다. 예제에서는 동적 시크릿의 교체를 확인하기 위해 주기(<code>ttl</code>, <code>max_ttl</code>)를 짧게 구성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> pki/roles/my-role <span class="token punctuation">\\</span>
  <span class="token assign-left variable">key_bits</span><span class="token operator">=</span><span class="token number">4096</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">ttl</span><span class="token operator">=</span><span class="token string">&quot;60s&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">max_ttl</span><span class="token operator">=</span><span class="token string">&quot;60s&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allow_ip_sans</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allowed_domains</span><span class="token operator">=</span><span class="token string">&quot;example.com,my.domain&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">allow_subdomains</span><span class="token operator">=</span>true
</code></pre></div>`,8),Ua={class:"hint-container details"},Ja=a("summary",null,"PKI 인증서 발급 확인",-1),Ya=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("$ vault "),a("span",{class:"token function"},"write"),s(" pki/issue/my-role "),a("span",{class:"token assign-left variable"},"common_name"),a("span",{class:"token operator"},"="),s(`my-test.example.com

Key                 Value
---                 -----
ca_chain            `),a("span",{class:"token punctuation"},"["),s(`-----BEGIN CERTIFICATE-----
MIIDIDCCAgigAwIBAgIUR6Auk4MVpeis2oLq0StUwce/v/kwDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjYyMzUyNDlaFw0yMzEwMjcyMzUz
MTlaMA8xDTALBgNVBAMTBHRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQDXmlaX2Qu/rF+AFgWqJBCaNPziJrwsBB8nEUQh2S2XRMD9osoliWpaS33i
iFAxc++Mec/FzKIsB7TskYWyFlv/GPmFG5gKdYfMuEMAgHrxM3OYWibQq0hDajJn
oOcT1DwCx0mZqYdGoFVcw2TdW1vqgKRMx1vWBskaJHoGGpRvEPe7cYLz8itwqQfR
7zkcVw3vdK6U50I7NnV/1wC+WOuwZ6IL5DKC1v3DtE5CrYKf/sBwDZfcdwFEjLpQ
3hSXlVtv6t9E7QABcYqFkP5iebisNVP71L1Qk7oCuk4zqKpkbFytD6Nlf1LMRSFj
SDt+aPuoqlmKrNtGsNcTqlW8k39HAgMBAAGjdDByMA4GA1UdDwEB/wQEAwIBBjAP
BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTwEbHemyl86vBdxfMICjaKOJIoJzAf
BgNVHSMEGDAWgBTwEbHemyl86vBdxfMICjaKOJIoJzAPBgNVHREECDAGggR0ZXN0
MA0GCSqGSIb3DQEBCwUAA4IBAQB2y9QDCSNlr+j4v5H/7s4aZR8EWqbSdGc6F9w2
FrR/bwo9eIxWiABFn/SH+bqHSK7fw4TMPJ0rEnJxBEvIPpA2kvGIxsBzPAdPzQ+A
4F6tSJtiXB5A/7IZn9SQLUrcmcA5SuBGN9GjmPLpYSQg2ykJsTlExkYdg4co2sYV
0F1gE5SXFGEmNTwFlpPSmKY6Zs8fKJZrzf+feCXFRlD/u+I4vftJqu7pwxZvPifR
gPWi3kuzj71b4rEkZW3zNCP9XOtkCO/pNW2hJnc0QiTgQGvWXl/A8rIohsc+by2N
MVr8w8iw1OdwbxI0LyC5siVgn+aER5qryYlpdeKR0/F2LuWX
-----END CERTIFICATE-----`),a("span",{class:"token punctuation"},"]"),s(`
certificate         -----BEGIN CERTIFICATE-----
MIIETjCCAzagAwIBAgIUbrsk5aFaFZ5MB9aeS9DjXlcEvFswDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjcwMDU1MDlaFw0yMzEwMjcwMDU2
MDJaMB4xHDAaBgNVBAMTE215LXRlc3QuZXhhbXBsZS5jb20wggIiMA0GCSqGSIb3
DQEBAQUAA4ICDwAwggIKAoICAQDBSDy7gpekQv6Ro8p+4Szm8iavHv3KRyOoMYOv
UdRlT+2KT6UcZGc9c0RLYS1yvT2QuYm6CeFLs+msYU/mVdLG/ih8YlCiOG9uDyZi
CNqA+MOkxkwgChTfNgeOWQr8uo2J9CaV3bjProtE7weGaK/J5UYDTHxsZxMTom+t
dMCAHol8d888cqVUvHXOth07/OKO5orKBcsxFhq0IAwERNT3kGxIcfOFvhWJfNUn
ihdZMjq8u/CBaD3MhKU2Sn5e40FGLKuIoF0pMxhvPnJARiz53sAMMujoQxVgiIsQ
9DT8phhNKXqufjOYEUUJ0hy/quy+/i4B00SPNsOOcD8vOsz96mhZC9ik4Avz0xdB
KY0UaeULPmztdJW08dEaY1DSJB/k8rPMu4VZAFgxeFgj4byA9UwQ14aMJCZWHZYH
cGbkJjcdFEC1ZhICKIHOO0KSoXpxD9xIQ1UWYvoegqSBSqvecaYf6y52kg7hb4rg
jVFdBKWhBCGJ1RaqnbnBBp+Qk5AAkCyYfUpXXNmpYB7akIXLe3iTL50MkaiTd+GE
xBXhfCYvwbpIZu35bAurwp3+nSTTeJw4d2O7s1L4iqdQ24fERYwEL8euLzzmxsjv
qsmN1cHzbMulrCjVT3ZNBPFiMltoDJXyJDssKTM4nOpxr+FxBiCpbufcy2tDJ4eb
svMxiQIDAQABo4GSMIGPMA4GA1UdDwEB/wQEAwIDqDAdBgNVHSUEFjAUBggrBgEF
BQcDAQYIKwYBBQUHAwIwHQYDVR0OBBYEFGO3lOOstANAUseQaJmGMnCVQkw8MB8G
A1UdIwQYMBaAFPARsd6bKXzq8F3F8wgKNoo4kignMB4GA1UdEQQXMBWCE215LXRl
c3QuZXhhbXBsZS5jb20wDQYJKoZIhvcNAQELBQADggEBADT1aqab6RhLGuAvUgIS
3lZ+B/ltWFQroFRgnfQArlMrVnCE1/7LAH+i7n8Ev7ixK0xP2CYRLwm8McLBEIjm
qWB8ZXJJq4gXqZ6i5kIFvuRILkesSGJbs49TdeAMz6lyJd/BQmzM/uAhnqMrhlRt
H6ZWnC5Z7dRGWT/yIlKL6kMcmxqEZCTt7j76V/8CRRUtxHtEgt4B4R/0lykWM8Ed
HMok6crNYk94Jg/S8MWZlUHtCjDeXMd3mhDVQKaBNeLGjyugDF8KLVpcIMjEjglk
UDG/bqxqwS2/jVUnDFvejbrOkJ/e3NefZa52/fZlXwqnwAlumtHOgEk3j00rHQSA
/04`),a("span",{class:"token operator"},"="),s(`
-----END CERTIFICATE-----
expiration          `),a("span",{class:"token number"},"1698368162"),s(`
issuing_ca          -----BEGIN CERTIFICATE-----
MIIDIDCCAgigAwIBAgIUR6Auk4MVpeis2oLq0StUwce/v/kwDQYJKoZIhvcNAQEL
BQAwDzENMAsGA1UEAxMEdGVzdDAeFw0yMzEwMjYyMzUyNDlaFw0yMzEwMjcyMzUz
MTlaMA8xDTALBgNVBAMTBHRlc3QwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEK
AoIBAQDXmlaX2Qu/rF+AFgWqJBCaNPziJrwsBB8nEUQh2S2XRMD9osoliWpaS33i
iFAxc++Mec/FzKIsB7TskYWyFlv/GPmFG5gKdYfMuEMAgHrxM3OYWibQq0hDajJn
oOcT1DwCx0mZqYdGoFVcw2TdW1vqgKRMx1vWBskaJHoGGpRvEPe7cYLz8itwqQfR
7zkcVw3vdK6U50I7NnV/1wC+WOuwZ6IL5DKC1v3DtE5CrYKf/sBwDZfcdwFEjLpQ
3hSXlVtv6t9E7QABcYqFkP5iebisNVP71L1Qk7oCuk4zqKpkbFytD6Nlf1LMRSFj
SDt+aPuoqlmKrNtGsNcTqlW8k39HAgMBAAGjdDByMA4GA1UdDwEB/wQEAwIBBjAP
BgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBTwEbHemyl86vBdxfMICjaKOJIoJzAf
BgNVHSMEGDAWgBTwEbHemyl86vBdxfMICjaKOJIoJzAPBgNVHREECDAGggR0ZXN0
MA0GCSqGSIb3DQEBCwUAA4IBAQB2y9QDCSNlr+j4v5H/7s4aZR8EWqbSdGc6F9w2
FrR/bwo9eIxWiABFn/SH+bqHSK7fw4TMPJ0rEnJxBEvIPpA2kvGIxsBzPAdPzQ+A
4F6tSJtiXB5A/7IZn9SQLUrcmcA5SuBGN9GjmPLpYSQg2ykJsTlExkYdg4co2sYV
0F1gE5SXFGEmNTwFlpPSmKY6Zs8fKJZrzf+feCXFRlD/u+I4vftJqu7pwxZvPifR
gPWi3kuzj71b4rEkZW3zNCP9XOtkCO/pNW2hJnc0QiTgQGvWXl/A8rIohsc+by2N
MVr8w8iw1OdwbxI0LyC5siVgn+aER5qryYlpdeKR0/F2LuWX
-----END CERTIFICATE-----
private_key         -----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
private_key_type    rsa
serial_number       6e:bb:24:e5:a1:5a:15:9e:4c:07:d6:9e:4b:d0:e3:5e:57:04:bc:5b
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),za=a("p",null,[a("img",{src:d,alt:"",loading:"lazy"}),a("br"),a("img",{src:v,alt:"",loading:"lazy"})],-1),Za=i(`<h3 id="_3-4-vso에서-사용할-vault-동적-시크릿-정의" tabindex="-1"><a class="header-anchor" href="#_3-4-vso에서-사용할-vault-동적-시크릿-정의"><span>3.4 VSO에서 사용할 Vault 동적 시크릿 정의</span></a></h3><p>예제에서는 동적 시크릿으로 PostgreSQL 데이터베이스에 대한 Database 시크릿 엔진을 구성합니다. 구성에 앞서 PostgreSQL을 설치해야 합니다. 먼저 설치될 Kubernetes Namespace를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl create ns postgres
</code></pre></div><p>bitnami에서 제공하는 PostgreSQL Helm Chart를 설치 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami
</code></pre></div><p>PostgreSQL을 설치 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>helm upgrade <span class="token parameter variable">--install</span> postgres bitnami/postgresql <span class="token parameter variable">--namespace</span> postgres <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.audit.logConnections</span><span class="token operator">=</span>true  <span class="token parameter variable">--set</span> <span class="token assign-left variable">auth.postgresPassword</span><span class="token operator">=</span>secret-pass
</code></pre></div><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><p>Database 시크릿 엔진을 활성화 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault secrets <span class="token builtin class-name">enable</span> <span class="token parameter variable">-path</span><span class="token operator">=</span>demo-db database
</code></pre></div><p>Vault에 PostgreSQL의 동적 시크릿을 위한 구성을 합니다.</p>`,11),Ha=i(`<p>PostgreSQL을 위한 롤을 생성합니다. 갱신 테스트를 위해 시크릿 수명을 1분으로 정의합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> demo-db/roles/dev-postgres <span class="token punctuation">\\</span>
  <span class="token assign-left variable">db_name</span><span class="token operator">=</span>demo-db <span class="token punctuation">\\</span>
  <span class="token assign-left variable">creation_statements</span><span class="token operator">=</span><span class="token string">&quot;CREATE ROLE <span class="token entity" title="\\&quot;">\\&quot;</span>{{name}}<span class="token entity" title="\\&quot;">\\&quot;</span> WITH LOGIN PASSWORD &#39;{{password}}&#39; VALID UNTIL &#39;{{expiration}}&#39;; \\
    GRANT ALL PRIVILEGES ON DATABASE postgres TO <span class="token entity" title="\\&quot;">\\&quot;</span>{{name}}<span class="token entity" title="\\&quot;">\\&quot;</span>;&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">backend</span><span class="token operator">=</span>demo-db <span class="token punctuation">\\</span>
  <span class="token assign-left variable">name</span><span class="token operator">=</span>dev-postgres <span class="token punctuation">\\</span>
  <span class="token assign-left variable">default_ttl</span><span class="token operator">=</span><span class="token string">&quot;1m&quot;</span> <span class="token punctuation">\\</span>
  <span class="token assign-left variable">max_ttl</span><span class="token operator">=</span><span class="token string">&quot;1m&quot;</span>
</code></pre></div><p>동적으로 생성되는 Database 계정을 확인합니다.</p>`,3),Oa=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{bash:"",class:"language-bash"},[a("code",null,[s("$ vault "),a("span",{class:"token builtin class-name"},"read"),s(` demo-db/creds/dev-postgres

Key                Value
---                -----
lease_id           demo-db/creds/dev-postgres/V3kcRCCQQC3loq3MCO84UnWT
lease_duration     1m
lease_renewable    `),a("span",{class:"token boolean"},"true"),s(`
password           1hmvH1a4hu-2DBrTjfzt
username           v-token-dev-post-xhRYa0CK6DFLVMqkgikF-1698388424
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("div",{class:"highlight-line"}," ")])],-1),Wa=i(`<h3 id="_3-5-vault에-인증받기-위한-kubernetes-인증-방식-구성" tabindex="-1"><a class="header-anchor" href="#_3-5-vault에-인증받기-위한-kubernetes-인증-방식-구성"><span>3.5 Vault에 인증받기 위한 Kubernetes 인증 방식 구성</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Kubernetes내의 Vault에서 CLI 사용</p><p>Kubernetes내에 배포된 Vault인 경우 다음과 같이 쉘을 실행할 수 있도록 Pod에 접근합니다. (Optional)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> vault-0 -- /bin/sh
</code></pre></div></div><p>Vault는 Kubernetes의 Service Account 토큰으로 인증할 수 있는 Kubernetes 인증 방식을 제공합니다. CSI 드라이버가 Vault에 저장된 시크릿 정보에 접근하여 시크릿을 획득하는 과정에서 Vault에 대한 인증/인가가 요구되므로 Kubernetes상의 리소스에서는 Kubernetes 인증 방식을 통해 Kubernetes의 방식으로 인증 받는 워크플로를 구성합니다.</p><p>Vault에 Kubernetes 인증 방식을 활성화 합니다. (이미 구성된 경우 실패합니다.)</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault auth <span class="token builtin class-name">enable</span> kubernetes
</code></pre></div><p>Kubernetes API 주소를 Kubernetes 인증 방식 구성에 설정 합니다. 이 경우 자동으로 Vault Pod를 위한 자체 Service Account를 사용합니다.</p>`,6),Xa=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"https://'),a("span",{class:"token variable"},"$KUBERNETES_PORT_443_TCP_ADDR"),s(':443"')]),s(`
`)])])],-1),$a=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault "),a("span",{class:"token function"},"write"),s(" auth/kubernetes/config "),a("span",{class:"token punctuation"},"\\"),s(`
    `),a("span",{class:"token assign-left variable"},"kubernetes_host"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},[s('"'),a("span",{class:"token variable"},"$EXTERNAL_VAULT_ADDR"),s('"')]),s(`
`)])])],-1),as=a("p",null,"생성할 Kubernetes 인증 방식의 롤 정의에서 사용되는 정책을 구성합니다. 생서한 Vault KV, PKI의 경로에 저장된 시크릿을 읽고 발행할 수 있는 정책 입니다.",-1),ss=a("div",{class:"language-bash line-numbers-mode","data-ext":"sh","data-title":"sh"},[a("pre",{class:"language-bash"},[a("code",null,[s("vault policy "),a("span",{class:"token function"},"write"),s(" vso-app - "),a("span",{class:"token operator"},"<<"),a("span",{class:"token string"},`EOF
path "for-vso/data/my-pass" {
  capabilities = ["read"]
}

path "pki/issue/my-role" {
  capabilities = ["create", "update"]
}

path "demo-db/creds/dev-postgres" {
   capabilities = ["read"]
}
EOF`),s(`
`)])]),a("div",{class:"line-numbers","aria-hidden":"true"},[a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"}),a("div",{class:"line-number"})])],-1),ns=a("div",{class:"language-powershell","data-ext":"powershell","data-title":"powershell"},[a("pre",{class:"language-powershell"},[a("code",null,[a("span",{class:"token variable"},"$policy"),s(" = @"),a("span",{class:"token string"},`"
path "`),a("span",{class:"token keyword"},"for"),a("span",{class:"token operator"},"-"),s("vso/"),a("span",{class:"token keyword"},"data"),a("span",{class:"token operator"},"/"),s("my-pass"),a("span",{class:"token string"},`" {
  capabilities = ["`),s("read"),a("span",{class:"token string"},`"]
}

path "`),s("pki/issue/my-role"),a("span",{class:"token string"},`" {
  capabilities = ["`),s("create"),a("span",{class:"token string"},'", "'),s("update"),a("span",{class:"token string"},`"]
}

path "`),s("demo-db/creds/dev-postgres"),a("span",{class:"token string"},`" {
   capabilities = ["`),s("read"),a("span",{class:"token string"},`"]
}
"`),s(`@

vault policy `),a("span",{class:"token function"},"write"),s(" vso-app "),a("span",{class:"token operator"},"-"),s(" << "),a("span",{class:"token variable"},"$policy"),s(`
`)])])],-1),es=i(`<p>예제의 롤 정의에서는 허용할 Service Account와 Kubernetes Namespace, 부여하는 정책으로 앞서 생성한 <code>vso-app</code> 정책을 할당합니다. 인증된 이후 유효 기간은 20분으로 설정 합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>vault <span class="token function">write</span> auth/kubernetes/role/vso <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_names</span><span class="token operator">=</span>webapp-vault <span class="token punctuation">\\</span>
    <span class="token assign-left variable">bound_service_account_namespaces</span><span class="token operator">=</span>default <span class="token punctuation">\\</span>
    <span class="token assign-left variable">policies</span><span class="token operator">=</span>vso-app <span class="token punctuation">\\</span>
    <span class="token assign-left variable">ttl</span><span class="token operator">=</span>20m
</code></pre></div><h3 id="_3-6-vso-crd-vaultauth-정의" tabindex="-1"><a class="header-anchor" href="#_3-6-vso-crd-vaultauth-정의"><span>3.6 VSO CRD &quot;VaultAuth&quot; 정의</span></a></h3><p>VSO의 Secret 동기화를 위한 구성에 필요한 인증을 위한 리소스로 <code>VaultAuth</code>를 정의해야 합니다. 다음과 같이 <code>vault-auth-static.yaml</code> 파일을 작성합니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> secrets.hashicorp.com/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VaultAuth
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>auth
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">kubernetes</span><span class="token punctuation">:</span>
    <span class="token key atrule">audiences</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> vault
    <span class="token key atrule">role</span><span class="token punctuation">:</span> vso
    <span class="token key atrule">serviceAccount</span><span class="token punctuation">:</span> webapp<span class="token punctuation">-</span>vault
    <span class="token key atrule">tokenExpirationSeconds</span><span class="token punctuation">:</span> <span class="token number">600</span>
  <span class="token key atrule">method</span><span class="token punctuation">:</span> kubernetes
  <span class="token key atrule">mount</span><span class="token punctuation">:</span> kubernetes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>VaultAuth</code>를 적용합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> vault-auth-static.yaml
</code></pre></div><h3 id="_3-7-vso-crd-정적-시크릿" tabindex="-1"><a class="header-anchor" href="#_3-7-vso-crd-정적-시크릿"><span>3.7 VSO CRD - 정적 시크릿</span></a></h3><p>시크릿 정의 중 정적 시크릿인 KV version 1, KV version 2를 정의하기위해서는 <code>VaultStaticSecret</code>를 사용합니다.</p>`,9),ts={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/vso/api-reference#vaultstaticsecretspec",target:"_blank",rel:"noopener noreferrer"},ls=i(`<table><thead><tr><th>필드</th><th>설명</th></tr></thead><tbody><tr><td><code>vaultAuthRef</code> string</td><td>지정되지 않은 경우 동일 Kubernetes Namespace의 <code>default</code> VaultAuth를 사용합니다. VaultAuth 리소스에 대한 VaultAuthRef에 네임스페이스 접두사를 붙일 수 있습니다(예: <code>namespaceA/vaultAuthRefB</code>).</td></tr><tr><td><code>namespace</code> string</td><td>Vault의 Namespace를 정의합니다.</td></tr><tr><td><code>mount</code> string</td><td>마운트 된 KV 시크릿 엔진 Path를 정의합니다.</td></tr><tr><td><code>path</code> string</td><td>대상 KV 시크릿 엔진 내의 저장된 시크릿 경로를 정의 합니다.</td></tr><tr><td><code>version</code> integer</td><td>KV version 2 인 경우 저장된 시크릿 버전을 정의 합니다.</td></tr><tr><td><code>refreshAfter</code> string</td><td>갱신 주기를 서정합니다.</td></tr><tr><td><code>hmacSecretData</code> boolean</td><td>HMACSecretData는 오퍼레이터가 시크릿 데이터의 HMAC를 계산할지 여부를 결정합니다.</td></tr><tr><td><code>rolloutRestartTargets</code></td><td>애플리케이션이 변경된 Secret의 마운트된 값을 인지하지 못하는 경우 강재로 Rollout-Restart를 수행할 대상을 정의합니다.</td></tr><tr><td><code>destination</code></td><td>저장할 Secret을 지정합니다.</td></tr></tbody></table><p>Vault의 KV version 2를 적용하는 <code>VaultStaticSecret</code> 정의하는 <code>static-secret.yaml</code> 파일 내용은 다음과 같습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> secrets.hashicorp.com/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VaultStaticSecret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vault<span class="token punctuation">-</span>kv<span class="token punctuation">-</span>app
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment"># Static 시크릿 엔진인 KV의 유형</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> kv<span class="token punctuation">-</span>v2
  <span class="token comment"># KV 엔진의 마운트 Path</span>
  <span class="token key atrule">mount</span><span class="token punctuation">:</span> for<span class="token punctuation">-</span>vso
  <span class="token comment"># KV의 시크릿 저장 경로</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>pass
  <span class="token comment"># k8s secret 이름 정의</span>
  <span class="token key atrule">destination</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> secretkv
    <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 정적 시크릿의 변경 확인 주기</span>
  <span class="token key atrule">refreshAfter</span><span class="token punctuation">:</span> 30s
  <span class="token comment"># 생성한 Vault 인증을 위한 VaultAuth 리소스 이름</span>
  <span class="token key atrule">vaultAuthRef</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>VaultStaticSecret</code>을 적용합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> static-secret.yaml
</code></pre></div><p>적용이 완료되면 지정한 <code>secretkv</code> 이름으로 Secret 리소스가 생성되고, 동기화된 내용을 확인할 수 있습니다.</p>`,6),is=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{bash:"",class:"language-bash"},[a("code",null,[s(`$ kubectl get secret

NAME        TYPE        DATA   AGE
secretkv    Opaque      `),a("span",{class:"token number"},"2"),s(`      4h55m

$ kubectl get secret secretkv `),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},"'{.data.password}'"),s(),a("span",{class:"token operator"},"|"),s(" base64 "),a("span",{class:"token parameter variable"},"--decode"),s(`

my-secret-password-v1
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," ")])],-1),cs=i(`<p>다음과 같이 저장된 시크릿을 업데이트 합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ vault kv put for-vso/my-pass <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;my-secret-password-v2&quot;</span>

<span class="token operator">==</span><span class="token operator">==</span> Secret Path <span class="token operator">==</span><span class="token operator">==</span>
for-vso/data/my-pass

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span> Metadata <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
Key                Value
---                -----
created_time       <span class="token number">2023</span>-10-27T05:43:54.906895Z
custom_metadata    <span class="token operator">&lt;</span>nil<span class="token operator">&gt;</span>
deletion_time      n/a
destroyed          <span class="token boolean">false</span>
version            <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Secret 리소스에 변경된 값이 동기화 되었는지 확인합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>$ kubectl get secret secretkv <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.data.password}&#39;</span> <span class="token operator">|</span> base64 <span class="token parameter variable">--decode</span>

my-secret-password-v2
</code></pre></div><h3 id="_3-8-vso-crd-pki-시크릿" tabindex="-1"><a class="header-anchor" href="#_3-8-vso-crd-pki-시크릿"><span>3.8 VSO CRD - PKI 시크릿</span></a></h3><p>시크릿 정의 중 동적 시크릿인 PKI를 정의하기위해서는 <code>VaultPKISecret</code>를 사용합니다.</p>`,6),os={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/vso/api-reference#vaultpkisecretspec",target:"_blank",rel:"noopener noreferrer"},ps=i(`<table><thead><tr><th>필드</th><th>설명</th></tr></thead><tbody><tr><td><code>vaultAuthRef</code> string</td><td>지정되지 않은 경우 동일 Kubernetes Namespace의 <code>default</code> VaultAuth를 사용합니다. VaultAuth 리소스에 대한 VaultAuthRef에 네임스페이스 접두사를 붙일 수 있습니다(예: <code>namespaceA/vaultAuthRefB</code>).</td></tr><tr><td><code>namespace</code> string</td><td>Vault의 Namespace를 정의합니다.</td></tr><tr><td><code>mount</code> string</td><td>마운트 된 KV 시크릿 엔진 Path를 정의합니다.</td></tr><tr><td><code>role</code> string</td><td>PKI 시크릿 엔진 구성에서 사용할 롤 이름을 정의합니다.</td></tr><tr><td><code>revoke</code> boolean</td><td>정의한 리소스가 삭제되면 생성한 인증서도 취소(Revoke)할지의 여부를 정의합니다.</td></tr><tr><td><code>clear</code> boolean</td><td>정의한 리소스가 삭제되면 동기화 된 Secret 리소스도 삭제할지 여부를 정의합니다.</td></tr><tr><td><code>version</code> integer</td><td>KV version 2 인 경우 저장된 시크릿 버전을 정의 합니다.</td></tr><tr><td><code>expiryOffset</code> string</td><td>인증서를 갱신해야 하는 시기를 계산하는 데 오프셋(만료되기 이전 몇 시간 전)입니다.</td></tr><tr><td><code>issuerRef</code> string</td><td>PKI 발급자에 대한 참조를 정의합니다.</td></tr><tr><td><code>rolloutRestartTargets</code></td><td>애플리케이션이 변경된 Secret의 마운트된 값을 인지하지 못하는 경우 강재로 Rollout-Restart를 수행할 대상을 정의합니다.</td></tr><tr><td><code>destination</code></td><td>저장할 Secret을 지정합니다.</td></tr><tr><td><code>commonName</code> string</td><td>PKI 인증서 생싱시 요청할 CN 입니다.</td></tr><tr><td><code>altNames</code> string array</td><td>요청에 포함할 대체 이름 DNS 이름과 이메일 주소를 나열합니다.</td></tr><tr><td><code>ipSans</code> string array</td><td>PKI 인증서 생싱시 요청할 IP SANs 입니다.</td></tr><tr><td><code>uriSans</code> string array</td><td>PKI 인증서 생싱시 요청할 URI SANs 입니다.</td></tr><tr><td><code>otherSans</code> string array</td><td>PKI 인증서 생싱시 요청할 oid;type:value SANs 입니다.</td></tr><tr><td><code>ttl</code> string</td><td>인증서의 유효기간을 지정합니다.</td></tr><tr><td><code>format</code> string</td><td>인증서 형태를 지정합니다. (pem, der, pem_bundle)</td></tr><tr><td><code>privateKeyFormat</code> string</td><td>기본 값은 DER이며, 반환된 개인 키에 base64로 인코딩된 pkcs8 또는 PEM으로 인코딩된 pkcs8이 포함되도록 하려면 이 매개변수를 &quot;pkcs8&quot;로 지정합니다.</td></tr><tr><td><code>notAfter</code> string</td><td>NotAfter 필드에 날짜 값을 지정합니다. 값 형식은 UTC 형식인 YYYY-MM-ddTHH:MM:SSZ로 지정해야 합니다.</td></tr><tr><td><code>excludeCNFromSans</code> boolean</td><td>DNS 또는 이메일 제목 대체 이름에서 CNFromSans를 제외합니다.</td></tr></tbody></table><p>Vault의 PKI를 적용하는 <code>VaultPKISecret</code> 정의하는 <code>pki-secret.yaml</code> 파일 내용은 다음과 같습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> secrets.hashicorp.com/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VaultPKISecret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vault<span class="token punctuation">-</span>pki<span class="token punctuation">-</span>app
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment"># PKI 시크릿 엔진의 마운트 Path</span>
  <span class="token key atrule">mount</span><span class="token punctuation">:</span> pki
  <span class="token comment"># 인증서를 발급할 PKI 롤</span>
  <span class="token key atrule">role</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>role
  <span class="token comment"># 옵션</span>
  <span class="token key atrule">commonName</span><span class="token punctuation">:</span> test.example.com
  <span class="token comment"># 인증서 형태</span>
  <span class="token key atrule">format</span><span class="token punctuation">:</span> pem
  <span class="token comment"># 갱신 트리거 시간</span>
  <span class="token key atrule">expiryOffset</span><span class="token punctuation">:</span> 2s
  <span class="token comment"># 발급되는 인증서의 TTL</span>
  <span class="token key atrule">ttl</span><span class="token punctuation">:</span> 30s
  <span class="token comment"># k8s secret 이름 정의</span>
  <span class="token key atrule">destination</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> secretpki
    <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># 교체 발생시 Restart할 대상 지정</span>
  <span class="token key atrule">rolloutRestartTargets</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
      <span class="token key atrule">name</span><span class="token punctuation">:</span> vso<span class="token punctuation">-</span>pki<span class="token punctuation">-</span>demo
  <span class="token comment"># 생성한 Vault 인증을 위한 VaultAuth 리소스 이름</span>
  <span class="token key atrule">vaultAuthRef</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>VaultPKISecret</code>을 적용합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> pki-secret.yaml
</code></pre></div><p>적용이 완료되면 지정한 <code>secretpki</code> 이름으로 Secret 리소스가 생성되고, 동기화된 내용을 확인할 수 있습니다. 여기서는 UNIXTIMESTAMP로 기록되는 expiration으로 확인해 봅니다.</p>`,6),rs=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{"bash:no-line-numbers":"",class:"language-bash"},[a("code",null,[s(`$ kubectl get secret

NAME         TYPE        DATA   AGE
secretpki    Opaque      `),a("span",{class:"token number"},"2"),s(`      4h55m

$ kubectl get secret secretpki `),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},"'{.data.expiration}'"),s(),a("span",{class:"token operator"},"|"),s(" base64 "),a("span",{class:"token parameter variable"},"--decode"),s(`

`),a("span",{class:"token number"},"1698386116"),s(`

`),a("span",{class:"token comment"},"### 시간이 흐른 뒤 새로 발급된 인증서의 만료 시간을 확인합니다."),s(`

$ kubectl get secret secretpki `),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},"'{.data.expiration}'"),s(),a("span",{class:"token operator"},"|"),s(" base64 "),a("span",{class:"token parameter variable"},"--decode"),s(`

`),a("span",{class:"token number"},"1698386172"),s(`
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," ")])],-1),us=a("h3",{id:"_3-9-vso-crd-동적-시크릿",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_3-9-vso-crd-동적-시크릿"},[a("span",null,"3.9 VSO CRD - 동적 시크릿")])],-1),ds=a("p",null,[s("시크릿 정의 중 동적 시크릿인 PKI를 정의하기위해서는 "),a("code",null,"VaultDynamicSecret"),s("를 사용합니다.")],-1),vs={href:"https://developer.hashicorp.com/vault/docs/platform/k8s/vso/api-reference#vaultdynamicsecretspec",target:"_blank",rel:"noopener noreferrer"},bs=i(`<table><thead><tr><th>필드</th><th>설명</th></tr></thead><tbody><tr><td><code>vaultAuthRef</code> string</td><td>지정되지 않은 경우 동일 Kubernetes Namespace의 <code>default</code> VaultAuth를 사용합니다. VaultAuth 리소스에 대한 VaultAuthRef에 네임스페이스 접두사를 붙일 수 있습니다(예: <code>namespaceA/vaultAuthRefB</code>).</td></tr><tr><td><code>namespace</code> string</td><td>Vault의 Namespace를 정의합니다.</td></tr><tr><td><code>mount</code> string</td><td>마운트 된 KV 시크릿 엔진 Path를 정의합니다.</td></tr><tr><td><code>requestHTTPMethod</code> string</td><td>Vault에서 시크릿을 동기화할 때 사용할 요청 HTTPMethod이며, 기본은 <code>GET</code> 이므로 필요시 다른 요청 HTTPMethod를 정의합니다.</td></tr><tr><td><code>path</code> string</td><td>Vault에서 자격 증명을 가져올 경로이며, 마운트에 상대적입니다.</td></tr><tr><td><code>clear</code> boolean</td><td>정의한 리소스가 삭제되면 동기화 된 Secret 리소스도 삭제할지 여부를 정의합니다.</td></tr><tr><td><code>params</code> object</td><td>요청할 때 전달하는 매개변수를 정의합니다.</td></tr><tr><td><code>renewalPercent</code> integer</td><td>갱신을 위한 지점을 정의하며, 기본 값은 <code>67</code>% 입니다.</td></tr><tr><td><code>revoke</code> boolean</td><td>정의한 리소스가 삭제되면 생성한 인증서도 취소(Revoke)할지의 여부를 정의합니다.</td></tr><tr><td><code>allowStaticCreds</code> boolean</td><td>요청 시 생성하는 것이 아니라 Vault 서버에서 주기적으로 회전하는 자격 증명을 동기화할 때 AllowStaticCreds를 설정해야 합니다.</td></tr><tr><td><code>rolloutRestartTargets</code></td><td>애플리케이션이 변경된 Secret의 마운트된 값을 인지하지 못하는 경우 강재로 Rollout-Restart를 수행할 대상을 정의합니다.</td></tr><tr><td><code>destination</code></td><td>저장할 Secret을 지정합니다.</td></tr></tbody></table><p>Vault의 \bDatabase 시크릿 엔진의 동적 시크릿을 적용하는 <code>VaultDynamicSecret</code> 정의하는 <code>dynamic-secret.yaml</code> 파일 내용은 다음과 같습니다.</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> secrets.hashicorp.com/v1beta1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> VaultDynamicSecret
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> vault<span class="token punctuation">-</span>db<span class="token punctuation">-</span>app
  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> default
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token comment"># 활성화 된 시크릿 엔진 Path</span>
  <span class="token key atrule">mount</span><span class="token punctuation">:</span> demo<span class="token punctuation">-</span>db
  <span class="token comment"># 시크릿 롤 경로</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> creds/dev<span class="token punctuation">-</span>postgres
  <span class="token comment"># k8s secret 이름 정의</span>
  <span class="token key atrule">destination</span><span class="token punctuation">:</span>
    <span class="token key atrule">create</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> secretdb
  <span class="token comment"># 교체 발생시 Restart할 대상 지정</span>
  <span class="token key atrule">rolloutRestartTargets</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment
    <span class="token key atrule">name</span><span class="token punctuation">:</span> vso<span class="token punctuation">-</span>db<span class="token punctuation">-</span>demo
  <span class="token comment"># 생성한 Vault 인증을 위한 VaultAuth 리소스 이름</span>
  <span class="token key atrule">vaultAuthRef</span><span class="token punctuation">:</span> static<span class="token punctuation">-</span>auth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),ks=a("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[a("pre",{"bash:no-line-numbers":"",class:"language-bash"},[a("code",null,[s(`$ kubectl get secret

NAME        TYPE        DATA   AGE
secretdb    Opaque      `),a("span",{class:"token number"},"3"),s(`      2h55m

$ kubectl get secret secretdb `),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},"'{.data.username}'"),s(),a("span",{class:"token operator"},"|"),s(" base64 "),a("span",{class:"token parameter variable"},"--decode"),s(`

v-kubernet-dev-post-Pl4QC4UC6rQ8uThG4pR8-169838984

`),a("span",{class:"token comment"},"### 시간이 흐른 뒤 새로 발급된 인증서의 만료 시간을 확인합니다."),s(`

$ kubectl get secret secretdb `),a("span",{class:"token parameter variable"},"-o"),s(),a("span",{class:"token assign-left variable"},"jsonpath"),a("span",{class:"token operator"},"="),a("span",{class:"token string"},"'{.data.username}'"),s(),a("span",{class:"token operator"},"|"),s(" base64 "),a("span",{class:"token parameter variable"},"--decode"),s(`

v-kubernet-dev-post-Dvta1R6q5bV9zrlFb5Zn-1698389887
`)])]),a("div",{class:"highlight-lines"},[a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," "),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{class:"highlight-line"}," ")])],-1);function ms(hs,gs){const c=u("ExternalLinkIcon"),o=u("Tabs"),p=u("CodeTabs"),r=u("Badge");return k(),m("div",null,[I,a("ul",null,[a("li",null,[a("a",E,[s("Kubernetes Vault 통합방안 3가지 비교"),l(c)])]),a("li",null,[a("a",w,[s("Minikube 기반 데모 환경"),l(c)])])]),a("div",_,[S,K,a("ul",null,[a("li",null,[a("a",C,[s("애플리케이션 수준의 통합 예시(Spring boot)"),l(c)])]),a("li",null,[a("a",x,[s("CICD 수준의 통합 예시(Jenkins)"),l(c)])]),a("li",null,[a("a",D,[s("CICD 수준의 통합 예시(ArgoCD)"),l(c)])])])]),M,a("blockquote",null,[a("p",null,[s("참고 : "),a("a",B,[s("https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-secret-store-driver"),l(c)])])]),Q,l(o,{id:"140",data:[{id:"with Vault"},{id:"external Vault"}]},{title0:n(({value:e,isActive:t})=>[s("with Vault")]),title1:n(({value:e,isActive:t})=>[s("external Vault")]),tab0:n(({value:e,isActive:t})=>[j,q]),tab1:n(({value:e,isActive:t})=>[R,T]),_:1}),N,l(p,{id:"225",data:[{id:"Internal Vault"},{id:"External Vault"}]},{title0:n(({value:e,isActive:t})=>[s("Internal Vault")]),title1:n(({value:e,isActive:t})=>[s("External Vault")]),tab0:n(({value:e,isActive:t})=>[P]),tab1:n(({value:e,isActive:t})=>[F]),_:1}),L,l(p,{id:"236",data:[{id:"Linux/MacOS"},{id:"Windows Powershell"}]},{title0:n(({value:e,isActive:t})=>[s("Linux/MacOS")]),title1:n(({value:e,isActive:t})=>[s("Windows Powershell")]),tab0:n(({value:e,isActive:t})=>[G]),tab1:n(({value:e,isActive:t})=>[U]),_:1}),J,Y,z,Z,H,O,W,X,a("blockquote",null,[a("p",null,[s("참고 1 : "),a("a",$,[s("https://developer.hashicorp.com/vault/tutorials/kubernetes/kubernetes-sidecar"),l(c)])]),a("p",null,[s("참고 2 : "),a("a",aa,[s("https://www.hashicorp.com/blog/injecting-vault-secrets-into-kubernetes-pods-via-a-sidecar"),l(c)])]),a("p",null,[s("참고 3 : "),a("a",sa,[s("https://developer.hashicorp.com/vault/docs/platform/k8s/injector/annotations"),l(c)])]),a("p",null,[s("참고 4 : "),a("a",na,[s("https://devopscube.com/vault-agent-injector-tutorial/"),l(c)])])]),ea,l(o,{id:"367",data:[{id:"with Vault"},{id:"external Vault"}]},{title0:n(({value:e,isActive:t})=>[s("with Vault")]),title1:n(({value:e,isActive:t})=>[s("external Vault")]),tab0:n(({value:e,isActive:t})=>[ta,la]),tab1:n(({value:e,isActive:t})=>[ia,ca]),_:1}),oa,a("details",pa,[ra,l(o,{id:"436",data:[{id:"CLI"},{id:"UI"}]},{title0:n(({value:e,isActive:t})=>[s("CLI")]),title1:n(({value:e,isActive:t})=>[s("UI")]),tab0:n(({value:e,isActive:t})=>[ua]),tab1:n(({value:e,isActive:t})=>[da,va]),_:1})]),ba,a("details",ka,[ma,l(o,{id:"475",data:[{id:"CLI"},{id:"UI"}]},{title0:n(({value:e,isActive:t})=>[s("CLI")]),title1:n(({value:e,isActive:t})=>[s("UI")]),tab0:n(({value:e,isActive:t})=>[ha]),tab1:n(({value:e,isActive:t})=>[ga]),_:1})]),Aa,l(p,{id:"505",data:[{id:"Internal Vault"},{id:"External Vault"}]},{title0:n(({value:e,isActive:t})=>[s("Internal Vault")]),title1:n(({value:e,isActive:t})=>[s("External Vault")]),tab0:n(({value:e,isActive:t})=>[ya]),tab1:n(({value:e,isActive:t})=>[fa]),_:1}),Va,l(p,{id:"516",data:[{id:"Linux/MacOS"},{id:"Windows Powershell"}]},{title0:n(({value:e,isActive:t})=>[s("Linux/MacOS")]),title1:n(({value:e,isActive:t})=>[s("Windows Powershell")]),tab0:n(({value:e,isActive:t})=>[Ia]),tab1:n(({value:e,isActive:t})=>[Ea]),_:1}),wa,_a,Sa,Ka,a("blockquote",null,[a("p",null,[s("참고 1 : "),a("a",Ca,[s("https://developer.hashicorp.com/vault/tutorials/kubernetes/vault-secrets-operator"),l(c)])]),a("p",null,[s("참고 2 : "),a("a",xa,[s("https://developer.hashicorp.com/vault/docs/platform/k8s/vso"),l(c)])])]),Da,Ma,Ba,a("p",null,[s("현재 지원되는 버전은 다음과 같습니다. 변경 사항은 링크를 참고하세요. ("),a("a",Qa,[s("지원되는 Kubernetes 버전"),l(c)]),s(")")]),l(r,{type:"tip",text:"1.28",vertical:"top"}),l(r,{type:"tip",text:"1.27",vertical:"top"}),l(r,{type:"tip",text:"1.26",vertical:"top"}),l(r,{type:"tip",text:"1.25",vertical:"top"}),l(r,{type:"tip",text:"1.24",vertical:"top"}),ja,l(p,{id:"676",data:[{id:"internal Vault"},{id:"external Vault"}]},{title0:n(({value:e,isActive:t})=>[s("internal Vault")]),title1:n(({value:e,isActive:t})=>[s("external Vault")]),tab0:n(({value:e,isActive:t})=>[qa]),tab1:n(({value:e,isActive:t})=>[Ra]),_:1}),Ta,a("details",Na,[Pa,l(o,{id:"710",data:[{id:"CLI"},{id:"UI"}]},{title0:n(({value:e,isActive:t})=>[s("CLI")]),title1:n(({value:e,isActive:t})=>[s("UI")]),tab0:n(({value:e,isActive:t})=>[Fa]),tab1:n(({value:e,isActive:t})=>[La]),_:1})]),Ga,a("details",Ua,[Ja,l(o,{id:"743",data:[{id:"CLI"},{id:"UI"}]},{title0:n(({value:e,isActive:t})=>[s("CLI")]),title1:n(({value:e,isActive:t})=>[s("UI")]),tab0:n(({value:e,isActive:t})=>[Ya]),tab1:n(({value:e,isActive:t})=>[za]),_:1})]),Za,l(o,{id:"782",data:[]}),Ha,Oa,Wa,l(p,{id:"820",data:[{id:"Internal Vault"},{id:"External Vault"}]},{title0:n(({value:e,isActive:t})=>[s("Internal Vault")]),title1:n(({value:e,isActive:t})=>[s("External Vault")]),tab0:n(({value:e,isActive:t})=>[Xa]),tab1:n(({value:e,isActive:t})=>[$a]),_:1}),as,l(p,{id:"831",data:[{id:"Linux/MacOS"},{id:"Windows Powershell"}]},{title0:n(({value:e,isActive:t})=>[s("Linux/MacOS")]),title1:n(({value:e,isActive:t})=>[s("Windows Powershell")]),tab0:n(({value:e,isActive:t})=>[ss]),tab1:n(({value:e,isActive:t})=>[ns]),_:1}),es,a("p",null,[a("a",ts,[s("VaultStaticSecret"),l(c)]),s("에서 정의하는 값은 다음과 같습니다.")]),ls,is,cs,a("p",null,[a("a",os,[s("VaultPKISecret"),l(c)]),s("에서 정의하는 값은 다음과 같습니다.")]),ps,rs,us,ds,a("p",null,[a("a",vs,[s("VaultDynamicSecret"),l(c)]),s("에서 정의하는 값은 다음과 같습니다.")]),bs,ks])}const fs=b(V,[["render",ms],["__file","vault-k8s-usecase-csi-injection.html.vue"]]),Vs=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-usecase-csi-injection.html","title":"How to integrate Vault with K8s (CSI & Injection & VSO)","lang":"ko-KR","frontmatter":{"description":"Kubernetes에서 Vault의 시크릿을 사용하는 CSI방식과 Injection방식에 대한 설명","tag":["vault","kubernetes"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/vault-k8s-usecase-csi-injection.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"How to integrate Vault with K8s (CSI & Injection & VSO)"}],["meta",{"property":"og:description","content":"Kubernetes에서 Vault의 시크릿을 사용하는 CSI방식과 Injection방식에 대한 설명"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-10-27T07:00:09.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-10-27T07:00:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"How to integrate Vault with K8s (CSI & Injection & VSO)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-27T07:00:09.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. CSI","slug":"_1-csi","link":"#_1-csi","children":[{"level":3,"title":"1.1 Kubernetes에 CSI 드라이버 설치","slug":"_1-1-kubernetes에-csi-드라이버-설치","link":"#_1-1-kubernetes에-csi-드라이버-설치","children":[]},{"level":3,"title":"1.2 CSI를 위한 Vault 구성 (Helm)","slug":"_1-2-csi를-위한-vault-구성-helm","link":"#_1-2-csi를-위한-vault-구성-helm","children":[]},{"level":3,"title":"1.3 CSI에서 사용할 Vault 시크릿 정의","slug":"_1-3-csi에서-사용할-vault-시크릿-정의","link":"#_1-3-csi에서-사용할-vault-시크릿-정의","children":[]},{"level":3,"title":"1.4 Vault에 인증받기 위한 Kubernetes 인증 방식 구성","slug":"_1-4-vault에-인증받기-위한-kubernetes-인증-방식-구성","link":"#_1-4-vault에-인증받기-위한-kubernetes-인증-방식-구성","children":[]},{"level":3,"title":"1.5 SecretProviderClass 구성","slug":"_1-5-secretproviderclass-구성","link":"#_1-5-secretproviderclass-구성","children":[]},{"level":3,"title":"1.7 \\b시크릿 갱신","slug":"_1-7-시크릿-갱신","link":"#_1-7-시크릿-갱신","children":[]}]},{"level":2,"title":"2. Injecting","slug":"_2-injecting","link":"#_2-injecting","children":[{"level":3,"title":"2.1 Injection을 위한 Vault 구성 (Helm)","slug":"_2-1-injection을-위한-vault-구성-helm","link":"#_2-1-injection을-위한-vault-구성-helm","children":[]},{"level":3,"title":"2.2 Injection에서 사용할 Vault 정적 시크릿 정의","slug":"_2-2-injection에서-사용할-vault-정적-시크릿-정의","link":"#_2-2-injection에서-사용할-vault-정적-시크릿-정의","children":[]},{"level":3,"title":"2.3 Injection에서 사용할 Vault 동적 시크릿 정의","slug":"_2-3-injection에서-사용할-vault-동적-시크릿-정의","link":"#_2-3-injection에서-사용할-vault-동적-시크릿-정의","children":[]},{"level":3,"title":"2.4 Vault에 인증받기 위한 Kubernetes 인증 방식 구성","slug":"_2-4-vault에-인증받기-위한-kubernetes-인증-방식-구성","link":"#_2-4-vault에-인증받기-위한-kubernetes-인증-방식-구성","children":[]},{"level":3,"title":"2.5 Sidecar 적용된 애플리케이션 적용","slug":"_2-5-sidecar-적용된-애플리케이션-적용","link":"#_2-5-sidecar-적용된-애플리케이션-적용","children":[]},{"level":3,"title":"2.6 정적 시크릿 자동 갱신","slug":"_2-6-정적-시크릿-자동-갱신","link":"#_2-6-정적-시크릿-자동-갱신","children":[]},{"level":3,"title":"2.7 동적 시크릿 자동 갱신","slug":"_2-7-동적-시크릿-자동-갱신","link":"#_2-7-동적-시크릿-자동-갱신","children":[]}]},{"level":2,"title":"3. VSO \\bVault Secret Operator","slug":"_3-vso-vault-secret-operator","link":"#_3-vso-vault-secret-operator","children":[{"level":3,"title":"3.1 VSO를 위한 Vault 구성 (Helm)","slug":"_3-1-vso를-위한-vault-구성-helm","link":"#_3-1-vso를-위한-vault-구성-helm","children":[]},{"level":3,"title":"3.2 VSO에서 사용할 Vault 정적 시크릿 정의","slug":"_3-2-vso에서-사용할-vault-정적-시크릿-정의","link":"#_3-2-vso에서-사용할-vault-정적-시크릿-정의","children":[]},{"level":3,"title":"3.3 VSO에서 사용할 Vault PKI 시크릿 정의","slug":"_3-3-vso에서-사용할-vault-pki-시크릿-정의","link":"#_3-3-vso에서-사용할-vault-pki-시크릿-정의","children":[]},{"level":3,"title":"3.4 VSO에서 사용할 Vault 동적 시크릿 정의","slug":"_3-4-vso에서-사용할-vault-동적-시크릿-정의","link":"#_3-4-vso에서-사용할-vault-동적-시크릿-정의","children":[]},{"level":3,"title":"3.5 Vault에 인증받기 위한 Kubernetes 인증 방식 구성","slug":"_3-5-vault에-인증받기-위한-kubernetes-인증-방식-구성","link":"#_3-5-vault에-인증받기-위한-kubernetes-인증-방식-구성","children":[]},{"level":3,"title":"3.6 VSO CRD \\"VaultAuth\\" 정의","slug":"_3-6-vso-crd-vaultauth-정의","link":"#_3-6-vso-crd-vaultauth-정의","children":[]},{"level":3,"title":"3.7 VSO CRD - 정적 시크릿","slug":"_3-7-vso-crd-정적-시크릿","link":"#_3-7-vso-crd-정적-시크릿","children":[]},{"level":3,"title":"3.8 VSO CRD - PKI 시크릿","slug":"_3-8-vso-crd-pki-시크릿","link":"#_3-8-vso-crd-pki-시크릿","children":[]},{"level":3,"title":"3.9 VSO CRD - 동적 시크릿","slug":"_3-9-vso-crd-동적-시크릿","link":"#_3-9-vso-crd-동적-시크릿","children":[]}]}],"git":{"createdTime":1678338483000,"updatedTime":1698390009000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":6}]},"readingTime":{"minutes":64.25,"words":3855},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/vault-k8s-usecase-csi-injection.md","localizedDate":"2023년 3월 9일","excerpt":"\\n<p>Vault에 저장된 시크릿 또는 발행되는(Dynamic) 시크릿을 획득하기 위해서는, 시크릿을 요청하는 클라이언트(사람/앱/장비)가 다음의 과정을 수행해야 합니다.</p>\\n<ol>\\n<li>클라이언트가 Vault 토큰을 획득하기 위한 인증 절차</li>\\n<li>획득한 Vault 토큰의 수명주기 관리 (갱신과 재요청)</li>\\n<li>Vault의 특정 시크릿 경로를 저장하고 해당 시크릿 요청</li>\\n<li>동적(Dynamic) 시크릿인 경우 해당 임대(Lease)정보 확인 및 갱신과 재요청</li>\\n</ol>\\n<p>Vault는 위의 과정을 클라이언트 대신 플랫폼 수준에서 대행할 수 있는 방안을 제공하고 있습니다. 여기서는 Kubernetes 상에서의 Vault와의 통합 구성을 활용하여 위 과정을 대체하고 Kubernetes 플랫폼 자체(Kuberetes Native)의 기능을 사용하듯 Vault의 시크릿을 사용하게 만드는 방식에 대해 설명합니다.</p>"}');export{fs as comp,Vs as data};
