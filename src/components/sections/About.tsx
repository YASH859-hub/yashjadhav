import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { profile } from '../../data/profile';

function CharacterReveal({ text, progress }: { text: string, progress: MotionValue<number> }) {
  const characters = text.split("");
  
  return (
    <p className="text-2xl md:text-5xl lg:text-6xl font-light tracking-wide leading-tight md:leading-snug text-center max-w-5xl mx-auto uppercase">
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(progress, [start, end], [0.2, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}

// Decorative SVGs
const MathVisual = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" className="opacity-50">
    <path d="M10 50 Q 30 10, 50 50 T 90 50" stroke="#BBCCD7" strokeWidth="2" fill="none" />
    <circle cx="50" cy="50" r="4" fill="#646973" />
    <path d="M10 90 L 90 10" stroke="#646973" strokeWidth="1" strokeDasharray="4 4" />
  </svg>
);

const TerminalVisual = () => (
  <svg width="70" height="50" viewBox="0 0 100 70" fill="none" className="opacity-50">
    <rect x="0" y="0" width="100" height="70" rx="4" stroke="#646973" strokeWidth="2" />
    <path d="M10 20 L 30 35 L 10 50" stroke="#BBCCD7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="40" y1="50" x2="60" y2="50" stroke="#BBCCD7" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const NeuralVisual = () => (
  <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="opacity-50">
    <circle cx="10" cy="20" r="4" fill="#BBCCD7" />
    <circle cx="10" cy="60" r="4" fill="#BBCCD7" />
    <circle cx="30" cy="40" r="4" fill="#646973" />
    <circle cx="50" cy="20" r="4" fill="#BBCCD7" />
    <circle cx="50" cy="60" r="4" fill="#BBCCD7" />
    <path d="M14 20 L 26 38 M 14 60 L 26 42 M 34 42 L 46 60 M 34 38 L 46 20" stroke="#646973" strokeWidth="1" />
  </svg>
);

const GraphVisual = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" className="opacity-50">
    <rect x="40" y="10" width="20" height="20" rx="2" stroke="#BBCCD7" strokeWidth="2" />
    <rect x="10" y="70" width="20" height="20" rx="2" stroke="#646973" strokeWidth="2" />
    <rect x="70" y="70" width="20" height="20" rx="2" stroke="#646973" strokeWidth="2" />
    <path d="M50 30 L 50 50 L 20 50 L 20 70 M 50 50 L 80 50 L 80 70" stroke="#646973" strokeWidth="2" strokeLinejoin="round" fill="none" />
  </svg>
);

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"]
  });

  return (
    <section ref={containerRef} id="about" className="relative w-full py-32 md:py-48 px-6 md:px-12 bg-[#0C0C0C]">
      
      {/* Decorative Assets */}
      <motion.div 
        initial={{ opacity: 0, x: -30, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:block absolute top-24 left-24"
      >
        <MathVisual />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -30, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:block absolute bottom-24 left-24"
      >
        <TerminalVisual />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:block absolute top-24 right-24"
      >
        <NeuralVisual />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30, y: 30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="hidden md:block absolute bottom-24 right-24"
      >
        <GraphVisual />
      </motion.div>

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-medium tracking-tight uppercase text-gradient mb-12 md:mb-24 text-center">
          About Me
        </h2>
        
        <CharacterReveal text={profile.about} progress={scrollYProgress} />
      </div>
    </section>
  );
}
