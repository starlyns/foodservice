import { motion } from 'motion/react';
import { Warehouse, Truck, Package, ShieldCheck } from 'lucide-react';

export function IndustryUnderstanding() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Deep Industry Knowledge</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1] text-white">
              Built around how <span className="italic font-serif text-accent">you actually operate.</span>
            </h2>
            <p className="text-white/40 text-xl leading-relaxed mb-12">
              We aren&apos;t a generic creative shop. We understand the complex interplay between suppliers, broadline distributors, DSRs, and foodservice operators.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: Warehouse, title: "Operational Workflows", desc: "Aligning with distribution cut-off times and load schedules." },
                { icon: Package, title: "Product Lifecycle", desc: "Managing seasonal resets and inventory rotation strategies." },
                { icon: Truck, title: "Logistics Frameworks", desc: "Visibility into regional movement and distributor networks." },
                { icon: ShieldCheck, title: "Systems Integration", desc: "Modernizing the communication path between brand and buyer." }
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="w-8 h-8 rounded bg-accent/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-accent" />
                  </div>
                  <h4 className="text-lg font-medium text-white">{item.title}</h4>
                  <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group">
              <img 
                src="/src/assets/images/distribution_logistics_1778972507082.png" 
                alt="Operational Logistics"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-10 left-10 right-10">
                 <div className="glass p-6 rounded-xl border border-white/10 backdrop-blur-xl">
                    <div className="flex items-center gap-4 mb-4">
                       <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                       <span className="text-[10px] uppercase tracking-widest text-white/60">Live Operational View</span>
                    </div>
                    <div className="space-y-3">
                       <div className="h-1 bg-white/10 rounded-full w-full" />
                       <div className="h-1 bg-white/10 rounded-full w-[80%]" />
                       <div className="h-1 bg-accent rounded-full w-[60%]" />
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Design accents */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/5 blur-3xl rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
