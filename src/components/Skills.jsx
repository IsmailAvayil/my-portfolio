import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiTailwindcss, SiCss, SiRedux,
  SiBootstrap, SiGitlab, SiWebpack, SiMysql, SiC, SiAxios,
  SiPython, SiPostgresql, SiGit, SiGithub, SiVite
} from 'react-icons/si';
import { Sparkles, Layers, Globe, Workflow, Database } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Skills' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'state_api', label: 'State & APIs' },
  { id: 'tools', label: 'Tools & DevOps' },
  { id: 'backend_db', label: 'Languages & DB' },
];

const skillsData = [
  // Frontend
  { name: 'React.js', category: 'frontend', categoryLabel: 'Frontend', icon: <SiReact size={26} />, brandColor: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', categoryLabel: 'Frontend', icon: <SiNextdotjs size={26} />, brandColor: '#ffffff' },
  { name: 'JavaScript (ES6+)', category: 'frontend', categoryLabel: 'Frontend', icon: <SiJavascript size={26} />, brandColor: '#F7DF1E' },
  { name: 'TypeScript', category: 'frontend', categoryLabel: 'Frontend', icon: <SiTypescript size={26} />, brandColor: '#3178C6' },
  { name: 'Tailwind CSS', category: 'frontend', categoryLabel: 'UI & Styling', icon: <SiTailwindcss size={26} />, brandColor: '#06B6D4' },
  { name: 'Bootstrap', category: 'frontend', categoryLabel: 'UI & Styling', icon: <SiBootstrap size={26} />, brandColor: '#7952B3' },
  { name: 'HTML5', category: 'frontend', categoryLabel: 'Frontend', icon: <SiHtml5 size={26} />, brandColor: '#E34F26' },
  { name: 'CSS3 / Responsive', category: 'frontend', categoryLabel: 'UI & Styling', icon: <SiCss size={26} />, brandColor: '#1572B6' },

  // State Management & APIs
  { name: 'Redux / Redux Toolkit', category: 'state_api', categoryLabel: 'State Mgmt', icon: <SiRedux size={26} />, brandColor: '#764ABC' },
  { name: 'Zustand', category: 'state_api', categoryLabel: 'State Mgmt', icon: <Layers size={26} />, brandColor: '#ec4899' },
  { name: 'React Context & Hooks', category: 'state_api', categoryLabel: 'State Mgmt', icon: <SiReact size={26} />, brandColor: '#61DAFB' },
  { name: 'REST APIs & Integration', category: 'state_api', categoryLabel: 'API Integration', icon: <Globe size={26} />, brandColor: '#10B981' },
  { name: 'Axios & Fetch API', category: 'state_api', categoryLabel: 'API Integration', icon: <SiAxios size={26} />, brandColor: '#5A29E4' },

  // Tools & DevOps
  { name: 'Git', category: 'tools', categoryLabel: 'Version Control', icon: <SiGit size={26} />, brandColor: '#F05032' },
  { name: 'GitHub', category: 'tools', categoryLabel: 'Collaboration', icon: <SiGithub size={26} />, brandColor: '#ffffff' },
  { name: 'GitLab', category: 'tools', categoryLabel: 'Version Control', icon: <SiGitlab size={26} />, brandColor: '#FC6D26' },
  { name: 'Vite', category: 'tools', categoryLabel: 'Build Tool', icon: <SiVite size={26} />, brandColor: '#646CFF' },
  { name: 'Webpack', category: 'tools', categoryLabel: 'Bundler', icon: <SiWebpack size={26} />, brandColor: '#8DD6F9' },
  { name: 'CI/CD & Agile', category: 'tools', categoryLabel: 'Practices', icon: <Workflow size={26} />, brandColor: '#A855F7' },

  // Languages & DB
  { name: 'Python', category: 'backend_db', categoryLabel: 'Language', icon: <SiPython size={26} />, brandColor: '#3776AB' },
  { name: 'PostgreSQL', category: 'backend_db', categoryLabel: 'Database', icon: <SiPostgresql size={26} />, brandColor: '#4169E1' },
  { name: 'MySQL (Basics)', category: 'backend_db', categoryLabel: 'Database', icon: <SiMysql size={26} />, brandColor: '#4479A1' },
  { name: 'C Programming', category: 'backend_db', categoryLabel: 'Language', icon: <SiC size={26} />, brandColor: '#A8B9CC' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-surface/20">
      {/* Decorative blurred background orb */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[130px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4"
          >
            <Sparkles size={14} />
            My Technical Arsenal
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary rounded-full mb-6"
          />
          <p className="text-foreground/70 max-w-xl text-balance">
            A comprehensive overview of my technical toolset, modern frameworks, and engineering competencies.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                  : 'glass text-foreground/70 hover:text-white hover:bg-surface-hover'
              }`}
            >
              {cat.label}
              <span className="ml-2 text-xs opacity-60">
                ({cat.id === 'all' ? skillsData.length : skillsData.filter(s => s.category === cat.id).length})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.35 }}
                key={skill.name}
                className="glass p-5 rounded-2xl flex flex-col items-center text-center justify-center group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
              >
                <div 
                  className="p-3.5 rounded-xl bg-surface mb-3 transition-transform duration-300 group-hover:scale-110 shadow-inner"
                  style={{ color: skill.brandColor }}
                >
                  {skill.icon}
                </div>

                <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>

                <span className="text-[11px] text-foreground/50 capitalize mt-1">
                  {skill.categoryLabel}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
