import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer
      id="main-footer"
      className="w-full bg-white border-t border-[#063F3A]/10 py-8 px-4 sm:px-6 lg:px-8 mt-12 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Copyright */}
        <p className="text-xs sm:text-sm text-[#1F2933]/70 font-medium">
          © 2026 Abinaya Sri. All rights reserved.
        </p>

        {/* Links & Back to Top */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-5">
          <a
            id="footer-email-link"
            href="mailto:abinayasri563@gmail.com"
            className="text-xs sm:text-sm font-semibold text-[#063F3A] hover:underline flex items-center gap-1.5"
            title="Email (mailto:abinayasri563@gmail.com)"
          >
            <Mail className="w-4 h-4 text-[#C9A227]" />
            <span>Email</span>
          </a>

          <a
            id="footer-linkedin-link"
            href="https://www.linkedin.com/in/abinaya-sri-5434873b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-[#063F3A] hover:underline flex items-center gap-1.5"
            title="LinkedIn Profile (Opens in new tab)"
          >
            <Linkedin className="w-4 h-4 text-[#C9A227]" />
            <span>LinkedIn</span>
          </a>

          <a
            id="footer-github-link"
            href="https://github.com/abinayasri563-art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-[#063F3A] hover:underline flex items-center gap-1.5"
            title="GitHub Profile (Opens in new tab)"
          >
            <Github className="w-4 h-4 text-[#C9A227]" />
            <span>GitHub</span>
          </a>

          <button
            id="footer-back-to-top-btn"
            onClick={onScrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F4ED] hover:bg-[#063F3A]/10 border border-[#063F3A]/15 text-[#063F3A] text-xs font-semibold transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
