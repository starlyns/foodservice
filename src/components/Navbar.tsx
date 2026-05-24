import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-amber-500 rounded-sm rotate-45 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#0A0A0A] rounded-full"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase italic">Provender</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a href="#problem" className="text-sm font-medium text-white/50 hover:text-white transition-colors">The Problem</a>
          <a href="#services" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Activation</a>
          <a href="#campaign" className="text-sm font-medium text-white/50 hover:text-white transition-colors">Sample Campaign</a>
          <button className="px-5 py-2 bg-accent font-bold italic tracking-widest text-white text-[11px] uppercase rounded-full hover:brightness-110 transition-colors border border-white/10">
            Book a Strategy Call
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-zinc-900 border-b border-white/5 px-6 py-8 flex flex-col gap-6"
        >
          <a href="#services" className="text-lg text-zinc-400" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#process" className="text-lg text-zinc-400" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#results" className="text-lg text-zinc-400" onClick={() => setIsOpen(false)}>Success Stories</a>
          <button className="w-full py-4 bg-white text-black font-semibold rounded-full">
            Contact Sales
          </button>
        </motion.div>
      )}
    </nav>
  );
}
