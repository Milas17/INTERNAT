import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, User, UserPlus, MapPin as GlobeIcon, KeyRound, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; 
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { countries } from '@/lib/countries';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { supabase } from '@/lib/supabaseClient';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [isSendingResetEmail, setIsSendingResetEmail] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setIsSendingResetEmail(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(forgotPasswordEmail, {
        redirectTo: `${window.location.origin}/mise-a-jour-mot-de-passe`, // You'll need to create this page
      });
      if (error) throw error;
      toast({
        title: "Email de réinitialisation envoyé",
        description: "Si un compte existe pour cet email, vous recevrez des instructions pour réinitialiser votre mot de passe.",
      });
      setIsForgotPasswordOpen(false);
      setForgotPasswordEmail('');
    } catch (error) {
      console.error("Erreur envoi email réinitialisation:", error);
      toast({
        title: "Erreur",
        description: error.message || "Impossible d'envoyer l'email de réinitialisation. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSendingResetEmail(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      let authResponse;
      if (isSignUp) {
        if (!formData.firstName || !formData.lastName || !formData.country) {
          throw new Error("Veuillez remplir tous les champs requis pour l'inscription.");
        }
        authResponse = await signUp(formData.email, formData.password, { 
          firstName: formData.firstName, 
          lastName: formData.lastName, 
          country: formData.country 
        });
        toast({
          title: "Inscription réussie!",
          description: "Veuillez vérifier votre email pour confirmer votre compte. Le lien de confirmation vous connectera automatiquement.",
        });
      } else {
        authResponse = await signIn(formData.email, formData.password);
        if(authResponse.error) throw authResponse.error;
        toast({
          title: "Connexion réussie!",
          description: `Bienvenue ${authResponse.user?.first_name || authResponse.user?.email?.split('@')[0]}!`,
        });
      }
      
      if (authResponse.error && authResponse.error.message !== "User already registered") throw authResponse.error;
      
      if (authResponse.user && !isSignUp) {
         navigate('/'); 
      } else if (isSignUp && (authResponse.data?.user || authResponse.error?.message === "User already registered")) {
        // Keep user on login page after signup to await confirmation, or if user already exists
        setFormData({ email: formData.email, password: '', firstName: '', lastName: '', country: '' }); // Clear password and other fields but keep email
         if(authResponse.error?.message === "User already registered"){
            setIsSignUp(false); // Switch to login form
         }
      }

    } catch (error) {
      console.error("Auth error:", error);
      toast({
        title: `Erreur ${isSignUp ? "d'inscription" : "de connexion"}`,
        description: error.message || "Une erreur est survenue.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: -20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 }
  };

  const itemVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-yellow-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-10"></div>
      <motion.div
        key={isSignUp ? "signup" : "login"}
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative max-w-lg w-full space-y-8 bg-white p-8 sm:p-12 rounded-xl shadow-2xl z-10"
      >
        <div className="text-center">
          <motion.img
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 100 }}
            className="mx-auto h-24 w-auto mb-6"
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/6da8c957-c5d0-4959-a018-be58aefc29c5/f80480585c60ff2808d92d9d68c7c6c6.png"
            alt="AsInAIHB Logo"
          />
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
            {isSignUp ? "Rejoignez l'AsInAIHB" : "Espace Membre"}
          </h1>
          <p className="mt-3 text-base text-gray-600">
            {isSignUp ? "Créez votre compte pour accéder à tous nos services." : "Connectez-vous pour accéder à votre espace."}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: 0.2 }}>
                <Label htmlFor="lastName">Nom</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="lastName" name="lastName" type="text" required className="pl-10" placeholder="Votre nom de famille" value={formData.lastName} onChange={handleInputChange} />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: 0.3 }}>
                <Label htmlFor="firstName">Prénoms</Label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="firstName" name="firstName" type="text" required className="pl-10" placeholder="Vos prénoms" value={formData.firstName} onChange={handleInputChange} />
                </div>
              </motion.div>
              <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: 0.4 }}>
                <Label htmlFor="country">Pays de résidence</Label>
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
              </motion.div>
            </>
          )}
          <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: isSignUp ? 0.5 : 0.2 }}>
            <Label htmlFor="email-address">Adresse e-mail</Label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input id="email-address" name="email" type="email" autoComplete="email" required className="pl-10" placeholder="adresse@email.com" value={formData.email} onChange={handleInputChange} />
            </div>
          </motion.div>
          <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: isSignUp ? 0.6 : 0.3 }} className="pt-2">
            <Label htmlFor="password">Mot de passe</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input id="password" name="password" type="password" autoComplete={isSignUp ? "new-password" : "current-password"} required className="pl-10" placeholder="Au moins 6 caractères" value={formData.password} onChange={handleInputChange} />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: isSignUp ? 0.7 : 0.4 }} className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 text-sm">
            <Button type="button" variant="link" onClick={() => { setIsSignUp(!isSignUp); setFormData({ email: '', password: '', firstName: '', lastName: '', country: '' }); }} className="font-medium text-primary hover:text-green-700 p-0">
              {isSignUp ? "Déjà un compte ? Se connecter" : "Pas de compte ? S'inscrire"}
            </Button>
            {!isSignUp && (
              <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
                <DialogTrigger asChild>
                   <Button type="button" variant="link" className="font-medium text-primary hover:text-green-700 p-0">
                    Mot de passe oublié ?
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white rounded-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold gradient-text">Réinitialiser le mot de passe</DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Entrez votre email pour recevoir un lien de réinitialisation.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleForgotPasswordSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email-forgot">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input id="email-forgot" type="email" value={forgotPasswordEmail} onChange={(e) => setForgotPasswordEmail(e.target.value)} required className="pl-10" placeholder="votre.email@exemple.com" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="button" variant="outline" onClick={() => setIsForgotPasswordOpen(false)}>Annuler</Button>
                      <Button type="submit" disabled={isSendingResetEmail} className="button-primary">
                        {isSendingResetEmail ? "Envoi en cours..." : "Envoyer le lien"} <KeyRound className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            )}
          </motion.div>

          <motion.div variants={itemVariants} transition={{ duration: 0.4, delay: isSignUp ? 0.8 : 0.5 }} className="pt-4">
            <Button type="submit" disabled={isSubmitting} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 via-primary to-green-700 hover:from-green-700 hover:via-primary hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                {isSignUp ? <UserPlus className="h-5 w-5 text-green-100 group-hover:text-white" /> : <LogIn className="h-5 w-5 text-green-100 group-hover:text-white" />}
              </span>
              {isSubmitting ? (isSignUp ? "Création du compte..." : "Connexion en cours...") : (isSignUp ? "Créer mon compte" : "Se connecter")}
            </Button>
          </motion.div>
        </form>
        
        {isSignUp && (
          <motion.p 
            initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 0.9}}
            className="mt-6 text-xs text-center text-gray-500">
            En créant un compte, vous acceptez nos <Link to="/conditions-utilisation" className="font-medium text-primary hover:text-green-700">Conditions d'utilisation</Link> et notre <Link to="/politique-donnees" className="font-medium text-primary hover:text-green-700">Politique de confidentialité</Link>.
          </motion.p>
        )}
        
        <motion.div 
            initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1}}
            className="mt-8 text-center">
            <Link to="/" className="text-sm font-medium text-primary hover:text-green-700 flex items-center justify-center">
                <HelpCircle className="h-4 w-4 mr-1" />
                Retour à l'accueil ou besoin d'aide ?
            </Link>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Login;