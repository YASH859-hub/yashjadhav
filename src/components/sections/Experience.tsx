import { experience, leadership, certifications } from '../../data/experience';

export default function Experience() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-12 bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="w-full md:w-1/3 shrink-0">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase text-gradient sticky top-32">
            Experience
          </h2>
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-24">
          
          {/* Work Experience */}
          <div className="flex flex-col gap-12">
            {experience.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 group">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-2xl font-light tracking-wide uppercase text-white/90 group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-white/50 tracking-widest uppercase text-sm">
                    {item.company}
                  </span>
                </div>
                <div className="text-white/30 text-xs tracking-widest font-mono uppercase whitespace-nowrap">
                  {item.date}
                </div>
              </div>
            ))}
          </div>

          {/* Leadership */}
          <div className="flex flex-col gap-12 pt-12 border-t border-white/10">
            <h3 className="text-sm tracking-[0.2em] uppercase text-white/40">Leadership</h3>
            {leadership.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <h4 className="text-xl md:text-2xl font-light tracking-wide uppercase text-white/90">
                  {item.title}
                </h4>
                <span className="text-white/50 tracking-widest uppercase text-sm">
                  {item.organization}
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.focus.map((f, j) => (
                    <span key={j} className="px-3 py-1 bg-white/5 rounded text-xs text-white/60 tracking-wider">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/10">
            <h3 className="text-sm tracking-[0.2em] uppercase text-white/40">Certifications</h3>
            <ul className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <li key={i} className="text-white/70 font-light tracking-wide border-l border-white/20 pl-4">
                  {cert}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
