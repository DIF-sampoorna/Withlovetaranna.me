import React, { useState, useEffect } from "react";

// The precise mathematical coordinates for your custom 12-cell layout
const MOSAIC_GRID_CELLS = [
  // Row 1
  { left: 0, top: 0, width: 71, height: 18 },
  { left: 71, top: 0, width: 29, height: 18 },
  // Row 2
  { left: 0, top: 18, width: 71, height: 27 },
  { left: 71, top: 18, width: 29, height: 27 },
  // Row 3
  { left: 0, top: 45, width: 49, height: 15 },
  { left: 0, top: 60, width: 28, height: 15 },
  { left: 28, top: 60, width: 21, height: 15 },
  { left: 49, top: 45, width: 22, height: 30 },
  { left: 71, top: 45, width: 29, height: 30 },
  // Row 4
  { left: 0, top: 75, width: 28, height: 13 },
  { left: 28, top: 75, width: 43, height: 13 },
  { left: 71, top: 75, width: 29, height: 13 }
];

interface ImageSettings {
  scale: number;
  offsetX: number;
  offsetY: number;
}

interface EditorialHeroCollageProps {
  // Pass an image URL to fill the rest of the collage segments
  currentImageUrl?: string;
  // Blend mode for creative styles ("normal" or "multiply")
  blendMode?: "normal" | "multiply";
  // Filter settings
  contrast?: number;
  brightness?: number;
  saturate?: number;
}

const DEFAULT_COLLAGE_SETTINGS: Record<number, ImageSettings> = {
  0: { scale: 120, offsetX: 10, offsetY: -35 }, // NOV00034.JPG.jpeg
  1: { scale: 100, offsetX: 0, offsetY: 0 },
  2: { scale: 100, offsetX: 0, offsetY: 0 },
  3: { scale: 125, offsetX: -20, offsetY: -15 }, // NOVA0019.JPG.jpeg
  4: { scale: 100, offsetX: 0, offsetY: 0 },
  5: { scale: 100, offsetX: 0, offsetY: 0 },
  6: { scale: 120, offsetX: 0, offsetY: 0 }, // hairbelow.jpeg
  7: { scale: 100, offsetX: 0, offsetY: 0 },
  8: { scale: 105, offsetX: 0, offsetY: -10 }, // TD-382.jpg.jpeg
  9: { scale: 100, offsetX: 0, offsetY: 0 },
  10: { scale: 100, offsetX: 0, offsetY: 0 },
  11: { scale: 100, offsetX: 0, offsetY: 0 },
};

export default function EditorialHeroCollage({
  currentImageUrl = "/taranna.png",
  blendMode = "normal",
  contrast = 1.0,
  brightness = 1.0,
  saturate = 1.0
}: EditorialHeroCollageProps) {
  const [imageAspect, setImageAspect] = useState<number>(1.0);
  const collageRef = React.useRef<HTMLDivElement>(null);

  // Permanently locked and non-interactive
  const settings = DEFAULT_COLLAGE_SETTINGS;

  // Sync state signals to anything listening, confirming that Dev Mode is disabled and locked
  useEffect(() => {
    const handleRequestState = () => {
      window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: false }));
      window.dispatchEvent(new CustomEvent("dev-lock-changed", { detail: true }));
    };

    window.addEventListener("request-dev-state", handleRequestState);

    // Initial signals
    window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: false }));
    window.dispatchEvent(new CustomEvent("dev-lock-changed", { detail: true }));

    return () => {
      window.removeEventListener("request-dev-state", handleRequestState);
    };
  }, []);

  return (
    <section className="relative w-full max-w-2xl mx-auto p-4 pb-0 flex flex-col items-center justify-center">
      <div 
        ref={collageRef}
        className="w-full flex items-center justify-center bg-transparent overflow-hidden select-none relative"
      >
        {/* Dynamic Aspect Ratio Wrapper for Auto Scaling (cropped to 88% height) */}
        <div 
          className="relative w-full max-w-full select-none bg-transparent flex items-center justify-center overflow-hidden"
          style={{ aspectRatio: imageAspect ? (imageAspect / 0.88) : 0.97 }}
        >
          {/* Silhouette Masked Container */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{
              WebkitMaskImage: `url("/taranna.png")`,
              maskImage: `url("/taranna.png")`,
              WebkitMaskSize: "100% 113.636%",
              maskSize: "100% 113.636%",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "top left",
              maskPosition: "top left"
            }}
          >
            {/* Aspect Ratio Tracker (Measures silhouette and automatically computes responsive layout) */}
            <img 
              src="/taranna.png" 
              onLoad={(e) => {
                const img = e.currentTarget;
                if (img.naturalWidth && img.naturalHeight) {
                  setImageAspect(img.naturalWidth / img.naturalHeight);
                }
              }} 
              onError={() => {
                setImageAspect(0.85);
              }}
              className="absolute opacity-0 pointer-events-none w-0 h-0" 
              aria-hidden="true" 
              alt=""
            />
            
            {/* 12 Segment Grid Cells */}
            {MOSAIC_GRID_CELLS.map((cell, idx) => {
              const scaledTop = cell.top / 0.88;
              const scaledHeight = cell.height / 0.88;
              const cellSettings = settings[idx] || { scale: 100, offsetX: 0, offsetY: 0 };

              // Determine image src for descriptive labeling
              const imgUrl = idx === 8 
                ? "/TD-382.jpg.jpeg" 
                : idx === 3 
                  ? "/NOVA0019.JPG.jpeg" 
                  : idx === 0 
                    ? "/NOV00034.JPG.jpeg" 
                    : idx === 6 
                      ? "/hairbelow.jpeg" 
                      : idx === 10
                        ? "/kitt.jpeg"
                        : idx === 11
                          ? "/TD-297.jpg.jpeg"
                          : idx === 7
                            ? "/ear.jpeg"
                            : currentImageUrl;

              return (
                <div
                  key={idx}
                  id={`collage-cell-${idx}`}
                  className="absolute border-[0.15cqw] border-white bg-white overflow-hidden"
                  style={{
                    left: `${cell.left}%`,
                    top: `${scaledTop}%`,
                    width: `${cell.width}%`,
                    height: `${scaledHeight}%`,
                  }}
                >
                  <img 
                    src={imgUrl}
                    draggable="false"
                    className="absolute pointer-events-none select-none max-w-none origin-center" 
                    style={(idx === 8 || idx === 3 || idx === 0 || idx === 6 || idx === 10 || idx === 11 || idx === 7) ? {
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      width: "auto",
                      height: "auto",
                      minWidth: "100%",
                      minHeight: "100%",
                      mixBlendMode: blendMode === "multiply" ? "multiply" : "normal",
                      filter: `contrast(${contrast}) brightness(${brightness}) saturate(${saturate})`,
                      transform: `translate(-50%, -50%) translate(${cellSettings.offsetX}px, ${cellSettings.offsetY}px) scale(${cellSettings.scale / 100})`,
                    } : { 
                      left: `-${(cell.left * 100) / cell.width}%`,
                      top: `-${(cell.top * 100) / cell.height}%`,
                      width: `${(100 * 100) / cell.width}%`,
                      height: `${(100 * 100) / cell.height}%`,
                      mixBlendMode: blendMode === "multiply" ? "multiply" : "normal",
                      filter: `contrast(${contrast}) brightness(${brightness}) saturate(${saturate})`,
                      objectFit: "fill",
                      transform: `scale(${cellSettings.scale / 100}) translate(${cellSettings.offsetX}px, ${cellSettings.offsetY}px)`,
                    }}
                    referrerPolicy="no-referrer"
                    alt=""
                  />

                  {/* Subtle color blocks */}
                  {idx === 2 && (
                    <div 
                      className="absolute inset-0 pointer-events-none bg-red-600 mix-blend-multiply opacity-100"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  )}
                  {idx === 7 && (
                    <div 
                      className="absolute inset-0 pointer-events-none bg-yellow-500 mix-blend-multiply opacity-100"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
