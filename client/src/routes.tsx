import { createElement, lazy } from "react";

// Single source for route definitions. Each route's component is code-split.
// React.lazy renders its Suspense fallback inside renderToString even when the
// chunk is preloaded, so preloadForPath() stores the RESOLVED component and the
// route wrapper renders it directly when available. Both the SSR entry and the
// client hydrate step call preloadForPath() first, so prerendered HTML and the
// first client render are identical (no fallback flash, no hydration mismatch).
// Client-side navigations to not-yet-loaded routes fall back to React.lazy.

type Loader = () => Promise<{ default: React.ComponentType<any> }>;

interface RouteDef {
  path: string;
  load: Loader;
  resolved?: React.ComponentType<any>;
}

export const routeDefs: RouteDef[] = [
  { path: "/", load: () => import("@/pages/Home") },
  { path: "/hakkimizda", load: () => import("@/pages/About") },
  { path: "/hizmetler", load: () => import("@/pages/Services") },
  { path: "/hizmetler/:id", load: () => import("@/pages/ServiceDetail") },
  { path: "/projeler", load: () => import("@/pages/Projects") },
  { path: "/hizmet-bolgeleri", load: () => import("@/pages/ServiceAreas") },
  { path: "/lashing/:slug", load: () => import("@/pages/LocationDetail") },
  { path: "/rehber", load: () => import("@/pages/GuideHub") },
  { path: "/rehber/:slug", load: () => import("@/pages/GuideDetail") },
  // Root-level guide URL with backlink history. GuideDetail resolves the
  // slug from the current location, so it serves this route too.
  { path: "/lashing-nedir", load: () => import("@/pages/GuideDetail") },
  { path: "/en", load: () => import("@/pages/en/EnHome") },
  { path: "/en/services", load: () => import("@/pages/en/EnServices") },
  { path: "/en/services/:slug", load: () => import("@/pages/en/EnServiceDetail") },
  { path: "/en/locations/:slug", load: () => import("@/pages/en/EnLocationDetail") },
  { path: "/iletisim", load: () => import("@/pages/Contact") },
  { path: "/privacy", load: () => import("@/pages/Privacy") },
  { path: "/terms", load: () => import("@/pages/Terms") },
  { path: "/kvkk", load: () => import("@/pages/Kvkk") },
];

const notFoundDef: RouteDef = { path: "*", load: () => import("@/pages/not-found") };

function makeComponent(def: RouteDef) {
  const Lazy = lazy(def.load);
  return function RouteComponent(props: any) {
    return def.resolved ? createElement(def.resolved, props) : createElement(Lazy, props);
  };
}

export const routes = routeDefs.map((def) => ({
  path: def.path,
  component: makeComponent(def),
}));

export const NotFoundRoute = makeComponent(notFoundDef);

function matchesPattern(pattern: string, pathname: string): boolean {
  const regex = new RegExp(
    "^" +
      pattern
        .split("/")
        .map((seg) => (seg.startsWith(":") ? "[^/]+" : seg.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")))
        .join("/") +
      "$",
  );
  return regex.test(pathname);
}

export async function preloadForPath(pathname: string): Promise<void> {
  const clean = pathname.split("?")[0].replace(/\/+$/, "") || "/";
  const def = routeDefs.find((d) => matchesPattern(d.path, clean)) ?? notFoundDef;
  const mod = await def.load();
  def.resolved = mod.default;
}
