
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Download, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Publications = () => {
  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 3000,
    });
  };

  const publications = [
    {
      id: 1,
      title: "Épidémiologie des infections nosocomiales en pédiatrie",
      author: "Dr. Marie ADJOVI",
      date: "2024-01-15",
      category: "Pédiatrie",
      abstract: "Étude rétrospective sur l'incidence des infections nosocomiales dans le service de pédiatrie du CNHU-HKM...",
      downloads: 245
    },
    {
      id: 2,
      title: "Prise en charge de l'hypertension artérielle au Bénin",
      author: "Dr. Jean KOUDOU",
      date: "2024-02-20",
      category: "Cardiologie",
      abstract: "Analyse des protocoles de traitement de l'hypertension artérielle dans les centres de santé béninois...",
      downloads: 189
    },
    {
      id: 3,
      title: "Complications du diabète de type 2 en milieu tropical",
      author: "Dr. Fatima SANNI",
      date: "2024-03-10",
      category: "Endocrinologie",
      abstract: "Étude prospective des complications du diabète de type 2 chez les patients suivis au Bénin...",
      downloads: 167
    },
    {
      id: 4,
      title: "Avancées en Neurologie Cognitive au Bénin",
      author: "Dr. Koffi AKPAN",
      date: "2024-04-05",
      category: "Neurologie",
      abstract: "Revue des dernières recherches et applications cliniques en neurologie cognitive dans le contexte béninois...",
      downloads: 132
    }
  ];

  const categories = [
    "Toutes les catégories",
    "Pédiatrie",
    "Cardiologie",
    "Endocrinologie",
    "Chirurgie",
    "Neurologie",
    "Gynécologie-Obstétrique",
    "Pneumologie",
    "Gastro-entérologie",
    "Ophtalmologie",
    "Dermatologie",
    "Psychiatrie",
    "Anesthésie-Réanimation",
    "Radiologie",
    "Santé Publique",
    "Autre"
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
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Publications Scientifiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les travaux de recherche et publications de nos membres, 
            contribuant à l'avancement de la médecine au Bénin et en Afrique.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center hover-lift">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">150+</div>
            <div className="text-blue-100">Publications totales</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center hover-lift">
            <User className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">85</div>
            <div className="text-green-100">Auteurs contributeurs</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center hover-lift">
            <Download className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">12K+</div>
            <div className="text-purple-100">Téléchargements</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Rechercher</label>
              <input
                type="text"
                placeholder="Titre, auteur, mots-clés..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                onChange={() => handleFeatureClick('Recherche')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                onChange={() => handleFeatureClick('Filtre par catégorie')}
              >
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Année</label>
              <select 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                onChange={() => handleFeatureClick('Filtre par année')}
              >
                <option>Toutes les années</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full text-sm font-medium">
                        {publication.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(publication.date).toLocaleDateString('fr-FR')}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
                      {publication.title}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <User className="h-4 w-4 mr-2" />
                      <span className="font-medium">{publication.author}</span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {publication.abstract}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Download className="h-4 w-4 mr-1" />
                        {publication.downloads} téléchargements
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleFeatureClick('Aperçu')}
                          className="hover:bg-green-50 hover:border-green-300"
                        >
                          Aperçu
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => handleFeatureClick('Téléchargement')}
                          className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Télécharger
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            onClick={() => handleFeatureClick('Charger plus')}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-3"
          >
            Charger plus de publications
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
