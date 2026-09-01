import{M as e,O as t,f as n,m as r,s as i,u as a}from"./runtime-core.esm-bundler-DwmdDY9i.js";import{t as o}from"./plugin-vue_export-helper-BDNMzG2s.js";var s=JSON.parse(`{"path":"/06-etc/book-memo/prompt-engineering/04-grounding-knowledge-integration.html","title":"Chapter 4. 그라운딩과 지식 통합","lang":"ko-KR","frontmatter":{"description":"랭체인, RAG, 에이전트로 신뢰성 있는 LLM 활용","tag":["book","llm","ai","prompt-engineering"],"head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Chapter 4. 그라운딩과 지식 통합\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-12-28T06:58:43.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docmoa.github.io/06-etc/book-memo/prompt-engineering/04-grounding-knowledge-integration.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Chapter 4. 그라운딩과 지식 통합"}],["meta",{"property":"og:description","content":"랭체인, RAG, 에이전트로 신뢰성 있는 LLM 활용"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"og:updated_time","content":"2025-12-28T06:58:43.000Z"}],["meta",{"property":"article:tag","content":"prompt-engineering"}],["meta",{"property":"article:tag","content":"ai"}],["meta",{"property":"article:tag","content":"llm"}],["meta",{"property":"article:tag","content":"book"}],["meta",{"property":"article:modified_time","content":"2025-12-28T06:58:43.000Z"}]]},"git":{"createdTime":1766905123000,"updatedTime":1766905123000,"contributors":[{"name":"Great-Stone","username":"Great-Stone","email":"hahohh@gmail.com","commits":1,"url":"https://github.com/Great-Stone"}]},"readingTime":{"minutes":32.23,"words":1934},"filePathRelative":"06-etc/book-memo/prompt-engineering/04-grounding-knowledge-integration.md","excerpt":"\\n<h2>4.1 그라운딩 개념과 필요성</h2>\\n<blockquote>\\n<p>&quot;특별한 주장은 특별한 증거를 요구한다.&quot; - 칼 세이건 (Carl Sagan)</p>\\n</blockquote>\\n<h3>그라운딩의 정의</h3>\\n<p><strong>그라운딩(Grounding)</strong>은 LLM이 생성하는 응답을 <strong>외부 정보 소스에 기반</strong>하여 근거를 제공하는 과정이다. 즉, LLM이 단순히 내재된 지식만으로 답변하는 것이 아니라, <strong>검증 가능한 외부 정보를 참조</strong>하여 응답을 생성하는 것이다.</p>"}`),c={name:`04-grounding-knowledge-integration.md`};function l(o,s,c,l,u,d){let f=e(`Mermaid`);return t(),a(`div`,null,[s[0]||=n(`<h1 id="chapter-4-그라운딩과-지식-통합" tabindex="-1"><a class="header-anchor" href="#chapter-4-그라운딩과-지식-통합"><span>Chapter 4. 그라운딩과 지식 통합</span></a></h1><h2 id="_4-1-그라운딩-개념과-필요성" tabindex="-1"><a class="header-anchor" href="#_4-1-그라운딩-개념과-필요성"><span>4.1 그라운딩 개념과 필요성</span></a></h2><blockquote><p>&quot;특별한 주장은 특별한 증거를 요구한다.&quot; - 칼 세이건 (Carl Sagan)</p></blockquote><h3 id="그라운딩의-정의" tabindex="-1"><a class="header-anchor" href="#그라운딩의-정의"><span>그라운딩의 정의</span></a></h3><p><strong>그라운딩(Grounding)</strong>은 LLM이 생성하는 응답을 <strong>외부 정보 소스에 기반</strong>하여 근거를 제공하는 과정이다. 즉, LLM이 단순히 내재된 지식만으로 답변하는 것이 아니라, <strong>검증 가능한 외부 정보를 참조</strong>하여 응답을 생성하는 것이다.</p><p><strong>그라운딩의 핵심 개념:</strong></p><ul><li><strong>외부 정보 활용</strong>: LLM의 내재된 지식 외에 외부 정보 소스를 활용</li><li><strong>증거 기반 응답</strong>: 응답의 근거가 되는 정보를 명시</li><li><strong>검증 가능성</strong>: 제공된 정보의 출처를 추적하고 검증 가능</li><li><strong>정확성 향상</strong>: 최신이고 정확한 정보를 바탕으로 응답 생성</li></ul><p><strong>그라운딩의 목적:</strong></p><ul><li>할루시네이션 감소</li><li>정확성 향상</li><li>최신 정보 제공</li><li>투명성과 신뢰성 확보</li></ul><h3 id="그라운딩을-위한-외부-정보-소스" tabindex="-1"><a class="header-anchor" href="#그라운딩을-위한-외부-정보-소스"><span>그라운딩을 위한 외부 정보 소스</span></a></h3><p>그라운딩을 위해서는 다양한 외부 정보 소스를 활용할 수 있다:</p><h4 id="_1-실시간-웹-검색-결과" tabindex="-1"><a class="header-anchor" href="#_1-실시간-웹-검색-결과"><span>1. 실시간 웹 검색 결과</span></a></h4><p><strong>특징:</strong></p><ul><li>최신 정보 제공</li><li>광범위한 정보 커버리지</li><li>실시간 업데이트</li></ul><p><strong>활용 사례:</strong></p><ul><li>뉴스 챗봇</li><li>최신 기술 동향 분석</li><li>실시간 시장 정보</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자 질문: &quot;오늘 주식 시장은 어떻게 움직였나요?&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 웹 검색 API 호출</span>
<span class="line">2. 최신 주식 시장 뉴스 검색</span>
<span class="line">3. 검색 결과를 LLM에 제공</span>
<span class="line">4. LLM이 검색 결과를 바탕으로 응답 생성</span>
<span class="line"></span></code></pre></div><h4 id="_2-기업-내부-데이터베이스" tabindex="-1"><a class="header-anchor" href="#_2-기업-내부-데이터베이스"><span>2. 기업 내부 데이터베이스</span></a></h4><p><strong>특징:</strong></p><ul><li>기업 특화 정보</li><li>민감한 정보 포함 가능</li><li>구조화된 데이터</li></ul><p><strong>활용 사례:</strong></p><ul><li>기업 내부 Q&amp;A 시스템</li><li>고객 지원 시스템</li><li>문서 검색 시스템</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자 질문: &quot;우리 회사의 작년 매출은 얼마인가요?&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 내부 데이터베이스 쿼리</span>
<span class="line">2. 재무 데이터 검색</span>
<span class="line">3. 검색 결과를 LLM에 제공</span>
<span class="line">4. LLM이 데이터를 바탕으로 응답 생성</span>
<span class="line"></span></code></pre></div><h4 id="_3-개인-문서" tabindex="-1"><a class="header-anchor" href="#_3-개인-문서"><span>3. 개인 문서</span></a></h4><p><strong>특징:</strong></p><ul><li>개인화된 정보</li><li>다양한 형식 (PDF, Word, 이메일 등)</li><li>개인 프라이버시 고려 필요</li></ul><p><strong>활용 사례:</strong></p><ul><li>개인 비서 시스템</li><li>문서 요약 시스템</li><li>개인 지식 관리 시스템</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자 질문: &quot;내가 저장한 여행 계획을 보여줘&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 개인 문서 저장소 검색</span>
<span class="line">2. 여행 관련 문서 검색</span>
<span class="line">3. 검색 결과를 LLM에 제공</span>
<span class="line">4. LLM이 문서를 바탕으로 여행 계획 요약</span>
<span class="line"></span></code></pre></div><h4 id="_4-구조화된-데이터" tabindex="-1"><a class="header-anchor" href="#_4-구조화된-데이터"><span>4. 구조화된 데이터</span></a></h4><p><strong>특징:</strong></p><ul><li>명확한 스키마</li><li>빠른 검색 가능</li><li>정확한 데이터</li></ul><p><strong>활용 사례:</strong></p><ul><li>제품 정보 시스템</li><li>재고 관리 시스템</li><li>고객 정보 시스템</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자 질문: &quot;제품 A의 가격은 얼마인가요?&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 제품 데이터베이스 쿼리</span>
<span class="line">2. 제품 A 정보 검색</span>
<span class="line">3. 검색 결과를 LLM에 제공</span>
<span class="line">4. LLM이 데이터를 바탕으로 응답 생성</span>
<span class="line"></span></code></pre></div><h3 id="그라운딩의-핵심" tabindex="-1"><a class="header-anchor" href="#그라운딩의-핵심"><span>그라운딩의 핵심</span></a></h3><p>그라운딩의 핵심은 단순히 외부 정보를 LLM에게 제공하는 것에 그치지 않는다. <strong>LLM이 제공된 외부 정보인 문맥을 내부 지식보다 우선하여 사용하도록</strong>, 그리고 <strong>주어진 문맥에 없는 내용은 함부로 생성하지 않도록 유도하는 프롬프트 설계와 아키텍처 구축</strong>에 있다.</p><p><strong>그라운딩의 핵심 원칙:</strong></p><ol><li><p><strong>문맥 우선 원칙</strong></p><ul><li>제공된 외부 정보를 내부 지식보다 우선</li><li>외부 정보와 내부 지식이 충돌하면 외부 정보 우선</li></ul></li><li><p><strong>문맥 제한 원칙</strong></p><ul><li>주어진 문맥에 없는 내용은 생성하지 않음</li><li>문맥에 기반하지 않은 추측 금지</li></ul></li><li><p><strong>명시적 지시</strong></p><ul><li>프롬프트에서 명확하게 지시</li><li>&quot;다음 문맥만을 사용하여 답변하세요&quot;</li></ul></li><li><p><strong>아키텍처 지원</strong></p><ul><li>시스템 아키텍처가 문맥 우선을 지원</li><li>문맥 검증 메커니즘 포함</li></ul></li></ol><p><strong>프롬프트 설계 예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">당신은 다음 문맥 정보만을 사용하여 질문에 답변해야 합니다.</span>
<span class="line"></span>
<span class="line">[문맥 정보]</span>
<span class="line">{retrieved_context}</span>
<span class="line"></span>
<span class="line">[규칙]</span>
<span class="line">1. 위 문맥 정보에 있는 내용만 사용하여 답변하세요.</span>
<span class="line">2. 문맥에 없는 정보는 생성하지 마세요.</span>
<span class="line">3. 문맥 정보가 부족한 경우 &quot;문맥 정보가 부족합니다&quot;라고 답변하세요.</span>
<span class="line">4. 문맥 정보를 직접 인용할 때는 출처를 명시하세요.</span>
<span class="line"></span>
<span class="line">[질문]</span>
<span class="line">{user_question}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="그라운딩의-필요성" tabindex="-1"><a class="header-anchor" href="#그라운딩의-필요성"><span>그라운딩의 필요성</span></a></h3><p>그라운딩이 없는 경우와 적용 시를 비교하여 그라운딩의 필요성을 설명한다.</p><h4 id="시나리오-1-최신-정보가-중요한-뉴스-챗봇" tabindex="-1"><a class="header-anchor" href="#시나리오-1-최신-정보가-중요한-뉴스-챗봇"><span>시나리오 1: 최신 정보가 중요한 뉴스 챗봇</span></a></h4><p><strong>그라운딩이 없는 경우:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자: &quot;오늘 주요 뉴스는 무엇인가요?&quot;</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 없음):</span>
<span class="line">&quot;오늘의 주요 뉴스는 AI 기술 발전, 기후 변화 대응, </span>
<span class="line">경제 정책 등이 있습니다. 구체적인 내용은...&quot;</span>
<span class="line">→ 학습 데이터 기반 추측, 부정확하고 최신 정보 아님</span>
<span class="line"></span></code></pre></div><p><strong>문제점:</strong></p><ul><li>최신 정보에 접근 불가</li><li>학습 데이터의 오래된 정보 사용</li><li>실제 오늘의 뉴스를 알 수 없음</li><li>사용자 신뢰도 하락</li></ul><p><strong>그라운딩 적용 시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자: &quot;오늘 주요 뉴스는 무엇인가요?&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 웹 검색 API로 오늘의 뉴스 검색</span>
<span class="line">2. 검색 결과: &quot;2024년 1월 15일 주요 뉴스...&quot;</span>
<span class="line">3. 검색 결과를 LLM에 제공</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 적용):</span>
<span class="line">&quot;오늘(2024년 1월 15일)의 주요 뉴스는 다음과 같습니다:</span>
<span class="line">1. [검색 결과 기반 정확한 뉴스]</span>
<span class="line">2. [검색 결과 기반 정확한 뉴스]</span>
<span class="line">3. [검색 결과 기반 정확한 뉴스]</span>
<span class="line">출처: [뉴스 사이트 링크]&quot;</span>
<span class="line">→ 실시간 정보 기반, 정확하고 최신 정보 제공</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>개선 효과:</strong></p><ul><li>실시간 최신 정보 제공</li><li>정확한 뉴스 내용</li><li>출처 명시로 신뢰성 향상</li><li>사용자 만족도 증가</li></ul><h4 id="시나리오-2-정확성이-생명인-기업-내부-q-a-시스템" tabindex="-1"><a class="header-anchor" href="#시나리오-2-정확성이-생명인-기업-내부-q-a-시스템"><span>시나리오 2: 정확성이 생명인 기업 내부 Q&amp;A 시스템</span></a></h4><p><strong>그라운딩이 없는 경우:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자: &quot;우리 회사의 작년 매출은 얼마인가요?&quot;</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 없음):</span>
<span class="line">&quot;일반적으로 기업의 매출은 수억에서 수조원까지 다양합니다.</span>
<span class="line">정확한 수치는 회사의 재무제표를 확인해야 합니다.&quot;</span>
<span class="line">→ 일반적인 답변, 실제 데이터 없음</span>
<span class="line"></span></code></pre></div><p><strong>문제점:</strong></p><ul><li>실제 회사 데이터에 접근 불가</li><li>일반적인 답변만 제공</li><li>정확한 정보 부재</li><li>업무 효율성 저하</li></ul><p><strong>그라운딩 적용 시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자: &quot;우리 회사의 작년 매출은 얼마인가요?&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 내부 데이터베이스 쿼리</span>
<span class="line">2. 재무 데이터 검색</span>
<span class="line">3. 검색 결과: &quot;2023년 매출: 1,250억원&quot;</span>
<span class="line">4. 검색 결과를 LLM에 제공</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 적용):</span>
<span class="line">&quot;우리 회사의 2023년 매출은 1,250억원입니다.</span>
<span class="line">이는 전년 대비 15% 증가한 수치입니다.</span>
<span class="line">출처: 내부 재무 데이터베이스 (2024-01-15 조회)&quot;</span>
<span class="line">→ 실제 데이터 기반, 정확하고 구체적인 정보 제공</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>개선 효과:</strong></p><ul><li>실제 회사 데이터 기반 정확한 답변</li><li>구체적인 수치 제공</li><li>출처 명시로 신뢰성 확보</li><li>업무 효율성 향상</li></ul><h4 id="시나리오-3-개인화된-경험을-제공하는-여행-플래너" tabindex="-1"><a class="header-anchor" href="#시나리오-3-개인화된-경험을-제공하는-여행-플래너"><span>시나리오 3: 개인화된 경험을 제공하는 여행 플래너</span></a></h4><p><strong>그라운딩이 없는 경우:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자: &quot;내가 저장한 파리 여행 계획을 보여줘&quot;</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 없음):</span>
<span class="line">&quot;파리는 프랑스의 수도로, 에펠탑, 루브르 박물관 등이 유명합니다.</span>
<span class="line">일반적인 여행 계획은 다음과 같습니다...&quot;</span>
<span class="line">→ 일반적인 정보, 개인 계획 없음</span>
<span class="line"></span></code></pre></div><p><strong>문제점:</strong></p><ul><li>개인 문서에 접근 불가</li><li>일반적인 정보만 제공</li><li>개인화된 경험 부재</li><li>사용자 요구 미충족</li></ul><p><strong>그라운딩 적용 시:</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:20;"><pre><code class="language-text"><span class="line">사용자: &quot;내가 저장한 파리 여행 계획을 보여줘&quot;</span>
<span class="line"></span>
<span class="line">그라운딩 과정:</span>
<span class="line">1. 개인 문서 저장소 검색</span>
<span class="line">2. &quot;파리 여행 계획.docx&quot; 검색</span>
<span class="line">3. 문서 내용 추출</span>
<span class="line">4. 검색 결과를 LLM에 제공</span>
<span class="line"></span>
<span class="line">LLM 응답 (그라운딩 적용):</span>
<span class="line">&quot;당신의 파리 여행 계획은 다음과 같습니다:</span>
<span class="line"></span>
<span class="line">[1일차 - 2024년 2월 1일]</span>
<span class="line">- 오전: 에펠탑 방문</span>
<span class="line">- 오후: 세느강 크루즈</span>
<span class="line">- 저녁: 레스토랑 예약 (Le Comptoir du Relais)</span>
<span class="line"></span>
<span class="line">[2일차 - 2024년 2월 2일]</span>
<span class="line">- 오전: 루브르 박물관</span>
<span class="line">- 오후: 샹젤리제 거리 쇼핑</span>
<span class="line">...</span>
<span class="line"></span>
<span class="line">출처: 파리 여행 계획.docx (2024-01-10 작성)&quot;</span>
<span class="line">→ 개인 문서 기반, 개인화된 정확한 정보 제공</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>개선 효과:</strong></p><ul><li>개인 문서 기반 맞춤형 답변</li><li>실제 저장된 계획 정보 제공</li><li>개인화된 경험 제공</li><li>사용자 만족도 향상</li></ul><h2 id="_4-2-검색-증강-생성" tabindex="-1"><a class="header-anchor" href="#_4-2-검색-증강-생성"><span>4.2 검색 증강 생성</span></a></h2><h3 id="rag의-필요성" tabindex="-1"><a class="header-anchor" href="#rag의-필요성"><span>RAG의 필요성</span></a></h3><p><strong>검색 증강 생성(Retrieval-Augmented Generation, RAG)</strong>은 LLM의 한계를 보완하기 위해 제안된 기법이다.</p><p><strong>LLM의 한계:</strong></p><ul><li><strong>정적 지식</strong>: 학습 시점의 정보만 알고 있음</li><li><strong>도메인 지식 부족</strong>: 특정 도메인의 깊은 지식 부족</li><li><code>할루시네이션</code>: 사실이 아닌 정보를 생성할 수 있음</li><li><strong>최신 정보 부족</strong>: 최신 정보에 접근 불가</li><li><strong>개인화 부족</strong>: 개인별 맞춤 정보 제공 어려움</li></ul><p><strong>RAG가 해결하는 문제:</strong></p><ul><li><strong>동적 지식 접근</strong>: 외부 정보 소스에서 실시간으로 정보 검색</li><li><strong>도메인 특화</strong>: 특정 도메인의 문서를 활용</li><li><strong>할루시네이션 감소</strong>: 검색된 정보를 바탕으로 응답 생성</li><li><strong>최신 정보 제공</strong>: 최신 문서를 검색하여 활용</li><li><strong>개인화</strong>: 개인 문서를 검색하여 맞춤형 응답</li></ul><p><strong>RAG의 핵심 가치:</strong></p><ul><li><strong>재학습 불필요</strong>: 모델을 재학습하지 않고도 새로운 정보 활용</li><li><strong>비용 효율성</strong>: 전체 모델 재학습보다 저렴</li><li><strong>유연성</strong>: 다양한 정보 소스 활용 가능</li><li><strong>투명성</strong>: 응답의 출처를 추적 가능</li></ul><h3 id="rag-아키텍처" tabindex="-1"><a class="header-anchor" href="#rag-아키텍처"><span>RAG 아키텍처</span></a></h3><p>RAG는 크게 <strong>3단계</strong>로 구성된다:</p><h4 id="_1단계-검색-retrieval" tabindex="-1"><a class="header-anchor" href="#_1단계-검색-retrieval"><span>1단계: 검색 (Retrieval)</span></a></h4><p><strong>목적:</strong><br> 사용자 질문과 관련된 문서를 외부 정보 소스에서 검색한다.</p><p><strong>검색 단계의 구성 요소:</strong></p><ol><li><p><strong>질의 변환 (Query Transformation)</strong></p><ul><li>사용자 질문을 검색에 적합한 형태로 변환</li><li>키워드 추출, 동의어 확장, 질의 확장</li></ul></li><li><p><strong>질의 임베딩 (Query Embedding)</strong></p><ul><li>질문을 벡터로 변환</li><li>의미적 유사도 검색을 위한 임베딩 생성</li></ul></li><li><p><strong>벡터 유사도 검색 (Vector Similarity Search)</strong></p><ul><li>질의 임베딩과 문서 임베딩 간 유사도 계산</li><li>코사인 유사도, 내적 등 사용</li></ul></li><li><p><strong>상위 K개 문서 검색 (Top-K Retrieval)</strong></p><ul><li>유사도가 높은 상위 K개 문서 선택</li><li>일반적으로 K=3~10</li></ul></li></ol><p><strong>검색 단계 프로세스:</strong></p>`,90),r(f,{code:`eJxLy8kvT85ILCpR8AniUgACx+g3TWvezFr5Zt4EhTfLO16v2RGroKtrp+AUDeS9mTtD4fXmhrczZ8SCFTuBpZxhUm/mtbzetOD1lJUQWWewrEv0600L37ZsUHgzZwHQ6Nf9LQqvNjW8ae6EKHIBK3KNftPc+GZOi4L3qw1zFICWvmmZo/CmZcHb5rkQZa5gZW7Rr7Y0vF6wAqoilgsAcnFX2A==`}),s[1]||=n(`<p><strong>예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">사용자 질문: &quot;파리 여행 추천 장소는?&quot;</span>
<span class="line"></span>
<span class="line">[1단계: 질의 변환]</span>
<span class="line">- 원본: &quot;파리 여행 추천 장소는?&quot;</span>
<span class="line">- 변환: &quot;파리&quot;, &quot;여행&quot;, &quot;추천&quot;, &quot;장소&quot;, &quot;명소&quot;</span>
<span class="line"></span>
<span class="line">[2단계: 질의 임베딩]</span>
<span class="line">- 질문 → [0.23, -0.45, 0.67, ...] (벡터)</span>
<span class="line"></span>
<span class="line">[3단계: 벡터 유사도 검색]</span>
<span class="line">- 문서 1: 유사도 0.92</span>
<span class="line">- 문서 2: 유사도 0.85</span>
<span class="line">- 문서 3: 유사도 0.78</span>
<span class="line">- ...</span>
<span class="line"></span>
<span class="line">[4단계: 상위 K개 선택]</span>
<span class="line">- K=3 선택</span>
<span class="line">- 문서 1, 2, 3 선택</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2단계-증강-augmentation" tabindex="-1"><a class="header-anchor" href="#_2단계-증강-augmentation"><span>2단계: 증강 (Augmentation)</span></a></h4><p><strong>목적:</strong><br> 검색된 문서들을 가장 효과적인 방식으로 조합하여 LLM이 오직 이 재료만을 보고 요리하도록 만드는 완벽한 레시피, 즉 <strong>프롬프트를 구성</strong>하는 것이다.</p><p><strong>증강 단계의 구성 요소:</strong></p><ol><li><p><strong>문서 전처리</strong></p><ul><li>문서 정제 및 포맷팅</li><li>불필요한 정보 제거</li><li>관련 정보 강조</li></ul></li><li><p><strong>문서 조합</strong></p><ul><li>여러 문서를 논리적으로 조합</li><li>중복 제거</li><li>우선순위 정렬</li></ul></li><li><p><strong>프롬프트 구성</strong></p><ul><li>검색된 문서를 프롬프트에 포함</li><li>명확한 지시사항 추가</li><li>문맥 우선 원칙 강조</li></ul></li></ol><p><strong>증강 단계 프로세스:</strong></p>`,7),r(f,{code:`eJxLy8kvT85ILCpR8AniUgACx+hXmxreNHe+njBH4fWaHW9a5ryevCRWQVfXTsEpGiKg8GZBy5tNM14vWxML1uIElnWGyy7c8HbqSoiUM1jKJfrtlJbXC9cAybddOxRebV3zpmUjRIELWIFr9Jtlc19tmAqyFFlpLBcARMpMdw==`}),s[2]||=n(`<p><strong>프롬프트 구성 예시:</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:20;"><pre><code class="language-text"><span class="line">당신은 다음 문서 정보만을 사용하여 질문에 답변해야 합니다.</span>
<span class="line"></span>
<span class="line">[문서 1]</span>
<span class="line">파리는 프랑스의 수도로, 에펠탑, 루브르 박물관, 노트르담 대성당 등이 유명합니다.</span>
<span class="line">에펠탑은 1889년에 건축되었으며, 파리의 상징적인 랜드마크입니다.</span>
<span class="line"></span>
<span class="line">[문서 2]</span>
<span class="line">루브르 박물관은 세계에서 가장 큰 미술관 중 하나로, </span>
<span class="line">모나리자를 비롯한 수많은 예술 작품을 소장하고 있습니다.</span>
<span class="line"></span>
<span class="line">[문서 3]</span>
<span class="line">세느강은 파리를 가로지르는 강으로, </span>
<span class="line">강변을 따라 산책하거나 크루즈를 즐길 수 있습니다.</span>
<span class="line"></span>
<span class="line">[규칙]</span>
<span class="line">1. 위 문서에 있는 내용만 사용하여 답변하세요.</span>
<span class="line">2. 문서에 없는 정보는 생성하지 마세요.</span>
<span class="line">3. 문서를 인용할 때는 [문서 번호]를 명시하세요.</span>
<span class="line"></span>
<span class="line">[질문]</span>
<span class="line">파리 여행 추천 장소는?</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="_3단계-생성-generation" tabindex="-1"><a class="header-anchor" href="#_3단계-생성-generation"><span>3단계: 생성 (Generation)</span></a></h4><p><strong>목적:</strong><br> LLM이 단순히 질문을 듣고 자유롭게 답을 만들어내는 것이 아니라, <strong>앞서 검색을 통해 확보된 문맥을 바탕으로 응답을 만들어내는 것</strong>이다.</p><p><strong>생성 단계의 특징:</strong></p><ul><li><strong>문맥 기반 생성</strong>: 검색된 문서를 바탕으로 응답 생성</li><li><strong>제약된 생성</strong>: 문서에 없는 내용은 생성하지 않음</li><li><strong>출처 명시</strong>: 응답에 출처 포함</li></ul><p><strong>생성 단계 프로세스:</strong></p>`,7),r(f,{code:`eJxLy8kvT85ILCpR8AniUgACx+g3y+a+2jD19YQ5Cm+ntLxeuAZIvu3aEaugq2un4BTt4+Or8KZ57puWjbFg9U5gcefoN3Mnvu7eiiLlDJZyiX6zbc6bTTMU3vaveTt1BUTKBSzlGv1m65w3i1oVIJpjuQBD4T4w`}),s[3]||=i(`p`,null,[i(`strong`,null,`전체 RAG 아키텍처:`)],-1),r(f,{code:`eJxVzr9KA0EQBvA+TzEvkELtLASTy9+7dHbDFSKIhSCIYBu9FdQUKiRwyl24s4gGtrhcOMgz7c6+Q5bZ5CBbbDG/b3e+69u7x6uby/sHuPAaYM850rOknyXNP4H+XrXchNBsnkELj/TkX63FKahyTNFbyPEWYxttlNIY9HpsvmNHbSZvTzQXusz0dOnUY+2gLnMjCqAks3v1hzj4vcOhLlL0RIkAXxUJ2EYkEudd9h4e76vRIlXFzGGPsY/uAVAmqIz1Qjrtsw5qzQsz21UbMA3RTIXOpb3N+wZUJUmsXGDIAR9P6rVRWqPPGGAQjA7mAc9HSFVCvy9A6ZeeVGFjC0dEp0k=`}),s[4]||=n(`<h3 id="임베딩과-벡터-저장소" tabindex="-1"><a class="header-anchor" href="#임베딩과-벡터-저장소"><span>임베딩과 벡터 저장소</span></a></h3><h4 id="임베딩-embedding" tabindex="-1"><a class="header-anchor" href="#임베딩-embedding"><span>임베딩 (Embedding)</span></a></h4><p><strong>임베딩의 정의:</strong><br> 임베딩은 <strong>텍스트를 수백에서 수천 차원의 고차원 벡터 공간에 있는 하나의 점으로 매핑하는 과정</strong>이다.</p><p><strong>임베딩의 목적:</strong></p><p>임베딩은 텍스트의 의미를 수치로 표현하여 컴퓨터가 이해할 수 있도록 변환하는 과정이다. 이를 통해 <strong>의미 표현</strong>이 가능해지며, 텍스트의 의미를 고차원 벡터 공간의 점으로 표현한다. 이렇게 변환된 벡터들은 <strong>벡터 간 거리로 의미적 유사도를 측정</strong>할 수 있게 되어, 의미가 비슷한 텍스트는 벡터 공간에서 가까이 위치하게 된다. 이러한 특성을 활용하여 <strong>검색 최적화</strong>가 가능하며, 키워드 매칭이 아닌 의미 기반 검색을 수행할 수 있다.</p><p><strong>임베딩의 특징:</strong></p><ul><li><strong>의미 보존</strong>: 의미가 비슷한 텍스트는 벡터 공간에서 가까이 위치</li><li><strong>고차원</strong>: 일반적으로 384, 768, 1536 차원 등</li><li><strong>고정 길이</strong>: 텍스트 길이와 무관하게 고정된 길이의 벡터</li></ul><p><strong>임베딩 예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">텍스트: &quot;파리 여행 추천 장소&quot;</span>
<span class="line"></span>
<span class="line">임베딩 (예시, 실제로는 더 많은 차원):</span>
<span class="line">[0.23, -0.45, 0.67, 0.12, -0.89, 0.34, ...]</span>
<span class="line">(768차원 벡터)</span>
<span class="line"></span>
<span class="line">의미가 비슷한 텍스트:</span>
<span class="line">&quot;파리 관광 명소&quot; → [0.25, -0.43, 0.65, 0.14, -0.87, 0.36, ...]</span>
<span class="line">→ 벡터 공간에서 가까이 위치 (유사도 높음)</span>
<span class="line"></span>
<span class="line">의미가 다른 텍스트:</span>
<span class="line">&quot;서울 날씨&quot; → [-0.12, 0.78, -0.45, 0.67, 0.23, -0.56, ...]</span>
<span class="line">→ 벡터 공간에서 멀리 위치 (유사도 낮음)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>임베딩 모델:</strong></p><ul><li><strong>OpenAI</strong>: text-embedding-ada-002, text-embedding-3-small, text-embedding-3-large</li><li><strong>Cohere</strong>: embed-english-v3.0</li><li><strong>Sentence-BERT</strong>: all-MiniLM-L6-v2</li><li><strong>Multilingual</strong>: multilingual-e5-large</li></ul><h4 id="벡터-저장소-vector-store" tabindex="-1"><a class="header-anchor" href="#벡터-저장소-vector-store"><span>벡터 저장소 (Vector Store)</span></a></h4><p><strong>벡터 저장소의 정의:</strong><br> 벡터 저장소는 <strong>임베딩을 통해 숫자로 변환된 수많은 문서 조각들을 체계적으로 저장하고, 특정 질문과 의미적으로 가장 유사한 문서를 빠르게 찾아주는 RAG 시스템의 핵심 인프라</strong>이다.</p><p><strong>벡터 저장소의 기능:</strong></p><p>벡터 저장소는 RAG 시스템의 핵심 인프라로서 여러 중요한 기능을 제공한다. 첫째, <strong>벡터 저장</strong> 기능으로 문서를 임베딩으로 변환한 후 효율적으로 저장한다. 둘째, <strong>유사도 검색</strong> 기능으로 사용자 질문을 임베딩으로 변환한 후, 저장된 문서 임베딩과의 유사도를 계산하여 가장 관련성 높은 문서를 빠르게 검색한다. 셋째, <strong>인덱싱</strong> 기능으로 수백만 개의 문서에서도 빠른 검색이 가능하도록 최적화된 인덱스 구조를 제공한다. 넷째, <strong>스케일링</strong> 기능으로 대량의 문서를 처리할 수 있도록 수평 확장이 가능한 아키텍처를 지원한다.</p><p><strong>벡터 저장소의 특징:</strong></p><ul><li><strong>고속 검색</strong>: 수백만 개의 문서에서도 빠른 검색</li><li><strong>의미 기반</strong>: 키워드가 아닌 의미 기반 검색</li><li><strong>확장성</strong>: 수평 확장 가능</li></ul><p><strong>주요 벡터 저장소:</strong></p><ul><li><strong>Pinecone</strong>: 관리형 벡터 데이터베이스</li><li><strong>Weaviate</strong>: 오픈소스 벡터 데이터베이스</li><li><strong>Chroma</strong>: 경량 벡터 데이터베이스</li><li><strong>Qdrant</strong>: 고성능 벡터 검색 엔진</li><li><strong>Milvus</strong>: 분산 벡터 데이터베이스</li><li><strong>FAISS</strong>: Facebook의 벡터 검색 라이브러리</li></ul><h3 id="일반-db와-벡터-저장소의-근본적인-차이" tabindex="-1"><a class="header-anchor" href="#일반-db와-벡터-저장소의-근본적인-차이"><span>일반 DB와 벡터 저장소의 근본적인 차이</span></a></h3><p>일반 데이터베이스와 벡터 저장소는 근본적으로 다른 목적과 구조를 가진다:</p><table><thead><tr><th>구분</th><th>일반 데이터베이스</th><th>벡터 저장소</th></tr></thead><tbody><tr><td><strong>데이터 형태</strong></td><td>구조화된 데이터 (테이블, 행, 열)</td><td>벡터 (고차원 숫자 배열)</td></tr><tr><td><strong>검색 방식</strong></td><td>정확한 매칭 (Exact Match)</td><td>유사도 검색 (Similarity Search)</td></tr><tr><td><strong>검색 기준</strong></td><td>키워드, 값 일치</td><td>의미적 유사도</td></tr><tr><td><strong>인덱스 구조</strong></td><td>B-tree, Hash Index</td><td>벡터 인덱스 (HNSW, IVF, LSH)</td></tr><tr><td><strong>쿼리 언어</strong></td><td>SQL</td><td>벡터 유사도 쿼리</td></tr><tr><td><strong>검색 속도</strong></td><td>수천~수만 건에서 빠름</td><td>수백만~수억 건에서도 빠름</td></tr><tr><td><strong>검색 정확도</strong></td><td>정확한 매칭만 가능</td><td>유사한 결과도 찾을 수 있음</td></tr><tr><td><strong>용도</strong></td><td>구조화된 데이터 관리</td><td>의미 기반 검색, 추천 시스템</td></tr><tr><td><strong>예시</strong></td><td>&quot;이름이 &#39;홍길동&#39;인 사람 찾기&quot;</td><td>&quot;&#39;파리 여행&#39;과 의미가 비슷한 문서 찾기&quot;</td></tr><tr><td><strong>확장성</strong></td><td>수직 확장 중심</td><td>수평 확장 용이</td></tr><tr><td><strong>엔진 종류</strong></td><td>SQLite, MySQL, PostgreSQL</td><td>Pinecone, Weaviate, Chroma, Qdrant, Milvus, FAISS</td></tr></tbody></table><p><strong>검색 방식 비교: 일반 데이터베이스</strong></p><div class="language-sql" data-highlighter="prismjs" data-ext="sql"><pre><code class="language-sql"><span class="line"><span class="token comment">-- 정확한 매칭만 가능</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> documents </span>
<span class="line"><span class="token keyword">WHERE</span> title <span class="token operator">=</span> <span class="token string">&#39;파리 여행&#39;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">-- &quot;파리 여행&quot;과 정확히 일치하는 것만 찾음</span></span>
<span class="line"></span></code></pre></div><p><strong>검색 방식 비교: 벡터 저장소</strong></p><div class="language-python" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 의미적으로 유사한 문서 검색</span></span>
<span class="line">query_vector <span class="token operator">=</span> embed<span class="token punctuation">(</span><span class="token string">&quot;파리 여행 추천&quot;</span><span class="token punctuation">)</span></span>
<span class="line">similar_docs <span class="token operator">=</span> vector_store<span class="token punctuation">.</span>search<span class="token punctuation">(</span></span>
<span class="line">    query_vector<span class="token punctuation">,</span> </span>
<span class="line">    top_k<span class="token operator">=</span><span class="token number">5</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment"># &quot;파리 관광&quot;, &quot;프랑스 여행&quot;, &quot;에펠탑 방문&quot; 등 </span></span>
<span class="line"><span class="token comment"># 의미가 비슷한 문서도 찾을 수 있음</span></span>
<span class="line"></span></code></pre></div><h3 id="데이터-처리-파이프라인" tabindex="-1"><a class="header-anchor" href="#데이터-처리-파이프라인"><span>데이터 처리 파이프라인</span></a></h3><p>RAG 시스템을 구축하기 위해서는 문서를 벡터 저장소에 저장하기 전에 <strong>데이터 처리 파이프라인</strong>을 거쳐야 한다. 이 파이프라인은 <strong>로딩, 분할, 저장</strong> 3단계로 구성된다.</p><h4 id="_1단계-로딩-loading" tabindex="-1"><a class="header-anchor" href="#_1단계-로딩-loading"><span>1단계: 로딩 (Loading)</span></a></h4><p><strong>목적:</strong><br> 다양한 형식의 문서를 시스템으로 불러온다.</p><p><strong>로딩이 필요한 이유:</strong></p><ul><li>문서는 다양한 형식으로 존재 (PDF, Word, HTML, 텍스트 등)</li><li>각 형식마다 다른 파싱 방법 필요</li><li>통일된 형식으로 변환 필요</li></ul><p><strong>로딩 단계의 요소:</strong></p><ol><li><p><strong>문서 소스 식별</strong></p><ul><li>파일 시스템</li><li>웹 페이지</li><li>데이터베이스</li><li>API</li></ul></li><li><p><strong>형식별 로더</strong></p><ul><li>PDF 로더</li><li>Word 로더</li><li>HTML 로더</li><li>텍스트 로더</li><li>마크다운 로더</li></ul></li><li><p><strong>메타데이터 추출</strong></p><ul><li>문서 제목</li><li>작성자</li><li>작성 날짜</li><li>출처</li></ul></li></ol><p><strong>예시:</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># PDF 문서 로딩</span></span>
<span class="line"><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>document_loaders <span class="token keyword">import</span> PyPDFLoader</span>
<span class="line"></span>
<span class="line">loader <span class="token operator">=</span> PyPDFLoader<span class="token punctuation">(</span><span class="token string">&quot;document.pdf&quot;</span><span class="token punctuation">)</span></span>
<span class="line">documents <span class="token operator">=</span> loader<span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 결과:</span></span>
<span class="line"><span class="token comment"># [</span></span>
<span class="line"><span class="token comment">#   Document(</span></span>
<span class="line"><span class="token comment">#     page_content=&quot;문서 내용...&quot;,</span></span>
<span class="line"><span class="token comment">#     metadata={&quot;source&quot;: &quot;document.pdf&quot;, &quot;page&quot;: 1}</span></span>
<span class="line"><span class="token comment">#   ),</span></span>
<span class="line"><span class="token comment">#   ...</span></span>
<span class="line"><span class="token comment"># ]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2단계-분할-chunking" tabindex="-1"><a class="header-anchor" href="#_2단계-분할-chunking"><span>2단계: 분할 (Chunking)</span></a></h4><p><strong>목적:</strong><br> 큰 문서를 작은 조각으로 나누어 벡터 저장소에 저장한다.</p><p><strong>분할이 필요한 이유:</strong></p><ul><li><strong>컨텍스트 윈도우 제한</strong>: LLM의 컨텍스트 윈도우는 제한적 (일반적으로 4K~128K 토큰)</li><li><strong>정확한 검색</strong>: 작은 조각으로 나누면 더 정확한 검색 가능</li><li><strong>효율성</strong>: 필요한 부분만 검색하여 효율성 향상</li></ul><p><strong>분할 단계의 요소:</strong></p><ol><li><p><strong>분할 전략</strong></p><ul><li><strong>고정 크기 분할</strong>: 일정한 크기로 분할 (예: 500자)</li><li><strong>문장 단위 분할</strong>: 문장 경계에서 분할</li><li><strong>의미 단위 분할</strong>: 단락, 섹션 단위로 분할</li><li><strong>계층적 분할</strong>: 문서 구조를 고려한 분할</li></ul></li><li><p><strong>오버랩 (Overlap)</strong></p><ul><li>분할된 조각 간 일부 중복</li><li>문맥 손실 방지</li><li>일반적으로 10-20% 오버랩</li></ul></li><li><p><strong>청크 크기</strong></p><ul><li>너무 작으면: 문맥 손실</li><li>너무 크면: 검색 정확도 저하</li><li>일반적으로 200-1000 토큰</li></ul></li></ol><p><strong>예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">원본 문서 (1000자):</span>
<span class="line">&quot;파리는 프랑스의 수도입니다. 에펠탑은 파리의 상징입니다. </span>
<span class="line">루브르 박물관은 세계에서 가장 큰 미술관입니다. </span>
<span class="line">세느강은 파리를 가로지르는 강입니다...&quot;</span>
<span class="line"></span>
<span class="line">[고정 크기 분할, 크기=300자, 오버랩=50자]</span>
<span class="line"></span>
<span class="line">청크 1 (0-300자):</span>
<span class="line">&quot;파리는 프랑스의 수도입니다. 에펠탑은 파리의 상징입니다. </span>
<span class="line">루브르 박물관은 세계에서 가장 큰 미술관입니다...&quot;</span>
<span class="line"></span>
<span class="line">청크 2 (250-550자, 50자 오버랩):</span>
<span class="line">&quot;...루브르 박물관은 세계에서 가장 큰 미술관입니다. </span>
<span class="line">세느강은 파리를 가로지르는 강입니다...&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>분할 전략 비교:</strong></p><table><thead><tr><th>전략</th><th>장점</th><th>단점</th><th>적합한 경우</th></tr></thead><tbody><tr><td><strong>고정 크기</strong></td><td>간단, 빠름</td><td>문맥 손실 가능</td><td>일반적인 문서</td></tr><tr><td><strong>문장 단위</strong></td><td>문맥 보존</td><td>크기 불균형</td><td>문장 중심 문서</td></tr><tr><td><strong>의미 단위</strong></td><td>문맥 최대 보존</td><td>복잡한 구현</td><td>구조화된 문서</td></tr><tr><td><strong>계층적</strong></td><td>문서 구조 반영</td><td>매우 복잡</td><td>복잡한 문서</td></tr></tbody></table><h4 id="_3단계-저장-storage" tabindex="-1"><a class="header-anchor" href="#_3단계-저장-storage"><span>3단계: 저장 (Storage)</span></a></h4><p><strong>목적:</strong><br> 분할된 문서 조각을 임베딩으로 변환하여 벡터 저장소에 저장한다.</p><p><strong>저장이 필요한 이유:</strong></p><ul><li><strong>검색 최적화</strong>: 벡터 형태로 저장해야 빠른 검색 가능</li><li><strong>지속성</strong>: 데이터를 영구적으로 보관</li><li><strong>인덱싱</strong>: 빠른 검색을 위한 인덱스 생성</li></ul><p><strong>저장 단계의 요소:</strong></p><ol><li><p><strong>임베딩 생성</strong></p><ul><li>각 문서 조각을 임베딩으로 변환</li><li>임베딩 모델 사용</li></ul></li><li><p><strong>벡터 저장소에 저장</strong></p><ul><li>임베딩과 원본 텍스트 저장</li><li>메타데이터 저장</li></ul></li><li><p><strong>인덱스 생성</strong></p><ul><li>빠른 검색을 위한 인덱스 생성</li><li>HNSW, IVF 등 인덱스 알고리즘 사용</li></ul></li></ol><p><strong>예시:</strong></p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token comment"># 문서 조각 임베딩 생성 및 저장</span></span>
<span class="line"><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>embeddings <span class="token keyword">import</span> OpenAIEmbeddings</span>
<span class="line"><span class="token keyword">from</span> langchain<span class="token punctuation">.</span>vectorstores <span class="token keyword">import</span> Pinecone</span>
<span class="line"></span>
<span class="line">embeddings <span class="token operator">=</span> OpenAIEmbeddings<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">vector_store <span class="token operator">=</span> Pinecone<span class="token punctuation">.</span>from_documents<span class="token punctuation">(</span></span>
<span class="line">    documents<span class="token operator">=</span>chunks<span class="token punctuation">,</span>  <span class="token comment"># 분할된 문서 조각들</span></span>
<span class="line">    embedding<span class="token operator">=</span>embeddings<span class="token punctuation">,</span></span>
<span class="line">    index_name<span class="token operator">=</span><span class="token string">&quot;documents&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 저장 결과:</span></span>
<span class="line"><span class="token comment"># - 각 청크가 임베딩으로 변환됨</span></span>
<span class="line"><span class="token comment"># - 벡터 저장소에 저장됨</span></span>
<span class="line"><span class="token comment"># - 인덱스가 생성됨</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>전체 데이터 처리 파이프라인:</strong></p>`,55),r(f,{code:`eJxVz89Kw0AQBvB7n2JeoAf15kGwTf979DbkIIJ4EAQRvEYyFLQt9NCCYhI2WEHBQ5pQieATZWbfwTJbhexxf998u3NxdX13fnl2cwunXgO25xjlZc5FCfxZCkU+NJtH0MI9nrxXBR0CpxEvPnzNthTbaJ+WMom5INXZwmlb1UM73kj8w/MIXM6pp9rB/f/iL7JL47Cj2EV3B2KIkw0IGRvuxrua6KH7JUiaVdk9SBgLrV2ip4k+Hvw9ICaQ5M1hX3GAkhDnZrtQbXSgOkTOU0vZblDG01rFUEMjlLjk2VoeV7WKkeoJVnkg4QPIKuBvAnkmfp36jV9OL6do`}),s[5]||=n(`<h3 id="rag-할루시네이션을-어떻게-제어하는가" tabindex="-1"><a class="header-anchor" href="#rag-할루시네이션을-어떻게-제어하는가"><span>RAG, 할루시네이션을 어떻게 제어하는가?</span></a></h3><p>RAG는 여러 메커니즘을 통해 할루시네이션을 제어한다:</p><h4 id="_1-지식의-장제적-그라운딩" tabindex="-1"><a class="header-anchor" href="#_1-지식의-장제적-그라운딩"><span>1. 지식의 장제적 그라운딩</span></a></h4><p><strong>개념:</strong><br> RAG는 LLM이 <strong>검색된 문서에만 기반하여 응답을 생성</strong>하도록 강제한다. 즉, 내재된 지식보다 검색된 문서를 우선시한다.</p><p><strong>구현 방법:</strong></p><ul><li>프롬프트에서 명확한 지시: &quot;다음 문서만 사용하여 답변하세요&quot;</li><li>문서에 없는 내용 생성 금지</li><li>문서 기반 응답만 허용</li></ul><p><strong>효과:</strong></p><ul><li>내재된 지식의 오류 방지</li><li>검증 가능한 정보만 사용</li><li>할루시네이션 감소</li></ul><h4 id="_2-탐색-공간의-축소" tabindex="-1"><a class="header-anchor" href="#_2-탐색-공간의-축소"><span>2. 탐색 공간의 축소</span></a></h4><p><strong>개념:</strong><br> RAG는 LLM이 응답을 생성할 때 <strong>검색된 문서만을 탐색 공간으로 제한</strong>한다. 즉, 무한한 가능성의 공간이 아닌 제한된 문서 공간에서만 응답을 생성한다.</p><p><strong>효과:</strong></p><ul><li>잘못된 정보 생성 가능성 감소</li><li>관련성 높은 정보만 사용</li><li>정확도 향상</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[그라운딩 없음]</span>
<span class="line">탐색 공간: 전체 학습 데이터 (수조 개의 토큰)</span>
<span class="line">→ 잘못된 정보 생성 가능성 높음</span>
<span class="line"></span>
<span class="line">[RAG 적용]</span>
<span class="line">탐색 공간: 검색된 3개 문서 (수천 개의 토큰)</span>
<span class="line">→ 검증된 정보만 사용, 할루시네이션 감소</span>
<span class="line"></span></code></pre></div><h4 id="_3-최신성과-정확성-보장" tabindex="-1"><a class="header-anchor" href="#_3-최신성과-정확성-보장"><span>3. 최신성과 정확성 보장</span></a></h4><p><strong>개념:</strong><br> RAG는 <strong>최신 문서를 검색</strong>하여 활용함으로써 최신성과 정확성을 보장한다.</p><p><strong>효과:</strong></p><ul><li>오래된 정보 사용 방지</li><li>최신 정보 기반 응답</li><li>정확성 향상</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[그라운딩 없음]</span>
<span class="line">학습 데이터: 2023년 4월까지</span>
<span class="line">질문: &quot;2024년 1월 뉴스는?&quot;</span>
<span class="line">→ 학습 데이터에 없어서 추측하거나 오류 발생</span>
<span class="line"></span>
<span class="line">[RAG 적용]</span>
<span class="line">검색: 2024년 1월 최신 뉴스 문서</span>
<span class="line">→ 최신 정보 기반 정확한 응답</span>
<span class="line"></span></code></pre></div><h4 id="_4-투명성과-검증-가능성" tabindex="-1"><a class="header-anchor" href="#_4-투명성과-검증-가능성"><span>4. 투명성과 검증 가능성</span></a></h4><p><strong>개념:</strong><br> RAG는 <strong>응답의 출처를 명시</strong>함으로써 투명성과 검증 가능성을 제공한다.</p><p><strong>효과:</strong></p><ul><li>사용자가 출처 확인 가능</li><li>검증 가능한 정보만 사용</li><li>신뢰성 향상</li></ul><p><strong>구현 방법:</strong></p><ul><li>응답에 출처 링크 포함</li><li>인용 형식 사용</li><li>메타데이터 제공</li></ul><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">[RAG 응답]</span>
<span class="line">&quot;2024년 1월 주요 뉴스는 다음과 같습니다:</span>
<span class="line">1. [뉴스 내용]</span>
<span class="line">   출처: https://news.example.com/article1</span>
<span class="line"></span>
<span class="line">2. [뉴스 내용]</span>
<span class="line">   출처: https://news.example.com/article2</span>
<span class="line">&quot;</span>
<span class="line">→ 출처 명시로 검증 가능</span>
<span class="line"></span></code></pre></div><h3 id="rag의-효과" tabindex="-1"><a class="header-anchor" href="#rag의-효과"><span>RAG의 효과</span></a></h3><p>RAG의 효과는 <strong>&quot;Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks&quot; (Lewis et al., 2020)<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></strong> 논문에서 처음 제안되고 검증되었다.</p><h4 id="논문의-주요-내용" tabindex="-1"><a class="header-anchor" href="#논문의-주요-내용"><span>논문의 주요 내용</span></a></h4><p><strong>연구 목적:</strong></p><ul><li>지식 집약적인 NLP 작업에서 LLM의 성능 향상</li><li>할루시네이션 감소</li><li>최신 정보 활용</li></ul><p><strong>제안 방법:</strong></p><ul><li>사전 학습된 seq2seq 모델과 위키피디아 벡터 인덱스 결합</li><li>신경망 검색기를 통한 외부 지식 접근</li><li>검색된 문서를 컨텍스트로 활용하여 생성</li></ul><p><strong>주요 실험 결과:</strong></p><ol><li><p><strong>지식 집약적 작업에서 성능 향상</strong></p><ul><li>질문 답변 작업에서 기존 모델 대비 성능 향상</li><li>사실 확인 작업에서 정확도 향상</li></ul></li><li><p><strong>할루시네이션 감소</strong></p><ul><li>검색된 문서 기반 응답으로 할루시네이션 감소</li><li>사실성 점수 향상</li></ul></li><li><p><strong>최신 정보 활용</strong></p><ul><li>학습 시점 이후의 정보도 활용 가능</li><li>동적 정보 업데이트 가능</li></ul></li><li><p><strong>재학습 불필요</strong></p><ul><li>모델 재학습 없이 새로운 정보 활용</li><li>비용 효율적</li></ul></li></ol><p><strong>RAG의 핵심 기여:</strong></p><ul><li><strong>비파라메트릭 메모리</strong>: 위키피디아를 외부 메모리로 활용</li><li><strong>검색-생성 결합</strong>: 검색과 생성을 통합한 프레임워크</li><li><strong>확장 가능성</strong>: 다양한 정보 소스 활용 가능</li></ul><p><strong>RAG의 한계 (논문에서 언급):</strong></p><ul><li>검색 품질에 의존적</li><li>검색된 문서가 부정확하면 응답도 부정확</li><li>검색-생성 간 최적화 필요</li></ul><p><strong>후속 연구:</strong></p><ul><li>Self-RAG: 자기 성찰을 통한 RAG 개선</li><li>CRAG: 정정적 RAG로 검색 품질 향상</li><li>다양한 검색 전략 연구</li></ul><h2 id="_4-3-데이터-통합과-지식-그래프" tabindex="-1"><a class="header-anchor" href="#_4-3-데이터-통합과-지식-그래프"><span>4.3 데이터 통합과 지식 그래프</span></a></h2><h3 id="지식-그래프-도입" tabindex="-1"><a class="header-anchor" href="#지식-그래프-도입"><span>지식 그래프 도입</span></a></h3><p><strong>표준 RAG의 한계:</strong></p><p>표준 RAG는 비정형 텍스트를 검색하고 활용하는 데 뛰어나지만, <strong>다중 홉(Multi-hop) 관계 추론</strong>에는 본질적인 한계를 가진다.</p><p><strong>다중 홉 관계 추론이란?</strong></p><ul><li>여러 단계를 거쳐야 답을 찾을 수 있는 질문</li><li>예: &quot;마리 퀴리의 남편이 받은 노벨상은?&quot;<br> → 1단계: 마리 퀴리의 남편은? (피에르 퀴리)<br> → 2단계: 피에르 퀴리가 받은 노벨상은? (노벨 물리학상)</li></ul><p><strong>표준 RAG의 문제점:</strong></p><ol><li><p><strong>독립적인 문서 집합</strong></p><ul><li>각 문서가 독립적으로 존재</li><li>문서 간 관계를 명시적으로 표현하지 않음</li><li>관계 추론이 어려움</li></ul></li><li><p><strong>다중 홉 추론의 어려움</strong></p><ul><li>여러 문서를 거쳐야 답을 찾을 수 있는 경우 처리 어려움</li><li>중간 단계의 정보를 연결하는 것이 어려움</li><li>관계 체인을 추적하기 어려움</li></ul></li><li><p><strong>관계 정보 손실</strong></p><ul><li>문서에서 관계 정보가 암묵적으로만 존재</li><li>명시적인 관계 구조 부재</li><li>복잡한 관계 네트워크 파악 어려움</li></ul></li></ol><p><strong>예시: 표준 RAG의 한계</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리의 남편이 발견한 원소는?&quot;</span>
<span class="line"></span>
<span class="line">[표준 RAG 처리]</span>
<span class="line">1. &quot;마리 퀴리&quot; 검색 → 문서 1: &quot;마리 퀴리는 물리학자입니다&quot;</span>
<span class="line">2. &quot;피에르 퀴리&quot; 검색 → 문서 2: &quot;피에르 퀴리는 마리 퀴리의 남편입니다&quot;</span>
<span class="line">3. &quot;피에르 퀴리 발견&quot; 검색 → 문서 3: &quot;피에르 퀴리는 플로늄을 발견했습니다&quot;</span>
<span class="line"></span>
<span class="line">문제:</span>
<span class="line">- 3번의 독립적인 검색 필요</span>
<span class="line">- 각 검색 결과를 연결하는 것이 어려움</span>
<span class="line">- 관계 체인을 추적하기 어려움</span>
<span class="line">- 중간 단계 정보가 누락될 수 있음</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>지식 그래프의 필요성:</strong></p><p>만약 정보가 <strong>독립적인 문서 집합이 아니라 서로 복잡하게 얽혀있는 관계의 네트워크</strong>라면, 어떻게 다층적인 관계를 추적하고 연결해야 할까?</p><p>표준 RAG는 이런 다중 홉 관계 추론에 본질적인 한계를 갖기 때문에, <strong>지식 그래프 세계로 나가야 한다</strong>.</p><p><strong>지식 그래프의 장점:</strong></p><ul><li><strong>명시적 관계 표현</strong>: 노드와 엣지로 관계를 명시적으로 표현</li><li><strong>다중 홉 추론</strong>: 관계 체인을 따라 추론 가능</li><li><strong>구조화된 정보</strong>: 구조화된 형태로 정보 저장</li><li><strong>효율적인 탐색</strong>: 그래프 탐색 알고리즘으로 효율적 탐색</li></ul><h3 id="지식-그래프-구성-단위" tabindex="-1"><a class="header-anchor" href="#지식-그래프-구성-단위"><span>지식 그래프 구성 단위</span></a></h3><p>지식 그래프는 <strong>노드(Node)</strong>와 <strong>엣지(Edge)</strong>로 구성된다.</p><h4 id="노드-node" tabindex="-1"><a class="header-anchor" href="#노드-node"><span>노드 (Node)</span></a></h4><p><strong>정의:</strong><br> 노드는 지식 그래프에서 <strong>개체(Entity)</strong>를 나타내는 단위이다. 사람, 장소, 사물, 개념 등 모든 실체를 노드로 표현할 수 있다.</p><p><strong>노드의 특징:</strong></p><ul><li><strong>고유 식별자</strong>: 각 노드는 고유한 ID를 가짐</li><li><strong>속성(Properties)</strong>: 노드는 여러 속성을 가질 수 있음</li><li><strong>타입(Type)</strong>: 노드는 특정 타입을 가짐 (예: Person, Place, Event)</li></ul><p><strong>노드 예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">노드: &quot;마리 퀴리&quot;</span>
<span class="line">- ID: marie_curie_001</span>
<span class="line">- 타입: Person</span>
<span class="line">- 속성:</span>
<span class="line">  - 이름: 마리 퀴리</span>
<span class="line">  - 생년월일: 1867-11-07</span>
<span class="line">  - 직업: 물리학자, 화학자</span>
<span class="line">  - 국적: 폴란드, 프랑스</span>
<span class="line"></span></code></pre></div><h4 id="엣지-edge" tabindex="-1"><a class="header-anchor" href="#엣지-edge"><span>엣지 (Edge)</span></a></h4><p><strong>정의:</strong><br> 엣지는 지식 그래프에서 <strong>관계(Relationship)</strong>를 나타내는 단위이다. 두 노드 간의 연결을 표현한다.</p><p><strong>엣지의 특징:</strong></p><ul><li><strong>방향성</strong>: 엣지는 방향을 가질 수 있음 (유향 그래프)</li><li><strong>타입</strong>: 엣지는 관계 타입을 가짐 (예: married_to, discovered, won)</li><li><strong>속성</strong>: 엣지도 속성을 가질 수 있음 (예: 날짜, 가중치)</li></ul><p><strong>엣지 예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">엣지: &quot;마리 퀴리&quot; → &quot;피에르 퀴리&quot;</span>
<span class="line">- 타입: married_to</span>
<span class="line">- 방향: 마리 퀴리 → 피에르 퀴리</span>
<span class="line">- 속성:</span>
<span class="line">  - 결혼일: 1895-07-26</span>
<span class="line"></span></code></pre></div><p><strong>지식 그래프 구조:</strong></p>`,73),r(f,{code:`eJxLL0osyFDwCeJSAALH6NetO15PnqNgaJNUpG8XkFpUnJ8Xq6Cra1fzZvriN8sbwMK5iUVFmakp8SX5NQpOMB1GyDrAhjmB9aVkFifnl6UWpabUKDjDFBuDFbvmpOam5pVAVDuCVZfn59UouMCUmYCVOZYnFqUgGwlRxAUAxZZDzw==`}),s[6]||=i(`h3`,{id:`마리-퀴리-관계-그래프-예시`,tabindex:`-1`},[i(`a`,{class:`header-anchor`,href:`#마리-퀴리-관계-그래프-예시`},[i(`span`,null,`마리 퀴리 관계 그래프 예시`)])],-1),s[7]||=i(`p`,null,`마리 퀴리, 피에르 퀴리, 플로늄, 노벨 물리학상 등의 관계를 지식 그래프로 표현하면 다음과 같다:`,-1),r(f,{code:`eJyVUk1LAkEYvvsr5g9ISQQKIcSWp5Rl6bZEjO6UA7szMrsmhgcjg5AgQyMEE4K+Dp7CQwf/0bj/obfZ1XbNJdrD7s687/MxzzunAteq6HAvheApaqZ8u5avE+S3p/DZKYuNfBELSpBWh7da60S4nB2hdDrfcrCAbevY46qUyea2W0jXTH8wmz/05Ms0SqRTIsQaJiWta8mERS10p1os6lb4GRHEWrRkQZOD5o18GsluJ+DmNme07qjFvk0cwryYUgLNn0oGNuXjTPZ7as/A1r9FDBwVaXAW1HKbWy1U0jOmvPqUH+9ITmaQnH8/nF9eqI4SLxMb6YKeE0QZ0qtNl1bcJVj97DawsGIWfvGvF89koAjjD7T94SBZWKsSh7qeaC6hq9IhO8Me5Qzb1GtCtAemfzuV47bsjxYTwizIReN1BnzJ4IIB4+3I8d28+6wQBYFZJbhFMXB46BVwlLcm+AlxXSiDJ4jQ/Ml5HMw0CBZOGKyW/TF7UZrvQMwwspAjzGgtQ+hx1UjqC8oFSok=`}),s[8]||=n(`<p><strong>관계 설명:</strong></p><ol><li><p><strong>마리 퀴리 ↔ 피에르 퀴리</strong></p><ul><li>관계: <code>married_to</code> (결혼)</li><li>날짜: 1895년</li></ul></li><li><p><strong>마리 퀴리, 피에르 퀴리 → 플로늄</strong></p><ul><li>관계: <code>discovered</code> (발견)</li><li>날짜: 1898년</li></ul></li><li><p><strong>마리 퀴리, 피에르 퀴리 → 라듐</strong></p><ul><li>관계: <code>discovered</code> (발견)</li><li>날짜: 1898년</li></ul></li><li><p><strong>마리 퀴리, 피에르 퀴리 → 노벨 물리학상</strong></p><ul><li>관계: <code>won</code> (수상)</li><li>날짜: 1903년</li></ul></li><li><p><strong>마리 퀴리 → 노벨 화학상</strong></p><ul><li>관계: <code>won</code> (수상)</li><li>날짜: 1911년</li></ul></li></ol><p><strong>다중 홉 질문 처리:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리의 남편이 발견한 원소는?&quot;</span>
<span class="line"></span>
<span class="line">[지식 그래프 처리]</span>
<span class="line">1. 마리 퀴리 노드에서 시작</span>
<span class="line">2. married_to 엣지를 따라 피에르 퀴리 노드로 이동</span>
<span class="line">3. 피에르 퀴리 노드에서 discovered 엣지를 따라 원소 노드들 탐색</span>
<span class="line">4. 결과: 플로늄, 라듐</span>
<span class="line"></span>
<span class="line">→ 관계 체인을 따라 효율적으로 추론 가능</span>
<span class="line"></span></code></pre></div><h3 id="왜-rag에-지식-그래프를-결합해야-하는가" tabindex="-1"><a class="header-anchor" href="#왜-rag에-지식-그래프를-결합해야-하는가"><span>왜 RAG에 지식 그래프를 결합해야 하는가?</span></a></h3><p>RAG가 <strong>비정형 텍스트라는 광활한 평원을 탐험하는 데 능숙하다면</strong>, 지식 그래프는 <strong>도시의 복잡한 도로망과 건물 간의 관계를 정밀하게 파악하는 데 특화</strong>되어 있다.</p><h4 id="_1-정교하고-복잡한-질문-처리-능력" tabindex="-1"><a class="header-anchor" href="#_1-정교하고-복잡한-질문-처리-능력"><span>1. 정교하고 복잡한 질문 처리 능력</span></a></h4><p><strong>다중 홉 질문 처리:</strong></p><p><strong>표준 RAG:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리의 남편이 받은 노벨상은?&quot;</span>
<span class="line"></span>
<span class="line">처리:</span>
<span class="line">1. &quot;마리 퀴리&quot; 검색 → 문서 1</span>
<span class="line">2. &quot;피에르 퀴리&quot; 검색 → 문서 2</span>
<span class="line">3. &quot;피에르 퀴리 노벨상&quot; 검색 → 문서 3</span>
<span class="line">→ 여러 번의 검색과 연결 과정 필요, 누락 가능성</span>
<span class="line"></span></code></pre></div><p><strong>지식 그래프 + RAG:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리의 남편이 받은 노벨상은?&quot;</span>
<span class="line"></span>
<span class="line">처리:</span>
<span class="line">1. 지식 그래프에서 관계 체인 탐색</span>
<span class="line">   - 마리 퀴리 → married_to → 피에르 퀴리</span>
<span class="line">   - 피에르 퀴리 → won → 노벨 물리학상</span>
<span class="line">2. 관련 문서 검색 (RAG)</span>
<span class="line">   - 탐색된 노드와 관련된 문서 검색</span>
<span class="line">→ 관계 체인을 따라 정확하고 효율적으로 추론</span>
<span class="line"></span></code></pre></div><p><strong>복잡한 관계 질문:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리와 같은 원소를 발견한 사람은?&quot;</span>
<span class="line"></span>
<span class="line">[지식 그래프 처리]</span>
<span class="line">1. 마리 퀴리 → discovered → 플로늄, 라듐</span>
<span class="line">2. 플로늄 → discovered_by → 피에르 퀴리</span>
<span class="line">3. 라듐 → discovered_by → 피에르 퀴리</span>
<span class="line">→ 결과: 피에르 퀴리</span>
<span class="line"></span>
<span class="line">→ 복잡한 관계도 효율적으로 처리</span>
<span class="line"></span></code></pre></div><h4 id="_2-노이즈-없는-정밀한-컨텍스트-제공" tabindex="-1"><a class="header-anchor" href="#_2-노이즈-없는-정밀한-컨텍스트-제공"><span>2. 노이즈 없는 정밀한 컨텍스트 제공</span></a></h4><p><strong>표준 RAG의 문제:</strong></p><ul><li>검색된 문서에 관련 없는 정보도 포함</li><li>노이즈가 많은 컨텍스트</li><li>정확한 정보 추출 어려움</li></ul><p><strong>지식 그래프의 장점:</strong></p><ul><li><strong>정밀한 노드 선택</strong>: 질문과 직접 관련된 노드만 선택</li><li><strong>명시적 관계</strong>: 관계가 명시적으로 표현되어 정확함</li><li><strong>노이즈 최소화</strong>: 불필요한 정보 제거</li></ul><p><strong>예시:</strong></p><p><strong>표준 RAG:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">검색된 문서:</span>
<span class="line">&quot;마리 퀴리는 폴란드 출신의 물리학자입니다. </span>
<span class="line">그녀는 1867년에 태어났고, 파리에서 공부했습니다.</span>
<span class="line">그녀의 남편 피에르 퀴리와 함께 방사능을 연구했습니다.</span>
<span class="line">마리 퀴리는 노벨상을 두 번 받았습니다...&quot;</span>
<span class="line"></span>
<span class="line">→ 많은 정보가 포함되어 있지만, 질문과 직접 관련 없는 정보도 많음</span>
<span class="line"></span></code></pre></div><p><strong>지식 그래프 + RAG:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">선택된 노드와 관계:</span>
<span class="line">- 마리 퀴리 (Person)</span>
<span class="line">- 피에르 퀴리 (Person)</span>
<span class="line">- married_to (관계)</span>
<span class="line">- 노벨 물리학상 (Award)</span>
<span class="line">- won (관계)</span>
<span class="line"></span>
<span class="line">관련 문서만 검색:</span>
<span class="line">&quot;마리 퀴리와 피에르 퀴리는 1895년에 결혼했습니다.</span>
<span class="line">그들은 1903년에 노벨 물리학상을 공동 수상했습니다...&quot;</span>
<span class="line"></span>
<span class="line">→ 질문과 직접 관련된 정밀한 정보만 포함</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-데이터-통합-및-일관성-확보" tabindex="-1"><a class="header-anchor" href="#_3-데이터-통합-및-일관성-확보"><span>3. 데이터 통합 및 일관성 확보</span></a></h4><p><strong>데이터 통합:</strong></p><ul><li><strong>다양한 소스 통합</strong>: 여러 데이터 소스를 하나의 그래프로 통합</li><li><strong>일관된 표현</strong>: 동일한 개체를 하나의 노드로 표현</li><li><strong>중복 제거</strong>: 중복된 정보를 하나로 통합</li></ul><p><strong>일관성 확보:</strong></p><ul><li><strong>명시적 관계</strong>: 관계가 명시적으로 표현되어 일관성 유지</li><li><strong>스키마 기반</strong>: 스키마를 기반으로 일관된 구조 유지</li><li><strong>검증 가능</strong>: 관계의 타입과 속성을 검증 가능</li></ul><p><strong>예시:</strong></p><p><strong>표준 RAG:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">문서 1: &quot;마리 퀴리는 폴란드 출신입니다&quot;</span>
<span class="line">문서 2: &quot;마리 스클로도프스카는 폴란드 출신입니다&quot;</span>
<span class="line">→ 같은 사람인지 알기 어려움 (이름 변형)</span>
<span class="line"></span></code></pre></div><p><strong>지식 그래프 + RAG:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">노드: 마리 퀴리</span>
<span class="line">- ID: marie_curie_001 (고유 식별자)</span>
<span class="line">- 속성:</span>
<span class="line">  - 이름: 마리 퀴리</span>
<span class="line">  - 본명: 마리 스클로도프스카</span>
<span class="line">  - 국적: 폴란드, 프랑스</span>
<span class="line">→ 동일한 개체로 통합, 일관성 확보</span>
<span class="line"></span></code></pre></div><h3 id="지식-그래프를-활용한-rag-구현-패턴" tabindex="-1"><a class="header-anchor" href="#지식-그래프를-활용한-rag-구현-패턴"><span>지식 그래프를 활용한 RAG 구현 패턴</span></a></h3><p>지식 그래프를 RAG에 통합하는 주요 패턴은 다음과 같다:</p><h4 id="패턴-1-text-to-cypher" tabindex="-1"><a class="header-anchor" href="#패턴-1-text-to-cypher"><span>패턴 1: Text-to-Cypher</span></a></h4><p><strong>개념:</strong><br> 이 패턴은 <strong>LLM을 사용자의 자연어 질문을 지식 그래프가 이해할 수 있는 공식 쿼리 언어로 번역하는 똑똑한 번역가로 활용</strong>하는 방식이다.</p><p><strong>Cypher란?</strong></p><ul><li>Neo4j 그래프 데이터베이스의 쿼리 언어</li><li>그래프 구조를 쿼리하는 데 특화</li><li>노드와 엣지를 효율적으로 탐색</li></ul><p><strong>프로세스:</strong></p>`,41),r(f,{code:`eJw9zrEKglAYBeC9p/hfIHqBCMrUxRbXi0NF4RAUEkSboELhUFFYg0pEZIODlZJD0Pt4f98huUpnPOcbzngyXQzVvjYHSa5BkTZBf4vHCJ0YMFjRMFWgXm9Bh0hST2GkwwqOcMuZOtIAvx96CwEND81HKTgmugQDHW0PsndK/VN+MAHta+6sS9RliCfUSuneBRptIIv17GVC9tTRqBTPlECKiZ7vUPxB061Ec6A1WnJbLKXApEgwcfFiAXo7aif/Wz93RmcK`}),s[9]||=n(`<p><strong>예시:</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:20;"><pre><code class="language-text"><span class="line">[사용자 질문]</span>
<span class="line">&quot;마리 퀴리의 남편이 발견한 원소는?&quot;</span>
<span class="line"></span>
<span class="line">[LLM이 생성한 Cypher 쿼리]</span>
<span class="line">MATCH (marie:Person {name: &quot;마리 퀴리&quot;})</span>
<span class="line">      -[:married_to]-&gt;</span>
<span class="line">      (pierre:Person)</span>
<span class="line">      -[:discovered]-&gt;</span>
<span class="line">      (element:Element)</span>
<span class="line">RETURN element.name</span>
<span class="line"></span>
<span class="line">[지식 그래프 실행 결과]</span>
<span class="line">- 플로늄</span>
<span class="line">- 라듐</span>
<span class="line"></span>
<span class="line">[RAG로 관련 문서 검색]</span>
<span class="line">- 플로늄 발견 관련 문서</span>
<span class="line">- 라듐 발견 관련 문서</span>
<span class="line"></span>
<span class="line">[최종 응답]</span>
<span class="line">&quot;마리 퀴리의 남편 피에르 퀴리가 발견한 원소는 </span>
<span class="line">플로늄과 라듐입니다. 이들은 1898년에 공동으로 발견했습니다.&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>장점:</strong></p><ul><li><strong>정확한 쿼리</strong>: 구조화된 쿼리로 정확한 결과</li><li><strong>효율적 탐색</strong>: 그래프 탐색 알고리즘으로 효율적</li><li><strong>명시적 관계</strong>: 관계가 명시적으로 표현됨</li></ul><p><strong>단점:</strong></p><ul><li><strong>Cypher 학습 필요</strong>: LLM이 Cypher를 정확히 생성해야 함</li><li><strong>스키마 의존</strong>: 그래프 스키마를 정확히 이해해야 함</li><li><strong>오류 처리</strong>: 잘못된 쿼리 생성 시 오류 처리 필요</li></ul><h4 id="패턴-2-kg-rag-하이브리드-검색" tabindex="-1"><a class="header-anchor" href="#패턴-2-kg-rag-하이브리드-검색"><span>패턴 2: KG-RAG 하이브리드 검색</span></a></h4><p><strong>개념:</strong><br> 이 패턴은 <strong>비정형 텍스트 검색과 지식 그래프 검색을 함께 사용</strong>하여 두 방식의 장점을 모두 취하는 하이브리드 접근법이다.</p><p><strong>프로세스:</strong></p>`,9),r(f,{code:`eJxLy8kvT85ILCpRCHHhUgACx+g3TWvezFr5Zt4EhTfLO16v2RGroKtrp+AU/XrzxNcL1ii82tTwprkzFqzYCSzlHP22tfdN15K3XTugsjZJRfp2QY7uyKpcot8sb3jTPVfh1fYdr+fNeDulBVmxN1StM1itK4qJG15t3gORdQHLukUjG4GQdQXLukdDxBTetm19O3UlRMoNIgVmu4PZHtFv5q150zHnzZyWtzOnQBycqluUmJedmZcO0eQBVugZ/WbrnDeLWhXe7F4BdxVEgSdYgVe0j4+vwpvmuW9aNkLEvcDi3nCNcye+7t4aywUAeL+bHQ==`}),s[10]||=n(`<p><strong>하이브리드 검색 전략:</strong></p><ol><li><p><strong>병렬 검색</strong></p><ul><li>텍스트 검색과 그래프 검색을 동시에 수행</li><li>각각의 결과를 독립적으로 얻음</li></ul></li><li><p><strong>결과 통합</strong></p><ul><li>텍스트 결과와 그래프 결과를 통합</li><li>중복 제거 및 보완</li></ul></li><li><p><strong>재순위화</strong></p><ul><li>통합된 결과를 관련성에 따라 재순위화</li><li>질문과의 관련성 점수 계산</li></ul></li></ol><p><strong>예시:</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:20;"><pre><code class="language-text"><span class="line">[사용자 질문]</span>
<span class="line">&quot;마리 퀴리의 연구 성과는?&quot;</span>
<span class="line"></span>
<span class="line">[1단계: 병렬 검색]</span>
<span class="line"></span>
<span class="line">텍스트 검색 (RAG):</span>
<span class="line">- 문서 1: &quot;마리 퀴리는 방사능 연구로 유명합니다&quot;</span>
<span class="line">- 문서 2: &quot;마리 퀴리는 노벨상을 두 번 받았습니다&quot;</span>
<span class="line">- 문서 3: &quot;마리 퀴리는 플로늄과 라듐을 발견했습니다&quot;</span>
<span class="line"></span>
<span class="line">지식 그래프 검색 (KG):</span>
<span class="line">- 노드: 마리 퀴리</span>
<span class="line">- 관계: discovered → 플로늄, 라듐</span>
<span class="line">- 관계: won → 노벨 물리학상 (1903), 노벨 화학상 (1911)</span>
<span class="line">- 관계: profession → 물리학자, 화학자</span>
<span class="line"></span>
<span class="line">[2단계: 결과 통합]</span>
<span class="line">- 텍스트 결과와 그래프 결과를 통합</span>
<span class="line">- 그래프 결과로 텍스트 결과 보완</span>
<span class="line"></span>
<span class="line">[3단계: 재순위화]</span>
<span class="line">- 관련성 점수 계산</span>
<span class="line">- 최종 컨텍스트 구성</span>
<span class="line"></span>
<span class="line">[4단계: LLM 생성]</span>
<span class="line">&quot;마리 퀴리의 주요 연구 성과는 다음과 같습니다:</span>
<span class="line">1. 플로늄과 라듐 발견 (1898년, 피에르 퀴리와 공동)</span>
<span class="line">2. 노벨 물리학상 수상 (1903년, 피에르 퀴리와 공동)</span>
<span class="line">3. 노벨 화학상 수상 (1911년, 개인)</span>
<span class="line">4. 방사능 연구의 선구자&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>장점:</strong></p><ul><li><strong>포괄적 검색</strong>: 텍스트와 그래프 모두 활용</li><li><strong>상호 보완</strong>: 한 방식의 한계를 다른 방식이 보완</li><li><strong>정확성 향상</strong>: 두 방식의 결과를 통합하여 정확도 향상</li></ul><p><strong>단점:</strong></p><ul><li><strong>복잡도 증가</strong>: 두 가지 검색 시스템 관리 필요</li><li><strong>비용 증가</strong>: 두 가지 검색 수행으로 인한 비용</li><li><strong>통합 복잡도</strong>: 결과 통합 로직 필요</li></ul><h3 id="지식-그래프-구현-방식의-한계" tabindex="-1"><a class="header-anchor" href="#지식-그래프-구현-방식의-한계"><span>지식 그래프 구현 방식의 한계</span></a></h3><p>지식 그래프는 강력하지만 다음과 같은 한계가 있다:</p><h4 id="_1-지식-추출-및-스키마-설계" tabindex="-1"><a class="header-anchor" href="#_1-지식-추출-및-스키마-설계"><span>1. 지식 추출 및 스키마 설계</span></a></h4><p><strong>문제:</strong></p><ul><li><strong>지식 추출의 어려움</strong>: 비정형 텍스트에서 구조화된 지식을 추출하는 것이 어려움</li><li><strong>스키마 설계의 복잡성</strong>: 적절한 스키마를 설계하는 것이 복잡함</li><li><strong>품질 관리</strong>: 추출된 지식의 품질을 보장하기 어려움</li></ul><p><strong>구체적 어려움:</strong></p><ol><li><p><strong>개체 인식 (Named Entity Recognition, NER)</strong></p><ul><li>텍스트에서 개체를 정확히 인식하기 어려움</li><li>동일한 개체의 다양한 표현 (예: &quot;마리 퀴리&quot; vs &quot;마리 스클로도프스카&quot;)</li><li>개체 타입 분류의 어려움</li></ul></li><li><p><strong>관계 추출 (Relation Extraction)</strong></p><ul><li>텍스트에서 관계를 정확히 추출하기 어려움</li><li>암묵적 관계의 추출 어려움</li><li>관계 타입 분류의 어려움</li></ul></li><li><p><strong>스키마 설계</strong></p><ul><li>도메인에 맞는 스키마 설계 필요</li><li>확장 가능한 스키마 설계 어려움</li><li>스키마 변경 시 영향 범위가 큼</li></ul></li></ol><p><strong>해결 방안:</strong></p><ul><li><strong>LLM 활용</strong>: LLM을 활용한 지식 추출</li><li><strong>전문가 검토</strong>: 도메인 전문가의 검토 및 수정</li><li><strong>점진적 구축</strong>: 작은 규모로 시작하여 점진적으로 확장</li><li><strong>자동화 도구</strong>: 지식 추출 자동화 도구 활용</li></ul><h4 id="_2-존재하지-않는-정보와-최신성-유지" tabindex="-1"><a class="header-anchor" href="#_2-존재하지-않는-정보와-최신성-유지"><span>2. 존재하지 않는 정보와 최신성 유지</span></a></h4><p><strong>문제:</strong></p><ul><li><strong>존재하지 않는 정보</strong>: 그래프에 없는 정보는 처리할 수 없음</li><li><strong>최신성 유지</strong>: 새로운 정보를 지속적으로 업데이트해야 함</li><li><strong>정보 불완전성</strong>: 모든 정보를 그래프에 포함하기 어려움</li></ul><p><strong>구체적 어려움:</strong></p><ol><li><p><strong>존재하지 않는 정보</strong></p><ul><li>그래프에 없는 개체나 관계는 처리 불가</li><li>불완전한 그래프로 인한 오류 가능성</li><li>정보 누락으로 인한 응답 실패</li></ul></li><li><p><strong>최신성 유지</strong></p><ul><li>새로운 정보를 지속적으로 추가해야 함</li><li>오래된 정보를 업데이트해야 함</li><li>정보 변경 추적의 어려움</li></ul></li><li><p><strong>정보 불완전성</strong></p><ul><li>모든 정보를 그래프에 포함하기 어려움</li><li>일부 정보만 그래프화됨</li><li>불완전한 정보로 인한 오류 가능성</li></ul></li></ol><p><strong>해결 방안:</strong></p><ul><li><strong>하이브리드 접근</strong>: 지식 그래프 + RAG 결합</li><li><strong>자동 업데이트</strong>: 자동화된 정보 업데이트 시스템</li><li><strong>폴백 메커니즘</strong>: 그래프에 없는 정보는 RAG로 처리</li><li><strong>지속적 관리</strong>: 정기적인 그래프 업데이트 및 검증</li></ul><p><strong>하이브리드 접근 예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;최신 AI 기술 동향은?&quot;</span>
<span class="line"></span>
<span class="line">[처리 과정]</span>
<span class="line">1. 지식 그래프 검색</span>
<span class="line">   - 그래프에 최신 정보가 없음</span>
<span class="line">   </span>
<span class="line">2. RAG로 폴백</span>
<span class="line">   - 웹 검색으로 최신 정보 검색</span>
<span class="line">   - 검색 결과를 바탕으로 응답 생성</span>
<span class="line">   </span>
<span class="line">3. 결과 통합</span>
<span class="line">   - 그래프 결과 (없음) + RAG 결과</span>
<span class="line">   - 최종 응답 생성</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>지속적 관리 전략:</strong></p><ul><li><strong>정기적 업데이트</strong>: 주기적으로 그래프 업데이트</li><li><strong>변경 추적</strong>: 정보 변경 사항 추적</li><li><strong>품질 검증</strong>: 업데이트된 정보의 품질 검증</li><li><strong>버전 관리</strong>: 그래프 버전 관리</li></ul><h2 id="_4-4-그라운딩-기법을-고려한-체인" tabindex="-1"><a class="header-anchor" href="#_4-4-그라운딩-기법을-고려한-체인"><span>4.4 그라운딩 기법을 고려한 체인</span></a></h2><h3 id="rag-체인" tabindex="-1"><a class="header-anchor" href="#rag-체인"><span>RAG 체인</span></a></h3><p><strong>RAG 체인의 개념:</strong></p><p>RAG 체인은 <strong>전체 RAG 파이프라인을 하나의 독립적인 부품, 즉 체인으로 취급하여 더 큰 워크플로에 통합</strong>하는 것이다.</p><p><strong>RAG 체인의 구조:</strong></p>`,33),r(f,{code:`eJxLy8kvT85ILCpR8AniUgACx+g3TWvezFr5Zt4EhTfLO16v2RGroKtrp+AUHeTorvBm05Y3c3fEglU6gcWdo19tanjT3AkRcwaLuUS/WTb31YapEDEXsJhr9JvmuW9aNkLEXMFibtFv5k583b0VIuYGFnOPft07ReFt4waFN7N73jaueTul5/XCObFcAPRAQ0E=`}),s[11]||=n(`<p><strong>RAG 체인의 장점:</strong></p><ol><li><p><strong>모듈성 (Modularity)</strong></p><ul><li>RAG를 독립적인 모듈로 취급</li><li>다른 시스템과 쉽게 통합 가능</li><li>각 모듈을 독립적으로 테스트 및 수정 가능</li></ul></li><li><p><strong>재사용성 (Reusability)</strong></p><ul><li>동일한 RAG 체인을 여러 워크플로에서 재사용</li><li>코드 중복 제거</li><li>일관된 RAG 동작 보장</li></ul></li><li><p><strong>유연성 (Flexibility)</strong></p><ul><li>다양한 워크플로에 통합 가능</li><li>필요에 따라 다른 체인과 조합 가능</li><li>확장 및 수정 용이</li></ul></li></ol><p><strong>RAG 체인 통합 예시:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># RAG 체인 정의</span></span>
<span class="line">rag_chain <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> RunnablePassthrough<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">|</span> retriever</span>
<span class="line">    <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">&quot;context&quot;</span><span class="token punctuation">:</span> retriever<span class="token punctuation">,</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> RunnablePassthrough<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">|</span> prompt</span>
<span class="line">    <span class="token operator">|</span> llm</span>
<span class="line">    <span class="token operator">|</span> StrOutputParser<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 더 큰 워크플로에 통합</span></span>
<span class="line">workflow <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">:</span> RunnablePassthrough<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token operator">|</span> question_classifier  <span class="token comment"># 질문 분류</span></span>
<span class="line">    <span class="token operator">|</span> conditional_chain<span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;rag&quot;</span><span class="token punctuation">:</span> rag_chain<span class="token punctuation">,</span>  <span class="token comment"># RAG 체인</span></span>
<span class="line">        <span class="token string">&quot;direct&quot;</span><span class="token punctuation">:</span> direct_llm_chain<span class="token punctuation">,</span>  <span class="token comment"># 직접 LLM 체인</span></span>
<span class="line">        <span class="token string">&quot;calculator&quot;</span><span class="token punctuation">:</span> calculator_chain  <span class="token comment"># 계산기 체인</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>RAG 체인의 활용:</strong></p><p>RAG 체인은 다양한 시스템에서 활용될 수 있다. <strong>멀티 에이전트 시스템</strong>에서는 여러 에이전트가 각각 독립적인 RAG 체인을 사용하여 서로 다른 도메인의 정보를 검색하고 활용할 수 있다. <strong>복합 워크플로</strong>에서는 RAG 체인을 다른 체인(예: 코드 생성 체인, 계산기 체인)과 조합하여 더 복잡한 작업을 수행할 수 있다. <strong>조건부 실행</strong>에서는 질문의 유형이나 조건에 따라 RAG 체인을 선택적으로 실행하여 효율성을 높일 수 있다.</p><h3 id="라우터-체인" tabindex="-1"><a class="header-anchor" href="#라우터-체인"><span>라우터 체인</span></a></h3><p><strong>라우터 체인의 개념:</strong></p><p>&quot;모든 도로가 로마로 통하지 않듯 모든 질문이 RAG로 통하는 것은 아니다.&quot; <strong>라우터 체인은 상황별로 LLM을 교통정리처럼 활용하여 들어온 질문을 가장 적절한 처리 경로로 안내</strong>하는 역할을 한다.</p><p><strong>라우터 체인의 필요성:</strong></p><p>모든 질문이 RAG를 필요로 하는 것은 아니다. 질문의 유형에 따라 적절한 처리 경로가 다르기 때문이다. <strong>간단한 질문</strong>의 경우 RAG 없이 LLM의 내재된 지식만으로도 충분히 답변할 수 있다. 예를 들어 &quot;파리는 어느 나라의 수도인가요?&quot;와 같은 일반 상식 질문은 RAG를 사용할 필요가 없다. <strong>계산 질문</strong>의 경우 계산기 도구가 필요하며, RAG나 LLM의 추론보다는 정확한 계산 도구를 사용하는 것이 적절하다. <strong>코드 생성</strong>이 필요한 질문은 코드 생성 체인을 사용하는 것이 효율적이다. 반면 <strong>RAG 질문</strong>은 외부 문서 검색이 필요한 경우로, 실제 데이터나 최신 정보가 필요한 질문에 적합하다.</p><p><strong>라우터 체인 구조:</strong></p>`,12),r(f,{code:`eJxLy8kvT85ILCpRCHHhUgACx+g3TWvezFr5Zt4EhTfLO16v2RGroKtrp+AU/XrunjezNrxt2aDg4+MbC1bsBJZyroYoVHi9reX10hm1YClnkFTNqw0tr7tXvJ06B2pWjYJL9JvljW8WTAQZovBm05Y3c3dAzIJq2NzypmkDXLVrNETg1Q6gGIbiN3unvJ4MNLp57puWjTUKbtEoAlg0BDm6w412jwbzMA2dvVPh1aaGN82dNQoe0QgeilIXsMc9o9/Mnfi6eytEzBUiBma7IbHdkdgeUDYAMK+iPw==`}),s[12]||=n(`<p><strong>라우터 체인 구현:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># 라우터 프롬프트</span></span>
<span class="line">router_prompt <span class="token operator">=</span> ChatPromptTemplate<span class="token punctuation">.</span>from_messages<span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&quot;system&quot;</span><span class="token punctuation">,</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;당신은 질문을 분석하여 적절한 처리 경로로 라우팅하는 라우터입니다.</span>
<span class="line">    </span>
<span class="line">다음 경로 중 하나를 선택하세요:</span>
<span class="line">- &quot;direct&quot;: 간단한 질문, LLM의 내재된 지식으로 충분</span>
<span class="line">- &quot;calculator&quot;: 수학 계산이 필요한 질문</span>
<span class="line">- &quot;code&quot;: 코드 생성이 필요한 질문</span>
<span class="line">- &quot;rag&quot;: 외부 문서 검색이 필요한 질문</span>
<span class="line">- &quot;web&quot;: 최신 정보 검색이 필요한 질문</span>
<span class="line"></span>
<span class="line">질문: {question}</span>
<span class="line">경로:&quot;&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token string">&quot;human&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;{question}&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 라우터 체인</span></span>
<span class="line">router_chain <span class="token operator">=</span> router_prompt <span class="token operator">|</span> llm <span class="token operator">|</span> StrOutputParser<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 조건부 체인</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">route_question</span><span class="token punctuation">(</span>question<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    route <span class="token operator">=</span> router_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    </span>
<span class="line">    <span class="token keyword">if</span> route <span class="token operator">==</span> <span class="token string">&quot;direct&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> direct_llm_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> route <span class="token operator">==</span> <span class="token string">&quot;calculator&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> calculator_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> route <span class="token operator">==</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> code_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> route <span class="token operator">==</span> <span class="token string">&quot;rag&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> rag_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">elif</span> route <span class="token operator">==</span> <span class="token string">&quot;web&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> web_search_chain<span class="token punctuation">.</span>invoke<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>라우터 체인의 장점:</strong></p><ol><li><strong>효율성</strong>: 적절한 경로로 질문을 처리하여 불필요한 처리 방지</li><li><strong>정확성</strong>: 각 질문 유형에 최적화된 체인 사용</li><li><strong>비용 절감</strong>: RAG가 필요 없는 질문은 RAG를 사용하지 않음</li><li><strong>확장성</strong>: 새로운 경로를 쉽게 추가 가능</li></ol><p><strong>라우터 체인 예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문 1: &quot;2+2는?&quot;</span>
<span class="line">→ 라우터: &quot;calculator&quot;</span>
<span class="line">→ 계산기 체인: &quot;4&quot;</span>
<span class="line"></span>
<span class="line">질문 2: &quot;파이썬으로 리스트 정렬하는 방법은?&quot;</span>
<span class="line">→ 라우터: &quot;code&quot;</span>
<span class="line">→ 코드 생성 체인: &quot;sorted() 함수 사용...&quot;</span>
<span class="line"></span>
<span class="line">질문 3: &quot;우리 회사의 작년 매출은?&quot;</span>
<span class="line">→ 라우터: &quot;rag&quot;</span>
<span class="line">→ RAG 체인: 내부 문서 검색 후 응답</span>
<span class="line"></span>
<span class="line">질문 4: &quot;오늘 날씨는?&quot;</span>
<span class="line">→ 라우터: &quot;web&quot;</span>
<span class="line">→ 웹 검색 체인: 최신 날씨 정보 검색 후 응답</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="자기-교정-rag-루프" tabindex="-1"><a class="header-anchor" href="#자기-교정-rag-루프"><span>자기 교정 RAG 루프</span></a></h3><p><strong>자기 교정 RAG 루프의 개념:</strong></p><p>아무리 발전된 AI 모델이라 해도 생성된 결과물에는 언제나 오류의 가능성이 내재되어 있다. <strong>1차 시도에서 생성된 답변이 완벽하지 않을 수 있다는 가능성을 인정하고 이를 개선하기 위한 성찰의 단계를 워크플로에 포함시키는 것</strong>이 자기 교정 RAG 루프의 핵심 철학이다.</p><p><strong>자기 교정 RAG 루프의 구조:</strong></p>`,10),r(f,{code:`eJxt0T0OgjAUwPHdU7zZhMWRwclbGAcGYxxc1DgT7YAfiQ46aJBATESTDqhAOFP7uIOlpQQjDAy8H6/5p7O5NR/2xtZoak2MRacF4um3B2AYXWBvG1drE3BJ8fJE7wAYOpxmEqmhdHi/suhkAott7j9ACCRuCaRVQNnVFcnLhPxIeEDFO99kwBIqPioq55Lm+zWLbHF87LAsAr5N+McugbQKqLVnwm87UyMe7jD4Rx7VSdqlTo1Wc611GKbHYkdDmDbVH015xd5aoVY/kSxykfj84DZ0qjjJxdW0vlIR4gw=`}),s[13]||=n(`<p><strong>상태 정의:</strong></p><ol><li><p><strong>검색 (Retrieval)</strong></p><ul><li>상태: 관련 문서를 검색하는 상태</li><li>입력: 사용자 질문</li><li>출력: 검색된 문서 목록</li></ul></li><li><p><strong>증강 (Augmentation)</strong></p><ul><li>상태: 검색된 문서를 프롬프트에 통합하는 상태</li><li>입력: 검색된 문서, 사용자 질문</li><li>출력: 증강된 프롬프트</li></ul></li><li><p><strong>생성 (Generation)</strong></p><ul><li>상태: LLM이 답변을 생성하는 상태</li><li>입력: 증강된 프롬프트</li><li>출력: 초기 답변</li></ul></li><li><p><strong>평가 (Evaluation)</strong></p><ul><li>상태: 생성된 답변을 평가하는 상태</li><li>입력: 초기 답변, 사용자 질문, 검색된 문서</li><li>출력: 평가 결과 (만족/불만족)</li></ul></li><li><p><strong>재검색 (Re-retrieval)</strong></p><ul><li>상태: 추가 문서를 검색하는 상태</li><li>입력: 평가 결과, 불만족 원인</li><li>출력: 추가 검색된 문서</li></ul></li><li><p><strong>재증강 (Re-augmentation)</strong></p><ul><li>상태: 추가 문서를 프롬프트에 통합하는 상태</li><li>입력: 기존 문서, 추가 문서, 사용자 질문</li><li>출력: 재구성된 프롬프트</li></ul></li><li><p><strong>재생성 (Re-generation)</strong></p><ul><li>상태: 개선된 답변을 생성하는 상태</li><li>입력: 재구성된 프롬프트</li><li>출력: 개선된 답변</li></ul></li><li><p><strong>완료 (Completion)</strong></p><ul><li>상태: 최종 답변을 반환하는 상태</li><li>입력: 만족스러운 답변</li><li>출력: 최종 응답</li></ul></li></ol><p><strong>노드 정의:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># 상태 노드 정의</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">RetrievalNode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 문서 검색</span></span>
<span class="line">        documents <span class="token operator">=</span> retriever<span class="token punctuation">.</span>search<span class="token punctuation">(</span>question<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;documents&quot;</span><span class="token punctuation">:</span> documents<span class="token punctuation">,</span> <span class="token string">&quot;question&quot;</span><span class="token punctuation">:</span> question<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">AugmentationNode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> documents<span class="token punctuation">,</span> question<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 프롬프트 구성</span></span>
<span class="line">        prompt <span class="token operator">=</span> build_prompt<span class="token punctuation">(</span>documents<span class="token punctuation">,</span> question<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;prompt&quot;</span><span class="token punctuation">:</span> prompt<span class="token punctuation">,</span> <span class="token string">&quot;documents&quot;</span><span class="token punctuation">:</span> documents<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">GenerationNode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> prompt<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 답변 생성</span></span>
<span class="line">        answer <span class="token operator">=</span> llm<span class="token punctuation">.</span>generate<span class="token punctuation">(</span>prompt<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;answer&quot;</span><span class="token punctuation">:</span> answer<span class="token punctuation">,</span> <span class="token string">&quot;prompt&quot;</span><span class="token punctuation">:</span> prompt<span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">EvaluationNode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">def</span> <span class="token function">execute</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> answer<span class="token punctuation">,</span> question<span class="token punctuation">,</span> documents<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token comment"># 답변 평가</span></span>
<span class="line">        score <span class="token operator">=</span> evaluate<span class="token punctuation">(</span>answer<span class="token punctuation">,</span> question<span class="token punctuation">,</span> documents<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> score <span class="token operator">&gt;</span> threshold<span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;satisfied&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;answer&quot;</span><span class="token punctuation">:</span> answer<span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;unsatisfied&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reason&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;low_score&quot;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>조건부 엣지 정의:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># 조건부 엣지 정의</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">should_retry</span><span class="token punctuation">(</span>evaluation_result<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;재시도 여부 결정&quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">if</span> evaluation_result<span class="token punctuation">[</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;satisfied&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;complete&quot;</span></span>
<span class="line">    <span class="token keyword">elif</span> evaluation_result<span class="token punctuation">[</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;unsatisfied&quot;</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;re_retrieval&quot;</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token string">&quot;complete&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 상태 전이</span></span>
<span class="line">workflow <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">    RetrievalNode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">|</span> AugmentationNode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">|</span> GenerationNode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">|</span> EvaluationNode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token operator">|</span> conditional_edge<span class="token punctuation">(</span></span>
<span class="line">        condition<span class="token operator">=</span>should_retry<span class="token punctuation">,</span></span>
<span class="line">        mapping<span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;complete&quot;</span><span class="token punctuation">:</span> CompletionNode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;re_retrieval&quot;</span><span class="token punctuation">:</span> ReRetrievalNode<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>자기 교정 RAG 루프의 장점:</strong></p><ol><li><strong>자동 개선</strong>: 오류를 자동으로 감지하고 개선</li><li><strong>품질 향상</strong>: 반복적 개선을 통해 답변 품질 향상</li><li><strong>신뢰성</strong>: 만족스러운 답변을 생성할 때까지 반복</li><li><strong>적응성</strong>: 상황에 따라 다른 개선 전략 적용</li></ol><p><strong>자기 교정 RAG 루프의 한계:</strong></p><ol><li><strong>비용 증가</strong>: 여러 번의 LLM 호출로 인한 비용 증가</li><li><strong>응답 시간</strong>: 반복 과정으로 인한 지연</li><li><strong>무한 루프</strong>: 최대 반복 횟수 제한 필요</li><li><strong>평가 정확도</strong>: 평가 노드의 정확도에 의존</li></ol><h2 id="_4-5-에이전트-디자인을-통한-지식-통합" tabindex="-1"><a class="header-anchor" href="#_4-5-에이전트-디자인을-통한-지식-통합"><span>4.5 에이전트 디자인을 통한 지식 통합</span></a></h2><h3 id="지식-통합을-위한-에이전트-도구-구성" tabindex="-1"><a class="header-anchor" href="#지식-통합을-위한-에이전트-도구-구성"><span>지식 통합을 위한 에이전트 도구 구성</span></a></h3><p>3장에서 배운 ReAct 프레임워크에서 에이전트는 <strong>생각(Thought) → 행동(Action) → 관찰(Observation)</strong> 순환 과정을 통해 작동했다. 에이전트 설계의 첫걸음은 이와 같다. 지식 통합 에이전트를 위해 다음과 같은 세 가지 핵심 도구를 정의할 수 있다.</p><h4 id="_1-vector-search-tool" tabindex="-1"><a class="header-anchor" href="#_1-vector-search-tool"><span>1. vector_search_tool</span></a></h4><p><strong>설명:</strong><br> 벡터 검색 도구는 벡터 저장소에서 의미적으로 유사한 문서를 검색하는 도구이다. 사용자 질문을 임베딩으로 변환하고, 벡터 저장소에서 유사도가 높은 문서를 검색한다.</p><p><strong>주요 기능:</strong></p><ul><li>질문을 임베딩으로 변환</li><li>벡터 저장소에서 유사도 검색</li><li>상위 K개 문서 반환</li><li>문서 메타데이터 포함</li></ul><p><strong>입력:</strong></p><div class="language-python" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;파리 여행 추천 장소는?&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;top_k&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;category&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;travel&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ko&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p><strong>출력:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;documents&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;파리는 프랑스의 수도로, 에펠탑, 루브르 박물관 등이 유명합니다...&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;score&quot;</span><span class="token punctuation">:</span> <span class="token number">0.92</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;metadata&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;travel_guide_paris.pdf&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;page&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;category&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;travel&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;content&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;에펠탑은 1889년에 건축되었으며, 파리의 상징적인 랜드마크입니다...&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;score&quot;</span><span class="token punctuation">:</span> <span class="token number">0.85</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;metadata&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;paris_landmarks.pdf&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;page&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;category&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;travel&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment"># ... 더 많은 문서</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;total_results&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>도구 정의 예시:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line">vector_search_tool <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;vector_search&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;벡터 저장소에서 의미적으로 유사한 문서를 검색합니다. 질문과 관련된 문서를 찾을 때 사용하세요.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;parameters&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;검색할 질문이나 키워드&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;top_k&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;반환할 문서 수 (기본값: 5)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;default&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;filter&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;검색 필터 (카테고리, 언어 등)&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;required&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;query&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="_2-knowledge-graph-tool" tabindex="-1"><a class="header-anchor" href="#_2-knowledge-graph-tool"><span>2. knowledge_graph_tool</span></a></h4><p><strong>설명:</strong><br> 지식 그래프 도구는 지식 그래프에서 노드와 관계를 탐색하는 도구이다. 복잡한 관계 질문이나 다중 홉 추론이 필요한 경우 사용한다.</p><p><strong>주요 기능:</strong></p><ul><li>노드 검색</li><li>관계 탐색</li><li>경로 쿼리</li><li>트리플 검색</li></ul><p><strong>입력:</strong></p><div class="language-python" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;operation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;find_path&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;start_node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;end_node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;노벨 물리학상&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;max_hops&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p><strong>출력:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;paths&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;path&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Person&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;married_to&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Relationship&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;피에르 퀴리&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Person&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token string">&quot;edge&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;won&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Relationship&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token punctuation">{</span><span class="token string">&quot;node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;노벨 물리학상&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Award&quot;</span><span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;length&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;confidence&quot;</span><span class="token punctuation">:</span> <span class="token number">0.95</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;triples&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;subject&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;predicate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;married_to&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;object&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;피에르 퀴리&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;subject&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;피에르 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;predicate&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;won&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;object&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;노벨 물리학상&quot;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>다른 연산 예시:</strong></p><p><strong>노드 검색:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># 입력</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;operation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;search_node&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;node_type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Person&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 출력</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;nodes&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;marie_curie_001&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Person&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;birth_date&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1867-11-07&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;nationality&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Poland&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;France&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;profession&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;Physicist&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Chemist&quot;</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>관계 탐색:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token comment"># 입력</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;operation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;explore_relations&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;node&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;relation_types&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;discovered&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;won&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;married_to&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;max_depth&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 출력</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;relations&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;relation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;discovered&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;to&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;플로늄&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">:</span> <span class="token number">1898</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;relation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;married_to&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;to&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;피에르 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">:</span> <span class="token number">1895</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;from&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;마리 퀴리&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;relation&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;won&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;to&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;노벨 물리학상&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">:</span> <span class="token number">1903</span><span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>도구 정의 예시:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line">knowledge_graph_tool <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;knowledge_graph&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;지식 그래프에서 노드와 관계를 탐색합니다. 복잡한 관계 질문이나 다중 홉 추론이 필요한 경우 사용하세요.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;parameters&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;operation&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;enum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;search_node&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;find_path&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;explore_relations&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;query_triples&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;수행할 연산&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;검색 쿼리 (operation에 따라 다름)&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;start_node&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;시작 노드 (find_path용)&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;end_node&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;끝 노드 (find_path용)&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;max_hops&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;최대 홉 수 (기본값: 3)&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;required&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;operation&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="_3-web-search-tool" tabindex="-1"><a class="header-anchor" href="#_3-web-search-tool"><span>3. web_search_tool</span></a></h4><p><strong>설명:</strong><br> 웹 검색 도구는 인터넷에서 최신 정보를 검색하는 도구이다. 벡터 저장소나 지식 그래프에 없는 최신 정보나 실시간 정보가 필요한 경우 사용한다.</p><p><strong>주요 기능:</strong></p><ul><li>웹 검색 수행</li><li>최신 정보 검색</li><li>실시간 정보 제공</li><li>여러 소스 통합</li></ul><p><strong>입력:</strong></p><div class="language-python" data-highlighter="prismjs" data-ext="py"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024년 1월 AI 기술 동향&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;num_results&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;time_range&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;past_month&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre></div><p><strong>출력:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;results&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024년 AI 기술 동향: 생성형 AI의 확산&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://example.com/ai-trends-2024&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;snippet&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024년 1월, 생성형 AI 기술이 다양한 산업에 확산되고 있습니다...&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;date&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-01-15&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;relevance_score&quot;</span><span class="token punctuation">:</span> <span class="token number">0.92</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;title&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;최신 LLM 기술 발전&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://example.com/llm-advances&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;snippet&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;대규모 언어 모델의 성능이 지속적으로 향상되고 있습니다...&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;date&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-01-10&quot;</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;relevance_score&quot;</span><span class="token punctuation">:</span> <span class="token number">0.85</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment"># ... 더 많은 결과</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;total_results&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;search_time&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2024-01-20T10:30:00Z&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>도구 정의 예시:</strong></p><div class="language-python line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="py" style="--vp-collapsed-lines:20;"><pre><code class="language-python"><span class="line">web_search_tool <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;web_search&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;인터넷에서 최신 정보를 검색합니다. 벡터 저장소나 지식 그래프에 없는 최신 정보가 필요한 경우 사용하세요.&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">&quot;parameters&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;properties&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string">&quot;query&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;검색할 질문이나 키워드&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;num_results&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;integer&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;반환할 결과 수 (기본값: 5)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;default&quot;</span><span class="token punctuation">:</span> <span class="token number">5</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;time_range&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;enum&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;past_hour&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;past_day&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;past_week&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;past_month&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;past_year&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;all_time&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;시간 범위 필터&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">&quot;language&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string">&quot;type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;검색 언어 (기본값: ko)&quot;</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string">&quot;default&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ko&quot;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&quot;required&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;query&quot;</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="복합-질문을-해결하는-에이전트의-사고-과정-분석" tabindex="-1"><a class="header-anchor" href="#복합-질문을-해결하는-에이전트의-사고-과정-분석"><span>복합 질문을 해결하는 에이전트의 사고 과정 분석</span></a></h3><p>복합 질문을 해결하는 에이전트의 사고 과정을 분석해보자:</p><p><strong>예시 질문:</strong><br> &quot;마리 퀴리의 남편이 발견한 원소와 오늘 날씨를 알려주세요.&quot;</p><p><strong>에이전트의 사고 과정:</strong></p>`,52),r(f,{code:`eJx9kL1KA0EQx/s8xTxAUkSwSSGY7w9LuyOFCGIhCCJYJMJh1qBJ0ATvMJBbiRI1whUxudMIeaKd2XdwbzdB02SbHWZ+/5n5z9HJ6cXh8cHZOexnY6DerkXvN+jPAb8YMV6FRGIH0rW/pHSDS02mdSmz4pMpQBW9+SDtQH3E+4BXY3k3Jx4ATjwx9aXrAQ261OxU/7XIrlpspYD6I2xFwiE5YwNlNJSr0dDFWQBKTK0RiOlEJcwmWU3kNxC5iKiLwBYzBmZaHQpqrk1tDuJ7jk996TDAeyZC38zNaw2FHrWHYFrXoWjR4Ee1tqlxu0YX9A4lSzoLeuzia7A8w9L50nYKpNPBZw9bLA7IF/jQNfKilpetNf/RRXvEO3FIbqtZhixpsmIpe2K2ANkMpfthSmVT0nFFx3tWtP/LNRDvYTsEanBin9XYL90a8xI=`}),s[14]||=n(`<p><strong>상세 사고 과정:</strong></p><p><strong>1단계: 질문 분석</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Thought: 이 질문은 두 가지 다른 정보를 요청하고 있습니다.</span>
<span class="line">1. 마리 퀴리의 남편이 발견한 원소 (관계 질문)</span>
<span class="line">2. 오늘 날씨 (최신 정보)</span>
<span class="line"></span>
<span class="line">각각 다른 도구가 필요할 것 같습니다.</span>
<span class="line"></span></code></pre></div><p><strong>2단계: 질문 분해 및 도구 선택</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Thought: 질문을 두 개로 분해하겠습니다.</span>
<span class="line"></span>
<span class="line">질문 1: &quot;마리 퀴리의 남편이 발견한 원소&quot;</span>
<span class="line">- 이것은 복잡한 관계 질문입니다.</span>
<span class="line">- 지식 그래프 도구를 사용하여 관계를 탐색해야 합니다.</span>
<span class="line"></span>
<span class="line">질문 2: &quot;오늘 날씨&quot;</span>
<span class="line">- 이것은 최신 정보가 필요한 질문입니다.</span>
<span class="line">- 웹 검색 도구를 사용해야 합니다.</span>
<span class="line"></span></code></pre></div><p><strong>3단계: 도구 실행</strong></p><p><strong>도구 1: knowledge_graph_tool</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Action: knowledge_graph_tool</span>
<span class="line">Input: {</span>
<span class="line">    &quot;operation&quot;: &quot;find_path&quot;,</span>
<span class="line">    &quot;start_node&quot;: &quot;마리 퀴리&quot;,</span>
<span class="line">    &quot;end_node&quot;: &quot;원소&quot;,</span>
<span class="line">    &quot;max_hops&quot;: 3</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">Observation: </span>
<span class="line">- 마리 퀴리 → married_to → 피에르 퀴리</span>
<span class="line">- 피에르 퀴리 → discovered → 플로늄</span>
<span class="line">- 피에르 퀴리 → discovered → 라듐</span>
<span class="line"></span>
<span class="line">결과: 피에르 퀴리가 발견한 원소는 플로늄과 라듐입니다.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>도구 2: web_search_tool</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Action: web_search_tool</span>
<span class="line">Input: {</span>
<span class="line">    &quot;query&quot;: &quot;오늘 날씨&quot;,</span>
<span class="line">    &quot;num_results&quot;: 3</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">Observation:</span>
<span class="line">- 오늘 날씨: 맑음</span>
<span class="line">- 기온: 15도</span>
<span class="line">- 습도: 60%</span>
<span class="line">- 출처: 기상청</span>
<span class="line"></span>
<span class="line">결과: 오늘 날씨는 맑고 기온은 15도입니다.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4단계: 결과 통합</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Thought: 두 질문에 대한 답변을 모두 얻었습니다.</span>
<span class="line">이제 이를 통합하여 최종 응답을 생성하겠습니다.</span>
<span class="line"></span>
<span class="line">결과 1: 마리 퀴리의 남편 피에르 퀴리가 발견한 원소는 플로늄과 라듐입니다.</span>
<span class="line">결과 2: 오늘 날씨는 맑고 기온은 15도입니다.</span>
<span class="line"></span></code></pre></div><p><strong>5단계: 최종 응답 생성</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">Final Answer: </span>
<span class="line">&quot;마리 퀴리의 남편 피에르 퀴리가 발견한 원소는 플로늄과 라듐입니다. </span>
<span class="line">이들은 1898년에 공동으로 발견했습니다.</span>
<span class="line"></span>
<span class="line">오늘 날씨는 맑고 기온은 15도입니다.&quot;</span>
<span class="line"></span></code></pre></div><h3 id="장기-기억과-지식-그래프의-결합" tabindex="-1"><a class="header-anchor" href="#장기-기억과-지식-그래프의-결합"><span>장기 기억과 지식 그래프의 결합</span></a></h3><p><strong>선순환 구조의 개념:</strong></p><p>지식 그래프를 <strong>동적으로 업데이트하도록 설계하면 선순환 구조를 만들 수 있다</strong>. 이는 에이전트가 새로운 지식을 학습하고 축적하여 점진적으로 더 똑똑해지는 구조이다.</p><p><strong>선순환 구조의 3단계:</strong></p>`,18),r(f,{code:`eJxLy8kvT85ILCpR8AniUgACx2hDPYVXOza8WbhF4c3yhjfdcxXezpzzZtbKWAVdXTsFp2gjPYU3M3e83tYAl26e8Ka5Mxas2wmsyDnaGKgIIvtq+47X82a8ndKi8GZ66+veDW/mbnnbtQOi2hms2pELAIH1O3c=`}),s[15]||=n(`<h4 id="_1단계-기존-지식-그래프와-벡터-db-활용" tabindex="-1"><a class="header-anchor" href="#_1단계-기존-지식-그래프와-벡터-db-활용"><span>1단계: 기존 지식 그래프와 벡터 DB 활용</span></a></h4><p><strong>목적:</strong><br> 에이전트는 먼저 기존에 구축된 지식 그래프와 벡터 데이터베이스를 활용하여 질문에 답변을 시도한다.</p><p><strong>프로세스:</strong></p><ol><li>질문 분석</li><li>지식 그래프에서 관련 노드 및 관계 검색</li><li>벡터 DB에서 관련 문서 검색</li><li>검색된 정보를 바탕으로 답변 생성</li></ol><p><strong>예시:</strong></p><div class="language-text" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;마리 퀴리의 남편은?&quot;</span>
<span class="line"></span>
<span class="line">[1단계: 기존 지식 활용]</span>
<span class="line">- 지식 그래프 검색: 마리 퀴리 → married_to → 피에르 퀴리</span>
<span class="line">- 벡터 DB 검색: 관련 문서 검색</span>
<span class="line">- 답변: &quot;마리 퀴리의 남편은 피에르 퀴리입니다.&quot;</span>
<span class="line"></span></code></pre></div><h4 id="_2단계-내부-지식으로-해결할-수-없는-문제는-웹-검색-등-외부-도구를-통해-지식-탐색" tabindex="-1"><a class="header-anchor" href="#_2단계-내부-지식으로-해결할-수-없는-문제는-웹-검색-등-외부-도구를-통해-지식-탐색"><span>2단계: 내부 지식으로 해결할 수 없는 문제는 웹 검색 등 외부 도구를 통해 지식 탐색</span></a></h4><p><strong>목적:</strong><br> 기존 지식 그래프와 벡터 DB에 정보가 없는 경우, 외부 도구(웹 검색 등)를 통해 새로운 지식을 탐색한다.</p><p><strong>프로세스:</strong></p><ol><li>기존 지식으로 답변 시도</li><li>답변 불완전 또는 정보 부족 감지</li><li>웹 검색 등 외부 도구 활용</li><li>새로운 정보 획득</li></ol><p><strong>예시:</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">질문: &quot;2024년 최신 AI 기술 동향은?&quot;</span>
<span class="line"></span>
<span class="line">[1단계: 기존 지식 활용]</span>
<span class="line">- 지식 그래프 검색: 2024년 정보 없음</span>
<span class="line">- 벡터 DB 검색: 오래된 정보만 있음</span>
<span class="line">- 결과: 정보 부족</span>
<span class="line"></span>
<span class="line">[2단계: 외부 지식 탐색]</span>
<span class="line">- 웹 검색: &quot;2024년 AI 기술 동향&quot;</span>
<span class="line">- 결과: 최신 정보 획득</span>
<span class="line">  - 생성형 AI 확산</span>
<span class="line">  - 멀티모달 AI 발전</span>
<span class="line">  - 에이전트 시스템 발전</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3단계-탐색을-통해-얻은-새로운-사실을-지식-그래프에-트리플-형태로-추가하여-장기-기억을-강화하여-지식-축적" tabindex="-1"><a class="header-anchor" href="#_3단계-탐색을-통해-얻은-새로운-사실을-지식-그래프에-트리플-형태로-추가하여-장기-기억을-강화하여-지식-축적"><span>3단계: 탐색을 통해 얻은 새로운 사실을 지식 그래프에 트리플 형태로 추가하여 장기 기억을 강화하여 지식 축적</span></a></h4><p><strong>목적:</strong><br> 외부에서 획득한 새로운 지식을 지식 그래프에 추가하여 장기 기억을 강화하고 지식을 축적한다.</p><p><strong>프로세스:</strong></p><ol><li>새로운 정보에서 개체와 관계 추출</li><li>트리플 형태로 변환 (주어-술어-목적어)</li><li>지식 그래프에 추가</li><li>벡터 DB에도 문서 추가</li></ol><p><strong>예시:</strong></p><div class="language-text line-numbers-mode has-collapsed-lines collapsed" data-highlighter="prismjs" data-ext="text" style="--vp-collapsed-lines:20;"><pre><code class="language-text"><span class="line">[새로운 정보]</span>
<span class="line">&quot;2024년 1월, OpenAI는 GPT-4 Turbo를 발표했습니다.&quot;</span>
<span class="line"></span>
<span class="line">[트리플 추출]</span>
<span class="line">- 주어: OpenAI</span>
<span class="line">- 술어: 발표</span>
<span class="line">- 목적어: GPT-4 Turbo</span>
<span class="line">- 날짜: 2024-01</span>
<span class="line"></span>
<span class="line">[지식 그래프 업데이트]</span>
<span class="line">노드 추가:</span>
<span class="line">- OpenAI (Company)</span>
<span class="line">- GPT-4 Turbo (Product)</span>
<span class="line"></span>
<span class="line">엣지 추가:</span>
<span class="line">- OpenAI → announced → GPT-4 Turbo</span>
<span class="line">- 속성: {&quot;date&quot;: &quot;2024-01&quot;}</span>
<span class="line"></span>
<span class="line">[벡터 DB 업데이트]</span>
<span class="line">- 관련 문서를 벡터 DB에 추가</span>
<span class="line">- 임베딩 생성 및 저장</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p><strong>선순환 구조의 전체 흐름:</strong></p>`,19),r(f,{code:`eJx1ks1Kw0AQx+99inmBvoJim3639uJt6UEE8SAIIniwQrApRGux0lTbmhQrflDIIf1IjOATZSbv4HY30hTtHvf3m/kvM3t4fHJ+cLR/egZ7SgL42WF0ZdNwQqMO0IeOtl+DZHILUizwHRov+KVKLQuCTx9H/dDQIJip1LiuieqUcNMX9NzDOXe9CXra9qVg6SWrU1+vg7LejMxvHJuALRfnqmwUyT0NWzr1X+uQYTgbh5oDSmotMSMSs/8mZmOJ8YtV1xyjp6+oH2B3CjTw0VMB77TAtWVCTiTkGTV0/koa8hCZFQ7b2LWklBdSgUXTIc8gz5SoIFCRhTc+vtuhcQvUsEibSloUtPRbuBorPTax7ZC14HVSLQm1HBvEX6csnAqLE+yYmwetiIJdRq5JL00g655TiSoSxbKrjEZvfHWwXN+DC4HTCweGtKvymyR+AIFrFQM=`}),s[16]||=n(`<p><strong>선순환 구조의 장점:</strong></p><ol><li><strong>지속적 학습</strong>: 새로운 정보를 지속적으로 학습</li><li><strong>지식 축적</strong>: 시간이 지날수록 지식이 축적됨</li><li><strong>성능 향상</strong>: 더 많은 지식으로 더 나은 답변 생성</li><li><strong>자동화</strong>: 수동 업데이트 없이 자동으로 지식 업데이트</li></ol><p><strong>선순환 구조의 고려사항:</strong></p><ol><li><strong>품질 관리</strong>: 추가되는 지식의 품질 검증 필요</li><li><strong>중복 제거</strong>: 이미 존재하는 지식의 중복 추가 방지</li><li><strong>일관성 유지</strong>: 기존 지식과의 일관성 유지</li><li><strong>버전 관리</strong>: 지식 그래프의 버전 관리 필요</li></ol><hr><h2 id="참고-문헌" tabindex="-1"><a class="header-anchor" href="#참고-문헌"><span>참고 문헌</span></a></h2><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal, N., ... &amp; Riedel, S. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. Advances in Neural Information Processing Systems, 33, 9459-9474. <a href="https://arxiv.org/abs/2005.11401" target="_blank" rel="noopener noreferrer">arXiv 링크</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,8)])}var u=o(c,[[`render`,l]]);export{s as _pageData,u as default};