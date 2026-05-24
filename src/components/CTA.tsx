import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-background relative border-y border-white/10 overflow-hidden">
       <div className="max-w-5xl mx-auto px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">Get Started</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight mb-8 leading-[1.1] text-white">
            Your products deserve more than <span className="italic font-serif text-accent text-[1.1em]">one trade show a year.</span>
          </h2>
          
          <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the food suppliers who are modernizing their distribution strategy and driving consistent, monthly performance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-5 bg-accent text-white font-bold tracking-tight rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 group">
              Schedule a Product Activation Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-transparent border border-white/20 text-white font-medium rounded-sm hover:bg-white/5 transition-all">
              View Deployment Framework
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none editorial-border-grid" />
    </section>
  );
}
