import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 bg-transparent border-t border-accent/20 mt-16">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 mb-2 md:mb-0">
          <a href="#hero" className="text-accent hover:text-pink-500 font-medium transition-colors">Home</a>
          <a href="#about" className="text-accent hover:text-pink-500 font-medium transition-colors">About</a>
          <a href="#projects" className="text-accent hover:text-pink-500 font-medium transition-colors">Projects</a>
          <a href="#techstack" className="text-accent hover:text-pink-500 font-medium transition-colors">Tech Stack</a>
          <a href="#contact" className="text-accent hover:text-pink-500 font-medium transition-colors">Contact</a>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Abhinaytechie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-pink-500 text-xl transition-colors">
            <Github />
          </a>
          <a href="https://linkedin.com/in/abhinaytechie" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-pink-500 text-xl transition-colors">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-6">
        Built with React + Framer Motion • © 2025 Bondalapati BSA
      </div>
    </footer>
  );
} 