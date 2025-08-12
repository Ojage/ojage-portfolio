import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import "animate.css";
import Nav from "./components/Navbar";
import AVGInternship from "./Pages/Internships/AfroVision/AfrovisionInternship";
// import TechCorpInternship from "./Pages/Internships/TechCorp/TechCorpInternship";
// import DesignHubInternship from "./Pages/Internships/DesignHub/DesignHubInternship";
import MyInternships from "./Pages/Internships/MyInternships";

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
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
  <Routes>
    {isLoading ? (
      <Route path="*" element={<Loader />} />
    ) : (
      <Route element={<NavLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Internship routes */}
        <Route path="/internships">
          <Route index element={<MyInternships />} />
          <Route path="afrovision" element={<AVGInternship />} />
          <Route path="test" element={<div>Test Route Working</div>} />
        </Route>
      </Route>
    )}
  </Routes>
</Router>
  );
};

export default App;