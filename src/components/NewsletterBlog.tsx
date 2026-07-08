import * as React from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
const l = { jsx, jsxs };
import { motion as X } from 'motion/react';
import { Sparkles as Wo, Heart as ba, Feather as $x, BookOpen as Rx } from 'lucide-react';
import * as k from 'react';

function GA() {
  return l.jsxs("section", {
    className:
      "relative py-24 px-6 md:px-12 bg-[#FCFAF6] border-t border-neutral-200 overflow-hidden",
    children: [
      l.jsx("div", {
        className:
          "absolute top-1/4 left-10 w-72 h-72 bg-[#0e5fa3]/5 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute bottom-1/4 right-10 w-96 h-96 bg-[#E65F1B]/5 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          l.jsxs("div", {
            className:
              "mb-16 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left",
            children: [
              l.jsxs("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3 flex items-center gap-2",
                children: [
                  l.jsx(Wo, { className: "w-3 h-3 text-[#E65F1B]" }),
                  " THE SHARED INSTINCT",
                ],
              }),
              l.jsx("h2", {
                className:
                  "font-heading text-3xl md:text-5xl font-extrabold text-neutral-900 tracking-tight uppercase leading-none",
                children: "ABOUT TARANNA",
              }),
              l.jsx("div", {
                className: "h-[2px] w-12 bg-neutral-900 mt-4 md:mt-5",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start",
            children: [
              l.jsxs("div", {
                className: "lg:col-span-5 flex flex-col gap-6 w-full",
                children: [
                  l.jsxs(X.div, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 1, ease: "easeOut" },
                    className:
                      "relative group p-4 bg-white border border-neutral-200 shadow-xl rounded-3xl overflow-hidden",
                    children: [
                      l.jsxs("div", {
                        className:
                          "aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100 relative",
                        children: [
                          l.jsx("img", {
                            src: "/NOV00034.JPG.jpeg",
                            alt: "Taranna Deepjyoti",
                            className:
                              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
                          }),
                          l.jsx("div", {
                            className:
                              "absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none",
                          }),
                          l.jsx("div", {
                            className:
                              "absolute bottom-4 left-4 font-mono text-[8px] tracking-[0.3em] font-bold text-white uppercase bg-black/60 backdrop-blur-md py-1.5 px-3 rounded-md",
                            children: "PORTRAIT // STUDIO AMBER",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "pt-4 pb-2 text-center",
                        children: [
                          l.jsx("p", {
                            className:
                              "font-display italic text-base text-neutral-800",
                            children:
                              "“Daring to exist completely, in public and in shadow.”",
                          }),
                          l.jsx("p", {
                            className:
                              "font-mono text-[8px] tracking-widest text-neutral-400 uppercase mt-1 font-bold",
                            children: "Kolkata, Summer 2026",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    className: "hidden sm:grid grid-cols-2 gap-4 mt-2",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[-1.5deg]",
                        children: [
                          l.jsx("div", {
                            className:
                              "aspect-square rounded-lg overflow-hidden bg-neutral-100",
                            children: l.jsx("img", {
                              src: "/TD-382.jpg.jpeg",
                              alt: "Poise",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          l.jsx("div", {
                            className:
                              "pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold",
                            children: "Symmetrical Poise",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-3 bg-white border border-neutral-150 rounded-2xl shadow-sm rotate-[2deg]",
                        children: [
                          l.jsx("div", {
                            className:
                              "aspect-square rounded-lg overflow-hidden bg-neutral-100",
                            children: l.jsx("img", {
                              src: "/Writer.jpg.jpeg",
                              alt: "Writer",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                          l.jsx("div", {
                            className:
                              "pt-2 text-center font-mono text-[7px] text-neutral-400 uppercase tracking-widest font-bold",
                            children: "The Writer's Gaze",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className: "lg:col-span-7 flex flex-col gap-8 w-full",
                children: [
                  l.jsxs(X.div, {
                    initial: { opacity: 0, x: 20 },
                    whileInView: { opacity: 1, x: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 0.1 },
                    className: "flex flex-col gap-6",
                    children: [
                      l.jsx("p", {
                        className:
                          "font-display italic text-xl md:text-2xl text-neutral-800 leading-relaxed font-light",
                        children:
                          "Taranna Deepjyoti moves between four different rooms — and shows up unguarded in every one of them.",
                      }),
                      l.jsxs("div", {
                        className:
                          "font-sans text-neutral-600 space-y-6 text-sm md:text-base leading-relaxed font-light",
                        children: [
                          l.jsxs("p", {
                            children: [
                              "She's the founder of ",
                              l.jsx("strong", {
                                className: "font-semibold text-neutral-900",
                                children:
                                  "Deepjyoti India Foundation (Sampoorna)",
                              }),
                              ", building health, mental wellness, and dignity-first programs for young women and the elderly across India. She's a confessional poet, writing free verse that turns longing, loss, and the ache of distance into something physical enough to hold.",
                            ],
                          }),
                          l.jsxs("p", {
                            children: [
                              "She's a speaker and podcaster who talks about what most people are taught to swallow — ",
                              l.jsx("strong", {
                                className: "font-semibold text-neutral-900",
                                children: "shame, guilt, rejection",
                              }),
                              " — and asks people to feel their way through instead of around it. And she's a plus-size model whose work has helped a generation of men and women see their own bodies as already enough.",
                            ],
                          }),
                          l.jsx("p", {
                            className:
                              "border-l-2 border-[#E65F1B]/30 pl-5 italic font-display text-neutral-700 text-base md:text-lg",
                            children:
                              "Different mediums, same instinct: dig into a feeling before it's fully named, and turn it into something someone else can use.",
                          }),
                          l.jsx("p", {
                            children:
                              "Taranna doesn't separate the personal from the professional — her foundation, her poems, her talks, and her photographs all come from the same place, and she'd rather show up authentically than perform confidence she doesn't feel. That's the thread running through everything she builds.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsxs(X.div, {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.8, delay: 0.3 },
                    className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-4",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#0e5fa3]/10 flex items-center justify-center text-[#0e5fa3]",
                            children: l.jsx(ba, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase",
                            children: "SAMPOORNA",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Welfare Loop",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#E65F1B]/10 flex items-center justify-center text-[#E65F1B]",
                            children: l.jsx($x, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase",
                            children: "FREE VERSE",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Confessional",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-[#0a8fa0]/10 flex items-center justify-center text-[#0a8fa0]",
                            children: l.jsx(Rx, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase",
                            children: "SOMATIC",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Vocal Stage",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 bg-white/60 border border-neutral-100 rounded-2xl flex flex-col gap-2 shadow-xs",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600",
                            children: l.jsx(Wo, { className: "w-4 h-4" }),
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-amber-600 font-bold block uppercase",
                            children: "PLUS-SIZE",
                          }),
                          l.jsx("span", {
                            className:
                              "font-heading text-xs text-neutral-800 font-bold uppercase",
                            children: "Representation",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}


export default GA;
