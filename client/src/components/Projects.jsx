import { motion } from 'framer-motion';
import useProjects from '../hooks/useProjects';
import ProjectCard from './ProjectCard';

// fallback data so UI looks good even before you add real projects to MongoDB
const demoProjects = [
   {
    _id: '1',
    title: 'Modern Login UI',
    description: 'Responsive split-screen layout with modern gradient design and Interactive Sign In / Sign Up interface',
    techStack: ['HTML5', 'CSS3'],
    githubUrl: 'https://github.com/Vasantha06/modern-login-page.git',
    liveUrl:   'https://modern-ui-login-page.netlify.app/',
    imageUrl: '/images/image-1.png',
  },
  {
    _id: '2',
    title: 'Rich Text Editor',
    description: 'A modern and interactive Rich Text Editor with real-time text formatting features built using HTML,CSS and Javascript',
    techStack: ['HTML5', 'CSS3', 'Javascript'],
    githubUrl: 'https://github.com/Vasantha06/rich-text-editor-js.git',
    liveUrl:   'https://v-rich-text-editor.netlify.app/',
    imageUrl: '/images/image-2.png',
  },
  {
    _id: '3',
    title: 'Real-Time Object Detection App',
    description: 'A real-time object detection application built using React and AI-powered detection models to identify objects through live camera input',
    techStack: ['HTML5', 'CSS3', 'Javascript','React','TensorFlow.js','Redux'],
    githubUrl: 'https://github.com/Vasantha06/react-real-time-object-detection.git',
    liveUrl:   'https://react-real-time-object-detection.vercel.app/',
    imageUrl: '/images/image-3.png',
  },
  {
    _id: '4',
    title: 'React Memory Card Game',
    description: 'A Visually engaging memory card game built using React and Tailwind CSS with smooth animations and interactive gameplay mechanics',
    techStack: ['HTML5', 'CSS3', 'Javascript','React','TailwindCSS','Redux'],
    githubUrl: 'https://github.com/Vasantha06/memorycard-game-react-tailwindcss.git',
    liveUrl:   'https://v-memory-card-game.netlify.app/',
    imageUrl: '/images/image-4.png',
  },
  {
    _id: '5',
    title: 'Task Manager App',
    description: 'Full stack smart task management app with authentication, CRUD operations, and real-time updates.',
    techStack: ['HTML5','CSS3','Javascript','React','TailwindCSS','Redux','Nodejs', 'Express', 'MongoDB', 'JWT'],
    githubUrl: 'https://github.com/Vasantha06/task-manager-app.git',
    liveUrl:   'https://task-manager-app-1-ipqx.onrender.com',
    imageUrl: '/images/image-5.png',
  },
  {
    _id: '6',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with MERN stack. Features contact form, project showcase, and dark mode.',
    techStack: ['HTML5','CSS3','Javascript','React','TailwindCSS','Redux','Nodejs', 'Express', 'MongoDB', 'JWT','Framer Motion'],
    githubUrl: 'https://github.com/Vasantha06/personal-portfolio.git',
    liveUrl:   'https://personal-portfolio-iota-swart-99.vercel.app/',
    imageUrl: '/images/image-6.png',
  },
];

export default function Projects() {
  const { projects, loading, error } = useProjects();

  // use real data from MongoDB, fall back to demo if empty
  const displayProjects = (!loading && projects.length === 0) || error 
  ? demoProjects 
  : projects.length > 0 
  ? projects 
  : demoProjects;

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50 dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto gap-2">

        <motion.div className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold  text-gray-900 dark:text-white mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">Things I've built that I'm proud of</p>
        </motion.div>

       {loading && projects.length === 0 && (
  <div className="text-center text-gray-400 py-12">
    Loading projects...
  </div>
)}
{/* 
        {error && (
          <div className="text-center text-red-400 py-4 mb-8">
            {error} — showing demo projects
          </div>
        )} */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map(project => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}