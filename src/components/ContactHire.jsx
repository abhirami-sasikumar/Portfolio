import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Calendar,
  Layers,
  Smartphone,
  Database,
  Radio
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactHire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'iot-dashboard',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const projectTypes = [
    { id: "iot-dashboard", label: "Real-Time IoT / GIS Dashboard", icon: Radio, desc: "Interactive Leaflet maps, live InfluxDB telemetry, and threshold alert engines." },
    { id: "mobile-app", label: "Companion Mobile App (React Native)", icon: Smartphone, desc: "Hardware pairing over Bluetooth, offline drafts, and secure cluster access." },
    { id: "fullstack-web", label: "Full-Stack Web App / Custom CMS", icon: Layers, desc: "MERN stack portals, role-based access control, and dynamic REST APIs." },
    { id: "db-optimization", label: "Database Migration & DevOps", icon: Database, desc: "MongoDB ➔ InfluxDB migration, Docker orchestration, and performance tuning." }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>PROJECT ENGAGEMENT & HIRING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Have a Project in Mind? Let’s Make It Happen.
          </h2>
          <p className="text-slate-300 text-base mt-3">
            Whether you need a real-time monitoring dashboard, a hardware-paired mobile app, or a full-stack platform built from scratch, I'm ready to help you ship.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Typical Projects & Direct Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Typical Project Types */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Typical Projects Clients Hire Me For
              </h3>
              <div className="space-y-3">
                {projectTypes.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.id}
                      className="p-4 rounded-xl bg-[#0b1222] border border-slate-800 flex items-start gap-3.5 hover:border-slate-700 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-100 text-sm">{item.label}</h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1428] to-[#070c18] border border-cyan-500/30 space-y-4">
              <h4 className="font-bold text-white text-sm">Direct Contact Channels</h4>
              
              <div className="space-y-3 text-sm">
                <a 
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs">{PROFILE.email}</span>
                </a>

                <a 
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-300 transition-colors group"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span className="font-mono text-xs">{PROFILE.phone}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-400 text-xs">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span>{PROFILE.location}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-4">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0b1222] border border-slate-800 p-6 sm:p-8 shadow-2xl">
            <h3 className="text-lg font-bold text-white mb-2">Send an Inquiry or Schedule a Call</h3>
            <p className="text-xs text-slate-400 mb-6">
              Fill out your project specifications below, and I will reply within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Received</h4>
                <p className="text-sm text-slate-300 max-w-sm mx-auto">
                  Thank you for reaching out! I will review your requirements and get back to you directly at your email.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono text-cyan-400 hover:underline pt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Scope / Engagement Type</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 font-sans cursor-pointer"
                  >
                    <option value="iot-dashboard">Real-Time IoT / GIS Telemetry Dashboard</option>
                    <option value="mobile-app">Cross-Platform Companion Mobile App (React Native)</option>
                    <option value="fullstack-web">Full-Stack Web App / Custom Backend CMS (MERN)</option>
                    <option value="db-optimization">Time-Series DB Migration (InfluxDB) & Dockerization</option>
                    <option value="consultancy">Technical Architecture Consulting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Project Overview / Timeline *</label>
                  <textarea 
                    rows={4}
                    required
                    placeholder="Briefly describe what you're building, key technical requirements, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-400 focus:outline-none text-sm text-slate-200 placeholder:text-slate-600 font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

