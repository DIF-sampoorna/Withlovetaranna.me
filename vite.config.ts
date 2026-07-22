import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { defineConfig, Plugin } from 'vite';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function videoRangePlugin(): Plugin {
  const handleVideoRequest = (req: any, res: any, next: any) => {
    if (!req.url) return next();

    const urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const publicDir = path.resolve(__dirname, 'public');
    const filePath = path.join(publicDir, urlPath);

    // Only handle video files in public directory
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.mp4': 'video/mp4',
      '.webm': 'video/webm',
      '.ogv': 'video/ogg',
      '.mov': 'video/quicktime',
      '.m4v': 'video/mp4',
    };

    if (!mimeTypes[ext]) {
      return next();
    }

    if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      return next();
    }

    const stat = fs.statSync(filePath);
    const totalSize = stat.size;
    const contentType = mimeTypes[ext];

    // Handle HEAD request
    if (req.method === 'HEAD') {
      res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': totalSize,
        'Accept-Ranges': 'bytes',
      });
      return res.end();
    }

    if (req.method !== 'GET') {
      return next();
    }

    const range = req.headers.range;

    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      let start: number;
      let end: number;

      if (!parts[0] && parts[1]) {
        const suffix = parseInt(parts[1], 10);
        start = Math.max(0, totalSize - suffix);
        end = totalSize - 1;
      } else {
        start = parseInt(parts[0], 10);
        end = parts[1] ? parseInt(parts[1], 10) : totalSize - 1;
      }

      if (isNaN(start) || isNaN(end) || start >= totalSize || end >= totalSize || start > end) {
        res.writeHead(416, {
          'Content-Range': `bytes */${totalSize}`,
        });
        return res.end();
      }

      const chunkSize = end - start + 1;
      const fileStream = fs.createReadStream(filePath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${totalSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': contentType,
      });

      fileStream.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': totalSize,
        'Accept-Ranges': 'bytes',
        'Content-Type': contentType,
      });

      fs.createReadStream(filePath).pipe(res);
    }
  };

  return {
    name: 'vite-plugin-video-range',
    configureServer(server) {
      server.middlewares.use(handleVideoRequest);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleVideoRequest);
    },
  };
}

export default defineConfig(() => {
  return {
    publicDir: 'public',
    plugins: [react(), tailwindcss(), videoRangePlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      strictPort: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
