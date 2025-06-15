import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, User, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Message envoyé (simulation)",
      description: "Votre message a été envoyé avec succès (ceci est une simulation).",
      duration: 3000,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "asinainhb.jib@gmail.com",
      description: "Écrivez-nous pour toute question"
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+229 0140424297",
      description: "Appelez-nous aux heures d'ouverture"
    },
    {
      icon: MapPin,
      title: "Adresse (Siège)",
      details: "Faculté des Sciences de la Santé (FSS), Cotonou, Bénin",
      description: "Visitez notre siège social"
    },
    {
      icon: Clock,
      title: "Horaires",
      details: "Lun-Ven: 08:00-18:00\nSam: 08:00-13:00",
      description: "Nos heures d'ouverture"
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour répondre à vos questions et vous accompagner. 
            N'hésitez pas à nous contacter pour toute information.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Informations de contact</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-lg hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-800 font-medium mb-1 whitespace-pre-line">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre localisation (Siège: FSS)</h3>
                <p className="text-gray-600 mb-4">
                  Retrouvez-nous facilement grâce à la carte interactive ci-dessous, centrée sur la Faculté des Sciences de la Santé.
                </p>
              </div>
              <div className="w-full h-96">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.40381,6.35702,2.40881,6.36002&layer=mapnik&marker=6.35852,2.40631"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de localisation AsInAIHB - Siège FSS"
                ></iframe>
              </div>
               <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-700">
                  <strong>Adresse:</strong> Faculté des Sciences de la Santé (FSS), Université d'Abomey-Calavi, Cotonou, Bénin.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet *
                </Label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Objet de votre message"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </Label>
                <Textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-4"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer le message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;