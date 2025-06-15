import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit3, ListChecks, CheckSquare, MessageCircle, Book } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Instructions = () => {
  const instructionSections = [
    {
      icon: FileText,
      title: "Types d'Articles Acceptés",
      points: [
        "Articles originaux de recherche clinique ou fondamentale.",
        "Revues de la littérature (narratives, systématiques, méta-analyses).",
        "Cas cliniques pertinents et bien documentés.",
        "Lettres à l'éditeur et commentaires sur des articles publiés.",
        "Éditoriaux (sur invitation)."
      ],
      color: "blue"
    },
    {
      icon: Edit3,
      title: "Préparation du Manuscrit",
      points: [
        "Langue : Français ou Anglais.",
        "Format : Microsoft Word (.doc ou .docx).",
        "Police : Times New Roman, taille 12, double interligne.",
        "Résumé : Structuré (max 300 mots), avec mots-clés (3-5).",
        "Structure : Introduction, Matériel et Méthodes, Résultats, Discussion, Conclusion, Références (style Vancouver).",
        "Tableaux et figures : Numérotés, avec titres et légendes clairs, soumis séparément."
      ],
      color: "green"
    },
    {
      icon: ListChecks,
      title: "Processus de Soumission",
      points: [
        "Soumission en ligne via notre plateforme (voir page 'Soumettre un résumé').",
        "Lettre de couverture signée par tous les auteurs.",
        "Déclaration de conflits d'intérêts.",
        "Approbation du comité d'éthique (si applicable)."
      ],
      color: "purple"
    },
    {
      icon: CheckSquare,
      title: "Processus de Relecture et Décision",
      points: [
        "Relecture initiale par le comité de rédaction pour conformité.",
        "Relecture par les pairs (double aveugle) par au moins deux experts.",
        "Décision éditoriale (acceptation, révision mineure/majeure, rejet) communiquée sous 6-8 semaines.",
        "Processus d'appel possible pour les décisions de rejet."
      ],
      color: "yellow"
    },
    {
      icon: MessageCircle,
      title: "Politique Éditoriale et Éthique",
      points:
      [
        "Respect des recommandations de l'ICMJE (International Committee of Medical Journal Editors).",
        "Détection de plagiat systématique.",
        "Politique de correction et de rétractation.",
        "Confidentialité des manuscrits soumis et des informations des relecteurs."
      ],
      color: "red"
    }
  ];
  
  const getColorClasses = (color) => {
    switch (color) {
      case "blue": return { bg: "bg-blue-500", text: "text-blue-500", border: "border-blue-500", lightBg: "bg-blue-50" };
      case "green": return { bg: "bg-green-500", text: "text-green-500", border: "border-green-500", lightBg: "bg-green-50" };
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
          <Book className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Instructions aux Auteurs</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Guide complet pour la préparation et la soumission de vos manuscrits à la Revue de l'Interne des Hôpitaux Béninois (RIHB).
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {instructionSections.map((section, index) => {
             const colors = getColorClasses(section.color);
            return (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`p-8 rounded-2xl shadow-xl bg-white border-t-8 ${colors.border} overflow-hidden`}
            >
              <div className="flex items-start md:items-center flex-col md:flex-row mb-6">
                <div className={`p-3 rounded-full ${colors.lightBg} mr-0 md:mr-6 mb-4 md:mb-0`}>
                    <section.icon className={`h-10 w-10 ${colors.text}`} />
                </div>
                <h2 className={`text-3xl font-bold ${colors.text}`}>{section.title}</h2>
              </div>
              <ul className="space-y-3 pl-0 md:pl-16">
                {section.points.map((point, pIndex) => (
                  <motion.li 
                    key={pIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: pIndex * 0.05 + 0.1 }}
                    className="flex items-start"
                  >
                    <div className={`flex-shrink-0 w-2 h-2 ${colors.bg} rounded-full mr-3 mt-2.5`}></div>
                    <span className="text-gray-700 leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          )})}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 p-10 rounded-3xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Prêt à Soumettre ?</h2>
          <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
            Consultez notre page de soumission pour commencer le processus et partager votre recherche avec la communauté.
          </p>
          <Link to="/soumission">
            <Button size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-500 font-semibold px-8 py-3 text-lg">
              Soumettre un Manuscrit
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Instructions;