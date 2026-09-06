import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['About', '/#about'],
  ['Projects', '/projects'],
  ['Engineering', '/engineering'],
  ['Research', '/research'],
  ['Writing', '/writing'],
  ['Contact', '/contact'],
  ['Resume', '/resume'],
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-8 md:py-8 flex justify-between items-center mix-blend-difference"
      >
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xs tracking-[0.4em] font-light text-[#888] uppercase hover:text-white transition-colors">
          Yash Jadhav
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.2em] font-medium uppercase text-[#E0E0E0]">
          {links.map(([label, path]) => <Link key={path} to={path} className="hover:text-white transition-colors">{label}</Link>)}
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="md:hidden p-2 -mr-2 text-white/80 hover:text-white transition-colors"
        >
          {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 border-y border-white/10 bg-[#0C0C0C]/95 px-6 py-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm tracking-[0.25em] font-light uppercase">
              {links.map(([label, path], index) => (
                <motion.div key={path} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
                  <Link to={path} onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors">{label}</Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
