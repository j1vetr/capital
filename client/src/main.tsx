import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { preloadForPath } from "./routes";
import "./index.css";

const rootElement = document.getElementById("root")!;

// Load the current route's chunk before hydrating so the lazy boundary
// resolves synchronously and matches the prerendered HTML.
preloadForPath(window.location.pathname).then(() => {
  if (rootElement.firstElementChild) {
    hydrateRoot(rootElement, <App />);
  } else {
    createRoot(rootElement).render(<App />);
  }
});
