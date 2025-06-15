import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn, LogOut, UserCircle, Users, Home, Briefcase, Users2, FileText, CalendarDays, Send, Info, ShieldCheck, UserPlus as UserPlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  const navigation = [
    { name: 'Accueil', href: '/', icon: Home },
    { name: 'Le Bureau', href: '/bureau', icon: Briefcase},
    { name: 'Nos Membres', href: '/membres', icon: Users2},
    { name: 'Publications', href: '/publications', icon: FileText },
    { name: 'Événements', href: '/evenements', icon: CalendarDays },
    { name: 'Soumettre un résumé', href: '/soumission', icon: Send },
    { name: 'Adhérer', href: '/adhesion', icon: UserPlusIcon },
    { name: 'Contact', href: '/contact', icon: Info },
  ];
  
  const isActive = (path) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Déconnexion réussie",
        description: "Vous avez été déconnecté avec succès.",
      });
      navigate('/');
      setIsMenuOpen(false);
    } catch (error) {
      toast({
        title: "Erreur de déconnexion",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const displayName = user?.first_name || user?.email?.split('@')[0];


  return (
    <header className="relative z-50">
      <div className="benin-flag-gradient h-2 w-full"></div>
      
      <div className="bg-white shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 african-pattern opacity-5 pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 sm:py-6">
            <Link to="/" className="flex items-center space-x-3 sm:space-x-4" onClick={() => setIsMenuOpen(false)}>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="flex-shrink-0"
              >
                <img  
                  className="h-12 w-12 sm:h-14 sm:w-14 rounded-full shadow-lg ring-4 ring-green-500/20 hover-lift" 
                  alt="Logo AsInAIHB"
                 src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/f80480585c60ff2808d92d9d68c7c6c6.png" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden md:block"
              >
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text leading-tight">
                  Association des Internes et Anciens Internes<br />
                  <span className="text-sm sm:text-base lg:text-lg">des Hôpitaux du Bénin (AsInAIHB)</span>
                </h1>
              </motion.div>
               <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="md:hidden"
              >
                <h1 className="text-base font-bold gradient-text leading-tight">
                  AsInAIHB
                </h1>
              </motion.div>
            </Link>

            <div className="flex items-center space-x-2">
              {!loading && user ? (
                <>
                  <span className="hidden sm:inline text-xs lg:text-sm text-gray-700 mr-1">Bienvenue, {displayName}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSignOut}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    title="Se déconnecter"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </>
              ) : !loading && !user ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {navigate('/connexion'); setIsMenuOpen(false);}}
                  className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 text-xs sm:text-sm"
                >
                  <LogIn className="h-4 w-4 mr-1 sm:mr-2" />
                  Connexion
                </Button>
              ) : (
                <div className="h-9 w-20 sm:w-24 bg-gray-200 animate-pulse rounded-md"></div>
              )}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-green-600 hover:text-green-700"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={isMenuOpen}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex pb-3 justify-center">
            <motion.ul 
              className="flex space-x-1 lg:space-x-2 flex-wrap items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {navigation.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.04 * index + 0.3 }}
                  className="py-1"
                >
                  <Link
                    to={item.href}
                    className={`relative px-2 py-2 lg:px-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-xs lg:text-sm flex items-center space-x-1.5 ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-md'
                        : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {item.icon && <item.icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" />}
                    <span>{item.name}</span>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="activeTabDesktop"
                        className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-lg -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden fixed inset-x-0 top-0 pt-[76px] bg-white shadow-xl z-40 h-screen overflow-y-auto"
            >
              <div className="px-4 py-6 space-y-3">
                <div className="mb-6 text-center">
                  <h2 className="text-xl font-bold gradient-text">
                    Menu AsInAIHB
                  </h2>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 text-base ${
                      isActive(item.href)
                        ? 'text-white bg-gradient-to-r from-green-600 to-green-700 shadow-md'
                        : 'text-gray-800 hover:text-green-700 hover:bg-green-100'
                    }`}
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;