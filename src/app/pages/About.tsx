import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Globe,
  Leaf,
  ArrowRight,
} from 'lucide-react';
import warehouseImage from 'figma:asset/543853a499e982a0aa44c1f7e152d54794866721.png';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque opération logistique',
    },
    {
      icon: Heart,
      title: 'Engagement',
      description: 'Votre réussite est notre priorité absolue',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Un partenariat fort basé sur la confiance mutuelle',
    },
    {
      icon: Leaf,
      title: 'Durabilité',
      description: 'Une logistique responsable pour un avenir meilleur',
    },
  ];

  const timeline = [
    {
      year: '2008',
      title: 'Création de DNA Fret',
      description: 'Lancement de notre activité avec une petite flotte de 5 camions',
    },
    {
      year: '2012',
      title: 'Expansion européenne',
      description: 'Ouverture de bureaux en Allemagne, Espagne et Italie',
    },
    {
      year: '2016',
      title: 'Diversification des services',
      description: 'Lancement des activités maritimes et aériennes',
    },
    {
      year: '2020',
      title: 'Innovation technologique',
      description: 'Mise en place de notre plateforme de suivi en temps réel',
    },
    {
      year: '2024',
      title: 'Leadership du marché',
      description: 'Plus de 50 pays couverts et 10 000 livraisons mensuelles',
    },
  ];

  const team = [
    {
      name: 'Jean Mercier',
      role: 'Directeur Général',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzcwMDMwMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Sophie Laurent',
      role: 'Directrice des Opérations',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzcwMDMwMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marc Dubois',
      role: 'Directeur Commercial',
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzcwMDMwMjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const certifications = [
    { icon: Award, title: 'ISO 9001', description: 'Certification qualité' },
    { icon: Award, title: 'ISO 14001', description: 'Management environnemental' },
    { icon: Award, title: 'IATA', description: 'Transport aérien' },
    { icon: Award, title: 'OEA', description: 'Opérateur économique agréé' },
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
              À propos de <span className="text-orange-500">DNA Fret</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Leader européen en solutions logistiques depuis plus de 15 ans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black p-8 rounded-2xl border border-gray-800">
                <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-orange-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Mission</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Fournir des solutions logistiques innovantes et fiables qui permettent à nos clients
                  de se concentrer sur leur cœur de métier. Nous nous engageons à dépasser les
                  attentes en combinant technologie de pointe, expertise humaine et engagement pour
                  l'excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-black p-8 rounded-2xl border border-gray-800">
                <div className="bg-orange-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-orange-500" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Notre Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Devenir le partenaire logistique de référence en Europe, reconnu pour notre capacité
                  à anticiper les besoins du marché et à proposer des solutions durables et
                  innovantes. Nous visons une croissance continue tout en maintenant notre engagement
                  envers la qualité et la satisfaction client.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-orange-500">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-400">Les principes qui guident notre action quotidienne</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-orange-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500/30 transition-all">
                  <value.icon className="text-orange-500" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre <span className="text-orange-500">Histoire</span>
            </h2>
            <p className="text-xl text-gray-400">Plus de 15 ans d'innovation et de croissance</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-orange-500/30 transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-all">
                      <div className="text-orange-500 text-2xl font-bold mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full border-4 border-gray-900 z-10">
                    <TrendingUp className="text-white" size={28} />
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Notre <span className="text-orange-500">Équipe</span>
            </h2>
            <p className="text-xl text-gray-400">Une direction expérimentée et passionnée</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-orange-500 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos <span className="text-orange-500">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400">Qualité et conformité reconnues</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-black p-8 rounded-xl border border-gray-800 hover:border-orange-500 transition-all text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <cert.icon className="text-orange-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={warehouseImage} alt="Nos installations" className="w-full h-auto" />
          </motion.div>
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
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment DNA Fret peut transformer votre chaîne logistique
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
