import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as n,c as l,b as r,h as e}from"./app-BWMI_1Y2.js";const s={},o=e('<h1 id="vault-1-12-라이선스" tabindex="-1"><a class="header-anchor" href="#vault-1-12-라이선스"><span>Vault +1.12 라이선스</span></a></h1><div class="hint-container tip"><p class="hint-container-title">관련 URL</p><p><a href="https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades</a></p></div><h2 id="license-기한-영향도" tabindex="-1"><a class="header-anchor" href="#license-기한-영향도"><span>License 기한 영향도</span></a></h2><ul><li>expiration : 엔터프라이즈 사용 기간의 만료</li><li>termination : 라이선스 사용 종료</li><li>expiration ~ termination 기간을 유예기간이라 하며, 이 때 Vault는 잠김(Seal)</li><li>라이선스 적용 가이드 <ul><li><a href="https://www.hashicorp.com/products/vault/trial" target="_blank" rel="noopener noreferrer">https://www.hashicorp.com/products/vault/trial</a></li><li>평가 라이선스는 유예기간이 1일</li><li>평가 요청(한국): <a href="mailto:korea@hasihcorp.com" target="_blank" rel="noopener noreferrer">korea@hasihcorp.com</a></li></ul></li></ul><h2 id="라이선스-exprire-기간-만료" tabindex="-1"><a class="header-anchor" href="#라이선스-exprire-기간-만료"><span>라이선스 exprire(기간 만료)</span></a></h2>',5),p=e(`<ul><li><p>License</p><ul><li>Expiration : 2022-6-19</li><li>Termination : 2032-6-18</li></ul></li><li><p>측정 시점 : 2022-12-9</p></li><li><p>Case 1 : Vault 바이너리가 릴리즈된 시점이 expiration 기간보다 이전인 경우</p><ul><li><p>실행 가능</p></li><li><p>사용은 불가</p><div class="language-log" data-highlighter="prismjs" data-ext="log" data-title="log"><pre class="language-log"><code><span class="line"><span class="token date number">2022-12-09T</span><span class="token time number">14:39:09.474+0900</span> <span class="token punctuation">[</span><span class="token level error important">ERROR</span><span class="token punctuation">]</span> <span class="token property">core.licensing:</span> <span class="token property">core:</span> <span class="token property">licensing error:</span> expiration_time<span class="token operator">=</span><span class="token string">&quot;2022-06-19 00:00:00 +0000 UTC&quot;</span> time_left<span class="token operator">=</span><span class="token operator">-</span>4157h39m9s</span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>Case 2 : Vault 바이너리가 릴리즈된 시점이 expiration 기간보다 이후인 경우</p><ul><li><p>실행 불가</p><div class="language-log" data-highlighter="prismjs" data-ext="log" data-title="log"><pre class="language-log"><code><span class="line"><span class="token property">Error initializing core:</span> <span class="token property">licensing could not be initialized:</span> <span class="token property">license validation failed:</span> <span class="token number">1</span> error occurred<span class="token operator">:</span></span>
<span class="line">	<span class="token operator">*</span> license expiration date is before version build date</span>
<span class="line"></span></code></pre></div></li></ul></li><li><p>Case 3 : 평가 라이선스의 Termination 시점 이후</p><ul><li>실행 불가</li></ul></li><li><p>Case 3 : 일반 라이선스의 Termination 시점 이후</p><ul><li>바이너리 릴리즈 기준으로 expiration 기간과 비교하여 Case1, 2와 같이 동작</li></ul></li></ul><h2 id="라이선스-갱신" tabindex="-1"><a class="header-anchor" href="#라이선스-갱신"><span>라이선스 갱신</span></a></h2><p>expiration되었지만 실행은 가능한 이유</p><ul><li>운영중인 경우 프로세스 다운은 발생하지 않음</li><li><code>/sys/config/reload/license</code> 로 변경된 환경변수 또는 파일을 다시 읽음 <ul><li>내용 : <a href="https://developer.hashicorp.com/vault/docs/enterprise/license/autoloading" target="_blank" rel="noopener noreferrer">https://developer.hashicorp.com/vault/docs/enterprise/license/autoloading</a></li><li>구성 파일에서 <code>license_path</code>로 지정된 파일 경로 입력</li><li>환경 변수 <code>VAULT_LICENSE</code>에 라이선스 내용 입력</li><li>환경 변수 <code>VAULT_LICENSE_PATH</code>에 라이선스 파일 경로 입력</li></ul></li></ul>`,4);function c(h,d){const a=i("Mermaid");return n(),l("div",null,[o,r(a,{id:"mermaid-53",code:"eJxljzFvAjEMhWf4FW9hI1ISdSi3ldJOZauQGK07A5G4HMoZBP8e4wMhgeUhsv2+97KlLDKGliTZM/5Szbln8PmQCje2mUwgu9RDm1B3bct5kDQk/NuVlgRYa7nl0i0Wtuq5ltTlB89mPzcm2diqojBF9DE4P3Ne3yH6wfGfS5vy87SijXABBWCKz/vRw2JFx/2Q55s0eYDDXMXlgjlvusKvvhVIhSe+ewe1N+5MuaORMeKT8WXOb9FRlyRGiM5r337y0YyvXZVdfA=="}),p])}const g=t(s,[["render",c],["__file","vault-entierprise-license.html.vue"]]),f=JSON.parse('{"path":"/04-HashiCorp/06-Vault/06-Config/vault-entierprise-license.html","title":"Vault +1.12 라이선스","lang":"ko-KR","frontmatter":{"tag":["Vault","Enterprise","License"],"description":"Vault +1.12 라이선스 관련 URL https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades License 기한 영향도 expiration : 엔터...","head":[["meta",{"property":"og:url","content":"https://docmoa.github.io/04-HashiCorp/06-Vault/06-Config/vault-entierprise-license.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Vault +1.12 라이선스"}],["meta",{"property":"og:description","content":"Vault +1.12 라이선스 관련 URL https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades License 기한 영향도 expiration : 엔터..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2023-09-26T23:02:12.000Z"}],["meta",{"property":"article:tag","content":"Vault"}],["meta",{"property":"article:tag","content":"Enterprise"}],["meta",{"property":"article:tag","content":"License"}],["meta",{"property":"article:modified_time","content":"2023-09-26T23:02:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vault +1.12 라이선스\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-26T23:02:12.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"License 기한 영향도","slug":"license-기한-영향도","link":"#license-기한-영향도","children":[]},{"level":2,"title":"라이선스 exprire(기간 만료)","slug":"라이선스-exprire-기간-만료","link":"#라이선스-exprire-기간-만료","children":[]},{"level":2,"title":"라이선스 갱신","slug":"라이선스-갱신","link":"#라이선스-갱신","children":[]}],"git":{"createdTime":1695769332000,"updatedTime":1695769332000,"contributors":[{"name":"Great-Stone","email":"hahohh@gmail.com","commits":1}]},"readingTime":{"minutes":2.67,"words":160},"filePathRelative":"04-HashiCorp/06-Vault/06-Config/vault-entierprise-license.md","localizedDate":"2023년 9월 27일","excerpt":"\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">관련 URL</p>\\n<p><a href=\\"https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://developer.hashicorp.com/vault/docs/enterprise/license/faq#q-how-do-the-license-termination-changes-affect-upgrades</a></p>\\n</div>","autoDesc":true}');export{g as comp,f as data};