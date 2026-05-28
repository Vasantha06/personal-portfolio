import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profile from "../assets/profile.png";
// typing animation titles
const titles = [
  'Full Stack Developer',
  'MERN Stack Developer', 
  'React Developer',
  'Front-end Developer',
  'Back-end Developer',
  'Nodejs Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed]   = useState('');
  const [typing, setTyping]         = useState(true);

  // typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        // pause before deleting
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setTitleIndex((prev) => (prev + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIndex]);

  return (
    <section id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-white dark:bg-dark transition-colors duration-300">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
                      items-center justify-between gap-12 w-full">

        {/* Left: Text content */}
        <motion.div className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>

          <p className="text-primary font-medium mb-2 text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Vasantha
          </h1>
         

          {/* Typewriter */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-10">
            <span className="text-primary">{displayed}</span>
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            I build modern,responsive, and scalable web applications focused on clean UI and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => document.getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold
                         hover:bg-purple-700 transition-all duration-200 
                         hover:scale-105 active:scale-95">
              View My Work
            </button>

            <button
              onClick={() => document.getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-primary text-primary px-8 py-3 rounded-lg 
                         font-semibold hover:bg-primary hover:text-white 
                         transition-all duration-200 hover:scale-105 active:scale-95">
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-8">
            <a href="https://github.com/Vasantha06" target="_blank"
              rel="noreferrer"
              className="text-gray-400 dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/vasantha-m-7ba567297" target="_blank"
              rel="noreferrer"
              className="text-gray-400 dark:text-gray-400 hover:text-primary transition-colors text-sm font-medium">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        {/* Right: Avatar circle */}
        <motion.div className="shrink-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed 
                            border-primary animate-spin" 
                 style={{ animationDuration: '10s' }} />
            
            {/* Profile image */}
            <div className="absolute inset-4 rounded-full bg-card 
                            border-2 border-primary overflow-hidden
                            flex items-center justify-center">
              {/* Replace src with your actual photo */}
              {/* {<span className="text-8xl">👨‍💻</span>} */}
               <img src={profile} alt="Profile" 
                      className="w-full h-full object-cover" /> 
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}