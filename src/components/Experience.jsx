import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Talrop",
    location: "Kochi, Kerala, India",
    period: "Dec 2024 – Apr 2026",
    description: "Developed and maintained scalable web applications using React.js and Next.js with focus on performance, usability, and responsive design. Built reusable modular components, implemented state management with Redux, Zustand, and Context API, and integrated REST APIs using Axios and Fetch API.",
    skills: ["React.js", "Next.js", "Redux", "Zustand", "Context API", "REST APIs", "Tailwind CSS", "Axios"]
  },
  {
    role: "Software Developer",
    company: "Grandrevers Technologies Pvt. Ltd.",
    location: "Kochi, Kerala, India",
    period: "Jun 2024 – Nov 2024",
    description: "Developed and maintained web application features using modern frontend practices. Leveraged GitHub and GitLab for version control and branching, contributed to CI/CD pipelines, and collaborated within Agile sprint planning.",
    skills: ["React.js", "JavaScript", "GitHub", "GitLab", "CI/CD", "Agile Development", "Code Reviews"]
  },
  {
    role: "Technical Support Staff | Contract Based Freelance",
    company: "KRHS Pandikasala",
    location: "Malappuram, Kerala, India",
    period: "Sep 2022 – Apr 2024",
    description: "Developed and deployed a responsive institutional school website using HTML5, CSS3, and JavaScript. Designed and implemented a full Library Management System for books, student records, and borrow/return workflows.",
    skills: ["JavaScript", "HTML5", "CSS3", "Library Management System", "Form Validation", "Git Deployment"]
  },
  {
    role: "Junior Software Engineer – Trainee",
    company: "Neovibe Innovative Technologies (P) Ltd",
    location: "Kerala, India",
    period: "Sep 2021 – Jul 2022",
    description: "Developed and enhanced frontend features using React.js and JavaScript based on design specifications. Built reusable components, handled state/props, and translated Figma mockups into pixel-perfect responsive pages.",
    skills: ["React.js", "JavaScript", "Component State", "Props", "Responsive Web Design", "Debugging"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-secondary rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line connecting timeline items */}
          <div className="absolute left-0 md:left-1/2 top-4 bottom-4 w-px bg-border -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full glass border border-primary/50 text-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <Briefcase size={18} />
                </div>

                {/* Content empty half for spacing */}
                <div className="hidden md:block md:w-1/2"></div>
                
                {/* Content box */}
                <motion.div 
                  initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}
                >
                  <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-colors group">
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <h4 className="text-base text-foreground/80 font-medium">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-xs text-foreground/50 mb-4">{exp.location}</p>
                    )}
                    <p className="text-foreground/60 leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-surface-hover rounded-full text-xs font-medium text-foreground/80 border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
