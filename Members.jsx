import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Search, Filter, UserCircle, Briefcase, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const specialties = ["Toutes les spécialités", "Pédiatrie", "Cardiologie", "Neurologie", "Chirurgie", "Médecine Interne", "Santé Publique", "Anesthésie-Réanimation"];

  useEffect(() => {
    const fetchMembers = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const mockMembers = [
        { id: 1, lastName: 'TOHODJEDE', firstName: 'Yévèdo', specialty: 'Pédiatrie Néphrologie', institution: 'CNHU-HKM, Cotonou', country: 'Bénin', avatar: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/7ecd2ddac5c33afb894b31f0d0318841.jpg' },
        { id: 2, lastName: 'ADJOVI', firstName: 'Marie', specialty: 'Médecine Interne', institution: 'CNHU-HKM, Cotonou', country: 'Bénin', avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop' },
        { id: 3, lastName: 'KOUDOU', firstName: 'Jean', specialty: 'Cardiologie', institution: 'Clinique Univ. de Cardiologie', country: 'Bénin', avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&auto=format&fit=crop' },
        { id: 4, lastName: 'DIALLO', firstName: 'Fatoumata', specialty: 'Anesthésie-Réanimation', institution: 'Hôpital de Zone de Ouidah', country: 'Bénin', avatar: 'https://images.unsplash.com/photo-1612349316228-5942a9b489c2?q=80&w=200&auto=format&fit=crop' },
        { id: 5, lastName: 'AKPAN', firstName: 'Koffi', specialty: 'Neurologie', institution: 'Service de Neurologie, CNHU-HKM', country: 'Bénin', avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop' },
        { id: 6, lastName: 'ZOSSOU', firstName: 'Aïcha', specialty: 'Santé Publique', institution: 'Direction Dép. de la Santé', country: 'Togo', avatar: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=200&auto=format&fit=crop' },
        { id: 7, lastName: 'DOE', firstName: 'John', specialty: 'Chirurgie', institution: 'General Hospital Lagos', country: 'Nigeria', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop' },
      ];
      setMembers(mockMembers);
      setFilteredMembers(mockMembers);
      setIsLoading(false);
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    let result = members;
    if (searchTerm) {
      result = result.filter(member =>
        member.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.specialty.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (specialtyFilter !== 'all') {
      result = result.filter(member => member.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()) || (specialtyFilter === "Pédiatrie" && member.specialty === "Pédiatrie Néphrologie"));
    }
    setFilteredMembers(result);
  }, [searchTerm, specialtyFilter, members]);

  const handleContactMember = (memberName) => {
    toast({
      title: `Contacter ${memberName}`,
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
          <Users className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Nos Membres</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez la communauté des professionnels de santé qui composent l'AsInAIHB.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="searchMember" className="mb-2 block">Rechercher un membre</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="searchMember"
                  type="text"
                  placeholder="Nom, prénom, spécialité..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="filterSpecialty" className="mb-2 block">Filtrer par spécialité</Label>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                 <Select value={specialtyFilter} onValueChange={setSpecialtyFilter}>
                  <SelectTrigger className="w-full pl-10">
                    <SelectValue placeholder="Choisir une spécialité" />
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map(spec => (
                      <SelectItem key={spec} value={spec === "Toutes les spécialités" ? "all" : spec}>
                        {spec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des membres...</p>
          </div>
        ) : filteredMembers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col text-center items-center p-6"
              >
                <div className="relative w-32 h-32 rounded-full mb-4 ring-4 ring-green-500/30 shadow-lg overflow-hidden">
                  <img 
                    src={member.avatar || `https://ui-avatars.com/api/?name=${member.firstName}+${member.lastName}&background=0D843D&color=fff&size=128`}
                    alt={`Profil de ${member.firstName} ${member.lastName}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.firstName} {member.lastName}</h3>
                <p className="text-green-600 font-medium text-sm mt-1">{member.specialty}</p>
                <p className="text-gray-500 text-xs mt-1 line-clamp-2"><Briefcase className="inline h-3 w-3 mr-1" />{member.institution}</p>
                <p className="text-gray-500 text-xs mt-1"><MapPin className="inline h-3 w-3 mr-1" />{member.country}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4 border-green-600 text-green-600 hover:bg-green-50 w-full"
                  onClick={() => handleContactMember(`${member.firstName} ${member.lastName}`)}
                >
                  Contacter
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <UserCircle className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <p className="text-xl text-gray-600">Aucun membre ne correspond à vos critères de recherche.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Members;