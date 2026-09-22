import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import NotFound from "./Pages/NotFound";
import "animate.css";
import Nav from "./components/Nav/Nav";
import AVGInternship from "./Pages/Internships/AfroVision/AfrovisionInternship";
import CSKYInternship from "./Pages/Internships/CSKY/CSKYInternship";
import MyInternships from "./Pages/Internships/MyInternships";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ScrollToTop } from "./components/common/ScrollToTop";

const routeTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/contact": "Contact",
  "/internships": "Internships",
  "/internships/afrovision": "AfroVision Internship",
  "/internships/csky": "CSKY Telecom Internship",
};

const TitleManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = routeTitles[pathname];
    if (!title) {
      const match = pathname.match(/^\/project\/(.+)/);
      title = match ? `Case Study ${match[1]}` : "Not Found";
    }
    document.title = `${title} | Ojage Salathiel Ayuk`;
  }, [pathname]);

  return null;
};

// Layout component for pages that need the Navbar
const NavLayout = () => (
  <>
    <Nav />
    <Outlet />
  </>
);

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <TitleManager />
        <Routes>
          {isLoading ? (
            <Route path="*" element={<Loader />} />
          ) : (
            <>
              <Route element={<NavLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project/:id" element={<Project />} />
                <Route path="/contact" element={<Contact />} />

                {/* Internship routes */}
                <Route path="/internships">
                  <Route index element={<MyInternships />} />
                  <Route path="afrovision" element={<AVGInternship />} />
                  <Route path="csky" element={<CSKYInternship />} />
                </Route>

                {/* 404 catch-all */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </>
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;