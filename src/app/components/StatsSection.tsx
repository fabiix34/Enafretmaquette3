import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
}

function AnimatedStat({ value, suffix, label, index }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-white to-[#FF6B00] bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </motion.div>
  );
}

export function StatsSection() {
  const stats = [
    { value: 15000, suffix: '+', label: 'Livraisons par mois' },
    { value: 45, suffix: '', label: 'Pays couverts' },
    { value: 25, suffix: '', label: 'Années d\'expérience' },
    { value: 98, suffix: '%', label: 'Clients satisfaits' },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-zinc-900 to-black"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FF6B00" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Nos <span className="text-[#FF6B00]">Performances</span>
          </h2>
          <p className="text-gray-400 text-xl">Des chiffres qui parlent d'eux-mêmes</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
