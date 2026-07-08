function UA({ item: e, onClick: t }) {
  return l.jsxs(X.div, {
    whileHover: { scale: 1.03, y: -4 },
    transition: { duration: 0.4, ease: "easeOut" },
    onClick: t,
    className:
      "relative w-56 h-36 md:w-80 md:h-52 bg-neutral-900 rounded-2xl overflow-hidden shadow-md border border-neutral-200/5 hover:border-white/10 group cursor-pointer shrink-0",
    children: [
      l.jsx("img", {
        src: e.thumbnail,
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
