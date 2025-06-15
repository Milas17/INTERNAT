import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Publications from '@/pages/Publications';
import Events from '@/pages/Events';
import Submission from '@/pages/Submission';
import Contact from '@/pages/Contact';
import Bureau from '@/pages/Bureau';
import Login from '@/pages/Login';
import Members from '@/pages/Members';
import Join from '@/pages/Join';
import AboutUs from '@/pages/footer/AboutUs';
import HowItWorks from '@/pages/footer/HowItWorks';
import Instructions from '@/pages/footer/Instructions';
import Archives from '@/pages/footer/Archives';
import TermsOfUse from '@/pages/footer/TermsOfUse';
import PrivacyPolicy from '@/pages/footer/PrivacyPolicy';
import { AuthProvider } from '@/contexts/AuthContext';
import PlaceholderPage from '@/pages/PlaceholderPage';
import UpdatePassword from '@/pages/UpdatePassword';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-green-100">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/evenements" element={<Events />} />
              <Route path="/soumission" element={<Submission />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/bureau" element={<Bureau />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/membres" element={<Members />} />
              <Route path="/adhesion" element={<Join />} />
              
              <Route path="/qui-sommes-nous" element={<AboutUs />} />
              <Route path="/fonctionnement" element={<HowItWorks />} />
              <Route path="/instructions-revue" element={<Instructions />} />
              <Route path="/archives-revue" element={<Archives />} />
              <Route path="/conditions-utilisation" element={<TermsOfUse />} />
              <Route path="/politique-donnees" element={<PrivacyPolicy />} />
              <Route path="/mise-a-jour-mot-de-passe" element={<UpdatePassword />} />


              <Route path="/page-en-construction/:pageName" element={<PlaceholderPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;