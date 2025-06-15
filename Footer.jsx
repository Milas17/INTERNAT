import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/supabaseClient';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmittingNewsletter(true);
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: newsletterEmail, subscribed_at: new Date().toISOString() }]);

      if (error) throw error;

      toast({
        title: "Inscription réussie !",
        description: `Merci de vous être abonné avec ${newsletterEmail} !`,
      });
      setNewsletterEmail('');
    } catch (error) {
      console.error("Erreur d'inscription à la newsletter:", error);
      toast({
        title: "Erreur d'inscription",
        description: error.message || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerSections = [
    {
      title: 'AsInAIHB',
      links: [
        { name: 'Qui sommes-nous ?', path: '/qui-sommes-nous' },
        { name: 'Bureau', path: '/bureau' },
        { name: 'Fonctionnement', path: '/fonctionnement' },
        { name: 'Adhésion', path: '/adhesion' }
      ]
    },
    {
      title: 'Revue de l\'interne des hôpitaux Béninois',
      links: [
        { name: 'Instructions', path: '/instructions-revue' },
        { name: 'Soumission', path: '/soumission' },
        { name: 'Archives', path: '/archives-revue' }
      ]
    },
    {
      title: 'Liens Utiles',
      links: [
        { name: 'Conditions d’utilisation', path: '/conditions-utilisation' },
        { name: 'Politique des données', path: '/politique-donnees' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <img  
                className="h-12 w-12 rounded-full shadow-lg ring-2 ring-white/20" 
                alt="Logo Association AsInAIHB"
               src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/f80480585c60ff2808d92d9d68c7c6c6.png" />
              <span className="text-lg font-bold text-white">AsInAIHB</span>
            </div>
            
            <div className="space-y-3 text-gray-300 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Cotonou, Bénin</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">asinainhb.jib@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">+229 0140424297</span>
              </div>
            </div>
             <span className="text-lg font-semibold text-white mb-3 block">Newsletter</span>
             <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 flex-grow"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={isSubmittingNewsletter}
                />
                <Button type="submit" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white" disabled={isSubmittingNewsletter}>
                  {isSubmittingNewsletter ? "Envoi..." : "S'inscrire"} <Send className="ml-2 h-4 w-4"/>
                </Button>
             </form>
          </motion.div>

          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <span className="text-lg font-semibold text-white mb-4 block">
                {section.title}
              </span>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-lg font-semibold text-white mb-4 block">
                Réseaux Sociaux
              </span>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: `Redirection vers ${social.label} (simulation)`,
                        description: "🚧 Cette fonctionnalité n'est pas encore implémentée. Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
                        duration: 3000,
                      });
                    }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center text-white hover:from-green-500 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB)
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Tous droits réservés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;