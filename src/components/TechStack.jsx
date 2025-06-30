import { motion } from "framer-motion";
import {
  FaReact,
  FaJava,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiFastapi,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiFramer,
  SiDocker,
  SiGit,
  SiIntellijidea,
  SiN8N,
} from "react-icons/si";

/* ─────────── tech grouped by category ─────────── */
const techSections = [
  {
    title: "Frontend",
    techs: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "HTML5" },
      { icon: <FaCss3Alt />, name: "CSS3" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiFramer />, name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & AI",
    techs: [
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiLangchain />, name: "LangChain" },
    ],
  },
  {
    title: "Databases & Cache",
    techs: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiRedis />, name: "Redis" },
    ],
  },
  {
    title: "DevOps & Tools",
    techs: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <FaAws />, name: "AWS" },
      { icon: <SiGit />, name: "Git" },
      { icon: <SiIntellijidea />, name: "IntelliJ IDEA" },
      { icon: <SiN8N />, name: "n8n / FlowForge" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        {/* section heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center 
                     text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#FFA54D] to-[var(--color-primary)] mb-20"
        >
          ⚙️ My Tech Stack
        </motion.h2>

        {/* categories */}
        <div className="space-y-20">
          {techSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="text-center"
            >
              {/* category label with subtle orange bar */}
              <h3 className="inline-block px-4 py-1 mb-8 text-sm md:text-base font-semibold 
                             tracking-wide uppercase 
                             text-[var(--color-primary)] 
                             border border-[var(--color-primary)] rounded-full bg-[var(--color-primary)]/10">
                {section.title}
              </h3>

              {/* tech grid */}
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 place-items-center">
                {section.techs.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.12, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-24 h-24 flex flex-col items-center justify-center 
                               rounded-xl border border-[var(--color-border)] 
                               bg-white/5 backdrop-blur 
                               text-[var(--color-primary)] 
                               shadow-[0_2px_10px_rgba(255,124,0,0.1)] 
                               transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl">{tech.icon}</div>
                    <span className="text-xs mt-2 text-gray-400 font-medium">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
