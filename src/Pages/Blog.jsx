import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import data from "../data/posts.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faClock, faArrowLeft, faBookOpen, faList, faGrip, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Blog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "جميع المقالات";
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const categories = ["جميع المقالات", ...data.categories.map((c) => c.name)];

  const handleCategoryChange = (cat) => {
    setCurrentPage(1);
    if (cat === "جميع المقالات") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", cat);
    }
    setSearchParams(searchParams);
  };

  const filteredPosts = useMemo(() => {
    return data.posts.filter((post) => {
      const matchesCategory = selectedCategory === "جميع المقالات" || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen bg-[#0c0c0e] bg-grid-pattern text-white pt-28 pb-20 selection:bg-[#f95700] selection:text-white relative overflow-hidden" dir="rtl">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-[#f95700]/10 blur-[140px] pointer-events-none rounded-full" />

      <section className="bg-grid-pattern bg-grid-sizing mx-auto px-6 py-12 flex flex-col items-center text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-[#18181b] border border-neutral-800 text-neutral-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-[#f95700] inline-block"></span> مدونتنا
        </span>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mb-4">
          استكشف <span className="text-[#f95700]">مقالاتنا</span>
        </h1>
        
        <p className="text-neutral-400 text-base md:text-lg max-w-2xl leading-relaxed">
          اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#121214] border border-neutral-800/80 p-4 rounded-3xl shadow-xl">
          <div className="relative w-full lg:w-80">
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-500">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-[#18181b] border border-neutral-800 rounded-full pr-11 pl-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#f95700] transition-colors"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#f95700] text-white shadow-lg shadow-[#f95700]/20"
                    : "bg-[#18181b] text-neutral-300 hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-8 flex items-center justify-between relative z-10">
        <span className="text-neutral-400 text-sm font-medium">
          عرض {filteredPosts.length} مقالات
        </span>
        <div className="flex items-center gap-2 bg-[#18181b] border border-neutral-800 p-1.5 rounded-xl">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded-lg text-sm transition-colors ${viewMode === "list" ? "bg-[#f95700] text-white" : "text-neutral-400 hover:text-white"}`}
            aria-label="عرض كقائمة"
          >
            <FontAwesomeIcon icon={faList} />
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 rounded-lg text-sm transition-colors ${viewMode === "grid" ? "bg-[#f95700] text-white" : "text-neutral-400 hover:text-white"}`}
            aria-label="عرض كشبكة"
          >
            <FontAwesomeIcon icon={faGrip} />
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        {currentPosts.length === 0 ? (
          <div className="text-center py-20 bg-[#18181b] border border-neutral-800 rounded-3xl">
            <h3 className="text-xl font-bold text-white mb-2">لا توجد مقالات مطابقة لبحثك</h3>
            <p className="text-neutral-400 text-sm">جرب البحث بكلمات أخرى أو تغيير التصنيف.</p>
          </div>
        ) : (
          <div className={`grid gap-8 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-[#18181b] border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-[#f95700]/50 transition-all duration-300 flex flex-col group shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f95700]/5"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faClock} /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#f95700] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm mb-6 line-clamp-2 grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800/80 mt-auto">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-9 h-9 rounded-full object-cover border border-neutral-700"
                      />
                      <div>
                        <h4 className="text-xs font-bold text-white">{post.author.name}</h4>
                        <span className="text-[10px] text-neutral-400">{post.author.role}</span>
                      </div>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="w-9 h-9 rounded-full bg-[#212124] hover:bg-[#f95700] text-neutral-300 hover:text-white flex items-center justify-center transition-all border border-neutral-700/50"
                      aria-label="اقرأ المقال"
                    >
                      <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {totalPages > 1 && (
        <section className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-2 relative z-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 rounded-xl font-bold text-sm transition-all ${
                currentPage === page
                  ? "bg-[#f95700] text-white shadow-lg shadow-[#f95700]/20"
                  : "bg-[#18181b] border border-neutral-800 text-neutral-300 hover:bg-neutral-800"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-xl bg-[#18181b] border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-all"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </section>
      )}
    </div>
  );
}