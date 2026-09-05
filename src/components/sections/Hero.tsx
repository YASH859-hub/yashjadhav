import { profile } from '../../data/profile';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

// Abstract Engineering Visual Component
function ComputationalSystem() {
  return (
    <div className="relative w-full h-[60vh] max-h-[600px] flex items-center justify-center pointer-events-none opacity-20">
      <svg className="w-full h-full max-w-3xl opacity-80" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.g 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
        >
          {/* Grid lines / Architecture base */}
          <path d="M100,300 L900,300" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
          <path d="M500,100 L500,500" stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1" />
          
          {/* Orbital rings - representing model layers / data flows */}
          <motion.ellipse 
            cx="500" cy="300" rx="350" ry="120" 
            stroke="url(#silverGradient)" strokeWidth="1" strokeOpacity="0.3"
            animate={{ rotateZ: [0, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ originX: "500px", originY: "300px" }}
          />
          <motion.ellipse 
            cx="500" cy="300" rx="200" ry="250" 
            stroke="url(#silverGradient)" strokeWidth="1" strokeOpacity="0.15"
            animate={{ rotateZ: [360, 0] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            style={{ originX: "500px", originY: "300px" }}
          />
          
          {/* Nodes - representing neural architecture */}
          {[
            { cx: 300, cy: 200, delay: 0 },
            { cx: 700, cy: 400, delay: 0.5 },
            { cx: 400, cy: 450, delay: 1 },
            { cx: 650, cy: 150, delay: 1.5 },
            { cx: 500, cy: 300, delay: 2, r: 8 },
            { cx: 200, cy: 350, delay: 2.5 },
            { cx: 800, cy: 250, delay: 3 }
          ].map((node, i) => (
            <motion.g key={i}>
              <motion.circle 
                cx={node.cx} cy={node.cy} r={node.r || 3} 
                fill="#BBCCD7"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1] 
                }}
                transition={{ duration: 3, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
              />
              <path 
                d={`M${500},${300} L${node.cx},${node.cy}`} 
                stroke="#646973" strokeWidth="1" strokeOpacity="0.2" 
                strokeDasharray="4 4"
              />
            </motion.g>
          ))}
          
          {/* Code fragments / data packets flying along paths */}
          <motion.circle 
            cx="150" cy="300" r="2" fill="#FFFFFF"
            animate={{ cx: [150, 850], opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle 
            cx="500" cy="100" r="2" fill="#FFFFFF"
            animate={{ cy: [100, 500], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* Definitions */}
          <defs>
            <linearGradient id="silverGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#646973" />
              <stop offset="100%" stopColor="#BBCCD7" />
            </linearGradient>
          </defs>
        </motion.g>
      </svg>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] flex flex-col justify-between pt-32 pb-8 px-6 md:px-12 overflow-hidden">
      
      {/* Background Visual */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <ComputationalSystem />
        <div className='absolute top-20 left-10 md:top-32 md:left-20 opacity-30 text-[9px] font-mono tracking-tighter text-left text-[#888]'>
          [SYSTEM_INIT] <br/> LAYER_01: INPUT_TENSOR <br/> LAYER_02: TRANSFORMER_BLK <br/> STATUS: OPTIMIZING_WEIGHTS
        </div>
        <div className='absolute bottom-40 right-10 md:bottom-52 md:right-20 opacity-30 text-[9px] font-mono tracking-tighter text-right text-[#888]'>
          LOSS: 0.0024 <br/> EPOCH: 844/1000 <br/> LR: 1e-4 <br/> MASKED_LANGUAGE_MODELING
        </div>
      </motion.div>

      {/* Main Heading */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-[10vh]">
        <motion.h1 
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[12vw] md:text-[140px] leading-[0.85] font-black tracking-tighter uppercase text-gradient mb-6"
        >
          {profile.heroText}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="max-w-xl text-[#888] text-sm uppercase tracking-[0.3em] font-medium leading-relaxed"
        >
          {profile.heroSubtext}
        </motion.p>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 pt-12 pb-4"
      >
        <div className="flex flex-col gap-1 text-center md:text-left items-center md:items-start">
          <span className="text-[10px] tracking-[0.4em] text-[#646973] uppercase">Core Specialization</span>
          <div className="text-xs font-semibold tracking-widest text-[#BBCCD7] uppercase">
            {profile.roles.join(" • ")}
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="hidden md:flex gap-6 items-center border-l border-[#333] pl-12 h-8">
            <div className="flex flex-col items-end">
              <span className="text-[9px] text-[#646973] uppercase tracking-widest">Current Focus</span>
              <span className="text-[10px] text-white uppercase font-bold tracking-widest">LLM Reasoning Systems</span>
            </div>
          </div>
          <Link 
            to="/contact"
            className="px-8 py-3 rounded-full border border-[#333] bg-transparent text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
