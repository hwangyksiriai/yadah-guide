export default function CampaignB() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="relative text-white text-center overflow-hidden">
        <img src="/campaign-b/배너.png" alt="YADAH 배너" className="w-full object-cover" />
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
                <img src="/밤.png" alt="그린티 퓨어 클렌징 밤" className="w-32 rounded-lg object-contain" />
                <a
                  href="https://yadah.co.kr/product/%EA%B7%B8%EB%A6%B0%ED%8B%B0-%ED%93%A8%96%B4-%ED%81%B4%EB%A0%8C%EC%A7%95%EB%B0%A4-100ml/125/category/367/display/1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2d5a3d] hover:underline text-sm"
                >
                  그린티 퓨어 클렌징 밤 →
                </a>
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
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 1 — 마스카라 지우개</p>
                <p className="text-sm text-gray-700">[눈주위 번짐 NO] 자극 없는 속눈썹 살리는 메이크업 리무버</p>
              </div>
              <div className="rounded-lg border border-[#2d5a3d]/20 p-4 bg-[#2d5a3d]/5">
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 2 — 트러블 예방 클렌징</p>
                <p className="text-sm text-gray-700">[Clean Start, Stay Clean] 모공을 막지 않으면서 깨끗하게 세정</p>
              </div>
              <div className="rounded-lg border border-[#2d5a3d]/20 p-4 bg-[#2d5a3d]/5">
                <p className="text-xs font-semibold text-[#2d5a3d] mb-1.5">컨셉 3 — 원스텝 밤→거품 클렌징</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  [귀차니즘 있는 그대를 위해] 원터치 올인원 클렌징 밤<br />
                  한 번에 세안·보습·보호 — 귀찮아도 모공 관리는 포기하지 않아도 됩니다
                </p>
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
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="text-[#2d5a3d] font-bold">✔</span>
              <span>자연광 촬영</span>
            </div>
          </div>

          {/* 해시태그 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-bold text-sm text-gray-600">#</span>
              <h3 className="font-semibold text-sm tracking-wide">필수 해시태그</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["#야다", "#yadah", "#클렌징밤"].map((tag) => (
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
