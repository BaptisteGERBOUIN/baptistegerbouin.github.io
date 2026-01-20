// src/components/ProjectsSection.jsx
import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dashboard intéractif pour explorer les données de l'API Open Data Singapore",
      description: "Visualisations dynamiques sur l’Éducation, le Logement et l’Économie via Plotly & Dash. Modèle prédictif du prix de revente d’un appartement HDB en temps réel. Statistiques générées automatiquement par dataset. Design responsive adapté desktop/mobile.",
      tags: ["Dash", "Plotly", "Catboost", "Render", "Gunicorn"],
      image: "singapore.png",
      github: "https://github.com/Hisqkq/Open-Data-Singapore?tab=readme-ov-file",
    },
    {
      title: "CARREFOUR - Défi IA : Prédiction de réachat de produits",
      description: "Recommandation de produit pour les clients CARREFOUR via Machine Learning",
      tags: ["Python", "LSTM", "Parquet", "LightGBM"],
      image: "carrefour.png",
    },
    {
      title: "Deep Learning et Classification d’images",
      description: "Classification d'images pour la détection automatisée d'éoliennes sous PyTorch",
      tags: ["PyTorch", "CNN", "Tansfert Learning", "ResNet", "Data Augmentation"],
      image: "eolienne.png"
    },
    {
      title: "Visualisation interactive des ressources en eau via APIs Hub'eau & MongoDB",
      description: "Développement d'un pipeline d'extraction automatisé via les APIs Hub'eau (flux JSON/GeoJSON) avec optimisation des paramètres de requêtage. Mise en place et gestion d'une base de données MongoDB pour le stockage de données hétérogènes et volumineuses. Création d'un dashboard interactif (Python/Dash/Plotly) incluant des cartographies dynamiques et des indicateurs de performance des services d'eau.",
      tags: ["Python", "JSON", "GeoJson", "API", "MongoDB", "Dash"],
      image: "map_quantity.png",
      github: "https://github.com/BaptisteGERBOUIN/French-water-resources-analysis-platform",
    },
    {
      title: "Implémentation d'un agent autonome par Apprentissage par Renforcement",
      description: "Développement d'un modèle d'apprentissage par renforcement appliqué au Morpion et Puissance 4 via la méthode de Monte Carlo Tree Search",
      tags: ["Reinforcement Learning", "Monte Carlo", "Tree Search", "Python"],
      image: "MCTS.png",
    },
    {
      title: "Architecte de Base de Données & Dashboard Interactif (Modèle MVC)",
      description: "Architecture et optimisation d'une base de données relationnelle complexe : modélisation 3NF, vues dynamiques et interface de dashboarding.",
      tags: ["MVC", "SQL / PostGreSQL", "Formes Normales", "Automatisation"],
      image: "bddproject.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mr-4">Projets Récents</h2>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02]"
          >
            {project.image && (
              <img 
                src={`${import.meta.env.BASE_URL}${project.image}`} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <button className="text-sm font-medium text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 mr-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Voir le projet →
                    </a>
                  )}
                </button>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      Code source
                    </a>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-medium transition-colors">
          Voir tous les projets
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;