import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Smart AI Email Assistant',
      description:
        'AI assistant that crafts personalized replies by analyzing email content. Built with React and Spring Boot, powered by Gemini API for intelligent context handling.',
      technologies: ['React + Vite', 'Spring Boot', 'Axios', 'Gemini API', 'Chrome Extension'],
      imageUrl:
        'https://ik.imagekit.io/sv5x3c7qr/Screenshot%202025-03-29%20203616.png?updatedAt=1743260846327',
      githubUrl: 'https://github.com/Abhinaytechie/Smart-Ai-Email-Assistant',
      liveUrl: 'https://smart-email-assistant.netlify.app/',
    },
    {
      id: 2,
      title: 'Research AI',
      description:
        'An all-in-one AI platform to summarize research papers, extract insights, manage references, and accelerate academic productivity. Fully powered by Gemini API.',
      technologies: ['React + Vite', 'Spring Boot', 'Gemini API', 'MongoDB'],
      imageUrl:
        'https://ik.imagekit.io/sv5x3c7qr/Screenshot%202025-05-25%20204816.png?updatedAt=1748362771094',
      githubUrl: 'https://github.com/Abhinaytechie/ResearchAi',
      liveUrl: 'https://smart-research-ai.vercel.app/',
    },
    {
      id: 3,
      title: 'Code Commentor',
      description:
        'An AI-powered tool that generates meaningful code comments using NLP & transformer models. Integrated with GitHub for seamless usage & better documentation.',
      technologies: ['Python', 'NLP', 'Transformers', 'Flask', 'Gemini API'],
      imageUrl:
        'https://ik.imagekit.io/sv5x3c7qr/Screenshot%202025-05-27%20222046.png?updatedAt=1748364671023',
      githubUrl: 'https://github.com/Abhinaytechie/Code-Commentor',
      liveUrl: '',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a1033] pt-24 pb-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          🚀 Featured Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-purple-500/20 bg-white/5 backdrop-blur-lg hover:shadow-2xl transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-purple-300 mb-3">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-800/30 text-purple-200 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
