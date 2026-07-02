import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function FeatherCursorWithTrail() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<any[]>([]);

  // Check if cursor should be enabled (only on devices with pointers, e.g. desktop/laptop)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (mediaQuery.matches) {
      setIsEnabled(true);
    }
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setIsEnabled(true);
    };
    
    mediaQuery.addEventListener("change", handleChange);

    // Backup to enable custom cursor when movement is detected
    const handleInitialMouseMove = () => {
      setIsEnabled(true);
      window.removeEventListener("mousemove", handleInitialMouseMove);
    };
    window.addEventListener("mousemove", handleInitialMouseMove);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleInitialMouseMove);
    };
  }, []);

  // Add global style class to body
  useEffect(() => {
    if (isEnabled) {
      document.body.classList.add("custom-cursor-active");
      return () => {
        document.body.classList.remove("custom-cursor-active");
      };
    }
  }, [isEnabled]);

  // Track coordinates, calculate dynamic rotation based on motion, and stardust emission
  useEffect(() => {
    if (!isEnabled) return;

    let lastX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Gentle rotation based on velocity
      const dx = e.clientX - lastX;
      lastX = e.clientX;
      const targetRotation = Math.min(Math.max(dx * 1.0, -22), 22);
      setRotation(targetRotation);

      // Detect hover on interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const hasInteractiveParent = !!target.closest(
          'a, button, [role="button"], input, select, textarea, .cursor-pointer, [onclick]'
        );
        setIsHovering(hasInteractiveParent);
      }

      // Spawn colorful magical stardust trail matching both golden & purple aesthetics
      const canvas = canvasRef.current;
      if (!canvas) return;

      const particleColors = [
        "rgba(251, 191, 36, ",  // Gold
        "rgba(245, 158, 11, ",  // Amber
        "rgba(254, 240, 138, ", // Champagne Yellow
        "rgba(168, 85, 247, ",  // Magic Purple
        "rgba(192, 38, 211, ",  // Amethyst Fuchsia
        "rgba(255, 255, 255, "  // Brilliant Star White
      ];

      const count = Math.floor(Math.random() * 3) + 2; // 2 to 4 particles per mouse move
      for (let i = 0; i < count; i++) {
        const colorBase = particleColors[Math.floor(Math.random() * particleColors.length)];
        const isStar = Math.random() > 0.45; // mix stars and standard spark dust
        
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: (Math.random() * 2.2 - 1.1),
          vy: (Math.random() * 2.2 - 1.1) - 0.5, // drift slightly upward
          size: Math.random() * 2.2 + 1.6,
          alpha: 1.0,
          decay: Math.random() * 0.016 + 0.012,
          colorBase,
          isStar,
          angle: Math.random() * Math.PI * 2,
          spin: Math.random() * 0.08 - 0.04
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isEnabled]);

  // Canvas drawing loop
  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animId: number;

    const drawStar = (cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number) => {
      let rot = (Math.PI / 2) * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
    };

    const updateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        p.size -= 0.022;
        p.angle += p.spin;

        // Air resistance / friction
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.alpha <= 0 || p.size <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `${p.colorBase}${p.alpha})`;
        
        ctx.shadowBlur = p.size * 2.5;
        ctx.shadowColor = p.colorBase.replace(", ", ")");

        if (p.isStar) {
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          drawStar(0, 0, 4, p.size, p.size * 0.35);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      animId = requestAnimationFrame(updateParticles);
    };

    animId = requestAnimationFrame(updateParticles);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animId);
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <>
      {/* Global overrides to hide browser default cursor */}
      <style>{`
        .custom-cursor-active,
        .custom-cursor-active * {
          cursor: none !important;
        }
      `}</style>

      {/* High-performance canvas for drawing stardust */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999]"
      />

      {/* High-fidelity custom straight golden feather quill cursor using golden-feather-pen.png */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-normal select-none"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          // Since the nib of the golden-feather-pen.png is at the bottom-left corner,
          // we align the hotspot precisely at the bottom-left tip of the image.
          translateX: "0%",
          translateY: "-100%",
          originX: 0,
          originY: 1,
        }}
        animate={{
          rotate: rotation,
          scale: isHovering ? 1.25 : 1.0,
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 350,
          mass: 0.06
        }}
      >
        <img
          src="/golden-feather-pen.png"
          alt="Golden Feather Quill"
          className="w-[72px] h-[72px] object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </>
  );
}
