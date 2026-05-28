import { motion } from 'framer-motion';

const facts = [
  { icon: '🎓', label: 'Education',  value: 'B.Sc Computer Science' },
  { icon: '📍', label: 'Location',   value: 'Tirunelveli, India' },
  { icon: '💼', label: 'Available',  value: 'Open to Opportunities' },
  { icon: '⚡', label: 'Interests',  value: 'Coding, Music, Travel' },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-50 dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto gap-2">

        {/* Section heading */}
        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold  text-gray-900 dark:text-white mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left: Bio */}
          <motion.div className="flex-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
              Hi! I'm a passionate Full Stack Developer who loves turning ideas 
              into real web applications. I enjoy working across the entire stack — 
              from designing clean UIs to building robust APIs.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a fresher actively looking for opportunities where I can 
              contribute, grow, and continue learning. I believe in writing 
              clean, maintainable code and building things that actually help people.
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/Vasantha06" target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-lg 
                           hover:bg-purple-700 transition-colors font-medium">
                GitHub
              </a>
              <a href="https://linkedin.com/in/vasantha-m-7ba567297" target="_blank"
                rel="noreferrer"
                className="border border-primary text-primary px-6 py-2 rounded-lg 
                           hover:bg-primary hover:text-white transition-colors font-medium">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right: Fact cards */}
          <motion.div className="flex-1 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            {facts.map((fact, i) => (
              <motion.div key={i}
                className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 
             rounded-xl p-5 hover:border-primary transition-colors duration-300"
                whileHover={{ scale: 1.03 }}>
                <span className="text-3xl">{fact.icon}</span>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{fact.label}</p>
                <p className="text-gray-900 dark:text-white font-semibold mt-1">{fact.value}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}