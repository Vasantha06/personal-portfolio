import { useState, useEffect } from 'react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // detect scroll to add background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Projects', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 
      ${scrolled ? 'bg-dark/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <span className="text-2xl font-bold text-primary cursor-pointer"
          onClick={() => scrollTo('hero')}>
          &lt;Vasantha /&gt;
        </span>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link}
              onClick={() => scrollTo(link)}
              className="cursor-pointer text-gray-300 hover:text-primary 
                         transition-colors duration-200 font-medium">
              {link}
            </li>
          ))}
        </ul>

        {/* Right side: dark mode + resume */}
        <div className="hidden md:flex items-center gap-4">
          {/* Dark mode toggle */}
          <button onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:scale-110 transition-transform">
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Resume button */}
          <a href="/resume.pdf" download
            className="bg-primary text-white px-4 py-2 rounded-lg 
                       hover:bg-purple-700 transition-colors duration-200 font-medium">
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card px-6 pb-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <span key={link} onClick={() => scrollTo(link)}
              className="cursor-pointer text-gray-300 hover:text-primary 
                         transition-colors py-2 border-b border-gray-800">
              {link}
            </span>
          ))}
          <a href="resume.pdf" download
            className="bg-primary text-white px-4 py-2 rounded-lg text-center">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}