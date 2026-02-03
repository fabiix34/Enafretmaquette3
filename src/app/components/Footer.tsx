import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import logoImage from 'figma:asset/baa9451616b1b045473e272ca1ff972eb90f2556.png';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Prêt à optimiser votre logistique ?
              </h3>
              <p className="text-white/90">
                Obtenez votre devis personnalisé en moins de 24h
              </p>
            </div>
            <Link to="/contact">
              <motion.button
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Demander un devis gratuit
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={logoImage} alt="DNA Fret" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">
              Votre partenaire de confiance pour tous vos besoins en transport et logistique internationale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-orange-500 font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-orange-500 font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Transport routier</li>
              <li>Transport maritime</li>
              <li>Transport aérien</li>
              <li>Entreposage</li>
              <li>Distribution</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-orange-500 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 text-orange-500 flex-shrink-0" />
                <span>123 Avenue de la Logistique, 75001 Paris, France</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-orange-500 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-orange-500 flex-shrink-0" />
                <span>contact@dnafret.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock size={18} className="text-orange-500 flex-shrink-0" />
                <span>Lun-Ven: 8h-18h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 DNA Fret. Tous droits réservés.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-white transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
