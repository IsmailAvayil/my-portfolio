import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "FindFirst",
    subtitle: "Construction Industry Discovery Platform",
    description: "Developed a digital platform connecting customers with professionals, industry experts, and service providers across construction stages. Built responsive interfaces using React.js and TypeScript, implemented Zustand state management, and integrated backend services.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18615f8?auto=format&fit=crop&q=80&w=1000",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Zustand", "Python", "PostgreSQL"],
    github: "https://github.com/IsmailAvayil",
    live: "https://github.com/IsmailAvayil"
  },
  {
    title: "Tabetai",
    subtitle: "Food Delivery & Restaurant Discovery",
    description: "Developed a web-based food delivery application enabling users to browse restaurants, explore menus, manage interactive shopping carts, and place orders. Managed state with Redux and integrated Node.js & MySQL backend APIs.",
    image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&q=80&w=1000",
    tech: ["React.js", "JavaScript", "Redux", "Bootstrap", "Node.js", "MySQL"],
    github: "https://github.com/IsmailAvayil",
    live: "https://github.com/IsmailAvayil"
  },
  {
    title: "Popular",
    subtitle: "Used Vehicle Marketplace",
    description: "Developed a responsive vehicle marketplace enabling users to browse, search, and list used vehicles for sale. Built user-friendly interfaces supporting vehicle discovery, real-time filtering, and buyer-seller interactions.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000",
    tech: ["React.js", "JavaScript", "Redux", "Tailwind CSS", "Node.js", "MySQL"],
    github: "https://github.com/IsmailAvayil",
    live: "https://github.com/IsmailAvayil"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden group flex flex-col h-full border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="text-xs font-semibold text-primary mb-2">{project.subtitle}</p>
                )}
                <p className="text-foreground/70 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-surface-hover text-foreground/80 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-white transition-colors">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover transition-colors">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
