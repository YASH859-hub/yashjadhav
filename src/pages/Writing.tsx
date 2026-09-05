import { writingTopics } from '../data/writing';
import Layout from '../components/Layout';

export default function Writing() {
  return (
    <Layout>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight uppercase text-gradient mb-8">
          Writing
        </h1>
        <p className="text-xl text-white/50 tracking-wide font-light mb-24 max-w-2xl uppercase">
          Future content ideas, notes, and essays on machine learning, systems engineering, and research.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {writingTopics.map((topic, i) => (
            <div key={i} className="p-8 border border-white/10 bg-[#111] rounded-3xl group hover:border-white/30 transition-colors cursor-default">
              <span className="text-xs tracking-widest uppercase text-white/30 block mb-4">Draft</span>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 group-hover:text-white transition-colors">
                {topic}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
