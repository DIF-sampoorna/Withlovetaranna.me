function YA() {
  const [e, t] = k.useState({
      name: "",
      email: "",
      organization: "",
      interest: "collaboration",
      message: "",
    }),
    [n, r] = k.useState(!1),
    [s, i] = k.useState(!1),
    o = [
      { id: "collaboration", label: "Creative Collaboration", icon: Wo },
      { id: "sampoorna", label: "Sampoorna Foundation", icon: ba },
      { id: "poetry", label: "Poetry & Writing", icon: $x },
      { id: "speaking", label: "Speaking & Workshops", icon: od },
      { id: "modeling", label: "Modeling & Campaigns", icon: Vx },
      { id: "other", label: "General Inquiry", icon: OS },
    ],
    a = (c) => {
      (c.preventDefault(),
        !(!e.name || !e.email || !e.message) &&
          (r(!0),
          setTimeout(() => {
            (r(!1), i(!0));
          }, 1500)));
    },
    u = () => {
      (t({
        name: "",
        email: "",
        organization: "",
        interest: "collaboration",
        message: "",
      }),
        i(!1));
    };
  return l.jsxs("section", {
    id: "contact-collaboration",
    className:
      "relative py-24 px-6 md:px-12 bg-[#0C0C0C] text-neutral-100 border-t border-neutral-900 overflow-hidden",
    children: [
      l.jsx("div", {
        className:
          "absolute top-1/3 right-10 w-80 h-80 bg-[#0e5fa3]/10 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute bottom-10 left-10 w-96 h-96 bg-[#E65F1B]/10 rounded-full filter blur-3xl pointer-events-none",
      }),
      l.jsx("div", {
        className:
          "absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-neutral-800 to-transparent",
      }),
      l.jsxs("div", {
        className: "max-w-7xl mx-auto relative z-10",
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
                  " FOUR ROOMS // ONE ENTRYWAY",
                ],
              }),
              l.jsx("h2", {
                className:
                  "font-heading text-3xl md:text-5xl font-extrabold text-white tracking-tight uppercase leading-none",
                children: "COLLABORATIONS & PARTNERSHIPS",
              }),
              l.jsx("p", {
                className:
                  "font-display italic text-sm md:text-base text-neutral-400 mt-4 max-w-xl",
                children:
                  "Whether for social impact, poetic projects, panel speaking, or artistic campaigns—let's create something meaningful together.",
              }),
              l.jsx("div", { className: "h-[2px] w-12 bg-neutral-700 mt-5" }),
            ],
          }),
          l.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch",
            children: [
              l.jsxs("div", {
                className: "lg:col-span-5 flex flex-col justify-between gap-10",
                children: [
                  l.jsxs("div", {
                    className: "space-y-8",
                    children: [
                      l.jsxs("div", {
                        children: [
                          l.jsx("h3", {
                            className:
                              "font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-white mb-4",
                            children: "THE CONVERSATION STARTS HERE",
                          }),
                          l.jsx("p", {
                            className:
                              "font-sans text-neutral-400 text-sm md:text-base leading-relaxed font-light",
                            children:
                              "Taranna’s work lives in the intersection of poetry, activism, speech, and fashion. If you represent an organization, brand, publication, or have a personal creative proposal, we would love to connect.",
                          }),
                        ],
                      }),
                      l.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          l.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#E65F1B] shrink-0",
                                children: l.jsx(GS, { className: "w-4 h-4" }),
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5",
                                    children: "DIRECT EMAIL",
                                  }),
                                  l.jsx("a", {
                                    href: "mailto:hello@withlovetaranna.me",
                                    className:
                                      "font-sans text-sm md:text-base text-neutral-200 hover:text-[#0e5fa3] transition-colors duration-200",
                                    children: "hello@withlovetaranna.me",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          l.jsxs("div", {
                            className: "flex items-start gap-4",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[#0e5fa3] shrink-0",
                                children: l.jsx(YS, { className: "w-4 h-4" }),
                              }),
                              l.jsxs("div", {
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-0.5",
                                    children: "LOCATION",
                                  }),
                                  l.jsx("span", {
                                    className:
                                      "font-sans text-sm md:text-base text-neutral-200",
                                    children: "Mumbai, India",
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
                    className: "pt-8 border-t border-neutral-900",
                    children: [
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] tracking-widest text-neutral-500 font-bold block uppercase mb-4",
                        children: "CHANNELS OF CONNECTION",
                      }),
                      l.jsxs("div", {
                        className: "flex flex-wrap gap-4",
                        children: [
                          l.jsxs("a", {
                            href: "https://www.instagram.com/withlove_taranna/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold",
                            children: [
                              l.jsx(Mu, {
                                className: "w-3.5 h-3.5 text-[#E65F1B]",
                              }),
                              "INSTAGRAM",
                            ],
                          }),
                          l.jsxs("a", {
                            href: "https://www.linkedin.com/in/trulytarana/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className:
                              "flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800/80 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all duration-300 text-xs font-mono tracking-wider uppercase font-bold",
                            children: [
                              l.jsx(HS, {
                                className: "w-3.5 h-3.5 text-[#0e5fa3]",
                              }),
                              "LINKEDIN",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              l.jsx("div", {
                className: "lg:col-span-7",
                children: l.jsx("div", {
                  className:
                    "bg-[#121110] border border-neutral-900 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",
                  children: l.jsx(Vr, {
                    mode: "wait",
                    children: s
                      ? l.jsxs(
                          X.div,
                          {
                            initial: { opacity: 0, scale: 0.95 },
                            animate: { opacity: 1, scale: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.4 },
                            className:
                              "py-12 text-center flex flex-col items-center justify-center gap-6",
                            children: [
                              l.jsx("div", {
                                className:
                                  "w-16 h-16 rounded-2xl bg-[#0e5fa3]/10 border border-[#0e5fa3]/20 flex items-center justify-center text-[#E65F1B] animate-pulse",
                                children: l.jsx(FS, { className: "w-8 h-8" }),
                              }),
                              l.jsxs("div", {
                                className: "space-y-2",
                                children: [
                                  l.jsx("h4", {
                                    className:
                                      "font-heading text-xl font-bold uppercase tracking-tight text-white",
                                    children: "MESSAGE RECEIVED SUCCESSFUL",
                                  }),
                                  l.jsxs("p", {
                                    className:
                                      "font-sans text-neutral-400 text-sm max-w-md mx-auto leading-relaxed font-light",
                                    children: [
                                      "Thank you for reaching out, ",
                                      l.jsx("strong", {
                                        className: "text-white font-semibold",
                                        children: e.name,
                                      }),
                                      ". Your message is safely logged. Taranna will respond in the same direct, authentic spirit.",
                                    ],
                                  }),
                                ],
                              }),
                              l.jsx("button", {
                                type: "button",
                                onClick: u,
                                className:
                                  "font-mono text-[10px] tracking-widest text-[#0e5fa3] hover:text-[#0e5fa3]/80 font-black uppercase mt-4 underline underline-offset-4",
                                children: "SEND ANOTHER INQUIRY",
                              }),
                            ],
                          },
                          "success-message",
                        )
                      : l.jsxs(
                          X.form,
                          {
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            exit: { opacity: 0 },
                            transition: { duration: 0.4 },
                            onSubmit: a,
                            className: "space-y-6",
                            children: [
                              l.jsxs("div", {
                                children: [
                                  l.jsx("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase mb-3",
                                    children: "SELECT AREA OF INTEREST",
                                  }),
                                  l.jsx("div", {
                                    className:
                                      "grid grid-cols-2 sm:grid-cols-3 gap-2",
                                    children: o.map((c) => {
                                      const d = c.icon,
                                        f = e.interest === c.id;
                                      return l.jsxs(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () =>
                                            t({ ...e, interest: c.id }),
                                          className: `flex items-center gap-2 p-3 rounded-xl border text-left transition-all duration-300 ${f ? "bg-[#0e5fa3]/10 border-[#0e5fa3] text-white" : "bg-neutral-950/40 border-neutral-800/60 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"}`,
                                          children: [
                                            l.jsx(d, {
                                              className: `w-3.5 h-3.5 ${f ? "text-[#E65F1B]" : "text-neutral-500"}`,
                                            }),
                                            l.jsx("span", {
                                              className:
                                                "font-mono text-[10px] uppercase font-bold leading-none tracking-tight",
                                              children: c.label,
                                            }),
                                          ],
                                        },
                                        c.id,
                                      );
                                    }),
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className:
                                  "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                  l.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      l.jsxs("label", {
                                        className:
                                          "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                        children: [
                                          "YOUR NAME ",
                                          l.jsx("span", {
                                            className: "text-[#E65F1B]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      l.jsx("input", {
                                        type: "text",
                                        required: !0,
                                        value: e.name,
                                        onChange: (c) =>
                                          t({ ...e, name: c.target.value }),
                                        placeholder: "Taranna Deepjyoti",
                                        className:
                                          "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                      }),
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      l.jsxs("label", {
                                        className:
                                          "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                        children: [
                                          "EMAIL ADDRESS ",
                                          l.jsx("span", {
                                            className: "text-[#E65F1B]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      l.jsx("input", {
                                        type: "email",
                                        required: !0,
                                        value: e.email,
                                        onChange: (c) =>
                                          t({ ...e, email: c.target.value }),
                                        placeholder: "name@example.com",
                                        className:
                                          "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                    children: [
                                      "ORGANIZATION / COMPANY ",
                                      l.jsx("span", {
                                        className: "text-neutral-600",
                                        children: "(OPTIONAL)",
                                      }),
                                    ],
                                  }),
                                  l.jsx("input", {
                                    type: "text",
                                    value: e.organization,
                                    onChange: (c) =>
                                      t({ ...e, organization: c.target.value }),
                                    placeholder:
                                      "Deepjyoti India Foundation / Self",
                                    className:
                                      "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans",
                                  }),
                                ],
                              }),
                              l.jsxs("div", {
                                className: "space-y-1",
                                children: [
                                  l.jsxs("label", {
                                    className:
                                      "font-mono text-[9px] tracking-widest text-neutral-400 font-black block uppercase",
                                    children: [
                                      "YOUR MESSAGE ",
                                      l.jsx("span", {
                                        className: "text-[#E65F1B]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  l.jsx("textarea", {
                                    required: !0,
                                    rows: 4,
                                    value: e.message,
                                    onChange: (c) =>
                                      t({ ...e, message: c.target.value }),
                                    placeholder:
                                      "Describe your creative vision, proposal, or inquiry here...",
                                    className:
                                      "w-full bg-neutral-950/50 border border-neutral-800/80 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-[#0e5fa3] focus:ring-1 focus:ring-[#0e5fa3]/30 transition-all duration-300 font-sans resize-none leading-relaxed",
                                  }),
                                ],
                              }),
                              l.jsx("button", {
                                type: "submit",
                                disabled: n,
                                className:
                                  "w-full bg-neutral-100 hover:bg-white text-neutral-950 hover:text-black font-mono text-xs font-black tracking-[0.2em] uppercase py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group active:scale-[0.98]",
                                children: n
                                  ? l.jsxs(l.Fragment, {
                                      children: [
                                        l.jsx("div", {
                                          className:
                                            "w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin",
                                        }),
                                        "TRANSMITTING...",
                                      ],
                                    })
                                  : l.jsxs(l.Fragment, {
                                      children: [
                                        "SEND MESSAGE",
                                        l.jsx(e2, {
                                          className:
                                            "w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5",
                                        }),
                                      ],
                                    }),
                              }),
                            ],
                          },
                          "contact-form",
                        ),
                  }),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
