import { skills } from '../../data/profile';

export default function Engineering() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-12 bg-[#0C0C0C]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">
        
        <div className="w-full md:w-1/3 shrink-0">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight uppercase sticky top-32 text-gradient">
            Engineering
          </h2>
        </div>

        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="flex flex-col gap-6">
              <h3 className="text-sm tracking-[0.2em] uppercase text-white/40 border-b border-white/10 pb-4">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((skill, i) => (
                  <li key={i} className="text-lg md:text-xl font-light text-white/80 tracking-wide">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
