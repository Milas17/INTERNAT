
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Submission = () => {
  const [formData, setFormData] = useState({
    title: '',
    authors: '',
    category: '',
    keywords: '',
    abstract: '',
    email: '',
    phone: '',
    institution: ''
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
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 3000,
    });
  };

  const handleFileUpload = () => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 3000,
    });
  };

  const categories = [
    'Cardiologie',
    'Pédiatrie',
    'Chirurgie',
    'Médecine Interne',
    'Gynécologie-Obstétrique',
    'Neurologie',
    'Endocrinologie',
    'Pneumologie',
    'Gastro-entérologie',
    'Autre'
  ];

  const guidelines = [
    {
      icon: FileText,
      title: "Format du résumé",
      description: "Maximum 300 mots, structuré avec introduction, méthodes, résultats et conclusion."
    },
    {
      icon: Upload,
      title: "Documents requis",
      description: "Résumé en PDF, déclaration de conflit d'intérêts, autorisation éthique si applicable."
    },
    {
      icon: CheckCircle,
      title: "Critères d'évaluation",
      description: "Originalité, méthodologie, pertinence clinique et qualité de la présentation."
    },
    {
      icon: AlertCircle,
      title: "Délais",
      description: "Soumission 3 mois avant l'événement, notification d'acceptation 1 mois avant."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Soumettre un Résumé</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partagez vos travaux de recherche avec la communauté médicale béninoise. 
            Soumettez votre résumé pour nos événements scientifiques.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Guidelines */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Instructions de soumission</h2>
              
              <div className="space-y-6">
                {guidelines.map((guideline, index) => (
                  <motion.div
                    key={guideline.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-xl p-6 shadow-lg hover-lift"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                          <guideline.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{guideline.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{guideline.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200"
              >
                <h3 className="font-semibold text-gray-900 mb-3">Besoin d'aide ?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Notre équipe est là pour vous accompagner dans votre soumission.
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => toast({
                    title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
                    description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
                    duration: 3000,
                  })}
                  className="w-full"
                >
                  Contacter l'équipe
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Formulaire de soumission</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Titre de la communication *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Entrez le titre de votre communication"
                  />
                </div>

                {/* Authors */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auteurs *
                  </label>
                  <input
                    type="text"
                    name="authors"
                    value={formData.authors}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nom Prénom, Nom Prénom, etc."
                  />
                </div>

                {/* Category and Keywords */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Catégorie *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Sélectionnez une catégorie</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mots-clés
                    </label>
                    <input
                      type="text"
                      name="keywords"
                      value={formData.keywords}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="mot1, mot2, mot3"
                    />
                  </div>
                </div>

                {/* Abstract */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Résumé (max 300 mots) *
                  </label>
                  <textarea
                    name="abstract"
                    value={formData.abstract}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Introduction, méthodes, résultats, conclusion..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.abstract.split(' ').filter(word => word.length > 0).length}/300 mots
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="+229 XX XX XX XX"
                    />
                  </div>
                </div>

                {/* Institution */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Institution d'affiliation *
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nom de votre institution"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Documents (PDF uniquement)
                  </label>
                  <div 
                    onClick={handleFileUpload}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-400 transition-colors duration-300 cursor-pointer"
                  >
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Cliquez pour télécharger vos documents</p>
                    <p className="text-sm text-gray-500">PDF uniquement, max 10MB</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-4"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Soumettre le résumé
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;
