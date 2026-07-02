import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Instagram, Linkedin, MapPin, Send, CheckCircle2, Sparkles, HelpCircle, Heart, Feather, Mic, Camera } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "collaboration", // default
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const interestOptions = [
    { id: "collaboration", label: "Creative Collaboration", icon: Sparkles },
    { id: "sampoorna", label: "Sampoorna Foundation", icon: Heart },
    { id: "poetry", label: "Poetry & Writing", icon: Feather },
    { id: "speaking", label: "Speaking & Workshops", icon: Mic },
    { id: "modeling", label: "Modeling & Campaigns", icon: Camera },
    { id: "other", label: "General Inquiry", icon: HelpCircle },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate real high-fidelity submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      organization: "",
      interest: "collaboration",
      message: "",
    });
    setIsSuccess(false);
  };

  return (
    <section id="contact-collaboration" className="relative py-24 px-6 md:px-12 bg-[#0C0C0C] text-neutral-100 border-t border-neutral-900 overflow-hidden">
      {/* Editorial backdrop accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#0e5fa3]/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#E65F1B]/10 rounded-full filter blur-3xl pointer-events-none" />

      {/* Decorative vertical/horizontal divider lines */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#E65F1B]" /> FOUR ROOMS // ONE ENTRYWAY
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none">
            COLLABORATIONS & PARTNERSHIPS
          </h2>
          <p className="font-display italic text-sm md:text-base text-neutral-400 mt-4 max-w-xl">
            Whether for social impact, poetic projects, panel speaking, or artistic campaigns—let's create something meaningful together.
          </p>
          <div className="h-[2px] w-12 bg-neutral-700 mt-5" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Coordinates & Information (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-4">
                  THE CONVERSATION STARTS HERE
                </h3>
                <p className="font-sans text-neutral-400 text-sm md:text-base leading-relaxed font-light">
                  Taranna’s work lives in the intersection of poetry, activism, speech, and fashion. If you represent an organization, brand, publication, or have a personal creative proposal, we would love to connect.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E65F1B] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5">
                      DIRECT EMAIL
                    </span>
                    <a 
                      href="mailto:hello@withlovetaranna.me" 
                      className="font-sans text-sm md:text-base text-neutral-200 hover:text-[#0e5fa3] transition-colors duration-200"
                    >
                      hello@withlovetaranna.me
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#0e5fa3] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5">
                      LOCATION
                    </span>
                    <span className="font-sans text-sm md:text-base text-neutral-200">
                      Mumbai, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social accounts */}
            <div className="pt-8 border-t border-neutral-900">
              <span className="font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-4">
                CHANNELS OF CONNECTION
              </span>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.instagram.com/withlove_taranna/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#E65F1B]" />
                  INSTAGRAM
                </a>
                <a 
                  href="https://www.linkedin.com/in/trulytarana/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0e5fa3]" />
                  LINKEDIN
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-[#121110] border border-neutral-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Interest / Topic Selection Grid */}
                    <div>
                      <label className="font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase mb-3">
                        SELECT AREA OF INTEREST
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {interestOptions.map((opt) => {
                          const Icon = opt.icon;
                          const isSelected = formData.interest === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, interest: opt.id })}
                              className={`flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-300 ${
                                isSelected 
                                  ? "bg-[#0e5fa3]/10 border-[#0e5fa3] text-white" 
                                  : "bg-neutral-950/40 border-neutral-800/60 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                              }`}
                            >
                              <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#E65F1B]" : "text-neutral-500"}`} />
                              <span className="font-mono text-[10px] uppercase font-bold leading-none tracking-tight">{opt.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Basic Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase">
                          YOUR NAME <span className="text-[#E65F1B]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Taranna Deepjyoti"
                          className="w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase">
                          EMAIL ADDRESS <span className="text-[#E65F1B]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase">
                        ORGANIZATION / COMPANY <span className="text-neutral-600">(OPTIONAL)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Deepjyoti India Foundation / Self"
                        className="w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase">
                        YOUR MESSAGE <span className="text-[#E65F1B]">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your creative vision, proposal, or inquiry here..."
                        className="w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans resize-none leading-relaxed"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-neutral-100 hover:bg-white text-neutral-950 hover:text-black font-mono text-xs font-black tracking-[0.2em] uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE
                          <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="py-12 text-center flex flex-col items-center justify-center gap-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[#0e5fa3]/10 border border-[#0e5fa3]/20 flex items-center justify-center text-[#E65F1B] animate-pulse">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-heading text-xl font-bold uppercase tracking-tight text-white">
                        MESSAGE RECEIVED SUCCESSFUL
                      </h4>
                      <p className="font-sans text-neutral-400 text-sm max-w-md mx-auto leading-relaxed font-light">
                        Thank you for reaching out, <strong className="text-white font-semibold">{formData.name}</strong>. Your message is safely logged. Taranna will respond in the same direct, authentic spirit.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="font-mono text-[10px] tracking-widest text-[#0e5fa3] hover:text-[#0e5fa3]/80 font-black uppercase mt-4 underline underline-offset-4"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
