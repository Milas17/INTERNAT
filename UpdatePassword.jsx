import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { Lock, Eye, EyeOff, KeyRound } from 'lucide-react';

const UpdatePassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        // This event indicates the user has followed a recovery link.
        // They are in a special state where they can update their password.
        // No need to navigate away, they should be on this page.
      } else if (session?.user) {
        // If user is regularly logged in, they shouldn't be on password recovery page without a token.
        // However, Supabase handles this by requiring a recovery token for the update.
      }
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast({ title: "Erreur", description: "Les mots de passe ne correspondent pas.", variant: "destructive" });
      return;
    }
    if (password.length < 6) {
      toast({ title: "Erreur", description: "Le mot de passe doit contenir au moins 6 caractères.", variant: "destructive" });
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      
      toast({ title: "Succès", description: "Votre mot de passe a été mis à jour avec succès. Vous pouvez maintenant vous connecter." });
      navigate('/connexion');
    } catch (error) {
      console.error("Erreur de mise à jour du mot de passe:", error);
      setMessage(error.message || "Une erreur est survenue lors de la mise à jour de votre mot de passe.");
      toast({ title: "Erreur", description: error.message || "Impossible de mettre à jour le mot de passe.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-100 via-yellow-50 to-red-50 relative overflow-hidden">
      <div className="absolute inset-0 african-pattern opacity-10"></div>
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="relative max-w-md w-full space-y-8 bg-white p-8 sm:p-12 rounded-xl shadow-2xl z-10"
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
            Mettre à jour le mot de passe
          </h1>
          <p className="mt-3 text-base text-gray-600">
            Entrez votre nouveau mot de passe ci-dessous.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Label htmlFor="password">Nouveau mot de passe</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-10"
                placeholder="Nouveau mot de passe"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Label htmlFor="confirmPassword">Confirmer le nouveau mot de passe</Label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="pl-10 pr-10"
                placeholder="Confirmer le mot de passe"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
              </Button>
            </div>
          </motion.div>

          {message && (
            <motion.p 
              initial={{opacity: 0}} animate={{opacity:1}}
              className="text-sm text-red-600 text-center"
            >
              {message}
            </motion.p>
          )}

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-600 via-primary to-green-700 hover:from-green-700 hover:via-primary hover:to-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-4">
                 <KeyRound className="h-5 w-5 text-green-100 group-hover:text-white" />
              </span>
              {loading ? 'Mise à jour...' : 'Mettre à jour le mot de passe'}
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdatePassword;