import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Books from './pages/Books';
import CategoriesPage from './pages/Categories';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </>
  );
}

export default App;
