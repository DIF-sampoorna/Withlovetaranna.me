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
