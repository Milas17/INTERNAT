import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Users, BookOpen, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Membres actifs', value: '500+', color: 'text-blue-600' },
    { icon: BookOpen, label: 'Publications', value: '150+', color: 'text-green-600' },
    { icon: Calendar, label: 'Événements annuels', value: '25+', color: 'text-purple-600' },
    { icon: Award, label: 'Années d\'excellence', value: '15+', color: 'text-orange-600' },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            >
              Bienvenue à l'AsInAIHB
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center mb-8"
            >
              <div className="animate-float">
                <img  
                  className="h-32 w-32 rounded-full shadow-2xl ring-8 ring-white/30" 
                  alt="Logo Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB)"
                 src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/f80480585c60ff2808d92d9d68c7c6c6.png" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-yellow-400 text-green-800 hover:bg-yellow-500 font-bold px-8 py-3">
                <Link to="/adhesion">Rejoignez l'AsInAIHB !</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Mot du Président</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden card-hover"
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20"></div>
                <img  
                  className="w-full h-64 md:h-full object-cover" 
                  alt="Photo du Dr. Yévèdo TOHODJEDE, Président de l'AsInAIHB"
                 src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/7ecd2ddac5c33afb894b31f0d0318841.jpg" />
              </div>
              
              <div className="md:w-2/3 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    <span className="text-2xl text-green-600 font-bold">"</span>
                    Chers consœurs, chers confrères,<br />
                    C'est avec un immense plaisir que je vous souhaite la bienvenue sur la plateforme officielle de l'Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB).
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Ce site a été conçu comme un espace d'échange, de valorisation et de diffusion de nos activités scientifiques.
                    Vous y trouverez les publications de nos membres, les annonces de congrès et de journées scientifiques, ainsi que la possibilité de soumettre vos propres travaux.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Plus qu'un simple site, cette plateforme est le reflet de notre engagement commun pour l'excellence, la collaboration et le rayonnement scientifique.
                    Je vous invite à vous approprier cet outil, à le faire vivre, et à y contribuer activement.
                    Ensemble, faisons de cette initiative une source d'inspiration et de progression pour toute notre communauté médicale.
                    <span className="text-2xl text-green-600 font-bold">"</span>
                  </p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center space-x-4">
                       <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-green-500/30">
                        <img 
                          alt="Photo miniature du Dr. Yévèdo TOHODJEDE"
                          className="w-full h-full object-cover"
                         src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/7ecd2ddac5c33afb894b31f0d0318841.jpg" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">Dr. Yévèdo TOHODJEDE</p>
                        <p className="text-green-600 font-medium text-sm">Pédiatre Néphrologue au CNHU-HKM de Cotonou, Ancien Interne des Hôpitaux du Bénin</p>
                        <p className="text-green-600 font-medium text-sm">Assistant-Chef de Clinique de Pédiatrie et Génétique Médicale à la FSS de Cotonou</p>
                        <p className="text-gray-600">Président de l'AsInAIHB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-12">Contactez-nous</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <Mail className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-green-100">asinainhb.jib@gmail.com</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <Phone className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Téléphone</h3>
                <p className="text-green-100">+229 0140424297</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
                <p className="text-green-100">Cotonou, Bénin (Siège: FSS)</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;