function KA() {
  const [e, t] = k.useState("home"),
    [n, r] = k.useState(!0);
  return (
    k.useEffect(() => {
      window.scrollTo(0, 0);
    }, [e]),
    l.jsxs("div", {
      className:
        "min-h-screen bg-[#FCFAF6] text-neutral-900 selection:bg-neutral-900 selection:text-white font-sans antialiased relative md:cursor-none",
      children: [
        l.jsx(WA, {}),
        l.jsx(HA, {}),
        l.jsx(Vr, { children: n && l.jsx(BA, { onComplete: () => r(!1) }) }),
        l.jsx("div", {
          className:
            "absolute top-0 bottom-0 left-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none",
        }),
        l.jsx("div", {
          className:
            "absolute top-0 bottom-0 right-6 w-[1.5px] bg-neutral-100/30 hidden xl:block pointer-events-none",
        }),
        l.jsx(i2, { currentView: e, setCurrentView: t }),
        e === "home"
          ? l.jsx(l.Fragment, {
              children: l.jsxs("main", {
                className: "w-full",
                children: [
                  l.jsx(cP, {}),
                  l.jsxs("section", {
                    className:
                      "py-12 px-6 text-center flex flex-col items-center",
                    children: [
                      l.jsx(X.span, {
                        initial: { opacity: 0, y: 15 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.8, delay: 0.2 },
                        className:
                          "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase mb-3",
                        children: "Taranna Deepjyoti",
                      }),
                      l.jsx(X.p, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { duration: 1, delay: 0.5 },
                        className:
                          "font-display italic text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed font-light",
                        children:
                          "Four different rooms. One person walking through all of them, unguarded.",
                      }),
                    ],
                  }),
                  l.jsx("section", {
                    className:
                      "py-20 md:py-28 px-6 flex flex-col items-center justify-center text-center relative pointer-events-auto bg-[#0C0C0C] border-y border-neutral-900",
                    children: l.jsxs(X.div, {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, margin: "-100px" },
                      transition: { duration: 1.2, ease: "easeOut" },
                      className:
                        "max-w-2xl mx-auto flex flex-col items-center gap-5",
                      children: [
                        l.jsx("p", {
                          className:
                            "font-display italic text-2xl md:text-4xl text-[#E65F1B] leading-relaxed tracking-tight select-all",
                          children:
                            "“Awakening what is lost, nurturing what is found”",
                        }),
                        l.jsxs("div", {
                          className: "flex items-center gap-4 mt-2",
                          children: [
                            l.jsx("span", {
                              className: "w-6 h-[1.5px] bg-[#0e5fa3]/20",
                            }),
                            l.jsx("span", {
                              className:
                                "font-mono text-[10px] tracking-[0.3em] uppercase text-[#0e5fa3] font-black",
                              children: "by Tarrana",
                            }),
                            l.jsx("span", {
                              className: "w-6 h-[1.5px] bg-[#0e5fa3]/20",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  l.jsx(hP, { onNavigate: (s) => t(s) }),
                  l.jsx(GA, {}),
                  l.jsx(YA, {}),
                ],
              }),
            })
          : e === "gallery"
            ? l.jsx(zA, { onBack: () => t("home") })
            : l.jsx(pP, {
                view: e,
                onBack: () => t("home"),
                onNavigate: (s) => t(s),
              }),
      ],
    })
  );
}
