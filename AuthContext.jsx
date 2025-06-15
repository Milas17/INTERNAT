import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { toast } from '@/components/ui/use-toast';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Erreur lors de la récupération de la session:", error.message);
        toast({ title: "Erreur de session", description: error.message, variant: "destructive" });
      }
      
      if (session) {
         const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('id, first_name, last_name, country')
          .eq('id', session.user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') { 
          console.error("Erreur de chargement du profil:", profileError);
        }
        
        setUser({ ...session.user, ...(session.user.user_metadata || {}), ...(profileData || {}) });
      }
      setLoading(false);
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (session) {
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('id, first_name, last_name, country')
          .eq('id', session.user.id)
          .single();

        if (profileError && profileError.code !== 'PGRST116') {
           console.error("Erreur de chargement du profil (listener):", profileError);
        }
        setUser({ ...session.user, ...(session.user.user_metadata || {}), ...(profileData || {}) });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setLoading(false);
      throw error;
    }
    let userProfile = null;
    if (data.user) {
       const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, country')
        .eq('id', data.user.id)
        .single();

      if (profileError && profileError.code !== 'PGRST116') {
        console.error("Erreur de chargement du profil après connexion:", profileError);
      }
      userProfile = profileData;
      setUser({ ...data.user, ...(data.user.user_metadata || {}), ...(userProfile || {}) });
    }
    setLoading(false);
    return { user: data.user ? { ...data.user, ...(data.user.user_metadata || {}), ...(userProfile || {}) } : null, error };
  };

  const signUp = async (email, password, userData) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          country: userData.country,
        },
      },
    });
    if (error) {
      setLoading(false);
      throw error;
    }
    setLoading(false);
    return { data, error };
  };

  const signOut = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signOut();
    if (error) {
      setLoading(false);
      throw error;
    }
    setUser(null);
    setLoading(false);
    return { error };
  };
  
  const value = {
    user,
    signIn,
    signUp,
    signOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};