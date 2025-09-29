import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css'

import Layout from './components/Layout';
import AnimatedPage from './components/AnimatedPage';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import AlbumPage from './pages/AlbumPage';
import initialBooks from './utils/book'; 

function App() {
  const [books, setBooks] = useState(initialBooks);

  const addBook = () => {
    const newBook = {
      id: `new-${books.length + 1}`, // Gunakan ID yang lebih unik untuk menghindari duplikasi
      title: `Buku Baru #${books.length - 8}`,
      author: "Penulis Baru",
      year: new Date().getFullYear(),
      description: "Deskripsi untuk buku baru yang ditambahkan secara dinamis.",
      image: `https://picsum.photos/seed/new-book-${books.length + 1}/400/300`
    };
    setBooks(prevBooks => [...prevBooks, newBook]);
  };
  const location = useLocation();

  return (
    <>
      {/* AnimatePresence mendeteksi kapan komponen di dalamnya berganti */}
      <AnimatePresence mode="wait">
        {/* Kita menggunakan location.pathname agar AnimatePresence tahu rute mana yang aktif */}
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout books={books} addBook={addBook} />}>
            <Route index element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="team" element={<AnimatedPage><TeamPage /></AnimatedPage>} />
            <Route path="contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
            <Route path="album" element={<AnimatedPage><AlbumPage /></AnimatedPage>} />
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
