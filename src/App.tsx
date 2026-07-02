import { useState, useEffect } from "react";
import Header from "./components/Header";
import EditorialHeroSection from "./components/EditorialHeroSection";
import HeroFeathers from "./components/HeroFeathers";
import NavigationPlaceholder from "./components/NavigationPlaceholder";
import VideoPreloader from "./components/VideoPreloader";
import GalleryPage from "./components/GalleryPage";
import { AnimatePresence, motion } from "motion/react";
import FeatherCursorWithTrail from "./components/FeatherCursorWithTrail";
import InteractiveWhiteFeathers from "./components/InteractiveWhiteFeathers";
import AboutTarannaSection from "./components/AboutTarannaSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isIntroPlaying, setIsIntroPlaying] = useState(true);

  // Always scroll to the top of the page when changing views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#FCFAF6] text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans antialiased relative md:cursor-none">
      <FeatherCursorWithTrail />
      <InteractiveWhiteFeathers />
      
      {/* Cinematic Video Preloader (plays first, fades out) */}
      <AnimatePresence>
        {isIntroPlaying && (
          <VideoPreloader onComplete={() => setIsIntroPlaying(false)} />
        )}
      </AnimatePresence>

      {/* Decorative page margin lines reflecting high-fashion print layouts */}
      <div className="absolute top-0 bottom-0 left-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none" />

      {/* Floating Header */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "home" ? (
        <>
          {/* Main Sections */}
          <main className="w-full">
            {/* Interactive Cover Layout */}
            <EditorialHeroSection />

            {/* Homepage Hero Titles */}
            <section className="py-12 px-6 text-center flex flex-col items-center">
              <motion.span 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3"
              >
                Taranna Deepjyoti
              </motion.span>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="font-display italic text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed font-light"
              >
                Four different rooms. One person walking through all of them, unguarded.
              </motion.p>
            </section>

            {/* Quote Section */}
            <section className="py-20 md:py-28 px-6 flex flex-col items-center justify-center text-center relative pointer-events-auto bg-[#0C0C0C] border-y border-neutral-900">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-2xl mx-auto flex flex-col items-center gap-5"
              >
                <p className="font-display italic text-2xl md:text-4xl text-[#E65F1B] leading-relaxed tracking-tight select-all">
                  “Awakening what is lost, nurturing what is found”
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="w-6 h-[1.5px] bg-[#0e5fa3]/20" />
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#0e5fa3] font-black">
                    by Tarrana
                  </span>
                  <span className="w-6 h-[1.5px] bg-[#0e5fa3]/20" />
                </div>
              </motion.div>
            </section>


            {/* Section 1: Homepage & Feather Slices */}
            <HeroFeathers onNavigate={(view) => setCurrentView(view)} />

            {/* Section 2: Editorial About Taranna */}
            <AboutTarannaSection />

            {/* Section 3: Contact & Collaborations */}
            <ContactSection />
          </main>
        </>
      ) : currentView === "gallery" ? (
        <GalleryPage onBack={() => setCurrentView("home")} />
      ) : (
        <NavigationPlaceholder 
          view={currentView} 
          onBack={() => setCurrentView("home")} 
          onNavigate={(view) => setCurrentView(view)} 
        />
      )}

    </div>
  );
}

