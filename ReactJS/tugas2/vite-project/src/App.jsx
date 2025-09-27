import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css'

import Layout from './components/Layout';
import AnimatedPage from './components/AnimatedPage';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';

function App() {
  const location = useLocation();

  return (
    <>
      {/* AnimatePresence mendeteksi kapan komponen di dalamnya berganti */}
      <AnimatePresence mode="wait">
        {/* Kita menggunakan location.key agar AnimatePresence tahu rute mana yang aktif */}
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
            <Route index element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="team" element={<AnimatedPage><TeamPage /></AnimatedPage>} />
            <Route path="contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
        </Route>
      </Routes>
      </AnimatePresence>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
