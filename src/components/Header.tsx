import { useState, useEffect } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Settings, Lock, Unlock } from "lucide-react";

interface NavLink {
  id: string;
  num: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { id: "home", num: ".01", label: "HOME" },
  { id: "social-entrepreneur", num: ".02", label: "SOCIAL ENTREPRENEUR" },
  { id: "writer", num: ".03", label: "WRITER" },
  { id: "public-speaker", num: ".04", label: "PUBLIC SPEAKER" },
  { id: "model", num: ".05", label: "MODEL" },
  { id: "gallery", num: ".06", label: "GALLERY" }
];

interface HeaderProps {
  currentView?: string;
  setCurrentView?: (view: string) => void;
}

export default function Header({ currentView = "home", setCurrentView }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sync devMode & isLocked states
  const [devMode, setDevMode] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    return localStorage.getItem("collage_layout_locked") === "true";
  });

  useEffect(() => {
    const handleDevModeChange = (e: any) => {
      if (e.detail !== undefined) {
        setDevMode(!!e.detail);
      }
    };
    const handleLockChange = (e: any) => {
      if (e.detail !== undefined) {
        setIsLocked(!!e.detail);
      }
    };

    window.addEventListener("dev-mode-changed", handleDevModeChange);
    window.addEventListener("dev-lock-changed", handleLockChange);

    // Request initial state check
    window.dispatchEvent(new CustomEvent("request-dev-state"));

    return () => {
      window.removeEventListener("dev-mode-changed", handleDevModeChange);
      window.removeEventListener("dev-lock-changed", handleLockChange);
    };
  }, []);

  const handleToggleDevMode = () => {
    window.dispatchEvent(new CustomEvent("toggle-dev-mode"));
  };

  const handleToggleLock = () => {
    const nextLocked = !isLocked;
    setIsLocked(nextLocked);
    localStorage.setItem("collage_layout_locked", String(nextLocked));
    window.dispatchEvent(new CustomEvent("toggle-dev-lock", { detail: nextLocked }));
  };

  // Scroll detection to highlight active sections in real-time on home
  useEffect(() => {
    if (currentView !== "home") return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 180;
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentView]);

  useEffect(() => {
    // Reset scrolled state on view transitions to ensure correct contrast
    setScrolled(false);
  }, [currentView]);

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (setCurrentView) {
      setCurrentView(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 pointer-events-none ${
      scrolled || currentView !== "home"
        ? "bg-transparent py-3 md:py-4" 
        : "bg-transparent py-5 md:py-6"
    }`}>
      <div className="max-w-none px-10 md:px-12 flex items-center justify-between pointer-events-auto">
        
        {/* Name Brand Identity */}
        <div 
          onClick={() => handleNavClick("home")} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img 
            src="/tarranalogo.png" 
            alt="NGO Logo" 
            className="h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -ml-3 md:-ml-8"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Header Controls Container */}
        <div className="flex items-center gap-4">
          {currentView === "home" && (
            <>
              {/* Dev Mode Lock Toggle (Only visible in Dev Mode) */}
              {devMode && (
                <button
                  id="btn-dev-lock-toggle"
                  onClick={handleToggleLock}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${
                    isLocked 
                      ? "bg-red-500 text-white border-red-600 hover:bg-red-600" 
                      : "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600"
                  }`}
                >
                  {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                  {isLocked ? "Locked" : "Unlocked"}
                </button>
              )}

              {/* Dev Mode Align Toggle */}
              <button
                id="btn-dev-align-toggle"
                onClick={handleToggleDevMode}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${
                  devMode 
                    ? "bg-amber-500 text-white border-amber-600 hover:bg-amber-600 animate-pulse" 
                    : "bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200"
                }`}
              >
                <Settings className={`w-3.5 h-3.5 ${devMode ? "animate-spin" : ""}`} />
                {devMode ? "Dev Mode Active" : "Adjust Image Positions"}
              </button>
            </>
          )}

          {/* Universal Hamburg/Burger Trigger - Visible on all sizes */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-neutral-900 hover:text-neutral-600 transition-all duration-300 cursor-pointer flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200/80 hover:bg-neutral-50 shrink-0"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <>
                <span className="font-mono text-xs tracking-wider uppercase font-bold text-neutral-500">CLOSE</span>
                <X className="w-5 h-5 text-neutral-700" />
              </>
            ) : (
              <>
                <span className="font-mono text-xs tracking-wider uppercase font-bold text-neutral-600">MENU</span>
                <Menu className="w-5 h-5 text-neutral-700 animate-pulse" />
              </>
            )}
          </button>
        </div>

      </div>

      {/* Universal Drawer Menu (Desktop, Tablet, Mobile responsive) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full inset-x-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xl px-6 py-8 z-50 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-300">
          <div className="max-w-4xl mx-auto">
            {/* Main Nav Links list in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => {
                const isActive = currentView === link.id || (currentView === "home" && activeSection === link.id);
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className="group flex items-center justify-between text-left py-3 px-4 rounded-xl hover:bg-neutral-50/70 border border-transparent hover:border-neutral-100 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-neutral-400 font-bold group-hover:text-amber-600 transition-colors">
                        {link.num}
                      </span>
                      <span className={`font-heading text-xs tracking-wider font-semibold transition-colors ${
                        isActive ? "text-neutral-950 font-bold" : "text-neutral-600 group-hover:text-neutral-950"
                      }`}>
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
