import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Truck, Package, Globe, Shield, TrendingUp, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import warehouseImage from 'figma:asset/543853a499e982a0aa44c1f7e152d54794866721.png';
import logisticsImage from 'figma:asset/199f4f6e5cbd7a044220ba39b657a8266ce6cb22.png';

export function Home() {
  const stats = [
    { value: '15+', label: 'Années d\'expérience', icon: TrendingUp },
    { value: '50+', label: 'Pays couverts', icon: Globe },
    { value: '10k+', label: 'Livraisons/mois', icon: Package },
    { value: '98%', label: 'Satisfaction client', icon: Users },
  ];

  const services = [
    {
      icon: Truck,
      title: 'Transport Routier',
      description: 'Solutions de transport routier flexibles et fiables pour tous vos besoins en France et en Europe.',
      image: 'https://images.unsplash.com/photo-1760626301196-1a308a81b31a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cnVjayUyMGhpZ2h3YXklMjBtb3Rpb258ZW58MXx8fHwxNzcwMTEyNjEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      icon: Globe,
      title: 'Transport Maritime',
      description: 'Expéditions maritimes internationales avec suivi en temps réel et optimisation des coûts.',
      image: logisticsImage,
    },
    {
      icon: Package,
      title: 'Entreposage & Distribution',
      description: 'Gestion d\'entrepôts modernes et solutions de distribution adaptées à votre activité.',
      image: warehouseImage,
    },
  ];

  const advantages = [
    'Livraison garantie dans les délais',
    'Suivi en temps réel 24/7',
    'Solutions personnalisées',
    'Équipe d\'experts dédiée',
    'Technologie de pointe',
    'Prix compétitifs',
  ];

  const testimonials = [
    {
      name: 'Sophie Lefebvre',
      company: 'TechCorp France',
      text: 'DNA Fret a transformé notre chaîne logistique. Fiabilité et réactivité exceptionnelles.',
      rating: 5,
    },
    {
      name: 'Marc Dupont',
      company: 'Global Trade SA',
      text: 'Un partenaire de confiance depuis 5 ans. Toujours à l\'écoute de nos besoins spécifiques.',
      rating: 5,
    },
    {
      name: 'Julie Martin',
      company: 'EcoDistrib',
      text: 'Service impeccable et tarifs compétitifs. Je recommande vivement DNA Fret.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={logisticsImage}
            alt="Logistique internationale"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0,400 Q400,200 800,400 T1600,400"
            stroke="rgba(249, 115, 22, 0.2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Votre partenaire{' '}
              <span className="text-orange-500">logistique</span>
              <br />de confiance
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Solutions de transport et logistique performantes pour propulser votre activité
              à l'international
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/contact">
                <motion.button
                  className="bg-orange-500 text-white px-10 py-5 rounded-lg font-bold text-lg shadow-2xl hover:shadow-orange-500/50 transition-all"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 40px rgba(249, 115, 22, 0.6)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Demander un devis
                  <ArrowRight className="inline-block ml-2" size={20} />
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-lg border-2 border-white/20 hover:border-orange-500 transition-all"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(249, 115, 22, 1)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nos services
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-orange-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-orange-500 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-orange-500/20 p-4 rounded-full">
                    <stat.icon className="text-orange-500" size={32} />
                  </div>
                </div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Des solutions logistiques complètes adaptées à vos besoins
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black rounded-xl overflow-hidden shadow-xl border border-gray-800 hover:border-orange-500 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-orange-500 p-3 rounded-lg">
                    <service.icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-orange-500 font-semibold inline-flex items-center group-hover:gap-2 transition-all"
                  >
                    En savoir plus <ArrowRight className="ml-1" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pourquoi choisir{' '}
                <span className="text-orange-500">DNA Fret</span> ?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Nous combinons expertise, technologie et engagement pour vous offrir un service
                logistique d'excellence.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="text-orange-500 flex-shrink-0" size={24} />
                    <span className="text-white">{advantage}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact">
                <motion.button
                  className="mt-8 bg-orange-500 text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:shadow-orange-500/50 transition-all"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Commencer maintenant
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={warehouseImage}
                  alt="Entrepôt moderne"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-xl shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="text-white mb-2" size={32} />
                <p className="text-white font-bold">Certifié ISO 9001</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ils nous font <span className="text-orange-500">confiance</span>
            </h2>
            <p className="text-xl text-gray-400">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Obtenez votre devis en 24h
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Remplissez notre formulaire et recevez une proposition personnalisée adaptée à vos besoins
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-white text-orange-600 px-12 py-5 rounded-lg font-bold text-lg shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.4)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un devis gratuit
                <ArrowRight className="inline-block ml-2" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
