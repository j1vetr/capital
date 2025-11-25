import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import ServiceDetail from "@/pages/ServiceDetail";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Kvkk from "@/pages/Kvkk";
import Projects from "@/pages/Projects";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/hakkimizda" component={About} />
      <Route path="/hizmetler" component={Services} />
      <Route path="/hizmetler/:id" component={ServiceDetail} />
      <Route path="/projeler" component={Projects} />
      <Route path="/iletisim" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/kvkk" component={Kvkk} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

import { FloatingContact } from "@/components/FloatingContact";
import { ScrollToTop } from "@/components/ScrollToTop";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
        <FloatingContact />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
