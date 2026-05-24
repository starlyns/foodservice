import { motion } from 'motion/react';
import { Mail, FileText, Layout, PieChart, ArrowUpRight } from 'lucide-react';

export function SampleCampaign() {
  return (
    <section id="campaign" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24">
          <h2 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[0.9] text-white">
            Sample <br/><span className="italic font-serif text-accent text-[1.1em]">Campaign.</span>
          </h2>
          <p className="text-white/40 max-w-xl text-xl leading-relaxed">
            A tangible look at how we activate specific products. This example follows a seasonal push for a frozen appetizer line.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Campaign Overview Card */}
          <div className="lg:col-span-2 glass p-8 rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full w-fit mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">Campaign Profile</span>
              </div>
              <h3 className="text-3xl font-medium text-white mb-2">Frozen Appetizer Spring Push</h3>
              <p className="text-white/40 text-sm mb-8">Objective: Drive regional volume ahead of seasonal menu updates.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Duration</p>
                  <p className="text-sm font-bold text-white">30 Days</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Target</p>
                  <p className="text-sm font-bold text-white">500+ Buyers</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Reach</p>
                  <p className="text-sm font-bold text-accent">12k Sales Hits</p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-[10px] uppercase text-white/30 tracking-widest mb-1">Conversion</p>
                  <p className="text-sm font-bold text-emerald-500">22% Delta</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-4">
               <div className="p-6 bg-accent border border-accent/20 rounded-xl relative group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  <div className="flex justify-between items-start mb-12 relative z-10">
                     <Layout className="w-6 h-6 text-white" />
                     <ArrowUpRight className="w-4 h-4 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Product Landing Page</h4>
                  <p className="text-white/70 text-xs">Custom high-conversion showcase for mobile sales teams.</p>
               </div>
               
               <div className="p-6 bg-zinc-900 border border-white/5 rounded-xl relative group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors" />
                  <div className="flex justify-between items-start mb-12 relative z-10">
                     <Mail className="w-6 h-6 text-accent" />
                     <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Buyer Email Series</h4>
                  <p className="text-white/40 text-xs">Segmented drip sequence focusing on inventory availability.</p>
               </div>
            </div>
            
            {/* Background design lines */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none editorial-border-grid" />
          </div>

          {/* Asset List & Analytics */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-white/10 h-full">
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold mb-8">Campaign Assets</h4>
              <ul className="space-y-6">
                {[
                  { icon: FileText, label: "Distributor Sales Sheet", status: "Dynamic" },
                  { icon: PieChart, label: "Performance Analytics Card", status: "Live" },
                  { icon: Layout, label: "Interactive Product Catalog", status: "Active" },
                  { icon: Mail, label: "Campaign Briefing Assets", status: "Ready" }
                ].map((asset, idx) => (
                  <li key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <asset.icon className="w-4 h-4 text-white/20 group-hover:text-accent transition-colors" />
                      <span className="text-sm text-white/60 group-hover:text-white transition-colors">{asset.label}</span>
                    </div>
                    <span className="text-[10px] font-mono text-white/20">{asset.status}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-12 border-t border-white/5">
                 <div className="p-4 bg-zinc-950 rounded border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-[9px] uppercase tracking-widest text-white/30">Movement Velocity</span>
                       <span className="text-xs font-bold text-accent">+18.4%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        className="h-full bg-accent"
                       />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
