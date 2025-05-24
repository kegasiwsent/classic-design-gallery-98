
import Index from "@/pages/Index";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Consultation from "@/pages/Consultation";
import ProjectDetail from "@/components/ProjectDetail";
import NotFound from "@/pages/NotFound";
import Kitchen from "@/pages/Kitchen";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import OngoingProjectDetail from "@/components/OngoingProjectDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      errorElement: <NotFound />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/projects",
      element: <Projects />,
    },
    {
      path: "/consultation",
      element: <Consultation />,
    },
    {
      path: "/project/:projectId",
      element: <ProjectDetail />,
    },
    {
      path: "/ongoing-project/:projectId",
      element: <OngoingProjectDetail />,
    },
    {
      path: "/kitchen",
      element: <Kitchen />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
