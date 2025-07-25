// src/App.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/Competences';
import ResumeSection from './components/Cv';
import ContactSection from './components/ContactSection';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true' || false;
  });
  
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
    
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'othersites', 'cv'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar toujours visible et fixe */}
      <Sidebar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
      {/* Contenu principal avec marge permanente */}
      <main className="flex-1 ml-64">
        <div className="max-w-5xl mx-auto px-4 py-8 lg:px-8">
          <HomeSection />
          <ProjectsSection />
          <SkillsSection /> 
          <ResumeSection />
          <ContactSection />
        </div>
      </main>
    </div>
  );
}

export default App;