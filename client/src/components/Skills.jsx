import { motion } from 'framer-motion';

const skills = {
  Frontend:  ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Framer Motion'],
  Backend:   ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth','Next.js'],
  Database:  ['MongoDB', 'Mongoose', 'MySQL'],
  Tools:     ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel', 'Render','Netlify'],
};

const colors = {
  Frontend: 'bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-300 dark:border-purple-500/30',
  Backend:  'bg-green-100  dark:bg-green-500/10  text-green-600  dark:text-green-400  border-green-300  dark:border-green-500/30',
  Database: 'bg-blue-100   dark:bg-blue-500/10   text-blue-600   dark:text-blue-400   border-blue-300   dark:border-blue-500/30',
  Tools:    'bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-300 dark:border-orange-500/30',
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-card/30 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold  text-gray-900 dark:text-white mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div key={category}
              className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 rounded-xl p-6
                         hover:border-primary transition-colors duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}>

              <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-4">{category}</h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium 
                                border ${colors[category]}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.1 }}>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}