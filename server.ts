import express from 'express';
import fs from 'fs';
import path from 'path';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Health check endpoint for Cloud Run and load balancers
  app.get('/api/health', (_req, res) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Only use Vite development middleware when NODE_ENV is explicitly 'development'
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve compiled assets from dist directory
    const candidates = [
      path.resolve(process.cwd(), 'dist'),
      path.resolve(__dirname, '..', 'dist'),
      path.resolve(__dirname),
    ];
    const distPath = candidates.find((p) => fs.existsSync(path.join(p, 'index.html'))) || candidates[0];

    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} [${isDev ? 'development' : 'production'}]`);
  });
}

startServer();
