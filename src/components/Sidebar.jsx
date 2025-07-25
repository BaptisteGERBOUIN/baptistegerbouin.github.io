// src/components/Sidebar.jsx
import React from 'react';
import {
  Home,
  Folder,
  Code2,
  Globe,
  FileText,
  Moon,
  Sun,
  Github,
  Linkedin
} from 'lucide-react';

const Sidebar = ({ darkMode, setDarkMode, activeSection, setActiveSection }) => {
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside 
      className="fixed inset-y-0 left-0 w-64 h-screen bg-gray-800 dark:bg-gray-900 text-gray-200 shadow-xl flex flex-col justify-between p-6 z-40"
    >
      <div>
        {/* Profil */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 dark:border-green-600 shadow-lg">
            <img
              src="/moi.jpg"
              alt="Baptiste Gerbouin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-center mt-4 text-xl font-bold text-white">Baptiste Gerbouin</h1>
        <p className="text-center text-green-400 text-sm mt-1">Data Scientist</p>

        {/* Réseaux sociaux */}
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/BaptisteGERBOUIN"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="w-5 h-5 hover:text-green-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/baptiste-gerbouin/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="w-5 h-5 hover:text-green-400" />
          </a>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2">
          <NavItem 
            icon={<Home size={18} />} 
            label="Accueil" 
            active={activeSection === 'home'}
            onClick={() => scrollToSection('home')}
          />
          <NavItem 
            icon={<Folder size={18} />} 
            label="Projets" 
            active={activeSection === 'projects'}
            onClick={() => scrollToSection('projects')}
          />
          <NavItem 
            icon={<Code2 size={18} />} 
            label="Compétences" 
            active={activeSection === 'skills'}
            onClick={() => scrollToSection('skills')}
          />
          <NavItem 
            icon={<FileText size={18} />} 
            label="CV" 
            active={activeSection === 'cv'}
            onClick={() => scrollToSection('cv')}
          />
          <NavItem 
            icon={<Globe size={18} />} 
            label="Me contacter" 
            active={activeSection === 'contact'}
            onClick={() => scrollToSection('contact')}
          />
        </nav>
      </div>

      {/* Dark mode toggle */}
      <div className="mt-8 border-t border-gray-700 pt-4 flex items-center justify-between">
        <span className="text-sm">{darkMode ? "Mode sombre" : "Mode clair"}</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors"
        >
          {darkMode ? (
            <Sun size={18} className="text-yellow-300" />
          ) : (
            <Moon size={18} className="text-blue-400" />
          )}
        </button>
      </div>
    </aside>
  );
};

const NavItem = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
        active 
          ? 'bg-green-600 text-white shadow-md' 
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      <span>{icon}</span>
      <span className="text-base">{label}</span>
    </button>
  );
};

export default Sidebar;