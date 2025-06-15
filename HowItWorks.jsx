import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, CalendarCheck, MessageSquare, Award, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const sections = [
    {
      icon: Users,
      title: "Adhésion et Communauté",
      description: "Devenez membre pour accéder à un réseau dynamique de professionnels. Participez à nos assemblées générales, contribuez aux décisions et bénéficiez du soutien de la communauté.",
      points: [
        "Processus d'adhésion simple et transparent.",
        "Accès à l'annuaire des membres.",
        "Participation active à la vie associative."
      ],
      color: "green"
    },
    {
      icon: BookOpen,
      title: "Publications et Recherche",
      description: "Soumettez vos travaux à notre revue scientifique, accédez aux publications de vos pairs et participez à des projets de recherche collaboratifs. Nous encourageons l'innovation et la diffusion du savoir.",
      points: [
        "Instructions claires pour la soumission d'articles.",
        "Processus de relecture par les pairs.",
        "Valorisation des travaux de recherche locaux."
      ],
      color: "blue"
    },
    {
      icon: CalendarCheck,
      title: "Événements et Formations",
      description: "Inscrivez-vous à nos congrès, journées scientifiques, ateliers et formations continues. Ces événements sont des occasions uniques d'apprentissage, d'échange et de réseautage.",
      points: [
        "Programme scientifique riche et varié.",
        "Intervenants nationaux et internationaux de renom.",
        "Opportunités de présenter vos propres travaux."
      ],
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "Communication et Échanges",
      description: "Restez informé via notre newsletter, nos groupes de discussion et nos plateformes en ligne. Partagez vos expériences, posez vos questions et collaborez avec d'autres membres.",
      points: [
        "Plateforme de discussion sécurisée pour les membres.",
        "Informations régulières sur les activités de l'association.",
        "Canaux de communication dédiés par spécialité ou intérêt."
      ],
      color: "yellow"
    },
    {
      icon: ShieldCheck,
      title: "Gouvernance et Éthique",
      description: "L'AsInAIHB est dirigée par un bureau exécutif élu démocratiquement. Nous opérons selon des statuts clairs et un code d'éthique rigoureux, garantissant transparence et intégrité.",
      points:
      [
        "Statuts et règlements intérieurs accessibles à tous les membres.",
        "Assemblée générale annuelle pour la validation des bilans et l'élection du bureau.",
        "Respect des principes éthiques dans toutes nos activités."
      ],
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "green": return { bg: "bg-green-500", text: "text-green-500", border: "border-green-500", lightBg: "bg-green-50" };
      case "blue": return { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500", lightBg: "bg-blue-50" };
      case "purple": return { bg: "bg-purple-500", text: "text-purple-500", border: "border-purple-500", lightBg: "bg-purple-50" };
      case "yellow": return { bg: "bg-yellow-500", text: "text-yellow-500", border: "border-yellow-500", lightBg: "bg-yellow-50" };
      case "red": return { bg: "bg-red-500", text: "text-red-500", border: "border-red-500", lightBg: "bg-red-50" };
      default: return { bg: "bg-gray-500", text: "text-gray-500", border: "border-gray-500", lightBg: "bg-gray-50" };
    }
  };

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Award className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Fonctionnement de l'AsInAIHB</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment notre association opère pour servir au mieux ses membres et la communauté médicale béninoise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => {
            const colors = getColorClasses(section.color);
            return (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`p-8 rounded-2xl shadow-xl bg-white border-l-8 ${colors.border} overflow-hidden`}
              >
                <div className="flex items-start md:items-center flex-col md:flex-row mb-6">
                  <div className={`p-3 rounded-full ${colors.lightBg} mr-0 md:mr-6 mb-4 md:mb-0`}>
                    <section.icon className={`h-10 w-10 ${colors.text}`} />
                  </div>
                  <h2 className={`text-3xl font-bold ${colors.text}`}>{section.title}</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{section.description}</p>
                <ul className="space-y-3">
                  {section.points.map((point, pIndex) => (
                    <motion.li 
                      key={pIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pIndex * 0.1 + 0.2 }}
                      className="flex items-start"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 ${colors.bg} rounded-full mr-3 mt-1 flex items-center justify-center`}>
                        <CheckIcon className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </div>

         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Des Questions ?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Si vous avez d'autres questions sur notre fonctionnement, n'hésitez pas à nous contacter.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-500 font-semibold px-8 py-3 text-lg">
              Nous Contacter
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default HowItWorks;