import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChevronLeft,
  faCalendar,
  faClock,
  faList,
  faCamera,
  faEnvelope,
  faTag,
  faShareNodes,
  faLink,
  faImage,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedinIn,
  faXTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function BlogDetails() {
  const { id } = useParams();
  const post = data.posts.find((p) => p.id.toString() === id) || data.posts[0];

  const sections = [
    { id: "sec-1", title: "التواصل مع الموضوع" },
    { id: "sec-2", title: "اختيار العدسة المناسبة" },
    { id: "sec-3", title: "الإضاءة الطبيعية" },
    { id: "sec-4", title: "التركيز على العيون" },
    { id: "sec-5", title: "الخلفية والتكوين" },
    { id: "sec-6", title: "الخلاصة" }
  ];

  const relatedPosts = data.posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white selection:bg-[#f95700] selection:text-white" dir="rtl">
      
      <div className="relative w-full min-h-140 flex flex-col justify-between p-6 md:p-12 border-b border-neutral-800 overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover filter brightness-[0.25] scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0c0c0e]/80 via-transparent to-[#0c0c0e]"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full flex items-center justify-start mt-14">
          <nav className="inline-flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-sm border border-white/15 shadow-xl">
            <Link className="text-white/70 hover:text-white transition-colors flex items-center" to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <FontAwesomeIcon icon={faChevronLeft} className="text-white/30 text-xs" />
            <Link className="text-white/70 hover:text-white transition-colors" to="/blog">
              المدونة
            </Link>
            <FontAwesomeIcon icon={faChevronLeft} className="text-white/30 text-xs" />
            <span className="text-[#f95700] font-medium truncate max-w-50">{post.category}</span>
          </nav>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-start pb-6">
          <div className="flex items-center gap-4 text-xs text-neutral-300 mb-4">
            <span className="bg-[#f95700] text-white font-bold px-3.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faCalendar} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FontAwesomeIcon icon={faClock} /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-8 max-w-4xl text-right">
            {post.title}
          </h1>

          <div className="bg-[#18181b]/90 backdrop-blur-md border border-neutral-800 p-2.5 pl-6 rounded-2xl flex items-center gap-4 w-fit">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-xl object-cover border border-neutral-700"
            />
            <div className="text-right">
              <h3 className="text-sm font-bold text-white">{post.author.name}</h3>
              <span className="text-xs text-neutral-400">{post.author.role}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <aside className="lg:col-span-4 flex flex-col gap-6 order-2">
            <div className="flex flex-col gap-4 sticky top-28">
              <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-6">
                <div className="flex items-center gap-3 text-white font-bold text-lg mb-6 pb-4 border-b border-neutral-800">
                  <div className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                  محتويات المقال
                </div>

                <nav className="flex flex-col gap-3">
                  {sections.map((sec, idx) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center justify-between p-3 rounded-2xl text-neutral-400 hover:text-white hover:bg-[#18181b] transition-all text-sm group"
                    >
                      <span>{sec.title}</span>
                      <span className="w-6 h-6 rounded-lg bg-[#18181b] group-hover:bg-[#f95700] group-hover:text-white text-neutral-500 text-xs flex items-center justify-center font-bold transition-all">
                        {idx + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-6 grid grid-cols-2 gap-4">
                <div className="bg-[#18181b] p-4 rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-[#f95700] text-xl" />
                  <span className="text-sm font-bold text-white">{post.readTime}</span>
                  <span className="text-[11px] text-neutral-500">وقت القراءة</span>
                </div>
                <div className="bg-[#18181b] p-4 rounded-2xl border border-neutral-800/60 flex flex-col items-center text-center gap-2">
                  <FontAwesomeIcon icon={faCalendar} className="text-[#f95700] text-xl" />
                  <span className="text-sm font-bold text-white">{post.date}</span>
                  <span className="text-[11px] text-neutral-500">تاريخ النشر</span>
                </div>
              </div>

              <div className="bg-linear-to-br from-[#18181b] to-[#121214] border border-neutral-800/80 rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-[#f95700]/10 border border-[#f95700]/20 text-[#f95700] flex items-center justify-center text-2xl mb-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">لا تفوّت جديدنا</h3>
                <p className="text-neutral-400 text-xs mb-6 leading-relaxed">
                  اشترك للحصول على أحدث المقالات والنصائح حصرياً.
                </p>
                <Link
                  to="/blog"
                  className="w-full bg-[#f95700] hover:bg-[#e04e00] text-white font-bold py-3 rounded-full transition-all text-sm shadow-lg shadow-[#f95700]/20"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8 flex flex-col gap-10 order-1">
            
            <div className="bg-[#121214] border border-[#f95700]/20 rounded-2xl p-6 text-neutral-300 italic text-base md:text-lg leading-relaxed border-r-4 border-r-[#f95700]">
              "{post.excerpt}"
            </div>

            <div className="space-y-10 text-neutral-300 text-base md:text-lg leading-relaxed">
              <p>
                تصوير البورتريه هو فن التقاط جوهر الإنسان في صورة واحدة. ليس مجرد توثيق للملامح، بل كشف القصة خلف العيون.
              </p>

              <div id="sec-1" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  التواصل مع الموضوع
                </h2>
                <p className="text-neutral-400 text-base">
                  قبل أن تمسك الكاميرا، تحدث مع الشخص. اجعله يشعر بالراحة. الابتسامة الحقيقية والنظرة الطبيعية تأتي فقط عندما يثق بك الموضوع.
                </p>
              </div>

              <div id="sec-2" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  اختيار العدسة المناسبة
                </h2>
                <p className="text-neutral-400 text-base">
                  عدسات 85mm و 50mm هي الكلاسيكيات لتصوير البورتريه. توفر ضغطاً مثالياً للملامح وخلفية ضبابية جميلة.
                </p>
              </div>

              <div id="sec-3" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  الإضاءة الطبيعية
                </h2>
                <p className="text-neutral-400 text-base">
                  النافذة الكبيرة هي أفضل صديق لمصور البورتريه. ضع الموضوع بزاوية 45 درجة من النافذة للحصول على إضاءة ثلاثية الأبعاد رائعة.
                </p>
              </div>

              <div id="sec-4" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  التركيز على العيون
                </h2>
                <p className="text-neutral-400 text-base">
                  العيون هي نافذة الروح. تأكد دائماً من أن العيون حادة وممركزة. استخدم نقطة تركيز واحدة على العين الأقرب للكاميرا.
                </p>
              </div>

              <div id="sec-5" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  الخلفية والتكوين
                </h2>
                <p className="text-neutral-400 text-base">
                  اختر خلفية بسيطة لا تشتت الانتباه. استخدم قاعدة الأثلاث لوضع العيون في النقاط القوية.
                </p>
              </div>

              <div id="sec-6" className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="w-9 h-9 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-base">
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                  الخلاصة
                </h2>
                <p className="text-neutral-400 text-base">
                  البورتريه الناجح يحكي قصة. عندما تجمع بين التقنية والتواصل الإنساني، تخلق صوراً خالدة.
                </p>
              </div>
            </div>

            <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-6 mt-6">
              <div className="flex items-center gap-3 text-white font-bold text-base mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-sm">
                  <FontAwesomeIcon icon={faTag} />
                </div>
                الوسوم
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags ? post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs px-4 py-2 rounded-xl">
                    #{tag}
                  </span>
                )) : (
                  <>
                    <span className="bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs px-4 py-2 rounded-xl">#بورتريه</span>
                    <span className="bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs px-4 py-2 rounded-xl">#تصوير_أشخاص</span>
                    <span className="bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs px-4 py-2 rounded-xl">#إضاءة_طبيعية</span>
                  </>
                )}
              </div>
            </div>

            <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-6 flex items-center justify-between">
              <div className="flex items-center gap-3 text-white font-bold text-base">
                <div className="w-8 h-8 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-sm">
                  <FontAwesomeIcon icon={faShareNodes} />
                </div>
                شارك المقال
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-all"
                  aria-label="نسخ الرابط"
                >
                  <FontAwesomeIcon icon={faLink} />
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-green-500 flex items-center justify-center transition-all"
                  aria-label="واتساب"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-blue-500 flex items-center justify-center transition-all"
                  aria-label="لينكد إن"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-white flex items-center justify-center transition-all"
                  aria-label="تويتر"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
            </div>

            <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-8 flex items-start gap-6">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-2xl object-cover border border-neutral-700 shrink-0"
              />
              <div>
                <span className="text-xs text-[#f95700] font-bold block mb-1">كاتب المقال</span>
                <h3 className="text-xl font-bold text-white mb-1">{post.author.name}</h3>
                <span className="text-xs text-neutral-400 block mb-3">{post.author.role}</span>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                </p>
              </div>
            </div>

          </main>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-neutral-800/80">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-lg">
              <FontAwesomeIcon icon={faImage} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">مقالات قد تعجبك</h2>
              <p className="text-xs text-neutral-400">استكشف المزيد من المحتوى المميز</p>
            </div>
          </div>
          <Link
            to="/blog"
            className="text-[#f95700] hover:text-[#e04e00] text-sm font-bold flex items-center gap-2 transition-colors"
          >
            عرض الكل <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.id}`}
              className="bg-[#18181b] border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-[#f95700]/50 transition-all duration-300 group flex flex-col shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f95700]/5"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-[#f95700] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {rel.category}
                </span>
              </div>
              <div className="p-6 flex flex-col justify-between grow">
                <h3 className="text-base font-bold text-white group-hover:text-[#f95700] transition-colors line-clamp-2 leading-snug mb-4">
                  {rel.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-800/60">
                  <span>{rel.author.name}</span>
                  <span>{rel.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}