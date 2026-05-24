import { motion } from 'motion/react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: 'W1', value: 400 },
  { name: 'W2', value: 600 },
  { name: 'W3', value: 550 },
  { name: 'W4', value: 900 },
  { name: 'W5', value: 850 },
  { name: 'W6', value: 1200 },
];

export function Results() {
  return (
    <section id="results" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-5xl lg:text-7xl font-medium tracking-tight mb-12 leading-[0.9] text-white">Performance <br/><span className="italic font-serif text-accent">you can measure.</span></h2>
            <div className="space-y-12">
              {[
                { label: "Buyer Engagement", value: "312%", detail: "Cumulative delta across all regional distribution channels" },
                { label: "Sample Inquiries", value: "4.2k", detail: "Qualified product inquiries within first 90 days of activation" },
                { label: "Distributor Visibility", value: "9.8", detail: "Industry benchmark for brand recall amongst sales teams" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="pl-6 border-l border-white/10"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-medium tracking-tight text-white">{stat.value}</span>
                    {stat.value.includes('%') && <span className="text-accent text-sm font-bold">↑</span>}
                  </div>
                  <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                  <div className="text-xs text-white/20 leading-relaxed max-w-xs">{stat.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-[#111] p-10 rounded-sm border border-white/10 aspect-square lg:aspect-[4/5] flex flex-col gap-10 relative overflow-hidden shadow-2xl">
            {/* Background design lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none editorial-border-grid" />
            
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-lg tracking-tight text-white">Product Movement Profile</h3>
                <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Operational v4.2 // Active SKU Tracking</p>
              </div>
              <div className="flex gap-2">
                 <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>
            </div>

            <div className="relative z-10 flex-1 min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -40, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#d97706" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 600 }} 
                  />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '4px', padding: '12px' }}
                    itemStyle={{ color: '#d97706', fontSize: '12px', fontWeight: 'bold' }}
                    cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 1 }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#d97706" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="relative z-10 grid grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-sm">
                <div className="p-4 bg-[#111]">
                   <p className="text-[9px] uppercase text-white/30 tracking-widest mb-1">Status</p>
                   <p className="text-xs font-bold text-accent uppercase tracking-tighter">Operational</p>
                </div>
                <div className="p-4 bg-[#111]">
                   <p className="text-[9px] uppercase text-white/30 tracking-widest mb-1">Movement</p>
                   <p className="text-xs font-bold text-white uppercase tracking-tighter">Optimized</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
