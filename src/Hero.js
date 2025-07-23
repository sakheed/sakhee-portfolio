import React, { useState, useEffect } from "react";
import { Mail, Linkedin } from "lucide-react";
import headshot from "./images/headshot.jpg";

function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "AI Enthusiast",
    "Aspiring Product Manager",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sakhee
                </span>
              </h1>
              <div className="h-12 flex items-center flex-wrap">
                <span className="text-2xl text-gray-600">I'm a </span>
                <span className="text-2xl font-semibold text-blue-600 ml-2 min-w-max">
                  {roles[currentRole]}
                </span>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Passionate about building innovative solutions at the intersection
              of technology and business.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-medium"
              >
                View My Work
              </a>
              <a
                href="#about"
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium"
              >
                Learn More
              </a>
            </div>
            <div className="flex space-x-6">
              <a
                href="mailto:sakheed@udel.edu"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sakheedesai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] mx-auto bg-gradient-to-br from-blue-600 to-purple-600 rounded-full p-2">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[30rem] lg:h-[30rem] bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={headshot}
                    alt="Your Photo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
