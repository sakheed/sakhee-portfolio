import React, { useEffect } from "react";
import "./index.css";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Resume from "./Resume";
import Footer from "./Footer";

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}


function App() {
  useEffect(() => {

      window.history.replaceState(null, null, window.location.pathname);

    
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute("href"));
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
