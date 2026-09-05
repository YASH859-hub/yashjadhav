import { now } from '../data/now';
import Layout from '../components/Layout';

export default function Now() {
  return (
    <Layout>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight uppercase text-gradient mb-8">
          Now
        </h1>
        <p className="text-xl text-white/50 tracking-wide font-light mb-24 max-w-2xl uppercase">
          What I'm currently focused on.
        </p>

        <div className="flex flex-col gap-24">
          {Object.entries(now).map(([category, items]) => (
            <div key={category} className="flex flex-col md:flex-row gap-8 md:gap-24 border-t border-white/10 pt-12">
              <h2 className="w-full md:w-1/4 text-sm tracking-[0.2em] uppercase text-white/40 shrink-0">
                Currently {category}
              </h2>
              <div className="w-full md:w-3/4 flex flex-wrap gap-4">
                {items.map((item, i) => (
                  <span key={i} className="px-6 py-3 border border-white/10 rounded-full text-white/80 tracking-widest uppercase hover:bg-white/5 transition-colors text-sm md:text-base">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
