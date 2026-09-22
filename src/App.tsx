import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Loader from "./components/Loader";
import "animate.css";
import Nav from "./components/Nav/Nav";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ReadingProgress } from "./components/About/ReadingProgress";
import { ScrollToTopFab } from "./components/common/ScrollToTopFab";

// Route chunks are code-split via React.lazy
const Home = lazy(() => import("./components/sections/Home"));
const About = lazy(() => import("./components/sections/About"));
const Project = lazy(() => import("./components/sections/Project"));
const Contact = lazy(() => import("./components/sections/Contact"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const AVGInternship = lazy(
  () => import("./Pages/Internships/AfroVision/AfrovisionInternship")
);
const CSKYInternship = lazy(
  () => import("./Pages/Internships/CSKY/CSKYInternship")
);
const MyInternships = lazy(() => import("./Pages/Internships/MyInternships"));

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

// Fallback shown while a route chunk is downloading
const RouteFallback: React.FC = () => (
  <Flex minH="100vh" align="center" justify="center">
    <Text
      fontSize="xl"
      fontWeight="bold"
      fontFamily="mono"
      color="#00ff88"
      animation="ps-caret 1.1s steps(1) infinite"
    >
      ▍
    </Text>
  </Flex>
);

// After a route transition finishes, move keyboard focus to the new page's
// main content and announce the page change to assistive tech.
const RouteAnnouncer: React.FC = () => {
  const { pathname } = useLocation();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    let clear: number | undefined;
    const t = window.setTimeout(() => {
      const main = document.getElementById('main-content');
      if (!main) return;
      main.focus({ preventScroll: true });
      setAnnouncement(`Navigated to ${document.title || pathname}`);
      clear = window.setTimeout(() => setAnnouncement(''), 2000);
    }, 480);
    return () => {
      window.clearTimeout(t);
      if (clear !== undefined) window.clearTimeout(clear);
    };
  }, [pathname]);

  return (
    <span role="status" aria-live="polite" className="sr-only">
      {announcement}
    </span>
  );
};

// Layout component for pages that need the Navbar
const NavLayout = () => (
  <>
    {/* Skip link so keyboard users can jump past the fixed nav */}
    <a className="skip-link" href="#main-content">
      Skip to content
    </a>
    <ReadingProgress />
    <Nav />
    <Box as="main" id="main-content" tabIndex={-1} outline="none">
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
    </Box>
    <ScrollToTopFab />
  </>
);

const AnimatedRoutes: React.FC<{ reduce: boolean }> = ({ reduce }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={reduce ? undefined : { opacity: 0, y: -14 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
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
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const reduce = useReducedMotion();

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
        <RouteAnnouncer />
        <Suspense fallback={<RouteFallback />}>
          {isLoading ? (
            <Routes>
              <Route path="*" element={<Loader />} />
            </Routes>
          ) : (
            <AnimatedRoutes reduce={!!reduce} />
          )}
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;