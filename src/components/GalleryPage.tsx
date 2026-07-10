import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const l = { jsx, jsxs, Fragment };
import { motion as X, AnimatePresence as Vr } from 'motion/react';
import { BookOpen as Rx, ChevronLeft as IS, ChevronRight as co, Compass as Lx, Film as US, Heart as ba, Image as WS, Mic as od, Sparkles as Wo, X as Bx, Maximize2 as KS, Play as Fx, Video as r2 } from 'lucide-react';
import * as k from 'react';
import CMSImage from './CMSImage';

const _A = [
  {
    id: "gal-model-1",
    type: "photo",
    src: "/Modle.JPG.jpeg",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Unbound Presence",
    category: "Model",
    description:
      "Reclaiming physical space with unshakeable dignity and softness, paving paths for radical body representation.",
  },
  {
    id: "gal-model-2",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Textured Warmth",
    category: "Model",
    description:
      "Elegant woolens and studio styling meeting soft, welcoming smiles that rewrite the narrative of high-fashion bodies.",
  },
  {
    id: "gal-model-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Studio Amber Portrait",
    category: "Model",
    description:
      "Warm-toned studio styling capturing beautiful interactions of light, texture, and relaxed confidence.",
  },
  {
    id: "gal-model-4",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Poise & Elegance",
    category: "Model",
    description:
      "Strong, soft, and unscripted. Representing the modern woman in spaces that once felt entirely exclusionary.",
  },
  {
    id: "gal-model-5",
    type: "photo",
    src: "/taranna.png",
    thumbnail: "/taranna.png",
    title: "The Silhouette of Truth",
    category: "Model",
    description:
      "The striking high-fashion silhouette representing the overarching golden thread running through all four domains.",
  },
  {
    id: "gal-model-vid",
    type: "video",
    src: "https://www.youtube.com/embed/H_8y0SBy3H8",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Radical Body Love & Representation",
    category: "Model",
    description:
      "Reflections on reclaiming plus-size representation in high fashion and establishing healthy bodily relationships.",
    youtubeId: "H_8y0SBy3H8",
  },
  {
    id: "gal-writer-1",
    type: "photo",
    src: "/Writer.jpg.jpeg",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Poetics in Chiaroscuro",
    category: "Writer",
    description:
      "Contemplative shadows framing the write-up desk. Turning personal confession into shared, universal echoes.",
  },
  {
    id: "gal-writer-2",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Silent Reflections",
    category: "Writer",
    description:
      "Capturing a writer's transient state — where the next line of free verse begins to form inside the quiet room.",
  },
  {
    id: "gal-writer-3",
    type: "photo",
    src: "/TD-382.jpg.jpeg",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Symmetrical Sincerity",
    category: "Writer",
    description:
      "A focused, symmetrical gaze capturing quiet strength, vulnerability, and absolute conviction.",
  },
  {
    id: "gal-writer-4",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Draped in Thoughts",
    category: "Writer",
    description:
      "A portrait of quiet intensity where text and form find their shared rhythm.",
  },
  {
    id: "gal-writer-vid",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Tarrana's Cinematic Journey",
    category: "Writer",
    description:
      "The official cinematic overview of Tarrana's multi-room journey. Walk through the spaces that define writer, model, speaker, and entrepreneur.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-speaker-1",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Speaking Frame",
    category: "Speaker",
    description:
      "A moment of raw presence in front of the lens, reflecting on how we give voice to silent shame and hidden shadows.",
  },
  {
    id: "gal-speaker-2",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sculpted Shadow-Play",
    category: "Speaker",
    description:
      "A monochrome block portrait demonstrating architectural lighting, texture, and visual design poise.",
  },
  {
    id: "gal-speaker-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Authentic Somatic Dialogue",
    category: "Speaker",
    description:
      "Answering somatic healing questions with deep resonance and clarity.",
  },
  {
    id: "gal-speaker-vid-1",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Courage to Be Disliked",
    category: "Speaker",
    description:
      "A compelling public presentation focusing on the freedom of standing in your individual truth, separate from external validation.",
    youtubeId: "_U0QvsnVfGg",
  },
  {
    id: "gal-speaker-vid-2",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Shame & Naming Shadows",
    category: "Speaker",
    description:
      "Addressing social expectations, unvoiced grief, and the transformational step of naming our deepest shadows.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-welfare-1",
    type: "photo",
    src: "/TD-004.jpg.jpeg",
    thumbnail: "/TD-004.jpg.jpeg",
    title: "Grassroots Empathetic Reach",
    category: "Welfare",
    description:
      "Active frontline leadership in Sampoorna, bringing health equity and empowerment directly to women in regional centers.",
  },
  {
    id: "gal-welfare-2",
    type: "photo",
    src: "/TD-263.jpg.jpeg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "The Heart of Sampoorna",
    category: "Welfare",
    description:
      "Deepjyoti Foundation's visionary healthcare loops, elevating families and building networks of persistent local aid.",
  },
  {
    id: "gal-welfare-3",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sampoorna Outreach Circle",
    category: "Welfare",
    description:
      "Frontline advocacy session and systemic planning for grassroots community aid loops.",
  },
  {
    id: "gal-welfare-vid",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "Welfare & Grassroots Outreach",
    category: "Welfare",
    description:
      "Documenting the systemic aid, medical support camps, and long-term empowerment frameworks run by Deepjyoti India Foundation.",
    youtubeId: "_U0QvsnVfGg",
  },
];


function Qi({ items: e, direction: t, onItemClick: n }) {
  const r = k.useRef(null),
    [s, i] = k.useState(!1),
    [o, a] = k.useState(0),
    [u, c] = k.useState(0),
    d = k.useRef(!1),
    f = k.useRef(!1),
    h = [...e, ...e, ...e],
    x = () => (r.current ? r.current.scrollWidth / 3 : 0);
  k.useEffect(() => {
    const b = r.current;
    if (!b) return;
    const S = x();
    S > 0 && (b.scrollLeft = S);
    let j,
      N = performance.now();
    const T = (M) => {
        if (!r.current) return;
        const z = x();
        if (z === 0) {
          j = requestAnimationFrame(T);
          return;
        }
        if (
          (b.scrollLeft <= 0
            ? (b.scrollLeft += z)
            : b.scrollLeft >= z * 2 && (b.scrollLeft -= z),
          !d.current && !f.current)
        ) {
          const ae = (M - N) / 1e3,
            ve = 40;
          t === "left" ? (b.scrollLeft += ve * ae) : (b.scrollLeft -= ve * ae);
        }
        ((N = M), (j = requestAnimationFrame(T)));
      },
      R = setTimeout(() => {
        j = requestAnimationFrame(T);
      }, 150);
    return () => {
      (cancelAnimationFrame(j), clearTimeout(R));
    };
  }, [e, t]);
  const w = (b) => {
      const S = r.current;
      S &&
        (i(!0), (d.current = !0), a(b.pageX - S.offsetLeft), c(S.scrollLeft));
    },
    v = () => {
      (i(!1), (d.current = !1), (f.current = !1));
    },
    y = () => {
      (i(!1),
        setTimeout(() => {
          d.current = !1;
        }, 100));
    },
    p = (b) => {
      if (!s) return;
      const S = r.current;
      if (!S) return;
      b.preventDefault();
      const N = (b.pageX - S.offsetLeft - o) * 2.2;
      S.scrollLeft = u - N;
    },
    m = () => {
      d.current = !0;
    },
    g = () => {
      setTimeout(() => {
        d.current = !1;
      }, 1200);
    };
  return l.jsxs("div", {
    className: "relative w-full overflow-hidden py-1",
    children: [
      l.jsx("div", {
        className:
          "absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#FCFAF6] to-transparent z-10 pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#FCFAF6] to-transparent z-10 pointer-events-none",
      }),
      l.jsx("div", {
        ref: r,
        onMouseDown: w,
        onMouseLeave: v,
        onMouseUp: y,
        onMouseMove: p,
        onTouchStart: m,
        onTouchEnd: g,
        onMouseEnter: () => {
          f.current = !0;
        },
        className:
          "flex overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none w-full py-2 touch-pan-x",
        style: { scrollBehavior: s ? "auto" : void 0 },
        children: l.jsx("div", {
          className: "flex w-max",
          children: h.map((b, S) =>
            l.jsx(
              "div",
              {
                className: "px-3 md:px-4 shrink-0",
                children: l.jsx(UA, { item: b, onClick: () => n(b) }),
              },
              `${b.id}-tripled-${S}`,
            ),
          ),
        }),
      }),
    ],
  });
}


function UA({ item: e, onClick: t }) {
  return l.jsxs(X.div, {
    whileHover: { scale: 1.03, y: -4 },
    transition: { duration: 0.4, ease: "easeOut" },
    onClick: t,
    className:
      "relative w-56 h-36 md:w-80 md:h-52 bg-neutral-900 rounded-2xl overflow-hidden shadow-md border border-neutral-200/5 hover:border-white/10 group cursor-pointer shrink-0",
    children: [
      l.jsx(CMSImage, {
        originalSrc: e.thumbnail,
        alt: e.title,
        draggable: "false",
        className:
          "w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500",
        referrerPolicy: "no-referrer",
      }),
      l.jsx("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300",
      }),
      l.jsxs("div", {
        className:
          "absolute inset-x-0 bottom-0 p-4 md:p-5 text-white flex flex-col gap-0.5 justify-end",
        children: [
          l.jsx("span", {
            className:
              "font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#E65F1B] font-bold uppercase",
            children:
              e.category === "Welfare" ? "SOCIAL ENTREPRENEUR" : e.category,
          }),
          l.jsx("h3", {
            className:
              "font-heading text-xs md:text-sm font-bold tracking-tight uppercase line-clamp-1",
            children: e.title,
          }),
        ],
      }),
      l.jsx("div", {
        className:
          "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-350 bg-black/35 backdrop-blur-xs scale-98 group-hover:scale-100",
        children: l.jsx("div", {
          className:
            "bg-white text-neutral-900 p-3 rounded-full shadow-lg flex items-center justify-center",
          children:
            e.type === "video"
              ? l.jsx(Fx, {
                  className: "w-4 h-4 fill-current text-neutral-900",
                })
              : l.jsx(KS, { className: "w-4 h-4 text-neutral-900" }),
        }),
      }),
    ],
  });
}


function zA({ onBack: e }) {
  const [t, n] = k.useState("all"),
    [r, s] = k.useState(null),
    i = _A.filter((h) =>
      t === "photos"
        ? h.type === "photo"
        : t === "videos"
          ? h.type === "video"
          : !0,
    ),
    o = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h - 1 + i.length) % i.length;
      s(i[x]);
    },
    a = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h + 1) % i.length;
      s(i[x]);
    };
  k.useEffect(() => {
    const h = (x) => {
      r &&
        (x.key === "Escape"
          ? s(null)
          : x.key === "ArrowLeft"
            ? o()
            : x.key === "ArrowRight" && a());
    };
    return (
      window.addEventListener("keydown", h),
      () => window.removeEventListener("keydown", h)
    );
  }, [r, i]);
  const u = i.filter((h) => h.category === "Welfare"),
    c = i.filter((h) => h.category === "Writer"),
    d = i.filter((h) => h.category === "Speaker"),
    f = i.filter((h) => h.category === "Model");
  return l.jsxs("div", {
    className:
      "min-h-screen bg-[#FCFAF6] text-neutral-900 pt-32 pb-24 px-4 md:px-12 flex flex-col relative overflow-hidden",
    children: [
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase block mb-2",
                children: "STORY ARCHIVE",
              }),
              l.jsx("h1", {
                className:
                  "font-heading text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight uppercase",
                children: "GALLERY",
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "flex bg-neutral-100 p-1.5 rounded-full border border-neutral-200/60 shadow-inner w-fit select-none",
            children: [
              l.jsxs("button", {
                onClick: () => n("all"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "all" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(Lx, { className: "w-3.5 h-3.5" }), "All Work"],
              }),
              l.jsxs("button", {
                onClick: () => n("photos"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "photos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(WS, { className: "w-3.5 h-3.5" }), "Photos"],
              }),
              l.jsxs("button", {
                onClick: () => n("videos"),
                className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "videos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                children: [l.jsx(r2, { className: "w-3.5 h-3.5" }), "Videos"],
              }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "w-full flex-grow flex flex-col justify-center gap-12 my-4 select-none relative z-10",
        children: [
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#15803D]/10 rounded-full border border-[#15803D]/20 shrink-0",
                    children: [
                      l.jsx(ba, { className: "w-3.5 h-3.5 text-[#15803D]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#15803D] font-bold tracking-widest uppercase",
                        children: "DOMAIN .01",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SOCIAL ENTREPRENEUR ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "frontline healthcare & care loops",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              u.length > 0
                ? l.jsx(Qi, { items: u, direction: "right", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#0E5FA3]/10 rounded-full border border-[#0E5FA3]/20 shrink-0",
                    children: [
                      l.jsx(Rx, { className: "w-3.5 h-3.5 text-[#0E5FA3]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#0E5FA3] font-bold tracking-widest uppercase",
                        children: "DOMAIN .02",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "WRITER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "poetics in quiet chiaroscuro",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              c.length > 0
                ? l.jsx(Qi, { items: c, direction: "left", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 rounded-full border border-[#B45309]/20 shrink-0",
                    children: [
                      l.jsx(od, { className: "w-3.5 h-3.5 text-[#B45309]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#B45309] font-bold tracking-widest uppercase",
                        children: "DOMAIN .03",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SPEAKER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "giving speech to naming shadows",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              d.length > 0
                ? l.jsx(Qi, { items: d, direction: "right", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#E65F1B]/10 rounded-full border border-[#E65F1B]/20 shrink-0",
                    children: [
                      l.jsx(US, { className: "w-3.5 h-3.5 text-[#E65F1B]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#E65F1B] font-bold tracking-widest uppercase",
                        children: "DOMAIN .04",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "MODEL ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "reclaiming the physical gaze",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              f.length > 0
                ? l.jsx(Qi, { items: f, direction: "left", onItemClick: s })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 border-t border-neutral-200/40 pt-8 z-10 font-mono text-[9px] tracking-widest uppercase",
        children: [
          l.jsx("span", { children: "© Tarrana Deepjyoti India Foundation" }),
          l.jsx("span", {
            children:
              "Swipe or Drag strips left/right to scroll faster • Click any card to expand",
          }),
        ],
      }),
      l.jsx(Vr, {
        children:
          r &&
          l.jsx(X.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => s(null),
            className:
              "fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out",
            children: l.jsxs(X.div, {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              transition: { type: "spring", stiffness: 300, damping: 28 },
              onClick: (h) => h.stopPropagation(),
              className:
                "bg-[#121212] border border-neutral-800 text-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative cursor-default",
              children: [
                l.jsx("button", {
                  onClick: () => s(null),
                  className:
                    "absolute top-4 right-4 md:top-6 md:right-6 bg-black/65 hover:bg-neutral-850 p-2.5 rounded-full text-neutral-300 hover:text-white transition-all border border-neutral-800 z-10 cursor-pointer hover:scale-105",
                  children: l.jsx(Bx, { className: "w-5 h-5" }),
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[60%] bg-neutral-950 flex items-center justify-center relative aspect-video md:aspect-auto md:min-h-[500px] group/media",
                  children: [
                    r.type === "photo"
                      ? l.jsx(CMSImage, {
                          originalSrc: r.src,
                          alt: r.title,
                          className:
                            "w-full h-full object-contain max-h-[50vh] md:max-h-[80vh] block",
                          referrerPolicy: "no-referrer",
                        })
                      : l.jsx("div", {
                          className:
                            "w-full h-full aspect-video md:absolute md:inset-0 bg-black",
                          children: r.youtubeId
                            ? l.jsx("iframe", {
                                src: `https://www.youtube.com/embed/${r.youtubeId}?autoplay=1&rel=0&modestbranding=1`,
                                title: r.title,
                                frameBorder: "0",
                                allow:
                                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: !0,
                                className: "w-full h-full block",
                              })
                            : l.jsx("video", {
                                src: r.src,
                                className: "w-full h-full block",
                                controls: !0,
                                autoPlay: !0,
                                playsInline: !0,
                              }),
                        }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), o());
                      },
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Previous (Left Arrow)",
                      children: l.jsx(IS, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:-translate-x-0.5",
                      }),
                    }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), a());
                      },
                      className:
                        "absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Next (Right Arrow)",
                      children: l.jsx(co, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:translate-x-0.5",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[40%] p-8 flex flex-col justify-between bg-[#121212]",
                  children: [
                    l.jsxs("div", {
                      className: "flex flex-col gap-6 mt-4",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsxs("span", {
                              className:
                                "font-mono text-[9px] tracking-[0.3em] text-[#E65F1B] font-bold uppercase block mb-2",
                              children: [
                                r.category === "Welfare"
                                  ? "SOCIAL ENTREPRENEUR"
                                  : r.category.toUpperCase(),
                                " // ARCHIVE",
                              ],
                            }),
                            l.jsx("h2", {
                              className:
                                "font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase",
                              children: r.title,
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className:
                            "font-sans text-sm text-neutral-400 leading-relaxed font-normal",
                          children: r.description,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "pt-8 border-t border-neutral-900 flex flex-col gap-2 mt-8 md:mt-0",
                      children: [
                        l.jsxs("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: ["Media format: ", r.type.toUpperCase()],
                        }),
                        l.jsx("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: "Collection: Tarrana Deepjyoti Foundation",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
    ],
  });
}


export default zA;
