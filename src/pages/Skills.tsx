import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code size={24} />,
      skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Spring Boot', 'Java', 'Python', 'SQL', 'REST APIs', 'MongoDB'],
    },
    {
      title: 'Tools & Others',
      icon: <Wrench size={24} />,
      skills: ['Git', 'Docker', 'AWS', 'IntelliJ'],
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-12 px-6 bg-[#1a1033]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
        >
          🛠️ Skills & Expertise
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              className="bg-white/5 backdrop-blur-md border border-purple-500/10 rounded-2xl p-6 shadow-xl hover:shadow-purple-800/40 transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6 text-purple-300">
                {category.icon}
                <h2 className="text-xl font-semibold">{category.title}</h2>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
