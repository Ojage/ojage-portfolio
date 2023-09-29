import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Project from "./components/sections/Project";
import Contact from "./components/sections/Contact";
import "animate.css";
import Nav from "./components/Navbar";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed
  }, []);

  return (
    <>
      <Router>
        <Routes>
          {isLoading ? (
            // Display the Loader while loading
            <Route path="/" element={<Loader />} />
          ) : (
            // Render your components once loading is complete
            <>
              <Route path="/" element={(<><Nav /><Home /></>)} />
              <Route path="/about" element={<About />} />
              <Route path="/project/:id" element={<><Nav /><Project /></>} />
              <Route path="/contact" element={<Contact />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
};

export default App;
