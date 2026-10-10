import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  Copy, 
  Send, 
  CheckCircle2, 
  Linkedin,
  ArrowUpRight,
  Check,
  Radio,
  Orbit,
  Sparkles,
  Compass,
  Globe
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const ContactSection = ({ themeMode = 'celestial', onPlayChime }) => {
  const isTechy = themeMode === 'techy';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    objective: 'Full-Stack Web Development',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    if (onPlayChime) onPlayChime(880, 0.05);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    if (onPlayChime) onPlayChime(880, 0.05);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (onPlayChime) onPlayChime(660, 0.08);

    const subjectText = `[Portfolio Inquiry] ${formData.objective} - ${formData.name}`;
    const bodyContent = `Hi Abhirami,

Name: ${formData.name}
Email: ${formData.email}
Topic: ${formData.objective}

Message:
${formData.message}

---
Sent from portfolio`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyContent)}`;
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyContent)}`;

    // Open Gmail Compose directly in a new browser tab
    const newWindow = window.open(gmailUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback if browser popup blocker intervened
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      if (onPlayChime) onPlayChime(1046, 0.12);
    }, 600);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-8 py-24 border-b border-void-800/80">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-6xl mx-auto mb-16"
      >
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs mb-3 ${
          isTechy 
            ? 'border-white/20 bg-void-900 text-zinc-300 font-mono' 
            : 'border-white/30 bg-black/60 backdrop-blur-md text-zinc-200 font-serif tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.08)]'
        }`}>
          {isTechy ? (
            <>
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>SYS_05 // DIRECT INQUIRIES</span>
            </>
          ) : (
            <>
              <Radio className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              <span>04 // PLANET AURA • DEEP SPACE COMMUNICATION BEACON</span>
            </>
          )}
        </div>

        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-normal text-white tracking-tight sm:whitespace-nowrap ${
          isTechy ? 'font-sans font-bold' : 'font-serif'
        }`}>
          {isTechy 
            ? "Let's Build Something Exceptional Together" 
            : "Celestial Relay Station & Mission Inquiries"}
        </h2>

        <p className="text-zinc-400 text-sm mt-3 font-sans font-light sm:whitespace-nowrap">
          {isTechy
            ? 'Open for full-stack engineering roles, architecture consultations, and technical collaborations.'
            : 'Transmitting across interstellar frequencies. Open for full-stack engineering roles, architecture consultations, and cosmic collaborations.'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Side: Contact Channels & Credentials */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-5 space-y-5"
        >
          <div className="space-y-4">
            
            {/* Direct Email Card */}
            <div className={`p-5 ${
              isTechy ? 'rounded-2xl bg-black/80' : 'rounded-[2.2rem] astral-panel'
            } border border-zinc-800/90 hover:border-sky-400/40 hover:shadow-[0_4px_24px_rgba(56,189,248,0.12)] transition-all duration-300 group`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className={`w-10 h-10 ${
                    isTechy ? 'rounded-xl' : 'rounded-2xl'
                  } bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block">
                      {isTechy ? 'Direct Email' : 'SUBSPACE FREQUENCY // EMAIL'}
                    </span>
                    <a 
                      href={`mailto:${PROFILE.email}`}
                      className="text-white hover:text-sky-300 font-sans font-medium text-sm sm:text-base break-all transition-colors block mt-0.5"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={handleCopyEmail}
                  className={`p-2 sm:px-3 sm:py-2 ${
                    isTechy ? 'rounded-xl' : 'rounded-full'
                  } bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0`}
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono text-[10px] text-emerald-400 font-medium hidden sm:inline">
                        {isTechy ? 'COPIED' : 'COPIED ✦'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px] hidden sm:inline">
                        {isTechy ? 'COPY' : 'COPY'}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone / Mobile Card */}
            <div className={`p-5 ${
              isTechy ? 'rounded-2xl bg-black/80' : 'rounded-[2.2rem] astral-panel'
            } border border-zinc-800/90 hover:border-emerald-400/40 hover:shadow-[0_4px_24px_rgba(52,211,153,0.12)] transition-all duration-300 group`}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className={`w-10 h-10 ${
                    isTechy ? 'rounded-xl' : 'rounded-2xl'
                  } bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block">
                      {isTechy ? 'Phone / Mobile' : 'QUANTUM AUDIO RELAY // VOICE'}
                    </span>
                    <a 
                      href={`tel:${PROFILE.phone}`}
                      className="text-white hover:text-emerald-300 font-sans font-medium text-sm sm:text-base transition-colors block mt-0.5"
                    >
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>
                <button 
                  onClick={handleCopyPhone}
                  className={`p-2 sm:px-3 sm:py-2 ${
                    isTechy ? 'rounded-xl' : 'rounded-full'
                  } bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 hover:text-white transition-all flex items-center gap-1.5 shrink-0`}
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono text-[10px] text-emerald-400 font-medium hidden sm:inline">
                        {isTechy ? 'COPIED' : 'COPIED ✦'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[10px] hidden sm:inline">
                        {isTechy ? 'COPY' : 'COPY'}
                      </span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className={`p-5 ${
              isTechy ? 'rounded-2xl bg-black/80' : 'rounded-[2.2rem] astral-panel'
            } border border-zinc-800/90 hover:border-white/20 transition-all duration-300`}>
              <div className="flex items-start gap-3.5">
                <div className={`w-10 h-10 ${
                  isTechy ? 'rounded-xl' : 'rounded-2xl'
                } bg-zinc-900 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0 mt-0.5`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[10px] tracking-wider uppercase block">
                    {isTechy ? 'Location & Timezone' : 'TERRESTRIAL OBSERVATORY BASE'}
                  </span>
                  <div className="text-white font-sans font-medium text-sm sm:text-base mt-0.5">
                    Trivandrum, Kerala, India <span className="font-mono text-xs text-zinc-400">
                      {isTechy ? '[UTC+5:30]' : '[EARTH UTC+5:30]'}
                    </span>
                  </div>
                  <div className="text-zinc-400 text-xs mt-1 font-sans flex items-center gap-1.5 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>
                      {isTechy 
                        ? 'Available for remote & hybrid opportunities' 
                        : 'Orbital window active for global remote & hybrid missions'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Profile Links */}
            <div className={`p-5 ${
              isTechy ? 'rounded-2xl bg-black/80' : 'rounded-[2.2rem] astral-panel'
            } border border-zinc-800/90 flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 ${
                  isTechy ? 'rounded-xl' : 'rounded-2xl'
                } bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400`}>
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase block">
                    {isTechy ? 'Professional Network' : 'INTERSTELLAR NETWORK'}
                  </span>
                  <span className="text-white font-sans text-xs font-medium">LinkedIn Telemetry</span>
                </div>
              </div>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3.5 py-1.5 ${
                  isTechy ? 'rounded-xl' : 'rounded-full'
                } bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1 transition-colors`}
              >
                <span>{isTechy ? 'Connect' : 'Transmit ↗'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </motion.div>

        {/* Right Side: Message Transmission Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className={`relative ${
            isTechy 
              ? 'tech-panel border-sky-500/20 hover:border-sky-400/50 shadow-[0_10px_35px_rgba(0,0,0,0.8)] rounded-3xl p-6 sm:p-8' 
              : 'astral-panel rounded-[2.8rem] border-white/15 hover:border-white/35 shadow-[0_16px_50px_rgba(56,189,248,0.12)] p-7 sm:p-9'
          } transition-all duration-300 overflow-hidden`}>
            
            {/* Top Accent Sheen */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-40 pointer-events-none"></div>

            {/* Background Nebula Aura in Celestial Mode */}
            {!isTechy && (
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
            )}

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                {!isTechy && (
                  <Radio className="w-4 h-4 text-cyan-300 animate-pulse" />
                )}
                <h3 className={`text-lg font-bold text-white ${isTechy ? 'font-sans' : 'font-serif text-xl'}`}>
                  {isTechy ? 'Send a Message' : 'Deep Space Signal Transmitter'}
                </h3>
              </div>
              <span className={`text-[10px] font-mono px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                isTechy 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                  : 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300'
              }`}>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{isTechy ? 'OPEN FOR INQUIRIES' : 'FREQUENCIES ACTIVE'}</span>
              </span>
            </div>

            {sent ? (
              <div className={`py-12 px-6 ${
                isTechy ? 'rounded-2xl' : 'rounded-[2rem]'
              } bg-zinc-950/90 border border-sky-500/30 text-center space-y-4`}>
                <div className="w-14 h-14 rounded-full bg-sky-500/10 border border-sky-400/40 text-sky-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className={`text-xl sm:text-2xl font-bold text-white ${isTechy ? 'font-sans' : 'font-serif'}`}>
                  {isTechy ? 'Gmail Compose Launched' : 'Signal Dispatched // Gmail Ready'}
                </h4>
                <p className="text-zinc-300 font-sans text-sm max-w-md mx-auto leading-relaxed font-light">
                  A new Gmail tab has been opened with your inquiry pre-filled. Simply review and click <span className="text-white font-medium">Send</span> in Gmail to deliver it directly to <span className="text-sky-300 font-mono text-xs">{PROFILE.email}</span>.
                </p>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent(`[Portfolio Inquiry] ${formData.objective} - ${formData.name}`)}&body=${encodeURIComponent(`Hi Abhirami,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.objective}\n\nMessage:\n${formData.message}\n\n---\nSent from portfolio`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 ${
                      isTechy ? 'rounded-xl' : 'rounded-full'
                    } bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 font-mono text-xs transition-colors`}
                  >
                    <span>Re-open Gmail Tab</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(`[Portfolio Inquiry] ${formData.objective} - ${formData.name}`)}&body=${encodeURIComponent(`Hi Abhirami,\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.objective}\n\nMessage:\n${formData.message}\n\n---\nSent from portfolio`)}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 ${
                      isTechy ? 'rounded-xl' : 'rounded-full'
                    } bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white font-mono text-xs transition-colors`}
                  >
                    <span>Use Default Mail App</span>
                  </a>
                  <button
                    onClick={() => {
                      setSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        objective: 'Full-Stack Web Development',
                        message: ''
                      });
                    }}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 ${
                      isTechy ? 'rounded-xl' : 'rounded-full'
                    } bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-mono text-xs transition-colors`}
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-zinc-400 mb-2 font-mono text-xs uppercase tracking-wider">
                      {isTechy ? 'Your Name *' : 'DISPATCH IDENTIFIER / NAME *'}
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Alex Johnson" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 ${
                        isTechy ? 'rounded-xl' : 'rounded-2xl'
                      } bg-black border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/40 transition-colors text-sm`}
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-2 font-mono text-xs uppercase tracking-wider">
                      {isTechy ? 'Your Email *' : 'RETURN FREQUENCY / EMAIL *'}
                    </label>
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. alex@company.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 ${
                        isTechy ? 'rounded-xl' : 'rounded-2xl'
                      } bg-black border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/40 transition-colors text-sm`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-2 font-mono text-xs uppercase tracking-wider">
                    {isTechy ? 'Inquiry Topic / Project Scope' : 'MISSION SCOPE / SYSTEM OBJECTIVE'}
                  </label>
                  <select 
                    value={formData.objective}
                    onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                    className={`w-full px-4 py-3 ${
                      isTechy ? 'rounded-xl' : 'rounded-2xl'
                    } bg-black border border-zinc-800 text-white focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/40 transition-colors cursor-pointer text-sm`}
                  >
                    <option value="Full-Stack Web Development">Full-Stack Web Development (React / Node / MERN)</option>
                    <option value="Python & Django Framework">Python & Django REST API Backend</option>
                    <option value="React Native Mobile App">React Native Mobile Application (Android / iOS)</option>
                    <option value="Full-Time / Contract Engineering Role">Full-Time / Contract Engineering Position</option>
                    <option value="System Modernization & Migration">System Modernization & CMS / Database Migration</option>
                    <option value="Technical Consultation">Technical Consultation & General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-2 font-mono text-xs uppercase tracking-wider">
                    {isTechy ? 'Message Details *' : 'TRANSMISSION TELEMETRY & SPECIFICATIONS *'}
                  </label>
                  <textarea 
                    rows={4} 
                    required 
                    placeholder="Tell me about your project, engineering scope, or timelines..." 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 ${
                      isTechy ? 'rounded-xl' : 'rounded-2xl'
                    } bg-black border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/40 transition-colors resize-none text-sm leading-relaxed`}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-zinc-400 flex items-center gap-1.5 font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Direct delivery via Gmail transmission</span>
                  </span>
                  
                  <button 
                    type="submit" 
                    disabled={submitting}
                    className={`w-full sm:w-auto px-7 py-3.5 ${
                      isTechy ? 'rounded-xl bg-white text-black' : 'rounded-full bg-white text-black hover:bg-zinc-100 shadow-[0_0_25px_rgba(255,255,255,0.4)]'
                    } font-semibold text-xs font-mono tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed`}
                  >
                    <span>
                      {submitting 
                        ? 'OPENING GMAIL...' 
                        : isTechy 
                          ? 'SEND VIA GMAIL' 
                          : 'DISPATCH SIGNAL VIA GMAIL ✦'}
                    </span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};
