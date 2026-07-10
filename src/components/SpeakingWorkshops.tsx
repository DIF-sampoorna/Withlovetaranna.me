import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
const l = { jsx, jsxs };
import { motion as X, AnimatePresence as Vr } from 'motion/react';
import { Check as Au, Heart as ba, ChevronRight as co, Play as Fx, Compass as Lx, Instagram as Mu, SlidersVertical as Ox, MessageSquare as qS, ExternalLink as Rh, ArrowLeft as RS, Volume2 as s2, Eye as zS, Youtube as Vh, Award as $S } from 'lucide-react';
import * as k from 'react';
import CMSImage from './CMSImage';

function pP({ view: e, onBack: t, onNavigate: n }) {
  const [r, s] = k.useState(null),
    [i, o] = k.useState(!1),
    [a, u] = k.useState("1000"),
    [c, d] = k.useState(""),
    [f, h] = k.useState(""),
    [x, w] = k.useState(null),
    [v, y] = k.useState(0),
    [p, m] = k.useState(!1),
    [g, b] = k.useState(!1),
    [S, j] = k.useState("2026-07-15"),
    [N, T] = k.useState(null),
    [R, M] = k.useState(""),
    [z, ae] = k.useState(1.1),
    [ve, ze] = k.useState(1),
    Ce = (A, te) => {
      n ? n("gallery") : (T(A), M(te));
    },
    [Ue, _] = k.useState("youtube"),
    [P, L] = k.useState(null),
    [$, K] = k.useState(0),
    [E, D] = k.useState(""),
    [B, me] = k.useState(0),
    [G, We] = k.useState({
      "ig-monsoon": 4210,
      "ig-plus-size": 6842,
      "ig-adrak-chai": 3951,
    }),
    [we, An] = k.useState({}),
    [$t, Zt] = k.useState({
      "ig-monsoon": [
        {
          user: "rhea_mumbai",
          text: "This is so beautifully put. Mumbai at 4am has a different soul entirely.",
        },
        {
          user: "amit_sharma",
          text: "The concept of quiet inside is so true. Needed this reminder today.",
        },
      ],
      "ig-plus-size": [
        {
          user: "priya.garg",
          text: "You are such an inspiration Taranna! Thank you for walking so boldly.",
        },
        { user: "kabir_d", text: "All bodies are indeed great bodies! 👑" },
      ],
      "ig-adrak-chai": [
        {
          user: "nisha_reads",
          text: "A hot cup of adrak chai in the rain is therapeutic. Beautiful poetry.",
        },
        { user: "siddharth_99", text: "Tactile joys are the realest joys." },
      ],
    }),
    [sr, bf] = k.useState({});
  k.useEffect(() => {
    let A;
    if (P) {
      const ge =
        {
          "yt-disliked": [
            {
              time: 0,
              text: `🎥 [AUDIO PREVIEW] "We spend our entire lives managing other people's perceptions of us."`,
            },
            {
              time: 4,
              text: '"What if we just stopped and let them think what they want?"',
            },
            {
              time: 8,
              text: '"The moment you accept the freedom of being misunderstood..."',
            },
            {
              time: 12,
              text: '"...is the moment you actually start living on your own terms. Unapologetically."',
            },
          ],
          "yt-shame": [
            {
              time: 0,
              text: '🎥 [AUDIO PREVIEW] "Shame dies when it is spoken in a room where people listen."',
            },
            {
              time: 4,
              text: '"It thrives in the quiet, in the half-truths we keep telling ourselves."',
            },
            {
              time: 8,
              text: '"But the moment you name it, you strip it of all its power."',
            },
            {
              time: 12,
              text: `"So let's name it together. Let's make it speak, loud and clear."`,
            },
          ],
          "yt-body": [
            {
              time: 0,
              text: '🎥 [AUDIO PREVIEW] "Your body is not an ornament to look at; it is the home you live in."',
            },
            {
              time: 4,
              text: '"It is the vessel that carries your laughter, your stories, your work."',
            },
            {
              time: 8,
              text: '"We do not owe anyone a certain size to deserve space in a room."',
            },
            {
              time: 12,
              text: '"Existing loudly is a form of celebration. Every body is a great body."',
            },
          ],
        }[P] || [];
      (ge.length > 0 && D(ge[0].text),
        (A = setInterval(() => {
          me((Jt) => {
            const en = Jt + 1;
            if (en >= 16) return (L(null), K(0), D(""), 0);
            K((en / 16) * 100);
            const Ni = [...ge].reverse().find((nw) => en >= nw.time);
            return (Ni && D(Ni.text), en);
          });
        }, 1e3)));
    } else (me(0), K(0), D(""));
    return () => {
      A && clearInterval(A);
    };
  }, [P]);
  const q1 = (A) => {
      (A.preventDefault(),
        o(!0),
        setTimeout(() => {
          (o(!1), s(null), d(""), h(""));
        }, 2800));
    },
    Q1 = (A) => {
      (A.preventDefault(),
        b(!0),
        setTimeout(() => {
          (b(!1), m(!1));
        }, 2800));
    },
    Z1 = (A) => {
      const te = we[A];
      (An((ge) => ({ ...ge, [A]: !te })),
        We((ge) => ({ ...ge, [A]: ge[A] + (te ? -1 : 1) })));
    },
    Sf = (A) => {
      const te = sr[A] || "";
      te.trim() &&
        (Zt((ge) => ({
          ...ge,
          [A]: [
            ...(ge[A] || []),
            { user: "viewer_anonymous", text: te.trim() },
          ],
        })),
        bf((ge) => ({ ...ge, [A]: "" })));
    },
    kf = [
      {
        id: "yin-yang",
        title: "Yin and Yang",
        snippet: "A blessing built through repetition...",
        text: `I wish you adrak chai in the monsoon,
and a wool blanket that smells of yesterday's sun.
I wish you words that do not need to be explained,
and silences that feel like home.

I wish you the strength to break apart
so you may find how wide you can stretch.
I wish you the grace of water, flowing over stones,
and the stillness of the mountain at dusk.

I wish you… carrying the whole poem's rhythm.
Unmistakably, authentically yourself.`,
        vibe: "Warm / Rhythmic",
      },
      {
        id: "the-heart",
        title: "the heart",
        snippet: "Written from the perspective of a dying spouse...",
        text: `The machine next to me clicks like a clock.
You hold my hand, tracing the blue veins that have slowed.
Do not look for me only in quiet graves;
look for me in the warmth of the morning tea we shared,
in the laughter we left in Mumbai's dusty corners.

I am leaving my own point of view behind.
I am becoming the space between the notes of music you love.
Remember me as the fire that cannot be extinguished.`,
        vibe: "Confessional / Heavy",
      },
      {
        id: "loneliness",
        title: "Loneliness",
        snippet: "A heavy, unresolved gaze into distance...",
        text: `Mumbai is quietest at four in the morning.
The salt in the air is heavy, sticking to the window pane.
I make two cups of adrak chai,
knowing you are asleep four hundred miles away in Delhi.
The tea goes cold on the table.

We are close, yet we are so far away.
The ache in the body is just a map of where you are not.`,
        vibe: "Sensory / Blue",
      },
      {
        id: "39-beyond-here",
        title: "39. Beyond Here",
        snippet: "Sits in heavier, unresolved territory...",
        text: `We crossed the border on a Tuesday afternoon.
There were no signs, only the sudden turn of the trees.
You said, this is where we leave the shame behind.
We walked through four different rooms,
unguarded, looking for a place that didn't ask for permission to exist.

We have reached heights unknowingly,
becoming smooth and boundless like water.`,
        vibe: "Raw / Wit",
      },
      {
        id: "pani-puri",
        title: "Pani puri",
        snippet: "Pushes food-as-desire to its most playful extreme...",
        text: `The mint water is cold against the hot skin of the afternoon.
A single crunch.
The sudden, sharp burst of spice that makes you close your eyes.
It is sweet, it is burning, it is messy.

Just like the way you look at me across the table.
We do not speak,
we just swallow the longing, one bite at a time.`,
        vibe: "Playful / Tactile",
      },
      {
        id: "searching-home",
        title: "Searching for a home",
        snippet: "Built almost entirely out of the five senses...",
        text: `A sound like dry leaves scraping against cement.
The sharp smell of old yellowed paper and wet asphalt.
The touch of old teak wood that has survived fifty monsoon seasons.
The taste of salt on my tongue as the wind blows from the sea.

I am cataloging my world with precision.
I am finding that home is not a place with doors,
but the skin I live in.`,
        vibe: "Grounded / Senses",
      },
    ],
    J1 = [
      {
        title: "Shame and guilt — naming them instead of managing around them",
        desc: "Delving deep into the emotional blocks that society teaches us to swallow. Taranna discusses how raw confession and public naming dismantle the power of shame, inviting audiences to step into radical self-acceptance.",
      },
      {
        title: "Rejection and difficult life experiences",
        desc: "An honest exploration of failures, career re-routes, and relational ruptures. Moving away from standard 'resilience' hype, she speaks on the quiet strength found in letting things break apart so they can expand.",
      },
      {
        title: "Yoga, wellness, and mental health",
        desc: "Integrating somatic practices with modern mental health advocacy. How alignment of the physical body serves as a baseline for emotional recovery and personal truth.",
      },
      {
        title: "Body positivity — 'all bodies are great bodies'",
        desc: "A direct challenge to systemic fatphobia and straight-size modeling standards. Taranna details the path from seeking external approval to existing loudly and joyfully.",
      },
      {
        title: "Authenticity — living without fear or hesitation",
        desc: "A manifesto on self-trust. How to build independent systems of self-approval and survive in creative spaces without needing permission to belong.",
      },
    ],
    ew = [
      {
        image: "/Modle.JPG.jpeg",
        caption: "Unbound Presence // Plus-Size Boldness",
        label: "Model",
      },
      {
        image: "/TD-297.jpg.jpeg",
        caption: "Textured Warmth // Modern Knitwear Poise",
        label: "Model",
      },
      {
        image: "/NOV00034.JPG.jpeg",
        caption: "Studio Amber Portrait // Warm-Toned Confidence",
        label: "Model",
      },
      {
        image: "/NOVA0019.JPG.jpeg",
        caption: "Soft Poise & Elegance // Representation Redefined",
        label: "Model",
      },
      {
        image: "/taranna.png",
        caption: "Cinematic Cover Silhouette // The Golden Gaze",
        label: "Editorial",
      },
      {
        image: "/TD-382.jpg.jpeg",
        caption: "Intense Sincerity // Editorial Poise",
        label: "Editorial",
      },
      {
        image: "/Speaker.JPG.jpeg",
        caption: "Sculpted Shadow-Play // Chiaroscuro Modeling",
        label: "Creative",
      },
      {
        image: "/Writer.jpg.jpeg",
        caption: "Contemplative Silence // Serene Studio Framing",
        label: "Creative",
      },
    ],
    tw = () => {
      switch (e) {
        case "social-entrepreneur":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#0e5fa3] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#0e5fa3] font-bold block uppercase mb-1",
                    children: "PAGE 1 // SOCIAL ENTREPRENEUR",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Deepjyoti India Foundation",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#E65F1B] mt-2",
                    children: 'Sampoorna — meaning "complete."',
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-8 flex flex-col gap-10",
                    children: [
                      l.jsx("div", {
                        className: "prose prose-neutral max-w-none",
                        children: l.jsx("p", {
                          className:
                            "font-sans font-light text-base md:text-lg text-neutral-600 leading-relaxed mb-6",
                          children:
                            "Taranna Deepjyoti is the founder of Deepjyoti India Foundation, which runs its flagship initiative, Sampoorna, out of Mumbai. Registered under 12A and 80G, CSR-compliant, and recognized by NITI Aayog, the foundation was built on a simple belief: that empowerment isn't complete unless it addresses the whole person — their health, their confidence, and their sense of dignity, together.",
                        }),
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-8",
                        children: [
                          l.jsxs("h2", {
                            className:
                              "font-heading text-xl md:text-2xl font-bold text-neutral-950 uppercase tracking-wider pb-3 border-b border-neutral-100 flex items-center gap-2",
                            children: [
                              l.jsx("span", {
                                className:
                                  "w-2.5 h-2.5 bg-[#0e5fa3] rounded-full",
                              }),
                              "What Sampoorna Does",
                            ],
                          }),
                          l.jsxs("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                            children: [
                              l.jsxs("div", {
                                className:
                                  "p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3",
                                children: [
                                  l.jsx("div", {
                                    className: "text-xl",
                                    children: "👩‍🦰",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-base font-bold text-neutral-900 uppercase",
                                    children: "Empowering Young Women",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                                    children:
                                      "At its core, Sampoorna works with young women to build mental health support and confidence into the same space — recognizing that self-worth and wellbeing aren't separate journeys. The goal isn't just intervention; it's helping women lead genuinely confident, fulfilling lives on their own terms.",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "p-6 rounded-2xl bg-white border border-neutral-100 shadow-xs flex flex-col gap-3",
                                children: [
                                  l.jsx("div", {
                                    className: "text-xl",
                                    children: "👴",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-base font-bold text-neutral-900 uppercase",
                                    children: "Caring for Senior Citizens",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light mb-2",
                                    children:
                                      "In 2024, Sampoorna expanded into elder care, launching regular health camps across old age homes in Guwahati, Assam. These camps bring qualified doctors in for essential checkups — but Sampoorna didn't stop at the clinical.",
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "mt-auto p-3.5 bg-amber-50/50 rounded-xl border border-amber-100/60 flex flex-col gap-1.5",
                                    children: [
                                      l.jsx("span", {
                                        className:
                                          "font-mono text-[8px] tracking-widest text-[#c57d11] font-bold uppercase",
                                        children: "SPECIAL PARTNERSHIP",
                                      }),
                                      l.jsx("p", {
                                        className:
                                          "font-sans text-[11px] text-neutral-600 leading-relaxed",
                                        children:
                                          "Partnering with the Assam Clowning Academy, we introduced medical clowning therapy: a joyful, disarming way to ease loneliness.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "p-6 rounded-2xl bg-[#FCFAF6] border border-neutral-100 flex flex-col gap-3 mt-4",
                            children: [
                              l.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  l.jsx(Lx, {
                                    className: "w-4 h-4 text-[#0e5fa3]",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-xs font-bold text-[#0e5fa3] tracking-widest uppercase",
                                    children: "Looking Ahead",
                                  }),
                                ],
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                                children:
                                  "Sampoorna plans to make these health camps a monthly fixture, not a one-off — sustained care, not a single visit. Alongside this, the foundation remains committed to its founding focus: young women's mental health and confidence.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "flex flex-col gap-5 mt-8 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                            children: [
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                    children: "FIELD ARCHIVE // DOCUMENTATION",
                                  }),
                                  l.jsx("h3", {
                                    className:
                                      "font-heading text-lg font-bold text-neutral-900 uppercase",
                                    children: "Socio-Entrepreneurial Impact",
                                  }),
                                  l.jsx("p", {
                                    className:
                                      "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                    children:
                                      "Moments of active frontline leadership, bringing healthcare and mental health support camps across Northeast India. Click to view in Gallery.",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                                children: [
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/TD-004.jpg.jpeg",
                                        "Empathetic frontline counseling session with women in regional centers.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx(CMSImage, {
                                        originalSrc: "/TD-004.jpg.jpeg",
                                        alt: "Empowerment Camps",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Frontline Camp",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Assam Health Support",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/TD-263.jpg.jpeg",
                                        "Visionary healthcare and pediatric wellness support loop.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx(CMSImage, {
                                        originalSrc: "/TD-263.jpg.jpeg",
                                        alt: "Wellness Loops",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Healthcare Loop",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Children & Elder Care",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    onClick: () => {
                                      Ce(
                                        "/Speaker.JPG.jpeg",
                                        "Coordinating systemic aid and regional community development.",
                                      );
                                    },
                                    className:
                                      "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                    children: [
                                      l.jsx(CMSImage, {
                                        originalSrc: "/Speaker.JPG.jpeg",
                                        alt: "Coordination and Leadership",
                                        className:
                                          "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4",
                                        children: l.jsxs("div", {
                                          className: "flex flex-col",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                              children: "Aid Coordination",
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                              children: "Deepjyoti Operations",
                                            }),
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
                          "p-8 md:p-10 bg-neutral-900 rounded-3xl text-white relative overflow-hidden mt-8",
                        children: [
                          l.jsx("div", {
                            className:
                              "absolute top-6 right-8 text-neutral-800 font-serif text-8xl pointer-events-none select-none",
                            children: "“",
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-[0.25em] text-[#E65F1B] font-bold block mb-4 uppercase",
                            children: "IN HER OWN WORDS",
                          }),
                          l.jsx("blockquote", {
                            className:
                              "font-display italic text-lg md:text-xl text-neutral-100 leading-relaxed mb-6",
                            children: `"I started Deepjyoti India Foundation because I kept seeing the same gap — people being handed one piece of support when what they actually needed was all of it at once. Health without dignity isn't enough. Confidence without care isn't enough. Sampoorna means complete, and that's the point — showing up for the whole person, not just the part that's easiest to fix."`,
                          }),
                          l.jsx("cite", {
                            className:
                              "font-mono text-[9px] tracking-widest text-neutral-400 font-bold uppercase block not-italic",
                            children: "— Taranna Deepjyoti, Founder",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className:
                      "lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6",
                    children: l.jsxs("div", {
                      className:
                        "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest font-bold text-[#0e5fa3] block uppercase mb-1",
                              children: "GET INVOLVED",
                            }),
                            l.jsx("h3", {
                              className:
                                "font-heading text-lg font-bold text-neutral-900",
                              children: "Join Our Mission",
                            }),
                            l.jsx("p", {
                              className:
                                "font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light",
                              children:
                                "We run on collective empathy. Pick an action below to participate in our active programs.",
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className: "flex flex-col gap-3.5",
                          children: [
                            l.jsxs("button", {
                              onClick: () => {
                                (s("partner"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-[#0e5fa3] hover:bg-[#0c4e85] px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Partner with us" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                            l.jsxs("button", {
                              onClick: () => {
                                (s("volunteer"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-neutral-700 hover:text-neutral-900 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 px-5 py-4 rounded-xl transition-colors cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Volunteer" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                            l.jsxs("button", {
                              onClick: () => {
                                (s("donate"), o(!1));
                              },
                              className:
                                "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-[#E65F1B] hover:text-white bg-[#E65F1B]/10 hover:bg-[#E65F1B] border border-[#E65F1B]/35 px-5 py-4 rounded-xl transition-all cursor-pointer flex items-center justify-between",
                              children: [
                                l.jsx("span", { children: "Donate" }),
                                l.jsx(co, { className: "w-3.5 h-3.5" }),
                              ],
                            }),
                          ],
                        }),
                        l.jsxs("div", {
                          className:
                            "pt-4 border-t border-neutral-100 flex flex-col gap-2",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase",
                              children: "FOUNDATION CREDENTIALS",
                            }),
                            l.jsxs("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "12A REGISTERED",
                                }),
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "80G COMPLIANT",
                                }),
                                l.jsx("span", {
                                  className:
                                    "px-2 py-0.5 bg-neutral-100 text-neutral-600 rounded font-mono text-[9px] font-bold",
                                  children: "NITI AAYOG",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        case "writer":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#E65F1B] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#E65F1B] font-bold block uppercase mb-1",
                    children: "PAGE 2 // WRITER",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Writer",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2",
                    children: "Confessional. Sensory. Unguarded.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-6 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-200/50 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-3",
                            children: "PERSONAL NARRATIVE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "I write mostly in free verse — confessional poetry that doesn't flinch. Longing, distance, grief, the ache of being close to someone and still far away, the cities that raised me — Mumbai and Delhi aren't just places I've lived, they're places I feel from.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "I ground everything in the physical. A bowl of maggi. Adrak chai going cold. The weather. Skin. I don't think emotion means much until it's attached to something you can taste or touch — so that's where I always start.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "ON HER STYLE // ARCHIVES",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children: `Taranna's poetry moves comfortably between vulnerability and wit. A poem about maggi can be funny and tender in the same breath; a poem like "Loneliness" or "39. Beyond Here" sits in heavier, unresolved territory and doesn't rush toward resolution. She's also written in other voices entirely — "the heart," a poem written from the perspective of a dying spouse, shows a writer willing to leave her own point of view behind completely.`,
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children: `Her more recent work has leaned even further into the sensory and the embodied. "Pani puri" pushes food-as-desire to its most playful extreme. "Searching for a home" is built almost entirely out of the five senses — sound, smell, touch, catalogued with real precision. And "Yin and Yang" reveals a gift for the list-poem — a blessing built through repetition, "I wish you…" carrying the whole poem's rhythm.`,
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl shadow-xs flex flex-col gap-4",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                children: "DIGITAL POEM PORTAL",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-sm font-bold text-neutral-900 uppercase",
                                children: "More Poems & Anthologies",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-[11px] text-neutral-400 font-light mt-1",
                                children:
                                  "Click a title below to view the sensory confessional piece.",
                              }),
                            ],
                          }),
                          l.jsx("div", {
                            className: "grid grid-cols-2 gap-2.5",
                            children: kf.map((A) =>
                              l.jsxs(
                                "button",
                                {
                                  onClick: () => w(A.id),
                                  className:
                                    "p-3 text-left rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-[#E65F1B]/5 hover:border-[#E65F1B]/35 transition-all cursor-pointer flex flex-col justify-between min-h-[90px] group",
                                  children: [
                                    l.jsx("span", {
                                      className:
                                        "font-heading text-xs font-bold text-neutral-800 group-hover:text-[#E65F1B] transition-colors",
                                      children: A.title,
                                    }),
                                    l.jsx("span", {
                                      className:
                                        "font-mono text-[8px] text-neutral-400 uppercase tracking-widest mt-1",
                                      children: A.vibe,
                                    }),
                                  ],
                                },
                                A.id,
                              ),
                            ),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1",
                                children: "WRITER'S SHADOWS // PORTRAITS",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Contemplative Workspace & Gaze",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                children:
                                  "Framing the spaces of silent writing where poetic verse translates vulnerability into shared universal echoes. Click to view in Gallery.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                            children: [
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Writer.jpg.jpeg",
                                    "Shedding quiet light on raw, confessional write-ups.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/Writer.jpg.jpeg",
                                    alt: "Poetics in Chiaroscuro",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Writing Corner",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Poetics in Chiaroscuro",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Writer.jpg.jpeg",
                                    "Quietly reflecting in sensory rooms where poetry takes root.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/Writer.jpg.jpeg",
                                    alt: "Silent Room",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Contemplative Gaze",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Silent Reflections",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/TD-382.jpg.jpeg",
                                    "Symmetrical focus holding deep poise and authentic sincerity.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[3/4] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/TD-382.jpg.jpeg",
                                    alt: "Intense Sincerity",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Symmetrical Focus",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Symmetrical Sincerity",
                                        }),
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
                  l.jsx("div", {
                    className: "lg:col-span-6",
                    children: l.jsxs("div", {
                      className:
                        "p-8 md:p-12 bg-[#FCFAF6] border border-neutral-200/80 rounded-3xl shadow-sm relative overflow-hidden flex flex-col",
                      children: [
                        l.jsx("div", {
                          className:
                            "absolute top-6 right-6 font-mono text-[8px] tracking-[0.4em] text-neutral-300 font-bold uppercase select-none border border-neutral-200 p-1.5 rounded",
                          children: "FEATURED WORK",
                        }),
                        l.jsx("span", {
                          className:
                            "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block mb-4 uppercase",
                          children: 'Ode to Myself // FROM "TARANNA"',
                        }),
                        l.jsx("h3", {
                          className:
                            "font-heading text-xl md:text-2xl font-bold text-neutral-900 tracking-tight leading-none mb-6",
                          children: "Don't Let Anyone Ever Say Otherwise",
                        }),
                        l.jsx("div", {
                          className:
                            "font-mono text-[11px] md:text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l-[1.5px] border-neutral-200 flex flex-col gap-1.5 select-all font-light",
                          children: `You are the most precious thing to ever exist on this earth,
a fine blend of earth, ether, water, fire and air.
The way you breathe original ideas into life,
the way you've woven stories out of words,
translated your ideas into inspiring change
that has changed the way many daughters of coming ages view the world.
The way your eyes sparkle every time you discover something new,
come up with a solution,
find a way to help others.

Your love is so deep it could move an entire country into revolution —
a love full of fire that cannot be extinguished,
an embrace so meaningful it feels like every god and goddess is holding you tight,
a smile that lights up the darkest rooms,
a desire to spread laughter where there has been none for days.
You are a force to reckon with. Beckon.
You are slowly becoming a force for greater good.

The ache in your heart is natural —
with each passing day you are breaking apart,
you are expanding.
The world doesn't make sense right now.
You are climbing mountains without knowing it,
reaching heights unknowingly,
crossing countries and places with no changes,
becoming smooth and boundless.

You are a speaker. Why don't you speak?
You are a writer. Write more.
You love color. Create more color.
You love to sing. Sing more.
And be an inspiration.

You don't have to be liked.
You just have to be unmistakably, authentically yourself.
Nothing else.
Everything else will fall into place — is falling into place.

You ask people, "Who am I?"
Ask yourself that question instead.
You are that which cannot be defined.
You are beyond the scope of a career or profession.
You are a multiverse. An independent universe.
You are a bird. You are like water.
You are a lover. You are the sky.
You are the space between notes of music — you are the music.

When you complain, it isn't you complaining.
It's the prisoner inside you, hungry to be free,
feeling stuck in limitations, depending on others' approval.
Dependency for love — maybe that's fine.
Dependency for approval to simply be — that's the worst.
How can you depend on permission to be something
that is already who you are?`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        case "public-speaker":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#0a8fa0] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#0a8fa0] font-bold block uppercase mb-1",
                    children: "PAGE 3 // PUBLIC SPEAKER",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Speaker",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#E65F1B] mt-2",
                    children: "Talking about what everyone else avoids.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-8 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-3",
                            children: "PERSONAL EXPERIENCE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "I talk about the things people usually swallow — shame, guilt, rejection, the parts of a difficult life that don't make it into the highlight reel. Yoga and mental health. Body positivity. The belief, plainly stated, that all bodies are great bodies.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "I don't come to this as a theory. Everything I speak about, I've lived through first — and I invite the people listening to do the same: to sit with what they feel instead of managing it from a distance, to love more deeply, and to be who they actually are without asking for permission first.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "SPEAKER TOPICS & TOPICAL NOTES",
                          }),
                          l.jsx("div", {
                            className:
                              "flex flex-col border border-neutral-100 rounded-2xl bg-white divide-y divide-neutral-100",
                            children: J1.map((A, te) => {
                              const ge = v === te;
                              return l.jsxs(
                                "div",
                                {
                                  className: "flex flex-col",
                                  children: [
                                    l.jsxs("button", {
                                      onClick: () => y(ge ? null : te),
                                      className:
                                        "flex items-center justify-between p-5 text-left hover:bg-neutral-50/50 transition-colors cursor-pointer w-full group",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "font-heading text-xs md:text-sm font-semibold text-neutral-800 group-hover:text-[#0a8fa0] transition-colors",
                                          children: A.title,
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "font-mono text-xs text-neutral-400",
                                          children: ge ? "[-]" : "[+]",
                                        }),
                                      ],
                                    }),
                                    l.jsx(Vr, {
                                      children:
                                        ge &&
                                        l.jsx(X.div, {
                                          initial: { height: 0, opacity: 0 },
                                          animate: {
                                            height: "auto",
                                            opacity: 1,
                                          },
                                          exit: { height: 0, opacity: 0 },
                                          transition: { duration: 0.3 },
                                          className:
                                            "overflow-hidden bg-neutral-50/50",
                                          children: l.jsx("div", {
                                            className:
                                              "p-5 font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light border-t border-neutral-100",
                                            children: A.desc,
                                          }),
                                        }),
                                    }),
                                  ],
                                },
                                te,
                              );
                            }),
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex flex-col gap-5 mt-6 p-6 bg-white border border-neutral-100 rounded-3xl shadow-xs",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "STAGE PRESENCE // DIALOGUE",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Vocalizing Silent Struggles",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 font-light mt-0.5",
                                children:
                                  "Giving voice to deep shame, societal expectations, somatic yoga, and the courage of existing loudly. Click to view in Gallery.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2",
                            children: [
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Speaker.JPG.jpeg",
                                    "Vocalizing shadow work and somatic self-trust before public audiences.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/Speaker.JPG.jpeg",
                                    alt: "Vocalizing Struggles",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Speaking Stage",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Confessional Presentation",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/Speaker.JPG.jpeg",
                                    "Sculpted shadow-play capturing spatial poise and intense presence.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/Speaker.JPG.jpeg",
                                    alt: "Sculpted Poise",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Spatial Poise",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Sculpted Shadow-Play",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                onClick: () => {
                                  Ce(
                                    "/NOV00034.JPG.jpeg",
                                    "Authentic engagement, answering somatic healing questions.",
                                  );
                                },
                                className:
                                  "group relative rounded-2xl overflow-hidden aspect-[4/3] bg-neutral-150 border border-neutral-200/50 shadow-xs cursor-pointer",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: "/NOV00034.JPG.jpeg",
                                    alt: "Dialogue Session",
                                    className:
                                      "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3",
                                    children: l.jsxs("div", {
                                      className: "flex flex-col",
                                      children: [
                                        l.jsx("span", {
                                          className:
                                            "text-white text-[10px] font-mono tracking-widest uppercase font-bold",
                                          children: "Q&A Exchange",
                                        }),
                                        l.jsx("span", {
                                          className:
                                            "text-neutral-300 text-[8px] font-sans truncate mt-0.5",
                                          children: "Dialogue & Audience Q&A",
                                        }),
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
                    className: "lg:col-span-4 flex flex-col gap-6",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[8px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "WHERE TO FIND HER",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-base font-bold text-neutral-900 uppercase",
                                children: "Audible Streams",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              l.jsxs("a", {
                                href: "https://www.youtube.com/@withlovetaranna_me",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-red-500 hover:bg-red-50/20 transition-all text-neutral-700 hover:text-red-600 font-mono text-[10px] font-bold tracking-widest uppercase",
                                children: [
                                  l.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      l.jsx(Vh, {
                                        className: "w-4 h-4 text-red-500",
                                      }),
                                      "YouTube Channel",
                                    ],
                                  }),
                                  l.jsx(Rh, {
                                    className: "w-3.5 h-3.5 opacity-60",
                                  }),
                                ],
                              }),
                              l.jsxs("a", {
                                href: "https://www.instagram.com/@withlove_taranna",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center justify-between p-3.5 bg-white border border-neutral-200/80 rounded-xl hover:border-pink-500 hover:bg-pink-50/20 transition-all text-neutral-700 hover:text-pink-600 font-mono text-[10px] font-bold tracking-widest uppercase",
                                children: [
                                  l.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      l.jsx(Mu, {
                                        className: "w-4 h-4 text-pink-500",
                                      }),
                                      "Instagram Feed",
                                    ],
                                  }),
                                  l.jsx(Rh, {
                                    className: "w-3.5 h-3.5 opacity-60",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-4",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest font-bold text-[#E65F1B] block uppercase mb-1",
                                children: "ORATORICAL BOOKING",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-base font-bold text-neutral-900",
                                children: "Speaking Events",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed mt-1 font-light",
                                children:
                                  "Book Taranna for keynotes, workshops, podcasts or academic panels.",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              (m(!0), b(!1));
                            },
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-5 py-4 rounded-xl shadow-xs transition-colors cursor-pointer text-center",
                            children: "Book Taranna to speak",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "mt-16 pt-12 border-t border-neutral-200/60 flex flex-col gap-8",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row md:items-end justify-between gap-4",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-[0.25em] text-[#0a8fa0] font-bold block uppercase mb-1",
                            children: "DIGITAL PREVIEWS // SOCIAL FEEDS",
                          }),
                          l.jsx("h3", {
                            className:
                              "font-heading text-2xl font-bold text-neutral-900 uppercase",
                            children: "Featured Media Samples",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-500 font-light mt-1",
                            children:
                              "Play audio extracts or read social insights directly below to preview her message before visiting the platforms.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "flex bg-neutral-100 p-1 rounded-xl self-start md:self-auto border border-neutral-200/40",
                        children: [
                          l.jsxs("button", {
                            onClick: () => {
                              (_("youtube"), L(null));
                            },
                            className: `px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${Ue === "youtube" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"}`,
                            children: [
                              l.jsx("span", {
                                className: `w-1.5 h-1.5 rounded-full ${Ue === "youtube" ? "bg-red-500 animate-pulse" : "bg-neutral-300"}`,
                              }),
                              "YouTube Samples",
                            ],
                          }),
                          l.jsxs("button", {
                            onClick: () => {
                              (_("instagram"), L(null));
                            },
                            className: `px-4 py-2 rounded-lg font-mono text-[10px] tracking-wider uppercase font-bold transition-all cursor-pointer flex items-center gap-2 ${Ue === "instagram" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"}`,
                            children: [
                              l.jsx("span", {
                                className: `w-1.5 h-1.5 rounded-full ${Ue === "instagram" ? "bg-pink-500 animate-pulse" : "bg-neutral-300"}`,
                              }),
                              "Instagram Feed",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx(Vr, {
                    mode: "wait",
                    children:
                      Ue === "youtube"
                        ? l.jsxs(
                            X.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.4 },
                              className: "flex flex-col gap-8",
                              children: [
                                P &&
                                  l.jsxs(X.div, {
                                    initial: { opacity: 0, scale: 0.98 },
                                    animate: { opacity: 1, scale: 1 },
                                    exit: { opacity: 0 },
                                    className:
                                      "bg-neutral-950 text-white rounded-3xl p-5 md:p-6 border border-neutral-800 flex flex-col gap-5 shadow-xl relative overflow-hidden",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "flex justify-between items-center pb-3 border-b border-neutral-850",
                                        children: [
                                          l.jsxs("div", {
                                            children: [
                                              l.jsx("span", {
                                                className:
                                                  "font-mono text-[8px] tracking-widest text-red-500 font-bold uppercase",
                                                children:
                                                  "NOW STREAMING // ACTIVE VIDEO EMBED",
                                              }),
                                              l.jsxs("h4", {
                                                className:
                                                  "font-heading text-base md:text-lg font-bold text-white tracking-tight uppercase mt-0.5",
                                                children: [
                                                  P === "yt-disliked" &&
                                                    "The Courage to Be Disliked",
                                                  P === "yt-shame" &&
                                                    "Shame and Guilt: Naming Your Shadows",
                                                  P === "yt-body" &&
                                                    "Body Image & Radical Self-Love",
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsx("button", {
                                            onClick: () => L(null),
                                            className:
                                              "font-mono text-[10px] tracking-widest uppercase bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white font-bold px-4 py-2 rounded-full transition-all cursor-pointer",
                                            children: "Close Video ×",
                                          }),
                                        ],
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "w-full aspect-video rounded-2xl overflow-hidden border border-neutral-850 bg-neutral-900 shadow-inner",
                                        children: l.jsx("iframe", {
                                          src: `https://www.youtube.com/embed/${P === "yt-disliked" ? "_U0QvsnVfGg" : P === "yt-shame" ? "psN1DORYYV0" : "H_8y0SBy3H8"}?autoplay=1&rel=0&modestbranding=1`,
                                          title: "Interactive Video Player",
                                          frameBorder: "0",
                                          allow:
                                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                          allowFullScreen: !0,
                                          className: "w-full h-full",
                                        }),
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "flex justify-between items-center font-mono text-[9px] text-neutral-400",
                                        children: [
                                          l.jsx("span", {
                                            children:
                                              "SOURCE: PUBLIC OUTREACH & TED TALKS",
                                          }),
                                          l.jsx("span", {
                                            children:
                                              "PRESS ESCAPE OR CLICK CLOSE TO DISMISS",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                l.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-3 gap-6",
                                  children: [
                                    {
                                      id: "yt-disliked",
                                      title: "The Courage to Be Disliked",
                                      desc: "A deep dive into radical self-acceptance, breaking down why seeking constant external approval is a prison.",
                                      duration: "18:45",
                                      views: "12.4k",
                                      quote:
                                        "We spend our entire lives managing other people's perceptions. What if we just stopped?",
                                      color: "from-blue-900/40",
                                    },
                                    {
                                      id: "yt-shame",
                                      title:
                                        "Shame & Guilt: Naming Your Shadows",
                                      desc: "Recorded live at a mental health summit, Taranna explains why suppressing emotions prolongs our suffering.",
                                      duration: "12:10",
                                      views: "8.9k",
                                      quote:
                                        "Shame dies when it is spoken in a room where people listen.",
                                      color: "from-emerald-900/40",
                                    },
                                    {
                                      id: "yt-body",
                                      title: "Body Image & Radical Self-Love",
                                      desc: "An empowering keynote challenging fatphobia, recounting her own transition from hiding to modeling.",
                                      duration: "24:30",
                                      views: "15.1k",
                                      quote:
                                        "Your body is not an ornament to look at; it is the home you live in.",
                                      color: "from-amber-900/40",
                                    },
                                  ].map((A) => {
                                    const te = P === A.id;
                                    return l.jsxs(
                                      "div",
                                      {
                                        className:
                                          "bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between",
                                        children: [
                                          l.jsxs("div", {
                                            className: `p-6 bg-gradient-to-b ${A.color} to-white aspect-video relative flex flex-col justify-between`,
                                            children: [
                                              l.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center",
                                                children: [
                                                  l.jsx("span", {
                                                    className:
                                                      "font-mono text-[8px] font-bold bg-black/60 text-white px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                    children: "PODCAST SESSION",
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "font-mono text-[9px] text-neutral-500 font-bold bg-white/85 px-1.5 py-0.2 rounded",
                                                    children: A.duration,
                                                  }),
                                                ],
                                              }),
                                              l.jsx("div", {
                                                className:
                                                  "my-auto flex justify-center py-2",
                                                children: l.jsx("button", {
                                                  onClick: () =>
                                                    L(te ? null : A.id),
                                                  className: `w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${te ? "bg-red-500 text-white scale-110 shadow-lg animate-pulse" : "bg-white text-neutral-900 hover:scale-105 shadow-sm"}`,
                                                  children: te
                                                    ? l.jsx("span", {
                                                        className:
                                                          "font-bold text-xs uppercase tracking-widest",
                                                        children: "II",
                                                      })
                                                    : l.jsx(Fx, {
                                                        className:
                                                          "w-5 h-5 fill-current ml-0.5 text-red-500",
                                                      }),
                                                }),
                                              }),
                                              l.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center text-[9px] font-mono text-neutral-600 mt-2",
                                                children: [
                                                  l.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1",
                                                    children: [
                                                      l.jsx(zS, {
                                                        className:
                                                          "w-3 h-3 text-neutral-400",
                                                      }),
                                                      " ",
                                                      A.views,
                                                      " views",
                                                    ],
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "text-red-500 font-bold uppercase tracking-wider",
                                                    children:
                                                      "PLAY AUDIO EXTRACT",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsxs("div", {
                                            className:
                                              "p-5 flex flex-col gap-3",
                                            children: [
                                              l.jsx("h4", {
                                                className:
                                                  "font-heading text-xs font-bold text-neutral-900 uppercase",
                                                children: A.title,
                                              }),
                                              l.jsx("p", {
                                                className:
                                                  "font-sans text-[11px] text-neutral-500 leading-relaxed font-light",
                                                children: A.desc,
                                              }),
                                              l.jsx("div", {
                                                className:
                                                  "p-3 bg-neutral-50 border-l border-[#0a8fa0] rounded-r-lg",
                                                children: l.jsxs("p", {
                                                  className:
                                                    "font-display italic text-xxs text-neutral-600",
                                                  children: ['"', A.quote, '"'],
                                                }),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      A.id,
                                    );
                                  }),
                                }),
                              ],
                            },
                            "youtube-tab",
                          )
                        : l.jsx(
                            X.div,
                            {
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: -15 },
                              transition: { duration: 0.4 },
                              className:
                                "grid grid-cols-1 md:grid-cols-3 gap-6",
                              children: [
                                {
                                  id: "ig-monsoon",
                                  title: "Monsoons & Stillness",
                                  desc: "Mumbai at 4 AM taught me that peace isn't the absence of noise, but the space you make inside.",
                                  likes: G["ig-monsoon"],
                                  hasLiked: !!we["ig-monsoon"],
                                  sound: "Ambient Piano - Solitude",
                                  caption:
                                    "Chasing quiet in a city of 20 million. Adrak chai brewing in the background. Stop looking for permission to just exist and rest.",
                                },
                                {
                                  id: "ig-plus-size",
                                  title: "Unapologetically Plus",
                                  desc: "A reminder for today: Wear the loud color. Take up space. Let them look. You are the multiverse.",
                                  likes: G["ig-plus-size"],
                                  hasLiked: !!we["ig-plus-size"],
                                  sound: "Original Audio - Taranna",
                                  caption:
                                    "Every body is a great body. This is a baseline truth. Stop managing other people's comfort at the cost of your posture.",
                                },
                                {
                                  id: "ig-adrak-chai",
                                  title: "Poetry of Tactile Joys",
                                  desc: "Anchor yourself in the tactile. Sometimes the most spiritual thing is drinking your tea hot.",
                                  likes: G["ig-adrak-chai"],
                                  hasLiked: !!we["ig-adrak-chai"],
                                  sound: "Soft Lofi Beats - Rain",
                                  caption:
                                    "A bowl of maggi. Adrak chai going cold. Loneliness is just a map of where you are not. Ground your feelings in things you can touch.",
                                },
                              ].map((A) => {
                                const te = $t[A.id] || [],
                                  ge = sr[A.id] || "";
                                return l.jsxs(
                                  "div",
                                  {
                                    className:
                                      "bg-white border border-neutral-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between",
                                    children: [
                                      l.jsxs("div", {
                                        className:
                                          "p-4 flex items-center justify-between border-b border-neutral-100",
                                        children: [
                                          l.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              l.jsx("div", {
                                                className:
                                                  "w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-pink-500 p-0.5",
                                                children: l.jsx("div", {
                                                  className:
                                                    "w-full h-full rounded-full bg-white flex items-center justify-center text-[10px]",
                                                  children: "🧘",
                                                }),
                                              }),
                                              l.jsxs("div", {
                                                className: "flex flex-col",
                                                children: [
                                                  l.jsxs("span", {
                                                    className:
                                                      "font-heading text-[10px] font-bold text-neutral-800 leading-none flex items-center gap-1 uppercase",
                                                    children: [
                                                      "withlove_taranna",
                                                      l.jsx("span", {
                                                        className:
                                                          "text-[8px] text-blue-500",
                                                        children: "✓",
                                                      }),
                                                    ],
                                                  }),
                                                  l.jsx("span", {
                                                    className:
                                                      "text-[8px] text-neutral-400 font-mono",
                                                    children: "Mumbai, India",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          l.jsx("span", {
                                            className:
                                              "font-mono text-[8px] font-bold text-neutral-400 uppercase tracking-widest",
                                            children: "[REEL]",
                                          }),
                                        ],
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "aspect-square bg-neutral-900 relative flex items-center justify-center overflow-hidden border-b border-neutral-100",
                                        children: [
                                          l.jsx("div", {
                                            className:
                                              "absolute inset-0 bg-gradient-to-tr from-[#E65F1B]/30 to-[#0e5fa3]/30 mix-blend-multiply",
                                          }),
                                          l.jsxs("div", {
                                            className:
                                              "p-6 text-center text-white z-10 flex flex-col gap-2 max-w-[85%]",
                                            children: [
                                              l.jsx("h5", {
                                                className:
                                                  "font-heading text-xs font-bold uppercase tracking-wider text-amber-300",
                                                children: A.title,
                                              }),
                                              l.jsxs("p", {
                                                className:
                                                  "font-display italic text-xxs text-neutral-100 leading-relaxed font-light",
                                                children: ['"', A.desc, '"'],
                                              }),
                                              l.jsxs("span", {
                                                className:
                                                  "font-mono text-[7px] text-neutral-400 uppercase tracking-widest mt-2 flex items-center justify-center gap-1",
                                                children: [
                                                  l.jsx(s2, {
                                                    className:
                                                      "w-2.5 h-2.5 text-pink-400",
                                                  }),
                                                  " ",
                                                  A.sound,
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "p-4 flex items-center justify-between",
                                        children: l.jsxs("div", {
                                          className: "flex items-center gap-4",
                                          children: [
                                            l.jsxs("button", {
                                              onClick: () => Z1(A.id),
                                              className:
                                                "flex items-center gap-1 text-xs cursor-pointer group",
                                              children: [
                                                l.jsx(ba, {
                                                  className: `w-4.5 h-4.5 transition-all duration-300 ${A.hasLiked ? "fill-red-500 text-red-500 scale-125" : "text-neutral-600 group-hover:text-red-500"}`,
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "font-mono text-[9px] font-bold text-neutral-600",
                                                  children: A.likes,
                                                }),
                                              ],
                                            }),
                                            l.jsxs("div", {
                                              className:
                                                "flex items-center gap-1 text-xs text-neutral-600",
                                              children: [
                                                l.jsx(qS, {
                                                  className:
                                                    "w-4.5 h-4.5 text-neutral-500",
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "font-mono text-[9px] font-bold",
                                                  children: te.length,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      l.jsx("div", {
                                        className: "px-4 pb-2",
                                        children: l.jsxs("p", {
                                          className:
                                            "font-sans text-[11px] text-neutral-600 leading-relaxed font-light",
                                          children: [
                                            l.jsx("span", {
                                              className:
                                                "font-bold text-neutral-800 mr-1 text-[10px] uppercase",
                                              children: "withlove_taranna",
                                            }),
                                            A.caption,
                                          ],
                                        }),
                                      }),
                                      l.jsx("div", {
                                        className:
                                          "px-4 py-2 border-t border-neutral-50 bg-neutral-50/50 max-h-[100px] overflow-y-auto flex flex-col gap-1.5",
                                        children: te.map((Jt, en) =>
                                          l.jsxs(
                                            "div",
                                            {
                                              className:
                                                "flex flex-col text-[10px] font-sans",
                                              children: [
                                                l.jsx("span", {
                                                  className:
                                                    "font-semibold text-neutral-700",
                                                  children: Jt.user,
                                                }),
                                                l.jsx("span", {
                                                  className:
                                                    "text-neutral-500 font-light leading-relaxed",
                                                  children: Jt.text,
                                                }),
                                              ],
                                            },
                                            en,
                                          ),
                                        ),
                                      }),
                                      l.jsxs("div", {
                                        className:
                                          "p-3 border-t border-neutral-100 flex items-center gap-2",
                                        children: [
                                          l.jsx("input", {
                                            type: "text",
                                            value: ge,
                                            onChange: (Jt) => {
                                              const en = Jt.target.value;
                                              bf((Ni) => ({
                                                ...Ni,
                                                [A.id]: en,
                                              }));
                                            },
                                            onKeyDown: (Jt) => {
                                              Jt.key === "Enter" && Sf(A.id);
                                            },
                                            placeholder: "Add a comment...",
                                            className:
                                              "flex-grow bg-neutral-50 border border-neutral-200 rounded-lg px-3 py-1.5 font-sans text-[10px] outline-none focus:bg-white focus:border-neutral-400",
                                          }),
                                          l.jsx("button", {
                                            onClick: () => Sf(A.id),
                                            className:
                                              "font-mono text-[8px] font-bold uppercase text-[#0a8fa0] tracking-widest cursor-pointer px-2",
                                            children: "POST",
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  A.id,
                                );
                              }),
                            },
                            "instagram-tab",
                          ),
                  }),
                ],
              }),
            ],
          });
        case "model":
          return l.jsxs("div", {
            className: "flex flex-col gap-12 md:gap-20",
            children: [
              l.jsxs("div", {
                className: "border-l-4 border-[#c57d11] pl-6 py-2 max-w-xl",
                children: [
                  l.jsx("span", {
                    className:
                      "font-mono text-[10px] tracking-[0.3em] text-[#c57d11] font-bold block uppercase mb-1",
                    children: "PAGE 4 // MODEL",
                  }),
                  l.jsx("h1", {
                    className:
                      "font-heading text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 uppercase",
                    children: "Taranna, the Model",
                  }),
                  l.jsx("p", {
                    className:
                      "font-display italic text-lg md:text-xl text-[#0e5fa3] mt-2",
                    children: "Every body is a great body.",
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
                children: [
                  l.jsxs("div", {
                    className: "lg:col-span-7 flex flex-col gap-10",
                    children: [
                      l.jsxs("div", {
                        className:
                          "p-6 bg-[#FCFAF6] border border-neutral-100 rounded-2xl",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#c57d11] font-bold block uppercase mb-3",
                            children: "THE STORY IN THE IMAGE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "Back in 2018, I saw a plus-size model on Instagram for the first time — dancing, posing, completely unbothered — and something in me lit up. I wished I could be something like her. And slowly, slowly, I became her. That's the whole story, really — it just took years to actually happen.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed mb-4",
                            children:
                              "Modeling didn't start as a career move. It became a tool for my own growth — I came out of it more confident, more at peace with myself, more in tune with my own emotions, and needing a lot less validation from other people to feel okay. What I didn't expect was that it wouldn't stop with me. My work has gone on to inspire plus-size girls and boys to embrace their bodies exactly as they are.",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans font-light text-base text-neutral-600 leading-relaxed",
                            children:
                              "That's the part that feels full circle — someone gave me permission I didn't know I needed, just by existing loudly and joyfully online. Now I get to be that for somebody else.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest",
                            children: "THE CRAFT, NOT JUST THE IMAGE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children:
                              "For Taranna, modeling isn't only about the image that ends up on screen — it's about the process that gets her there. She's spoken about the camera as almost a mirror: the angles, the light, the technical craft of it all becoming a vehicle for something inner to finally get seen — sometimes even by the person in front of the lens, first. It's the same instinct that runs through her writing and her speaking: dig into a feeling you haven't fully named yet, and turn it into something shared.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-6 bg-white border border-neutral-100 rounded-2xl flex flex-col gap-3",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              l.jsx($S, {
                                className: "w-4.5 h-4.5 text-[#c57d11]",
                              }),
                              l.jsx("h3", {
                                className:
                                  "font-heading text-xs font-bold text-neutral-900 tracking-widest uppercase",
                                children: "Body Positivity, In Practice",
                              }),
                            ],
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs md:text-sm text-neutral-500 leading-relaxed font-light",
                            children:
                              "Taranna's modeling work sits inside a wider mission — proving, publicly and repeatedly, that plus-size bodies belong in every room a straight-size body does. Not as a trend. Not as a token. As the standard.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "lg:col-span-5 flex flex-col gap-6",
                    children: l.jsxs("div", {
                      className:
                        "p-6 bg-white border border-neutral-200/60 rounded-2xl shadow-sm flex flex-col gap-6",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest font-bold text-[#c57d11] block uppercase mb-1",
                              children: "PORTFOLIO HIGHLIGHTS",
                            }),
                            l.jsx("h3", {
                              className:
                                "font-heading text-base font-bold text-neutral-900",
                              children: "Campaign Highlights",
                            }),
                            l.jsx("p", {
                              className:
                                "font-sans text-xs text-neutral-400 font-light mt-0.5",
                              children:
                                "Hover to explore the technical framing. Click to view in Gallery.",
                            }),
                          ],
                        }),
                        l.jsx("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: ew.map((A, te) =>
                            l.jsxs(
                              "div",
                              {
                                onClick: () => {
                                  Ce(A.image, A.caption);
                                },
                                className:
                                  "relative rounded-xl overflow-hidden aspect-square group cursor-pointer bg-neutral-900 border border-neutral-100",
                                children: [
                                  l.jsx(CMSImage, {
                                    originalSrc: A.image,
                                    alt: "Campaign",
                                    referrerPolicy: "no-referrer",
                                    className:
                                      "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-95 group-hover:brightness-100",
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end",
                                    children: [
                                      l.jsx("span", {
                                        className:
                                          "font-mono text-[7px] text-amber-400 font-bold tracking-widest uppercase",
                                        children: A.label,
                                      }),
                                      l.jsx("span", {
                                        className:
                                          "font-sans text-[9px] text-white truncate font-medium mt-0.5",
                                        children: A.caption,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              te,
                            ),
                          ),
                        }),
                        l.jsxs("div", {
                          className:
                            "pt-4 border-t border-neutral-100 flex flex-col gap-2",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-widest text-neutral-400 font-bold block uppercase",
                              children: "SOCIAL ENGAGEMENTS",
                            }),
                            l.jsxs("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                l.jsxs("a", {
                                  href: "https://www.instagram.com/@withlove_taranna",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light",
                                  children: [
                                    l.jsx(Mu, {
                                      className: "w-3.5 h-3.5 text-neutral-400",
                                    }),
                                    l.jsx("span", {
                                      children: "Instagram: @withlove_taranna",
                                    }),
                                  ],
                                }),
                                l.jsxs("a", {
                                  href: "https://www.youtube.com/@withlovetaranna_me",
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className:
                                    "text-xs text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 font-light",
                                  children: [
                                    l.jsx(Vh, {
                                      className: "w-3.5 h-3.5 text-neutral-400",
                                    }),
                                    l.jsx("span", {
                                      children: "YouTube: @withlovetaranna_me",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        default:
          return null;
      }
    };
  return l.jsxs("div", {
    className:
      "min-h-screen bg-[#FCFAF6] text-neutral-900 pt-36 pb-24 px-6 font-sans relative antialiased flex flex-col justify-between",
    children: [
      l.jsx("div", {
        className:
          "absolute top-0 bottom-0 left-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute top-0 bottom-0 right-6 w-[1px] bg-neutral-100 hidden xl:block pointer-events-none",
      }),
      l.jsxs("div", {
        className: "max-w-5xl mx-auto w-full my-auto z-10 relative",
        children: [
          l.jsx(
            X.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: "easeOut" },
              className: "w-full",
              children: tw(),
            },
            e,
          ),
          l.jsx("div", {
            className:
              "mt-20 pt-10 border-t border-neutral-150 flex flex-wrap gap-4 items-center",
            children: l.jsxs("button", {
              onClick: t,
              className:
                "group font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 px-6 py-4 rounded-xl shadow-md transition-all flex items-center gap-2.5 cursor-pointer",
              children: [
                l.jsx(RS, {
                  className:
                    "w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform",
                }),
                l.jsx("span", { children: "RETURN TO HOME" }),
              ],
            }),
          }),
        ],
      }),
      l.jsxs(Vr, {
        children: [
          r &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative",
                children: [
                  l.jsx("button", {
                    onClick: () => s(null),
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  i
                    ? l.jsxs("div", {
                        className:
                          "py-10 flex flex-col items-center justify-center text-center gap-3",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2",
                            children: l.jsx(Au, { className: "w-6 h-6" }),
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold text-neutral-900 uppercase",
                            children: "Thank You Sincerely",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-500 leading-relaxed font-light",
                            children:
                              r === "donate"
                                ? `Your contribution of ₹${a} has been registered successfully. A receipt is on its way.`
                                : "Your request has been received. Our regional coordinators will contact you within 24 hours.",
                          }),
                        ],
                      })
                    : l.jsxs("form", {
                        onSubmit: q1,
                        className: "flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0e5fa3] font-bold block uppercase mb-1",
                                children: "SAMPOORNA PORTAL",
                              }),
                              l.jsxs("h4", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: [
                                  r === "partner" && "Partner With Us",
                                  r === "volunteer" && "Become a Volunteer",
                                  r === "donate" && "Support Our Initiatives",
                                ],
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1",
                                children:
                                  r === "donate"
                                    ? "Registered with 12A/80G. Contributions receive tax relief receipts."
                                    : "Connect with our Mumbai headquarters.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3.5",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Your Name",
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    value: c,
                                    onChange: (A) => d(A.target.value),
                                    placeholder: "Taranna Garg",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Email Address",
                                  }),
                                  l.jsx("input", {
                                    type: "email",
                                    required: !0,
                                    value: f,
                                    onChange: (A) => h(A.target.value),
                                    placeholder: "name@gmail.com",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              r === "donate" &&
                                l.jsxs("div", {
                                  className: "flex flex-col gap-2",
                                  children: [
                                    l.jsx("label", {
                                      className:
                                        "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                      children: "Contribution Amount (INR)",
                                    }),
                                    l.jsx("div", {
                                      className: "grid grid-cols-4 gap-2",
                                      children: [
                                        "500",
                                        "1000",
                                        "5000",
                                        "10000",
                                      ].map((A) =>
                                        l.jsxs(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => u(A),
                                            className: `py-2 rounded-lg border font-mono text-xs font-bold cursor-pointer transition-colors ${a === A ? "bg-neutral-950 text-white border-neutral-950" : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100"}`,
                                            children: ["₹", A],
                                          },
                                          A,
                                        ),
                                      ),
                                    }),
                                    l.jsx("input", {
                                      type: "number",
                                      required: !0,
                                      value: a,
                                      onChange: (A) => u(A.target.value),
                                      className:
                                        "w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 mt-1",
                                    }),
                                  ],
                                }),
                              r !== "donate" &&
                                l.jsxs("div", {
                                  className: "flex flex-col gap-1.5",
                                  children: [
                                    l.jsx("label", {
                                      className:
                                        "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                      children: "Message or Motivation",
                                    }),
                                    l.jsx("textarea", {
                                      rows: 3,
                                      placeholder:
                                        "How would you like to participate?",
                                      className:
                                        "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20 resize-none",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          l.jsx("button", {
                            type: "submit",
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center",
                            children: "Confirm Submission",
                          }),
                        ],
                      }),
                ],
              }),
            }),
          x &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-lg w-full border border-neutral-100 shadow-2xl relative max-h-[85vh] overflow-y-auto",
                children: [
                  l.jsx("button", {
                    onClick: () => w(null),
                    className:
                      "absolute top-6 right-8 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  (() => {
                    const A = kf.find((te) => te.id === x);
                    return A
                      ? l.jsxs("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            l.jsx("span", {
                              className:
                                "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase mb-1",
                              children:
                                "Anthology Archives // Confessional Verse",
                            }),
                            l.jsx("h4", {
                              className:
                                "font-heading text-xl font-bold text-neutral-900 uppercase",
                              children: A.title,
                            }),
                            l.jsx("span", {
                              className:
                                "font-mono text-[8px] tracking-[0.3em] uppercase text-neutral-400 block -mt-1 font-bold",
                              children: A.vibe,
                            }),
                            l.jsx("div", {
                              className: "w-8 h-[1px] bg-neutral-100 my-2",
                            }),
                            l.jsx("div", {
                              className:
                                "font-mono text-xs text-neutral-600 leading-relaxed whitespace-pre-line pl-4 border-l border-[#E65F1B]/30 select-all font-light py-2",
                              children: A.text,
                            }),
                          ],
                        })
                      : null;
                  })(),
                ],
              }),
            }),
          p &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "bg-white rounded-3xl p-8 max-w-md w-full border border-neutral-100 shadow-2xl relative",
                children: [
                  l.jsx("button", {
                    onClick: () => m(!1),
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-neutral-900 cursor-pointer font-bold",
                    children: "[CLOSE]",
                  }),
                  g
                    ? l.jsxs("div", {
                        className:
                          "py-10 flex flex-col items-center justify-center text-center gap-3",
                        children: [
                          l.jsx("div", {
                            className:
                              "w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white mb-2",
                            children: l.jsx(Au, { className: "w-6 h-6" }),
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold text-neutral-900 uppercase",
                            children: "Booking Request Sent",
                          }),
                          l.jsxs("p", {
                            className:
                              "font-sans text-xs text-neutral-500 leading-relaxed font-light",
                            children: [
                              "We have noted your request for ",
                              S,
                              ". Taranna's coordinator will review the slot and respond via email within 24 hours.",
                            ],
                          }),
                        ],
                      })
                    : l.jsxs("form", {
                        onSubmit: Q1,
                        className: "flex flex-col gap-5",
                        children: [
                          l.jsxs("div", {
                            children: [
                              l.jsx("span", {
                                className:
                                  "font-mono text-[9px] tracking-widest text-[#0a8fa0] font-bold block uppercase mb-1",
                                children: "ORATORICAL ENGAGEMENT",
                              }),
                              l.jsx("h4", {
                                className:
                                  "font-heading text-lg font-bold text-neutral-900 uppercase",
                                children: "Book speaking event",
                              }),
                              l.jsx("p", {
                                className:
                                  "font-sans text-xs text-neutral-400 leading-relaxed font-light mt-1",
                                children:
                                  "Provide details for your event, university panel, or podcast recording.",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3.5",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Organizer / Institution",
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    required: !0,
                                    placeholder:
                                      "Tata Institute or Podcast Name",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Contact Email",
                                  }),
                                  l.jsx("input", {
                                    type: "email",
                                    required: !0,
                                    placeholder: "contact@institution.org",
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-sans text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Proposed Date",
                                  }),
                                  l.jsx("input", {
                                    type: "date",
                                    required: !0,
                                    value: S,
                                    onChange: (A) => j(A.target.value),
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 rounded-xl font-mono text-xs outline-none focus:border-neutral-900 focus:bg-neutral-50/20",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1.5",
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-wider text-neutral-500 uppercase font-bold",
                                    children: "Event Format",
                                  }),
                                  l.jsxs("select", {
                                    className:
                                      "w-full px-4 py-3 border border-neutral-200 bg-white rounded-xl font-sans text-xs outline-none focus:border-neutral-900",
                                    children: [
                                      l.jsx("option", {
                                        children: "Academic Panel / Lecture",
                                      }),
                                      l.jsx("option", {
                                        children: "Podcast Interview",
                                      }),
                                      l.jsx("option", {
                                        children: "Community Keynote Address",
                                      }),
                                      l.jsx("option", {
                                        children:
                                          "Corporate Positivity Workshop",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            type: "submit",
                            className:
                              "w-full font-mono text-[10px] tracking-widest uppercase font-bold text-white bg-neutral-950 hover:bg-neutral-850 py-4 rounded-xl cursor-pointer shadow-xs mt-3 text-center",
                            children: "Send Booking Request",
                          }),
                        ],
                      }),
                ],
              }),
            }),
          N &&
            l.jsx("div", {
              className:
                "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4",
              children: l.jsxs(X.div, {
                initial: { scale: 0.95, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.95, opacity: 0 },
                className:
                  "max-w-4xl w-full flex flex-col md:flex-row gap-8 items-center bg-neutral-950 rounded-3xl p-6 md:p-8 relative border border-neutral-800",
                children: [
                  l.jsx("button", {
                    onClick: () => {
                      (T(null), ze(1), ae(1.1));
                    },
                    className:
                      "absolute top-6 right-6 font-mono text-[10px] tracking-widest text-neutral-400 hover:text-white cursor-pointer font-bold",
                    children: "[CLOSE GALLERY]",
                  }),
                  l.jsx("div", {
                    className:
                       "w-full md:w-3/5 aspect-square relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-900",
                    children: l.jsx(CMSImage, {
                      originalSrc: N || "",
                      alt: "Portfolio Zoom",
                      referrerPolicy: "no-referrer",
                      className: "w-full h-full object-cover transition-all",
                      style: { filter: `contrast(${z}) brightness(${ve})` },
                    }),
                  }),
                  l.jsxs("div", {
                    className:
                      "w-full md:w-2/5 flex flex-col gap-6 justify-between self-stretch text-white",
                    children: [
                      l.jsxs("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-[#E65F1B] font-bold block uppercase",
                            children: "EDITORIAL MAGNIFIER",
                          }),
                          l.jsx("h4", {
                            className:
                              "font-heading text-lg font-bold tracking-tight uppercase leading-snug",
                            children: R.split(" // ")[0],
                          }),
                          l.jsx("span", {
                            className:
                              "font-mono text-[9px] tracking-widest text-neutral-500 uppercase block -mt-1 font-bold",
                            children: R.split(" // ")[1],
                          }),
                          l.jsx("div", {
                            className: "w-10 h-[1.5px] bg-neutral-800 my-2",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-xs text-neutral-400 leading-relaxed font-light",
                            children:
                              "Every body is an original multiverse of ether and fire. Explore the light balancing of Taranna's portrait focus below.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className:
                          "p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 flex flex-col gap-4 mt-auto",
                        children: [
                          l.jsxs("div", {
                            className:
                              "flex items-center gap-2 text-neutral-400",
                            children: [
                              l.jsx(Ox, {
                                className: "w-3.5 h-3.5 text-amber-500",
                              }),
                              l.jsx("span", {
                                className:
                                  "font-mono text-[8px] font-bold uppercase tracking-widest",
                                children: "Image adjustments",
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex flex-col gap-3",
                            children: [
                              l.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex justify-between font-mono text-[8px] text-neutral-400",
                                    children: [
                                      l.jsx("span", { children: "CONTRAST" }),
                                      l.jsxs("span", {
                                        children: [z.toFixed(2), "x"],
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "range",
                                    min: "0.8",
                                    max: "1.6",
                                    step: "0.05",
                                    value: z,
                                    onChange: (A) =>
                                      ae(parseFloat(A.target.value)),
                                    className:
                                      "w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "flex flex-col gap-1",
                                children: [
                                  l.jsxs("div", {
                                    className:
                                      "flex justify-between font-mono text-[8px] text-neutral-400",
                                    children: [
                                      l.jsx("span", { children: "BRIGHTNESS" }),
                                      l.jsxs("span", {
                                        children: [ve.toFixed(2), "x"],
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "range",
                                    min: "0.7",
                                    max: "1.3",
                                    step: "0.05",
                                    value: ve,
                                    onChange: (A) =>
                                      ze(parseFloat(A.target.value)),
                                    className:
                                      "w-full accent-amber-500 h-1 bg-neutral-800 rounded-lg cursor-pointer",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => {
                              (ae(1.1), ze(1));
                            },
                            className:
                              "mt-2 py-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 rounded-lg font-mono text-[8px] font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors cursor-pointer",
                            children: "Reset adjustments",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
        ],
      }),
    ],
  });
}


export default pP;
