import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import TypingText from "./TypingText";

const Stars = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1 + 0.2,
      d: Math.random() * 0.015 + 0.005,
    }));

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const animate = () => {
      frame += 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s, i) => {
        const y = (s.y + Math.sin(frame * s.d + i)) % canvas.height;
        ctx.beginPath();
        ctx.arc(s.x, y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener("resize", resize);
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 -z-10 pointer-events-none" />;
};

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mouseX.set(e.clientX / innerWidth);
    mouseY.set(e.clientY / innerHeight);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bg"
    >
      <Stars />
      <FloatingShapes />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        style={{ perspective: 1200 }}
        className="z-10 flex flex-col items-center gap-6 px-4 text-center"
      >
        <motion.h1
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-primary font-sans"
        >
          Bondalapati Bhargava Sai Abhinay
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl text-muted font-medium"
        >
          AI‑Integrated Full‑Stack Developer
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4 }}
        >
          <TypingText
            texts={[
              "AI‑Powered Backend Engineering",
              "Spring Boot • React • LangChain",
              "Gemini API • OpenAI • RAG Systems",
              "Automation with n8n & Make.com",
              "MongoDB • MySQL • Redis",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="flex gap-6 mt-4"
        >
          <ScrollLink
  to="projects"
  smooth
  duration={600}
  offset={-64}
  className="px-6 py-3 rounded-full text-sm md:text-base font-semibold text-white 
             bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 
             shadow-lg shadow-pink-500/30
             hover:scale-[1.05] transform transition-all duration-300
             hover:shadow-xl hover:shadow-pink-500/50"
>
  🚀 View Projects
</ScrollLink>


          <a
            href="https://ik.imagekit.io/sv5x3c7qr/Abhinay_Resume.pdf?updatedAt=1743960788994"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full text-sm md:text-base font-semibold text-primary border border-primary hover:bg-primary hover:text-white transition"
          >
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/15 rounded-full blur-2xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-28 h-28 bg-white/10 rounded-full blur-2xl"
        animate={{ x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
    </>
  );
}
