import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export interface GalleryItem {
  id: string;
  type: string; // 'photo' or 'video'
  src: string;
  thumbnail: string;
  title: string;
  category: string; // 'Model', 'Writer', 'Speaker', 'Welfare'
  description: string;
  youtubeId?: string;
}

const DEFAULT_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-model-1",
    type: "photo",
    src: "/Modle.JPG.jpeg",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Unbound Presence",
    category: "Model",
    description:
      "Reclaiming physical space with unshakeable dignity and softness, paving paths for radical body representation.",
  },
  {
    id: "gal-model-2",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Textured Warmth",
    category: "Model",
    description:
      "Elegant woolens and studio styling meeting soft, welcoming smiles that rewrite the narrative of high-fashion bodies.",
  },
  {
    id: "gal-model-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Studio Amber Portrait",
    category: "Model",
    description:
      "Warm-toned studio styling capturing beautiful interactions of light, texture, and relaxed confidence.",
  },
  {
    id: "gal-model-4",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Poise & Elegance",
    category: "Model",
    description:
      "Strong, soft, and unscripted. Representing the modern woman in spaces that once felt entirely exclusionary.",
  },
  {
    id: "gal-model-5",
    type: "photo",
    src: "/taranna.png",
    thumbnail: "/taranna.png",
    title: "The Silhouette of Truth",
    category: "Model",
    description:
      "The striking high-fashion silhouette representing the overarching golden thread running through all four domains.",
  },
  {
    id: "gal-model-vid",
    type: "video",
    src: "https://www.youtube.com/embed/H_8y0SBy3H8",
    thumbnail: "/Modle.JPG.jpeg",
    title: "Radical Body Love & Representation",
    category: "Model",
    description:
      "Reflections on reclaiming plus-size representation in high fashion and establishing healthy bodily relationships.",
    youtubeId: "H_8y0SBy3H8",
  },
  {
    id: "gal-writer-1",
    type: "photo",
    src: "/Writer.jpg.jpeg",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Poetics in Chiaroscuro",
    category: "Writer",
    description:
      "Contemplative shadows framing the write-up desk. Turning personal confession into shared, universal echoes.",
  },
  {
    id: "gal-writer-2",
    type: "photo",
    src: "/NOVA0019.JPG.jpeg",
    thumbnail: "/NOVA0019.JPG.jpeg",
    title: "Silent Reflections",
    category: "Writer",
    description:
      "Capturing a writer's transient state — where the next line of free verse begins to form inside the quiet room.",
  },
  {
    id: "gal-writer-3",
    type: "photo",
    src: "/TD-382.jpg.jpeg",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Symmetrical Sincerity",
    category: "Writer",
    description:
      "A focused, symmetrical gaze capturing quiet strength, vulnerability, and absolute conviction.",
  },
  {
    id: "gal-writer-4",
    type: "photo",
    src: "/TD-297.jpg.jpeg",
    thumbnail: "/TD-297.jpg.jpeg",
    title: "Draped in Thoughts",
    category: "Writer",
    description:
      "A portrait of quiet intensity where text and form find their shared rhythm.",
  },
  {
    id: "gal-writer-vid",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/TD-382.jpg.jpeg",
    title: "Tarrana's Cinematic Journey",
    category: "Writer",
    description:
      "The official cinematic overview of Tarrana's multi-room journey. Walk through the spaces that define writer, model, speaker, and entrepreneur.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-speaker-1",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Speaking Frame",
    category: "Speaker",
    description:
      "A moment of raw presence in front of the lens, reflecting on how we give voice to silent shame and hidden shadows.",
  },
  {
    id: "gal-speaker-2",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sculpted Shadow-Play",
    category: "Speaker",
    description:
      "A monochrome block portrait demonstrating architectural lighting, texture, and visual design poise.",
  },
  {
    id: "gal-speaker-3",
    type: "photo",
    src: "/NOV00034.JPG.jpeg",
    thumbnail: "/NOV00034.JPG.jpeg",
    title: "Authentic Somatic Dialogue",
    category: "Speaker",
    description:
      "Answering somatic healing questions with deep resonance and clarity.",
  },
  {
    id: "gal-speaker-vid-1",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "The Courage to Be Disliked",
    category: "Speaker",
    description:
      "A compelling public presentation focusing on the freedom of standing in your individual truth, separate from external validation.",
    youtubeId: "_U0QvsnVfGg",
  },
  {
    id: "gal-speaker-vid-2",
    type: "video",
    src: "https://www.youtube.com/embed/psN1DORYYV0",
    thumbnail: "/Writer.jpg.jpeg",
    title: "Shame & Naming Shadows",
    category: "Speaker",
    description:
      "Addressing social expectations, unvoiced grief, and the transformational step of naming our deepest shadows.",
    youtubeId: "psN1DORYYV0",
  },
  {
    id: "gal-welfare-1",
    type: "photo",
    src: "/TD-004.jpg.jpeg",
    thumbnail: "/TD-004.jpg.jpeg",
    title: "Grassroots Empathetic Reach",
    category: "Welfare",
    description:
      "Active frontline leadership in Sampoorna, bringing health equity and empowerment directly to women in regional centers.",
  },
  {
    id: "gal-welfare-2",
    type: "photo",
    src: "/TD-263.jpg.jpeg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "The Heart of Sampoorna",
    category: "Welfare",
    description:
      "Deepjyoti Foundation's visionary healthcare loops, elevating families and building networks of persistent local aid.",
  },
  {
    id: "gal-welfare-3",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Sampoorna Outreach Circle",
    category: "Welfare",
    description:
      "Frontline advocacy session and systemic planning for grassroots community aid loops.",
  },
  {
    id: "gal-welfare-vid",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "Welfare & Grassroots Outreach",
    category: "Welfare",
    description:
      "Documenting the systemic aid, medical support camps, and long-term empowerment frameworks run by Deepjyoti India Foundation.",
    youtubeId: "_U0QvsnVfGg",
  },
  {
    id: "gal-events-1",
    type: "photo",
    src: "/TD-263.jpg.jpeg",
    thumbnail: "/TD-263.jpg.jpeg",
    title: "Grassroots Healthcare Summit 2026",
    category: "Events",
    description:
      "Deepjyoti India Foundation hosting key leaders to scale systemic medical aid loops and rural healthcare equity.",
  },
  {
    id: "gal-events-2",
    type: "photo",
    src: "/Speaker.JPG.jpeg",
    thumbnail: "/Speaker.JPG.jpeg",
    title: "Poetics & Social Change Panel",
    category: "Events",
    description:
      "Tarrana speaking at the annual Literature Festival on giving voice to marginalized narratives through free verse.",
  },
  {
    id: "gal-events-vid",
    type: "video",
    src: "https://www.youtube.com/embed/_U0QvsnVfGg",
    thumbnail: "/TD-004.jpg.jpeg",
    title: "Sampoorna Impact & Milestones",
    category: "Events",
    description:
      "A video chronicle celebrating the milestones of the Sampoorna project reaching over 5,000 women.",
    youtubeId: "_U0QvsnVfGg",
  },
];

interface CMSContextType {
  isAdmin: boolean;
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
  imageMap: Record<string, string>;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateImage: (originalSrc: string, newSrc: string) => void;
  resetAll: () => void;
  exportConfig: () => string;
  importConfig: (json: string) => boolean;
  getSrc: (originalSrc: string) => string;
  galleryItems: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  updateGalleryItem: (id: string, updated: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  resetGalleryItems: () => void;
}

const CMSContext = createContext<CMSContextType | undefined>(undefined);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cms_is_admin') === 'true';
    }
    return false;
  });

  const [isEditMode, setEditModeState] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cms_is_edit_mode') === 'true' && localStorage.getItem('cms_is_admin') === 'true';
    }
    return false;
  });

  const [imageMap, setImageMap] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cms_image_map');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse cms_image_map', e);
        }
      }
    }
    return {};
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cms_gallery_items');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse cms_gallery_items', e);
        }
      }
    }
    return DEFAULT_GALLERY_ITEMS;
  });

  const safeSetItem = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.warn(`[CMS] Failed to save to localStorage under key "${key}" (possibly QuotaExceededError):`, err);
    }
  };

  // Sync CMS State from server on mount
  useEffect(() => {
    const fetchCMSData = async () => {
      try {
        const res = await fetch(`/api/cms?t=${Date.now()}`);
        if (res.ok) {
          const data = await res.json();
          if (data.imageMap) {
            setImageMap(data.imageMap);
            safeSetItem('cms_image_map', JSON.stringify(data.imageMap));
          }
          if (data.galleryItems && Array.isArray(data.galleryItems) && data.galleryItems.length > 0) {
            setGalleryItems(data.galleryItems);
            safeSetItem('cms_gallery_items', JSON.stringify(data.galleryItems));
          }
        }
      } catch (e) {
        console.error('Failed to fetch CMS data from server:', e);
      }
    };
    fetchCMSData();
  }, []);

  // Helper to persist to the server
  const saveToServer = async (
    updatedImageMap: Record<string, string>,
    updatedGalleryItems: GalleryItem[]
  ) => {
    try {
      await fetch('/api/cms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          imageMap: updatedImageMap,
          galleryItems: updatedGalleryItems,
        }),
      });
    } catch (e) {
      console.error('Failed to sync CMS to server:', e);
    }
  };

  const login = (email: string, password: string): boolean => {
    if (email === 'contact@dif-sampoorna.ngo' && password === 'Test123Test!') {
      setIsAdmin(true);
      localStorage.setItem('cms_is_admin', 'true');
      setEditModeState(true);
      localStorage.setItem('cms_is_edit_mode', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    setEditModeState(false);
    localStorage.removeItem('cms_is_admin');
    localStorage.removeItem('cms_is_edit_mode');
  };

  const setEditMode = (val: boolean) => {
    if (isAdmin) {
      setEditModeState(val);
      safeSetItem('cms_is_edit_mode', String(val));
    }
  };

  const updateImage = (originalSrc: string, newSrc: string) => {
    const updated = { ...imageMap, [originalSrc]: newSrc };
    setImageMap(updated);
    safeSetItem('cms_image_map', JSON.stringify(updated));
    saveToServer(updated, galleryItems);
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const newItem: GalleryItem = {
      ...item,
      id: `gal-custom-${Date.now()}`,
    };
    const updated = [...galleryItems, newItem];
    setGalleryItems(updated);
    safeSetItem('cms_gallery_items', JSON.stringify(updated));
    saveToServer(imageMap, updated);
  };

  const updateGalleryItem = (id: string, updatedFields: Partial<GalleryItem>) => {
    const updated = galleryItems.map(item => {
      if (item.id === id) {
        return { ...item, ...updatedFields };
      }
      return item;
    });
    setGalleryItems(updated);
    safeSetItem('cms_gallery_items', JSON.stringify(updated));
    saveToServer(imageMap, updated);
  };

  const deleteGalleryItem = (id: string) => {
    const updated = galleryItems.filter(item => item.id !== id);
    setGalleryItems(updated);
    safeSetItem('cms_gallery_items', JSON.stringify(updated));
    saveToServer(imageMap, updated);
  };

  const resetGalleryItems = () => {
    setGalleryItems(DEFAULT_GALLERY_ITEMS);
    localStorage.removeItem('cms_gallery_items');
    saveToServer(imageMap, DEFAULT_GALLERY_ITEMS);
  };

  const resetAll = () => {
    setImageMap({});
    localStorage.removeItem('cms_image_map');
    setGalleryItems(DEFAULT_GALLERY_ITEMS);
    localStorage.removeItem('cms_gallery_items');
    saveToServer({}, DEFAULT_GALLERY_ITEMS);
  };

  const exportConfig = () => {
    return JSON.stringify({ imageMap, galleryItems }, null, 2);
  };

  const importConfig = (json: string): boolean => {
    try {
      const parsed = JSON.parse(json);
      if (parsed && typeof parsed === 'object') {
        let newImageMap = imageMap;
        let newGalleryItems = galleryItems;

        if (parsed.imageMap && typeof parsed.imageMap === 'object') {
          newImageMap = parsed.imageMap;
          setImageMap(newImageMap);
          safeSetItem('cms_image_map', JSON.stringify(newImageMap));
        }
        if (parsed.galleryItems && Array.isArray(parsed.galleryItems)) {
          newGalleryItems = parsed.galleryItems;
          setGalleryItems(newGalleryItems);
          safeSetItem('cms_gallery_items', JSON.stringify(newGalleryItems));
        } else if (!parsed.imageMap && !parsed.galleryItems) {
          newImageMap = parsed;
          setImageMap(newImageMap);
          safeSetItem('cms_image_map', JSON.stringify(newImageMap));
        }
        saveToServer(newImageMap, newGalleryItems);
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON schema', e);
    }
    return false;
  };

  const getSrc = (originalSrc: string): string => {
    return imageMap[originalSrc] || originalSrc;
  };

  return (
    <CMSContext.Provider
      value={{
        isAdmin,
        isEditMode,
        setEditMode,
        imageMap,
        login,
        logout,
        updateImage,
        resetAll,
        exportConfig,
        importConfig,
        getSrc,
        galleryItems,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        resetGalleryItems,
      }}
    >
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (context === undefined) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}
