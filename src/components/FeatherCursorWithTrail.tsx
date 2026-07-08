import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const l = { jsx, jsxs, Fragment };
import { motion as X } from 'motion/react';
import * as k from 'react';

function WA() {
  const [e, t] = k.useState(!1),
    [n, r] = k.useState({ x: -100, y: -100 }),
    [s, i] = k.useState(0),
    [o, a] = k.useState(!1),
    u = k.useRef(null),
    c = k.useRef([]);
  return (
    k.useEffect(() => {
      const d = window.matchMedia("(pointer: fine)");
      d.matches && t(!0);
      const f = (x) => {
        x.matches && t(!0);
      };
      d.addEventListener("change", f);
      const h = () => {
        (t(!0), window.removeEventListener("mousemove", h));
      };
      return (
        window.addEventListener("mousemove", h),
        () => {
          (d.removeEventListener("change", f),
            window.removeEventListener("mousemove", h));
        }
      );
    }, []),
    k.useEffect(() => {
      if (e)
        return (
          document.body.classList.add("custom-cursor-active"),
          () => {
            document.body.classList.remove("custom-cursor-active");
          }
        );
    }, [e]),
    k.useEffect(() => {
      if (!e) return;
      let d = 0;
      const f = (h) => {
        r({ x: h.clientX, y: h.clientY });
        const x = h.clientX - d;
        d = h.clientX;
        const w = Math.min(Math.max(x * 1, -22), 22);
        i(w);
        const v = h.target;
        if (v) {
          const g = !!v.closest(
            'a, button, [role="button"], input, select, textarea, .cursor-pointer, [onclick]',
          );
          a(g);
        }
        if (!u.current) return;
        const p = [
            "rgba(251, 191, 36, ",
            "rgba(245, 158, 11, ",
            "rgba(254, 240, 138, ",
            "rgba(168, 85, 247, ",
            "rgba(192, 38, 211, ",
            "rgba(255, 255, 255, ",
          ],
          m = Math.floor(Math.random() * 3) + 2;
        for (let g = 0; g < m; g++) {
          const b = p[Math.floor(Math.random() * p.length)],
            S = Math.random() > 0.45;
          c.current.push({
            x: h.clientX,
            y: h.clientY,
            vx: Math.random() * 2.2 - 1.1,
            vy: Math.random() * 2.2 - 1.1 - 0.5,
            size: Math.random() * 2.2 + 1.6,
            alpha: 1,
            decay: Math.random() * 0.016 + 0.012,
            colorBase: b,
            isStar: S,
            angle: Math.random() * Math.PI * 2,
            spin: Math.random() * 0.08 - 0.04,
          });
        }
      };
      return (
        window.addEventListener("mousemove", f),
        () => window.removeEventListener("mousemove", f)
      );
    }, [e]),
    k.useEffect(() => {
      if (!e) return;
      const d = u.current;
      if (!d) return;
      const f = d.getContext("2d");
      if (!f) return;
      const h = () => {
        ((d.width = window.innerWidth), (d.height = window.innerHeight));
      };
      (h(), window.addEventListener("resize", h));
      let x;
      const w = (y, p, m, g, b) => {
          let S = (Math.PI / 2) * 3,
            j = y,
            N = p;
          const T = Math.PI / m;
          (f.beginPath(), f.moveTo(y, p - g));
          for (let R = 0; R < m; R++)
            ((j = y + Math.cos(S) * g),
              (N = p + Math.sin(S) * g),
              f.lineTo(j, N),
              (S += T),
              (j = y + Math.cos(S) * b),
              (N = p + Math.sin(S) * b),
              f.lineTo(j, N),
              (S += T));
          (f.lineTo(y, p - g), f.closePath());
        },
        v = () => {
          f.clearRect(0, 0, d.width, d.height);
          const y = c.current;
          for (let p = y.length - 1; p >= 0; p--) {
            const m = y[p];
            if (
              ((m.x += m.vx),
              (m.y += m.vy),
              (m.alpha -= m.decay),
              (m.size -= 0.022),
              (m.angle += m.spin),
              (m.vx *= 0.98),
              (m.vy *= 0.98),
              m.alpha <= 0 || m.size <= 0)
            ) {
              y.splice(p, 1);
              continue;
            }
            (f.save(),
              (f.globalAlpha = m.alpha),
              (f.fillStyle = `${m.colorBase}${m.alpha})`),
              (f.shadowBlur = m.size * 2.5),
              (f.shadowColor = m.colorBase.replace(", ", ")")),
              m.isStar
                ? (f.translate(m.x, m.y),
                  f.rotate(m.angle),
                  w(0, 0, 4, m.size, m.size * 0.35),
                  f.fill())
                : (f.beginPath(),
                  f.arc(m.x, m.y, m.size * 0.75, 0, Math.PI * 2),
                  f.fill()),
              f.restore());
          }
          x = requestAnimationFrame(v);
        };
      return (
        (x = requestAnimationFrame(v)),
        () => {
          (window.removeEventListener("resize", h), cancelAnimationFrame(x));
        }
      );
    }, [e]),
    e
      ? l.jsxs(l.Fragment, {
          children: [
            l.jsx("style", {
              children: `
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }
      `,
            }),
            l.jsx("canvas", {
              ref: u,
              className:
                "fixed inset-0 w-full h-full pointer-events-none z-[9999]",
            }),
            l.jsx(X.div, {
              className:
                "fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-normal select-none",
              style: {
                x: n.x,
                y: n.y,
                translateX: "0%",
                translateY: "-100%",
                originX: 0,
                originY: 1,
              },
              animate: { rotate: s, scale: o ? 1.25 : 1 },
              transition: {
                type: "spring",
                damping: 28,
                stiffness: 350,
                mass: 0.06,
              },
              children: l.jsx("img", {
                src: "/golden-feather-pen.png",
                alt: "Golden Feather Quill",
                className:
                  "w-[72px] h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]",
                referrerPolicy: "no-referrer",
              }),
            }),
          ],
        })
      : null
  );
}


export default WA;
