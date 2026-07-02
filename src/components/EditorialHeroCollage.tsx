import React, { useState, useEffect } from "react";
import { Sliders, Lock, Unlock, Copy, RotateCcw, Check, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Plus, Minus } from "lucide-react";

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

  // Dev mode & settings state
  const [devMode, setDevMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("collage-dev-mode");
    return saved === "true";
  });

  const [settings, setSettings] = useState<Record<number, ImageSettings>>(() => {
    const saved = localStorage.getItem("collage-settings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse collage settings from localStorage", e);
      }
    }
    return { ...DEFAULT_COLLAGE_SETTINGS };
  });

  const [selectedCell, setSelectedCell] = useState<number | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  // Persist state to localStorage
  useEffect(() => {
    localStorage.setItem("collage-dev-mode", String(devMode));
  }, [devMode]);

  useEffect(() => {
    localStorage.setItem("collage-settings", JSON.stringify(settings));
  }, [settings]);

  // Handle cell adjustment changes
  const updateSetting = (cellIdx: number, field: keyof ImageSettings, value: number) => {
    setSettings(prev => ({
      ...prev,
      [cellIdx]: {
        ...(prev[cellIdx] || { scale: 100, offsetX: 0, offsetY: 0 }),
        [field]: value
      }
    }));
  };

  // Reset to default configuration
  const handleReset = () => {
    if (window.confirm("Are you sure you want to restore the default image alignment settings?")) {
      setSettings({ ...DEFAULT_COLLAGE_SETTINGS });
      setSelectedCell(null);
    }
  };

  // Copy config to clipboard for locking permanently in code
  const handleCopyConfig = () => {
    const formatted = JSON.stringify(settings, null, 2);
    navigator.clipboard.writeText(formatted).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  // Get image name for description
  const getImageNameForCell = (idx: number) => {
    switch (idx) {
      case 0: return "NOV00034.JPG.jpeg";
      case 3: return "NOVA0019.JPG.jpeg";
      case 6: return "hairbelow.jpeg";
      case 7: return "ear.jpeg";
      case 8: return "TD-382.jpg.jpeg";
      case 10: return "kitt.jpeg";
      case 11: return "TD-297.jpg.jpeg";
      case 2: return "Solid Red overlay";
      default: return `Generic/Background (${currentImageUrl.split("/").pop()})`;
    }
  };

  return (
    <section className="relative w-full max-w-2xl mx-auto p-4 pb-0 flex flex-col items-center justify-center">
      {/* Dev Mode Floating Banner & Quick Toggle */}
      <div className="w-full flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${devMode ? "bg-amber-400" : "bg-emerald-400"} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${devMode ? "bg-amber-500" : "bg-emerald-500"}`}></span>
          </span>
          <span className="text-xs font-mono tracking-wider text-neutral-500 uppercase">
            Collage Lock: <strong className={devMode ? "text-amber-600" : "text-emerald-600"}>{devMode ? "UNLOCKED (ADJUSTING)" : "LOCKED"}</strong>
          </span>
        </div>

        <button
          onClick={() => {
            setDevMode(!devMode);
            if (devMode) setSelectedCell(null);
          }}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono tracking-wide border transition-all duration-300 cursor-pointer ${
            devMode 
              ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100" 
              : "bg-neutral-50 text-neutral-600 border-neutral-200 hover:bg-neutral-100 hover:border-neutral-300"
          }`}
        >
          {devMode ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
          {devMode ? "Lock Position Settings" : "Adjust Image Alignments"}
        </button>
      </div>

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

              const isSelected = selectedCell === idx;

              return (
                <div
                  key={idx}
                  id={`collage-cell-${idx}`}
                  onClick={() => devMode && setSelectedCell(idx)}
                  className={`absolute border-[0.15cqw] bg-white overflow-hidden transition-shadow duration-200 ${
                    devMode 
                      ? isSelected 
                        ? "border-amber-500 ring-2 ring-amber-400 ring-offset-1 z-30 cursor-pointer shadow-lg" 
                        : "border-neutral-300 hover:border-amber-400 hover:z-20 cursor-pointer hover:shadow-md"
                      : "border-white"
                  }`}
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

                  {/* Dev Mode Overlay Index Label */}
                  {devMode && (
                    <div className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold leading-none z-10 transition-colors ${
                      isSelected ? "bg-amber-500 text-white" : "bg-black/60 text-white"
                    }`}>
                      #{idx}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dev Mode Adjustment Dashboard */}
      {devMode && (
        <div className="w-full mt-4 p-4 rounded-xl border border-neutral-200 bg-neutral-50 shadow-xs flex flex-col gap-4 animate-fadeIn">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-neutral-600" />
              <h4 className="text-sm font-semibold text-neutral-800">
                {selectedCell !== null 
                  ? `Editing Cell #${selectedCell}: ${getImageNameForCell(selectedCell)}`
                  : "Select a cell in the collage to begin adjusting"}
              </h4>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={handleReset}
                title="Restore default alignments"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                Defaults
              </button>
              <button
                onClick={handleCopyConfig}
                title="Copy entire configurations object"
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white hover:bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 cursor-pointer transition-colors"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>
          </div>

          {selectedCell !== null ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Scale Control */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-neutral-600">
                  <span>Scale:</span>
                  <span className="font-bold">{(settings[selectedCell]?.scale ?? 100)}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateSetting(selectedCell, "scale", Math.max(10, (settings[selectedCell]?.scale ?? 100) - 5))}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <input 
                    type="range"
                    min="10"
                    max="300"
                    value={settings[selectedCell]?.scale ?? 100}
                    onChange={(e) => updateSetting(selectedCell, "scale", parseInt(e.target.value, 10))}
                    className="grow h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <button
                    onClick={() => updateSetting(selectedCell, "scale", Math.min(300, (settings[selectedCell]?.scale ?? 100) + 5))}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Offset X Control */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-neutral-600">
                  <span>Offset X:</span>
                  <span className="font-bold">{(settings[selectedCell]?.offsetX ?? 0)}px</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateSetting(selectedCell, "offsetX", (settings[selectedCell]?.offsetX ?? 0) - 1)}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <ArrowLeft className="w-3 h-3" />
                  </button>
                  <input 
                    type="range"
                    min="-200"
                    max="200"
                    value={settings[selectedCell]?.offsetX ?? 0}
                    onChange={(e) => updateSetting(selectedCell, "offsetX", parseInt(e.target.value, 10))}
                    className="grow h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <button
                    onClick={() => updateSetting(selectedCell, "offsetX", (settings[selectedCell]?.offsetX ?? 0) + 1)}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Offset Y Control */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs font-mono text-neutral-600">
                  <span>Offset Y:</span>
                  <span className="font-bold">{(settings[selectedCell]?.offsetY ?? 0)}px</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateSetting(selectedCell, "offsetY", (settings[selectedCell]?.offsetY ?? 0) - 1)}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <ArrowUp className="w-3 h-3" />
                  </button>
                  <input 
                    type="range"
                    min="-200"
                    max="200"
                    value={settings[selectedCell]?.offsetY ?? 0}
                    onChange={(e) => updateSetting(selectedCell, "offsetY", parseInt(e.target.value, 10))}
                    className="grow h-1.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <button
                    onClick={() => updateSetting(selectedCell, "offsetY", (settings[selectedCell]?.offsetY ?? 0) + 1)}
                    className="p-1 rounded border border-neutral-200 bg-white hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                  >
                    <ArrowDown className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4 text-xs font-medium text-neutral-400 font-sans">
              💡 Tip: Click on any segment of the collage above to select it, then use the sliders to align it.
            </div>
          )}
        </div>
      )}
    </section>
  );
}

