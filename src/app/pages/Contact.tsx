import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1
    serviceType: '',
    // Step 2
    company: '',
    name: '',
    email: '',
    phone: '',
    // Step 3
    origin: '',
    destination: '',
    weight: '',
    volume: '',
    // Step 4
    timeline: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (formStep < 4) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Avenue de la Logistique\n75001 Paris, France',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@dnafret.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 8h-18h\nSam: 9h-12h',
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black pt-20 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-orange-600 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="text-white" size={56} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Merci pour votre demande !
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Votre demande de devis a été reçue avec succès. Notre équipe vous contactera dans les
              24 heures pour discuter de vos besoins en détail.
            </p>
            <motion.button
              onClick={() => {
                setIsSubmitted(false);
                setFormStep(1);
                setFormData({
                  serviceType: '',
                  company: '',
                  name: '',
                  email: '',
                  phone: '',
                  origin: '',
                  destination: '',
                  weight: '',
                  volume: '',
                  timeline: '',
                  message: '',
                });
              }}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nouvelle demande
            </motion.button>
          </motion.div>
        </div>
      </div>
    );
  }

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
              Demander un <span className="text-orange-500">Devis</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Remplissez le formulaire ci-dessous et recevez une proposition personnalisée sous 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-black p-8 rounded-2xl border border-gray-800 sticky top-24"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Contactez-nous</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-orange-500/20 p-3 rounded-lg flex-shrink-0">
                        <info.icon className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-400 text-sm whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="text-white font-semibold mb-4">Pourquoi nous choisir ?</h4>
                  <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Réponse sous 24h garantie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Devis gratuit et sans engagement</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Conseils d'experts personnalisés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Solutions sur-mesure</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-black p-8 md:p-12 rounded-2xl border border-gray-800"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex items-center flex-1">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            formStep >= step
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-800 text-gray-500'
                          }`}
                        >
                          {step}
                        </div>
                        {step < 4 && (
                          <div
                            className={`flex-1 h-1 mx-2 ${
                              formStep > step ? 'bg-orange-500' : 'bg-gray-800'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Service</span>
                    <span>Informations</span>
                    <span>Détails</span>
                    <span>Finalisation</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Service Type */}
                  {formStep === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Quel service vous intéresse ?
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          'Transport Routier',
                          'Transport Maritime',
                          'Transport Aérien',
                          'Entreposage',
                          'Distribution',
                          'Autre',
                        ].map((service) => (
                          <label
                            key={service}
                            className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                              formData.serviceType === service
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-gray-800 hover:border-gray-700'
                            }`}
                          >
                            <input
                              type="radio"
                              name="serviceType"
                              value={service}
                              checked={formData.serviceType === service}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <span className="text-white font-semibold">{service}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Contact Information */}
                  {formStep === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">Vos coordonnées</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-400 mb-2">Société</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Nom complet *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Téléphone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Shipment Details */}
                  {formStep === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">
                        Détails de l'expédition
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-400 mb-2">Origine *</label>
                          <input
                            type="text"
                            name="origin"
                            value={formData.origin}
                            onChange={handleInputChange}
                            placeholder="Ville, Pays"
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">Destination *</label>
                          <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            placeholder="Ville, Pays"
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-400 mb-2">Poids (kg)</label>
                            <input
                              type="number"
                              name="weight"
                              value={formData.weight}
                              onChange={handleInputChange}
                              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-400 mb-2">Volume (m³)</label>
                            <input
                              type="number"
                              name="volume"
                              value={formData.volume}
                              onChange={handleInputChange}
                              className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Additional Info */}
                  {formStep === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-6">Informations complémentaires</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-gray-400 mb-2">Délai souhaité</label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none"
                          >
                            <option value="">Sélectionnez un délai</option>
                            <option value="urgent">Urgent (24-48h)</option>
                            <option value="standard">Standard (3-7 jours)</option>
                            <option value="economy">Économique (7-14 jours)</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-400 mb-2">
                            Message / Besoins spécifiques
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={6}
                            className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none resize-none"
                            placeholder="Décrivez vos besoins spécifiques, contraintes, etc."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8">
                    {formStep > 1 && (
                      <motion.button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Précédent
                      </motion.button>
                    )}
                    {formStep < 4 ? (
                      <motion.button
                        type="button"
                        onClick={nextStep}
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors ml-auto"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Suivant
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors ml-auto flex items-center space-x-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Envoyer ma demande</span>
                        <Send size={18} />
                      </motion.button>
                    )}
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-gray-900 h-96 rounded-2xl flex items-center justify-center border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <MapPin className="text-orange-500 mx-auto mb-4" size={48} />
              <p className="text-gray-400">123 Avenue de la Logistique, 75001 Paris, France</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
