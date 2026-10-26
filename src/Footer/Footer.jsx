import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faXTwitter, 
  faGithub, 
  faLinkedinIn, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0e] text-neutral-400 select-none pt-16 pb-8 border-t border-neutral-900 relative" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
          
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f95700] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-md">
                ع
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">عدسة</span>
            </Link>
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faXTwitter} className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 hover:border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faYoutube} className="text-sm" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-[#f95700] rounded-full inline-block"></span>
              <h4 className="text-white font-bold text-base">استكشف</h4>
            </div>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">المدونة</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">من نحن</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-[#f95700] rounded-full inline-block"></span>
              <h4 className="text-white font-bold text-base">التصنيفات</h4>
            </div>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link to="/blog?category=إضاءة" className="hover:text-white transition-colors">إضاءة</Link>
              </li>
              <li>
                <Link to="/blog?category=بورتريه" className="hover:text-white transition-colors">بورتريه</Link>
              </li>
              <li>
                <Link to="/blog?category=مناظر+طبيعية" className="hover:text-white transition-colors">مناظر طبيعية</Link>
              </li>
              <li>
                <Link to="/blog?category=تقنيات" className="hover:text-white transition-colors">تقنيات</Link>
              </li>
              <li>
                <Link to="/blog?category=معدات" className="hover:text-white transition-colors">معدات</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-0.5 bg-[#f95700] rounded-full inline-block"></span>
              <h4 className="text-white font-bold text-base">ابقى على اطلاع</h4>
            </div>
            <p className="text-sm text-neutral-400 mb-2">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 text-sm bg-[#18181b] border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-[#f95700] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#f95700] hover:bg-[#e04e00] text-white cursor-pointer text-sm font-bold py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5"
              >
                اشترك
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 عدسة. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-neutral-400 transition-colors">سياسة الخصوصية</Link>
            <Link to="/terms" className="hover:text-neutral-400 transition-colors">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}