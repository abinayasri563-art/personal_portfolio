import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please enter your message.';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="scroll-mt-24 w-full py-8 md:py-16"
    >
      <div className="w-full max-w-5xl mx-auto space-y-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#063F3A]/10 text-[#063F3A] text-xs font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
            Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2933] tracking-tight">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] rounded-full" />
          <p className="text-sm sm:text-base text-[#1F2933]/85 max-w-xl">
            “I’m interested in learning, building practical projects and connecting with people in technology.”
          </p>
        </motion.div>

        {/* 2-Column Responsive Layout: Info Channels & Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column: Direct Links (Email, LinkedIn, GitHub) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#063F3A]/15 hover:border-[#063F3A] shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-between gap-3 group">
              <a
                id="contact-email-link"
                href="mailto:abinayasri563@gmail.com"
                className="flex items-center gap-3.5 flex-1 min-w-0"
                title="Send email via mailto:abinayasri563@gmail.com"
              >
                <div className="w-11 h-11 rounded-xl bg-[#063F3A]/10 text-[#063F3A] flex items-center justify-center shrink-0 group-hover:bg-[#063F3A] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#063F3A] font-mono block">
                    Email
                  </span>
                  <p className="text-sm font-semibold text-[#1F2933] group-hover:text-[#063F3A] transition-colors truncate">
                    abinayasri563@gmail.com
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('abinayasri563@gmail.com', 'email')}
                className="p-2 rounded-lg text-[#063F3A] hover:bg-[#F7F4ED] transition-colors cursor-pointer shrink-0"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-[#063F3A]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#063F3A]/70" />
                )}
              </button>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white rounded-2xl p-5 border border-[#063F3A]/15 hover:border-[#063F3A] shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 group">
              <a
                id="contact-linkedin-link"
                href="https://www.linkedin.com/in/abinaya-sri-5434873b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 flex-1 min-w-0"
                title="Open LinkedIn Profile in new tab"
              >
                <div className="w-11 h-11 rounded-xl bg-[#063F3A]/10 text-[#063F3A] flex items-center justify-center shrink-0 group-hover:bg-[#063F3A] group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#063F3A] font-mono block">
                    LinkedIn
                  </span>
                  <p className="text-sm font-semibold text-[#1F2933] group-hover:text-[#063F3A] transition-colors truncate">
                    abinaya-sri-5434873b9
                  </p>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy('https://www.linkedin.com/in/abinaya-sri-5434873b9/', 'linkedin')}
                className="p-2 rounded-lg text-[#063F3A] hover:bg-[#F7F4ED] transition-colors cursor-pointer shrink-0"
                title="Copy LinkedIn URL"
              >
                {copiedField === 'linkedin' ? (
                  <Check className="w-4 h-4 text-[#063F3A]" />
                ) : (
                  <Copy className="w-4 h-4 text-[#063F3A]/70" />
                )}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              id="contact-github-link"
              href="https://github.com/abinayasri563-art"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-5 border border-[#063F3A]/15 hover:border-[#063F3A] shadow-xs hover:shadow-md transition-all flex items-center justify-between gap-3 group cursor-pointer block"
              title="Open GitHub Profile in new tab"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#063F3A]/10 text-[#063F3A] flex items-center justify-center shrink-0 group-hover:bg-[#063F3A] group-hover:text-white transition-colors">
                  <Github className="w-5 h-5 text-[#C9A227]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#063F3A] font-mono">
                    GitHub
                  </span>
                  <p className="text-sm font-semibold text-[#1F2933] group-hover:text-[#063F3A] transition-colors">
                    abinayasri563-art
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#063F3A] group-hover:underline">
                Visit →
              </span>
            </a>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-[#063F3A]/15 shadow-sm"
          >
            {isSubmitted ? (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#063F3A]/10 text-[#063F3A] flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#C9A227]" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2933]">
                  Thank You for Your Message!
                </h3>
                <p className="text-sm text-[#1F2933]/80 max-w-md">
                  Your note has been received. I look forward to connecting and discussing technical opportunities.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#063F3A] text-white text-xs font-semibold hover:bg-[#042d29] transition-all cursor-pointer hover:shadow-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <h3 className="text-lg font-bold text-[#1F2933]">
                  Send a Direct Message
                </h3>

                {/* Name Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F7F4ED]/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#063F3A]/20 focus:border-[#063F3A]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F7F4ED]/50 focus:bg-white focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#063F3A]/20 focus:border-[#063F3A]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F7F4ED]/50 focus:bg-white focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#063F3A]/20 focus:border-[#063F3A]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button with Micro-interactions */}
                <motion.button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.015, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#063F3A] hover:bg-[#042d29] disabled:opacity-75 text-white font-semibold text-sm shadow-md shadow-[#063F3A]/20 transition-colors flex items-center justify-center gap-2 cursor-pointer group"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C9A227] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
