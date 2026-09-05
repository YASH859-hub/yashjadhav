import { profile } from '../data/profile';
import { experience, academics, leadership, certifications } from '../data/experience';
import { skills } from '../data/profile';
import { projects } from '../data/projects';
import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <div className="pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-24 border-b border-white/10 pb-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight uppercase text-gradient mb-4">
              {profile.name}
            </h1>
            <p className="text-xl text-white/50 tracking-wide font-light uppercase">
              {profile.roles.join(" • ")}
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border-gradient font-light uppercase tracking-widest text-sm hover:bg-white/5 transition-colors">
            Download Resume
          </button>
        </div>

        <div className="flex flex-col gap-24">
          
          {/* Education */}
          <section className="flex flex-col gap-8">
            <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Education</h2>
            <div>
              <h3 className="text-2xl text-white/90 font-light tracking-wide uppercase">{academics.degree}</h3>
              <p className="text-white/50 tracking-widest uppercase text-sm mt-2">{academics.university} • Expected {academics.expectedGraduation}</p>
            </div>
          </section>

          {/* Experience */}
          <section className="flex flex-col gap-8">
            <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Experience</h2>
            <div className="flex flex-col gap-8">
              {experience.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-xl text-white/90 font-light tracking-wide uppercase">{item.role}</h3>
                    <span className="text-white/40 text-xs tracking-widest font-mono uppercase">{item.date}</span>
                  </div>
                  <span className="text-white/50 tracking-widest uppercase text-sm">{item.company}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section className="flex flex-col gap-8">
            <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Projects</h2>
            <div className="flex flex-col gap-12">
              {projects.map((project, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h3 className="text-xl text-white/90 font-light tracking-wide uppercase">{project.title}</h3>
                  <p className="text-white/70 font-light leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technology.map((tech, j) => (
                      <span key={j} className="px-2 py-1 bg-white/5 rounded text-xs text-white/60 tracking-wider">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="flex flex-col gap-8">
            <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="flex flex-col gap-4">
                  <h3 className="text-white/70 tracking-widest uppercase text-sm">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <p className="text-white/50 font-light">{items.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Certifications */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Leadership</h2>
              <div className="flex flex-col gap-6">
                {leadership.map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h3 className="text-white/90 font-light tracking-wide uppercase">{item.title}</h3>
                    <span className="text-white/50 tracking-widest uppercase text-sm">{item.organization}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <h2 className="text-sm tracking-[0.2em] uppercase text-white/40">Certifications</h2>
              <ul className="flex flex-col gap-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="text-white/70 font-light">{cert}</li>
                ))}
              </ul>
            </div>
          </section>

        </div>
      </div>
    </Layout>
  );
}
