import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,g as e}from"./app-B_LCFs7C.js";const l={},p=e(`<h1 id="argocd-vault-plugin" tabindex="-1"><a class="header-anchor" href="#argocd-vault-plugin"><span>ArgoCD Vault Plugin</span></a></h1><blockquote><p>참고 : 본 글은 AEWS 스터디 7주차 내용중 일부로 작성된 내용입니다.</p></blockquote><h2 id="_1-argocd" tabindex="-1"><a class="header-anchor" href="#_1-argocd"><span>1. ArgoCD</span></a></h2><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/oH5ELj.jpg" alt="img" style="zoom:50%;"><h3 id="_1-개요-및-소개" tabindex="-1"><a class="header-anchor" href="#_1-개요-및-소개"><span>1) 개요 및 소개</span></a></h3><p>Argo <strong>CD</strong> is a declarative, <strong>GitOps</strong> continuous delivery tool for <strong>Kubernetes</strong>.</p><ul><li>지속적인 배포란(Continuous Delivery, CD) 개발자가 소스코드를 변경해서 깃 저장소에 푸시하면 해당 변경 사항이 고객이 사용하는 실제 운영환경의 시스템까지 자동으로 반영함 <ul><li>개발자의 코드가 원격 저장소에 업로드됐을 때 <strong>아르고시디</strong>가 자동으로 해당 코드를 클러스터 운영환경에 <strong>배포</strong>합니다.</li><li><strong>아르고시티</strong>로 배포한 헬름 애플리케이션의 리소스 목록, 각 리소스 간 관계 및 에러 유무를 <strong>UI</strong>로 보여줍니다.</li></ul></li><li>단일 진실 원천(SSOT, Single Source Of Truth)이란 어떠한 진실(결과)의 원인이 하나의 이유(원천)에서 비롯되는 것을 의미합니다. <ul><li>쿠버네티스 환경에서 깃옵스의 의미는 실제 운영 중인 클러스터의 상태를 개발자의 로컬 PC혹은 아무런 기록을 남기지 않고 클러스터에서 임의로 수정하게 하지 않고 공용으로 관리하는 깃 저장소에서만 유일하게 변경을 허용함으로써 단일 진실 원천(SSOT)를 구현합니다.</li><li><strong>아르고시디</strong>를 사용하면 쿠버네티스 매니페스트 <strong>소스</strong> 파일을 여러 개발자의 개인 PC에 보관하지 않고 중앙의 통합된 <strong>깃 저장소</strong>에 반드시 업로드하고 동기화하도록 정책 관리 가능함</li></ul></li><li>GitOps - <a href="https://aws.amazon.com/ko/blogs/containers/automating-amazon-eks-with-gitops/" target="_blank" rel="noopener noreferrer">출처(Automating Amazon EKS with GitOps)</a></li></ul><img src="https://d2908q01vomqb2.cloudfront.net/fe2ef495a1152561572949784c16bf23abb28057/2020/11/22/Screen-Shot-2020-11-22-at-4.52.30-PM.png" alt="img" style="zoom:50%;"><ul><li>샘플 구성도 - 출처(<a href="https://logonme.net/tech/k8s/pkos2_w3/" target="_blank" rel="noopener noreferrer">https://logonme.net/tech/k8s/pkos2_w3/</a>)</li></ul><img src="https://logonme.net/wp-content/uploads/2023/03/Untitled-10.png" alt="img" style="zoom:50%;"><h3 id="_2-설치" tabindex="-1"><a class="header-anchor" href="#_2-설치"><span>2) 설치</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 설치</span></span>
<span class="line">helm repo <span class="token function">add</span> argo https://argoproj.github.io/argo-helm</span>
<span class="line">helm repo update</span>
<span class="line">helm <span class="token function">install</span> argocd argo/argo-cd <span class="token parameter variable">--set</span> <span class="token assign-left variable">server.service.type</span><span class="token operator">=</span>LoadBalancer <span class="token parameter variable">--namespace</span> argocd --create-namespace <span class="token parameter variable">--version</span> <span class="token number">5.42</span>.3</span>
<span class="line"></span>
<span class="line"><span class="token comment"># External IP 확인</span></span>
<span class="line"><span class="token assign-left variable">EXTERNAL_IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>k get svc <span class="token parameter variable">-n</span> argocd argocd-server <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&#39;{.status.loadBalancer.ingress[0].hostname}&#39;</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$EXTERNAL_IP</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># admin 계정의 암호 확인</span></span>
<span class="line"><span class="token assign-left variable">ARGOPW</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>kubectl <span class="token parameter variable">-n</span> argocd get secret argocd-initial-admin-secret <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.data.password}&quot;</span> <span class="token operator">|</span> base64 <span class="token parameter variable">-d</span><span class="token variable">)</span></span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$ARGOPW</span></span>
<span class="line">mf8bOtNEq7iHMqq1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-ui-접속-확인" tabindex="-1"><a class="header-anchor" href="#_1-ui-접속-확인"><span>(1) UI 접속 확인</span></a></h4><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/89u0XP.jpg" alt="img" style="zoom:33%;"><h4 id="_2-cli-도구설치-및-연동" tabindex="-1"><a class="header-anchor" href="#_2-cli-도구설치-및-연동"><span>(2) CLI 도구설치 및 연동</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 최신버전 설치</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> <span class="token parameter variable">-o</span> argocd-linux-amd64 https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64</span>
<span class="line"><span class="token function">install</span> <span class="token parameter variable">-m</span> <span class="token number">555</span> argocd-linux-amd64 /usr/local/bin/argocd</span>
<span class="line"><span class="token function">chmod</span> +x /usr/local/bin/argocd</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 버전 확인</span></span>
<span class="line">argocd version <span class="token parameter variable">--short</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># argocd 서버 로그인</span></span>
<span class="line">argocd login <span class="token variable">$EXTERNAL_IP</span> <span class="token parameter variable">--username</span> admin <span class="token parameter variable">--password</span> <span class="token variable">$ARGOPW</span></span>
<span class="line">WARNING: server certificate had error: tls: failed to verify certificate: x509: certificate signed by unknown authority. Proceed insecurely <span class="token punctuation">(</span>y/n<span class="token punctuation">)</span>? y</span>
<span class="line"><span class="token string">&#39;admin:login&#39;</span> logged <span class="token keyword">in</span> successfully</span>
<span class="line">Context <span class="token string">&#39;k8s-argocd-argocdse-789cd00c72-b0b60b99b16f1fc7.elb.ap-northeast-2.amazonaws.com&#39;</span> updated</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 기 설치한 깃랩의 프로젝트 URL 을 argocd 깃 리포지토리(argocd repo)로 등록. 깃랩은 프로젝트 단위로 소스 코드를 보관.</span></span>
<span class="line">argocd repo <span class="token function">add</span> <span class="token operator">&lt;</span>저장소 주소<span class="token operator">&gt;</span> <span class="token parameter variable">--username</span> <span class="token operator">&lt;</span>계정명<span class="token operator">&gt;</span> <span class="token parameter variable">--password</span> <span class="token operator">&lt;</span>암호<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment"># 등록 확인 : 기본적으로 아르고시디가 설치된 쿠버네티스 클러스터는 타깃 클러스터로 등록됨</span></span>
<span class="line">argocd repo list</span>
<span class="line">TYPE  NAME  REPO                                            INSECURE  OCI    LFS    CREDS  STATUS      MESSAGE  PROJECT</span>
<span class="line"><span class="token function">git</span>         https://github.com/hyungwook0221/argo-demo.git  <span class="token boolean">false</span>     <span class="token boolean">false</span>  <span class="token boolean">false</span>  <span class="token boolean">true</span>   Successful</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 기본적으로 아르고시디가 설치된 쿠버네티스 클러스터는 타깃 클러스터로 등록됨</span></span>
<span class="line">argocd cluster list</span>
<span class="line">SERVER                          NAME        VERSION  STATUS   MESSAGE                                                  PROJECT</span>
<span class="line">https://kubernetes.default.svc  in-cluster           Unknown  Cluster has no applications and is not being monitored.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-샘플-앱-배포" tabindex="-1"><a class="header-anchor" href="#_3-샘플-앱-배포"><span>3) 샘플 앱 배포</span></a></h3><h4 id="_1-git-저장소-생성-및-다운" tabindex="-1"><a class="header-anchor" href="#_1-git-저장소-생성-및-다운"><span>(1) Git 저장소 생성 및 다운</span></a></h4><blockquote><p>해당 저장소는 개인이 생성한 Git 저장소로 대체하셔도 됩니다.<br> 필자가 만든 저장소를 그대로 사용한다면, &quot;ArgoCD Application CRD&quot; 챕터로 넘어가시면 됩ㄴ디ㅏ.</p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># Git 저장소 설정</span></span>
<span class="line"><span class="token function">git</span> clone https://github.com/hyungwook0221/argo-demo.git</span>
<span class="line"><span class="token builtin class-name">cd</span> argo-demo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 깃 원격 오리진 주소 확인</span></span>
<span class="line"><span class="token function">git</span> config <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> remote.origin.url</span>
<span class="line"><span class="token assign-left variable">remote.origin.url</span><span class="token operator">=</span>https://github.com/hyungwook0221/argo-demo.git</span>
<span class="line"></span></code></pre></div><h4 id="_2-postgresql-배포" tabindex="-1"><a class="header-anchor" href="#_2-postgresql-배포"><span>(2) PostgreSQL 배포</span></a></h4><blockquote><p>참고 : <a href="https://artifacthub.io/packages/helm/bitnami/postgresql" target="_blank" rel="noopener noreferrer">https://artifacthub.io/packages/helm/bitnami/postgresql</a></p></blockquote><ul><li>PostgreSQL 헬름차트 준비 및 Github 저장소</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># PostgreSQL 헬름차트 추가 및 다운로드</span></span>
<span class="line">helm repo <span class="token function">add</span> bitnami https://charts.bitnami.com/bitnami</span>
<span class="line">helm fetch bitnami/postgresql <span class="token parameter variable">--untar</span></span>
<span class="line"><span class="token builtin class-name">cd</span> postgresql/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># audit.logConnections=false에서 true로 변경</span></span>
<span class="line"><span class="token function">cat</span> <span class="token operator">&lt;&lt;</span><span class="token string">EOF<span class="token bash punctuation"> <span class="token operator">&gt;</span> override-values.yaml</span></span>
<span class="line">audit:</span>
<span class="line">  logConnections: true</span>
<span class="line">EOF</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 헬름 차트를 깃랩 저장소에 업로드</span></span>
<span class="line"><span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span> <span class="token operator">&amp;&amp;</span> <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add postgresql helm&quot;</span></span>
<span class="line"><span class="token function">git</span> push</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>ArgoCD Application CRD 준비 : postgresql-helm-argo-application.yml</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token comment"># postgresql-helm-argo-application.yml</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> argoproj.io/v1alpha1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Application</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> postgresql<span class="token punctuation">-</span>helm</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">destination</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> postgresql</span>
<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//kubernetes.default.svc</span>
<span class="line">  <span class="token key atrule">project</span><span class="token punctuation">:</span> default</span>
<span class="line">  <span class="token key atrule">source</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">repoURL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/hyungwook0221/argo<span class="token punctuation">-</span>demo.git</span>
<span class="line">    <span class="token key atrule">path</span><span class="token punctuation">:</span> postgresql</span>
<span class="line">    <span class="token key atrule">targetRevision</span><span class="token punctuation">:</span> main</span>
<span class="line">    <span class="token key atrule">helm</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">valueFiles</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> override<span class="token punctuation">-</span>values.yaml</span>
<span class="line">  <span class="token key atrule">syncPolicy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">syncOptions</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> CreateNamespace=true</span>
<span class="line">    <span class="token key atrule">automated</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">selfHeal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      <span class="token key atrule">prune</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>CRD 배포 및 확인</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 모니터링 : argocd 웹 화면 보고 있기!</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Argocd Web URL = <span class="token variable">$EXTERNAL_IP</span>&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 배포</span></span>
<span class="line">kubectl apply <span class="token parameter variable">-f</span> postgresql-helm-argo-application.yml</span>
<span class="line"></span>
<span class="line"><span class="token comment"># YAML 파일을 적용(apply)하여 아르고시디 ‘Application’ CRD를 생성</span></span>
<span class="line">kubectl get applications.argoproj.io <span class="token parameter variable">-n</span> argocd</span>
<span class="line">NAME              SYNC STATUS   HEALTH STATUS</span>
<span class="line">postgresql-helm   Synced        Healthy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># argocd app 배포 확인</span></span>
<span class="line">argocd app get postgresql-helm</span>
<span class="line">Name:               argocd/postgresql-helm</span>
<span class="line">Project:            default</span>
<span class="line">Server:             https://kubernetes.default.svc</span>
<span class="line">Namespace:          postgresql</span>
<span class="line">URL:                https://k8s-argocd-argocdse-789cd00c72-b0b60b99b16f1fc7.elb.ap-northeast-2.amazonaws.com/applications/postgresql-helm</span>
<span class="line">Repo:               https://github.com/hyungwook0221/argo-demo.git</span>
<span class="line">Target:             main</span>
<span class="line">Path:               postgresql</span>
<span class="line">Helm Values:        override-values.yaml</span>
<span class="line">SyncWindow:         Sync Allowed</span>
<span class="line">Sync Policy:        Automated <span class="token punctuation">(</span>Prune<span class="token punctuation">)</span></span>
<span class="line">Sync Status:        Synced to main <span class="token punctuation">(</span>cf8a47a<span class="token punctuation">)</span></span>
<span class="line">Health Status:      Healthy</span>
<span class="line"></span>
<span class="line">GROUP  KIND         NAMESPACE   NAME                STATUS     HEALTH   HOOK  MESSAGE</span>
<span class="line">       Namespace                postgresql          Succeeded  Synced         namespace/postgresql created</span>
<span class="line">       Secret       postgresql  postgresql-helm     Synced                    secret/postgresql-helm created</span>
<span class="line">       Service      postgresql  postgresql-helm-hl  Synced     Healthy        service/postgresql-helm-hl created</span>
<span class="line">       Service      postgresql  postgresql-helm     Synced     Healthy        service/postgresql-helm created</span>
<span class="line">apps   StatefulSet  postgresql  postgresql-helm     Synced     Healthy        statefulset.apps/postgresql-helm created</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AargoCD GitHub/GitLab Deploy 아키텍처(참고 : 가시다 스터디)</li></ul><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/pxmpC9.jpg" alt="img" style="zoom:33%;"><h2 id="_2-argo-cd-vault-plugin" tabindex="-1"><a class="header-anchor" href="#_2-argo-cd-vault-plugin"><span>2. Argo CD Vault Plugin</span></a></h2><p>Argo CD에는 다양한 시크릿 관리 도구(<strong>HashiCorp Vault</strong>, IBM Cloud Secrets Manager, AWS Secrets Manager 등)플러그인을 통해 Kubernetes 리소스에 주입할 수 있도록 지원합니다.</p><p>플러그인을 통해 Operator 또는 CRD(Custom Resource Definition)에 의존하지 않고 GitOps와 Argo CD로 시크릿 관리 문제를 해결할 수 있습니다.특히 Secret 뿐만 아니라, deployment, configMap 또는 기타 Kubernetes 리소스에도 사용할 수 있습니다.</p><p>필자는 그 중에서 가장 대표적인 시크릿 관리 도구인 <strong>HashiCorp Vault 플러그인을</strong> 연동하는 방법을 알아보겠습니다.</p><img src="https://github.com/argoproj-labs/argocd-vault-plugin/raw/main/assets/argo_vault_logo.png" alt="img" style="zoom:50%;"><h3 id="_1-vault-환경-준비" tabindex="-1"><a class="header-anchor" href="#_1-vault-환경-준비"><span>1) Vault 환경 준비</span></a></h3><h4 id="_1-vault-설치" tabindex="-1"><a class="header-anchor" href="#_1-vault-설치"><span>(1) Vault 설치</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 저장소 추가</span></span>
<span class="line">helm repo <span class="token function">add</span> hashicorp https://helm.releases.hashicorp.com</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 저장소 업데이트</span></span>
<span class="line">helm repo update</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 저장소 추가확인</span></span>
<span class="line">helm search repo hashicorp/vault</span>
<span class="line"></span>
<span class="line"><span class="token comment"># vault-server-values.yaml</span></span>
<span class="line">---</span>
<span class="line">server:</span>
<span class="line">  dev:</span>
<span class="line">    enabled: <span class="token boolean">true</span></span>
<span class="line">    devRootToken: <span class="token string">&quot;root&quot;</span></span>
<span class="line">  logLevel: debug</span>
<span class="line"></span>
<span class="line">injector:</span>
<span class="line">  enabled: <span class="token string">&quot;false&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># vault 헬름차트 배포</span></span>
<span class="line">helm <span class="token function">install</span> vault hashicorp/vault <span class="token parameter variable">-n</span> vault --create-namespace <span class="token parameter variable">--values</span> vault-server-values.yaml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-vault-구성" tabindex="-1"><a class="header-anchor" href="#_2-vault-구성"><span>(2) Vault 구성</span></a></h4><ul><li>시크릿 엔진 설정</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># shell 접속</span></span>
<span class="line">kubectl <span class="token builtin class-name">exec</span> <span class="token parameter variable">-n</span> vault vault-0 <span class="token parameter variable">-it</span> -- <span class="token function">sh</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># enable kv-v2 engine in Vault</span></span>
<span class="line">vault secrets <span class="token builtin class-name">enable</span> kv-v2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># create kv-v2 secret with two keys</span></span>
<span class="line">vault kv put kv-v2/demo <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token string">&quot;secret_user&quot;</span> <span class="token assign-left variable">password</span><span class="token operator">=</span><span class="token string">&quot;secret_password&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># create policy to enable reading above secret</span></span>
<span class="line">vault policy <span class="token function">write</span> demo - <span class="token operator">&lt;&lt;</span><span class="token string">EOF</span>
<span class="line">path &quot;kv-v2/data/demo&quot; {</span>
<span class="line">  capabilities = [&quot;read&quot;]</span>
<span class="line">}</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>인증방식 활성화</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># enable Kubernetes Auth Method</span></span>
<span class="line">vault auth <span class="token builtin class-name">enable</span> kubernetes</span>
<span class="line"></span>
<span class="line"><span class="token comment"># get Kubernetes host address</span></span>
<span class="line"><span class="token comment"># K8S_HOST=&quot;https://kubernetes.default.svc&quot;</span></span>
<span class="line"><span class="token comment"># K8S_HOST=&quot;https://$(env | grep KUBERNETES_PORT_443_TCP_ADDR| cut -f2 -d&#39;=&#39;):443&quot;</span></span>
<span class="line"><span class="token comment"># K8S_HOST=&quot;https://$( kubectl exec -n vault vault-0 -- env | grep KUBERNETES_PORT_443_TCP_ADDR| cut -f2 -d&#39;=&#39;):443&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># get Service Account token from Vault Pod</span></span>
<span class="line"><span class="token comment">#SA_TOKEN=$(cat /var/run/secrets/kubernetes.io/serviceaccount/token)</span></span>
<span class="line"><span class="token comment"># SA_TOKEN=$(kubectl exec -n vault vault-0 -- cat /var/run/secrets/kubernetes.io/serviceaccount/token)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># get Service Account CA certificate from Vault Pod</span></span>
<span class="line"><span class="token comment">#SA_CERT=$(cat /var/run/secrets/kubernetes.io/serviceaccount/ca.crt)</span></span>
<span class="line"><span class="token comment">#SA_CERT=$(kubectl exec -n vault vault-0 -- cat /var/run/secrets/kubernetes.io/serviceaccount/ca.crt)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># configure Kubernetes Auth Method</span></span>
<span class="line"><span class="token comment"># kubectl exec -n vault vault-0 -- vault write auth/kubernetes/config \\</span></span>
<span class="line"><span class="token comment">#     token_reviewer_jwt=$SA_TOKEN \\</span></span>
<span class="line"><span class="token comment">#     kubernetes_host=$K8S_HOST \\</span></span>
<span class="line"><span class="token comment">#     kubernetes_ca_cert=$SA_CERT</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 인증방식 업데이트</span></span>
<span class="line">vault <span class="token function">write</span> auth/kubernetes/config <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">token_reviewer_jwt</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /var/run/secrets/kubernetes.io/serviceaccount/token<span class="token variable">)</span></span>&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">kubernetes_host</span><span class="token operator">=</span><span class="token string">&quot;https://<span class="token variable">$KUBERNETES_PORT_443_TCP_ADDR</span>:443&quot;</span> <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">kubernetes_ca_cert</span><span class="token operator">=</span>@/var/run/secrets/kubernetes.io/serviceaccount/ca.crt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># create authenticate Role for ArgoCD</span></span>
<span class="line">vault <span class="token function">write</span> auth/kubernetes/role/argocd <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">bound_service_account_names</span><span class="token operator">=</span>argocd-repo-server <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">bound_service_account_namespaces</span><span class="token operator">=</span>argocd <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">policies</span><span class="token operator">=</span>demo <span class="token punctuation">\\</span></span>
<span class="line">  <span class="token assign-left variable">ttl</span><span class="token operator">=</span>48h</span>
<span class="line"></span>
<span class="line"><span class="token builtin class-name">exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-argocd-vault-plugin-credentials-생성" tabindex="-1"><a class="header-anchor" href="#_3-argocd-vault-plugin-credentials-생성"><span>(3) ArgoCD Vault Plugin Credentials 생성</span></a></h4><blockquote><p>💡 참고</p><ul><li><a href="https://argocd-vault-plugin.readthedocs.io/en/stable/backends/#kubernetes-authentication" target="_blank" rel="noopener noreferrer">https://argocd-vault-plugin.readthedocs.io/en/stable/backends/#kubernetes-authentication</a></li><li>네임스페이스 생성 후 추가</li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Secret</span>
<span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin<span class="token punctuation">-</span>credentials</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line"><span class="token key atrule">type</span><span class="token punctuation">:</span> Opaque</span>
<span class="line"><span class="token key atrule">stringData</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">AVP_AUTH_TYPE</span><span class="token punctuation">:</span> <span class="token string">&quot;k8s&quot;</span></span>
<span class="line">  <span class="token key atrule">AVP_K8S_ROLE</span><span class="token punctuation">:</span> <span class="token string">&quot;argocd&quot;</span></span>
<span class="line">  <span class="token key atrule">AVP_TYPE</span><span class="token punctuation">:</span> <span class="token string">&quot;vault&quot;</span></span>
<span class="line">  <span class="token key atrule">VAULT_ADDR</span><span class="token punctuation">:</span> <span class="token string">&quot;http://vault.vault:8200&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-vault-plugin-설치" tabindex="-1"><a class="header-anchor" href="#_2-vault-plugin-설치"><span>2) Vault Plugin 설치</span></a></h3><p>공식문서를 통해 Argo CD에 Vault Plugin을 설치하는 방법은 크게 4가지 방법 있으며, 크게는 **<u>2가지 방법</u>**으로 구분해서 소개하고 있습니다. <a href="https://argocd-vault-plugin.readthedocs.io/en/stable/installation/#initcontainer-and-configuration-via-sidecar" target="_blank" rel="noopener noreferrer">참고</a></p><h4 id="_0-설치방안-2-가지" tabindex="-1"><a class="header-anchor" href="#_0-설치방안-2-가지"><span>(0) 설치방안 2 가지</span></a></h4><ul><li><p>방안1. Installation via a sidecar container <a href="https://argo-cd.readthedocs.io/en/stable/user-guide/config-management-plugins/#installing-a-cmp" target="_blank" rel="noopener noreferrer">(new, starting with Argo CD v2.4.0)</a></p><ul><li><p>Download AVP and supporting tools into a volume and control everything as Kubernetes manifests, using an off-the-shelf sidecar image</p><ul><li>Available as a pre-built Kustomize app: <a href="https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar" target="_blank" rel="noopener noreferrer">https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar</a></li></ul></li><li><p>Create a custom sidecar image with AVP and supporting tools pre-installed</p></li></ul></li><li><p>방안2. Installation via <code>argocd-cm</code> ConfigMap (2.6.0에 deprecated 예정)</p><ul><li><p>Download AVP in a volume and control everything as Kubernetes manifests</p><ul><li>Available as a pre-built Kustomize app: <a href="https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-configmap" target="_blank" rel="noopener noreferrer">https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-configmap</a></li></ul></li><li><p>Create a custom <code>argocd-repo-server</code> image with AVP and supporting tools pre-installed</p></li></ul></li></ul><hr><h4 id="방안1-1-installaion-via-a-sidecar-with-manual" tabindex="-1"><a class="header-anchor" href="#방안1-1-installaion-via-a-sidecar-with-manual"><span>방안1-1) Installaion via a sidecar(with Manual)</span></a></h4><p>필자는 v2.4.0부터 제공되는 사이드카 방식을 통해 구성하는 방법을 채택했습니다.</p><h5 id="a-initcontainer-and-configuration-via-sidecar" tabindex="-1"><a class="header-anchor" href="#a-initcontainer-and-configuration-via-sidecar"><span>a. InitContainer and configuration via sidecar</span></a></h5><p>사이드카 컨테이너에 마운트할 컨피그맵에서 플러그인을 정의</p><blockquote><p>💡 참고 :</p><ul><li><a href="https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar/cmp-plugin.yaml" target="_blank" rel="noopener noreferrer">https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar/cmp-plugin.yaml</a></li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line"><span class="token key atrule">data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">avp.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    apiVersion: argoproj.io/v1alpha1</span>
<span class="line">    kind: ConfigManagementPlugin</span>
<span class="line">    metadata:</span>
<span class="line">      name: argocd-vault-plugin</span>
<span class="line">    spec:</span>
<span class="line">      allowConcurrency: true</span>
<span class="line">      discover:</span>
<span class="line">        find:</span>
<span class="line">          command:</span>
<span class="line">            - sh</span>
<span class="line">            - &quot;-c&quot;</span>
<span class="line">            - &quot;find . -name &#39;*.yaml&#39; | xargs -I {} grep \\&quot;&lt;path\\\\|avp\\\\.kubernetes\\\\.io\\&quot; {} | grep .&quot;</span>
<span class="line">      generate:</span>
<span class="line">        command:</span>
<span class="line">          - argocd-vault-plugin</span>
<span class="line">          - generate</span>
<span class="line">          - &quot;.&quot;</span>
<span class="line">      lockRepo: false</span></span>
<span class="line">  <span class="token key atrule">avp-helm.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    ---</span>
<span class="line">    apiVersion: argoproj.io/v1alpha1</span>
<span class="line">    kind: ConfigManagementPlugin</span>
<span class="line">    metadata:</span>
<span class="line">      name: argocd-vault-plugin-helm</span>
<span class="line">    spec:</span>
<span class="line">      allowConcurrency: true</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment"># Note: this command is run _before_ any Helm templating is done, therefore the logic is to check</span></span>
<span class="line">      <span class="token comment"># if this looks like a Helm chart</span></span>
<span class="line">      <span class="token key atrule">discover</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">find</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> sh</span>
<span class="line">            <span class="token punctuation">-</span> <span class="token string">&quot;-c&quot;</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token string">&quot;find . -name &#39;Chart.yaml&#39; &amp;&amp; find . -name &#39;values.yaml&#39;&quot;</span></span>
<span class="line">      <span class="token key atrule">generate</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># **IMPORTANT**: passing \`\${ARGOCD_ENV_helm_args}\` effectively allows users to run arbitrary code in the Argo CD </span></span>
<span class="line">        <span class="token comment"># repo-server (or, if using a sidecar, in the plugin sidecar). Only use this when the users are completely trusted. If</span></span>
<span class="line">        <span class="token comment"># possible, determine which Helm arguments are needed by your users and explicitly pass only those arguments.</span></span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> sh</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token string">&quot;-c&quot;</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">            helm template $ARGOCD_APP_NAME -n $ARGOCD_APP_NAMESPACE \${ARGOCD_ENV_HELM_ARGS} . |</span>
<span class="line">            argocd-vault-plugin generate -s argocd:argocd-vault-plugin-credentials -</span></span>
<span class="line">      <span class="token key atrule">lockRepo</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line">  <span class="token key atrule">avp-kustomize.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    ---</span>
<span class="line">    apiVersion: argoproj.io/v1alpha1</span>
<span class="line">    kind: ConfigManagementPlugin</span>
<span class="line">    metadata:</span>
<span class="line">      name: argocd-vault-plugin-kustomize</span>
<span class="line">    spec:</span>
<span class="line">      allowConcurrency: true</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment"># Note: this command is run _before_ anything is done, therefore the logic is to check</span></span>
<span class="line">      <span class="token comment"># if this looks like a Kustomize bundle</span></span>
<span class="line">      <span class="token key atrule">discover</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">find</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token punctuation">-</span> find</span>
<span class="line">            <span class="token punctuation">-</span> <span class="token string">&quot;.&quot;</span></span>
<span class="line">            <span class="token punctuation">-</span> <span class="token punctuation">-</span>name</span>
<span class="line">            <span class="token punctuation">-</span> kustomization.yaml</span>
<span class="line">      <span class="token key atrule">generate</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> sh</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token string">&quot;-c&quot;</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token string">&quot;kustomize build . | argocd-vault-plugin generate -&quot;</span></span>
<span class="line">      <span class="token key atrule">lockRepo</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>argocd-repo-server를 패치하여 argocd-vault-plugin을 다운로드하고 사이드카를 정의하기 위한 initContainer를 추가합니다.</p><blockquote><p>💡 참고 :</p><ul><li><a href="https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar/argocd-repo-server.yaml" target="_blank" rel="noopener noreferrer">https://github.com/argoproj-labs/argocd-vault-plugin/blob/main/manifests/cmp-sidecar/argocd-repo-server.yaml</a></li></ul></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>repo<span class="token punctuation">-</span>server</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">automountServiceAccountToken</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># volumes절 아래 추가</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">        <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token key atrule">initContainers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># initContainers 절 아래 추가   </span></span>
<span class="line">      <span class="token comment"># 필자는 편의상 alpine/curl 이미지 사용하여 바이너리 다운로드</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> download<span class="token punctuation">-</span>tools</span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> alpine/curl</span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AVP_VERSION</span>
<span class="line">            <span class="token key atrule">value</span><span class="token punctuation">:</span> 1.15.0</span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>sh<span class="token punctuation">,</span> <span class="token punctuation">-</span>c<span class="token punctuation">]</span></span>
<span class="line">        <span class="token key atrule">args</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token punctuation">&gt;</span><span class="token punctuation">-</span></span>
<span class="line">            curl <span class="token punctuation">-</span>L https<span class="token punctuation">:</span>//github.com/argoproj<span class="token punctuation">-</span>labs/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin/releases/download/v$(AVP_VERSION)/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin_$(AVP_VERSION)_linux_amd64 <span class="token punctuation">-</span>o argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin <span class="token important">&amp;&amp;</span></span>
<span class="line">            chmod +x argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin <span class="token important">&amp;&amp;</span></span>
<span class="line">            mv argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin /custom<span class="token punctuation">-</span>tools/</span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /custom<span class="token punctuation">-</span>tools</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">      <span class="token comment"># argocd-vault-plugin 배포방안(3가지 중 선택)</span></span>
<span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token comment"># AVP : argocd-vault-plugin with plain YAML</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> avp</span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>/var/run/argocd/argocd<span class="token punctuation">-</span>cmp<span class="token punctuation">-</span>server<span class="token punctuation">]</span></span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/argoproj/argocd<span class="token punctuation">:</span>v2.7.4</span>
<span class="line">        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">999</span></span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run/argocd</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> var<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/plugins</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> plugins</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Register plugins into sidecar</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/config/plugin.yaml</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> avp.yaml</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Important: Mount tools into $PATH</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/bin/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            </span>
<span class="line">      <span class="token comment"># AVP-Helm : argocd-vault-plugin with Helm</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> avp<span class="token punctuation">-</span>helm</span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>/var/run/argocd/argocd<span class="token punctuation">-</span>cmp<span class="token punctuation">-</span>server<span class="token punctuation">]</span></span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/argoproj/argocd<span class="token punctuation">:</span>v2.7.4</span>
<span class="line">        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">999</span></span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run/argocd</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> var<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/plugins</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> plugins</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Register plugins into sidecar</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/config/plugin.yaml</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> avp<span class="token punctuation">-</span>helm.yaml</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Important: Mount tools into $PATH</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/bin/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            </span>
<span class="line">      <span class="token comment"># AVP-Kustomize : argocd-vault-plugin with Kustomize</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> avp<span class="token punctuation">-</span>kustomize</span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>/var/run/argocd/argocd<span class="token punctuation">-</span>cmp<span class="token punctuation">-</span>server<span class="token punctuation">]</span></span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/argoproj/argocd<span class="token punctuation">:</span>v2.4.0</span>
<span class="line">        <span class="token key atrule">securityContext</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">          <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">999</span></span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run/argocd</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> var<span class="token punctuation">-</span>files</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/plugins</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> plugins</span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Register plugins into sidecar</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/config/plugin.yaml</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> avp<span class="token punctuation">-</span>kustomize.yaml</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line"></span>
<span class="line">          <span class="token comment"># Important: Mount tools into $PATH</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">            <span class="token key atrule">subPath</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/bin/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>편집 후 재기동 로그 확인</li></ul><figure><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/8p131S.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="방안1-2-installaion-via-a-sidecar-with-helm" tabindex="-1"><a class="header-anchor" href="#방안1-2-installaion-via-a-sidecar-with-helm"><span>방안1-2) Installaion via a sidecar(with Helm)</span></a></h4><blockquote><p>💡 참고</p><ul><li><a href="https://luafanti.medium.com/injecting-secrets-from-vault-into-helm-charts-with-argocd-43fc1df57e74" target="_blank" rel="noopener noreferrer">https://luafanti.medium.com/injecting-secrets-from-vault-into-helm-charts-with-argocd-43fc1df57e74</a></li></ul></blockquote><h5 id="a-configmanagementplugin-설정을-위한-configmap-생성-링크" tabindex="-1"><a class="header-anchor" href="#a-configmanagementplugin-설정을-위한-configmap-생성-링크"><span>a. <code>ConfigManagementPlugin</code> 설정을 위한 configMap 생성 - <a href="https://argocd-vault-plugin.readthedocs.io/en/stable/installation/#initcontainer-and-configuration-via-sidecar" target="_blank" rel="noopener noreferrer">링크</a></span></a></h5><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> ConfigMap</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line"><span class="token key atrule">data</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">avp-helm.yaml</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string"></span>
<span class="line">    apiVersion: argoproj.io/v1alpha1</span>
<span class="line">    kind: ConfigManagementPlugin</span>
<span class="line">    metadata:</span>
<span class="line">      name: argocd-vault-plugin-helm</span>
<span class="line">    spec:</span>
<span class="line">      allowConcurrency: true</span>
<span class="line">      discover:</span>
<span class="line">        find:</span>
<span class="line">          command:</span>
<span class="line">            - sh</span>
<span class="line">            - &quot;-c&quot;</span>
<span class="line">            - &quot;find . -name &#39;Chart.yaml&#39; &amp;&amp; find . -name &#39;values.yaml&#39;&quot;</span>
<span class="line">      generate:</span>
<span class="line">        command:</span>
<span class="line">          - bash</span>
<span class="line">          - &quot;-c&quot;</span>
<span class="line">          - |</span>
<span class="line">            helm template $ARGOCD_APP_NAME --include-crds -n $ARGOCD_APP_NAMESPACE -f \${ARGOCD_ENV_HELM_VALUES} . |</span>
<span class="line">            argocd-vault-plugin generate -s argocd:argocd-vault-plugin-credentials -</span>
<span class="line">      lockRepo: false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>💡 참고</p><ul><li><a href="https://argocd-vault-plugin.readthedocs.io/en/stable/cmd/generate/" target="_blank" rel="noopener noreferrer">argocd-vault-plugin generate</a></li><li><a href="https://colinwilson.uk/2022/03/27/secret-management-with-gitops-and-argo-cd-vault-plugin/" target="_blank" rel="noopener noreferrer">https://colinwilson.uk/2022/03/27/secret-management-with-gitops-and-argo-cd-vault-plugin/</a></li></ul></blockquote><h5 id="b-argocd-wi5th-vault-plugin-helm-chart-작성" tabindex="-1"><a class="header-anchor" href="#b-argocd-wi5th-vault-plugin-helm-chart-작성"><span>b. ArgoCD wi5th Vault Plugin Helm Chart 작성</span></a></h5><ul><li><code>argocd-helm-values.yaml</code></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">repoServer</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">rbac</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">verbs</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> get</span>
<span class="line">        <span class="token punctuation">-</span> list</span>
<span class="line">        <span class="token punctuation">-</span> watch</span>
<span class="line">      <span class="token key atrule">apiGroups</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token string">&#39;&#39;</span></span>
<span class="line">      <span class="token key atrule">resources</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> secrets</span>
<span class="line">        <span class="token punctuation">-</span> configmaps</span>
<span class="line">  <span class="token key atrule">initContainers</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> download<span class="token punctuation">-</span>tools</span>
<span class="line">      <span class="token key atrule">image</span><span class="token punctuation">:</span> alpine/curl</span>
<span class="line">      <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AVP_VERSION</span>
<span class="line">          <span class="token key atrule">value</span><span class="token punctuation">:</span> 1.14.0</span>
<span class="line">      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>sh<span class="token punctuation">,</span> <span class="token punctuation">-</span>c<span class="token punctuation">]</span></span>
<span class="line">      <span class="token key atrule">args</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token punctuation">&gt;</span><span class="token punctuation">-</span></span>
<span class="line">          curl <span class="token punctuation">-</span>L https<span class="token punctuation">:</span>//github.com/argoproj<span class="token punctuation">-</span>labs/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin/releases/download/v$(AVP_VERSION)/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin_$(AVP_VERSION)_linux_amd64 <span class="token punctuation">-</span>o argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin <span class="token important">&amp;&amp;</span></span>
<span class="line">          chmod +x argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin <span class="token important">&amp;&amp;</span></span>
<span class="line">          mv argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin /custom<span class="token punctuation">-</span>tools/</span>
<span class="line">      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /custom<span class="token punctuation">-</span>tools</span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">  <span class="token key atrule">extraContainers</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> avp<span class="token punctuation">-</span>helm</span>
<span class="line">      <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>/var/run/argocd/argocd<span class="token punctuation">-</span>cmp<span class="token punctuation">-</span>server<span class="token punctuation">]</span></span>
<span class="line">      <span class="token key atrule">image</span><span class="token punctuation">:</span> quay.io/argoproj/argocd<span class="token punctuation">:</span>v2.7.4</span>
<span class="line">      <span class="token key atrule">securityContext</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">runAsNonRoot</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">        <span class="token key atrule">runAsUser</span><span class="token punctuation">:</span> <span class="token number">999</span></span>
<span class="line">      <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /var/run/argocd</span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> var<span class="token punctuation">-</span>files</span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/plugins</span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> plugins</span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /tmp</span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir</span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /home/argocd/cmp<span class="token punctuation">-</span>server/config</span>
<span class="line">          <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">          <span class="token key atrule">subPath</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/bin/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">  <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">configMap</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> cmp<span class="token punctuation">-</span>plugin</span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> tmp<span class="token punctuation">-</span>dir</span>
<span class="line">      <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># If you face issue with ArgoCD CRDs installation, then uncomment below section to disable it</span></span>
<span class="line"><span class="token comment">#crds:</span></span>
<span class="line"><span class="token comment">#  install: false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h4 id="방안2-installation-via-arocd-cm-configmap" tabindex="-1"><a class="header-anchor" href="#방안2-installation-via-arocd-cm-configmap"><span>방안2) Installation via arocd-cm ConfigMap</span></a></h4><p>해당 방안의 경우에는 <code>argocd-cm</code> configMap을 수정하여 적용하는 방안입니다.</p><blockquote><p>💡 참고 : 2.6.0에서 Deprecated 될 예정</p></blockquote><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line">      <span class="token key atrule">containers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>repo<span class="token punctuation">-</span>server</span>
<span class="line">        <span class="token comment"># volumeMounts절에 custom-tools 추가</span></span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">          <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /usr/local/bin/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">          <span class="token key atrule">subPath</span><span class="token punctuation">:</span> argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">  	  <span class="token comment"># volume절에 custom-tools 추가</span></span>
<span class="line">      <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line">        <span class="token key atrule">emptyDir</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">      <span class="token comment"># init Container 추가  </span></span>
<span class="line">      <span class="token key atrule">initContainers</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> download<span class="token punctuation">-</span>tools</span>
<span class="line">        <span class="token key atrule">image</span><span class="token punctuation">:</span> alpine<span class="token punctuation">:</span><span class="token number">3.8</span></span>
<span class="line">        <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>sh<span class="token punctuation">,</span> <span class="token punctuation">-</span>c<span class="token punctuation">]</span></span>
<span class="line">        <span class="token comment"># Don&#39;t forget to update this to whatever the stable release version is</span></span>
<span class="line">        <span class="token comment"># Note the lack of the \`v\` prefix unlike the git tag</span></span>
<span class="line">        <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> AVP_VERSION</span>
<span class="line">            <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&quot;1.14.0&quot;</span></span>
<span class="line">        <span class="token key atrule">args</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token punctuation">&gt;</span><span class="token punctuation">-</span></span>
<span class="line">            wget <span class="token punctuation">-</span>O argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin</span>
<span class="line">            https<span class="token punctuation">:</span>//github.com/argoproj<span class="token punctuation">-</span>labs/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin/releases/download/v$<span class="token punctuation">{</span>AVP_VERSION<span class="token punctuation">}</span>/argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin_$<span class="token punctuation">{</span>AVP_VERSION<span class="token punctuation">}</span>_linux_amd64 <span class="token important">&amp;&amp;</span></span>
<span class="line">            chmod +x argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin <span class="token important">&amp;&amp;</span></span>
<span class="line">            mv argocd<span class="token punctuation">-</span>vault<span class="token punctuation">-</span>plugin /custom<span class="token punctuation">-</span>tools/</span>
<span class="line">        <span class="token key atrule">volumeMounts</span><span class="token punctuation">:</span></span>
<span class="line">          <span class="token punctuation">-</span> <span class="token key atrule">mountPath</span><span class="token punctuation">:</span> /custom<span class="token punctuation">-</span>tools</span>
<span class="line">            <span class="token key atrule">name</span><span class="token punctuation">:</span> custom<span class="token punctuation">-</span>tools</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-샘플-애플리케이션-배포" tabindex="-1"><a class="header-anchor" href="#_3-샘플-애플리케이션-배포"><span>3) 샘플 애플리케이션 배포</span></a></h3><h4 id="_1-저장소-추가" tabindex="-1"><a class="header-anchor" href="#_1-저장소-추가"><span>(1) 저장소 추가</span></a></h4><blockquote><p>💡 참고 : Git 저장소에 대한 Fork 후 진행</p></blockquote><div class="language-bash" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="line"><span class="token comment"># 샘플 애플리케이션 배포를 위한 저장소 추가</span></span>
<span class="line"><span class="token comment"># argocd repo add &lt;저장소 주소&gt; --username &lt;계정명&gt; --password &lt;암호&gt;</span></span>
<span class="line">argocd repo <span class="token function">add</span> https://github.com/hyungwook0221/spring-boot-debug-app <span class="token parameter variable">--username</span> <span class="token operator">&lt;</span>계정명<span class="token operator">&gt;</span> <span class="token parameter variable">--password</span> <span class="token operator">&lt;</span>암호<span class="token operator">&gt;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment"># 등록 확인 : 기본적으로 아르고시디가 설치된 쿠버네티스 클러스터는 타깃 클러스터로 등록됨</span></span>
<span class="line">argocd repo list</span>
<span class="line">TYPE  NAME  REPO                                                    INSECURE  OCI    LFS    CREDS  STATUS      MESSAGE  PROJECT</span>
<span class="line"><span class="token function">git</span>         https://github.com/hyungwook0221/argo-demo.git          <span class="token boolean">false</span>     <span class="token boolean">false</span>  <span class="token boolean">false</span>  <span class="token boolean">true</span>   Successful</span>
<span class="line"><span class="token function">git</span>         https://github.com/hyungwook0221/spring-boot-debug-app  <span class="token boolean">false</span>     <span class="token boolean">false</span>  <span class="token boolean">false</span>  <span class="token boolean">true</span>   Successful</span>
<span class="line"></span></code></pre></div><h4 id="_2-helm-chart에-포함된-시크릿-데이터-배포" tabindex="-1"><a class="header-anchor" href="#_2-helm-chart에-포함된-시크릿-데이터-배포"><span>(2) Helm Chart에 포함된 시크릿 데이터 배포</span></a></h4><ul><li>Applicaton YAML 샘플</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> argoproj.io/v1alpha1</span>
<span class="line"><span class="token key atrule">kind</span><span class="token punctuation">:</span> Application</span>
<span class="line"><span class="token key atrule">metadata</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">name</span><span class="token punctuation">:</span> demo</span>
<span class="line">  <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line"><span class="token key atrule">spec</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">destination</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">namespace</span><span class="token punctuation">:</span> argocd</span>
<span class="line">    <span class="token key atrule">server</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//kubernetes.default.svc</span>
<span class="line">  <span class="token key atrule">project</span><span class="token punctuation">:</span> default</span>
<span class="line">  <span class="token key atrule">source</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">path</span><span class="token punctuation">:</span> infra/helm</span>
<span class="line">    <span class="token key atrule">repoURL</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/hyungwook0221/spring<span class="token punctuation">-</span>boot<span class="token punctuation">-</span>debug<span class="token punctuation">-</span>app</span>
<span class="line">    <span class="token key atrule">targetRevision</span><span class="token punctuation">:</span> main</span>
<span class="line">    <span class="token key atrule">plugin</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">env</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> HELM_ARGS</span>
<span class="line">          <span class="token key atrule">value</span><span class="token punctuation">:</span> <span class="token string">&#39;-f override-values.yaml&#39;</span></span>
<span class="line">  <span class="token key atrule">syncPolicy</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">automated</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">prune</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">      <span class="token key atrule">selfHeal</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>배포된 아키텍처</li></ul><figure><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/OY2MpT.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>위 Application 배포시 사용될 <code>override-values.yaml</code> 파일의 코드 중 Vault를 통해서 받아올 부분은 다음과 같습니다.</p><div class="language-yaml" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token comment">#(생략)</span></span>
<span class="line"><span class="token key atrule">envs</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VAULT_SECRET_USER</span>
<span class="line">    <span class="token key atrule">value</span><span class="token punctuation">:</span> &lt;path<span class="token punctuation">:</span>kv<span class="token punctuation">-</span>v2/data/demo<span class="token comment">#user&gt;</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> VAULT_SECRET_PASSWORD</span>
<span class="line">    <span class="token key atrule">value</span><span class="token punctuation">:</span> &lt;path<span class="token punctuation">:</span>kv<span class="token punctuation">-</span>v2/data/demo<span class="token comment">#password&gt;</span></span>
<span class="line"></span></code></pre></div><p>해당 Values 파일에 등록된 <code>VAULT_SECRET_USER</code>, <code>VAULT_SECRET_PASSWORD</code> 값은 Vault의 KV-V2에 저장된 값을 호출하여 실제 매니페스트로 저장되어 배포될 때에는 다음과 같이 파싱된 후 기입됩니다.</p><img src="https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/argocd-helm-values.png" alt="img" style="zoom:50%;"><p>이 외에 추가 데모 시나리오는 다음 글에서 이어서 업로드 하겠습니다!🔥</p>`,89),t=[p];function i(c,o){return s(),a("div",null,t)}const d=n(l,[["render",i],["__file","argocd-vault-plugin.html.vue"]]),m=JSON.parse('{"path":"/04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.html","title":"ArgoCD Vault Plugin","lang":"ko-KR","frontmatter":{"description":"ArgoCD Vault Plugin 연동방안","tag":["vault","argocd","gitops","devsescops","pipeline","github","gitlab","secret","kubernetes","k8s","eks"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"ArgoCD Vault Plugin"}],["meta",{"property":"og:description","content":"ArgoCD Vault Plugin 연동방안"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/8p131S.jpg"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"vault"}],["meta",{"property":"article:tag","content":"argocd"}],["meta",{"property":"article:tag","content":"gitops"}],["meta",{"property":"article:tag","content":"devsescops"}],["meta",{"property":"article:tag","content":"pipeline"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:tag","content":"gitlab"}],["meta",{"property":"article:tag","content":"secret"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:tag","content":"eks"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ArgoCD Vault Plugin\\",\\"image\\":[\\"https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/8p131S.jpg\\",\\"https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/OY2MpT.jpg\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. ArgoCD","slug":"_1-argocd","link":"#_1-argocd","children":[{"level":3,"title":"1) 개요 및 소개","slug":"_1-개요-및-소개","link":"#_1-개요-및-소개","children":[]},{"level":3,"title":"2) 설치","slug":"_2-설치","link":"#_2-설치","children":[]},{"level":3,"title":"3) 샘플 앱 배포","slug":"_3-샘플-앱-배포","link":"#_3-샘플-앱-배포","children":[]}]},{"level":2,"title":"2. Argo CD Vault Plugin","slug":"_2-argo-cd-vault-plugin","link":"#_2-argo-cd-vault-plugin","children":[{"level":3,"title":"1) Vault 환경 준비","slug":"_1-vault-환경-준비","link":"#_1-vault-환경-준비","children":[]},{"level":3,"title":"2) Vault Plugin 설치","slug":"_2-vault-plugin-설치","link":"#_2-vault-plugin-설치","children":[]},{"level":3,"title":"3) 샘플 애플리케이션 배포","slug":"_3-샘플-애플리케이션-배포","link":"#_3-샘플-애플리케이션-배포","children":[]}]}],"git":{"createdTime":1686536963000,"updatedTime":1695042774000,"contributors":[{"name":"Hyungwook Yu","email":"40632767+chosam2@users.noreply.github.com","commits":7},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1},{"name":"swbs90","email":"36329083+swbs90@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":35.45,"words":2127},"filePathRelative":"04-HashiCorp/06-Vault/04-UseCase/argocd-vault-plugin.md","localizedDate":"2023년 6월 12일","excerpt":"\\n<blockquote>\\n<p>참고 : 본 글은 AEWS 스터디 7주차 내용중 일부로 작성된 내용입니다.</p>\\n</blockquote>\\n<h2>1. ArgoCD</h2>\\n<img src=\\"https://raw.githubusercontent.com/hyungwook0221/img/main/uPic/oH5ELj.jpg\\" alt=\\"img\\" style=\\"zoom:50%;\\">\\n<h3>1) 개요 및 소개</h3>\\n<p>Argo <strong>CD</strong> is a declarative, <strong>GitOps</strong> continuous delivery tool for <strong>Kubernetes</strong>.</p>"}');export{d as comp,m as data};
