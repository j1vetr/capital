import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { preloadForPath } from "./routes";

export async function render(url: string): Promise<string> {
  await preloadForPath(url);
  return renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
}
