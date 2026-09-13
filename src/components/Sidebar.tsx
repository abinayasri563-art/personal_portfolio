import React from 'react';
import { SectionId } from '../types';
import {
  Home,
  User,
  Cpu,
  FolderGit2,
  Award,
  Mail,
  X,
  Github,
  Linkedin,
  ChevronRight,
  FileText,
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: SectionId;
  onNavigate: (section: SectionId) => void;
}

interface SidebarItem {
  id: SectionId;
  label: string;
  icon: React.ElementType;
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'home', label: 'HOME', icon: Home },
  { id: 'about', label: 'ABOUT ME', icon: User },
  { id: 'skills', label: 'SKILLS', icon: Cpu },
  { id: 'projects', label: 'PROJECTS', icon: FolderGit2 },
  { id: 'achievements', label: 'ACHIEVEMENTS', icon: Award },
  { id: 'contact', label: 'CONTACT', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeSection,
  onNavigate,
}) => {
  const handleItemClick = (id: SectionId) => {
    onNavigate(id);
    // On mobile and tablet, close the drawer automatically
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop for mobile & tablet */}
      <div
        id="sidebar-backdrop"
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Drawer / Sidebar Panel */}
      <aside
        id="left-navigation-sidebar"
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 bg-[#F7F4ED] border-r border-[#063F3A]/15 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        aria-label="Sidebar Navigation"
      >
        {/* Top: Header with Profile Summary & Close Button */}
        <div>
          <div className="h-16 px-5 border-b border-[#063F3A]/10 flex items-center justify-between bg-white/70">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A227] shadow-xs" />
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-[#1F2933] tracking-tight leading-none">
                  Abinaya Sri
                </span>
                <span className="text-[11px] text-[#063F3A] font-semibold mt-0.5">
                  Portfolio Navigation
                </span>
              </div>
            </div>

            <button
              id="sidebar-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#1F2933]/70 hover:text-[#063F3A] hover:bg-[#063F3A]/5 transition-colors cursor-pointer"
              title="Close Sidebar"
              aria-label="Close Sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Profile Snippet */}
          <div className="p-4 mx-3 my-3 rounded-xl bg-white border border-[#063F3A]/10 shadow-2xs flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#C9A227] shrink-0 bg-[#F7F4ED]">
              <img
                src="/profile.jpg"
                alt="Abinaya Sri"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-[#1F2933] truncate">
                Abinaya Sri
              </p>
              <p className="text-[10px] text-[#063F3A] font-medium truncate">
                B.Tech IV-Year ISE
              </p>
              <span className="inline-block mt-0.5 text-[9px] font-mono text-[#C9A227] font-semibold">
                ● Available for Roles
              </span>
            </div>
          </div>

          {/* Navigation Links List */}
          <nav className="px-3 py-2 space-y-1">
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`sidebar-link-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 cursor-pointer group/item hover:translate-x-1 ${
                    isActive
                      ? 'bg-[#063F3A] text-white shadow-sm shadow-[#063F3A]/20'
                      : 'text-[#1F2933]/80 hover:bg-white hover:text-[#063F3A] hover:shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-4 h-4 transition-transform duration-200 group-hover/item:scale-110 ${
                        isActive ? 'text-[#C9A227]' : 'text-[#063F3A]'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform duration-200 group-hover/item:translate-x-0.5 opacity-60 ${
                      isActive ? 'text-[#C9A227]' : 'text-[#1F2933]/40'
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Resume & Social Profiles & Footer */}
        <div className="p-4 border-t border-[#063F3A]/10 bg-white/50 space-y-3">
          <a
            id="sidebar-resume-btn"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-[#063F3A] hover:bg-[#042d29] text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
            title="View Resume in new tab"
          >
            <FileText className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>View Resume</span>
          </a>

          <div className="flex items-center justify-around">
            <a
              id="sidebar-github-link"
              href="https://github.com/abinayasri563-art"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#063F3A] hover:bg-[#063F3A]/10 transition-colors"
              title="GitHub Profile (Opens in new tab)"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="sidebar-linkedin-link"
              href="https://www.linkedin.com/in/abinaya-sri-5434873b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-[#063F3A] hover:bg-[#063F3A]/10 transition-colors"
              title="LinkedIn Profile (Opens in new tab)"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="sidebar-email-link"
              href="mailto:abinayasri563@gmail.com"
              className="p-2 rounded-lg text-[#063F3A] hover:bg-[#063F3A]/10 transition-colors"
              title="Send Email (mailto:abinayasri563@gmail.com)"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] text-center text-[#1F2933]/60">
            © 2026 Abinaya Sri
          </p>
        </div>
      </aside>
    </>
  );
};
