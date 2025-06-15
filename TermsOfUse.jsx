import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, UserCheck, AlertTriangle, Copyright, Mail } from 'lucide-react';

const TermsOfUse = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptation des Conditions",
      content: "En accédant et en utilisant le site web de l'Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB), vous acceptez d'être lié par les présentes Conditions d'Utilisation et toutes les lois et réglementations applicables. Si vous n'êtes pas d'accord avec l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site.",
    },
    {
      icon: UserCheck,
      title: "Utilisation Autorisée",
      content: "Le contenu de ce site est fourni à des fins d'information et d'éducation uniquement. Vous pouvez consulter, télécharger et imprimer le matériel pour votre usage personnel et non commercial, à condition de conserver tous les avis de droits d'auteur et autres avis de propriété. Toute autre utilisation, y compris la reproduction, la modification, la distribution, la transmission ou la republication du contenu de ce site est strictement interdite sans notre consentement écrit préalable.",
    },
    {
      icon: Copyright,
      title: "Propriété Intellectuelle",
      content: "Tous les contenus présents sur ce site, y compris, mais sans s'y limiter, les textes, graphiques, logos, icônes, images, clips audio, téléchargements numériques, compilations de données et logiciels, sont la propriété de l'AsInAIHB ou de ses fournisseurs de contenu et sont protégés par les lois internationales sur le droit d'auteur. L'AsInAIHB et les autres marques déposées et logos sont des marques de commerce ou des marques déposées de l'AsInAIHB.",
    },
     {
      icon: AlertTriangle,
      title: "Exclusion de Garanties et Limitation de Responsabilité",
      content: "Le site et son contenu sont fournis \"tels quels\" et \"selon disponibilité\" sans aucune garantie d'aucune sorte, expresse ou implicite. L'AsInAIHB ne garantit pas que le site sera ininterrompu ou exempt d'erreurs, ni que les défauts seront corrigés. En aucun cas, l'AsInAIHB, ses dirigeants, membres ou affiliés ne pourront être tenus responsables de tout dommage direct, indirect, accessoire, spécial, consécutif ou punitif résultant de votre accès, utilisation ou incapacité à utiliser ce site.",
    },
    {
      icon: Shield,
      title: "Conduite de l'Utilisateur",
      content: "Vous acceptez de ne pas utiliser ce site pour : (a) télécharger, publier ou transmettre tout matériel illégal, nuisible, menaçant, abusif, harcelant, diffamatoire, vulgaire, obscène ou autrement répréhensible ; (b) usurper l'identité d'une personne ou d'une entité ; (c) violer toute loi locale, nationale ou internationale applicable ; (d) collecter ou stocker des données personnelles sur d'autres utilisateurs sans leur consentement explicite.",
    },
    {
      icon: FileText,
      title: "Modifications des Conditions",
      content: "L'AsInAIHB se réserve le droit de réviser ces conditions d'utilisation à tout moment sans préavis. En utilisant ce site, vous acceptez d'être lié par la version alors en vigueur de ces conditions d'utilisation.",
    },
    {
      icon: Mail,
      title: "Contact",
      content: "Pour toute question relative à ces Conditions d'Utilisation, veuillez nous contacter à l'adresse email : asinainhb.jib@gmail.com ou via notre page de contact.",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <FileText className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Conditions d'Utilisation</h1>
          <p className="text-lg text-gray-600">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-green-100 mr-4">
                  <section.icon className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p>{section.content}</p>
              </div>
            </motion.section>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          <p>
            En continuant à utiliser ce site, vous reconnaissez avoir lu, compris et accepté ces Conditions d'Utilisation.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;