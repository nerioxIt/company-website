


import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
];

export const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = theme === "dark";

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full flex justify-center items-center py-6 `}>
      <div
        className={`flex items-center justify-between w-full max-w-5xl px-4 py-2 rounded-full shadow-lg`}
        style={{
          minHeight: 64,
          border: `3px solid ${isDark ? '#045294' : '#4ECDC4'}`,
          background: isDark ? '#07081a' : 'white',
        }}
      >
        {/* Logo */}
        <Link to="/" className={`flex items-center justify-center h-12 w-12  mr-2`}>
          <Logo className="h-8 w-8 text-white" />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 items-center justify-center">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`group relative px-3 py-2 mx-1 font-semibold transition-colors duration-200 ${isDark ? 'text-white hover:text-white' : 'text-black hover:text-black'} focus:outline-none`}
                style={{ fontSize: "1.1rem" }}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-[2px] ${isDark ? 'bg-white' : 'bg-black'} transition-transform duration-200 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
                  style={{ display: 'block' }}
                />
              </Link>
            );
          })}
        </nav>
        {/* Theme toggle & Mobile menu button */}
        <div className="flex items-center gap-2 md:ml-4">
          <button
        onClick={toggleTheme}
        className={`flex items-center justify-center h-10 w-10 rounded-full border ${isDark ? 'border-border bg-background' : 'border-gray-200 bg-white'} shadow transition-colors duration-200`}
        aria-label="Toggle theme"
          >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-gray-700" />
        )}
          </button>
          <button
        className={`md:hidden flex items-center justify-center h-10 w-10 rounded-full border ${isDark ? 'border-border bg-background' : 'border-gray-200 bg-white'} shadow transition-colors duration-200 ml-1`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Open menu"
          >
        {mobileOpen ? (
          <X className={`h-7 w-7 ${isDark ? 'text-white' : 'text-black'}`} />
        ) : (
          <Menu className={`h-7 w-7 ${isDark ? 'text-white' : 'text-black'}`} />
        )}
          </button>
          <Button className={`hidden md:inline-block ml-2 px-6 py-2 font-bold rounded-full border-2 shadow-md transition-all duration-200 ${isDark ? 'bg-primary text-white border-border hover:bg-primary/90' : 'bg-[#21926b] text-white border-white hover:bg-[#1a7a59]'}`} style={{ fontSize: "1.1rem" }} asChild>
        <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className={`fixed top-24 left-1/2 z-50 -translate-x-1/2 w-[90vw] max-w-xs rounded-3xl shadow-2xl border ${isDark ? 'bg-background border-border' : 'bg-white border-gray-200'} flex flex-col items-center py-6 animate-in fade-in slide-in-from-top-6`}>
          {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          onClick={() => setMobileOpen(false)}
          className={`block w-full text-center py-3 px-6 font-semibold text-lg rounded-xl transition-colors duration-150 ${isDark ? 'text-white hover:bg-white/10' : 'text-black hover:bg-gray-100'}`}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {item.name}
        </Link>
          ))}
          <Button className={`mt-4 w-[80%] font-bold rounded-full border-2 shadow-md transition-all duration-200 ${isDark ? 'bg-primary text-white border-border hover:bg-primary/90' : 'bg-[#21926b] text-white border-white hover:bg-[#1a7a59]'}`} asChild>
        <Link to="/contact">Contact</Link>
          </Button>
        </div>
      )}
        </header>
  );
};
