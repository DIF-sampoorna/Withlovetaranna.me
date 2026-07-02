import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MagazineArticle } from "../types";
import { ArrowRight, BookOpen, Clock, Mail, CheckCircle2 } from "lucide-react";

const ARTICLES: MagazineArticle[] = [
  {
    id: "empathy",
    num: "01",
    title: "THE ANATOMY OF EMPATHY IN LEADERSHIP",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    readTime: "6 MIN READ",
    excerpt: "Why scaling structural development fails without designing for the subtle, emotional currents of local community networks."
  },
  {
    id: "geographic",
    num: "02",
    title: "SHIFTING THE GEOGRAPHIC SPOTLIGHT",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    readTime: "4 MIN READ",
    excerpt: "A tactical roadmap on decentralizing diagnostics hubs beyond the comfortable margins of state capitals."
  },
  {
    id: "logistics",
    num: "03",
    title: "THE LOGISTICS OF GRASSROOTS HEALING",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    readTime: "5 MIN READ",
    excerpt: "Chronicles of deploying vaccine-refrigerator units across the river terrain channels in Northeast India."
  }
];

export default function NewsletterBlog() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes("@")) {
      setIsSubscribed(true);
      setTimeout(() => {
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div id="blog" className="py-24 md:py-36 bg-white border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-20">
          <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-neutral-400 font-bold block mb-3">
            04 // PERSPECTIVES
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-neutral-900 leading-tight">
            The Editorial <span className="font-light italic">Desk.</span>
          </h2>
        </div>

        {/* Asymmetrical Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-28">
          {ARTICLES.map((art, idx) => {
            const isHovered = hoveredIdx === idx;
            
            // Asymmetrical height class list for tall vertical bands side-by-side
            let heightClass = "h-[450px] md:h-[550px]";
            let colSpan = "md:col-span-4";
            
            if (idx === 0) {
              heightClass = "h-[500px] md:h-[680px]"; // Tallest vertical band
              colSpan = "md:col-span-5";
            } else if (idx === 1) {
              heightClass = "h-[400px] md:h-[510px]";
              colSpan = "md:col-span-4";
            } else {
              heightClass = "h-[350px] md:h-[430px]";
              colSpan = "md:col-span-3";
            }

            return (
              <div
                key={art.id}
                className={`${colSpan} flex flex-col justify-between`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Image Wrap */}
                <div className={`w-full ${heightClass} relative overflow-hidden group border border-neutral-100 rounded-lg shadow-sm hover:shadow-lg transition-all duration-500 bg-neutral-100`}>
                  {/* Photo with slow continuous zoom effect on Feature 1 */}
                  <div className="absolute inset-0">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className={`w-full h-full object-cover filter grayscale contrast-115 mix-blend-multiply brightness-75 transition-transform duration-[10s] ease-out ${
                        isHovered || (idx === 0) ? "scale-105" : ""
                      }`}
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/10 transition-colors" />
                    <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-neutral-900 to-transparent opacity-80" />
                  </div>

                  {/* Absolute positioning of top labels */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start z-10 font-mono text-[11px] text-neutral-300 font-bold">
                    <span>{art.num} // SECTION</span>
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[10px]">
                      ESSAY
                    </span>
                  </div>

                  {/* Overlapping, massive bold typography at the bottom */}
                  <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col gap-2">
                    <h3 className={`font-heading font-medium text-lg leading-tight tracking-wider text-white transition-colors duration-300 ${
                      isHovered ? "text-neutral-200" : ""
                    }`}>
                      {art.title}
                    </h3>
                    
                    {/* Excerpt panel */}
                    <p className={`font-sans text-[11px] text-neutral-300 leading-relaxed transition-all duration-500 overflow-hidden ${
                      isHovered ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
                    }`}>
                      {art.excerpt}
                    </p>

                    {/* Minimum read-time indicator fading in on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="font-mono text-xs font-bold text-neutral-200 flex items-center gap-1.5 mt-2"
                        >
                          <Clock className="w-3.5 h-3.5" />
                          <span>[ {art.readTime} &rarr; ]</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Inline reading trigger text */}
                <div className="mt-4 flex items-center justify-between border-b border-neutral-100 pb-3">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    PUBLISHED IN SANS REVIEW
                  </span>
                  <p className="font-mono text-xs font-bold text-neutral-900 flex items-center gap-1 cursor-pointer hover:font-bold hover:translate-x-1 transition-transform">
                    READ STORY
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subscription Anchor (Bottom Half) - Deep Charcoal Minimalist block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden bg-neutral-950 text-white p-8 md:p-16 border border-neutral-800"
        >
          {/* Faint design crosshairs and patterns */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-900 rounded-full blur-[80px] opacity-60" />
          <div className="absolute bottom-4 right-6 font-mono text-[8px] text-neutral-800 pointer-events-none select-none tracking-widest hidden md:block">
            SECURITY KEY: OK // PERSISTENCE LOG: LIVE
          </div>

          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <span className="font-mono text-[10px] tracking-widest text-neutral-500 font-bold uppercase flex items-center justify-center md:justify-start gap-2">
                <BookOpen className="w-3.5 h-3.5" />
                MONTHLY DIGEST
              </span>
              <h3 className="font-heading font-semibold text-3xl md:text-4xl tracking-wide text-white">
                THOUGHTS IN TRANSIT.
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed max-w-md">
                A monthly digest on social impact, emotional intelligence, and systemic change. No noise. Just perspective.
              </p>
            </div>

            {/* Form */}
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubscribe}
                    className="flex flex-col gap-2"
                  >
                    <div className="relative border-b border-neutral-700 focus-within:border-white py-3 flex items-center justify-between transition-colors">
                      <Mail className="w-4 h-4 text-neutral-500 mr-2 shrink-0" />
                      <input
                        type="email"
                        required
                        placeholder="[ Enter your email address ]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-transparent font-sans text-sm text-white placeholder-neutral-500 focus:outline-none w-full"
                      />
                      <button
                        type="submit"
                        className="text-neutral-400 hover:text-white transition-colors duration-300 bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 p-2 rounded-lg cursor-pointer shrink-0"
                        title="Subscribe"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="font-mono text-[9px] text-neutral-500">
                      Decentralized delivery. Unsubscribe at any physical camp.
                    </span>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-neutral-900/60 border border-emerald-500/20 backdrop-blur-md rounded-xl p-5 flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-bold text-sm text-white leading-none mb-1">
                        Subscribed Successfully.
                      </p>
                      <p className="font-sans text-xs text-neutral-400 leading-relaxed">
                        Welcome to Thoughts in Transit. A confirmation has been deployed to the database registers.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
