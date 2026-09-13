import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionId, ProfileData } from '../types';
import { ArrowRight, Send, Github, Linkedin, Sparkles, CheckCircle2, FileText } from 'lucide-react';

interface HomeScreenProps {
  profile: ProfileData;
  onNavigate: (section: SectionId) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ profile, onNavigate }) => {
  const { scrollY } = useScroll();

  // Subtle parallax translation for background orbs and accents
  const orb1Y = useTransform(scrollY, [0, 600], [0, 45]);
  const orb2Y = useTransform(scrollY, [0, 600], [0, -35]);

  return (
    <section
      id="home"
      aria-label="Home Section"
      className="scroll-mt-24 w-full py-8 md:py-16 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl bg-white rounded-3xl border border-[#063F3A]/15 p-6 sm:p-10 md:p-12 shadow-sm relative overflow-hidden"
      >
        {/* Subtle Parallax Decorative Background Accents */}
        <motion.div
          style={{ y: orb1Y }}
          className="absolute top-0 right-0 w-80 h-80 bg-[#063F3A]/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"
        />

        <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Circular Profile Portrait with Gold Accent - Kept Stable and Professional */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 flex flex-col items-center"
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-3 border-[#C9A227] shadow-xl ring-8 ring-[#063F3A]/5 bg-[#F7F4ED] transition-transform duration-300 hover:scale-[1.02]">
              <img
                src={profile.profileImage || '/profile.jpg'}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
            </div>
            {/* Status indicator pill below portrait */}
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#063F3A]/10 border border-[#063F3A]/20 text-[#063F3A] text-xs font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span>Available for Roles</span>
            </div>
          </motion.div>

          {/* Profile Identity, Headline, Tagline, and Intro */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            {/* Department Badge */}
            {profile.role && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#063F3A]/15 text-[#063F3A] text-xs font-medium shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>{profile.role}</span>
              </motion.div>
            )}

            {/* Name - Smooth Fade-up Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1F2933] tracking-tight leading-tight"
            >
              {profile.name}
            </motion.h1>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl font-bold text-[#063F3A]"
            >
              {profile.headline}
            </motion.p>

            {/* Tagline - Reveals smoothly after heading */}
            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base font-semibold text-[#C9A227] italic border-l-2 border-[#C9A227] pl-3 py-0.5"
            >
              {profile.tagline}
            </motion.blockquote>

            {/* Short Professional Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#1F2933]/85 leading-relaxed pt-1 max-w-2xl font-normal"
            >
              {profile.introduction}
            </motion.p>

            {/* Quick highlights */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full pt-2"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-[#1F2933]/80 bg-[#F7F4ED]/80 px-3 py-2 rounded-xl border border-[#063F3A]/10 hover:border-[#063F3A]/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#063F3A] shrink-0" />
                <span>Python ML Pipelines &amp; Scikit-learn</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-[#1F2933]/80 bg-[#F7F4ED]/80 px-3 py-2 rounded-xl border border-[#063F3A]/10 hover:border-[#063F3A]/30 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-[#063F3A] shrink-0" />
                <span>Modern React &amp; Streamlit Apps</span>
              </div>
            </motion.div>

            {/* Action Buttons: With Refined Micro-Interactions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.62 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-4 w-full"
            >
              <motion.button
                id="hero-btn-hire-me"
                whileHover={{ scale: 1.02, y: -1.5 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#063F3A] hover:bg-[#042d29] text-white text-sm font-semibold shadow-md shadow-[#063F3A]/20 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C9A227]" />
                <span>Hire Me</span>
              </motion.button>

              <motion.button
                id="hero-btn-view-projects"
                whileHover={{ scale: 1.02, y: -1.5 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ duration: 0.15 }}
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#063F3A]/25 hover:border-[#063F3A] text-[#063F3A] hover:bg-[#F7F4ED] text-sm font-semibold shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#063F3A]" />
              </motion.button>

              <motion.a
                id="hero-btn-github"
                whileHover={{ scale: 1.02, y: -1.5 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ duration: 0.15 }}
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F4ED] border border-[#063F3A]/15 hover:border-[#063F3A] text-[#1F2933] hover:text-[#063F3A] text-sm font-semibold cursor-pointer"
                title="Abinayasri on GitHub (Opens in new tab)"
              >
                <Github className="w-4 h-4 text-[#063F3A]" />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                id="hero-btn-linkedin"
                whileHover={{ scale: 1.02, y: -1.5 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ duration: 0.15 }}
                href={profile.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#F7F4ED] border border-[#063F3A]/15 hover:border-[#063F3A] text-[#1F2933] hover:text-[#063F3A] text-sm font-semibold cursor-pointer"
                title="Abinaya Sri on LinkedIn (Opens in new tab)"
              >
                <Linkedin className="w-4 h-4 text-[#063F3A]" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                id="hero-btn-resume"
                whileHover={{ scale: 1.02, y: -1.5 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ duration: 0.15 }}
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#C9A227] hover:bg-[#C9A227]/10 text-[#063F3A] text-sm font-semibold shadow-2xs cursor-pointer"
                title="View Resume (Opens in new tab)"
              >
                <FileText className="w-4 h-4 text-[#C9A227]" />
                <span>View Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

