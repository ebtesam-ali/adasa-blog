import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faEye,
  faBullseye,
  faUsers,
  faNewspaper,
  faHeart,
  faAward,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  const stats = [
    { icon: faNewspaper, count: "+500", label: "مقالة وتدوينة" },
    { icon: faUsers, count: "+50k", label: "قارئ ومتردد شهرياً" },
    { icon: faCamera, count: "+120", label: "مصور محترف مشارك" },
    { icon: faAward, count: "100%", label: "محتوى عربي تعليمي" }
  ];

  const values = [
    {
      icon: faHeart,
      title: " الشغف بالفن",
      desc: "نؤمن بأن التصوير ليس مجرد التقاط صور، بل هو إحساس ورسالة تحكي قصصاً خفية."
    },
    {
      icon: faUsers,
      title: "مجتمع المصورين",
      desc: "نسعى لبناء بيئة داعمة ومبسطة تجمع بين المصورين المبتدئين والمحترفين لتبادل الخبرات."
    },
    {
      icon: faAward,
      title: "الجودة والأصالة",
      desc: "نحرص على تقديم مقالات وتحليلات تقنية وتطبيقية دقيقة لمساعدة كل مصور على تطوير مهاراته."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0c0c0e] bg-grid-pattern text-white selection:bg-[#f95700] selection:text-white pt-28 pb-16 relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-[#f95700]/10 blur-[140px] pointer-events-none rounded-full" />

      <section className="relative max-w-7xl mx-auto px-6 mb-16 text-center z-10">
        <div className="inline-flex items-center gap-2 bg-[#121214] border border-neutral-800 px-4 py-2 rounded-full text-xs text-[#f95700] mb-6 font-semibold">
          <FontAwesomeIcon icon={faCamera} />
          عن منصة عدسة
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">
          عالم التصوير الفوتوغرافي بين يديك
        </h1>

        <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          منصة "عدسة" هي المساحة العربية الأولى المخصصة لكل عشاق التصوير الفوتوغرافي؛ لتبسيط العلوم التقنية، وإبراز الجمال، ونقل تجارب المصورين برؤية فريدة.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-8 hover:border-[#f95700]/40 transition-all duration-300 relative overflow-hidden group shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-xl mb-6">
              <FontAwesomeIcon icon={faEye} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">رؤيتنا</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              أن نصبح المرجع العربي الأبرز والأسهل المتاح لمصوري البورتريه، الطبيعة، والشارع؛ لتمكينهم من الأدوات الفنية والمعرفة التقنية ليصنعوا بصمتهم الخاصة.
            </p>
          </div>

          <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-8 hover:border-[#f95700]/40 transition-all duration-300 relative overflow-hidden group shadow-xl hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-xl mb-6">
              <FontAwesomeIcon icon={faBullseye} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">رسالتنا</h2>
            <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
              تجريد معارف التصوير المعقدة وصياغتها في مقالات مبسطة ودلائل إرشادية وتطبيقات عمليّة تناسب الجميع، وتساعد الفنانين على رؤية العالم بزوايا غير تقليدية.
            </p>
          </div>

        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="bg-[#121214] border border-neutral-800/80 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-[#f95700] flex items-center justify-center text-lg shadow-md">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold text-white">{stat.count}</span>
                <span className="text-xs md:text-sm text-neutral-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">قيمنا الجوهرية</h2>
          <p className="text-neutral-400 text-xs md:text-sm">المبادئ التي تقودنا لتقديم أفضل محتوى</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <div key={idx} className="bg-[#18181b] border border-neutral-800/80 hover:border-[#f95700]/40 rounded-3xl p-8 flex flex-col items-start text-right transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="w-10 h-10 rounded-xl bg-[#f95700]/10 text-[#f95700] flex items-center justify-center text-lg mb-6 shadow-md">
                <FontAwesomeIcon icon={val.icon} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
              <p className="text-neutral-400 text-xs md:text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-linear-to-r from-[#18181b] via-[#121214] to-[#18181b] border border-neutral-800/80 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">جاهز للبدء في رحلتك؟</h2>
          <p className="text-neutral-400 text-xs md:text-sm max-w-xl mb-8 leading-relaxed">
            استكشف مقالاتنا وتدويناتنا المتخصصة واستفد من الشروحات والنصائح التقنية مجاناً.
          </p>
          <Link
            to="/blog"
            className="bg-[#f95700] hover:bg-[#e04e00] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 text-sm flex items-center gap-2 shadow-lg shadow-[#f95700]/20 hover:-translate-y-0.5"
          >
            تصفح المدونة
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      </section>

    </div>
  );
}