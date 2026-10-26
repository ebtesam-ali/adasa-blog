import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <>
        <header className="bg-[#18181b]/90 backdrop-blur-md border-b fixed top-0 right-0 left-0 border-neutral-800 text-white select-none z-50 shadow-lg" dir="rtl">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center text-[#f59e0b] text-3xl">
                        <FontAwesomeIcon icon={faCameraRetro} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-wide text-white leading-tight">عـدسـة</span>
                        <span className="text-xs text-[#d97706] font-medium leading-normal">عالم التصوير الفوتوغرافي</span>
                    </div>
                </Link>

                <nav className="hidden md:flex items-center bg-[#212124] border border-neutral-700/60 rounded-full p-1.5 gap-1">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                        `px-5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                            isActive
                            ? "bg-[#f95700] text-white shadow-sm"
                            : "text-neutral-300 hover:text-white"
                        }`
                        }
                    >
                        الرئيسية
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                        `px-5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                            isActive
                            ? "bg-[#f95700] text-white shadow-sm"
                            : "text-neutral-300 hover:text-white"
                        }`
                        }
                    >
                        المدونة
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                        `px-5 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                            isActive
                            ? "bg-[#f95700] text-white shadow-sm"
                            : "text-neutral-300 hover:text-white"
                        }`
                        }
                    >
                        من نحن
                    </NavLink>
                </nav>

                <div className="flex items-center gap-5">
                <button type="button" aria-label="بحث" className="text-neutral-400 hover:text-white transition-colors p-1 text-lg">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>

                <Link to="/blog" className="bg-[#f95700] hover:bg-[#e04e00] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200 shadow-md hover:-translate-y-0.5">
                    ابدأ القراءة
                </Link>
                </div>

            </div>
        </header>
    </>
  )
}