import React, { useEffect, useRef } from "react";

interface Feather {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  spin: number;
  size: number;
  opacity: number;
  flutter: number;
  flutterSpeed: number;
  flutterRange: number;
  type: number;
  isSpawned: boolean;
  life: number; // 1.0 down to 0 for spawned feathers, 1.0 persistent for ambient ones
  decay: number;
}

export default function InteractiveWhiteFeathers() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const feathersRef = useRef<Feather[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, lastX: -1000, lastY: -1000, vx: 0, vy: 0 });

  useEffect(() => {
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

    // Initialize 15 persistent ambient feathers
    const initialFeathers: Feather[] = [];
    const numAmbient = 15;
    for (let i = 0; i < numAmbient; i++) {
      initialFeathers.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() * 0.4 - 0.2),
        vy: 0.5 + Math.random() * 0.8, // gentle downward speed
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() * 0.01 - 0.005),
        size: 18 + Math.random() * 22, // size between 18 and 40
        opacity: 0.06 + Math.random() * 0.12, // very subtle, elegant semi-transparent white
        flutter: Math.random() * Math.PI * 2,
        flutterSpeed: 0.01 + Math.random() * 0.02,
        flutterRange: 0.2 + Math.random() * 0.4,
        type: Math.floor(Math.random() * 3),
        isSpawned: false,
        life: 1.0,
        decay: 0,
      });
    }
    feathersRef.current = initialFeathers;

    // Track mouse position and velocity
    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      const x = e.clientX;
      const y = e.clientY;
      if (mouse.lastX !== -1000) {
        mouse.vx = x - mouse.lastX;
        mouse.vy = y - mouse.lastY;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.lastX = x;
      mouse.lastY = y;
    };

    // Spawn 2-3 feathers on any click!
    const handleCanvasClick = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const count = Math.floor(Math.random() * 2) + 2; // 2 to 3 feathers

      for (let i = 0; i < count; i++) {
        feathersRef.current.push({
          x: x + (Math.random() * 30 - 15),
          y: y + (Math.random() * 30 - 15),
          vx: (Math.random() * 2.0 - 1.0), // burst slightly outwards
          vy: -1.0 - Math.random() * 1.5, // fly slightly upwards then flutter down
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() * 0.06 - 0.03),
          size: 16 + Math.random() * 18,
          opacity: 0.2 + Math.random() * 0.2, // brighter spawned feathers
          flutter: Math.random() * Math.PI * 2,
          flutterSpeed: 0.03 + Math.random() * 0.04,
          flutterRange: 0.4 + Math.random() * 0.6,
          type: Math.floor(Math.random() * 3),
          isSpawned: true,
          life: 1.0,
          decay: 0.005 + Math.random() * 0.008, // fade out over 2-3 seconds
        });
      }
    };

    // Mobile touch interaction
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const mouse = mouseRef.current;
      const x = touch.clientX;
      const y = touch.clientY;
      mouse.x = x;
      mouse.y = y;
      mouse.lastX = x;
      mouse.lastY = y;
      mouse.vx = 0;
      mouse.vy = 0;

      // Spawn some feathers on touch start too
      const count = Math.floor(Math.random() * 2) + 2;
      for (let i = 0; i < count; i++) {
        feathersRef.current.push({
          x: x + (Math.random() * 30 - 15),
          y: y + (Math.random() * 30 - 15),
          vx: (Math.random() * 2.0 - 1.0),
          vy: -1.0 - Math.random() * 1.5,
          angle: Math.random() * Math.PI * 2,
          spin: (Math.random() * 0.06 - 0.03),
          size: 16 + Math.random() * 18,
          opacity: 0.2 + Math.random() * 0.2,
          flutter: Math.random() * Math.PI * 2,
          flutterSpeed: 0.03 + Math.random() * 0.04,
          flutterRange: 0.4 + Math.random() * 0.6,
          type: Math.floor(Math.random() * 3),
          isSpawned: true,
          life: 1.0,
          decay: 0.005 + Math.random() * 0.008,
        });
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      const mouse = mouseRef.current;
      const x = touch.clientX;
      const y = touch.clientY;
      if (mouse.lastX !== -1000) {
        mouse.vx = x - mouse.lastX;
        mouse.vy = y - mouse.lastY;
      }
      mouse.x = x;
      mouse.y = y;
      mouse.lastX = x;
      mouse.lastY = y;
    };

    const handleTouchEnd = () => {
      const mouse = mouseRef.current;
      mouse.lastX = -1000;
      mouse.lastY = -1000;
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleCanvasClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    let animationId: number;

    const drawFeather = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      angle: number,
      opacity: number,
      type: number
    ) => {
      c.save();
      c.translate(x, y);
      c.rotate(angle);
      
      // Pure white color with active opacity
      c.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      c.strokeStyle = `rgba(255, 255, 255, ${opacity * 1.5})`;

      // Drawing three styles of feathers
      if (type === 0) {
        // Style 0: Sleek traditional feather
        c.beginPath();
        // Central shaft (quill)
        c.moveTo(0, -size / 2);
        c.quadraticCurveTo(size * 0.05, 0, 0, size / 2);
        c.lineWidth = 1.2;
        c.stroke();

        // Right side vane
        c.beginPath();
        c.moveTo(0, -size / 2);
        c.bezierCurveTo(size * 0.35, -size * 0.25, size * 0.4, size * 0.2, 0, size / 2);
        c.fill();

        // Left side vane
        c.beginPath();
        c.moveTo(0, -size / 2);
        c.bezierCurveTo(-size * 0.35, -size * 0.25, -size * 0.4, size * 0.2, 0, size / 2);
        c.fill();
        
        // Add delicate details / barb lines
        c.lineWidth = 0.5;
        c.beginPath();
        for (let j = -size * 0.3; j < size * 0.3; j += size * 0.15) {
          c.moveTo(0, j);
          c.lineTo(size * 0.2, j + size * 0.1);
          c.moveTo(0, j);
          c.lineTo(-size * 0.2, j + size * 0.1);
        }
        c.stroke();
      } else if (type === 1) {
        // Style 1: Soft puffy down feather (broad, very light)
        c.beginPath();
        c.moveTo(0, -size / 2);
        c.quadraticCurveTo(size * 0.08, 0, 0, size / 2);
        c.lineWidth = 1.0;
        c.stroke();

        // Fluffy outline
        c.beginPath();
        c.moveTo(0, -size / 2);
        c.bezierCurveTo(size * 0.45, -size * 0.1, size * 0.45, size * 0.3, 0, size / 2);
        c.bezierCurveTo(-size * 0.45, size * 0.3, -size * 0.45, -size * 0.1, 0, -size / 2);
        c.fill();

        // Extra fluff lines at base
        c.beginPath();
        c.lineWidth = 0.7;
        c.moveTo(0, size * 0.1);
        c.quadraticCurveTo(size * 0.28, size * 0.2, size * 0.35, size * 0.35);
        c.moveTo(0, size * 0.1);
        c.quadraticCurveTo(-size * 0.28, size * 0.2, -size * 0.35, size * 0.35);
        c.stroke();
      } else {
        // Style 2: Elegant curved plume
        c.beginPath();
        c.moveTo(0, -size / 2);
        c.quadraticCurveTo(size * 0.15, size * 0.05, 0, size / 2);
        c.lineWidth = 1.4;
        c.stroke();

        c.beginPath();
        c.moveTo(0, -size / 2);
        c.bezierCurveTo(size * 0.3, -size * 0.3, size * 0.45, size * 0.1, 0, size / 2);
        c.bezierCurveTo(-size * 0.2, size * 0.2, -size * 0.25, -size * 0.2, 0, -size / 2);
        c.fill();
      }

      c.restore();
    };

    const updatePhysics = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      // Decay mouse velocities slightly
      mouse.vx *= 0.95;
      mouse.vy *= 0.95;

      feathersRef.current.forEach((feather, idx) => {
        // 1. Gentle natural horizontal drift using sine-wave flutter
        feather.flutter += feather.flutterSpeed;
        const hoverSway = Math.sin(feather.flutter) * feather.flutterRange;
        
        // Apply wind and flutter forces
        feather.x += feather.vx + hoverSway * 0.3;
        feather.y += feather.vy;
        feather.angle += feather.spin;

        // 2. Click or move gravity adjustments: persistent vs spawned
        if (feather.isSpawned) {
          // Spawned feathers experience air resistance and slowly descend
          feather.vy += 0.05; // gravity pull
          feather.vy *= 0.96; // air resistance
          feather.vx *= 0.96;
          feather.life -= feather.decay;
        } else {
          // Persistent feathers slowly fall at safe speed
          if (feather.vy < 0.4) feather.vy += 0.02;
          if (feather.vy > 1.2) feather.vy -= 0.02;
          // Apply minimal horizontal ambient breeze
          feather.vx = feather.vx * 0.98 + (Math.random() * 0.02 - 0.01);
        }

        // 3. MOUSE INTERACTION (Flee / Gust Effect)
        // If mouse is within range, push the feather away!
        const dx = feather.x - mouse.x;
        const dy = feather.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 160;

        if (distance < interactionRadius) {
          // Force strength increases closer to center
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          
          // Push feather in direction away from mouse
          const pushX = Math.cos(angle) * force * 2.5;
          const pushY = Math.sin(angle) * force * 2.0;

          feather.vx += pushX;
          feather.vy += pushY;
          
          // Spin faster when disturbed!
          feather.spin += (Math.random() * 0.04 - 0.02) * force;
          // Limit max velocity
          feather.vx = Math.min(Math.max(feather.vx, -5), 5);
          feather.vy = Math.min(Math.max(feather.vy, -4), 4);
        } else {
          // Return to normal slow spin
          feather.spin *= 0.98;
        }

        // 4. Wrap or delete
        if (!feather.isSpawned) {
          // Ambient persistent feathers wrap around
          if (feather.y > canvas.height + feather.size) {
            feather.y = -feather.size;
            feather.x = Math.random() * canvas.width;
            feather.vx = (Math.random() * 0.4 - 0.2);
            feather.vy = 0.5 + Math.random() * 0.8;
          }
          if (feather.x < -feather.size) {
            feather.x = canvas.width + feather.size;
          } else if (feather.x > canvas.width + feather.size) {
            feather.x = -feather.size;
          }
        }

        // 5. Draw
        const currentOpacity = feather.isSpawned 
          ? feather.opacity * feather.life 
          : feather.opacity;

        if (currentOpacity > 0.005) {
          drawFeather(
            ctx,
            feather.x,
            feather.y,
            feather.size,
            feather.angle,
            currentOpacity,
            feather.type
          );
        }
      });

      // Filter out dead spawned feathers
      feathersRef.current = feathersRef.current.filter(
        (f) => !f.isSpawned || f.life > 0.01
      );

      animationId = requestAnimationFrame(updatePhysics);
    };

    animationId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleCanvasClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[1] select-none"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
