import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Construction, Home, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PlaceholderPage = () => {
  const { pageName } = useParams();

  const formatPageName = (name) => {
    if (!name) return "Page";
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const title = formatPageName(pageName);

  return (
    <div className="min-h-[calc(100vh-200px)] flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 via-yellow-50 to-slate-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring', stiffness: 120 }}
        className="bg-white p-10 md:p-16 rounded-3xl shadow-2xl max-w-2xl w-full"
      >
        <Construction className="mx-auto h-20 w-20 text-yellow-500 mb-8" />
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          {title}
        </h1>
        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
          Cette page est actuellement en construction. 🚧 <br />
          Notre équipe travaille activement pour vous apporter un contenu de qualité très bientôt.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
          <Button asChild size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 w-full sm:w-auto">
            <Link to="/">
              <ChevronLeft className="h-5 w-5 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
           <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 w-full sm:w-auto">
            <Link to="/contact">
              <Home className="h-5 w-5 mr-2" />
              Nous Contacter
            </Link>
          </Button>
        </div>
      </motion.div>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-12 text-gray-600 text-sm"
      >
        Merci pour votre patience et votre compréhension.
      </motion.p>
    </div>
  );
};

export default PlaceholderPage;