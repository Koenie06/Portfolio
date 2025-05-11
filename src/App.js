import React, { useState, useEffect, lazy, Suspense } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects.js";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./style.css";
import "./App.css";
import Particle from "./components/Particle";

const Footer = lazy(() => import('./components/Footer/Footer.js'));

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <Router>
            <Preloader load={load} />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Particle />
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                 </Routes>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
                <Footer /> 
            </Suspense>
        </Router>
        <Analytics />
        <SpeedInsights />
    </>
  );
};

export default App;
