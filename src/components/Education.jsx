import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, MapPin, University, BookOpen } from 'lucide-react';

const educations = [
  {
    id: 1,
    degree: "Master of Computer Applications (MCA)",
    institution: "Presidency College, Bengaluru – Bangalore University",
    location: "Bengaluru, Karnataka, India",
    period: "2017 – 2020",
    grade: "Postgraduate Degree",
    description: "Comprehensive postgraduate study in software design, advanced computing, database architectures, and web application engineering.",
    courses: ["Software Engineering", "Database Management Systems", "Object-Oriented Programming", "Web Technologies"],
    symbol: "graduation",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Electronics (BSc Electronics)",
    institution: "Malabar College of Advanced Studies, Vengara – Calicut University",
    location: "Malappuram, Kerala, India",
    period: "2014 – 2017",
    grade: "Undergraduate Degree",
    description: "Foundational engineering principles, digital logic systems, microprocessors, signal processing, and foundational computer programming.",
    courses: ["Digital Electronics", "Microprocessors & Microcontrollers", "C Programming", "Electronic Circuit Analysis"],
    symbol: "university",
  }
];

const UniversityLogo = ({ education }) => {
  const [imgError, setImgError] = useState(false);

  if (education.logo && !imgError) {
    return (
      <div className="w-14 h-14 rounded-2xl glass p-2.5 flex items-center justify-center border border-primary/30 group-hover:border-primary transition-colors overflow-hidden shrink-0 shadow-lg shadow-black/20">
        <img
          src={education.logo}
          alt={education.institution}
          onError={() => setImgError(true)}
          className="w-full h-full object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-surface to-secondary/20 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary group-hover:text-secondary transition-all duration-300 shadow-lg shadow-primary/5 shrink-0">
      {education.symbol === 'graduation' ? (
        <GraduationCap size={28} />
      ) : (
        <University size={28} />
      )}
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Education</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass p-8 rounded-2xl flex flex-col justify-between border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 shadow-lg shadow-black/10"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <UniversityLogo education={edu} />
                    <div>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-foreground/60 mt-0.5">
                        <MapPin size={13} className="text-primary/70" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-surface text-foreground/80 border border-border shrink-0">
                    <Calendar size={13} className="text-primary" />
                    {edu.period}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  {edu.grade && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-3">
                      <Award size={13} />
                      {edu.grade}
                    </div>
                  )}
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>

              {edu.courses && edu.courses.length > 0 && (
                <div className="pt-4 border-t border-border mt-4">
                  <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <BookOpen size={12} className="text-primary" />
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium px-2.5 py-1 bg-surface-hover text-foreground/80 rounded-md border border-border/60"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
