import * as React from 'react';
import { useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
const l = { jsx, jsxs };
import { motion as X } from 'motion/react';
import uP from './EditorialHeroCollage';
import * as k from 'react';

function cP() {
  const [e, t] = k.useState("normal"),
    [n, r] = k.useState(1.15),
    [s, i] = k.useState(1),
    [o, a] = k.useState(1);
  return l.jsx("section", {
    id: "interactive-hero",
    className:
      "relative w-full pt-28 md:pt-32 pb-0 px-4 md:px-6 flex items-center justify-center overflow-hidden",
    children: l.jsxs("div", {
      className:
        "w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12",
      children: [
        l.jsx(X.div, {
          initial: { opacity: 0, x: -30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, delay: 0.3 },
          className:
            "text-neutral-950 uppercase shrink-0 text-center md:text-right",
          children: l.jsxs("div", {
            className:
              "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap",
            children: [
              "Founder.",
              l.jsx("span", { className: "md:hidden", children: " " }),
              l.jsx("span", {
                className: "hidden md:inline",
                children: l.jsx("br", {}),
              }),
              l.jsx("span", {
                className: "mt-1 md:block",
                children: "Writer.",
              }),
            ],
          }),
        }),
        l.jsx("div", {
          className:
            "w-[290px] sm:w-[450px] md:w-[560px] lg:w-[672px] max-w-full flex items-center justify-center shrink-0",
          children: l.jsx(uP, {
            currentImageUrl: "/taranna.png",
            blendMode: e,
            contrast: n,
            brightness: s,
            saturate: o,
          }),
        }),
        l.jsx(X.div, {
          initial: { opacity: 0, x: 30 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.9, delay: 0.3 },
          className:
            "text-neutral-950 uppercase shrink-0 text-center md:text-left",
          children: l.jsxs("div", {
            className:
              "font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight block leading-none whitespace-nowrap",
            children: [
              "Speaker.",
              l.jsx("span", { className: "md:hidden", children: " " }),
              l.jsx("span", {
                className: "hidden md:inline",
                children: l.jsx("br", {}),
              }),
              l.jsx("span", { className: "mt-1 md:block", children: "Model." }),
            ],
          }),
        }),
      ],
    }),
  });
}


export default cP;
