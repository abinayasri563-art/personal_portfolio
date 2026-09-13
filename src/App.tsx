import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionId, Project } from './types';
import { PERSONAL_INFO } from './data';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HomeScreen } from './components/HomeScreen';
import { AboutScreen } from './components/AboutScreen';
import { SkillsScreen } from './components/SkillsScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { AchievementsScreen } from './components/AchievementsScreen';
import { ContactScreen } from './components/ContactScreen';
import { ProjectModal } from './components/ProjectModal';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const profile = PERSONAL_INFO;

  // Track active section and scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scroll to top floating button
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Check current section
      const sections: SectionId[] = [
        'home',
        'about',
        'skills',
        'projects',
        'achievements',
        'contact',
      ];

      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F4ED] text-[#1F2933] flex flex-col selection:bg-[#063F3A]/20 selection:text-[#063F3A]">
      {/* Top Sticky Navigation Bar (Bottom Navigation Completely Removed) */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Collapsible Left Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {/* 1. Home Section */}
        <HomeScreen profile={profile} onNavigate={handleNavigate} />

        {/* 2. About Me Section */}
        <AboutScreen profile={profile} />

        {/* 3. Skills Section */}
        <SkillsScreen />

        {/* 4. Projects Section */}
        <ProjectsScreen onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Achievements & Certifications */}
        <AchievementsScreen />

        {/* 6. Contact Section */}
        <ContactScreen />
      </main>

      {/* Footer */}
      <Footer onScrollToTop={handleScrollToTop} />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={handleScrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#063F3A] hover:bg-[#042d29] text-white shadow-xl hover:shadow-2xl transition-colors cursor-pointer focus:outline-none"
            title="Scroll to Top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-5 h-5 text-[#C9A227]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
