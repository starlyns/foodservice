import { motion } from 'motion/react';
import { ShieldAlert, Zap, Globe, Users } from 'lucide-react';

const problems = [
  {
    icon: ShieldAlert,
    title: "The Outdated Passive Model",
    points: [
      "Trade shows once a year",
      "Static printed catalogs",
      "Occasional distributor highlights",
      "Random social posts",
      "Inconsistent buyer visibility"
    ],
    className: "bg-zinc-950"
  },
  {
    icon: Zap,
    title: "The Modern Activation Model",
    points: [
      "Ongoing monthly campaigns",
      "Product-specific activation",
      "Distributor-aligned promotion",
      "Continuous digital buyer visibility",
      "Real-time sales support"
    ],
    className: "bg-accent/5 border-accent/10"
  }
];

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-20">
          <h2 className="text-4xl lg:text-[64px] leading-[0.9] font-medium mb-6 tracking-tighter text-white">Traditional Supplier Marketing is <span className="text-white/30 italic font-serif">Passive.</span></h2>
          <p className="text-white/40 max-w-2xl text-lg">We modernize outdated systems by turning irregular marketing events into a continuous, operational growth engine.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`p-16 relative group ${idx === 1 ? 'bg-accent/5' : 'bg-zinc-950'}`}
            >
              <item.icon className={`w-10 h-10 mb-8 ${idx === 1 ? 'text-accent' : 'text-white/20'}`} />
              <h3 className="text-3xl font-medium mb-8 tracking-tight text-white">{item.title}</h3>
              <ul className="space-y-6">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-4 text-white/50 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${idx === 1 ? 'bg-accent' : 'bg-white/10'}`} />
                    {pt}
                  </li>
                ))}
              </ul>
              
              {idx === 1 && (
                <div className="absolute top-8 right-8 px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-[10px] font-black uppercase tracking-widest rounded-full">
                  Provender Standard
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
