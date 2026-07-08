import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const l = { jsx, jsxs, Fragment };
import { SlidersVertical as Ox, Lock as Du, LockOpen as Ix, Code as BS, RotateCcw as JS, Move as QS, Check as Au, Copy as _S } from 'lucide-react';
import * as k from 'react';

const lP = [
  { left: 0, top: 0, width: 71, height: 18 },
  { left: 71, top: 0, width: 29, height: 18 },
  { left: 0, top: 18, width: 71, height: 27 },
  { left: 71, top: 18, width: 29, height: 27 },
  { left: 0, top: 45, width: 49, height: 15 },
  { left: 0, top: 60, width: 28, height: 15 },
  { left: 28, top: 60, width: 21, height: 15 },
  { left: 49, top: 45, width: 22, height: 30 },
  { left: 71, top: 45, width: 29, height: 30 },
  { left: 0, top: 75, width: 28, height: 13 },
  { left: 28, top: 75, width: 43, height: 13 },
  { left: 71, top: 75, width: 29, height: 13 },
];

const kl = {
  0: { scale: 10, offsetX: 113, offsetY: 67 },
  1: { scale: 100, offsetX: 0, offsetY: 0 },
  2: { scale: 100, offsetX: 0, offsetY: 0 },
  3: { scale: 10, offsetX: -46, offsetY: 143 },
  4: { scale: 100, offsetX: 0, offsetY: 0 },
  5: { scale: 100, offsetX: 0, offsetY: 0 },
  6: { scale: 10, offsetX: -39, offsetY: 94 },
  7: { scale: 10, offsetX: -10, offsetY: 113 },
  8: { scale: 105, offsetX: 0, offsetY: -10 },
  9: { scale: 100, offsetX: 0, offsetY: 0 },
  10: { scale: 10, offsetX: 3, offsetY: 24 },
  11: { scale: 10, offsetX: -33, offsetY: 0 },
};

function uP({
  currentImageUrl: e = "/taranna.png",
  blendMode: t = "normal",
  contrast: n = 1,
  brightness: r = 1,
  saturate: s = 1,
}) {
  var Ue, _, P, L, $, K;
  const [i, o] = k.useState(1),
    [a, u] = k.useState(!1),
    [c, d] = k.useState(!0),
    [f, h] = k.useState(0),
    [x, w] = k.useState(!1),
    [v, y] = k.useState({}),
    p = k.useRef(null),
    [m, g] = k.useState(
      () => localStorage.getItem("collage_layout_locked") !== "false",
    );
  k.useEffect(() => {
    const E = () => {
        u((G) => !G);
      },
      D = (G) => {
        G.detail !== void 0 ? g(G.detail) : g((We) => !We);
      },
      B = () => {
        setTimeout(() => {
          (window.dispatchEvent(
            new CustomEvent("dev-mode-changed", { detail: a }),
          ),
            window.dispatchEvent(
              new CustomEvent("dev-lock-changed", { detail: m }),
            ));
        }, 0);
      };
    (window.addEventListener("toggle-dev-mode", E),
      window.addEventListener("toggle-dev-lock", D),
      window.addEventListener("request-dev-state", B));
    const me = setTimeout(() => {
      (window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: a })),
        window.dispatchEvent(
          new CustomEvent("dev-lock-changed", { detail: m }),
        ));
    }, 0);
    return () => {
      (window.removeEventListener("toggle-dev-mode", E),
        window.removeEventListener("toggle-dev-lock", D),
        window.removeEventListener("request-dev-state", B),
        clearTimeout(me));
    };
  }, [a, m]);
  const [b, S] = k.useState(() => {
    const E = localStorage.getItem("collage_image_settings");
    if (E)
      try {
        const parsed = JSON.parse(E);
        if (parsed && parsed[0] && (parsed[0].scale === 120 || parsed[0].scale === 100)) {
          return kl;
        }
        return parsed;
      } catch (D) {
        console.error("Failed to parse saved collage settings", D);
      }
    return kl;
  });
  (k.useEffect(() => {
    localStorage.setItem("collage_image_settings", JSON.stringify(b));
  }, [b]),
    k.useEffect(() => {
      localStorage.setItem("collage_layout_locked", String(m));
    }, [m]));
  const [j, N] = k.useState(null),
    T = (E, D) => {
      if (!a || m) return;
      (E.preventDefault(), h(D));
      const B = b[D] || { offsetX: 0, offsetY: 0 };
      N({
        isDragging: !0,
        cellIdx: D,
        startX: E.clientX,
        startY: E.clientY,
        startOffsetX: B.offsetX,
        startOffsetY: B.offsetY,
      });
    },
    R = (E) => {
      if (m || !j || !j.isDragging) return;
      E.preventDefault();
      const D = E.clientX - j.startX,
        B = E.clientY - j.startY;
      S((me) => ({
        ...me,
        [j.cellIdx]: {
          ...me[j.cellIdx],
          offsetX: Math.round(j.startOffsetX + D),
          offsetY: Math.round(j.startOffsetY + B),
        },
      }));
    },
    M = () => {
      j && N(null);
    },
    z = (E, D) => {
      if (!a || m) return;
      const B = E.touches[0];
      h(D);
      const me = b[D] || { offsetX: 0, offsetY: 0 };
      N({
        isDragging: !0,
        cellIdx: D,
        startX: B.clientX,
        startY: B.clientY,
        startOffsetX: me.offsetX,
        startOffsetY: me.offsetY,
      });
    },
    ae = (E) => {
      if (m || !j || !j.isDragging) return;
      const D = E.touches[0],
        B = D.clientX - j.startX,
        me = D.clientY - j.startY;
      S((G) => ({
        ...G,
        [j.cellIdx]: {
          ...G[j.cellIdx],
          offsetX: Math.round(j.startOffsetX + B),
          offsetY: Math.round(j.startOffsetY + me),
        },
      }));
    };
  (k.useEffect(() => {
    const E = p.current;
    if (!E || !a || m) return;
    const D = (B) => {
      const G = B.target.closest("[id^='collage-cell-']");
      if (!G) return;
      const We = G.id.replace("collage-cell-", ""),
        we = parseInt(We, 10);
      isNaN(we) ||
        (B.preventDefault(),
        h(we),
        S((An) => {
          const $t = An[we] || { scale: 100 },
            Zt = B.deltaY < 0 ? 5 : -5,
            sr = Math.min(1e3, Math.max(10, $t.scale + Zt));
          return { ...An, [we]: { ...An[we], scale: sr } };
        }));
    };
    return (
      E.addEventListener("wheel", D, { passive: !1 }),
      () => {
        E.removeEventListener("wheel", D);
      }
    );
  }, [a, m]),
    k.useEffect(() => {
      if (x) {
        const E = setTimeout(() => w(!1), 2e3);
        return () => clearTimeout(E);
      }
    }, [x]));
  const ve = () => {
      const E = `// Saved Image Settings Alignment
const SAVED_SETTINGS = ${JSON.stringify(b, null, 2)};`;
      navigator.clipboard.writeText(E).then(() => {
        w(!0);
      });
    },
    ze = (E) => {
      S((D) => ({
        ...D,
        [E]: kl[E] || { scale: 100, offsetX: 0, offsetY: 0 },
      }));
    },
    Ce = () => {
      S(kl);
    };
  return l.jsxs("section", {
    className:
      "relative w-full max-w-2xl mx-auto p-4 pb-0 flex flex-col items-center justify-center",
    children: [
      l.jsx("div", {
        ref: p,
        className:
          "w-full flex items-center justify-center bg-transparent overflow-hidden select-none relative",
        onMouseMove: R,
        onMouseUp: M,
        onMouseLeave: M,
        onTouchMove: ae,
        onTouchEnd: M,
        children: l.jsx("div", {
          className: `relative w-full max-w-full select-none bg-transparent flex items-center justify-center ${a && c ? "overflow-visible" : "overflow-hidden"}`,
          style: { aspectRatio: i ? i / 0.88 : 0.97 },
          children: l.jsxs("div", {
            className: `absolute inset-0 w-full h-full ${a && c ? "overflow-visible" : "overflow-hidden"}`,
            style: {
              WebkitMaskImage: a && c ? "none" : 'url("/taranna.png")',
              maskImage: a && c ? "none" : 'url("/taranna.png")',
              WebkitMaskSize: "100% 113.636%",
              maskSize: "100% 113.636%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "top left",
              maskPosition: "top left",
            },
            children: [
              l.jsx("img", {
                src: "/taranna.png",
                onLoad: (E) => {
                  const D = E.currentTarget;
                  D.naturalWidth &&
                    D.naturalHeight &&
                    o(D.naturalWidth / D.naturalHeight);
                },
                onError: () => {
                  o(0.85);
                },
                className: "absolute opacity-0 pointer-events-none w-0 h-0",
                "aria-hidden": "true",
                alt: "",
              }),
              lP.map((E, D) => {
                const B = E.top / 0.88,
                  me = E.height / 0.88,
                  G = b[D] || { scale: 100, offsetX: 0, offsetY: 0 },
                  We = f === D,
                  we = a && c && We,
                  An =
                    D === 8
                      ? "/TD-382.jpg.jpeg"
                      : D === 3
                        ? "/NOVA0019.JPG.jpeg"
                        : D === 0
                          ? "/NOV00034.JPG.jpeg"
                          : D === 6
                            ? "/Speaker.JPG.jpeg?v=fresh"
                            : D === 7
                              ? "/ear.jpeg"
                              : D === 10
                                ? "/kitt.jpeg"
                                : D === 11
                                  ? "/TD-297.jpg.jpeg"
                                  : e;
                return l.jsxs(
                  "div",
                  {
                    id: `collage-cell-${D}`,
                    onMouseDown: ($t) => T($t, D),
                    onTouchStart: ($t) => z($t, D),
                    className: `absolute border-[0.15cqw] border-white bg-white transition-shadow duration-300 ${we ? "overflow-visible z-50 shadow-2xl" : "overflow-hidden"} ${a ? "cursor-move group" : ""} ${a && We ? "ring-2 ring-amber-500 ring-offset-1 z-20 shadow-md" : a ? "hover:ring-1 hover:ring-amber-400 z-10" : ""}`,
                    style: {
                      left: `${E.left}%`,
                      top: `${B}%`,
                      width: `${E.width}%`,
                      height: `${me}%`,
                    },
                    children: [
                      l.jsx("img", {
                        src: An,
                        draggable: "false",
                        onLoad: ($t) => {
                          const Zt = $t.currentTarget;
                          Zt.naturalWidth &&
                            Zt.naturalHeight &&
                            y((sr) => ({
                              ...sr,
                              [D]: Zt.naturalWidth / Zt.naturalHeight,
                            }));
                        },
                        className:
                          "absolute pointer-events-none select-none max-w-none transition-all duration-75 origin-center",
                        style:
                          D === 8 ||
                          D === 3 ||
                          D === 0 ||
                          D === 6 ||
                          D === 7 ||
                          D === 10 ||
                          D === 11
                            ? {
                                position: "absolute",
                                left: "50%",
                                top: "50%",
                                width: "auto",
                                height: "auto",
                                minWidth: "100%",
                                minHeight: "100%",
                                mixBlendMode:
                                  t === "multiply" ? "multiply" : "normal",
                                filter: `contrast(${n}) brightness(${r}) saturate(${s})`,
                                transform: `translate(-50%, -50%) translate(${G.offsetX}px, ${G.offsetY}px) scale(${G.scale / 100})`,
                                opacity: we ? 0.65 : 1,
                                outline: we ? "2px dashed #f59e0b" : "none",
                                outlineOffset: "-2px",
                                backgroundColor: we
                                  ? "rgba(245, 158, 11, 0.15)"
                                  : "transparent",
                              }
                            : {
                                left: `-${(E.left * 100) / E.width}%`,
                                top: `-${(E.top * 100) / E.height}%`,
                                width: `${(100 * 100) / E.width}%`,
                                height: `${(100 * 100) / E.height}%`,
                                mixBlendMode:
                                  t === "multiply" ? "multiply" : "normal",
                                filter: `contrast(${n}) brightness(${r}) saturate(${s})`,
                                objectFit: "fill",
                                transform: `scale(${G.scale / 100}) translate(${G.offsetX}px, ${G.offsetY}px)`,
                                opacity: we ? 0.65 : 1,
                                outline: we ? "2px dashed #f59e0b" : "none",
                                outlineOffset: "-2px",
                                backgroundColor: we
                                  ? "rgba(245, 158, 11, 0.15)"
                                  : "transparent",
                              },
                        referrerPolicy: "no-referrer",
                        alt: "",
                      }),
                      D === 2 &&
                        l.jsx("div", {
                          className:
                            "absolute inset-0 pointer-events-none bg-red-600 mix-blend-multiply opacity-100",
                          style: { mixBlendMode: "multiply" },
                        }),
                      a &&
                        l.jsxs("div", {
                          className:
                            "absolute inset-0 bg-black/25 flex flex-col justify-between p-1 select-none pointer-events-none",
                          children: [
                            l.jsxs("span", {
                              className:
                                "text-[9px] font-mono font-bold bg-black/70 text-white px-1 py-0.2 rounded w-fit",
                              children: ["#", D],
                            }),
                            We &&
                              l.jsx("span", {
                                className:
                                  "text-[8px] font-mono font-medium text-amber-300 bg-amber-950/80 px-1 py-0.2 rounded self-end",
                                children: "Active",
                              }),
                          ],
                        }),
                    ],
                  },
                  D,
                );
              }),
            ],
          }),
        }),
      }),
      a &&
        l.jsxs("div", {
          id: "dev-controls-panel",
          className:
            "w-full mt-6 bg-white border border-neutral-200 rounded-xl p-5 shadow-lg max-w-xl transition-all duration-300",
          children: [
            l.jsxs("div", {
              className:
                "flex items-center justify-between border-b border-neutral-100 pb-3 mb-4",
              children: [
                l.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    l.jsx(Ox, { className: "w-4 h-4 text-amber-500" }),
                    l.jsx("h4", {
                      className:
                        "text-sm font-sans font-semibold text-neutral-900 tracking-tight",
                      children: "Alignment Adjuster Panel",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className: "flex gap-1.5 items-center",
                  children: [
                    l.jsxs("button", {
                      id: "btn-dev-lock-panel-toggle",
                      onClick: () => g(!m),
                      className: `flex items-center gap-1 px-2 py-1 border text-xxs font-mono rounded transition-colors cursor-pointer ${m ? "bg-red-100 border-red-300 text-red-800 hover:bg-red-200 font-bold" : "bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200"}`,
                      title: m
                        ? "Unlock positions"
                        : "Lock positions to prevent changes",
                      children: [
                        m
                          ? l.jsx(Du, { className: "w-3 h-3" })
                          : l.jsx(Ix, { className: "w-3 h-3" }),
                        m ? "LOCKED" : "UNLOCKED",
                      ],
                    }),
                    l.jsxs("button", {
                      id: "btn-dev-toggle-out-of-bounds",
                      onClick: () => d(!c),
                      className: `flex items-center gap-1.5 px-2 py-1 border text-xxs font-mono rounded transition-colors ${c ? "bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"}`,
                      title: "Toggle showing uncropped overflow image",
                      children: [
                        l.jsx(BS, { className: "w-3 h-3" }),
                        c ? "Full Canvas: ON" : "Full Canvas: OFF",
                      ],
                    }),
                    l.jsxs("button", {
                      id: "btn-dev-reset-all",
                      onClick: Ce,
                      className:
                        "flex items-center gap-1.5 px-2 py-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 text-xxs font-mono rounded",
                      children: [
                        l.jsx(JS, { className: "w-3 h-3" }),
                        "Reset All",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className: "relative",
              children: [
                m &&
                  l.jsxs("div", {
                    className:
                      "absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4 rounded-xl z-20",
                    children: [
                      l.jsx(Du, {
                        className: "w-8 h-8 text-red-500 mb-2 animate-bounce",
                      }),
                      l.jsx("h5", {
                        className:
                          "font-bold text-xs font-mono uppercase text-neutral-800 tracking-wider",
                        children: "Alignment Controls Locked",
                      }),
                      l.jsx("p", {
                        className:
                          "text-[10px] text-neutral-500 max-w-xs mt-1 font-sans leading-relaxed",
                        children:
                          "Accidental drags, wheel scrolls, and zoom actions are blocked. Toggle lock state to modify cell positions.",
                      }),
                      l.jsx("button", {
                        onClick: () => g(!1),
                        className:
                          "mt-3 px-3 py-1 bg-neutral-900 hover:bg-neutral-850 text-white rounded font-mono text-[9px] uppercase tracking-wider shadow-xs transition-all cursor-pointer",
                        children: "Unlock Controls",
                      }),
                    ],
                  }),
                l.jsxs("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-5",
                  children: [
                    l.jsxs("div", {
                      className: "flex flex-col gap-3",
                      children: [
                        l.jsx("label", {
                          className:
                            "text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider",
                          children: "Select Active Cell",
                        }),
                        l.jsx("div", {
                          className: "grid grid-cols-7 gap-1",
                          children: [0, 3, 6, 7, 8, 10, 11].map((E) =>
                            l.jsxs(
                              "button",
                              {
                                onClick: () => h(E),
                                className: `px-1 py-1.5 rounded text-[9px] font-mono font-medium border text-left flex flex-col justify-between transition-all duration-200 ${f === E ? "bg-neutral-900 text-white border-neutral-900 shadow-sm" : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"}`,
                                children: [
                                  l.jsxs("span", {
                                    className: "font-bold text-[9px]",
                                    children: ["Cell ", E],
                                  }),
                                  l.jsx("span", {
                                    className:
                                      "text-[8px] opacity-75 truncate max-w-full",
                                    children:
                                      E === 0
                                        ? "NOV00034"
                                        : E === 3
                                          ? "NOVA0019"
                                          : E === 6
                                            ? "TD-086"
                                            : E === 7
                                              ? "Ear"
                                              : E === 8
                                                ? "TD-382"
                                                : E === 10
                                                  ? "TD-263"
                                                  : "TD-297",
                                  }),
                                ],
                              },
                              E,
                            ),
                          ),
                        }),
                        l.jsx("div", {
                          className:
                            "mt-1 flex items-center gap-2 justify-between",
                          children: l.jsxs("div", {
                            className: "flex items-center gap-1",
                            children: [
                              l.jsx("span", {
                                className:
                                  "text-[10px] font-mono text-neutral-500",
                                children: "Other cells:",
                              }),
                              l.jsx("select", {
                                value: f,
                                onChange: (E) => h(Number(E.target.value)),
                                className:
                                  "bg-neutral-50 border border-neutral-200 rounded text-xxs font-mono p-1 text-neutral-700",
                                children: [1, 2, 4, 5, 9].map((E) =>
                                  l.jsxs(
                                    "option",
                                    {
                                      value: E,
                                      children: ["Cell ", E, " (Slices)"],
                                    },
                                    E,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                        l.jsxs("div", {
                          className:
                            "flex items-center justify-between p-2.5 bg-amber-50/30 border border-amber-100 rounded-lg",
                          children: [
                            l.jsxs("div", {
                              className: "flex flex-col pr-1",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-[10px] font-mono font-bold text-neutral-700 uppercase tracking-wider",
                                  children: "Uncropped View",
                                }),
                                l.jsx("span", {
                                  className:
                                    "text-[9px] text-neutral-400 font-sans leading-tight",
                                  children:
                                    "Reveal full outer margins of image",
                                }),
                              ],
                            }),
                            l.jsx("button", {
                              id: "toggle-reveal-bounds",
                              onClick: () => d(!c),
                              className: `w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-hidden shrink-0 ${c ? "bg-amber-500" : "bg-neutral-300"}`,
                              children: l.jsx("div", {
                                className: `bg-white w-4 h-4 rounded-full shadow-xs transform duration-200 ${c ? "translate-x-4" : "translate-x-0"}`,
                              }),
                            }),
                          ],
                        }),
                        l.jsx("div", {
                          className:
                            "mt-2 p-3 bg-neutral-50 border border-neutral-150 rounded-lg",
                          children: l.jsxs("p", {
                            className:
                              "text-[11px] text-neutral-600 leading-relaxed font-sans flex items-start gap-1.5",
                            children: [
                              l.jsx(QS, {
                                className:
                                  "w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5",
                              }),
                              l.jsxs("span", {
                                children: [
                                  l.jsx("strong", {
                                    children: "Drag directly on active image:",
                                  }),
                                  " Drag and pan images live on the canvas! A dashed boundary outline shows the full image.",
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className: "flex flex-col gap-4",
                      children: [
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Scale (Zoom)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    ((Ue = b[f]) == null ? void 0 : Ue.scale) ??
                                      100,
                                    "%",
                                  ],
                                }),
                              ],
                            }),
                            l.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                l.jsx("button", {
                                  onClick: () => {
                                    S((E) => {
                                      var B;
                                      const D =
                                        ((B = E[f]) == null
                                          ? void 0
                                          : B.scale) ?? 100;
                                      return {
                                        ...E,
                                        [f]: {
                                          ...E[f],
                                          scale: Math.max(10, D - 5),
                                        },
                                      };
                                    });
                                  },
                                  className:
                                    "p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none",
                                  title: "Zoom Out",
                                  children: "-",
                                }),
                                l.jsx("input", {
                                  type: "range",
                                  min: "10",
                                  max: "1000",
                                  value:
                                    ((_ = b[f]) == null ? void 0 : _.scale) ??
                                    100,
                                  onChange: (E) => {
                                    const D = Number(E.target.value);
                                    S((B) => ({
                                      ...B,
                                      [f]: { ...B[f], scale: D },
                                    }));
                                  },
                                  className:
                                    "flex-1 accent-amber-500 cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none",
                                }),
                                l.jsx("button", {
                                  onClick: () => {
                                    S((E) => {
                                      var B;
                                      const D =
                                        ((B = E[f]) == null
                                          ? void 0
                                          : B.scale) ?? 100;
                                      return {
                                        ...E,
                                        [f]: {
                                          ...E[f],
                                          scale: Math.min(1e3, D + 5),
                                        },
                                      };
                                    });
                                  },
                                  className:
                                    "p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none",
                                  title: "Zoom In",
                                  children: "+",
                                }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Offset X (Horizontal)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    ((P = b[f]) == null ? void 0 : P.offsetX) ??
                                      0,
                                    "px",
                                  ],
                                }),
                              ],
                            }),
                            l.jsx("input", {
                              type: "range",
                              min: "-250",
                              max: "250",
                              value:
                                ((L = b[f]) == null ? void 0 : L.offsetX) ?? 0,
                              onChange: (E) => {
                                const D = Number(E.target.value);
                                S((B) => ({
                                  ...B,
                                  [f]: { ...B[f], offsetX: D },
                                }));
                              },
                              className:
                                "w-full accent-amber-500 cursor-pointer",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-1.5",
                          children: [
                            l.jsxs("div", {
                              className:
                                "flex justify-between text-xxs font-mono",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "text-neutral-500 uppercase font-semibold",
                                  children: "Offset Y (Vertical)",
                                }),
                                l.jsxs("span", {
                                  className: "text-neutral-900 font-bold",
                                  children: [
                                    (($ = b[f]) == null ? void 0 : $.offsetY) ??
                                      0,
                                    "px",
                                  ],
                                }),
                              ],
                            }),
                            l.jsx("input", {
                              type: "range",
                              min: "-250",
                              max: "250",
                              value:
                                ((K = b[f]) == null ? void 0 : K.offsetY) ?? 0,
                              onChange: (E) => {
                                const D = Number(E.target.value);
                                S((B) => ({
                                  ...B,
                                  [f]: { ...B[f], offsetY: D },
                                }));
                              },
                              className:
                                "w-full accent-amber-500 cursor-pointer",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex gap-2 mt-2",
                          children: [
                            l.jsx("button", {
                              onClick: () => ze(f),
                              className:
                                "flex-1 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xxs font-mono rounded border border-neutral-200 transition-colors",
                              children: "Reset Current Cell",
                            }),
                            l.jsx("button", {
                              onClick: ve,
                              className: `flex-1 py-1.5 text-xxs font-mono rounded border flex items-center justify-center gap-1.5 transition-all duration-300 ${x ? "bg-emerald-500 text-white border-emerald-600" : "bg-neutral-900 text-white border-neutral-950 hover:bg-neutral-800"}`,
                              children: x
                                ? l.jsxs(l.Fragment, {
                                    children: [
                                      l.jsx(Au, { className: "w-3.5 h-3.5" }),
                                      "Copied!",
                                    ],
                                  })
                                : l.jsxs(l.Fragment, {
                                    children: [
                                      l.jsx(_S, { className: "w-3.5 h-3.5" }),
                                      "Copy Alignment Code",
                                    ],
                                  }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400",
              children: [
                l.jsx("span", { children: "Development Tool active" }),
                l.jsxs("span", {
                  className:
                    "text-neutral-500 font-semibold bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100",
                  children: ["Selected: Cell ", f],
                }),
              ],
            }),
          ],
        }),
    ],
  });
}


export default uP;
