import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  company: string;
  text: string;
  rating: number;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: 'Marie Dubois',
      company: 'DuPont Industries',
      text: 'Un service exceptionnel ! NA FRET a transformé notre chaîne logistique. Livraisons toujours à temps, équipe très professionnelle.',
      rating: 5,
    },
    {
      name: 'Jean Martin',
      company: 'TechCorp France',
      text: 'Partenaire fiable depuis 5 ans. Leur réactivité et leur expertise en logistique internationale sont incomparables.',
      rating: 5,
    },
    {
      name: 'Sophie Laurent',
      company: 'Global Trade SA',
      text: 'Excellent rapport qualité-prix. Le suivi en temps réel et la transparence sont des atouts majeurs.',
      rating: 5,
    },
  ];

  return (
    <section className="relative py-20 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Ce que disent <span className="text-[#FF6B00]">nos clients</span>
          </h2>
          <p className="text-gray-400 text-xl">La satisfaction client au cœur de nos priorités</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-black p-8 rounded-lg border border-white/10 hover:border-[#FF6B00]/50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-[#FF6B00]/20">
                <Quote size={48} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#FF6B00] text-[#FF6B00]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="relative z-10">
                <div className="text-white mb-1">{testimonial.name}</div>
                <div className="text-[#FF6B00] text-sm">{testimonial.company}</div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
