import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Database, Cookie, Lock, Users, Share2, Mail, Info } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Engagement de Confidentialité",
      content: "L'Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB) s'engage à protéger la vie privée de ses membres et des utilisateurs de son site web. Cette politique de confidentialité décrit les types d'informations personnelles que nous collectons, comment nous les utilisons, les partageons et les protégeons.",
    },
    {
      icon: Database,
      title: "Collecte des Informations Personnelles",
      content: "Nous collectons des informations personnelles lorsque vous : vous inscrivez en tant que membre, soumettez un résumé ou un article, vous inscrivez à un événement, utilisez notre formulaire de contact, ou vous abonnez à notre newsletter. Ces informations peuvent inclure votre nom, prénom, adresse email, numéro de téléphone, affiliation professionnelle, pays de résidence, et spécialité médicale.",
    },
    {
      icon: Users,
      title: "Utilisation des Informations Personnelles",
      content: "Vos informations personnelles sont utilisées pour : gérer votre adhésion, traiter vos soumissions et inscriptions, communiquer avec vous concernant nos activités et événements, vous envoyer notre newsletter (si vous y avez consenti), améliorer notre site web et nos services, et répondre à des obligations légales ou réglementaires.",
    },
    {
      icon: Lock,
      title: "Protection des Informations",
      content: "Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100%.",
    },
    {
      icon: Share2,
      title: "Partage des Informations",
      content: "Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers sans votre consentement explicite, sauf dans les cas suivants : aux fournisseurs de services tiers qui nous aident à exploiter notre site et à mener nos activités (ex: hébergement web, envoi d'emails), à condition qu'ils acceptent de garder ces informations confidentielles ; si la loi l'exige ou pour protéger nos droits, notre propriété ou notre sécurité, ou ceux d'autrui.",
    },
    {
      icon: Cookie,
      title: "Cookies et Technologies de Suivi",
      content: "Notre site peut utiliser des cookies pour améliorer l'expérience utilisateur. Les cookies sont de petits fichiers stockés sur votre appareil. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous alerter lorsque des cookies sont envoyés. Si vous désactivez les cookies, certaines parties de notre site pourraient ne pas fonctionner correctement.",
    },
    {
      icon: Shield,
      title: "Vos Droits",
      content: "Conformément à la législation en vigueur, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos informations personnelles. Vous avez également le droit de vous opposer ou de limiter le traitement de vos données. Pour exercer ces droits, veuillez nous contacter.",
    },
    {
      icon: Info, 
      title: "Modifications de la Politique de Confidentialité",
      content: "L'AsInAIHB se réserve le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.",
    },
    {
      icon: Mail,
      title: "Contact",
      content: "Pour toute question relative à cette Politique de Confidentialité ou à nos pratiques en matière de données, veuillez nous contacter à : asinainhb.jib@gmail.com.",
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
          <Shield className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Politique de Confidentialité</h1>
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
            L'utilisation continue de nos services après la publication de modifications de cette politique vaudra acceptation de ces modifications.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;