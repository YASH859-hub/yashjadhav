import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference"
    >
      <Link to="/" className="text-xs tracking-[0.4em] font-light text-[#888] uppercase hover:text-white transition-colors">
        Yash Jadhav
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.2em] font-medium uppercase text-[#E0E0E0]">
        <Link to="/#about" className="hover:text-white transition-colors">About</Link>
        <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
        <Link to="/engineering" className="hover:text-white transition-colors">Engineering</Link>
        <Link to="/research" className="hover:text-white transition-colors">Research</Link>
        <Link to="/writing" className="hover:text-white transition-colors">Writing</Link>
        <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        <Link to="/resume" className="text-[#646973] hover:text-white transition-colors">
          Resume
        </Link>
      </div>
      
      <div className="md:hidden">
        {/* Mobile menu could be implemented here */}
        <span className="text-xs uppercase tracking-widest opacity-50">Menu /</span>
      </div>
    </motion.nav>
  );
}
