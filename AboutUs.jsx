import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Target, Eye, BookOpen, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const coreValues = [
    { icon: Award, title: "Excellence", description: "Nous visons l'excellence dans toutes nos initiatives, de la formation médicale à la recherche scientifique." },
    { icon: HeartHandshake, title: "Confraternité", description: "Nous cultivons un esprit de solidarité, d'entraide et de respect mutuel entre tous nos membres." },
    { icon: BookOpen, title: "Savoir", description: "Nous promouvons le partage des connaissances, la formation continue et l'innovation médicale." },
    { icon: Target, title: "Engagement", description: "Nous nous engageons activement pour l'amélioration de la santé publique au Bénin." },
  ];

  const historyMilestones = [
    { year: "2008", event: "Création de l'Association des Internes des Hôpitaux du Bénin (AIHB)." },
    { year: "2012", event: "Première Journée Scientifique de l'Interne, marquant un tournant dans nos activités." },
    { year: "2015", event: "Extension de l'association pour inclure les Anciens Internes, devenant l'AsInAIHB." },
    { year: "2020", event: "Lancement de la Revue de l'Interne des Hôpitaux Béninois (RIHB)." },
    { year: "2023", event: "Partenariat stratégique avec le Ministère de la Santé pour la formation continue." },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-slate-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Users className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Qui sommes-nous ?</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            L'Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB) est une organisation professionnelle dédiée à l'excellence médicale, à la formation continue et à la promotion de la santé au Bénin.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="h-8 w-8 mr-3 text-green-600" /> Notre Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Être une association médicale de référence au Bénin et en Afrique, reconnue pour son leadership dans la formation des jeunes médecins, la promotion de la recherche scientifique de haute qualité et sa contribution significative à l'amélioration du système de santé.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nous aspirons à former une communauté de professionnels de santé compétents, éthiques et engagés, capables de relever les défis sanitaires contemporains et futurs.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg group">
              <img  alt="Équipe médicale discutant lors d'une réunion" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1691341364137-90f5cb041dca?q=80&w=800&auto=format&fit=crop" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-700/50 to-transparent"></div>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Nos Valeurs Fondamentales</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover-lift"
              >
                <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-yellow-100 flex items-center justify-center mb-4`}>
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 bg-white p-8 md:p-12 rounded-2xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Notre Histoire en Quelques Dates</h2>
           <div className="relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 transform -translate-x-1/2 hidden md:block"></div>
              {historyMilestones.map((milestone, index) => (
                <div key={milestone.year} className={`mb-8 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="hidden md:block relative px-3">
                    <div className="h-6 w-6 rounded-full bg-green-600 text-white flex items-center justify-center ring-4 ring-white shadow-md">
                       <span className="text-xs font-bold">{index+1}</span>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className={`bg-gradient-to-r ${index % 2 === 0 ? 'from-green-50 to-yellow-50' : 'from-yellow-50 to-green-50'} p-6 rounded-lg shadow-md md:w-1/2 w-full border-l-4 ${index % 2 === 0 ? 'border-green-500 md:border-r-4 md:border-l-0' : 'border-yellow-500'}`}
                  >
                    <span className="font-bold text-green-700 text-lg">{milestone.year}</span>
                    <p className="text-gray-700 mt-1">{milestone.event}</p>
                  </motion.div>
                </div>
              ))}
           </div>
        </motion.section>


        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-green-600 to-green-700 p-10 md:p-16 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Rejoignez Notre Communauté !</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Ensemble, nous pouvons faire progresser la médecine au Bénin. Devenez membre et participez activement à nos initiatives.
          </p>
          <Link to="/adhesion">
            <Button size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-500 font-semibold px-8 py-3 text-lg">
              Devenir Membre
            </Button>
          </Link>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;