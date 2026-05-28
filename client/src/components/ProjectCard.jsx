import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 
             rounded-xl overflow-hidden hover:border-primary 
             transition-all duration-300 flex flex-col"
      whileHover={{ y: -6 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>

      {/* Project image */}
      <div className="h-48 bg-gray-100 dark:bg-dark flex items-center justify-center 
                      border-b border-gray-200 dark:border-gray-800 overflow-hidden">
        {project.imageUrl
          ? <img src={project.imageUrl} alt={project.title}
              className="w-full h-full object-cover" />
          : <span className="text-6xl">🚀</span>
        }
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-gray-900 dark:text-white font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, i) => (
            <span key={i}
              className="text-xs px-2 py-1 bg-primary/10 text-primary 
                         border border-primary/30 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer"
              className="border border-gray-300 dark:border-gray-600 
              text-gray-600 dark:text-gray-300 py-2 rounded-lg text-sm 
              hover:border-primary hover:text-primary transition-colors">
              GitHub ↗
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer"
              className="border border-gray-300 dark:border-gray-600 
              text-gray-600 dark:text-gray-300 py-2 rounded-lg text-sm 
              hover:border-primary hover:text-primary transition-colors">
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}