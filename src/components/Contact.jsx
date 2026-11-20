import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-surface/30">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-secondary rounded-full mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 max-w-xl"
          >
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-primary/20 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground mb-1">Email</h4>
                <a href="mailto:ismailavayil@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">ismailavayil@gmail.com</a>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-secondary/20 text-secondary rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground mb-1">Location</h4>
                <p className="text-foreground/70">Dubai, UAE</p>
                <span className="inline-block mt-1 text-xs px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30 font-medium">
                  Visiting Visa • Immediate Joiner
                </span>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl flex items-start gap-4">
              <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-medium text-foreground mb-1">Phone</h4>
                <a href="tel:+971562038446" className="text-foreground/70 hover:text-primary transition-colors">+971-56-203-8446</a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass p-8 rounded-2xl space-y-6 flex flex-col"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                className="w-full bg-surface-hover/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                className="w-full bg-surface-hover/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Tell me about your project..." 
                className="w-full bg-surface-hover/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              ></textarea>
            </div>
            <button className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors mt-auto">
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
