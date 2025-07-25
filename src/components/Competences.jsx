// src/components/SkillsSection.jsx
import React from 'react';
import { 
  Database, 
  Cpu, 
  Code, 
  LayoutDashboard, 
  GitBranch, 
  Cloud, 
  BarChart2,
  Users,
  MessageSquare,
  Lightbulb,
  BookOpen
} from 'lucide-react';

const SkillsSection = () => {
  // Compétences techniques
    const technicalSkills = [
    {
        category: "Data Science & IA",
        icon: <BarChart2 size={20} className="text-green-500" />,
        skills: [
        { name: "Machine Learning", logo: "ml.svg" },
        { name: "Deep Learning", logo: "dl.svg" },
        { name: "Data Visualization", logo: "dataviz.svg" }
        ]
    },
    {
        category: "Langages de Programmation",
        icon: <Code size={20} className="text-green-500" />,
        skills: [
        { name: "Python", logo: "python.svg" },
        { name: "R", logo: "r.svg" },
        { name: "SQL / NoSQL", logo: "database.svg" },
        ]
    },
    {
        category: "Bases de Données",
        icon: <Database size={20} className="text-green-500" />,
        skills: [
        { name: "PostgreSQL", logo: "postgresql.svg" },
        { name: "MySQL", logo: "mysql.svg" },
        { name: "MongoDB", logo: "mongodb.svg" }
        ]
    },
    {
        category: "Cloud & DevOps",
        icon: <Cloud size={20} className="text-green-500" />,
        skills: [
        { name: "Azure", logo: "azure.svg" },
        { name: "Docker", logo: "docker.svg" },
        { name: "Git", logo: "git.svg" }
        ]
    }
    ];


  // Compétences transversales
  const softSkills = [
    {
      category: "Communication",
      icon: <MessageSquare size={20} className="text-green-500" />,
      skills: [
        "Présentation technique",
        "Rédaction de rapports",
        "Visualisation de données",
        "Formation d'équipe"
      ]
    },
    {
      category: "Collaboration",
      icon: <Users size={20} className="text-green-500" />,
      skills: [
        "Travail en équipe pluridisciplinaire",
        "Gestion de projet Agile",
        "Mentorat"
      ]
    },
    {
      category: "Résolution de Problèmes",
      icon: <Lightbulb size={20} className="text-green-500" />,
      skills: [
        "Analyse critique",
        "Optimisation de processus",
        "Innovation technique"
      ]
    },
    {
      category: "Apprentissage Continu",
      icon: <BookOpen size={20} className="text-green-500" />,
      skills: [
        "Veille technologique",
        "Expérimentation",
        "Partage de connaissances"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="flex items-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mr-4">Compétences Acquises</h2>
        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
      </div>
      
      <div className="mb-16">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
          <Cpu className="mr-2 text-green-500" size={20} />
          Compétences Techniques
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technicalSkills.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center mb-4">
                {group.icon}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white ml-2">
                  {group.category}
                </h4>
              </div>
              
                <ul className="space-y-3">
                {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center space-x-3">
                    <img
                        src={`/${skill.logo}`}
                        alt={skill.name}
                        className="w-6 h-6 object-contain"
                    />
                    <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                    </li>
                ))}
                </ul>

            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
          <Users className="mr-2 text-green-500" size={20} />
          Compétences Transversales
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {softSkills.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6"
            >
              <div className="flex items-center mb-4">
                {group.icon}
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white ml-2">
                  {group.category}
                </h4>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
          <LayoutDashboard className="mr-2 text-green-500" size={20} />
          Outils & Technologies
        </h3>
        
        <div className="flex flex-wrap gap-3">
          <SkillBadge name="Python" />
          <SkillBadge name="Pandas" />
          <SkillBadge name="NumPy" />
          <SkillBadge name="Dash" />
          <SkillBadge name="Scipy" />
          <SkillBadge name="Scikit-learn" />
          <SkillBadge name="TensorFlow" />
          <SkillBadge name="PyTorch" />
          <SkillBadge name="Matplotlib" />
          <SkillBadge name="Seaborn" />
          <SkillBadge name="Plotly" />
          <SkillBadge name="SQL" />
          <SkillBadge name="PostgreSQL" />
          <SkillBadge name="MongoDB" />
          <SkillBadge name="Docker" />
          <SkillBadge name="AZURE" />
          <SkillBadge name="Git" />
          <SkillBadge name="Jupyter" />
          <SkillBadge name="R Studio" />
        </div>
      </div>
    </section>
  );
};

const SkillBadge = ({ name, icon }) => (
  <div className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
    {icon && <span className="mr-2">{icon}</span>}
    <span className="text-sm font-medium">{name}</span>
  </div>
);

export default SkillsSection;