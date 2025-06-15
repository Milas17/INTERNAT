import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Activity, Target, Lightbulb, CalendarCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Bureau = () => {

  const teamMembers = [
    {
      name: "Dr. Yévèdo TOHODJEDE",
      role: "Président",
      specialty: "Médecin Pédiatre",
      institution: "CNHU-HKM de Cotonou",
      description: "Dirige l'association, supervise les activités et représente l'AsInAIHB auprès des instances nationales et internationales.",
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/7ecd2ddac5c33afb894b31f0d0318841.jpg"
    },
    {
      name: "Dr. Marie ADJOVI",
      role: "Vice-Présidente",
      specialty: "Médecin Interniste",
      institution: "CNHU-HKM de Cotonou",
      description: "Seconde le président, coordonne les comités scientifiques et veille à la qualité des programmes de formation.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" 
    },
    {
      name: "Dr. Jean KOUDOU",
      role: "Secrétaire Général",
      specialty: "Cardiologue",
      institution: "Clinique Universitaire de Cardiologie",
      description: "Gère l'administration, la communication interne et externe, et assure le suivi des adhésions et partenariats.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Fatoumata DIALLO",
      role: "Trésorière Générale",
      specialty: "Anesthésiste-Réanimatrice",
      institution: "Hôpital de Zone de Ouidah",
      description: "Responsable de la gestion financière, de la collecte des cotisations et de la préparation des budgets.",
      image: "https://images.unsplash.com/photo-1612349316228-5942a9b489c2?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Koffi AKPAN",
      role: "Chargé de l'Organisation",
      specialty: "Neurologue",
      institution: "Service de Neurologie, CNHU-HKM",
      description: "Planifie et coordonne les événements scientifiques, les congrès et les journées de formation.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Aïcha ZOSSOU",
      role: "Chargée des Affaires Sociales",
      specialty: "Médecin de Santé Publique",
      institution: "Direction Départementale de la Santé",
      description: "S'occupe du bien-être des membres, des actions sociales et de la promotion de la confraternité.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const bureauActivities = [
    {
      icon: CalendarCheck,
      title: "Organisation d'Événements Scientifiques",
      description: "Congrès annuels, journées thématiques, symposiums et ateliers pratiques pour le développement professionnel continu.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Lightbulb,
      title: "Promotion de la Recherche",
      description: "Soutien aux projets de recherche, publication de la Revue de l'Interne, et diffusion des travaux scientifiques.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Target,
      title: "Plaidoyer et Représentation",
      description: "Défense des intérêts des internes et anciens internes, et participation active aux politiques de santé.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Users,
      title: "Renforcement de la Confraternité",
      description: "Activités sociales, culturelles et sportives pour consolider les liens entre les membres de l'association.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const handleMemberAction = (memberName) => {
    toast({
      title: `Action pour ${memberName}`,
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée. Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Le Bureau de l'AsInAIHB</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'équipe dirigeante de l'Association des Internes et Anciens Internes des Hôpitaux du Bénin et nos principales activités.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center mb-10"
          >
            <Users className="h-10 w-10 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Membres du Bureau Exécutif</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover flex flex-col"
              >
                <div className="relative">
                  <img 
                    alt={`Photo de ${member.name}`}
                    className="w-full h-64 object-cover"
                   src={member.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white text-shadow">{member.name}</h3>
                    <p className="text-green-300 font-semibold text-shadow">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-sm text-gray-600 mb-1"><Briefcase className="inline h-4 w-4 mr-1 text-green-500" /> {member.specialty}</p>
                  <p className="text-sm text-gray-600 mb-4 truncate"><Activity className="inline h-4 w-4 mr-1 text-green-500" /> {member.institution}</p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-6 flex-grow">{member.description}</p>
                  <Button
                    onClick={() => handleMemberAction(member.name)}
                    variant="outline"
                    className="w-full mt-auto border-green-600 text-green-600 hover:bg-green-50"
                  >
                    Contacter {member.name.split(' ')[1]}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center mb-10"
          >
            <Activity className="h-10 w-10 text-green-600 mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Activités du Bureau</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bureauActivities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 * index }}
                className="bg-white rounded-2xl shadow-lg p-8 flex items-start space-x-6 hover-lift"
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${activity.bgColor} flex items-center justify-center`}>
                  <activity.icon className={`h-8 w-8 ${activity.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{activity.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Rejoignez l'AsInAIHB !</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Devenez membre de notre association et contribuez activement au développement de la médecine au Bénin.
          </p>
          <Button 
            size="lg"
            onClick={() => toast({
              title: "Adhésion",
              description: "🚧 Cette fonctionnalité n'est pas encore implémentée. Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
              duration: 3000,
            })}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-semibold"
          >
            Devenir Membre
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default Bureau;