import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Truck,
  Ship,
  Plane,
  Package,
  Warehouse,
  MapPin,
  Clock,
  Shield,
  BarChart3,
  ArrowRight,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Truck,
      title: 'Transport Routier',
      description:
        'Solutions de transport routier complètes pour vos expéditions nationales et européennes.',
      features: [
        'Camions complets et groupage',
        'Livraison express disponible',
        'Flotte moderne et écologique',
        'Suivi GPS en temps réel',
      ],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Ship,
      title: 'Transport Maritime',
      description:
        'Fret maritime international avec optimisation des coûts et délais maîtrisés.',
      features: [
        'Conteneurs FCL et LCL',
        'Tous types de marchandises',
        'Dédouanement inclus',
        'Couverture mondiale',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Plane,
      title: 'Transport Aérien',
      description:
        'Expéditions aériennes rapides pour vos envois urgents et marchandises sensibles.',
      features: [
        'Livraison ultra-rapide',
        'Température contrôlée',
        'Assurance tous risques',
        'Solutions porte-à-porte',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Warehouse,
      title: 'Entreposage',
      description:
        'Gestion d\'entrepôts modernes avec systèmes de stockage optimisés et sécurisés.',
      features: [
        'Entrepôts certifiés',
        'Gestion des stocks',
        'Préparation de commandes',
        'Emballage personnalisé',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Package,
      title: 'Distribution',
      description:
        'Services de distribution et livraison du dernier kilomètre adaptés à vos besoins.',
      features: [
        'Livraison J+1 ou express',
        'Solutions e-commerce',
        'Gestion des retours',
        'Notification client',
      ],
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: BarChart3,
      title: 'Conseil Logistique',
      description:
        'Optimisation de votre chaîne logistique pour réduire les coûts et améliorer l\'efficacité.',
      features: [
        'Audit logistique complet',
        'Optimisation des flux',
        'Réduction des coûts',
        'Formation des équipes',
      ],
      color: 'from-red-500 to-red-600',
    },
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Assurance Marchandises',
      description: 'Protection complète de vos marchandises durant tout le transport',
    },
    {
      icon: MapPin,
      title: 'Suivi en Temps Réel',
      description: 'Traçabilité complète de vos expéditions 24h/24 et 7j/7',
    },
    {
      icon: Clock,
      title: 'Service Client 24/7',
      description: 'Une équipe dédiée disponible à tout moment pour vous accompagner',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nos <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Des solutions logistiques complètes et personnalisées pour accompagner votre croissance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-black rounded-2xl overflow-hidden shadow-xl border border-gray-800 hover:border-orange-500 transition-all group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6`}>
                  <service.icon className="text-white mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="text-orange-500 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <motion.button
                      className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Demander un devis
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Services <span className="text-orange-500">Complémentaires</span>
            </h2>
            <p className="text-xl text-gray-400">
              Pour une expérience logistique complète et sans souci
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-all">
                  <service.icon className="text-orange-500" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Comment ça <span className="text-orange-500">fonctionne</span> ?
            </h2>
            <p className="text-xl text-gray-400">Un processus simple et efficace</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Demande de devis',
                description: 'Remplissez notre formulaire en ligne',
              },
              {
                step: '02',
                title: 'Étude personnalisée',
                description: 'Nous analysons vos besoins spécifiques',
              },
              {
                step: '03',
                title: 'Proposition sur-mesure',
                description: 'Recevez votre devis sous 24h',
              },
              {
                step: '04',
                title: 'Mise en œuvre',
                description: 'Nous gérons votre logistique de A à Z',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Connecting line (except for last item) */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-orange-500/30" />
                )}
                <div className="relative bg-black border-2 border-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-orange-500">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
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
              Prêt à optimiser votre logistique ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé
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
