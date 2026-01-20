// src/components/ResumeSection.jsx
import React from 'react';
import { 
  GraduationCap,
  Briefcase,
  Code,
  BrainCircuit,
  Globe,
  Languages,
  Car,
  HeartHandshake
} from 'lucide-react';

const ResumeSection = () => {
  return (
    <section id="cv" className="py-20">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mr-4">Curriculum Vitae</h2>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Baptiste Gerbouin</h1>
            <p className="text-lg text-green-600 dark:text-green-400 mt-1">Data Scientist</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-3">
              <a href="tel:+33641190650" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                06 41 19 06 50
              </a>
              <a href="mailto:bgerbouin@gmail.com" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                bgerbouin@gmail.com
              </a>
            </div>
            
            <div className="flex space-x-4 mt-3">
              <a href="https://www.linkedin.com/in/baptiste-gerbouin/" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/BaptisteGERBOUIN" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Colonne de gauche */}
        <div className="space-y-8">
          {/* Formation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="text-green-500 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Formation</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Master 2 : CMI ISI</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Septembre 2025
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Cursus Master en Ingénierie, Ingénierie de la Statistique et de l'informatique</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Université de Bordeaux</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Licence 3 : CMI ISI</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Juin 2023
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-1">Programme Erasmus</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Université Libre de Bruxelles</p>
              </div>
            </div>
          </div>
          
          {/* Compétences */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <BrainCircuit className="text-green-500 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Compétences</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Techniques</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Python (Pandas, Numpy, Scipy, Scikit-learn, Plotly, Dash, PyTorch, TensorFlow)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">R, C, SQL(PostgreSQL), NoSQL(MongoDB), Git</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Machine Learning, Deep Learning, Réseaux de neurones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Big Data, SGBD, Fine Tuning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Azure, Docker</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 dark:text-white mb-2">Mathématiques</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Probabilités & Statistiques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Optimisation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Algèbre linéaire</span>
                  </li>
                </ul>
                
                <h4 className="font-medium text-gray-800 dark:text-white mt-4 mb-2">Soft-Skills</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Autonome, sérieux, rigoureux</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Travail d'équipe</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Informations complémentaires */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Globe className="text-green-500 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Informations complémentaires</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Languages className="text-gray-600 dark:text-gray-400 mr-3" size={18} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Langues</h4>
                  <p className="text-gray-600 dark:text-gray-400">Français (natif), Anglais (courant), Espagnol (intermédiaire)</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Car className="text-gray-600 dark:text-gray-400 mr-3" size={18} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Permis</h4>
                  <p className="text-gray-600 dark:text-gray-400">Permis B</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HeartHandshake className="text-gray-600 dark:text-gray-400 mr-3 mt-1" size={18} />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white">Bénévolat</h4>
                  <p className="text-gray-600 dark:text-gray-400">Courses solidaires pour 'Les blouses roses' et 'Chiens guides d'aveugles'</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Colonne de droite - Expériences */}
        <div className="space-y-8">
          {/* Expériences professionnelles */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Briefcase className="text-green-500 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Expériences professionnelles</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Stage Data Scientist – SUEZ</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Été 2025
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Amélioration des modèles hybrides via un feature engineering ciblé</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Développement d'une base scalable pour données environnementales massives (11 To+)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Exploration statistique avancée et visualisation interactive (Dash + Flask)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Évaluation des modèles sur plusieurs horizons avec NSE</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Expériences universitaires */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center mb-4">
              <Code className="text-green-500 mr-2" size={20} />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Expériences universitaires</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Dashboard d'analyse des ressources en eau</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Sept 2024 - Fév 2025
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Développement d'un tableau de bord avec Dash pour le suivi en temps réel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Conception d'un pipeline automatisé en Python avec stockage dans MongoDB</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Amélioration de la précision des analyses en temps réel pour la prise de décision</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Défi IA - Prédiction de réachat de produits</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Sept 2024 - en cours
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Développement d'un modèle prédictif pour recommander des produits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Analyse de 85M+ lignes de données clients et produits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Optimisation avec deep learning et systèmes de recommandation avancés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Évaluation avec Hit Rate @10</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Base de Données INSEE</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Janv - Avril 2024
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Conception d'une base relationnelle PostgreSQL pour données massives INSEE</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Automatisation via scripts Python</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Optimisation des requêtes avec triggers et index</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Réduction du temps de réponse de 30%</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-start">
                  <h4 className="font-medium text-gray-800 dark:text-white">Monte Carlo Tree Search</h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    Sept 2023 - Janv 2024
                  </span>
                </div>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Développement d'un modèle d'apprentissage par renforcement appliqué au Morpion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-400">Conception d'algorithmes d'exploration/exploitation via MCTS</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="/CV_BaptisteGerbouin.pdf" 
          className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg font-medium transition-colors"
        >
          Télécharger mon CV complet
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ResumeSection;