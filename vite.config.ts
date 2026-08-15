import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  css: {
    postcss: {
      plugins: [],
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  ssr: {
    noExternal: ["react-google-recaptcha", "react-async-script"],
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          // Split lucide-react icons into their own cacheable chunk
          if (id.includes("lucide-react")) return "lucide";
          // Split @radix-ui primitives (used only in ui/ components) separately.
          // react-slot is tiny and used by Button (loaded on every page); keep
          // it out of the radix chunk so the heavy primitives stay lazy.
          // Split per package so a page only downloads the primitives it
          // actually renders (e.g. home's accordion doesn't pull in select,
          // dialog, dropdown, ...).
          if (id.includes("@radix-ui") && !id.includes("react-slot")) {
            const m = id.match(/@radix-ui\/((?:react-)?[a-z-]+)/);
            return m ? `radix-${m[1].replace(/^react-/, "")}` : "radix";
          }
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
