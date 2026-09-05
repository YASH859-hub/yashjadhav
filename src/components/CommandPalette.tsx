import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const commands = [
  { key: 'P', label: 'Projects', path: '/projects' },
  { key: 'E', label: 'Engineering', path: '/engineering' },
  { key: 'R', label: 'Research', path: '/research' },
  { key: 'W', label: 'Writing', path: '/writing' },
  { key: 'N', label: 'Now', path: '/now' },
  { key: 'C', label: 'Contact', path: '/contact' },
  { key: 'V', label: 'Resume', path: '/resume' } // using V for resume to avoid R conflict, but wait, specs said "Keyboard shortcuts: P -> Projects, E -> Engineering, R -> Research, W -> Writing, N -> Now, C -> Contact"
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      if (e.key === 'Escape') {
        setIsOpen(false);
      }

      if (isOpen && !e.metaKey && !e.ctrlKey) {
        const cmd = commands.find(c => c.key.toLowerCase() === e.key.toLowerCase());
        if (cmd) {
          e.preventDefault();
          setIsOpen(false);
          navigate(cmd.path);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, navigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-4 border-b border-white/5">
              <input 
                autoFocus
                className="w-full bg-transparent text-white placeholder-white/30 outline-none font-light tracking-wide text-lg"
                placeholder="Type a command or search..."
                readOnly
              />
            </div>
            <div className="p-2">
              {commands.map((cmd) => (
                <button
                  key={cmd.key}
                  onClick={() => {
                    setIsOpen(false);
                    navigate(cmd.path);
                  }}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors text-left group"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors tracking-wide font-light">
                    {cmd.label}
                  </span>
                  <kbd className="px-2 py-1 bg-white/10 rounded text-xs font-mono text-white/50 group-hover:text-white/80 transition-colors">
                    {cmd.key}
                  </kbd>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
