import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { projects } from '../../data/projects';

function ProjectCard({ project, index, progress, targetScale }: any) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, [index * 0.25, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-10% + ${index * 40}px)` }}
        className="w-full max-w-6xl h-[80vh] bg-[#111] rounded-3xl border border-white/10 p-6 md:p-12 flex flex-col justify-between relative transform-gpu"
      >
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <span className="text-white/40 text-sm tracking-widest uppercase">{project.category}</span>
            <h3 className="text-3xl md:text-5xl font-medium text-gradient uppercase max-w-xl">{project.title}</h3>
          </div>
          <span className="text-4xl md:text-6xl font-light text-white/10">{project.id}</span>
        </div>

        <div className="flex-1 w-full mt-8 flex flex-col md:flex-row gap-6 overflow-hidden">
          {/* Main Visual Area */}
          <div className="flex-1 h-full rounded-2xl bg-black/50 border border-white/5 relative overflow-hidden flex items-center justify-center group">
            <motion.div style={{ scale: imageScale }} className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BBCCD7]/20 via-[#0C0C0C] to-[#0C0C0C]" />
            <div className="relative z-10 flex flex-col items-center gap-2 text-white/30 uppercase text-xs tracking-widest font-mono">
              {project.architecture.map((step: string, i: number) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span className="px-3 py-1 border border-white/10 rounded">{step}</span>
                  {i < project.architecture.length - 1 && <span>↓</span>}
                </div>
              ))}
            </div>
          </div>
          
          {/* Side Visuals / Tech Stack */}
          <div className="w-full md:w-1/3 h-full flex flex-col gap-6">
            <div className="h-1/2 rounded-2xl bg-black/50 border border-white/5 p-6 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/40">Description</span>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">{project.description}</p>
            </div>
            <div className="h-1/2 rounded-2xl bg-black/50 border border-white/5 p-6 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-white/40">Technologies</span>
              <div className="flex flex-wrap gap-2">
                {project.technology.map((tech: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <div className="hidden md:flex gap-4 text-xs text-white/30 uppercase tracking-widest">
            {project.sections.slice(0, 4).map((s: string) => <span key={s}>{s}</span>)}
          </div>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-widest font-medium"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsList() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section className="relative w-full bg-[#0C0C0C] rounded-t-[3rem] md:rounded-t-[4rem] mt-[-2rem] z-30 pt-24 md:pt-40 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <h2 className="text-5xl md:text-8xl font-medium tracking-tight uppercase text-gradient mb-24 text-center">
          Projects
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full px-6 md:px-12" style={{ height: `${projects.length * 100}vh` }}>
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={i} 
              progress={scrollYProgress} 
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
