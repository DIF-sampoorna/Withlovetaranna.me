import * as React from 'react';
import { useState, useEffect } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const l = { jsx, jsxs, Fragment };
import { Lock as Du, LockOpen as Ix, Settings as t2, X as Bx, Menu as XS, ArrowUpRight as LS } from 'lucide-react';
import * as k from 'react';

const Lh = [
  { id: "home", num: ".01", label: "HOME" },
  { id: "social-entrepreneur", num: ".02", label: "SOCIAL ENTREPRENEUR" },
  { id: "writer", num: ".03", label: "WRITER" },
  { id: "public-speaker", num: ".04", label: "PUBLIC SPEAKER" },
  { id: "model", num: ".05", label: "MODEL" },
  { id: "gallery", num: ".06", label: "GALLERY" },
];

function i2({ currentView: e = "home", setCurrentView: t }) {
  const [n, r] = k.useState("home"),
    [s, i] = k.useState(!1),
    [o, a] = k.useState(!1),
    [u, c] = k.useState(!1),
    [d, f] = k.useState(
      () => localStorage.getItem("collage_layout_locked") === "true",
    );
  k.useEffect(() => {
    const v = (p) => {
        p.detail !== void 0 && c(!!p.detail);
      },
      y = (p) => {
        p.detail !== void 0 && f(!!p.detail);
      };
    return (
      window.addEventListener("dev-mode-changed", v),
      window.addEventListener("dev-lock-changed", y),
      window.dispatchEvent(new CustomEvent("request-dev-state")),
      () => {
        (window.removeEventListener("dev-mode-changed", v),
          window.removeEventListener("dev-lock-changed", y));
      }
    );
  }, []);
  const h = () => {
      window.dispatchEvent(new CustomEvent("toggle-dev-mode"));
    },
    x = () => {
      const v = !d;
      (f(v),
        localStorage.setItem("collage_layout_locked", String(v)),
        window.dispatchEvent(
          new CustomEvent("toggle-dev-lock", { detail: v }),
        ));
    };
  (k.useEffect(() => {
    if (e !== "home") return;
    const v = () => {
      a(window.scrollY > 50);
      const y = window.scrollY + 180;
      for (const p of Lh) {
        const m = document.getElementById(p.id);
        if (m) {
          const g = m.offsetTop,
            b = m.offsetHeight;
          y >= g && y < g + b && r(p.id);
        }
      }
    };
    return (
      window.addEventListener("scroll", v),
      () => window.removeEventListener("scroll", v)
    );
  }, [e]),
    k.useEffect(() => {
      a(!1);
    }, [e]));
  const w = (v) => {
    if ((i(!1), t)) (t(v), window.scrollTo({ top: 0, behavior: "smooth" }));
    else {
      const y = document.getElementById(v);
      y && window.scrollTo({ top: y.offsetTop - 80, behavior: "smooth" });
    }
  };
  return l.jsxs("header", {
    className: `fixed top-0 inset-x-0 z-40 transition-all duration-300 pointer-events-none ${o || e !== "home" ? "bg-transparent py-3 md:py-4" : "bg-transparent py-5 md:py-6"}`,
    children: [
      l.jsxs("div", {
        className:
          "max-w-none px-10 md:px-12 flex items-center justify-between pointer-events-auto",
        children: [
          l.jsx("div", {
            onClick: () => w("home"),
            className: "flex items-center gap-3 cursor-pointer group",
            children: l.jsx("img", {
              src: "/tarranalogo.png",
              alt: "NGO Logo",
              className:
                "h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 -ml-3 md:-ml-8",
              referrerPolicy: "no-referrer",
            }),
          }),
          l.jsxs("div", {
            className: "flex items-center gap-4",
            children: [
              e === "home" &&
                l.jsxs(l.Fragment, {
                  children: [
                    u &&
                      l.jsxs("button", {
                        id: "btn-dev-lock-toggle",
                        onClick: x,
                        className: `flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${d ? "bg-red-500 text-white border-red-600 hover:bg-red-600" : "bg-emerald-500 text-white border-emerald-600 hover:bg-emerald-600"}`,
                        children: [
                          d
                            ? l.jsx(Du, { className: "w-3.5 h-3.5" })
                            : l.jsx(Ix, { className: "w-3.5 h-3.5" }),
                          d ? "Locked" : "Unlocked",
                        ],
                      }),
                    l.jsxs("button", {
                      id: "btn-dev-align-toggle",
                      onClick: h,
                      className: `flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase border transition-all duration-300 shadow-xs cursor-pointer ${u ? "bg-amber-500 text-white border-amber-600 hover:bg-amber-600 animate-pulse" : "bg-neutral-100 text-neutral-600 border-neutral-200 hover:bg-neutral-200"}`,
                      children: [
                        l.jsx(t2, {
                          className: `w-3.5 h-3.5 ${u ? "animate-spin" : ""}`,
                        }),
                        u ? "Dev Mode Active" : "Adjust Image Positions",
                      ],
                    }),
                  ],
                }),
              l.jsx("button", {
                onClick: () => i(!s),
                className:
                  "text-neutral-900 hover:text-neutral-600 transition-all duration-300 cursor-pointer flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200/80 hover:bg-neutral-50 shrink-0",
                "aria-label": s ? "Close menu" : "Open menu",
                children: s
                  ? l.jsxs(l.Fragment, {
                      children: [
                        l.jsx("span", {
                          className:
                            "font-mono text-xs tracking-wider uppercase font-bold text-neutral-500",
                          children: "CLOSE",
                        }),
                        l.jsx(Bx, { className: "w-5 h-5 text-neutral-700" }),
                      ],
                    })
                  : l.jsxs(l.Fragment, {
                      children: [
                        l.jsx("span", {
                          className:
                            "font-mono text-xs tracking-wider uppercase font-bold text-neutral-600",
                          children: "MENU",
                        }),
                        l.jsx(XS, {
                          className: "w-5 h-5 text-neutral-700 animate-pulse",
                        }),
                      ],
                    }),
              }),
            ],
          }),
        ],
      }),
      s &&
        l.jsx("div", {
          className:
            "absolute top-full inset-x-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-xl px-6 py-8 z-50 pointer-events-auto animate-in fade-in slide-in-from-top-3 duration-300",
          children: l.jsx("div", {
            className: "max-w-4xl mx-auto",
            children: l.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3",
              children: Lh.map((v) => {
                const y = e === v.id || (e === "home" && n === v.id);
                return l.jsxs(
                  "button",
                  {
                    onClick: () => w(v.id),
                    className:
                      "group flex items-center justify-between text-left py-3 px-4 rounded-xl hover:bg-neutral-50/70 border border-transparent hover:border-neutral-100 transition-all duration-300 cursor-pointer",
                    children: [
                      l.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[10px] text-neutral-400 font-bold group-hover:text-amber-600 transition-colors",
                            children: v.num,
                          }),
                          l.jsx("span", {
                            className: `font-heading text-xs tracking-wider font-semibold transition-colors ${y ? "text-neutral-950 font-bold" : "text-neutral-600 group-hover:text-neutral-950"}`,
                            children: v.label,
                          }),
                        ],
                      }),
                      l.jsx(LS, {
                        className:
                          "w-3.5 h-3.5 text-neutral-300 group-hover:text-neutral-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all",
                      }),
                    ],
                  },
                  v.id,
                );
              }),
            }),
          }),
        }),
    ],
  });
}


export default i2;
