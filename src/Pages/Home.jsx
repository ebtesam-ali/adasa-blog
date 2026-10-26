import { Link } from "react-router-dom";
import data from "../data/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faCompass, faPenNib, faFolder, faUsers, faFileLines, faStar, faClock, faLightbulb, faUser, faMountain, faSliders, faCamera, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featuredPosts = data.posts.filter((post) => post.featured);

  const getCategoryIcon = (categoryName) => {
    switch (categoryName) {
      case "إضاءة":
        return faLightbulb;
      case "بورتريه":
        return faUser;
      case "مناظر طبيعية":
        return faMountain;
      case "تقنيات":
        return faSliders;
      default:
        return faCamera;
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0c0e] bg-grid-pattern text-white pt-24 pb-16 selection:bg-[#f95700] selection:text-white relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-[#f95700]/10 blur-[140px] pointer-events-none rounded-full" />

      <section className="bg-grid-pattern bg-grid-sizing mx-auto px-6 py-16 md:py-20 flex flex-col items-center text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#f95700] inline-block"></span> مرحباً بك في عدسة
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mb-6">
          اكتشف فن <span className="text-[#f95700]">التصوير الفوتوغرافي</span>
        </h1>
        
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            to="/blog"
            className="bg-[#f95700] hover:bg-[#e04e00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#f95700]/20 hover:-translate-y-0.5 flex items-center gap-2"
          >
            استكشف المقالات <FontAwesomeIcon icon={faArrowRight} />
          </Link>
          <Link
            to="/about"
            className="bg-[#18181b] hover:bg-neutral-800 text-neutral-300 hover:text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 border border-neutral-800 hover:border-neutral-700 flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faCompass} /> اعرف المزيد
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <div className="bg-[#18181b]/80 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-lg">
            <span className="text-[#f95700] text-xl">
              <FontAwesomeIcon icon={faFileLines} />
            </span>
            <span className="text-2xl font-extrabold text-white">50+</span>
            <span className="text-xs text-neutral-400">مقالة</span>
          </div>

          <div className="bg-[#18181b]/80 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-lg">
            <span className="text-[#f95700] text-xl">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="text-2xl font-extrabold text-white">10 ألف+</span>
            <span className="text-xs text-neutral-400">قارئ</span>
          </div>

          <div className="bg-[#18181b]/80 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-lg">
            <span className="text-[#f95700] text-xl">
              <FontAwesomeIcon icon={faFolder} />
            </span>
            <span className="text-2xl font-extrabold text-white">4</span>
            <span className="text-xs text-neutral-400">تصنيفات</span>
          </div>

          <div className="bg-[#18181b]/80 backdrop-blur-sm border border-neutral-800/80 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 shadow-lg">
            <span className="text-[#f95700] text-xl">
              <FontAwesomeIcon icon={faPenNib} />
            </span>
            <span className="text-2xl font-extrabold text-white">6</span>
            <span className="text-xs text-neutral-400">كاتب</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f95700] inline-block"></span> مميز
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              مقالات مختارة
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>
          <Link
            to="/blog"
            className="bg-[#f95700] hover:bg-[#e04e00] text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 w-fit shadow-md shadow-[#f95700]/20 hover:-translate-y-0.5"
          >
            عرض الكل <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>

        <div className="flex flex-col gap-8">
          {featuredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#18181b] border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-[#f95700]/50 transition-all duration-300 flex flex-col md:flex-row-reverse shadow-xl group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f95700]/5"
            >
              <div className="p-8 md:p-10 flex flex-col justify-between grow">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-4">
                    <span className="bg-[#f95700]/10 text-[#f95700] border border-[#f95700]/20 px-3 py-1 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#f95700] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-neutral-800/80">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
                      <span className="text-xs text-neutral-400">{post.date}</span>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#f95700] hover:text-[#e04e00] transition-colors"
                  >
                    اقرأ المقال <FontAwesomeIcon icon={faArrowLeft} />
                  </Link>
                </div>
              </div>

              <div className="md:w-[45%] relative overflow-hidden h-64 md:h-auto min-h-70">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/10 flex items-center gap-1">
                  <FontAwesomeIcon icon={faStar} className="text-[#f95700]" /> مميز
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f95700] inline-block"></span> التصنيفات
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            استكشف حسب الموضوع
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.categories.map((cat, index) => (
            <Link
              to={`/blog?category=${cat.name}`}
              key={index}
              className="bg-[#18181b] border border-neutral-800/80 hover:border-[#f95700]/50 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 group shadow-lg hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f95700]/5"
            >
              <div className="w-12 h-12 rounded-xl bg-[#f95700]/10 border border-[#f95700]/20 text-[#f95700] flex items-center justify-center text-xl mb-4 group-hover:bg-[#f95700] group-hover:text-white transition-all duration-300">
                <FontAwesomeIcon icon={getCategoryIcon(cat.name)} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#f95700] transition-colors">
                {cat.name}
              </h3>
              <span className="text-xs text-neutral-400">
                {cat.count} مقالة
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#f95700] inline-block"></span> الأحدث
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
              أحدث المقالات
            </h2>
            <p className="text-neutral-400 text-sm md:text-base">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[#f95700] hover:text-[#e04e00] transition-colors font-medium text-sm"
          >
            <span>عرض جميع المقالات</span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="bg-[#18181b] border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-[#f95700]/50 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f95700]/5"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#f95700] transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              
              <div className="px-5 pb-5 pt-3 border-t border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-9 h-9 rounded-full object-cover border border-neutral-700"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-white">{post.author.name}</h4>
                    <p className="text-[10px] text-neutral-400">{post.author.role || "كاتب"}</p>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#f95700] text-white flex items-center justify-center transition-colors shadow-md"
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 mb-12 relative z-10">
        <div className="bg-[#18181b] border border-neutral-800/80 rounded-3xl p-8 md:p-16 flex flex-col items-center text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#f95700]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="w-14 h-14 rounded-2xl bg-[#f95700] text-white flex items-center justify-center text-2xl mb-6 shadow-lg shadow-[#f95700]/30">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3">
            اشترك في نشرتنا الإخبارية
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-md mb-8">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-6">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="bg-[#0c0c0e] border border-neutral-800 text-white placeholder-neutral-500 px-5 py-3.5 rounded-full focus:outline-none focus:border-[#f95700] text-sm grow text-right shadow-inner"
            />
            <button
              type="submit"
              className="bg-[#f95700] hover:bg-[#e04e00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#f95700]/20 text-sm shrink-0 hover:-translate-y-0.5"
            >
              اشترك الآن
            </button>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-400">
            <div className="flex -space-x-2 space-x-reverse">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="user" className="w-6 h-6 rounded-full border border-neutral-800 object-cover" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="user" className="w-6 h-6 rounded-full border border-neutral-800 object-cover" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" alt="user" className="w-6 h-6 rounded-full border border-neutral-800 object-cover" />
            </div>
            <span>انضم لـ 10,000+ مصور</span>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </section>

    </div>
  );
}