import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Safe path resolution for both ES Modules and CommonJS
const currentFilePath = typeof import.meta !== 'undefined' && import.meta['url']
  ? fileURLToPath(import.meta['url'])
  : (typeof __filename !== 'undefined' ? __filename : '');
const resolvedDirname = path.dirname(currentFilePath);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use express.json with a generous limit for uploaded images/data
  app.use(express.json({ limit: '50mb' }));

  // Path to our global CMS storage file
  const cmsFilePath = path.join(process.cwd(), 'cms-data.json');

  // Initial gallery items if no file exists
  const defaultGalleryItems = [
    {
      id: "gal-model-1",
      type: "photo",
      src: "/Modle.JPG.jpeg",
      thumbnail: "/Modle.JPG.jpeg",
      title: "Unbound Presence",
      category: "Model",
      description: "Reclaiming physical space with unshakeable dignity and softness, paving paths for radical body representation."
    },
    {
      id: "gal-model-2",
      type: "photo",
      src: "/TD-297.jpg.jpeg",
      thumbnail: "/TD-297.jpg.jpeg",
      title: "Textured Warmth",
      category: "Model",
      description: "Elegant woolens and studio styling meeting soft, welcoming smiles that rewrite the narrative of high-fashion bodies."
    },
    {
      id: "gal-model-3",
      type: "photo",
      src: "/NOV00034.JPG.jpeg",
      thumbnail: "/NOV00034.JPG.jpeg",
      title: "Studio Amber Portrait",
      category: "Model",
      description: "Warm-toned studio styling capturing beautiful interactions of light, texture, and relaxed confidence."
    },
    {
      id: "gal-model-4",
      type: "photo",
      src: "/NOVA0019.JPG.jpeg",
      thumbnail: "/NOVA0019.JPG.jpeg",
      title: "Poise & Elegance",
      category: "Model",
      description: "Strong, soft, and unscripted. Representing the modern woman in spaces that once felt entirely exclusionary."
    },
    {
      id: "gal-model-5",
      type: "photo",
      src: "/taranna.png",
      thumbnail: "/taranna.png",
      title: "The Silhouette of Truth",
      category: "Model",
      description: "The striking high-fashion silhouette representing the overarching golden thread running through all four domains."
    },
    {
      id: "gal-model-vid",
      type: "video",
      src: "https://www.youtube.com/embed/H_8y0SBy3H8",
      thumbnail: "/Modle.JPG.jpeg",
      title: "Radical Body Love & Representation",
      category: "Model",
      description: "Reflections on reclaiming plus-size representation in high fashion and establishing healthy bodily relationships.",
      youtubeId: "H_8y0SBy3H8"
    },
    {
      id: "gal-writer-1",
      type: "photo",
      src: "/Writer.jpg.jpeg",
      thumbnail: "/Writer.jpg.jpeg",
      title: "Poetics in Chiaroscuro",
      category: "Writer",
      description: "Contemplative shadows framing the write-up desk. Turning personal confession into shared, universal echoes."
    },
    {
      id: "gal-writer-2",
      type: "photo",
      src: "/NOVA0019.JPG.jpeg",
      thumbnail: "/NOVA0019.JPG.jpeg",
      title: "Silent Reflections",
      category: "Writer",
      description: "Capturing a writer's transient state — where the next line of free verse begins to form inside the quiet room."
    },
    {
      id: "gal-writer-3",
      type: "photo",
      src: "/TD-382.jpg.jpeg",
      thumbnail: "/TD-382.jpg.jpeg",
      title: "Symmetrical Sincerity",
      category: "Writer",
      description: "A focused, symmetrical gaze capturing quiet strength, vulnerability, and absolute conviction."
    },
    {
      id: "gal-writer-4",
      type: "photo",
      src: "/TD-297.jpg.jpeg",
      thumbnail: "/TD-297.jpg.jpeg",
      title: "Draped in Thoughts",
      category: "Writer",
      description: "A portrait of quiet intensity where text and form find their shared rhythm."
    },
    {
      id: "gal-writer-vid",
      type: "video",
      src: "https://www.youtube.com/embed/psN1DORYYV0",
      thumbnail: "/TD-382.jpg.jpeg",
      title: "Tarrana's Cinematic Journey",
      category: "Writer",
      description: "The official cinematic overview of Tarrana's multi-room journey. Walk through the spaces that define writer, model, speaker, and entrepreneur.",
      youtubeId: "psN1DORYYV0"
    },
    {
      id: "gal-speaker-1",
      type: "photo",
      src: "/Speaker.JPG.jpeg",
      thumbnail: "/Speaker.JPG.jpeg",
      title: "The Speaking Frame",
      category: "Speaker",
      description: "A moment of raw presence in front of the lens, reflecting on how we give voice to silent shame and hidden shadows."
    },
    {
      id: "gal-speaker-2",
      type: "photo",
      src: "/Speaker.JPG.jpeg",
      thumbnail: "/Speaker.JPG.jpeg",
      title: "Sculpted Shadow-Play",
      category: "Speaker",
      description: "A monochrome block portrait demonstrating architectural lighting, texture, and visual design poise."
    },
    {
      id: "gal-speaker-3",
      type: "photo",
      src: "/NOV00034.JPG.jpeg",
      thumbnail: "/NOV00034.JPG.jpeg",
      title: "Authentic Somatic Dialogue",
      category: "Speaker",
      description: "Answering somatic healing questions with deep resonance and clarity."
    },
    {
      id: "gal-speaker-vid-1",
      type: "video",
      src: "https://www.youtube.com/embed/_U0QvsnVfGg",
      thumbnail: "/Speaker.JPG.jpeg",
      title: "The Courage to Be Disliked",
      category: "Speaker",
      description: "A compelling public presentation focusing on the freedom of standing in your individual truth, separate from external validation.",
      youtubeId: "_U0QvsnVfGg"
    },
    {
      id: "gal-speaker-vid-2",
      type: "video",
      src: "https://www.youtube.com/embed/psN1DORYYV0",
      thumbnail: "/Writer.jpg.jpeg",
      title: "Shame & Naming Shadows",
      category: "Speaker",
      description: "Addressing social expectations, unvoiced grief, and the transformational step of naming our deepest shadows.",
      youtubeId: "psN1DORYYV0"
    },
    {
      id: "gal-welfare-1",
      type: "photo",
      src: "/TD-004.jpg.jpeg",
      thumbnail: "/TD-004.jpg.jpeg",
      title: "Grassroots Empathetic Reach",
      category: "Welfare",
      description: "Active frontline leadership in Sampoorna, bringing health equity and empowerment directly to women in regional centers."
    },
    {
      id: "gal-welfare-2",
      type: "photo",
      src: "/TD-263.jpg.jpeg",
      thumbnail: "/TD-263.jpg.jpeg",
      title: "The Heart of Sampoorna",
      category: "Welfare",
      description: "Deepjyoti Foundation's visionary healthcare loops, elevating families and building networks of persistent local aid."
    },
    {
      id: "gal-welfare-3",
      type: "photo",
      src: "/Speaker.JPG.jpeg",
      thumbnail: "/Speaker.JPG.jpeg",
      title: "Sampoorna Outreach Circle",
      category: "Welfare",
      description: "Frontline advocacy session and systemic planning for grassroots community aid loops."
    },
    {
      id: "gal-welfare-vid",
      type: "video",
      src: "https://www.youtube.com/embed/_U0QvsnVfGg",
      thumbnail: "/TD-263.jpg.jpeg",
      title: "Welfare & Grassroots Outreach",
      category: "Welfare",
      description: "Documenting the systemic aid, medical support camps, and long-term empowerment frameworks run by Deepjyoti India Foundation.",
      youtubeId: "_U0QvsnVfGg"
    },
    {
      id: "gal-events-1",
      type: "photo",
      src: "/TD-263.jpg.jpeg",
      thumbnail: "/TD-263.jpg.jpeg",
      title: "Grassroots Healthcare Summit 2026",
      category: "Events",
      description: "Deepjyoti India Foundation hosting key leaders to scale systemic medical aid loops and rural healthcare equity."
    },
    {
      id: "gal-events-2",
      type: "photo",
      src: "/Speaker.JPG.jpeg",
      thumbnail: "/Speaker.JPG.jpeg",
      title: "Poetics & Social Change Panel",
      category: "Events",
      description: "Tarrana speaking at the annual Literature Festival on giving voice to marginalized narratives through free verse."
    },
    {
      id: "gal-events-vid",
      type: "video",
      src: "https://www.youtube.com/embed/_U0QvsnVfGg",
      thumbnail: "/TD-004.jpg.jpeg",
      title: "Sampoorna Impact & Milestones",
      category: "Events",
      description: "A video chronicle celebrating the milestones of the Sampoorna project reaching over 5,000 women.",
      youtubeId: "_U0QvsnVfGg"
    }
  ];

  // Initialize file if not exists
  if (!fs.existsSync(cmsFilePath)) {
    fs.writeFileSync(cmsFilePath, JSON.stringify({
      imageMap: {},
      galleryItems: defaultGalleryItems
    }, null, 2));
  }

  // API endpoints
  app.get('/api/cms', (req, res) => {
    try {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      if (fs.existsSync(cmsFilePath)) {
        const data = fs.readFileSync(cmsFilePath, 'utf-8');
        return res.json(JSON.parse(data));
      }
      return res.json({ imageMap: {}, galleryItems: defaultGalleryItems });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to read CMS configuration' });
    }
  });

  app.post('/api/cms', (req, res) => {
    try {
      const { imageMap, galleryItems } = req.body;
      const dataToSave = {
        imageMap: imageMap || {},
        galleryItems: galleryItems || []
      };
      fs.writeFileSync(cmsFilePath, JSON.stringify(dataToSave, null, 2));
      return res.json({ success: true });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'Failed to save CMS configuration' });
    }
  });

  // Serve static assets from public/ folder with full Express support (including byte range requests!)
  app.use(express.static(path.join(process.cwd(), 'public')));

  // Vite development vs production mode
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
