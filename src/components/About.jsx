import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Zap, Layers, ArrowRight } from 'lucide-react';

const highlights = [
  {
    icon: <Code2 size={24} className="text-primary" />,
    title: 'Frontend Architecture',
    desc: 'Crafting modular, clean, and scalable web apps using React, Next.js, and modern ecosystems.',
  },
  {
    icon: <Layout size={24} className="text-secondary" />,
    title: 'Responsive Design',
    desc: 'Pixel-perfect UI built to deliver seamless, ergonomic experiences across all viewport sizes.',
  },
  {
    icon: <Zap size={24} className="text-amber-400" />,
    title: 'Speed & Optimization',
    desc: 'Deep focus on Core Web Vitals, minimal bundle sizes, and smooth 60fps micro-interactions.',
  },
  {
    icon: <Layers size={24} className="text-emerald-400" />,
    title: 'State & API Integration',
    desc: 'Effortless state handling with Redux Toolkit and performant REST / GraphQL API consumption.',
  },
];

const About = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Dubai, UAE • Visiting Visa (Immediate Joiner)
            </div>
            
            <h3 className="text-2xl font-semibold text-foreground">
              React JS Developer & Frontend Engineer
            </h3>
            <p className="text-foreground/70 leading-relaxed text-base">
              Frontend Developer with <strong className="text-foreground font-semibold">2.3 years of professional experience</strong> in corporate environments, complemented by <strong className="text-foreground font-semibold">2 years of contract-based freelance experience</strong> building modern, pixel-perfect, and responsive web applications.
            </p>
            <p className="text-foreground/70 leading-relaxed text-base">
              Proficient in React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, and CSS3. Experienced in building reusable modular components, integrating REST APIs (Axios/Fetch), managing scalable application state (Redux Toolkit, Zustand, Context API), and optimizing frontend performance.
            </p>
            
            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">2.3+</span>
                <span className="text-xs text-foreground/60">Yrs Corporate Exp.</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-secondary">2.0</span>
                <span className="text-xs text-foreground/60">Yrs Freelance</span>
              </div>
              <div className="w-px h-10 bg-border"></div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-emerald-400">Immediate</span>
                <span className="text-xs text-foreground/60">Joiner Status</span>
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">Languages</p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/80 font-medium">English (Fluent)</span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/80 font-medium">Malayalam (Native)</span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/80 font-medium">Hindi (Basic)</span>
                <span className="px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/80 font-medium">Arabic (Basic)</span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover group transition-colors"
              >
                Explore technical competencies
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass p-6 rounded-2xl flex flex-col gap-3 hover:border-primary/40 hover:bg-surface transition-all duration-300 group cursor-default"
              >
                <div className="p-3 bg-surface rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground text-base group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
