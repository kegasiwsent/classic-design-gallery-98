
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import ProjectDetail from "@/components/ProjectDetail";
import Projects from "@/pages/Projects";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background relative">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
