import { motion } from 'motion/react';
import { Box, Target, LineChart } from 'lucide-react';

const services = [
  {
    icon: Box,
    title: "Product Activation Campaigns",
    description: "Monthly promotional campaigns designed to keep products visible to buyers and distributor networks."
  },
  {
    icon: Target,
    title: "Distributor Sales Support",
    description: "Digital product materials, landing pages, campaign assets, and sales enablement systems for sales teams."
  },
  {
    icon: LineChart,
    title: "Supplier Visibility Systems",
    description: "Continuous visibility infrastructure including email campaigns, product showcases, and buyer engagement tools."
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-background relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl lg:text-6xl font-medium tracking-tight mb-6 text-white">Modern Infrastructure <span className="font-serif italic text-white/30 text-4xl">for Food Suppliers</span></h2>
            <p className="text-white/40 text-xl leading-relaxed">We provide the operational intelligence required to move volume across complex foodservice networks.</p>
          </div>
          <div className="text-[10px] font-bold text-accent/60 uppercase tracking-[0.4em] mb-4">
            [ Activation Services ]
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/10 rounded-sm overflow-hidden">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="p-12 bg-zinc-950 hover:bg-accent/[0.02] transition-colors duration-500 group"
            >
              <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-10 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <service.icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-6 tracking-tight text-white">{service.title}</h3>
              <p className="text-white/30 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
