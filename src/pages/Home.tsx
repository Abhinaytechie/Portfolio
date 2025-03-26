import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#1a1033] pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              Hey there!! 👋
            </h1>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              I'm Bhargava Sai Abhinay
            </h2>
            <div className="mb-8">
              <h3 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
                Full Stack Developer & AI Enthusiast
              </h3>
              <p className="text-gray-300 text-lg max-w-2xl">
                I build <span className="text-purple-400 font-semibold">scalable web apps</span>,  
                craft <span className="text-purple-400 font-semibold">AI-driven solutions</span>,  
                and solve complex problems with <span className="text-purple-400 font-semibold">Java, Python, and Spring Boot.</span>  
                Passionate about <span className="text-purple-400 font-semibold">innovation, efficiency, and user experience.</span>  
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://ik.imagekit.io/sv5x3c7qr/My%20Resume.pdf?updatedAt=1742833500517"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 rounded-full font-medium hover:bg-purple-700 transition-all duration-300"
                download
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>

              <a
                href="https://github.com/Abhinaytechie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 rounded-full font-medium hover:bg-gray-700 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhinaybondalapati/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full font-medium hover:bg-blue-700 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image with Reduced Size & Smooth Animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.img
              src="https://ik.imagekit.io/sv5x3c7qr/abhi2.jpg?updatedAt=1742832991823"
              alt="Profile"
              className="rounded-lg shadow-xl w-64 sm:w-72 backdrop-blur-md"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 12px 50px rgba(128, 0, 255, 0.6)",
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Home;
