import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Archive, Search, Filter, BookOpen, Download, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';

const Archives = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [yearFilter, setYearFilter] = useState('all');
  const [volumeFilter, setVolumeFilter] = useState('all');

  // Mock data - Remplacer par des données réelles ou API
  const archivedIssues = [
    { id: 1, volume: "Volume 5", number: "Numéro 2", year: 2023, date: "Juin 2023", articles: 12, coverImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop" },
    { id: 2, volume: "Volume 5", number: "Numéro 1", year: 2023, date: "Mars 2023", articles: 10, coverImage: "https://images.unsplash.com/photo-1576487248460-a589538115e4?q=80&w=800&auto=format&fit=crop" },
    { id: 3, volume: "Volume 4", number: "Numéro 4", year: 2022, date: "Décembre 2022", articles: 15, coverImage: "https://images.unsplash.com/photo-1600565193348-f74d3c2cc40a?q=80&w=800&auto=format&fit=crop" },
    { id: 4, volume: "Volume 4", number: "Numéro 3", year: 2022, date: "Septembre 2022", articles: 11, coverImage: "https://images.unsplash.com/photo-1579632579009-a1e0c1530015?q=80&w=800&auto=format&fit=crop" },
    { id: 5, volume: "Volume 4", number: "Numéro 2", year: 2022, date: "Juin 2022", articles: 13, coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" },
  ];

  const years = ['Toutes les années', ...new Set(archivedIssues.map(issue => issue.year))].sort((a,b) => (b === 'Toutes les années' ? -1 : a === 'Toutes les années' ? 1 : b-a));
  const volumes = ['Tous les volumes', ...new Set(archivedIssues.map(issue => issue.volume))];

  const filteredIssues = archivedIssues.filter(issue => {
    const searchMatch = searchTerm === '' || 
                        issue.volume.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        issue.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        issue.date.toLowerCase().includes(searchTerm.toLowerCase());
    const yearMatch = yearFilter === 'all' || issue.year === parseInt(yearFilter);
    const volumeMatch = volumeFilter === 'all' || issue.volume === volumeFilter;
    return searchMatch && yearMatch && volumeMatch;
  });

  const handleViewIssue = (issueTitle) => {
     toast({
      title: `Consultation de ${issueTitle} (simulation)`,
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée. Vous seriez normalement redirigé vers la page du numéro. 🚀",
      duration: 3000,
    });
  }

  return (
    <div className="min-h-screen py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Archive className="mx-auto h-16 w-16 text-green-600 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Archives de la Revue</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explorez les numéros précédents de la Revue de l'Interne des Hôpitaux Béninois (RIHB) et accédez à une mine de connaissances médicales.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div>
              <label htmlFor="searchArchive" className="block text-sm font-medium text-gray-700 mb-1">Rechercher</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="searchArchive"
                  type="text"
                  placeholder="Volume, numéro, date..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="filterYear" className="block text-sm font-medium text-gray-700 mb-1">Année</label>
              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger id="filterYear">
                  <SelectValue placeholder="Filtrer par année" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year === 'Toutes les années' ? 'all' : year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="filterVolume" className="block text-sm font-medium text-gray-700 mb-1">Volume</label>
              <Select value={volumeFilter} onValueChange={setVolumeFilter}>
                <SelectTrigger id="filterVolume">
                  <SelectValue placeholder="Filtrer par volume" />
                </SelectTrigger>
                <SelectContent>
                  {volumes.map(vol => (
                    <SelectItem key={vol} value={vol === 'Tous les volumes' ? 'all' : vol}>{vol}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        {filteredIssues.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIssues.map((issue, index) => (
              <motion.div
                key={issue.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex flex-col group"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img  
                    alt={`Couverture ${issue.volume}, ${issue.number}`}
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                   src="https://images.unsplash.com/photo-1572017208060-abf082c31f55" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold text-shadow">{issue.volume}</h3>
                    <p className="text-lg text-shadow">{issue.number}</p>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-gray-600 text-sm mb-3">
                    <Calendar className="h-4 w-4 mr-2 text-green-600" />
                    <span>Publié en : {issue.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{issue.articles} articles</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm mb-6 flex-grow">
                    Consultez les articles de recherche, cas cliniques et revues publiés dans ce numéro.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full mt-auto border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => handleViewIssue(`${issue.volume}, ${issue.number}`)}
                  >
                    Consulter le numéro
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Archive className="mx-auto h-20 w-20 text-gray-400 mb-6" />
            <p className="text-2xl text-gray-700 font-semibold mb-2">Aucun numéro ne correspond à vos critères.</p>
            <p className="text-gray-500">Essayez d'ajuster vos filtres de recherche.</p>
          </motion.div>
        )}

        {/* Pagination (Placeholder) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-16"
        >
           <Button 
            onClick={() => toast({ title: "🚧 Pagination à venir !"})}
            variant="outline"
            size="lg"
            className="border-gray-400 text-gray-600 hover:bg-gray-100"
            >
            Charger plus
          </Button>
        </motion.div>

      </div>
    </div>
  );
};

export default Archives;