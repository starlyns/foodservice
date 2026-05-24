import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Identify Priority Products",
    desc: "We analyze your priority products and sales goals to determine which items need immediate market activation."
  },
  {
    number: "02",
    title: "Launch Monthly Campaigns",
    desc: "Launch targeted activation campaigns designed to keep products visible to both buyers and distributor networks."
  },
  {
    number: "03",
    title: "Maintain Ongoing Engagement",
    desc: "Maintain continuous buyer and distributor visibility between major industry events and trade shows."
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-24 flex items-center gap-4">
          <h2 className="text-4xl font-medium tracking-tight text-white">Operational Workflow</h2>
          <div className="h-px flex-1 bg-white/10" />
          <div className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">System Design</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pr-8 border-r border-white/5 last:border-r-0"
            >
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-accent text-xs font-bold font-mono">
                   {step.number}
                 </div>
                 <div className="h-px w-8 bg-accent/30" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-medium mb-6 tracking-tight leading-tight text-white">{step.title}</h3>
                <p className="text-white/40 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
