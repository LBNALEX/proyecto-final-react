import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import StartPage from './pages/StartPage/StartPage';
import AboutPage from './pages/About/AboutPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
    <BrowserRouter>
      <NavBar/>
      <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
