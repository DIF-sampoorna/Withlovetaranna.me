import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
const l = { jsx, jsxs, Fragment };
import { motion as X, AnimatePresence as Vr } from 'motion/react';
import { BookOpen as Rx, ChevronLeft as IS, ChevronRight as co, Compass as Lx, Film as US, Heart as ba, Image as WS, Mic as od, Sparkles as Wo, X as Bx, Maximize2 as KS, Play as Fx, Video as r2, Plus, Edit2, Trash2, Upload, Newspaper } from 'lucide-react';
import * as k from 'react';
import CMSImage from './CMSImage';
import { useCMS, GalleryItem } from './CMSContext';

function Qi({ items: e, direction: t, onItemClick: n, onEditClick: editFn, onDeleteClick: deleteFn }) {
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
                children: l.jsx(UA, { item: b, onClick: () => n(b), onEditClick: editFn, onDeleteClick: deleteFn }),
              },
              `${b.id}-tripled-${S}`,
            ),
          ),
        }),
      }),
    ],
  });
}


function UA({ item: e, onClick: t, onEditClick: editFn, onDeleteClick: deleteFn }) {
  const { isEditMode } = useCMS();

  return l.jsxs(X.div, {
    whileHover: { scale: 1.03, y: -4 },
    transition: { duration: 0.4, ease: "easeOut" },
    onClick: t,
    className:
      "relative w-56 h-36 md:w-80 md:h-52 bg-neutral-900 rounded-2xl overflow-hidden shadow-md border border-neutral-200/5 hover:border-white/10 group cursor-pointer shrink-0",
    children: [
      l.jsx(CMSImage, {
        originalSrc: e.thumbnail,
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
          "absolute inset-x-0 bottom-0 p-4 md:p-5 text-white flex flex-col gap-0.5 justify-end z-10",
        children: [
          l.jsx("span", {
            className:
              "font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-[#E65F1B] font-bold uppercase",
            children:
              e.category === "Welfare" ? "SOCIAL ENTREPRENEUR" : e.category === "Events" ? "EVENTS & NEWS" : e.category,
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
      isEditMode && l.jsxs("div", {
        className: "absolute top-3 right-3 flex gap-2 z-[30]",
        onClick: (evt) => evt.stopPropagation(),
        children: [
          l.jsx("button", {
            onClick: (evt) => {
              evt.stopPropagation();
              editFn(e);
            },
            className: "bg-white/95 hover:bg-white text-neutral-900 p-2 rounded-full shadow-lg border border-neutral-200 cursor-pointer hover:scale-110 active:scale-95 transition-all",
            title: "Edit Item",
            children: l.jsx(Edit2, { className: "w-3 h-3" })
          }),
          l.jsx("button", {
            onClick: (evt) => {
              evt.stopPropagation();
              deleteFn(e.id);
            },
            className: "bg-red-500 hover:bg-red-650 text-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition-all",
            title: "Delete Item",
            children: l.jsx(Trash2, { className: "w-3 h-3" })
          })
        ]
      })
    ],
  });
}


function GalleryItemEditorModal({ isOpen, onClose, item, onSave }) {
  const [type, setType] = k.useState('photo');
  const [src, setSrc] = k.useState('');
  const [thumbnail, setThumbnail] = k.useState('');
  const [title, setTitle] = k.useState('');
  const [category, setCategory] = k.useState('Model');
  const [description, setDescription] = k.useState('');
  const [videoUrl, setVideoUrl] = k.useState('');
  const [dragActive, setDragActive] = k.useState(false);
  const [error, setError] = k.useState('');

  k.useEffect(() => {
    if (isOpen) {
      if (item) {
        setType(item.type);
        setSrc(item.src);
        setThumbnail(item.thumbnail);
        setTitle(item.title);
        setCategory(item.category);
        setDescription(item.description);
        setVideoUrl(item.type === 'video' ? (item.youtubeId ? `https://www.youtube.com/watch?v=${item.youtubeId}` : item.src) : '');
      } else {
        setType('photo');
        setSrc('');
        setThumbnail('');
        setTitle('');
        setCategory('Model');
        setDescription('');
        setVideoUrl('');
      }
      setError('');
    }
  }, [isOpen, item]);

  if (!isOpen) return null;

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const processFile = (file, field) => {
    if (!file.type.startsWith('image/')) {
      setError('File must be an image (PNG, JPG, JPEG, WEBP)');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image is too large. Max size is 5MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (evt) => {
      const base64 = evt.target?.result;
      if (base64 && typeof base64 === 'string') {
        if (field === 'src') {
          setSrc(base64);
          if (type === 'photo') {
            setThumbnail(base64);
          }
        } else {
          setThumbnail(base64);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0], field);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0], field);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('Please provide a title');
      return;
    }
    if (!description.trim()) {
      setError('Please provide a description');
      return;
    }

    let finalSrc = src;
    let finalThumbnail = thumbnail;
    let finalYoutubeId = undefined;

    if (type === 'video') {
      if (!videoUrl.trim()) {
        setError('Please provide a YouTube link or video URL');
        return;
      }
      const ytid = getYoutubeId(videoUrl);
      if (ytid) {
        finalYoutubeId = ytid;
        finalSrc = `https://www.youtube.com/embed/${ytid}`;
        if (!finalThumbnail) {
          finalThumbnail = `https://img.youtube.com/vi/${ytid}/hqdefault.jpg`;
        }
      } else {
        finalSrc = videoUrl;
        if (!finalThumbnail) {
          setError('Please upload or provide a thumbnail for this video');
          return;
        }
      }
    } else {
      if (!src.trim()) {
        setError('Please provide an image URL or upload an image file');
        return;
      }
      if (!finalThumbnail) {
        finalThumbnail = src;
      }
    }

    onSave({
      id: item?.id,
      type,
      src: finalSrc,
      thumbnail: finalThumbnail,
      title: title.trim(),
      category,
      description: description.trim(),
      youtubeId: finalYoutubeId
    });
  };

  return l.jsx("div", {
    className: "fixed inset-0 bg-neutral-950/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300 pointer-events-auto",
    onClick: onClose,
    children: l.jsxs("div", {
      className: "bg-[#FCFAF6] border border-neutral-200 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col pointer-events-auto max-h-[90vh] animate-in slide-in-from-bottom-4 duration-300",
      onClick: (evt) => evt.stopPropagation(),
      children: [
        l.jsxs("div", {
          className: "px-6 py-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50",
          children: [
            l.jsx("h2", {
              className: "font-heading font-bold text-base tracking-wider text-neutral-950 uppercase",
              children: item ? 'Edit Gallery Item' : 'Add New Gallery Item'
            }),
            l.jsx("button", {
              onClick: onClose,
              className: "text-neutral-400 hover:text-neutral-700 transition-colors p-2 rounded-xl hover:bg-neutral-100 cursor-pointer",
              children: l.jsx(Bx, { className: "w-4 h-4" })
            })
          ]
        }),
        l.jsxs("form", {
          onSubmit: handleSubmit,
          className: "flex-1 overflow-y-auto p-6 space-y-5",
          children: [
            error && l.jsx("div", {
              className: "bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-xs font-mono font-medium",
              children: error
            }),
            l.jsxs("div", {
              className: "space-y-1.5",
              children: [
                l.jsx("label", {
                  className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                  children: "Media Format"
                }),
                l.jsxs("div", {
                  className: "flex gap-3",
                  children: [
                    l.jsx("button", {
                      type: "button",
                      onClick: () => setType('photo'),
                      className: `flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${type === 'photo' ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'}`,
                      children: "Photo"
                    }),
                    l.jsx("button", {
                      type: "button",
                      onClick: () => setType('video'),
                      className: `flex-1 py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase border transition-all cursor-pointer ${type === 'video' ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm' : 'bg-white text-neutral-600 border-neutral-200 hover:bg-neutral-50'}`,
                      children: "Video"
                    })
                  ]
                })
              ]
            }),
            l.jsxs("div", {
              className: "space-y-1.5",
              children: [
                l.jsx("label", {
                  className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                  children: "Domain / Category"
                }),
                l.jsxs("select", {
                  value: category,
                  onChange: (evt) => setCategory(evt.target.value),
                  className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 font-mono text-neutral-800",
                  children: [
                    l.jsx("option", { value: "Model", children: "Model (Domain .04 - Reclaiming physical gaze)" }),
                    l.jsx("option", { value: "Writer", children: "Writer (Domain .02 - Poetics in quiet chiaroscuro)" }),
                    l.jsx("option", { value: "Speaker", children: "Speaker (Domain .03 - Speech to naming shadows)" }),
                    l.jsx("option", { value: "Welfare", children: "Welfare (Domain .01 - Social Entrepreneur frontline care)" }),
                    l.jsx("option", { value: "Events", children: "Events & News (Domain .05 - Public gatherings and updates)" })
                  ]
                })
              ]
            }),
            l.jsxs("div", {
              className: "space-y-1.5",
              children: [
                l.jsx("label", {
                  className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                  children: "Title"
                }),
                l.jsx("input", {
                  type: "text",
                  required: !0,
                  value: title,
                  onChange: (evt) => setTitle(evt.target.value),
                  placeholder: "e.g. Unbound Presence",
                  className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 text-neutral-800 font-medium"
                })
              ]
            }),
            l.jsxs("div", {
              className: "space-y-1.5",
              children: [
                l.jsx("label", {
                  className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                  children: "Description"
                }),
                l.jsx("textarea", {
                  required: !0,
                  rows: 3,
                  value: description,
                  onChange: (evt) => setDescription(evt.target.value),
                  placeholder: "Brief artistic description of this gallery piece...",
                  className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 text-neutral-800 leading-relaxed"
                })
              ]
            }),
            type === 'photo' ? l.jsxs("div", {
              className: "space-y-4",
              children: [
                l.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    l.jsx("label", {
                      className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                      children: "Image Source URL"
                    }),
                    l.jsx("input", {
                      type: "url",
                      value: src.startsWith('data:') ? '' : src,
                      onChange: (evt) => {
                        setSrc(evt.target.value);
                        setThumbnail(evt.target.value);
                      },
                      placeholder: "Paste Image URL (or drag-and-drop a file below)",
                      className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 text-neutral-800 font-mono"
                    })
                  ]
                }),
                l.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    l.jsxs("div", {
                      onDragEnter: handleDrag,
                      onDragOver: handleDrag,
                      onDragLeave: handleDrag,
                      onDrop: (evt) => handleDrop(evt, 'src'),
                      className: `border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-350 flex flex-col items-center justify-center gap-2 ${dragActive ? 'border-amber-500 bg-amber-50/10 scale-99' : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'}`,
                      onClick: () => document.getElementById('gal-image-file-input')?.click(),
                      children: [
                        l.jsx(Upload, { className: "w-5 h-5 text-neutral-400" }),
                        l.jsxs("span", {
                          className: "text-xs text-neutral-600 font-medium",
                          children: [
                            "Drag and drop your image file here, or ",
                            l.jsx("span", { className: "text-[#0e5fa3] underline", children: "browse local files" })
                          ]
                        }),
                        l.jsx("span", {
                          className: "text-[10px] text-neutral-400 font-mono",
                          children: "Supports PNG, JPG, JPEG, WEBP (Max 5MB)"
                        }),
                        l.jsx("input", {
                          id: "gal-image-file-input",
                          type: "file",
                          accept: "image/*",
                          className: "hidden",
                          onChange: (evt) => handleFileChange(evt, 'src')
                        })
                      ]
                    }),
                    src && l.jsxs("div", {
                      className: "mt-3 flex items-center gap-3 p-2 border border-neutral-100 bg-neutral-50 rounded-xl",
                      children: [
                        l.jsx("img", { src: src, className: "w-12 h-12 rounded-lg object-cover border border-neutral-200", alt: "Preview" }),
                        l.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            l.jsx("p", { className: "text-[10px] font-mono text-neutral-400 uppercase font-bold", children: "Image loaded successfully" }),
                            l.jsx("p", { className: "text-xs text-neutral-600 truncate", children: src.startsWith('data:') ? 'Base64 Local Upload' : src })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }) : l.jsxs("div", {
              className: "space-y-4",
              children: [
                l.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    l.jsx("label", {
                      className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                      children: "YouTube Link or Video URL"
                    }),
                    l.jsx("input", {
                      type: "url",
                      required: !0,
                      value: videoUrl,
                      onChange: (evt) => setVideoUrl(evt.target.value),
                      placeholder: "e.g. https://www.youtube.com/watch?v=psN1DORYYV0",
                      className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 text-neutral-800 font-mono"
                    }),
                    l.jsx("p", {
                      className: "text-[9px] text-neutral-400 font-mono",
                      children: "If you enter a valid YouTube link, we will automatically extract its thumbnail and embed code!"
                    })
                  ]
                }),
                l.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    l.jsx("label", {
                      className: "text-[10px] font-mono tracking-wider uppercase font-bold text-neutral-500",
                      children: "Custom Thumbnail Image URL (Optional)"
                    }),
                    l.jsx("input", {
                      type: "url",
                      value: thumbnail.startsWith('data:') ? '' : thumbnail,
                      onChange: (evt) => setThumbnail(evt.target.value),
                      placeholder: "Paste thumbnail URL (otherwise auto-generated from YouTube)",
                      className: "w-full bg-white border border-neutral-200 rounded-xl py-3 px-4 text-xs focus:outline-none focus:border-neutral-900 text-neutral-800 font-mono"
                    })
                  ]
                }),
                l.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    l.jsxs("div", {
                      onDragEnter: handleDrag,
                      onDragOver: handleDrag,
                      onDragLeave: handleDrag,
                      onDrop: (evt) => handleDrop(evt, 'thumbnail'),
                      className: `border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all duration-350 flex flex-col items-center justify-center gap-1.5 ${dragActive ? 'border-amber-500 bg-amber-50/10 scale-99' : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'}`,
                      onClick: () => document.getElementById('gal-thumb-file-input')?.click(),
                      children: [
                        l.jsx(Upload, { className: "w-5 h-5 text-neutral-400" }),
                        l.jsxs("span", {
                          className: "text-xs text-neutral-600 font-medium",
                          children: [
                            "Drag/drop thumbnail image or ",
                            l.jsx("span", { className: "text-[#0e5fa3] underline", children: "browse local files" })
                          ]
                        }),
                        l.jsx("input", {
                          id: "gal-thumb-file-input",
                          type: "file",
                          accept: "image/*",
                          className: "hidden",
                          onChange: (evt) => handleFileChange(evt, 'thumbnail')
                        })
                      ]
                    }),
                    (thumbnail || videoUrl) && l.jsxs("div", {
                      className: "mt-3 flex items-center gap-3 p-2 border border-neutral-100 bg-neutral-50 rounded-xl",
                      children: [
                        l.jsx("img", {
                          src: thumbnail || (getYoutubeId(videoUrl) ? `https://img.youtube.com/vi/${getYoutubeId(videoUrl)}/hqdefault.jpg` : ''),
                          className: "w-16 h-10 rounded-lg object-cover border border-neutral-200 bg-neutral-950",
                          alt: "Thumbnail Preview",
                          onError: (evt) => { evt.currentTarget.src = 'https://placehold.co/600x400/000/fff?text=Video'; }
                        }),
                        l.jsxs("div", {
                          className: "flex-1 min-w-0",
                          children: [
                            l.jsx("p", { className: "text-[10px] font-mono text-neutral-400 uppercase font-bold", children: "Thumbnail Preview" }),
                            l.jsx("p", {
                              className: "text-xs text-neutral-600 truncate",
                              children: thumbnail ? (thumbnail.startsWith('data:') ? 'Base64 Local Upload' : thumbnail) : (getYoutubeId(videoUrl) ? 'Auto-loaded YouTube HQ Thumbnail' : 'Standard placeholder')
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),
            l.jsxs("div", {
              className: "flex gap-3 pt-4 border-t border-neutral-100",
              children: [
                l.jsx("button", {
                  type: "submit",
                  className: "flex-1 bg-neutral-950 hover:bg-neutral-800 text-white py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-colors shadow-md cursor-pointer text-center",
                  children: item ? 'Save Changes' : 'Add Item'
                }),
                l.jsx("button", {
                  type: "button",
                  onClick: onClose,
                  className: "border border-neutral-200 bg-white text-neutral-600 px-6 py-3 rounded-xl text-xs font-mono font-bold uppercase hover:bg-neutral-50 cursor-pointer",
                  children: "Cancel"
                })
              ]
            })
          ]
        })
      ]
    })
  });
}


function zA({ onBack: e }) {
  const { galleryItems, isEditMode, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useCMS();
  const [t, n] = k.useState("all"),
    [r, s] = k.useState(null),
    [isEditorOpen, setIsEditorOpen] = k.useState(false),
    [editingItem, setEditingItem] = k.useState(null),
    i = galleryItems.filter((h) =>
      t === "photos"
        ? h.type === "photo"
        : t === "videos"
          ? h.type === "video"
          : !0,
    ),
    o = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h - 1 + i.length) % i.length;
      s(i[x]);
    },
    a = () => {
      if (!r || i.length === 0) return;
      const h = i.findIndex((w) => w.id === r.id);
      if (h === -1) return;
      const x = (h + 1) % i.length;
      s(i[x]);
    };

  k.useEffect(() => {
    const h = (x) => {
      r &&
        (x.key === "Escape"
          ? s(null)
          : x.key === "ArrowLeft"
            ? o()
            : x.key === "ArrowRight" && a());
    };
    return (
      window.addEventListener("keydown", h),
      () => window.removeEventListener("keydown", h)
    );
  }, [r, i]);

  const handleEditClick = (item) => {
    setEditingItem(item);
    setIsEditorOpen(true);
  };

  const handleDeleteClick = (id) => {
    if (confirm('Are you absolutely sure you want to delete this gallery item?')) {
      deleteGalleryItem(id);
    }
  };

  const handleSaveItem = (data) => {
    if (data.id) {
      updateGalleryItem(data.id, data);
    } else {
      addGalleryItem(data);
    }
    setIsEditorOpen(false);
    setEditingItem(null);
  };

  const u = i.filter((h) => h.category === "Welfare"),
    c = i.filter((h) => h.category === "Writer"),
    d = i.filter((h) => h.category === "Speaker"),
    f = i.filter((h) => h.category === "Model"),
    eventsList = i.filter((h) => h.category === "Events");

  return l.jsxs("div", {
    className:
      "min-h-screen bg-[#FCFAF6] text-neutral-900 pt-32 pb-24 px-4 md:px-12 flex flex-col relative overflow-hidden",
    children: [
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 z-10",
        children: [
          l.jsxs("div", {
            children: [
              l.jsx("span", {
                className:
                  "font-mono text-[10px] tracking-[0.4em] text-[#0e5fa3] font-black uppercase block mb-2",
                children: "STORY ARCHIVE",
              }),
              l.jsx("h1", {
                className:
                  "font-heading text-4xl md:text-6xl font-extrabold text-neutral-900 tracking-tight uppercase",
                children: "GALLERY",
              }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-wrap items-center gap-4 select-none",
            children: [
              l.jsxs("div", {
                className:
                  "flex bg-neutral-100 p-1.5 rounded-full border border-neutral-200/60 shadow-inner w-fit",
                children: [
                  l.jsxs("button", {
                    onClick: () => n("all"),
                    className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "all" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                    children: [l.jsx(Lx, { className: "w-3.5 h-3.5" }), "All Work"],
                  }),
                  l.jsxs("button", {
                    onClick: () => n("photos"),
                    className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "photos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                    children: [l.jsx(WS, { className: "w-3.5 h-3.5" }), "Photos"],
                  }),
                  l.jsxs("button", {
                    onClick: () => n("videos"),
                    className: `px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${t === "videos" ? "bg-white text-neutral-900 shadow-md scale-100" : "text-neutral-500 hover:text-neutral-900"}`,
                    children: [l.jsx(r2, { className: "w-3.5 h-3.5" }), "Videos"],
                  }),
                ],
              }),
              isEditMode && l.jsxs("button", {
                onClick: () => {
                  setEditingItem(null);
                  setIsEditorOpen(true);
                },
                className: "bg-[#0e5fa3] hover:bg-[#0c508a] text-white px-6 py-3 rounded-full text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2 cursor-pointer shadow-md transition-all active:scale-95",
                children: [l.jsx(Plus, { className: "w-4 h-4 text-white" }), "Add Gallery Item"]
              })
            ]
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "w-full flex-grow flex flex-col justify-center gap-12 my-4 select-none relative z-10",
        children: [
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#15803D]/10 rounded-full border border-[#15803D]/20 shrink-0",
                    children: [
                      l.jsx(ba, { className: "w-3.5 h-3.5 text-[#15803D]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#15803D] font-bold tracking-widest uppercase",
                        children: "DOMAIN .01",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SOCIAL ENTREPRENEUR ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "frontline healthcare & care loops",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              u.length > 0
                ? l.jsx(Qi, { items: u, direction: "right", onItemClick: s, onEditClick: handleEditClick, onDeleteClick: handleDeleteClick })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#0E5FA3]/10 rounded-full border border-[#0E5FA3]/20 shrink-0",
                    children: [
                      l.jsx(Rx, { className: "w-3.5 h-3.5 text-[#0E5FA3]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#0E5FA3] font-bold tracking-widest uppercase",
                        children: "DOMAIN .02",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "WRITER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "poetics in quiet chiaroscuro",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              c.length > 0
                ? l.jsx(Qi, { items: c, direction: "left", onItemClick: s, onEditClick: handleEditClick, onDeleteClick: handleDeleteClick })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 rounded-full border border-[#B45309]/20 shrink-0",
                    children: [
                      l.jsx(od, { className: "w-3.5 h-3.5 text-[#B45309]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#B45309] font-bold tracking-widest uppercase",
                        children: "DOMAIN .03",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "SPEAKER ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "giving speech to naming shadows",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              d.length > 0
                ? l.jsx(Qi, { items: d, direction: "right", onItemClick: s, onEditClick: handleEditClick, onDeleteClick: handleDeleteClick })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#E65F1B]/10 rounded-full border border-[#E65F1B]/20 shrink-0",
                    children: [
                      l.jsx(US, { className: "w-3.5 h-3.5 text-[#E65F1B]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#E65F1B] font-bold tracking-widest uppercase",
                        children: "DOMAIN .04",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "MODEL ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "reclaiming the physical gaze",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              f.length > 0
                ? l.jsx(Qi, { items: f, direction: "left", onItemClick: s, onEditClick: handleEditClick, onDeleteClick: handleDeleteClick })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
          l.jsxs("div", {
            className: "flex flex-col gap-4",
            children: [
              l.jsxs("div", {
                className:
                  "max-w-7xl mx-auto w-full flex items-center gap-4 px-4 md:px-0",
                children: [
                  l.jsxs("div", {
                    className:
                      "flex items-center gap-2 px-3 py-1 bg-[#0D9488]/10 rounded-full border border-[#0D9488]/20 shrink-0",
                    children: [
                      l.jsx(Newspaper, { className: "w-3.5 h-3.5 text-[#0D9488]" }),
                      l.jsx("span", {
                        className:
                          "font-mono text-[9px] text-[#0D9488] font-bold tracking-widest uppercase",
                        children: "DOMAIN .05",
                      }),
                    ],
                  }),
                  l.jsxs("h2", {
                    className:
                      "font-heading text-sm md:text-base font-extrabold tracking-tight text-neutral-900 uppercase",
                    children: [
                      "EVENTS & NEWS ",
                      l.jsx("span", {
                        className:
                          "font-display italic font-light text-neutral-500 lowercase",
                        children: "public gatherings, updates & milestones",
                      }),
                    ],
                  }),
                  l.jsx("div", { className: "h-px flex-grow bg-neutral-200" }),
                ],
              }),
              eventsList.length > 0
                ? l.jsx(Qi, { items: eventsList, direction: "right", onItemClick: s, onEditClick: handleEditClick, onDeleteClick: handleDeleteClick })
                : l.jsx("div", {
                    className:
                      "max-w-7xl mx-auto w-full text-center py-6 border border-dashed border-neutral-200 rounded-2xl bg-neutral-50/50",
                    children: l.jsx("span", {
                      className:
                        "font-mono text-xs text-neutral-400 uppercase tracking-widest",
                      children: "No entries available in this format",
                    }),
                  }),
            ],
          }),
        ],
      }),
      l.jsxs("div", {
        className:
          "max-w-7xl mx-auto w-full mt-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-400 border-t border-neutral-200/40 pt-8 z-10 font-mono text-[9px] tracking-widest uppercase",
        children: [
          l.jsx("span", { children: "© Tarrana Deepjyoti India Foundation" }),
          l.jsx("span", {
            children:
              "Swipe or Drag strips left/right to scroll faster • Click any card to expand",
          }),
        ],
      }),
      l.jsx(Vr, {
        children:
          r &&
          l.jsx(X.div, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            onClick: () => s(null),
            className:
              "fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 cursor-zoom-out",
            children: l.jsxs(X.div, {
              initial: { scale: 0.95, y: 20 },
              animate: { scale: 1, y: 0 },
              exit: { scale: 0.95, y: 20 },
              transition: { type: "spring", stiffness: 300, damping: 28 },
              onClick: (h) => h.stopPropagation(),
              className:
                "bg-[#121212] border border-neutral-800 text-white rounded-3xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col md:flex-row shadow-2xl relative cursor-default",
              children: [
                l.jsx("button", {
                  onClick: () => s(null),
                  className:
                    "absolute top-4 right-4 md:top-6 md:right-6 bg-black/65 hover:bg-neutral-850 p-2.5 rounded-full text-neutral-300 hover:text-white transition-all border border-neutral-800 z-10 cursor-pointer hover:scale-105",
                  children: l.jsx(Bx, { className: "w-5 h-5" }),
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[60%] bg-neutral-950 flex items-center justify-center relative aspect-video md:aspect-auto md:min-h-[500px] group/media",
                  children: [
                    r.type === "photo"
                      ? l.jsx(CMSImage, {
                          originalSrc: r.src,
                          alt: r.title,
                          className:
                            "w-full h-full object-contain max-h-[50vh] md:max-h-[80vh] block",
                          referrerPolicy: "no-referrer",
                        })
                      : l.jsx("div", {
                          className:
                            "w-full h-full aspect-video md:absolute md:inset-0 bg-black",
                          children: r.youtubeId
                            ? l.jsx("iframe", {
                                src: `https://www.youtube.com/embed/${r.youtubeId}?autoplay=1&rel=0&modestbranding=1`,
                                title: r.title,
                                frameBorder: "0",
                                allow:
                                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                                allowFullScreen: !0,
                                className: "w-full h-full block",
                              })
                             : l.jsx("video", {
                                src: r.src,
                                className: "w-full h-full block",
                                controls: !0,
                                autoPlay: !0,
                                playsInline: !0,
                              }),
                        }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), o());
                      },
                      className:
                        "absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Previous (Left Arrow)",
                      children: l.jsx(IS, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:-translate-x-0.5",
                      }),
                    }),
                    l.jsx("button", {
                      onClick: (h) => {
                        (h.stopPropagation(), a());
                      },
                      className:
                        "absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-neutral-900 p-2.5 md:p-3 rounded-full text-neutral-300 hover:text-white border border-neutral-800/80 transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95 group/btn",
                      title: "Next (Right Arrow)",
                      children: l.jsx(co, {
                        className:
                          "w-5 h-5 transition-transform group-hover/btn:translate-x-0.5",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "w-full md:w-[40%] p-8 flex flex-col justify-between bg-[#121212]",
                  children: [
                    l.jsxs("div", {
                      className: "flex flex-col gap-6 mt-4",
                      children: [
                        l.jsxs("div", {
                          children: [
                            l.jsxs("span", {
                              className:
                                "font-mono text-[9px] tracking-[0.3em] text-[#E65F1B] font-bold uppercase block mb-2",
                              children: [
                                r.category === "Welfare"
                                  ? "SOCIAL ENTREPRENEUR"
                                  : r.category === "Events" ? "EVENTS & NEWS" : r.category.toUpperCase(),
                                " // ARCHIVE",
                              ],
                            }),
                            l.jsx("h2", {
                              className:
                                "font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-white uppercase",
                              children: r.title,
                            }),
                          ],
                        }),
                        l.jsx("p", {
                          className:
                            "font-sans text-sm text-neutral-400 leading-relaxed font-normal",
                          children: r.description,
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "pt-8 border-t border-neutral-900 flex flex-col gap-2 mt-8 md:mt-0",
                      children: [
                        l.jsxs("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: ["Media format: ", r.type.toUpperCase()],
                        }),
                        l.jsx("span", {
                          className:
                            "font-mono text-[9px] text-neutral-600 uppercase tracking-widest",
                          children: "Collection: Tarrana Deepjyoti Foundation",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      }),
      l.jsx(GalleryItemEditorModal, {
        isOpen: isEditorOpen,
        onClose: () => {
          setIsEditorOpen(false);
          setEditingItem(null);
        },
        item: editingItem,
        onSave: handleSaveItem
      })
    ],
  });
}


export default zA;
