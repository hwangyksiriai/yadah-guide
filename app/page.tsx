import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="bg-[#2d5a3d] text-white py-10 px-6 text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-2 opacity-70">Campaign Management</p>
        <h1 className="text-3xl font-light tracking-widest">YADAH</h1>
        <p className="mt-2 text-sm opacity-60 tracking-wide">인플루언서 캠페인 가이드 관리</p>
      </header>

      <div className="max-w-2xl mx-auto w-full px-6 py-12 flex-1">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">캠페인 선택</p>

        <div className="grid grid-cols-1 gap-5">
          {/* Campaign A */}
          <Link href="/campaign-a" className="group block bg-white rounded-xl border border-gray-200 p-7 hover:border-[#2d5a3d] hover:shadow-sm transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#2d5a3d] tracking-widest uppercase mb-2 font-medium">Campaign A</p>
                <h2 className="text-lg font-semibold mb-1">그린티 퓨어 클렌징 밤</h2>
                <p className="text-sm text-gray-400">릴스 · 공동작업자 필수 · 3개월 유지</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#2d5a3d] text-xl transition-colors">→</span>
            </div>
          </Link>

          {/* Campaign B */}
          <Link href="/campaign-b" className="group block bg-white rounded-xl border border-gray-200 p-7 hover:border-[#2d5a3d] hover:shadow-sm transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#2d5a3d] tracking-widest uppercase mb-2 font-medium">Campaign B</p>
                <h2 className="text-lg font-semibold mb-1">그린티 퓨어 클렌징 밤 (컨셉+자유 제작)</h2>
                <p className="text-sm text-gray-400">릴스 · 공동작업자 필수 · 3개월 유지</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#2d5a3d] text-xl transition-colors">→</span>
            </div>
          </Link>

          {/* Campaign C */}
          <Link href="/campaign-c" className="group block bg-white rounded-xl border border-gray-200 p-7 hover:border-[#2d5a3d] hover:shadow-sm transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#2d5a3d] tracking-widest uppercase mb-2 font-medium">Campaign C</p>
                <h2 className="text-lg font-semibold mb-1">선인장 수딩젤</h2>
                <p className="text-sm text-gray-400">릴스 · 공동작업자 필수 · 3개월 유지</p>
              </div>
              <span className="text-gray-300 group-hover:text-[#2d5a3d] text-xl transition-colors">→</span>
            </div>
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400 leading-relaxed">
            각 캠페인 페이지의 이미지는 <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">public/campaign-a/</code> · <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">public/campaign-b/</code> 폴더에서 관리합니다.
          </p>
        </div>
      </div>

      <footer className="text-center py-6 text-xs text-gray-300 tracking-widest">
        YADAH © 2025
      </footer>
    </main>
  );
}
