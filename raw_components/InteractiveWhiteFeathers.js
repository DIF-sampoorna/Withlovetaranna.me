function HA() {
  const e = k.useRef(null),
    t = k.useRef([]),
    n = k.useRef({ x: -1e3, y: -1e3, lastX: -1e3, lastY: -1e3, vx: 0, vy: 0 });
  return (
    k.useEffect(() => {
      const r = e.current;
      if (!r) return;
      const s = r.getContext("2d");
      if (!s) return;
      const i = () => {
        ((r.width = window.innerWidth), (r.height = window.innerHeight));
      };
      (i(), window.addEventListener("resize", i));
      const o = [],
        a = 15;
      for (let y = 0; y < a; y++)
        o.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: Math.random() * 0.4 - 0.2,
          vy: 0.5 + Math.random() * 0.8,
          angle: Math.random() * Math.PI * 2,
          spin: Math.random() * 0.01 - 0.005,
          size: 18 + Math.random() * 22,
          opacity: 0.06 + Math.random() * 0.12,
          flutter: Math.random() * Math.PI * 2,
          flutterSpeed: 0.01 + Math.random() * 0.02,
          flutterRange: 0.2 + Math.random() * 0.4,
          type: Math.floor(Math.random() * 3),
          isSpawned: !1,
          life: 1,
          decay: 0,
        });
      t.current = o;
      const u = (y) => {
          const p = n.current,
            m = y.clientX,
            g = y.clientY;
          (p.lastX !== -1e3 && ((p.vx = m - p.lastX), (p.vy = g - p.lastY)),
            (p.x = m),
            (p.y = g),
            (p.lastX = m),
            (p.lastY = g));
        },
        c = (y) => {
          const p = y.clientX,
            m = y.clientY,
            g = Math.floor(Math.random() * 2) + 2;
          for (let b = 0; b < g; b++)
            t.current.push({
              x: p + (Math.random() * 30 - 15),
              y: m + (Math.random() * 30 - 15),
              vx: Math.random() * 2 - 1,
              vy: -1 - Math.random() * 1.5,
              angle: Math.random() * Math.PI * 2,
              spin: Math.random() * 0.06 - 0.03,
              size: 16 + Math.random() * 18,
              opacity: 0.2 + Math.random() * 0.2,
              flutter: Math.random() * Math.PI * 2,
              flutterSpeed: 0.03 + Math.random() * 0.04,
              flutterRange: 0.4 + Math.random() * 0.6,
              type: Math.floor(Math.random() * 3),
              isSpawned: !0,
              life: 1,
              decay: 0.005 + Math.random() * 0.008,
            });
        },
        d = (y) => {
          if (y.touches.length === 0) return;
          const p = y.touches[0],
            m = n.current,
            g = p.clientX,
            b = p.clientY;
          ((m.x = g),
            (m.y = b),
            (m.lastX = g),
            (m.lastY = b),
            (m.vx = 0),
            (m.vy = 0));
          const S = Math.floor(Math.random() * 2) + 2;
          for (let j = 0; j < S; j++)
            t.current.push({
              x: g + (Math.random() * 30 - 15),
              y: b + (Math.random() * 30 - 15),
              vx: Math.random() * 2 - 1,
              vy: -1 - Math.random() * 1.5,
              angle: Math.random() * Math.PI * 2,
              spin: Math.random() * 0.06 - 0.03,
              size: 16 + Math.random() * 18,
              opacity: 0.2 + Math.random() * 0.2,
              flutter: Math.random() * Math.PI * 2,
              flutterSpeed: 0.03 + Math.random() * 0.04,
              flutterRange: 0.4 + Math.random() * 0.6,
              type: Math.floor(Math.random() * 3),
              isSpawned: !0,
              life: 1,
              decay: 0.005 + Math.random() * 0.008,
            });
        },
        f = (y) => {
          if (y.touches.length === 0) return;
          const p = y.touches[0],
            m = n.current,
            g = p.clientX,
            b = p.clientY;
          (m.lastX !== -1e3 && ((m.vx = g - m.lastX), (m.vy = b - m.lastY)),
            (m.x = g),
            (m.y = b),
            (m.lastX = g),
            (m.lastY = b));
        },
        h = () => {
          const y = n.current;
          ((y.lastX = -1e3),
            (y.lastY = -1e3),
            (y.x = -1e3),
            (y.y = -1e3),
            (y.vx = 0),
            (y.vy = 0));
        };
      (window.addEventListener("mousemove", u),
        window.addEventListener("click", c),
        window.addEventListener("touchstart", d, { passive: !0 }),
        window.addEventListener("touchmove", f, { passive: !0 }),
        window.addEventListener("touchend", h, { passive: !0 }));
      let x;
      const w = (y, p, m, g, b, S, j) => {
          if (
            (y.save(),
            y.translate(p, m),
            y.rotate(b),
            (y.fillStyle = `rgba(255, 255, 255, ${S})`),
            (y.strokeStyle = `rgba(255, 255, 255, ${S * 1.5})`),
            j === 0)
          ) {
            (y.beginPath(),
              y.moveTo(0, -g / 2),
              y.quadraticCurveTo(g * 0.05, 0, 0, g / 2),
              (y.lineWidth = 1.2),
              y.stroke(),
              y.beginPath(),
              y.moveTo(0, -g / 2),
              y.bezierCurveTo(g * 0.35, -g * 0.25, g * 0.4, g * 0.2, 0, g / 2),
              y.fill(),
              y.beginPath(),
              y.moveTo(0, -g / 2),
              y.bezierCurveTo(
                -g * 0.35,
                -g * 0.25,
                -g * 0.4,
                g * 0.2,
                0,
                g / 2,
              ),
              y.fill(),
              (y.lineWidth = 0.5),
              y.beginPath());
            for (let N = -g * 0.3; N < g * 0.3; N += g * 0.15)
              (y.moveTo(0, N),
                y.lineTo(g * 0.2, N + g * 0.1),
                y.moveTo(0, N),
                y.lineTo(-g * 0.2, N + g * 0.1));
            y.stroke();
          } else
            j === 1
              ? (y.beginPath(),
                y.moveTo(0, -g / 2),
                y.quadraticCurveTo(g * 0.08, 0, 0, g / 2),
                (y.lineWidth = 1),
                y.stroke(),
                y.beginPath(),
                y.moveTo(0, -g / 2),
                y.bezierCurveTo(
                  g * 0.45,
                  -g * 0.1,
                  g * 0.45,
                  g * 0.3,
                  0,
                  g / 2,
                ),
                y.bezierCurveTo(
                  -g * 0.45,
                  g * 0.3,
                  -g * 0.45,
                  -g * 0.1,
                  0,
                  -g / 2,
                ),
                y.fill(),
                y.beginPath(),
                (y.lineWidth = 0.7),
                y.moveTo(0, g * 0.1),
                y.quadraticCurveTo(g * 0.28, g * 0.2, g * 0.35, g * 0.35),
                y.moveTo(0, g * 0.1),
                y.quadraticCurveTo(-g * 0.28, g * 0.2, -g * 0.35, g * 0.35),
                y.stroke())
              : (y.beginPath(),
                y.moveTo(0, -g / 2),
                y.quadraticCurveTo(g * 0.15, g * 0.05, 0, g / 2),
                (y.lineWidth = 1.4),
                y.stroke(),
                y.beginPath(),
                y.moveTo(0, -g / 2),
                y.bezierCurveTo(g * 0.3, -g * 0.3, g * 0.45, g * 0.1, 0, g / 2),
                y.bezierCurveTo(
                  -g * 0.2,
                  g * 0.2,
                  -g * 0.25,
                  -g * 0.2,
                  0,
                  -g / 2,
                ),
                y.fill());
          y.restore();
        },
        v = () => {
          s.clearRect(0, 0, r.width, r.height);
          const y = n.current;
          ((y.vx *= 0.95),
            (y.vy *= 0.95),
            t.current.forEach((p, m) => {
              p.flutter += p.flutterSpeed;
              const g = Math.sin(p.flutter) * p.flutterRange;
              ((p.x += p.vx + g * 0.3),
                (p.y += p.vy),
                (p.angle += p.spin),
                p.isSpawned
                  ? ((p.vy += 0.05),
                    (p.vy *= 0.96),
                    (p.vx *= 0.96),
                    (p.life -= p.decay))
                  : (p.vy < 0.4 && (p.vy += 0.02),
                    p.vy > 1.2 && (p.vy -= 0.02),
                    (p.vx = p.vx * 0.98 + (Math.random() * 0.02 - 0.01))));
              const b = p.x - y.x,
                S = p.y - y.y,
                j = Math.sqrt(b * b + S * S),
                N = 160;
              if (j < N) {
                const R = (N - j) / N,
                  M = Math.atan2(S, b),
                  z = Math.cos(M) * R * 2.5,
                  ae = Math.sin(M) * R * 2;
                ((p.vx += z),
                  (p.vy += ae),
                  (p.spin += (Math.random() * 0.04 - 0.02) * R),
                  (p.vx = Math.min(Math.max(p.vx, -5), 5)),
                  (p.vy = Math.min(Math.max(p.vy, -4), 4)));
              } else p.spin *= 0.98;
              p.isSpawned ||
                (p.y > r.height + p.size &&
                  ((p.y = -p.size),
                  (p.x = Math.random() * r.width),
                  (p.vx = Math.random() * 0.4 - 0.2),
                  (p.vy = 0.5 + Math.random() * 0.8)),
                p.x < -p.size
                  ? (p.x = r.width + p.size)
                  : p.x > r.width + p.size && (p.x = -p.size));
              const T = p.isSpawned ? p.opacity * p.life : p.opacity;
              T > 0.005 && w(s, p.x, p.y, p.size, p.angle, T, p.type);
            }),
            (t.current = t.current.filter(
              (p) => !p.isSpawned || p.life > 0.01,
            )),
            (x = requestAnimationFrame(v)));
        };
      return (
        (x = requestAnimationFrame(v)),
        () => {
          (window.removeEventListener("resize", i),
            window.removeEventListener("mousemove", u),
            window.removeEventListener("click", c),
            window.removeEventListener("touchstart", d),
            window.removeEventListener("touchmove", f),
            window.removeEventListener("touchend", h),
            cancelAnimationFrame(x));
        }
      );
    }, []),
    l.jsx("canvas", {
      ref: e,
      className:
        "fixed inset-0 w-full h-full pointer-events-none z-[1] select-none",
      style: { mixBlendMode: "screen" },
    })
  );
}
