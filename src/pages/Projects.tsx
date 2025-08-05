import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import type { Project } from '../types';
import { useRef } from 'react';
import { useMotionValue, useTransform } from 'framer-motion';

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Smart AI Email Assistant',
      description:
        'AI assistant that crafts personalized replies by analyzing email content. Built with React and Spring Boot, powered by Gemini API for intelligent context handling.',
      technologies: ['React + Vite', 'Spring Boot', 'Axios', 'Gemini API', 'Chrome Extension'],
      imageUrl:
        'https://ik.imagekit.io/sv5x3c7qr/AI-Email-Assistant-2.png?updatedAt=1754388884790',
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

  // 3D tilt effect helper
  function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [8, -8]);
    const rotateY = useTransform(x, [0, 1], [-8, 8]);
    return (
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY }}
        onMouseMove={e => {
          const rect = ref.current?.getBoundingClientRect();
          if (!rect) return;
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          x.set(px);
          y.set(py);
        }}
        onMouseLeave={() => {
          x.set(0.5);
          y.set(0.5);
        }}
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{ rotateX: 0, rotateY: 0 }}
        className="group rounded-2xl overflow-hidden border border-accent/40 bg-white/5 backdrop-blur-lg shadow-[0_0_32px_4px_#a259ff33] hover:shadow-accent/40 transition duration-300"
      >
        {children}
      </motion.div>
    );
  }

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
          className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500"
        >
          🚀 Featured Projects
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { y: 60, opacity: 0, scale: 0.95 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.6 } },
              }}
            >
              <TiltCard>
                <div className="relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-accent/80 bg-blur flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  >
                    <div className="flex gap-4 mb-2">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale: 1.2 }} className="p-2 rounded-full bg-white/10 text-white hover:bg-accent">
                            <Github size={24} />
                          </motion.div>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <motion.div whileHover={{ scale: 1.2 }} className="p-2 rounded-full bg-white/10 text-white hover:bg-accent">
                            <ExternalLink size={24} />
                          </motion.div>
                        </a>
                      )}
                    </div>
                    <div className="text-white text-lg font-bold text-center drop-shadow-glow">
                      {project.title}
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-accent mb-3">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-accent/20 text-accent text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
