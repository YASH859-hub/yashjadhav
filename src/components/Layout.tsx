import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
import CommandPalette from './CommandPalette';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white selection:bg-[#BBCCD7] selection:text-[#0C0C0C]">
      <Cursor />
      <Navbar />
      <CommandPalette />
      
      <main className="w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}
