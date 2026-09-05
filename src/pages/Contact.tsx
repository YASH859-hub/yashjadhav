import { profile } from '../data/profile';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-6xl md:text-[10vw] font-medium tracking-tight uppercase text-gradient mb-8 leading-none">
          LET'S BUILD.
        </h1>
        <p className="text-xl md:text-3xl text-white/70 tracking-wide font-light mb-24 max-w-3xl uppercase leading-relaxed">
          Interested in AI, intelligent systems, research or building something meaningful?
        </p>

        <div className="flex flex-wrap gap-6">
          <a href={`mailto:${profile.email}`} className="px-8 py-4 rounded-full border-gradient font-light uppercase tracking-widest hover:bg-white/5 transition-colors">
            Email
          </a>
          <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-light uppercase tracking-widest">
            LinkedIn
          </a>
          <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-light uppercase tracking-widest">
            GitHub
          </a>
          <a href="/resume" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-light uppercase tracking-widest">
            Resume
          </a>
        </div>
      </div>
    </Layout>
  );
}
