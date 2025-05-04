import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from '@vercel/analytics/react';
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particle from "./components/Particle";

function App() {

  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

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
                </Routes>
            </div>
            <Footer /> 
        </Router>
        <Analytics />
    </>
  );
};

export default App;
