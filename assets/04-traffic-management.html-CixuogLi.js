import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as d,c as r,b as e,d as n,a,e as i}from"./app-DwRVeH7t.js";const c="/assets/03-traffic-v1-BGAizMHc.png",v="/assets/03-traffic-v2-CgPD7up9.png",o="/assets/03-traffic-methods-BH17zSFz.png",u="/assets/03-traffic-metadata-C8cC4nAb.png",p="/assets/03-traffic-routeui-Dm1u6sgH.png",m={},b=i(`<h1 id="_04-트래픽-관리" tabindex="-1"><a class="header-anchor" href="#_04-트래픽-관리"><span>04. 트래픽 관리</span></a></h1><p>실습을 진행하기 위한 디렉토리를 생성합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> ./traffic
</code></pre></div><p>Service Mesh는 HTTP 프로토콜 상에서 L7으로 동작하게 됩니다. 따라서 기본 프로토콜을 http로 변경합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-to-service.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ProxyDefaults
metadata:
  name: global
spec:
  config:
    protocol: http
EOF</span>
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-to-service.yaml
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 출력</span>
proxydefaults.consul.hashicorp.com/global created
</code></pre></div><h2 id="샘플-앱-준비" tabindex="-1"><a class="header-anchor" href="#샘플-앱-준비"><span>샘플 앱 준비</span></a></h2><h3 id="프론트엔드-서비스" tabindex="-1"><a class="header-anchor" href="#프론트엔드-서비스"><span>프론트엔드 서비스</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/gs-frontend.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
apiVersion: v1
kind: Service
metadata:
  name: gs-frontend
spec:
  selector:
    app: gs-frontend
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: gs-frontend
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gs-frontend
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gs-frontend
  template:
    metadata:
      labels:
        app: gs-frontend
      annotations:
        prometheus.io/scrape: &quot;true&quot;
        prometheus.io/port: &quot;9901&quot;
        consul.hashicorp.com/connect-inject: &quot;true&quot;
        consul.hashicorp.com/transparent-proxy: true
        consul.hashicorp.com/connect-service-upstreams: &quot;gs-backend:8080&quot;
    spec:
      serviceAccountName: gs-frontend
      containers:
        - name: gs-frontend
          image: hahohh/consul-frontend-nodejs:v1.5
          env:
            - name: PORT
              value: &quot;3000&quot;
            - name: UPSTREAM_URL
              value: &quot;http://localhost:8080
          ports:
            - containerPort: 3000
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/gs-frontend.yaml
</code></pre></div><h3 id="백엔드-서비스" tabindex="-1"><a class="header-anchor" href="#백엔드-서비스"><span>백엔드 서비스</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/gs-backend.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
---
apiVersion: v1
kind: Service
metadata:
  name: gs-backend
spec:
  selector:
    app: gs-backend
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080
---
apiVersion: v1
kind: ServiceAccount
metadata:
  name: gs-backend
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gs-backend-v1
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gs-backend
      version: v1
  template:
    metadata:
      labels:
        app: gs-backend
        version: v1
      annotations:
        consul.hashicorp.com/connect-inject: &quot;true&quot;
        consul.hashicorp.com/service-meta-version: v1
        consul.hashicorp.com/service-tags: v1
    spec:
      serviceAccountName: gs-backend
      containers:
        - name: gs-backend
          image: hahohh/consul-backend-go:v1.2
          env:
            - name: PORT
              value: &quot;8080&quot;
            - name: COLOR
              value: &quot;green&quot;
            - name: VERSION
              value: &quot;v1&quot;
          ports:
            - containerPort: 8080
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: gs-backend-v2
spec:
  replicas: 1
  selector:
    matchLabels:
      app: gs-backend
      version: v2
  template:
    metadata:
      labels:
        app: gs-backend
        version: v2
      annotations:
        consul.hashicorp.com/connect-inject: &quot;true&quot;
        consul.hashicorp.com/service-meta-version: v2
        consul.hashicorp.com/service-tags: v2
    spec:
      serviceAccountName: gs-backend
      containers:
        - name: gs-backend
          image: hahohh/consul-backend-go:v1.2
          env:
            - name: PORT
              value: &quot;8080&quot;
            - name: COLOR
              value: &quot;blue&quot;
            - name: VERSION
              value: &quot;v2&quot;
            # - name: ISFAIL
            #   value: &quot;yyyy&quot;
          ports:
            - containerPort: 8080
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/gs-backend.yaml
</code></pre></div><h3 id="서비스-intention" tabindex="-1"><a class="header-anchor" href="#서비스-intention"><span>서비스 Intention</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-to-service.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceIntentions
metadata:
  name: gs-backend
spec:
  destination:
    name: gs-backend
  sources:
    - name: gs-frontend
      action: allow
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-to-service.yaml
</code></pre></div><p><code>port-forward</code>를 통해 로컬에서 web 앱을 확인합니다.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubect l port-forward service/gs-frontend <span class="token number">3000</span>:3000 <span class="token parameter variable">--address</span> <span class="token number">0.0</span>.0.0
</code></pre></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 출력</span>
Forwarding from <span class="token number">0.0</span>.0.0:3000 -<span class="token operator">&gt;</span> <span class="token number">3000</span>
</code></pre></div>`,23),h={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},g=i('<p>두개의 버전의 백엔드가 서로다른 갑을 리턴하여 때에 따라 v1, v2가 번갈아 나타납니다.</p><figure><img src="'+c+'" alt="v1" tabindex="0" loading="lazy"><figcaption>v1</figcaption></figure><figure><img src="'+v+'" alt="v2" tabindex="0" loading="lazy"><figcaption>v2</figcaption></figure><h2 id="트래픽-제어-요소" tabindex="-1"><a class="header-anchor" href="#트래픽-제어-요소"><span>트래픽 제어 요소</span></a></h2><figure><img src="'+o+`" alt="traffic-method" tabindex="0" loading="lazy"><figcaption>traffic-method</figcaption></figure><ul><li>Resolver : 동일한 서비스 이름이 있더라도 조건에 따라 각 서비스를 독립적으로 정의합니다. (e.g. v1, v2, canary)</li><li>Splitter : 정의된 서비스로 가중치에 따라 트래픽을 분산합니다. 10000분율이 적용됩니다.</li><li>Router : HTTP, gRPC 속성 기반으로 정의된 서비르소 트래픽을 분산합니다. <ul><li>pathPrefix / PathExact / PathRegex</li><li>Header</li><li>QueryParam</li></ul></li></ul><h3 id="resolve" tabindex="-1"><a class="header-anchor" href="#resolve"><span>Resolve</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-resolver.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceResolver
metadata:
  name: gs-backend
spec:
  defaultSubset: v1
  subsets:
    v1:
      filter: &quot;Service.Meta.version == v1&quot;
    v2:
      filter: &quot;Service.Meta.version == v2&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-resolver.yaml
</code></pre></div><p>앞서 배포된 <code>gs-backend</code> 의 <code>Deployment</code> 에 선언된 <code>annotation</code> 내용을 확인하면 <code>consul.hashicorp.com/service-meta-version: v2</code> 을 확인할 수 있습니다. Consul UI에서도 해당 Meta 정보를 확인할 수 있습니다. 선언된 정보를 기반으로 서비스의 <code>subset</code> 을 정의합니다.</p><figure><img src="`+u+`" alt="service-meta" tabindex="0" loading="lazy"><figcaption>service-meta</figcaption></figure><h3 id="splitter" tabindex="-1"><a class="header-anchor" href="#splitter"><span>Splitter</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-splitter.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceSplitter
metadata:
  name: gs-backend
spec:
  splits:
    - weight: 50
      serviceSubset: v1
    - weight: 50
      serviceSubset: v2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-splitter.yaml
</code></pre></div><p><code>weight</code>에 지정된 비율로 Resolve된 서비스 대상 <code>subset</code> 에 트래픽을 분산합니다. <code>weight</code>값을 0:100, 100:0 등으로 변경하여 요청의 결과가 어떻게 변화하는지 확인해 봅니다.</p>`,17),f={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},k=i(`<h3 id="router" tabindex="-1"><a class="header-anchor" href="#router"><span>Router</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-router.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceRouter
metadata:
  name: gs-backend
spec:
  routes:
    - match:
        http:
          pathPrefix: &#39;/v1&#39;
      destination:
        service: gs-backend
        serviceSubset: v1
    - match:
        http:
          pathPrefix: &#39;/v2&#39;
      destination:
        service: gs-backend
        serviceSubset: v2
    - match:
        http:
          queryParam:
            - name: version
              exact: &#39;v1&#39;
      destination:
        service: gs-backend
        serviceSubset: v1
    - match:
        http:
          queryParam:
            - name: version
              exact: &#39;v2&#39;
      destination:
        service: gs-backend
        serviceSubset: v2
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-router.yaml
</code></pre></div><p>예제에서는 url의 path, queryParam을 예로 트래픽을 컨트롤 합니다. 다음과같이 요청하여 트래픽이 조정되는 것을 확인합니다.</p>`,5),y={href:"http://localhost:3000/v1",target:"_blank",rel:"noopener noreferrer"},x={href:"http://localhost:3000/v2",target:"_blank",rel:"noopener noreferrer"},_={href:"http://localhost:3000/?version=v1",target:"_blank",rel:"noopener noreferrer"},S={href:"http://localhost:3000/?version=v2",target:"_blank",rel:"noopener noreferrer"},E=i(`<h3 id="서비스-intention-l7" tabindex="-1"><a class="header-anchor" href="#서비스-intention-l7"><span>서비스 Intention (L7)</span></a></h3><p>service-to-service 허용 방식에도 Meshod, Path 등을 지정할 수 있습니다. 다음과 같이 변경하고 POST만 넣은 상태에서는 어떻게 동작하는지 확인합니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-to-service.yaml <span class="token operator">&lt;&lt;</span>EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceIntentions
metadata:
  name: gs-backend
spec:
  destination:
    name: gs-backend
  sources:
    - name: gs-frontend
      permissions:
        - action: allow
          http:
            pathPrefix: /
            <span class="token comment"># methods: [&#39;GET&#39;, &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE&#39;, &#39;HEAD&#39;]</span>
            methods: <span class="token punctuation">[</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-to-service.yaml
</code></pre></div><p>다시 앱간의 요청인 <code>GET</code>으로 변경하고 트래픽 허용여부를 확인해봅니다.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./traffic/service-to-service.yaml <span class="token operator">&lt;&lt;</span>EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ServiceIntentions
metadata:
  name: gs-backend
spec:
  destination:
    name: gs-backend
  sources:
    - name: gs-frontend
      permissions:
        - action: allow
          http:
            pathPrefix: /
            <span class="token comment"># methods: [&#39;GET&#39;, &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE&#39;, &#39;HEAD&#39;]</span>
            methods: <span class="token punctuation">[</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>적용하기</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-f</span> ./traffic/service-to-service.yaml
</code></pre></div><h2 id="consul-ui-routing-table" tabindex="-1"><a class="header-anchor" href="#consul-ui-routing-table"><span>Consul UI Routing table</span></a></h2><p>Consul UI에 접속하여 <code>gs-backend</code>의 <code>Routing</code> 탭을 클릭, 구성된 Resolver, Splitter, Router가 어떻게 구성되었는지, 각 서비스에는 어떤 조건으로 요청할 수 있는지 확인합니다.</p><figure><img src="`+p+'" alt="ui" tabindex="0" loading="lazy"><figcaption>ui</figcaption></figure>',12);function P(q,O){const s=t("ExternalLinkIcon");return d(),r("div",null,[b,e("p",null,[e("a",h,[n("http://localhost:3000"),a(s)]),n(" 에 브라우저로 접속하여 상태를 확인합니다.")]),g,e("ul",null,[e("li",null,[e("a",f,[n("http://localhost:3000"),a(s)])])]),k,e("ul",null,[e("li",null,[e("a",y,[n("http://localhost:3000/v1"),a(s)])]),e("li",null,[e("a",x,[n("http://localhost:3000/v2"),a(s)])]),e("li",null,[e("a",_,[n("http://localhost:3000/?version=v1"),a(s)])]),e("li",null,[e("a",S,[n("http://localhost:3000/?version=v2"),a(s)])])]),E])}const C=l(m,[["render",P],["__file","04-traffic-management.html.vue"]]),F=JSON.parse('{"path":"/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/04-traffic-management.html","title":"04. 트래픽 관리","lang":"ko-KR","frontmatter":{"description":"Consul Service Mesh on Kubernetes (Ent)","tag":["Consul","ServiceMesh","K8s","Kubernetes"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/04-traffic-management.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"04. 트래픽 관리"}],["meta",{"property":"og:description","content":"Consul Service Mesh on Kubernetes (Ent)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"ServiceMesh"}],["meta",{"property":"article:tag","content":"K8s"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04. 트래픽 관리\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"샘플 앱 준비","slug":"샘플-앱-준비","link":"#샘플-앱-준비","children":[{"level":3,"title":"프론트엔드 서비스","slug":"프론트엔드-서비스","link":"#프론트엔드-서비스","children":[]},{"level":3,"title":"백엔드 서비스","slug":"백엔드-서비스","link":"#백엔드-서비스","children":[]},{"level":3,"title":"서비스 Intention","slug":"서비스-intention","link":"#서비스-intention","children":[]}]},{"level":2,"title":"트래픽 제어 요소","slug":"트래픽-제어-요소","link":"#트래픽-제어-요소","children":[{"level":3,"title":"Resolve","slug":"resolve","link":"#resolve","children":[]},{"level":3,"title":"Splitter","slug":"splitter","link":"#splitter","children":[]},{"level":3,"title":"Router","slug":"router","link":"#router","children":[]},{"level":3,"title":"서비스 Intention (L7)","slug":"서비스-intention-l7","link":"#서비스-intention-l7","children":[]}]},{"level":2,"title":"Consul UI Routing table","slug":"consul-ui-routing-table","link":"#consul-ui-routing-table","children":[]}],"git":{"createdTime":1645936869000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":12.27,"words":736},"filePathRelative":"04-HashiCorp/04-Consul/06-on_Kubernetes/ServiceMesh101/04-traffic-management.md","localizedDate":"2022년 2월 27일","excerpt":"\\n<p>실습을 진행하기 위한 디렉토리를 생성합니다.</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">mkdir</span> ./traffic\\n</code></pre></div><p>Service Mesh는 HTTP 프로토콜 상에서 L7으로 동작하게 됩니다. 따라서 기본 프로토콜을 http로 변경합니다.</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&gt;</span> ./traffic/service-to-service.yaml <span class=\\"token operator\\">&lt;&lt;</span><span class=\\"token string\\">EOF\\napiVersion: consul.hashicorp.com/v1alpha1\\nkind: ProxyDefaults\\nmetadata:\\n  name: global\\nspec:\\n  config:\\n    protocol: http\\nEOF</span>\\n</code></pre></div>"}');export{C as comp,F as data};
