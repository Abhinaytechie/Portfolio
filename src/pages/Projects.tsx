import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart AI Email Assistant",
      description: "An AI-powered email assistant that helps generate smart replies based on email content. Built with React, Vite, and Spring Boot.",
      technologies: ["React", "Vite", "Spring Boot", "Axios","Gemini Api"],
      imageUrl: "https://ik.imagekit.io/sv5x3c7qr/Screenshot%202025-03-29%20203616.png?updatedAt=1743260846327",
      githubUrl: "https://github.com/Abhinaytechie/Smart-Ai-Email-Assistant",
      liveUrl: "https://smart-email-assistant.netlify.app/"
    },
    {
      id: 2,
      title: 'Smart Research Assistant Chrome Extension',
      description: 'A Chrome extension that summarizes academic papers and answers user queries using AI. It integrates React with a powerful Spring Boot backend, leveraging OpenAI, LangChain, Redis, and Elasticsearch for intelligent context-aware responses.',
      technologies: ['Javascript', 'Spring Boot', 'Gemini API', 'Chrome Extension'],
      imageUrl: 'https://ik.imagekit.io/sv5x3c7qr/re.webp?updatedAt=1743958808197',
      githubUrl: 'https://github.com/Abhinaytechie/Smart-Research-Assistant',
      
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-purple-400"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * (index + 1) }}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
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
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;