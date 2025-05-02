
import { defineConfig } from 'vite';
import path from 'path';

// Remove the direct import of componentTagger which is causing the ESM/CJS conflict
// import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
  },
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    // Use dynamic import for lovable-tagger in development mode
    mode === 'development' && {
      name: 'lovable-tagger-plugin',
      async configureServer(server) {
        try {
          // Dynamically import the ESM module when needed
          const { componentTagger } = await import('lovable-tagger');
          const plugin = componentTagger();
          if (plugin.configureServer) {
            plugin.configureServer(server);
          }
        } catch (error) {
          console.warn('Failed to load lovable-tagger:', error);
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
}));
