import * as React from 'react';
import { useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
const l = { jsx, jsxs };
import { motion as X, useScroll as nP, useTransform as Sl } from 'motion/react';
import { Sprout as n2, Pen as ZS, Mic as od, Camera as Vx } from 'lucide-react';
import * as k from 'react';

const dP = [
  {
    id: "visionary",
    label: "SOCIAL ENTREPRENEUR",
    description: "Founder of Deepjyoti India Foundation (Sampoorna), building healthcare, mental health, and dignity-first programs for young women and the elderly across India.",
    image: "/TD-004.jpg.jpeg",
    icon: n2,
    readMoreColor: "text-sky-400 hover:text-sky-300",
    objectPosition: "center 20%",
  },
  {
    id: "voice",
    label: "WRITER",
    description: "Free verse. Confessional. Unguarded. Poems that turn maggi and adrak chai into metaphors for desire, and grief into a language anyone can hold.",
    image: "/Writer.jpg.jpeg",
    icon: ZS,
    readMoreColor: "text-orange-400 hover:text-orange-300",
    objectPosition: "center 20%",
  },
  {
    id: "strategist",
    label: "PUBLIC SPEAKER",
    description: "A podcaster and speaker who talks about what most people avoid — shame, guilt, rejection — and invites people to feel it all the way through instead of around it.",
    image: "/Speaker.JPG.jpeg",
    icon: od,
    readMoreColor: "text-teal-400 hover:text-teal-300",
    objectPosition: "center 20%",
  },
  {
    id: "catalyst",
    label: "MODEL",
    description: "A plus-size model who became, for someone else, exactly what she once needed to see. Her work has helped a generation of plus-size men and women embrace their bodies as they are.",
    image: "/Modle.JPG.jpeg",
    icon: Vx,
    readMoreColor: "text-amber-400 hover:text-amber-300",
    objectPosition: "center 20%",
  },
];

const fP = {
  visionary: "social-entrepreneur",
  voice: "writer",
  catalyst: "model",
  strategist: "public-speaker",
};

function hP({ onNavigate: e }) {
  const t = k.useRef(null),
    [n, r] = k.useState(null),
    [s, i] = k.useState(!1);
  k.useEffect(() => {
    const d = () => {
      i(window.innerWidth < 768);
    };
    return (
      d(),
      window.addEventListener("resize", d),
      () => window.removeEventListener("resize", d)
    );
  }, []);
  const { scrollYProgress: o } = nP({
      target: t,
      offset: ["start start", "end start"],
    }),
    a = Sl(o, [0, 0.7], [0, -120]),
    u = Sl(o, [0, 0.6], [1, 0]),
    c = Sl(o, [0, 0.6], [1, 0.95]);
  return l.jsx("div", {
    id: "feathers",
    className: "relative bg-white",
    ref: t,
    children: l.jsx(X.div, {
      style: { y: a, opacity: u, scale: c },
      className:
        "relative h-[95vh] w-full overflow-hidden flex flex-col md:flex-row bg-neutral-900 border-b border-neutral-100",
      children: dP.map((d, f) => {
        const h = n === f,
          x = n !== null;
        let w = "25%";
        x && (w = h ? "50%" : "16.6%");
        let v = "100%";
        return (
          s && ((v = "25%"), x && (v = h ? "40%" : "20%")),
          l.jsxs(
            "div",
            {
              onClick: () => {
                e &&
                  (e(fP[d.id]),
                  window.scrollTo({ top: 0, behavior: "smooth" }));
              },
              className:
                "relative transition-all duration-700 ease-out flex-grow cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-neutral-800/10 last:border-0",
              style: { width: s ? "100%" : w, height: s ? v : "100%" },
              onMouseEnter: () => r(f),
              onMouseLeave: () => r(null),
              children: [
                l.jsxs("div", {
                  className: "absolute inset-0 w-full h-full bg-neutral-950",
                  children: [
                    l.jsx("img", {
                      src: d.image.startsWith("http")
                        ? d.image
                        : encodeURI(d.image),
                      alt: d.label,
                      referrerPolicy: "no-referrer",
                      className: "w-full h-full object-cover",
                      style: {
                        objectPosition: d.objectPosition || "center 20%",
                        transition:
                          "transform 700ms cubic-bezier(0.16, 1, 0.3, 1), filter 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: h ? "scale(1.06)" : "scale(1.0)",
                        filter: h
                          ? "grayscale(100%) brightness(0.3) contrast(1.1)"
                          : "grayscale(0%) brightness(0.65) contrast(1.0)",
                      },
                    }),
                    l.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 opacity-60",
                    }),
                    (d.id === "visionary" || d.id === "voice") &&
                      l.jsx("div", {
                        className: `absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none transition-opacity duration-700 ${h ? "opacity-100" : "opacity-40"}`,
                      }),
                  ],
                }),
                l.jsxs("div", {
                  className: `absolute inset-0 p-6 md:p-12 flex flex-col z-10 select-none transition-all duration-500 ${h ? "justify-center items-center text-center bg-black/35" : "justify-end items-start text-left"}`,
                  children: [
                    l.jsx("div", {
                      className: "absolute top-6 right-6 md:top-10 md:right-10",
                      children: l.jsxs(X.div, {
                        animate: {
                          scale: h ? 1.15 : 1,
                          borderColor: h
                            ? "rgba(255, 255, 255, 0.4)"
                            : "rgba(255, 255, 255, 0.1)",
                          backgroundColor: h
                            ? "rgba(255, 255, 255, 0.2)"
                            : "rgba(0, 0, 0, 0.4)",
                        },
                        className:
                          "p-2 md:p-2.5 rounded-full border border-neutral-800 text-white backdrop-blur-xs flex items-center justify-center relative",
                        children: [
                          l.jsx(d.icon, {
                            className: "w-4 h-4 text-neutral-100",
                          }),
                          (d.id === "visionary" || d.id === "voice") &&
                            l.jsx("span", {
                              className:
                                "absolute inset-0 rounded-full border border-white/35 animate-ping opacity-25",
                            }),
                        ],
                      }),
                    }),
                    l.jsxs(X.div, {
                      layout: !0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      },
                      className: `flex flex-col gap-3 transition-all duration-500 ${h ? "items-center max-w-xl" : "items-start"}`,
                      children: [
                        l.jsx("span", {
                          className: `font-mono tracking-[0.25em] text-neutral-400 transition-all duration-500 uppercase ${h ? "text-xs md:text-sm" : "text-[10px] md:text-xs"}`,
                          children: "ROLE OUTLINE",
                        }),
                        l.jsxs(X.h2, {
                          className: `font-heading font-bold text-white transition-all duration-500 tracking-widest uppercase ${h ? "text-2xl md:text-4xl my-2" : "text-lg md:text-2xl"}`,
                          animate: {
                            letterSpacing: h ? "0.18em" : "0.05em",
                            color: h ? "#ffffff" : "#e5e5e5",
                            textShadow:
                              h && (d.id === "visionary" || d.id === "voice")
                                ? "0 0 12px rgba(255,255,255,0.4)"
                                : "none",
                          },
                          transition: { duration: 0.4 },
                          children: ["[ ", d.label, " ]"],
                        }),
                        l.jsxs("div", {
                          className: `transition-all duration-500 ease-out ${h ? "opacity-100 translate-y-0 max-h-[300px] mt-4" : "opacity-0 translate-y-4 max-h-0 pointer-events-none overflow-hidden"}`,
                          children: [
                            l.jsx("p", {
                              className: `font-sans text-neutral-100 leading-relaxed font-normal transition-all duration-500 ${h ? "text-sm md:text-lg" : "text-xs md:text-sm"}`,
                              children: d.description,
                            }),
                            l.jsxs("div", {
                              className: `font-mono font-bold tracking-widest uppercase mt-4 flex items-center gap-1.5 transition-all duration-300 ${d.readMoreColor} ${h ? "text-xs md:text-sm justify-center" : "text-[10px] md:text-xs"}`,
                              children: [
                                "Read More ",
                                l.jsx("span", {
                                  className: "text-sm",
                                  children: "→",
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
            },
            d.id,
          )
        );
      }),
    }),
  });
}


export default hP;
