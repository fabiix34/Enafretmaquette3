import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#FF8533] to-[#FF6B00]"></div>
      
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Clock size={32} className="text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl text-white">
                Obtenez votre devis en <span className="font-bold">24h</span>
              </h2>
            </div>
            <p className="text-white/90 text-xl">
              Service client réactif • Tarifs compétitifs • Solutions sur mesure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-md uppercase tracking-wider hover:bg-zinc-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Demander mon devis gratuit
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
