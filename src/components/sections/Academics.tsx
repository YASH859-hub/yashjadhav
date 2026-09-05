import { academics } from '../../data/experience';

export default function Academics() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-12 bg-[#0C0C0C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase text-gradient mb-16 text-center">
          Academic Trajectory
        </h2>

        <div className="flex flex-col items-center gap-4 mb-24 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white/90 uppercase tracking-wide">
            {academics.degree}
          </h3>
          <p className="text-white/50 tracking-widest uppercase text-sm">
            {academics.university} • Expected {academics.expectedGraduation}
          </p>
        </div>

        {/* Visual Progression */}
        <div className="w-full max-w-5xl relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-4 relative z-10">
            {academics.semesters.map((sem, i) => (
              <div key={i} className="flex flex-col items-center gap-6 group">
                <span className="text-xs tracking-widest text-white/40 uppercase">
                  {sem.sem}
                </span>
                
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 bg-[#111] flex flex-col items-center justify-center gap-1 group-hover:border-white/50 group-hover:bg-white/5 transition-all duration-500 relative">
                  <div className="absolute inset-2 rounded-full border border-white/5 group-hover:rotate-180 transition-transform duration-1000 border-t-white/30" />
                  <span className="text-2xl md:text-3xl font-light text-white">{sem.sgpa}</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/30">SGPA</span>
                </div>
                
                <span className="text-sm tracking-widest text-white/60">
                  Grade {sem.grade}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
