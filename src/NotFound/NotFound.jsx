import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookOpen, faFrown } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] bg-grid-pattern text-white flex flex-col justify-between pt-24 pb-16 selection:bg-[#f95700] selection:text-white relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 bg-[#f95700]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center my-auto w-full relative z-10">
        <h1 className="text-8xl md:text-[140px] font-black text-[#f95700] tracking-wider -mb-5 md:-mb-10 select-none opacity-90 drop-shadow-[0_0_35px_rgba(249,87,0,0.2)]">
          404
        </h1>
        
        <div className="w-20 h-20 rounded-full bg-[#18181b] border border-neutral-800 text-[#f95700] flex items-center justify-center text-3xl mb-6 shadow-xl relative z-10">
          <FontAwesomeIcon icon={faFrown} />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          عفواً! الصفحة غير موجودة
        </h2>

        <p className="text-neutral-400 text-sm md:text-base max-w-md mb-8 leading-relaxed">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            to="/"
            className="bg-[#f95700] hover:bg-[#e04e00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#f95700]/20 flex items-center gap-2 text-sm hover:-translate-y-0.5"
          >
            <FontAwesomeIcon icon={faHome} /> الذهاب للرئيسية
          </Link>
          <Link
            to="/blog"
            className="bg-[#18181b] hover:bg-neutral-800 text-neutral-300 hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 border border-neutral-800 hover:border-neutral-700 flex items-center gap-2 text-sm"
          >
            <FontAwesomeIcon icon={faBookOpen} /> تصفح المقالات
          </Link>
        </div>

        <div className="w-full max-w-md border-t border-neutral-800/80 pt-8 flex flex-col items-center gap-3">
          <span className="text-xs text-neutral-500">قد تجد هذه مفيدة:</span>
          <div className="flex items-center gap-6 text-xs font-medium text-[#f95700]">
            <Link to="/blog" className="hover:underline">المدونة</Link>
            <Link to="/about" className="hover:underline">من نحن</Link>
            <Link to="/privacy" className="hover:underline">الخصوصية</Link>
          </div>
        </div>
      </div>
    </div>
  );
}