export function Footer() {
  return (
    <footer className="py-24 bg-[#070707] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/5 border border-white/10 mb-16">
          <div className="p-10 bg-[#070707] border-r border-white/5 last:border-r-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-4 italic font-serif">01. Activation</p>
            <p className="text-sm text-white/40 leading-relaxed">Custom monthly campaigns that drive product demand and buyer familiarity.</p>
          </div>
          <div className="p-10 bg-[#070707] border-r border-white/5 last:border-r-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold mb-4">02. Enablement</p>
            <p className="text-sm text-white/40 leading-relaxed">Empowering distributor sales teams with modern digital collateral.</p>
          </div>
          <div className="p-10 bg-[#070707] border-r border-white/5 last:border-r-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold mb-4">03. Visibility</p>
            <p className="text-sm text-white/40 leading-relaxed">Continuous presence in the buyer's procurement journey year-round.</p>
          </div>
          <div className="p-10 bg-[#070707] border-r border-white/5 last:border-r-0">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/20 font-bold mb-4">04. Growth</p>
            <p className="text-sm text-white/40 leading-relaxed">Real-time movement tracking and operational distribution metrics.</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-accent rounded-sm rotate-45" />
            <span className="font-bold text-lg tracking-tighter uppercase italic text-white">Provender</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
            <a href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-[10px] text-white/20 uppercase tracking-widest">
            © 2026 Provender Systems. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
