import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showCTA?: boolean;
}

export function Hero({ title, subtitle, backgroundImage, showCTA = true }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <motion.line
          x1="0%"
          y1="20%"
          x2="100%"
          y2="20%"
          stroke="#FF6B00"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
        <motion.line
          x1="0%"
          y1="80%"
          x2="100%"
          y2="80%"
          stroke="#FF6B00"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#FF6B00]/20 border border-[#FF6B00] px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp size={20} className="text-[#FF6B00]" />
            <span className="text-[#FF6B00] text-sm uppercase tracking-wider">
              Leader en transport & logistique
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6 text-white max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="group relative bg-[#FF6B00] text-white px-8 py-4 rounded-md uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B00]/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Demander un devis
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] to-[#FF8533]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>

              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-md uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
              >
                Nos services
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#FF6B00] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
