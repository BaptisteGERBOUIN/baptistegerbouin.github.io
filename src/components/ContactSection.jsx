// src/components/ContactSection.jsx
import React from 'react';
import { 
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  FileText
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mr-4">Me Contacter</h2>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Informations de contact */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Informations de contact</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <Mail className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Email</h4>
                <a 
                  href="mailto:bgerbouin@gmail.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  bgerbouin@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <Phone className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Téléphone</h4>
                <a 
                  href="tel:+33641190650" 
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  +33 6 41 19 06 50
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <MapPin className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">Localisation</h4>
                <p className="text-gray-600 dark:text-gray-400">Bordeaux, France</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <Linkedin className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/baptiste-gerbouin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  linkedin.com/in/baptiste-gerbouin
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <Github className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white">GitHub</h4>
                <a 
                  href="https://github.com/BaptisteGERBOUIN" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                >
                  github.com/BaptisteGERBOUIN
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <form
        action="https://formspree.io/f/xeozekkp"
        method="POST"
        className="space-y-4"
        >
        <input type="hidden" name="_captcha" value="false" />
        
        {/* Nom complet */}
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nom complet
            </label>
            <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Votre nom"
            />
        </div>

        {/* Email */}
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
            </label>
            <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="votre@email.com"
            />
        </div>

        {/* Sujet */}
        <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Sujet
            </label>
            <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Objet de votre message"
            />
        </div>

        {/* Message */}
        <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
            </label>
            <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
            placeholder="Votre message..."
            ></textarea>
        </div>

        {/* Submit */}
        <button
            type="submit"
            className="flex items-center justify-center w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg font-medium transition-colors"
        >
            <Send className="mr-2" size={18} />
            Envoyer le message
        </button>
        </form>

      </div>
      
      <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Disponibilités</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Actuellement à la recherche d'opportunités en Data Science pour 2025. N'hésitez pas à me contacter pour discuter de projets, collaborations ou opportunités professionnelles.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;