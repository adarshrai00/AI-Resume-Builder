import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import About from './pages/About';
import Home from './pages/Home';
import Root from './pages/Root'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // ✅ FIXED
import Services from './pages/Services';
import COntact from './pages/COntact';
import Create from './pages/Create';
import { Toaster } from 'react-hot-toast';
import ResumeForm from './pages/ResumeForm';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Toaster />
      <Routes>
        <Route path='/' element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
               <Route path="services" element={<Services />} />
          
           <Route path="contact" element={<COntact />} />
           <Route path="create" element={<Create/>}/>
           <Route path="ResumeForm" element={<ResumeForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
