export default function CampaignD() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="relative text-white text-center overflow-hidden">
        <img src="/campaign-d/배너.png" alt="YADAH 배너" className="w-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-70">Influencer Campaign Guide</p>
          <h1 className="text-3xl font-light tracking-widest">YADAH</h1>
          <p className="mt-2 text-sm opacity-80 tracking-wide">야다</p>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-16">

        {/* 1. About Brand */}
        <section>
          <p className="text-xs tracking-[0.25em] uppercase text-[#2d5a3d] mb-1">01</p>
          <h2 className="text-xl font-semibold mb-4">About Brand</h2>
          <p className="text-sm leading-relaxed text-gray-600 mb-6">
            브랜드명 <strong>야다(YADAH)</strong>는 히브리어로 몸과 마음을 다해 &lsquo;알다, 경험하다&rsquo;라는 뜻과 함께,
            소비자가 자신의 피부를 위해 &lsquo;지혜를 깨우치다&rsquo;라는 의미를 담고 있는 비건 스킨케어 브랜드입니다.
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="text-[#2d5a3d] text-lg mt-0.5">✦</span>
                <div>
                  <p className="font-semibold text-sm mb-1">신뢰할 수 있는 스킨 퍼스트 포뮬러</p>
                  <p className="text-xs text-gray-500 leading-relaxed">저자극·순한 데일리 포뮬러</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="text-[#2d5a3d] text-lg mt-0.5">✦</span>
                <div>
                  <p className="font-semibold text-sm mb-1">매일의 편안함을 위한 설계</p>
                  <p className="text-xs text-gray-500 leading-relaxed">텍스처와 효능의 최적 밸런스 · 피부에 부담 없는 일상 사용 특화</p>
                </div>
              </div>
            </div>
            <div className="border border-gray-100 rounded-lg p-5 bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="text-[#2d5a3d] text-lg mt-0.5">✦</span>
                <div>
                  <p className="font-semibold text-sm mb-1">글로벌 도달력과 시장 존재감</p>
                  <p className="text-xs text-gray-500 leading-relaxed">30개국+ · 1,300개+ 유통 채널 보유</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-400">
            <a href="https://yadah.co.kr" target="_blank" rel="noopener noreferrer" className="hover:text-[#2d5a3d] transition-colors">
              yadah.co.kr →
            </a>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* 2. Campaign Info */}
        <section>
          <p className="text-xs tracking-[0.25em] uppercase text-[#2d5a3d] mb-1">02</p>
          <h2 className="text-xl font-semibold mb-6">Campaign Info</h2>

          <div className="space-y-0 text-sm">
            <div className="flex gap-4 py-3 border-b border-gray-100">
              <span className="w-36 text-gray-400 shrink-0">형식</span>
              <span className="text-gray-800">릴스 (20초 이상)</span>
            </div>
            <div className="flex gap-4 py-3 border-b border-gray-100">
              <span className="w-36 text-gray-400 shrink-0">공동작업자</span>
              <span className="text-gray-800">필수</span>
            </div>
            <div className="flex gap-4 py-3 border-b border-gray-100">
              <span className="w-36 text-gray-400 shrink-0">2차 활용</span>
              <span className="text-gray-800">동의</span>
            </div>
            <div className="flex gap-4 py-3 border-b border-gray-100">
              <span className="w-36 text-gray-400 shrink-0">업로드 유지기간</span>
              <span className="text-gray-800">3개월</span>
            </div>
            <div className="flex gap-4 py-3">
              <span className="w-36 text-gray-400 shrink-0">제공 제품</span>
              <div className="flex flex-col gap-3">
                <img src="/젤.png" alt="선인장 수딩젤" className="w-32 rounded-lg object-contain" />
                <a
                  href="https://yadah.co.kr/product/%EC%84%A0%EC%9D%B8%EC%9E%A5-%EC%88%98%EB%94%A9%EC%A0%A4-105g/420/category/374/display/1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d5a3d] hover:underline text-sm"
                >
                  선인장 수딩젤 →
                </a>
              </div>
            </div>
          </div>

          {/* 제품 정보 */}
          <div className="mt-8 rounded-xl border border-gray-100 overflow-hidden">
            <div className="bg-[#2d5a3d]/5 px-5 py-4 border-b border-gray-100">
              <p className="text-xs font-semibold text-[#2d5a3d] uppercase tracking-widest mb-1">Product Info</p>
              <p className="font-semibold text-sm text-gray-800">달아오른 피부에 수분을 채우는 선인장 진정젤</p>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">가볍고 투명한 젤 텍스처가 피부에 빠르게 흡수되어 열감·건조함·끈적임 고민 없이 산뜻하게 진정케어</p>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="flex gap-3 px-5 py-4">
                <span className="text-base mt-0.5">🌵</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-0.5">선인장 추출물 95%</p>
                  <p className="text-xs text-gray-500 leading-relaxed">미네랄·비타민이 풍부한 핵심 성분으로 건조하고 예민한 피부에 수분을 빠르게 공급해 편안하게 진정</p>
                </div>
              </div>
              <div className="flex gap-3 px-5 py-4">
                <span className="text-base mt-0.5">❄️</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-0.5">피부 쿨링 진정</p>
                  <p className="text-xs text-gray-500 leading-relaxed">햇빛·열감으로 달아오른 피부를 시원하게 진정 · 피부 온도 감소 테스트 완료</p>
                </div>
              </div>
              <div className="flex gap-3 px-5 py-4">
                <span className="text-base mt-0.5">💧</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-0.5">투명 워터젤 텍스처</p>
                  <p className="text-xs text-gray-500 leading-relaxed">끈적임 없이 산뜻하게 흡수되는 투명 젤 타입 · 여름철에도 가볍게 사용 가능</p>
                </div>
              </div>
              <div className="flex gap-3 px-5 py-4">
                <span className="text-base mt-0.5">🌿</span>
                <div>
                  <p className="text-xs font-semibold text-gray-700 mb-0.5">민감 피부 저자극 케어</p>
                  <p className="text-xs text-gray-500 leading-relaxed">EWG 그린등급 성분 · 비건 인증 · 저자극 테스트 완료 — 민감 피부도 부담 없이 사용 가능</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* 3. Content Guide */}
        <section>
          <p className="text-xs tracking-[0.25em] uppercase text-[#2d5a3d] mb-1">03</p>
          <h2 className="text-xl font-semibold mb-6">Content Guide</h2>

          {/* 영상 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span>🎬</span>
              <h3 className="font-semibold text-sm tracking-wide">영상</h3>
            </div>
            <p className="text-xs text-gray-500 mb-4">공감되는 컨셉을 선택 혹은 자유 제작해주세요.</p>

            <div className="space-y-3">
              <div className="rounded-lg border border-[#2d5a3d]/20 p-4 bg-[#2d5a3d]/5">
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 1 — 햇빛 진정 수딩젤</p>
                <p className="text-sm text-gray-700">[달아오른 피부 진정] 여름철 열감 케어 수딩젤</p>
              </div>
              <div className="rounded-lg border border-[#2d5a3d]/20 p-4 bg-[#2d5a3d]/5">
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 2 — 민감 피부 수딩젤</p>
                <p className="text-sm text-gray-700">[예민 피부도 안심] 자극 걱정 없는 순한 진정젤</p>
              </div>
              <div className="rounded-lg border border-[#2d5a3d]/20 p-4 bg-[#2d5a3d]/5">
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 3 — 속 보습 수딩젤</p>
                <p className="text-sm text-gray-700">[겉만 촉촉 NO] 속까지 수분 채우는 진정젤</p>
              </div>
            </div>
          </div>

          {/* 캡션 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span>✍️</span>
              <h3 className="font-semibold text-sm tracking-wide">캡션</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              브랜드 소개 및 위에서 선택한 컨셉에 대한 설명을 포함해주세요.
            </p>
          </div>

          {/* 추천사항 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span>💡</span>
              <h3 className="font-semibold text-sm tracking-wide">추천사항</h3>
            </div>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <span className="text-[#2d5a3d] font-bold shrink-0">✔</span>
                <span>자연광 촬영</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#2d5a3d] font-bold shrink-0">✔</span>
                <span>투명하고 탱글한 젤 텍스처 강조</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#2d5a3d] font-bold shrink-0">✔</span>
                <span>피부에 바르자마자 빠르게 흡수되는 장면</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#2d5a3d] font-bold shrink-0">✔</span>
                <span>얼굴+바디 멀티 사용 장면 강조</span>
              </div>
            </div>
          </div>

          {/* 해시태그 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-sm text-gray-600">#</span>
              <h3 className="font-semibold text-sm tracking-wide">필수 해시태그</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["#야다", "#yadah", "#수딩젤"].map((tag) => (
                <span
                  key={tag}
                  className="bg-[#2d5a3d]/10 text-[#2d5a3d] text-xs px-3 py-1.5 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 공동작업자 계정 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span>👤</span>
              <h3 className="font-semibold text-sm tracking-wide">공동작업자 계정</h3>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="text-[#2d5a3d] font-bold">✔</span>
              <span>@yadah.official</span>
            </div>
          </div>

          {/* 업로드 기간 준수 */}
          <div className="rounded-lg bg-amber-50 border border-amber-200 p-5">
            <div className="flex items-center gap-2 mb-3">
              <span>⚠️</span>
              <h3 className="font-semibold text-sm">업로드 기간 준수</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                <span>업로드 후 임의 삭제 시 향후 협업 제한</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                <span>기간 내 삭제가 필요한 경우 사전 협의 필수</span>
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-gray-100" />

      </div>

      <footer className="text-center py-8 text-xs text-gray-300 tracking-widest">
        YADAH © 2025
      </footer>
    </main>
  );
}
