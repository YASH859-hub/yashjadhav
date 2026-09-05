import { profile } from '../data/profile';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 md:px-12 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl md:text-4xl font-light tracking-wide uppercase text-gradient">
            {profile.name}
          </h3>
          <p className="text-white/50 text-sm uppercase tracking-widest">
            {profile.roles.join(" • ")}
          </p>
        </div>
        
        <div className="flex flex-col md:items-end gap-8">
          <div className="flex flex-wrap gap-6 md:gap-8 text-sm uppercase tracking-widest font-light">
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#BBCCD7] transition-colors">GitHub</a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#BBCCD7] transition-colors">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="hover:text-[#BBCCD7] transition-colors">Email</a>
            <Link to="/resume" className="hover:text-[#BBCCD7] transition-colors">Resume</Link>
          </div>
          
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
