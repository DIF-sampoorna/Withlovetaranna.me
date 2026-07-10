import * as React from 'react';
import { useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import CMSImage from './CMSImage';
const l = { jsx };

interface EditorialHeroCollageProps {
  currentImageUrl?: string;
  blendMode?: string;
  contrast?: number;
  brightness?: number;
  saturate?: number;
}

function uP({
  currentImageUrl = "/tar-col.png",
  blendMode = "normal",
  contrast = 1,
  brightness = 1,
  saturate = 1,
}: EditorialHeroCollageProps) {
  const [aspectRatio, setAspectRatio] = useState(0.85);

  return l.jsx("section", {
    className: "relative w-full max-w-2xl md:max-w-[605px] mx-auto p-4 pb-0 flex flex-col items-center justify-center",
    children: l.jsx("div", {
      className: "w-full flex items-center justify-center bg-transparent overflow-hidden select-none relative",
      children: l.jsx("div", {
        className: "relative w-full max-w-full select-none bg-transparent flex items-center justify-center overflow-hidden",
        style: { aspectRatio: aspectRatio || 0.85 },
        children: l.jsx(CMSImage, {
          originalSrc: currentImageUrl,
          onLoad: (E) => {
            const D = E.currentTarget;
            if (D.naturalWidth && D.naturalHeight) {
              setAspectRatio(D.naturalWidth / D.naturalHeight);
            }
          },
          className: "absolute inset-0 w-full h-full object-contain select-none transition-all duration-300",
          style: {
            mixBlendMode: blendMode === "multiply" ? "multiply" : "normal",
            filter: `contrast(${contrast}) brightness(${brightness}) saturate(${saturate})`,
          },
          alt: "Taranna Collage",
          referrerPolicy: "no-referrer",
        }),
      }),
    }),
  });
}

export default uP;
