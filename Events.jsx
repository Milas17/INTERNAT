import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ExternalLink, Send, User, Phone as PhoneIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { toast } from '@/components/ui/use-toast';

const Events = () => {
  const [registrationData, setRegistrationData] = useState({
    firstName: '',
    lastName: '',
    whatsappNumber: '',
    eventId: null,
    eventName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);


  const handleFeatureClick = (feature) => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine requête ! 🚀",
      duration: 3000,
    });
  };

  const openRegistrationModal = (event) => {
    setRegistrationData({ 
      firstName: '', 
      lastName: '', 
      whatsappNumber: '', 
      eventId: event.id, 
      eventName: event.title 
    });
    setIsDialogOpen(true);
  };

  const handleRegistrationChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("Données d'inscription:", registrationData);
      // Ici, vous intégrerez l'appel à Supabase lorsque la connexion sera établie.
      // Pour l'instant, on simule.
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      toast({
        title: "Inscription réussie (simulation)!",
        description: `Vous êtes inscrit à : ${registrationData.eventName}. Nous vous contacterons via WhatsApp.`,
      });
      setIsDialogOpen(false);
      setRegistrationData({ firstName: '', lastName: '', whatsappNumber: '', eventId: null, eventName: '' });
    } catch (error) {
      toast({
        title: "Erreur d'inscription",
        description: error.message || "Une erreur est survenue lors de l'inscription.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Premières Journées Scientifiques de l'Interne des Hôpitaux du Bénin",
      date: "2025-06-26",
      time: "08:00 - 18:00",
      location: "Grand Amphithéâtre Professeur Édouard GOUDOTE, FSS/UAC, Cotonou",
      description: "Thème: Formations médicales face aux maladies émergentes et réémergentes. Sous-thèmes: Formation médicale classique et formation des Internes des Hôpitaux, Défis des pathologies émergentes et réémergentes, Stratégies de prévention, Simulation en chirurgie endoscopique.",
      participants: "Enseignants, Médecins spécialistes, DES, Médecins Généralistes, Internes, Étudiants et Paramédicaux",
      type: "Journée Scientifique",
      status: "upcoming",
      image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/6da8c957-c5d0-4959-a018-be58aefc29c5/e7773102b47a5aa59d84dbfefadc95da.jpg",
      allowRegistration: true
    },
    {
      id: 2,
      title: "Congrès National de Médecine Interne",
      date: "2025-09-20",
      time: "09:00 - 17:00",
      location: "Hôtel Golden Tulip, Cotonou",
      description: "Congrès annuel rassemblant les spécialistes en médecine interne du Bénin et de la sous-région.",
      participants: 250,
      type: "Congrès",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb165172?q=80&w=800&auto=format&fit=crop",
      allowRegistration: true
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Formation en Échographie Cardiaque",
      date: "2024-05-15",
      time: "08:00 - 17:00",
      location: "Centre de Formation Médicale",
      description: "Formation pratique en échographie cardiaque pour les internes et jeunes médecins.",
      participants: 80,
      type: "Formation",
      status: "past",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
      allowRegistration: false
    },
  ];

  const getEventTypeColor = (type) => {
    const colors = {
      'Congrès': 'bg-gradient-to-r from-purple-500 to-purple-600',
      'Journée Scientifique': 'bg-gradient-to-r from-blue-500 to-blue-600',
      'Symposium': 'bg-gradient-to-r from-green-500 to-green-600',
      'Formation': 'bg-gradient-to-r from-orange-500 to-orange-600',
      'Conférence': 'bg-gradient-to-r from-red-500 to-red-600'
    };
    return colors[type] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  const EventCard = ({ event, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover flex flex-col"
    >
      {event.image && (
        <div className="w-full h-56 overflow-hidden">
          <img 
            alt={`Affiche pour ${event.title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
           src={event.image} />
        </div>
      )}
      <div className={`h-2 ${getEventTypeColor(event.type)} ${!event.image ? 'rounded-t-2xl' : ''}`}></div>
      
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <span className={`px-3 py-1 text-white rounded-full text-xs sm:text-sm font-medium ${getEventTypeColor(event.type)}`}>
                {event.type}
              </span>
              {event.status === 'upcoming' && (
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-medium">
                  À venir
                </span>
              )}
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 hover:text-green-600 transition-colors duration-300">
              {event.title}
            </h3>
          </div>
        </div>
        
        <div className="space-y-3 mb-6 text-sm sm:text-base">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-3 text-green-600 flex-shrink-0" />
            <span className="font-medium">{new Date(event.date).toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-3 text-green-600 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-start text-gray-600">
            <MapPin className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-1" />
            <span>{event.location}</span>
          </div>
          
          <div className="flex items-start text-gray-600">
            <Users className="h-5 w-5 mr-3 text-green-600 flex-shrink-0 mt-1" />
            <span>{typeof event.participants === 'number' ? `${event.participants} participants` : event.participants}</span>
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base flex-grow">
          {event.description}
        </p>
        
        <div className="flex space-x-3 mt-auto">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => handleFeatureClick('Plus d\'infos')}
            className="hover:bg-green-50 hover:border-green-300"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Plus d'infos
          </Button>
          {event.status === 'upcoming' && event.allowRegistration && (
            <Button 
              size="sm"
              onClick={() => openRegistrationModal(event)}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
            >
              S'inscrire
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Événements Scientifiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Participez à nos congrès, journées scientifiques et formations pour enrichir vos connaissances 
            et échanger avec la communauté médicale béninoise.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center hover-lift">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">25+</div>
            <div className="text-blue-100">Événements/an</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center hover-lift">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">2000+</div>
            <div className="text-green-100">Participants</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center hover-lift">
            <MapPin className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">15</div>
            <div className="text-purple-100">Villes</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center hover-lift">
            <Clock className="h-12 w-12 mx-auto mb-4" />
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-orange-100">Heures de formation</div>
          </div>
        </motion.div>

        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Événements à venir</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </section>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Événements passés</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Organisez votre événement</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Vous souhaitez organiser un événement scientifique ? Contactez-nous pour bénéficier 
            de notre soutien et de notre réseau.
          </p>
          <Button 
            size="lg"
            onClick={() => handleFeatureClick('Organiser un événement')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-semibold"
          >
            Proposer un événement
          </Button>
        </motion.div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold gradient-text">Inscription à l'événement</DialogTitle>
            <DialogDescription className="text-gray-600">
              Inscrivez-vous à "{registrationData.eventName}".
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleRegistrationSubmit} className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="lastNameReg">Nom</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="lastNameReg" name="lastName" value={registrationData.lastName} onChange={handleRegistrationChange} required className="pl-10" placeholder="Votre nom" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="firstNameReg">Prénom(s)</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="firstNameReg" name="firstName" value={registrationData.firstName} onChange={handleRegistrationChange} required className="pl-10" placeholder="Votre/vos prénom(s)" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="whatsappNumberReg">Numéro WhatsApp</Label>
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input id="whatsappNumberReg" name="whatsappNumber" type="tel" value={registrationData.whatsappNumber} onChange={handleRegistrationChange} required className="pl-10" placeholder="+229 XXXXXXXX" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>Annuler</Button>
              <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
                {isSubmitting ? "Inscription en cours..." : "S'inscrire"} <Send className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Events;