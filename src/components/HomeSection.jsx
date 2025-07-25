// src/components/HomeSection.jsx
import React from 'react';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center py-20">
      <div className="mb-8">
        <span className="text-green-500 font-mono">Bonjour, je m'appelle</span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mt-2 mb-4">
          Baptiste Gerbouin
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-600 dark:text-gray-300 mb-6">
          Je commence mon expérience professionnelle en tant que Data Scientist.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
          Je suis un Data Scientist passionné par l'analyse de données et l'apprentissage automatique. Actuellement, je travaille sur des projets innovants à l'intersection de la technologie et du design.
        </p>
        <a 
          href="#projects" 
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:-translate-y-1 font-medium"
        >
          Voir mes projets
        </a>
      </div>
      
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-green-500 text-4xl mb-3">1-</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Années d'expérience</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Data Scientist pour divers secteurs.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-green-500 text-4xl mb-3">+5</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Projets réalisés</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Applications web, Bases de données, Projet de recherche, Feature engineering.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="text-green-500 text-4xl mb-3">12+</div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Technologies maîtrisées</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Frameworks modernes, bases de données et outils d'analyse de données.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;