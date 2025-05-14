import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
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

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Footer = lazy(() => import('./components/Footer/Footer.js'));
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

function App() {

  const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        updateLoad(false);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const main = useRef();

    useGSAP(
    () => {
        ScrollSmoother.create({
            smooth: 1.5,
            effects: false,
        });
    },
    { scope: main }
    );

  return (
    <>
        <div id="smooth-wrapper" ref={main}>
            <Navbar />
            <div id="smooth-content">
                <Router>
                    <Preloader load={load} />

                    <div className="App" id={load ? "no-scroll" : "scroll"}>
                        <Particle />
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
            </div>
        </div>
        <Analytics />
        <SpeedInsights />
    </>
  );
};

export default App;
