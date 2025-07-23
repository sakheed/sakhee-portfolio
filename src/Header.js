import React, { useState, useEffect } from 'react';


function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SD</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Sakhee Desai</h1>
              <p className="text-sm text-gray-600">Software Engineer</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Experience</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Projects</a>
            <a href="#resume" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">Resume</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;