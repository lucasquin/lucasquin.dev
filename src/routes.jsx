import { createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";

export const routes = {
  home: "/",
  projects: "/projects",
  contact: "/contact",
  about: "/about",
};

export const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: routes.home || "*",
        element: <Home color={"var(--green)"} />,
      },
      {
        path: routes.contact,
        element: <Contact color={"var(--cyan)"} />,
      },
      {
        path: routes.about,
        element: <About color={"var(--violet)"} />,
      },
      {
        path: routes.projects,
        element: <Projects color={"var(--pink)"} />,
      },
    ],
  },
]);
