import { motion } from 'motion/react';
import { ArrowRight, BarChart3, TrendingUp } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0A0A0A]">
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-amber-500/[0.03] blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-8">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">B2B Product Activation</span>
              </div>
              
              <h1 className="text-[56px] lg:text-[84px] leading-[0.85] font-medium tracking-tight mb-10 text-white">
                Helping Food Suppliers <span className="text-accent italic font-serif text-[1.1em]">Stay in Front</span> of Buyers Every Month
              </h1>
              
              <p className="text-xl text-white/40 max-w-xl leading-relaxed mb-12">
                Monthly product activation campaigns designed to support distributors, increase buyer visibility, and drive product movement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-5 bg-white text-black font-bold tracking-tight rounded-sm hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  Book a Strategy Call
                </button>
                <button className="px-8 py-5 bg-transparent border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
                  See a Sample Campaign
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:pl-12 lg:border-l lg:border-white/5"
          >
            <div className="relative rounded-xl overflow-hidden glass aspect-square lg:aspect-video shadow-2xl border border-white/10 group">
              <img 
                src="/src/assets/images/dashboard_mockup_1778972521951.png" 
                alt="Dashboard Visualization" 
                className="w-full h-full object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-70"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
              
              {/* Regional Hub Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-lg bg-black/60 backdrop-blur-md border border-white/10">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-1">Active Distribution Hub</h4>
                    <p className="text-lg font-semibold text-amber-500">Mid-Atlantic Region</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-mono font-bold text-white tracking-tighter">+24.8%</p>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase italic">Inventory Velocity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -z-10 top-1/2 -translate-y-1/2 -right-12 w-64 h-64 opacity-[0.03] pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 0 L100 100" stroke="white" strokeWidth="0.5" />
                <path d="M10 0 L100 90" stroke="white" strokeWidth="0.5" />
                <path d="M0 10 L90 100" stroke="white" strokeWidth="0.5" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
