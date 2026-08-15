import { Suspense } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { routes, NotFoundRoute } from "./routes";
import { FloatingContact } from "@/components/FloatingContact";
import { ScrollToTop } from "@/components/ScrollToTop";

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
        <Route component={NotFoundRoute} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <Router />
      <FloatingContact />
    </QueryClientProvider>
  );
}

export default App;
