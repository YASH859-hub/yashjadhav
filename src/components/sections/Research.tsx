import { researchInterests, researchNotes } from '../../data/research';

export default function Research() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-12 bg-[#0C0C0C] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="w-full md:w-1/3 shrink-0">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase text-gradient sticky top-32">
              Research
            </h2>
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-12">
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 mb-8">Interests</h3>
              <div className="flex flex-wrap gap-4">
                {researchInterests.map((interest, i) => (
                  <span key={i} className="px-4 py-2 border border-white/10 rounded-full text-white/70 text-sm tracking-widest uppercase hover:bg-white/5 transition-colors cursor-default">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research Notebook Interface */}
        <div className="w-full border border-white/10 rounded-3xl overflow-hidden bg-[#111]">
          <div className="w-full border-b border-white/10 p-4 bg-white/5 flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
          
          <div className="p-8 md:p-12 flex flex-col gap-12">
            {researchNotes.map((note, i) => (
              <div key={i} className="flex flex-col gap-8">
                <h4 className="text-2xl text-white/80 font-light">{note.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {Object.entries(note).filter(([k]) => k !== 'title').map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-2 border-l border-white/10 pl-4">
                      <span className="text-xs uppercase tracking-widest text-white/30">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-white/60 font-mono text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
