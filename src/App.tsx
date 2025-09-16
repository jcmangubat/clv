import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Solutions from "@/pages/Solutions";
import Partners from "@/pages/Partners";
import Insights from "@/pages/Insights";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import KonsultaPage from "./pages/PhilHealthKonsultaPage";
import LingapPage from "./pages/LingapPage";
import TeamPage from "./pages/TeamPage";
import AccreditationsPage from "./pages/AccreditationsPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/solutions" element={<Solutions />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/community/lingap" element={<LingapPage />} />
                <Route path="/community/konsulta" element={<KonsultaPage />} />
                <Route path="/certificates" element={<AccreditationsPage />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
            <Toaster />
          </Router>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
