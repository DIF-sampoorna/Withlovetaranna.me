import * as React from 'react';
import { useState, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
const l = { jsx, jsxs };
import { motion as Il } from 'motion/react';
import { ArrowRight as VS } from 'lucide-react';
import * as k from 'react';

function BA({ onComplete: e }) {
  const [t, n] = k.useState(!1);
  k.useEffect(() => {
    const s = setTimeout(() => {
      n(!0);
    }, 1e3);
    return () => {
      clearTimeout(s);
    };
  }, []);
  const r = () => {
    e();
  };
  return l.jsxs(Il.div, {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
    },
    className:
      "fixed inset-0 z-50 bg-[#121110] w-screen h-screen overflow-hidden select-none flex flex-col justify-between p-8 md:p-12 text-[#FCFAF6]",
    children: [
      l.jsx("div", {
        className:
          "absolute inset-0 z-0 overflow-hidden flex items-center justify-center",
        children: l.jsxs("div", {
          className:
            "relative w-full h-full overflow-hidden",
          children: [
            l.jsx(Il.img, {
              src: "/taranna.png",
              alt: "Cinematic Portrait Fallback",
              initial: {
                scale: 1,
                filter: "grayscale(30%) brightness(50%) blur(4px)",
              },
              animate: {
                scale: 1.08,
                filter: "grayscale(10%) brightness(60%) blur(0px)",
              },
              transition: { duration: 6, ease: "easeOut" },
              className:
                "absolute inset-0 w-full h-full object-cover pointer-events-none opacity-20",
            }),
            l.jsx("video", {
              src: "/vid.mp4",
              autoPlay: !0,
              muted: !0,
              playsInline: !0,
              onEnded: e,
              className:
                "absolute inset-0 w-full h-full md:object-cover object-contain pointer-events-none mix-blend-normal",
            }),
          ],
        }),
      }),
      l.jsx("div", { className: "relative z-10 w-full flex justify-end" }),
      l.jsx("div", { className: "relative z-10" }),
      l.jsx("div", {
        className: "relative z-10 flex justify-end items-center w-full",
        children: l.jsx("div", {
          className: "h-12 flex items-center justify-center",
          children:
            t &&
            l.jsxs(Il.button, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, ease: "easeOut" },
              onClick: r,
              className:
                "font-mono text-[10px] font-bold tracking-[0.25em] text-[#121110] bg-[#FCFAF6]/95 hover:bg-[#FCFAF6] shadow-2xl px-6 py-3 rounded-full transition-all flex items-center gap-2 duration-300 scale-100 hover:scale-105 active:scale-95 cursor-pointer uppercase border border-neutral-200/20 backdrop-blur-sm",
              children: [
                l.jsx("span", { children: "Skip Intro" }),
                l.jsx(VS, { className: "w-3.5 h-3.5 text-[#E65F1B]" }),
              ],
            }),
        }),
      }),
    ],
  });
}


export default BA;
