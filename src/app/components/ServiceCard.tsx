import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-gradient-to-br from-zinc-900 to-black p-8 rounded-lg border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300 overflow-hidden"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B00]/20 rounded-lg mb-6 relative z-10"
      >
        <Icon size={32} className="text-[#FF6B00]" />
      </motion.div>

      {/* Content */}
      <h3 className="text-xl text-white mb-4 relative z-10">{title}</h3>
      <p className="text-gray-400 leading-relaxed relative z-10">{description}</p>

      {/* Arrow Indicator */}
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
        className="absolute bottom-8 right-8 text-[#FF6B00]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#FF6B00]/20 group-hover:border-[#FF6B00]/50 transition-colors duration-300" />
    </motion.div>
  );
}
