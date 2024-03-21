import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as i,c as l,b as n,d as s,a as t,e}from"./app-DwRVeH7t.js";const c={},u=n("h1",{id:"envoy-timeout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#envoy-timeout"},[n("span",null,"Envoy Timeout")])],-1),r={href:"https://www.consul.io/api-docs/config",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),v={href:"https://www.consul.io/docs/connect/config-entries/proxy-defaults",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),k={href:"https://www.consul.io/docs/connect/proxies/envoy",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="단계-1-deployment-sample" tabindex="-1"><a class="header-anchor" href="#단계-1-deployment-sample"><span>단계 1. Deployment Sample</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./gs-frontend.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
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
      annotations:
        consul.hashicorp.com/connect-inject: &quot;true&quot;
        consul.hashicorp.com/transparent-proxy: &quot;false&quot;
        consul.hashicorp.com/connect-service-upstreams: &quot;gs-backend:8080&quot;
      labels:
        app: gs-frontend
    spec:
      serviceAccountName: gs-frontend
      containers:
        - name: gs-frontend
          image: hahohh/consul-frontend-nodejs:v1.5
          env:
            - name: PORT
              value: &quot;3000&quot;
            - name: UPSTREAM_URL
              value: &quot;http://localhost:8080&quot;
          ports:
            - containerPort: 3000
EOF</span>

kubectl apply <span class="token parameter variable">-f</span> ./gs-frontend.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-2-config-dump-생성" tabindex="-1"><a class="header-anchor" href="#단계-2-config-dump-생성"><span>단계 2. config_dump 생성</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> pod/<span class="token operator">&lt;</span>POD_ID<span class="token operator">&gt;</span> <span class="token parameter variable">-c</span> envoy-sidecar -- <span class="token function">wget</span> -qO- http://localhost:19000/config_dump
</code></pre></div><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">&quot;configs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
   <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.admin.v3.BootstrapConfigDump&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;bootstrap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     &lt;생략&gt;
    <span class="token property">&quot;static_resources&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">&quot;clusters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
       <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local_agent&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STATIC&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;connect_timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1s&quot;</span><span class="token punctuation">,</span>
  &lt;생략&gt;
  <span class="token punctuation">{</span>
   <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.admin.v3.ClustersConfigDump&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;static_clusters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     <span class="token property">&quot;cluster&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.config.cluster.v3.Cluster&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local_agent&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STATIC&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;connect_timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1s&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;http2_protocol_options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      
  &lt;생략&gt;
   <span class="token property">&quot;dynamic_active_clusters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     <span class="token property">&quot;version_info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eb3fa9f7104047dd6420d0eb13fd556995d2c6e7d687c4db07b759408ecf0345&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;cluster&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.config.cluster.v3.Cluster&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gs-backend.default.dc1.internal.a3568e3d-e611-5f3e-01b9-24ec787ce275.consul&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;EDS&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;eds_cluster_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;eds_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;ads&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;resource_api_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;V3&quot;</span>
       <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;connect_timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5s&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;circuit_breakers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  &lt;생략&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>일부 기본 timeout 값은 기본값 <ul><li>static_resources.clusters.*.connect_timeout : &quot;1s&quot;</li><li>dynamic_active_clusters.*.connect_timeout : &quot;5s&quot;</li></ul></li></ul><h2 id="단계-3-proxydefaults-설정" tabindex="-1"><a class="header-anchor" href="#단계-3-proxydefaults-설정"><span>단계 3. ProxyDefaults 설정</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">cat</span> <span class="token operator">&gt;</span> ./proxydefaults.yaml <span class="token operator">&lt;&lt;</span><span class="token string">EOF
apiVersion: consul.hashicorp.com/v1alpha1
kind: ProxyDefaults
metadata:
  name: global
spec:
  config:
    protocol: http
    local_connect_timeout_ms: 60000
    local_request_timeout_ms: 60000
    upstreamConfig:
      defaults:
        protocol: http
        connectTimeoutMs : 60000
EOF</span>

kubectl apply <span class="token parameter variable">-f</span> ./proxydefaults.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="단계-4-consul-api-에서-proxy-default-값-변경-확인" tabindex="-1"><a class="header-anchor" href="#단계-4-consul-api-에서-proxy-default-값-변경-확인"><span>단계 4. Consul API 에서 <code>proxy-default</code> 값 변경 확인</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token builtin class-name">exec</span> pod/consul-server-0 -- <span class="token function">wget</span> -qO- http://localhost:8500/v1/config/proxy-defaults/global <span class="token operator">|</span> jq <span class="token builtin class-name">.</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;Kind&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;proxy-defaults&quot;</span>,
  <span class="token string">&quot;Name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;global&quot;</span>,
  <span class="token string">&quot;Config&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;local_connect_timeout_ms&quot;</span><span class="token builtin class-name">:</span> <span class="token number">60000</span>,
    <span class="token string">&quot;local_request_timeout_ms&quot;</span><span class="token builtin class-name">:</span> <span class="token number">60000</span>,
    <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http&quot;</span>,
    <span class="token string">&quot;upstreamConfig&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;defaults&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;connectTimeoutMs&quot;</span><span class="token builtin class-name">:</span> <span class="token number">60000</span>,
        <span class="token string">&quot;protocol&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;http&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;TransparentProxy&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
  <span class="token string">&quot;MeshGateway&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
  <span class="token string">&quot;Expose&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>,
  <span class="token string">&quot;Meta&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;consul.hashicorp.com/source-datacenter&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;dc1&quot;</span>,
    <span class="token string">&quot;external-source&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;kubernetes&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;Partition&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
  <span class="token string">&quot;Namespace&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;default&quot;</span>,
  <span class="token string">&quot;CreateIndex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">354</span>,
  <span class="token string">&quot;ModifyIndex&quot;</span><span class="token builtin class-name">:</span> <span class="token number">354</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="단계-5-config-dump-재생성" tabindex="-1"><a class="header-anchor" href="#단계-5-config-dump-재생성"><span>단계 5. config_dump 재생성</span></a></h2>`,11),q=n("li",null,'dynamic_active_clusters.connect_timeout : "60s"',-1),g={href:"http://type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager",target:"_blank",rel:"noopener noreferrer"},y={href:"http://type.googleapis.com/envoy.config.route.v3.RouteConfiguration",target:"_blank",rel:"noopener noreferrer"},f=e(`<div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
 <span class="token property">&quot;configs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
   <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.admin.v3.BootstrapConfigDump&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;bootstrap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  &lt;생략&gt;
    <span class="token punctuation">{</span>
     <span class="token property">&quot;version_info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c80b97864daee80ecc0335fdd5b67437b946ea76e77f848d0cd69d6d1ad330ea&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;cluster&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.config.cluster.v3.Cluster&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local_app&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STATIC&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;connect_timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60s&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;load_assignment&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  &lt;생략&gt;
    <span class="token punctuation">{</span>
     <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener:10.0.1.162:20000&quot;</span><span class="token punctuation">,</span>
     <span class="token property">&quot;active_state&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;version_info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4f8654a4ce70f346dd63c479b3b42b41c5a92eda52f6b2d38dab8ff4536923f3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;listener&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.config.listener.v3.Listener&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener:10.0.1.162:20000&quot;</span><span class="token punctuation">,</span>
       <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;socket_address&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10.0.1.162&quot;</span><span class="token punctuation">,</span>
         <span class="token property">&quot;port_value&quot;</span><span class="token operator">:</span> <span class="token number">20000</span>
        <span class="token punctuation">}</span>
       <span class="token punctuation">}</span><span class="token punctuation">,</span>
       <span class="token property">&quot;filter_chains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
         <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
           <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;envoy.filters.network.http_connection_manager&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;typed_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;stat_prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;route_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
             <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener&quot;</span><span class="token punctuation">,</span>
             <span class="token property">&quot;virtual_hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
              <span class="token punctuation">{</span>
               <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener&quot;</span><span class="token punctuation">,</span>
               <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token string">&quot;*&quot;</span>
               <span class="token punctuation">]</span><span class="token punctuation">,</span>
               <span class="token property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                 <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
                 <span class="token punctuation">}</span><span class="token punctuation">,</span>
                 <span class="token property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                  <span class="token property">&quot;cluster&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local_app&quot;</span><span class="token punctuation">,</span>
                  <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60s&quot;</span>
  &lt;생략&gt;
    <span class="token punctuation">{</span>
     <span class="token property">&quot;route_config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;type.googleapis.com/envoy.config.route.v3.RouteConfiguration&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;virtual_hosts&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
       <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;public_listener&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;domains&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token string">&quot;*&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;routes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token punctuation">{</span>
          <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;route&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
           <span class="token property">&quot;cluster&quot;</span><span class="token operator">:</span> <span class="token string">&quot;local_app&quot;</span><span class="token punctuation">,</span>
           <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;60s&quot;</span>
  &lt;생략&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function h(_,x){const a=p("ExternalLinkIcon");return i(),l("div",null,[u,n("blockquote",null,[n("p",null,[s("Consul API : "),n("a",r,[s("https://www.consul.io/api-docs/config"),t(a)]),d,s(" Proxy Default : "),n("a",v,[s("https://www.consul.io/docs/connect/config-entries/proxy-defaults"),t(a)]),m,s(" Envoy Integration : "),n("a",k,[s("https://www.consul.io/docs/connect/proxies/envoy"),t(a)])])]),b,n("ul",null,[n("li",null,[s("Pod 재기동 없이 dump 확인 "),n("ul",null,[q,n("li",null,[n("a",g,[s("type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager"),t(a)]),s(' route timeout : "60s"')]),n("li",null,[n("a",y,[s("type.googleapis.com/envoy.config.route.v3.RouteConfiguration"),t(a)]),s(' route timeout : "60s"')])])])]),f])}const T=o(c,[["render",h],["__file","envoy_timeout.html.vue"]]),P=JSON.parse('{"path":"/04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/envoy_timeout.html","title":"Envoy Timeout","lang":"ko-KR","frontmatter":{"description":"Consul Service Mesh on Kubernetes","tag":["Consul","ServiceMesh","K8s","Kubernetes","timeout"],"head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/envoy_timeout.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Envoy Timeout"}],["meta",{"property":"og:description","content":"Consul Service Mesh on Kubernetes"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-18T13:12:54.000Z"}],["meta",{"property":"article:tag","content":"Consul"}],["meta",{"property":"article:tag","content":"ServiceMesh"}],["meta",{"property":"article:tag","content":"K8s"}],["meta",{"property":"article:tag","content":"Kubernetes"}],["meta",{"property":"article:tag","content":"timeout"}],["meta",{"property":"article:modified_time","content":"2023-09-18T13:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Envoy Timeout\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-18T13:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"단계 1. Deployment Sample","slug":"단계-1-deployment-sample","link":"#단계-1-deployment-sample","children":[]},{"level":2,"title":"단계 2. config_dump 생성","slug":"단계-2-config-dump-생성","link":"#단계-2-config-dump-생성","children":[]},{"level":2,"title":"단계 3. ProxyDefaults 설정","slug":"단계-3-proxydefaults-설정","link":"#단계-3-proxydefaults-설정","children":[{"level":3,"title":"단계 4. Consul API 에서 proxy-default 값 변경 확인","slug":"단계-4-consul-api-에서-proxy-default-값-변경-확인","link":"#단계-4-consul-api-에서-proxy-default-값-변경-확인","children":[]}]},{"level":2,"title":"단계 5. config_dump 재생성","slug":"단계-5-config-dump-재생성","link":"#단계-5-config-dump-재생성","children":[]}],"git":{"createdTime":1648260872000,"updatedTime":1695042774000,"contributors":[{"name":"Administrator","email":"admin@example.com","commits":1},{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":6.42,"words":385},"filePathRelative":"04-HashiCorp/04-Consul/06-on_Kubernetes/configuration/envoy_timeout.md","localizedDate":"2022년 3월 26일","excerpt":"\\n<blockquote>\\n<p>Consul API : <a href=\\"https://www.consul.io/api-docs/config\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.consul.io/api-docs/config</a><br>\\nProxy Default : <a href=\\"https://www.consul.io/docs/connect/config-entries/proxy-defaults\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.consul.io/docs/connect/config-entries/proxy-defaults</a><br>\\nEnvoy Integration : <a href=\\"https://www.consul.io/docs/connect/proxies/envoy\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://www.consul.io/docs/connect/proxies/envoy</a></p>\\n</blockquote>"}');export{T as comp,P as data};
