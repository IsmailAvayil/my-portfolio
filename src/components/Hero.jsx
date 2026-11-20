import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, User, Maximize2, X, Sparkles, Code2 } from 'lucide-react';

const Hero = () => {
  const [imgSrc, setImgSrc] = useState('/profile.png');
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = () => {
    if (imgSrc === '/profile.png') {
      setImgSrc('/profile.jpg');
    } else if (imgSrc === '/profile.jpg') {
      setImgSrc('/profile.jpeg');
    } else if (imgSrc === '/profile.jpeg') {
      setImgSrc('/avatar.svg');
    } else {
      setImageError(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Blobs for Aesthetic effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-background)_100%)] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur-sm text-xs sm:text-sm font-medium mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Dubai, UAE</span>
              <span className="text-border">•</span>
              <span className="text-emerald-400 font-semibold">Immediate Joiner (Visiting Visa)</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <span className="text-gradient">Mohammed Ismail</span> 
              <br />
              <span className="text-foreground">Avayil</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
              className="text-lg md:text-2xl font-medium text-primary mb-4"
            >
              React JS Developer | Frontend Developer | JavaScript
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-foreground/70 max-w-2xl mb-8 leading-relaxed text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              Frontend Developer with 2.3 years of company experience & 2 years of contract freelance experience. Specializing in building scalable, responsive web applications with React.js, Next.js, and TypeScript.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <a 
                href="#projects" 
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full font-medium hover:bg-foreground/90 transition-colors shadow-lg shadow-black/20"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-surface hover:bg-surface-hover border border-border px-7 py-3.5 rounded-full font-medium transition-colors"
              >
                Download Resume
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

            {/* Quick highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-10 pt-8 border-t border-border/60 flex flex-wrap items-center gap-6 sm:gap-8 text-foreground/70 text-sm"
            >
              <div>
                <span className="block text-2xl font-bold text-foreground">2.3+ Yrs</span>
                <span className="text-xs text-foreground/50">Company Exp.</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <span className="block text-2xl font-bold text-foreground">2 Yrs</span>
                <span className="text-xs text-foreground/50">Freelance Contract</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div>
                <span className="block text-2xl font-bold text-primary">Dubai, UAE</span>
                <span className="text-xs text-foreground/50">Immediate Joiner</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Full-Size Portrait Photo */}
          <div className="flex-1 flex justify-center items-center order-1 lg:order-2 w-full max-w-md lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 via-purple-500/30 to-secondary/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 -z-10 animate-pulse"></div>

              {/* Full-Size Card Container */}
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-[340px] aspect-[313/402] p-2 rounded-3xl bg-gradient-to-tr from-primary/80 via-purple-500/40 to-secondary/80 shadow-2xl shadow-primary/20 backdrop-blur-xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-surface group">
                  {imageError ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-surface-hover text-foreground/70 p-6">
                      <User size={64} className="text-primary mb-2" />
                      <span className="text-xs tracking-wider uppercase font-semibold text-foreground/50">Mohammed Ismail Avayil</span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={imgSrc}
                        alt="Mohammed Ismail Avayil"
                        onError={handleImageError}
                        className="w-full h-full object-cover object-top rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Click to expand overlay */}
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="absolute bottom-3 right-3 p-2.5 rounded-xl bg-black/60 text-white/90 hover:text-white hover:bg-black/80 backdrop-blur-md border border-white/20 transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1.5 text-xs font-medium shadow-lg"
                        title="View photo full size"
                      >
                        <Maximize2 size={14} />
                        <span>Full Size</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-4 -left-4 sm:-left-6 glass px-4 py-2 rounded-2xl border border-primary/30 shadow-lg flex items-center gap-2 text-xs font-semibold text-foreground backdrop-blur-md"
              >
                <div className="p-1 rounded-lg bg-primary/20 text-primary">
                  <Sparkles size={14} />
                </div>
                <span>Frontend Dev</span>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 glass px-4 py-2 rounded-2xl border border-secondary/30 shadow-lg flex items-center gap-2 text-xs font-semibold text-foreground backdrop-blur-md"
              >
                <div className="p-1 rounded-lg bg-secondary/20 text-secondary">
                  <Code2 size={14} />
                </div>
                <span>React & Next.js</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-foreground to-transparent"></div>
      </motion.div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-surface/60 rounded-full border border-white/20 transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>
              <img
                src={imgSrc}
                alt="Mohammed Ismail Avayil - Full Size"
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl border border-white/10 object-contain"
              />
              <p className="text-sm font-medium text-white/70 mt-4">
                Mohammed Ismail Avayil
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
