import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Briefcase, Phone, MapPin as GlobeIcon, Send, Info, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from '@/components/ui/use-toast';
import { countries } from '@/lib/countries';

const Join = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    country: '',
    specialty: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log("Demande d'adhésion:", formData);
      // Ici, intégrer l'appel à Supabase lorsque la connexion est établie.
      // Pour l'instant, simulation.
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast({
        title: "Demande d'adhésion envoyée (simulation)!",
        description: "Merci pour votre intérêt ! Nous examinerons votre demande et vous contacterons bientôt.",
      });
      setFormData({ lastName: '', firstName: '', email: '', phone: '', country: '', specialty: '', motivation: '' });
    } catch (error) {
      toast({
        title: "Erreur lors de la soumission",
        description: error.message || "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "Réseautage avec des professionnels de la santé",
    "Accès à des formations et ateliers exclusifs",
    "Opportunités de collaboration en recherche",
    "Participation à des événements scientifiques majeurs",
    "Contribution à l'amélioration du système de santé béninois"
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-green-50 via-slate-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Users className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Rejoignez l'AsInAIHB</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Devenez membre de l'Association des Internes et Anciens Internes des Hôpitaux du Bénin (AsInAIHB) et contribuez activement au développement de la médecine au Bénin.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Formulaire d'adhésion</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="lastNameJoin">Nom *</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="lastNameJoin" name="lastName" type="text" required className="pl-10" placeholder="Votre nom" value={formData.lastName} onChange={handleInputChange} />
                  </div>
                </div>
                <div>
                  <Label htmlFor="firstNameJoin">Prénom(s) *</Label>
                  <div className="relative mt-1">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="firstNameJoin" name="firstName" type="text" required className="pl-10" placeholder="Vos prénoms" value={formData.firstName} onChange={handleInputChange} />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="emailJoin">Email *</Label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="emailJoin" name="email" type="email" required className="pl-10" placeholder="votre.email@exemple.com" value={formData.email} onChange={handleInputChange} />
                </div>
              </div>

              <div>
                <Label htmlFor="phoneJoin">Numéro de téléphone *</Label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="phoneJoin" name="phone" type="tel" required className="pl-10" placeholder="+229 XXXXXXXX" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>

              <div>
                <Label htmlFor="countryJoin">Pays de résidence *</Label>
                 <div className="relative mt-1">
                   <GlobeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                    <Select onValueChange={handleCountryChange} value={formData.country} name="country" required>
                      <SelectTrigger className="w-full pl-10">
                        <SelectValue placeholder="Sélectionnez votre pays" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map(country => (
                          <SelectItem key={country.code} value={country.name}>{country.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
              </div>

              <div>
                <Label htmlFor="specialtyJoin">Spécialité / Domaine d'intérêt *</Label>
                <div className="relative mt-1">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="specialtyJoin" name="specialty" type="text" required className="pl-10" placeholder="Ex: Pédiatrie, Cardiologie, Recherche..." value={formData.specialty} onChange={handleInputChange} />
                </div>
              </div>

              <div>
                <Label htmlFor="motivationJoin">Pourquoi souhaitez-vous rejoindre l'AsInAIHB ? *</Label>
                <Textarea id="motivationJoin" name="motivation" required className="mt-1" placeholder="Décrivez brièvement vos motivations..." value={formData.motivation} onChange={handleInputChange} rows={4} />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 py-3">
                {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande"} <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Pourquoi devenir membre ?</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 mt-1">
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl shadow-xl text-white">
              <Info className="h-10 w-10 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Processus d'adhésion</h3>
              <p className="text-green-100 mb-2">
                1. Remplissez et soumettez le formulaire ci-contre.
              </p>
              <p className="text-green-100 mb-2">
                2. Votre demande sera examinée par le bureau exécutif.
              </p>
              <p className="text-green-100 mb-2">
                3. Vous serez contacté(e) concernant le statut de votre demande et les prochaines étapes (cotisation, etc.).
              </p>
              <p className="text-green-100 mt-4">
                Nous avons hâte de vous accueillir parmi nous !
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Simple CheckIcon for benefits list
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

export default Join;