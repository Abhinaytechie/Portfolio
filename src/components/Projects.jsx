import { motion } from "framer-motion";
import { projects } from "../data/projects.js";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, type: "spring", stiffness: 60, damping: 12 },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4">
        {/* section title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-accent to-pink-500"
        >
          Projects
        </motion.h2>

        {/* timeline container */}
        <div className="relative border-l-2 border-accent/30 ml-6 md:ml-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="flex flex-col md:flex-row items-start md:items-center mb-20 last:mb-0 group relative"
            >
              {/* timeline badge */}
              <div className="absolute -left-8 md:-left-20 top-0 flex flex-col items-center">
                <span
                  className="bg-white text-accent font-bold px-4 py-2 rounded-full shadow-lg border-2 border-accent text-xs md:text-base tracking-widest uppercase mb-2"
                  style={{ fontFamily: "Ubuntu, sans-serif" }}
                >
                  {project.badge}
                </span>
                <span className="w-2 h-2 bg-accent rounded-full block" />
              </div>

              {/* card */}
              <div className="ml-8 md:ml-20 w-full md:w-4/5 bg-white/5 dark:bg-gray-900/60 rounded-2xl shadow-xl border border-accent/20 backdrop-blur-lg overflow-hidden transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-2xl relative">
                <div className="flex flex-col md:flex-row">
                  {/* cover image */}
                  <div className="relative w-full md:w-2/5 aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={`${project.title} cover`}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* content */}
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-accent mb-2"
                      style={{ fontFamily: "Ubuntu, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    {/* description (fade OUT on hover) */}
                    <p className="text-gray-300 mb-4 text-base md:text-lg transition-opacity duration-300 group-hover:opacity-0">
                      {project.description}
                    </p>

                    {/* button (always visible) */}
                    <a
                      href={project.caseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 mb-3 rounded-full bg-accent text-white font-semibold shadow hover:bg-pink-500 transition-colors duration-200 text-sm md:text-base"
                    >
                      View Case
                    </a>

                    {/* tech‑stack chips (fade IN on hover) */}
                    <ul className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.technologies?.map((tech) => (
                        <li
                          key={tech}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 border border-accent/40 text-accent"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
