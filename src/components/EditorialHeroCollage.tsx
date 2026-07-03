import React, { useState, useEffect } from "react";
import { Settings, Move, RotateCcw, Copy, Check, Sliders, Code, Lock, Unlock } from "lucide-react";

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
  6: { scale: 120, offsetX: 0, offsetY: 0 }, // Speaker.JPG.jpeg
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

  // DEV MODE POSITIONS STATE
  const [devMode, setDevMode] = useState<boolean>(false);
  const [showOutOfBounds, setShowOutOfBounds] = useState<boolean>(true);
  const [selectedCell, setSelectedCell] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [cellAspects, setCellAspects] = useState<Record<number, number>>({});
  const collageRef = React.useRef<HTMLDivElement>(null);

  // Lock Layout state to lock image changes
  const [isLocked, setIsLocked] = useState<boolean>(() => {
    return localStorage.getItem("collage_layout_locked") === "true";
  });

  // Setup synchronization event listeners
  useEffect(() => {
    const handleToggleDevMode = () => {
      setDevMode((prev) => !prev);
    };

    const handleToggleDevLock = (e: any) => {
      if (e.detail !== undefined) {
        setIsLocked(e.detail);
      } else {
        setIsLocked((prev) => !prev);
      }
    };

    const handleRequestState = () => {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: devMode }));
        window.dispatchEvent(new CustomEvent("dev-lock-changed", { detail: isLocked }));
      }, 0);
    };

    window.addEventListener("toggle-dev-mode", handleToggleDevMode);
    window.addEventListener("toggle-dev-lock", handleToggleDevLock);
    window.addEventListener("request-dev-state", handleRequestState);

    // Also dispatch immediately on mount/update to make sure Header is up-to-date, deferred to next tick
    const timeoutId = setTimeout(() => {
      window.dispatchEvent(new CustomEvent("dev-mode-changed", { detail: devMode }));
      window.dispatchEvent(new CustomEvent("dev-lock-changed", { detail: isLocked }));
    }, 0);

    return () => {
      window.removeEventListener("toggle-dev-mode", handleToggleDevMode);
      window.removeEventListener("toggle-dev-lock", handleToggleDevLock);
      window.removeEventListener("request-dev-state", handleRequestState);
      clearTimeout(timeoutId);
    };
  }, [devMode, isLocked]);

  // Initialize with perfect default alignment, or load from localStorage
  const [settings, setSettings] = useState<Record<number, ImageSettings>>(() => {
    const saved = localStorage.getItem("collage_image_settings");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved collage settings", e);
      }
    }
    return DEFAULT_COLLAGE_SETTINGS;
  });

  // Persist settings whenever they change
  useEffect(() => {
    localStorage.setItem("collage_image_settings", JSON.stringify(settings));
  }, [settings]);

  // Persist lock status whenever it changes
  useEffect(() => {
    localStorage.setItem("collage_layout_locked", String(isLocked));
  }, [isLocked]);

  // DRAG STATE TRACKER
  const [dragState, setDragState] = useState<{
    isDragging: boolean;
    cellIdx: number;
    startX: number;
    startY: number;
    startOffsetX: number;
    startOffsetY: number;
  } | null>(null);

  const handleMouseDown = (e: React.MouseEvent, idx: number) => {
    if (!devMode || isLocked) return;
    e.preventDefault();
    setSelectedCell(idx);
    
    const cellSettings = settings[idx] || { scale: 100, offsetX: 0, offsetY: 0 };
    setDragState({
      isDragging: true,
      cellIdx: idx,
      startX: e.clientX,
      startY: e.clientY,
      startOffsetX: cellSettings.offsetX,
      startOffsetY: cellSettings.offsetY,
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isLocked || !dragState || !dragState.isDragging) return;
    e.preventDefault();
    const deltaX = e.clientX - dragState.startX;
    const deltaY = e.clientY - dragState.startY;

    setSettings((prev) => ({
      ...prev,
      [dragState.cellIdx]: {
        ...prev[dragState.cellIdx],
        offsetX: Math.round(dragState.startOffsetX + deltaX),
        offsetY: Math.round(dragState.startOffsetY + deltaY),
      },
    }));
  };

  const handleMouseUp = () => {
    if (dragState) {
      setDragState(null);
    }
  };

  // Mobile Touch Support for dragging
  const handleTouchStart = (e: React.TouchEvent, idx: number) => {
    if (!devMode || isLocked) return;
    const touch = e.touches[0];
    setSelectedCell(idx);

    const cellSettings = settings[idx] || { scale: 100, offsetX: 0, offsetY: 0 };
    setDragState({
      isDragging: true,
      cellIdx: idx,
      startX: touch.clientX,
      startY: touch.clientY,
      startOffsetX: cellSettings.offsetX,
      startOffsetY: cellSettings.offsetY,
    });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isLocked || !dragState || !dragState.isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragState.startX;
    const deltaY = touch.clientY - dragState.startY;

    setSettings((prev) => ({
      ...prev,
      [dragState.cellIdx]: {
        ...prev[dragState.cellIdx],
        offsetX: Math.round(dragState.startOffsetX + deltaX),
        offsetY: Math.round(dragState.startOffsetY + deltaY),
      },
    }));
  };

  // Live Scroll Wheel to Zoom support (non-passive via container ref to prevent page scrolling)
  useEffect(() => {
    const el = collageRef.current;
    if (!el || !devMode || isLocked) return;

    const onWheelGlobal = (e: WheelEvent) => {
      const target = e.target as HTMLElement;
      const cellElement = target.closest("[id^='collage-cell-']");
      if (!cellElement) return;

      const cellIdxAttr = cellElement.id.replace("collage-cell-", "");
      const idx = parseInt(cellIdxAttr, 10);
      if (isNaN(idx)) return;

      e.preventDefault();
      setSelectedCell(idx);

      setSettings((prev) => {
        const cellSettings = prev[idx] || { scale: 100, offsetX: 0, offsetY: 0 };
        // Scroll up (deltaY < 0) -> Zoom In. Scroll down (deltaY > 0) -> Zoom Out.
        const zoomFactor = e.deltaY < 0 ? 5 : -5;
        const newScale = Math.min(1000, Math.max(10, cellSettings.scale + zoomFactor));
        return {
          ...prev,
          [idx]: {
            ...prev[idx],
            scale: newScale,
          },
        };
      });
    };

    el.addEventListener("wheel", onWheelGlobal, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheelGlobal);
    };
  }, [devMode, isLocked]);

  // Auto-reset copied state
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopyCode = () => {
    const codeString = `// Saved Image Settings Alignment\nconst SAVED_SETTINGS = ${JSON.stringify(settings, null, 2)};`;
    navigator.clipboard.writeText(codeString).then(() => {
      setCopied(true);
    });
  };

  const handleResetCell = (idx: number) => {
    setSettings((prev) => ({
      ...prev,
      [idx]: DEFAULT_COLLAGE_SETTINGS[idx] || { scale: 100, offsetX: 0, offsetY: 0 }
    }));
  };

  const handleResetAll = () => {
    setSettings(DEFAULT_COLLAGE_SETTINGS);
  };

  return (
    <section className="relative w-full max-w-2xl mx-auto p-4 pb-0 flex flex-col items-center justify-center">

      <div 
        ref={collageRef}
        className="w-full flex items-center justify-center bg-transparent overflow-hidden select-none relative"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Dynamic Aspect Ratio Wrapper for Auto Scaling (cropped to 88% height) */}
        <div 
          className={`relative w-full max-w-full select-none bg-transparent flex items-center justify-center ${
            devMode && showOutOfBounds ? "overflow-visible" : "overflow-hidden"
          }`}
          style={{ aspectRatio: imageAspect ? (imageAspect / 0.88) : 0.97 }}
        >
          {/* Silhouette Masked Container */}
          <div 
            className={`absolute inset-0 w-full h-full ${
              devMode && showOutOfBounds ? "overflow-visible" : "overflow-hidden"
            }`}
            style={{
              WebkitMaskImage: devMode && showOutOfBounds ? "none" : `url("/taranna.png")`,
              maskImage: devMode && showOutOfBounds ? "none" : `url("/taranna.png")`,
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
              const isSelected = selectedCell === idx;
              const shouldShowFullImage = devMode && showOutOfBounds && isSelected;

              // Determine image src for descriptive labeling
              const imgUrl = idx === 8 
                ? "/TD-382.jpg.jpeg" 
                : idx === 3 
                  ? "/NOVA0019.JPG.jpeg" 
                  : idx === 0 
                    ? "/NOV00034.JPG.jpeg" 
                    : idx === 6 
                      ? "/Speaker.JPG.jpeg" 
                      : idx === 10
                        ? "/TD-263.jpg.jpeg"
                        : idx === 11
                          ? "/TD-297.jpg.jpeg"
                          : currentImageUrl;

              return (
                <div
                  key={idx}
                  id={`collage-cell-${idx}`}
                  onMouseDown={(e) => handleMouseDown(e, idx)}
                  onTouchStart={(e) => handleTouchStart(e, idx)}
                  className={`absolute border-[0.15cqw] border-white bg-white transition-shadow duration-300 ${
                    shouldShowFullImage ? "overflow-visible z-50 shadow-2xl" : "overflow-hidden"
                  } ${
                    devMode ? "cursor-move group" : ""
                  } ${
                    devMode && isSelected 
                      ? "ring-2 ring-amber-500 ring-offset-1 z-20 shadow-md" 
                      : devMode 
                        ? "hover:ring-1 hover:ring-amber-400 z-10" 
                        : ""
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
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      if (img.naturalWidth && img.naturalHeight) {
                        setCellAspects(prev => ({
                          ...prev,
                          [idx]: img.naturalWidth / img.naturalHeight
                        }));
                      }
                    }}
                    className="absolute pointer-events-none select-none max-w-none transition-all duration-75 origin-center" 
                    style={(idx === 8 || idx === 3 || idx === 0 || idx === 6 || idx === 10 || idx === 11) ? {
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
                      opacity: shouldShowFullImage ? 0.65 : 1,
                      outline: shouldShowFullImage ? "2px dashed #f59e0b" : "none",
                      outlineOffset: "-2px",
                      backgroundColor: shouldShowFullImage ? "rgba(245, 158, 11, 0.15)" : "transparent",
                    } : { 
                      left: `-${(cell.left * 100) / cell.width}%`,
                      top: `-${(cell.top * 100) / cell.height}%`,
                      width: `${(100 * 100) / cell.width}%`,
                      height: `${(100 * 100) / cell.height}%`,
                      mixBlendMode: blendMode === "multiply" ? "multiply" : "normal",
                      filter: `contrast(${contrast}) brightness(${brightness}) saturate(${saturate})`,
                      objectFit: "fill",
                      transform: `scale(${cellSettings.scale / 100}) translate(${cellSettings.offsetX}px, ${cellSettings.offsetY}px)`,
                      opacity: shouldShowFullImage ? 0.65 : 1,
                      outline: shouldShowFullImage ? "2px dashed #f59e0b" : "none",
                      outlineOffset: "-2px",
                      backgroundColor: shouldShowFullImage ? "rgba(245, 158, 11, 0.15)" : "transparent",
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

                  {/* Dev Mode Overlay Details */}
                  {devMode && (
                    <div className="absolute inset-0 bg-black/25 flex flex-col justify-between p-1 select-none pointer-events-none">
                      <span className="text-[9px] font-mono font-bold bg-black/70 text-white px-1 py-0.2 rounded w-fit">
                        #{idx}
                      </span>
                      {isSelected && (
                        <span className="text-[8px] font-mono font-medium text-amber-300 bg-amber-950/80 px-1 py-0.2 rounded self-end">
                          Active
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* DEV MODE CONTROL CONTROLLER PANEL */}
      {devMode && (
        <div id="dev-controls-panel" className="w-full mt-6 bg-white border border-neutral-200 rounded-xl p-5 shadow-lg max-w-xl transition-all duration-300">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-500" />
              <h4 className="text-sm font-sans font-semibold text-neutral-900 tracking-tight">
                Alignment Adjuster Panel
              </h4>
            </div>
            <div className="flex gap-1.5 items-center">
              <button
                id="btn-dev-lock-panel-toggle"
                onClick={() => setIsLocked(!isLocked)}
                className={`flex items-center gap-1 px-2 py-1 border text-xxs font-mono rounded transition-colors cursor-pointer ${
                  isLocked 
                    ? "bg-red-100 border-red-300 text-red-800 hover:bg-red-200 font-bold" 
                    : "bg-emerald-100 border-emerald-300 text-emerald-800 hover:bg-emerald-200"
                }`}
                title={isLocked ? "Unlock positions" : "Lock positions to prevent changes"}
              >
                {isLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
                {isLocked ? "LOCKED" : "UNLOCKED"}
              </button>
              <button
                id="btn-dev-toggle-out-of-bounds"
                onClick={() => setShowOutOfBounds(!showOutOfBounds)}
                className={`flex items-center gap-1.5 px-2 py-1 border text-xxs font-mono rounded transition-colors ${
                  showOutOfBounds 
                    ? "bg-amber-100 border-amber-300 text-amber-800 hover:bg-amber-200" 
                    : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                }`}
                title="Toggle showing uncropped overflow image"
              >
                <Code className="w-3 h-3" />
                {showOutOfBounds ? "Full Canvas: ON" : "Full Canvas: OFF"}
              </button>
              <button
                id="btn-dev-reset-all"
                onClick={handleResetAll}
                className="flex items-center gap-1.5 px-2 py-1 bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-600 text-xxs font-mono rounded"
              >
                <RotateCcw className="w-3 h-3" />
                Reset All
              </button>
            </div>
          </div>

          <div className="relative">
            {isLocked && (
              <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4 rounded-xl z-20">
                <Lock className="w-8 h-8 text-red-500 mb-2 animate-bounce" />
                <h5 className="font-bold text-xs font-mono uppercase text-neutral-800 tracking-wider">Alignment Controls Locked</h5>
                <p className="text-[10px] text-neutral-500 max-w-xs mt-1 font-sans leading-relaxed">
                  Accidental drags, wheel scrolls, and zoom actions are blocked. Toggle lock state to modify cell positions.
                </p>
                <button
                  onClick={() => setIsLocked(false)}
                  className="mt-3 px-3 py-1 bg-neutral-900 hover:bg-neutral-850 text-white rounded font-mono text-[9px] uppercase tracking-wider shadow-xs transition-all cursor-pointer"
                >
                  Unlock Controls
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Column 1: Selector & Presets */}
            <div className="flex flex-col gap-3">
              <label className="text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                Select Active Cell
              </label>
              <div className="grid grid-cols-6 gap-1">
                {[0, 3, 6, 8, 10, 11].map((num) => {
                  const label = num === 0 
                    ? "Cell 0 (NOV00034)" 
                    : num === 3 
                      ? "Cell 3 (NOVA0019)" 
                      : num === 6 
                        ? "Cell 6 (TD-086)" 
                        : num === 8
                          ? "Cell 8 (TD-382)"
                          : num === 10
                            ? "Cell 10 (TD-263)"
                            : "Cell 11 (TD-297)";
                  return (
                    <button
                      key={num}
                      onClick={() => setSelectedCell(num)}
                      className={`px-1 py-1.5 rounded text-[9px] font-mono font-medium border text-left flex flex-col justify-between transition-all duration-200 ${
                        selectedCell === num
                          ? "bg-neutral-900 text-white border-neutral-900 shadow-sm"
                          : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100"
                      }`}
                    >
                      <span className="font-bold text-[9px]">Cell {num}</span>
                      <span className="text-[8px] opacity-75 truncate max-w-full">
                        {num === 0 ? "NOV00034" : num === 3 ? "NOVA0019" : num === 6 ? "TD-086" : num === 8 ? "TD-382" : num === 10 ? "TD-263" : "TD-297"}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Show All option selector */}
              <div className="mt-1 flex items-center gap-2 justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-neutral-500">Other cells:</span>
                  <select
                    value={selectedCell}
                    onChange={(e) => setSelectedCell(Number(e.target.value))}
                    className="bg-neutral-50 border border-neutral-200 rounded text-xxs font-mono p-1 text-neutral-700"
                  >
                    {[1, 2, 4, 5, 7, 9].map(n => (
                      <option key={n} value={n}>Cell {n} (Slices)</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reveal Full Image Toggle Switch */}
              <div className="flex items-center justify-between p-2.5 bg-amber-50/30 border border-amber-100 rounded-lg">
                <div className="flex flex-col pr-1">
                  <span className="text-[10px] font-mono font-bold text-neutral-700 uppercase tracking-wider">Uncropped View</span>
                  <span className="text-[9px] text-neutral-400 font-sans leading-tight">Reveal full outer margins of image</span>
                </div>
                <button
                  id="toggle-reveal-bounds"
                  onClick={() => setShowOutOfBounds(!showOutOfBounds)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors duration-200 focus:outline-hidden shrink-0 ${
                    showOutOfBounds ? "bg-amber-500" : "bg-neutral-300"
                  }`}
                >
                  <div className={`bg-white w-4 h-4 rounded-full shadow-xs transform duration-200 ${
                    showOutOfBounds ? "translate-x-4" : "translate-x-0"
                  }`} />
                </button>
              </div>

              <div className="mt-2 p-3 bg-neutral-50 border border-neutral-150 rounded-lg">
                <p className="text-[11px] text-neutral-600 leading-relaxed font-sans flex items-start gap-1.5">
                  <Move className="w-3.5 h-3.5 text-neutral-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Drag directly on active image:</strong> Drag and pan images live on the canvas! A dashed boundary outline shows the full image.
                  </span>
                </p>
              </div>
            </div>

            {/* Column 2: Sliders */}
            <div className="flex flex-col gap-4">
              {/* Scale Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xxs font-mono">
                  <span className="text-neutral-500 uppercase font-semibold">Scale (Zoom)</span>
                  <span className="text-neutral-900 font-bold">{settings[selectedCell]?.scale ?? 100}%</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSettings(prev => {
                        const current = prev[selectedCell]?.scale ?? 100;
                        return {
                          ...prev,
                          [selectedCell]: { ...prev[selectedCell], scale: Math.max(10, current - 5) }
                        };
                      });
                    }}
                    className="p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none"
                    title="Zoom Out"
                  >
                    -
                  </button>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={settings[selectedCell]?.scale ?? 100}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setSettings(prev => ({
                        ...prev,
                        [selectedCell]: { ...prev[selectedCell], scale: val }
                      }));
                    }}
                    className="flex-1 accent-amber-500 cursor-pointer h-1.5 bg-neutral-200 rounded-lg appearance-none"
                  />
                  <button
                    onClick={() => {
                      setSettings(prev => {
                        const current = prev[selectedCell]?.scale ?? 100;
                        return {
                          ...prev,
                          [selectedCell]: { ...prev[selectedCell], scale: Math.min(1000, current + 5) }
                        };
                      });
                    }}
                    className="p-1 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded text-xs font-mono font-bold w-6 h-6 flex items-center justify-center text-neutral-700 select-none"
                    title="Zoom In"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Offset X Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xxs font-mono">
                  <span className="text-neutral-500 uppercase font-semibold">Offset X (Horizontal)</span>
                  <span className="text-neutral-900 font-bold">{settings[selectedCell]?.offsetX ?? 0}px</span>
                </div>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  value={settings[selectedCell]?.offsetX ?? 0}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSettings(prev => ({
                      ...prev,
                      [selectedCell]: { ...prev[selectedCell], offsetX: val }
                    }));
                  }}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              {/* Offset Y Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xxs font-mono">
                  <span className="text-neutral-500 uppercase font-semibold">Offset Y (Vertical)</span>
                  <span className="text-neutral-900 font-bold">{settings[selectedCell]?.offsetY ?? 0}px</span>
                </div>
                <input
                  type="range"
                  min="-250"
                  max="250"
                  value={settings[selectedCell]?.offsetY ?? 0}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setSettings(prev => ({
                      ...prev,
                      [selectedCell]: { ...prev[selectedCell], offsetY: val }
                    }));
                  }}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleResetCell(selectedCell)}
                  className="flex-1 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xxs font-mono rounded border border-neutral-200 transition-colors"
                >
                  Reset Current Cell
                </button>
                <button
                  onClick={handleCopyCode}
                  className={`flex-1 py-1.5 text-xxs font-mono rounded border flex items-center justify-center gap-1.5 transition-all duration-300 ${
                    copied 
                      ? "bg-emerald-500 text-white border-emerald-600" 
                      : "bg-neutral-900 text-white border-neutral-950 hover:bg-neutral-800"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Alignment Code
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
            <span>Development Tool active</span>
            <span className="text-neutral-500 font-semibold bg-neutral-50 px-2 py-0.5 rounded border border-neutral-100">
              Selected: Cell {selectedCell}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}