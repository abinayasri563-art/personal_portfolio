import React from 'react';
import { motion } from 'motion/react';
import { SectionId } from '../types';
import { Menu, Github, Linkedin, FileText } from 'lucide-react';

interface HeaderProps {
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onToggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <header
      id="main-top-nav"
      className="sticky top-0 inset-x-0 z-40 bg-[#F7F4ED]/90 backdrop-blur-md border-b border-[#063F3A]/10 shadow-xs transition-colors"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Left: Sidebar Toggle & Brand Mark */}
        <div className="flex items-center gap-3">
          <button
            id="sidebar-toggle-btn"
            onClick={onToggleSidebar}
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            className="p-2 rounded-lg text-[#063F3A] hover:bg-[#063F3A]/5 active:bg-[#063F3A]/10 border border-[#063F3A]/15 transition-all cursor-pointer"
            title="Toggle Navigation Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button
            id="nav-brand-logo"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227] shadow-xs group-hover:scale-125 transition-transform" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-[#1F2933] group-hover:text-[#063F3A] transition-colors">
              Abinayasri
            </span>
          </button>
        </div>

        {/* Center / Right: Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-2"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`top-nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer relative ${
                  isActive
                    ? 'text-[#063F3A] font-semibold'
                    : 'text-[#1F2933]/80 hover:text-[#063F3A] hover:bg-white/60'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#063F3A]/10 rounded-lg -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#C9A227] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions (View Resume & GitHub) */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <a
            id="top-nav-resume-btn"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            title="View Official Resume (Opens in new tab)"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-lg bg-[#063F3A] hover:bg-[#042d29] text-white text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#C9A227]" />
            <span>View Resume</span>
          </a>

          <a
            id="top-nav-linkedin-btn"
            href="https://www.linkedin.com/in/abinaya-sri-5434873b9/"
            target="_blank"
            rel="noopener noreferrer"
            title="View LinkedIn Profile (Opens in new tab)"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#063F3A]/20 hover:border-[#063F3A] text-[#063F3A] hover:text-[#042d29] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Linkedin className="w-4 h-4 text-[#063F3A]" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>

          <a
            id="top-nav-github-btn"
            href="https://github.com/abinayasri563-art"
            target="_blank"
            rel="noopener noreferrer"
            title="View GitHub Profile"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#063F3A]/20 hover:border-[#063F3A] text-[#063F3A] hover:text-[#042d29] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Github className="w-4 h-4 text-[#063F3A]" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};
