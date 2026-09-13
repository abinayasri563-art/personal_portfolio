import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, ProjectCategoryFilter } from '../types';
import { PROJECTS_DATA } from '../data';
import { Github, ArrowUpRight, CheckCircle2, Cpu, Filter } from 'lucide-react';

interface ProjectsScreenProps {
  onSelectProject: (project: Project) => void;
}

const FILTERS: ProjectCategoryFilter[] = [
  'All',
  'Data Science',
  'Machine Learning',
  'IoT',
  'Web Development',
];

interface ProjectCardItemProps {
  project: Project;
  idx: number;
  onSelectProject: (project: Project) => void;
}

const ProjectCardItem: React.FC<ProjectCardItemProps> = ({ project, idx, onSelectProject }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && isFinePointer && !prefersReducedMotion) {
      setCanTilt(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt capped at ~5.5 degrees
    const rotateX = -((y - centerY) / centerY) * 5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    if (canTilt) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{
        opacity: 1,
        rotateX: isHovered ? tilt.rotateX : 0,
        rotateY: isHovered ? tilt.rotateY : 0,
        y: isHovered ? -6 : 0,
        scale: isHovered ? 1.015 : 1,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        opacity: { duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] },
        rotateX: { type: 'spring', stiffness: 320, damping: 25 },
        rotateY: { type: 'spring', stiffness: 320, damping: 25 },
        y: { type: 'spring', stiffness: 320, damping: 25 },
        scale: { type: 'spring', stiffness: 320, damping: 25 },
      }}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelectProject(project)}
      className="bg-white rounded-3xl border border-[#063F3A]/15 hover:border-[#063F3A] shadow-xs hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer h-full"
    >
      {/* Card Image Header */}
      <div>
        <div className="w-full h-48 relative overflow-hidden bg-[#063F3A]/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 right-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-[#063F3A] shadow-sm group-hover:bg-[#063F3A] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
          <div className="absolute bottom-3 left-3">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#063F3A] text-white border border-white/20 shadow-2xs">
              {project.categoryTag}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6 space-y-3.5">
          <h3 className="text-lg font-bold text-[#1F2933] group-hover:text-[#063F3A] transition-colors leading-snug">
            {project.title}
          </h3>

          {project.machines && (
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#063F3A] bg-[#F7F4ED] px-2.5 py-1 rounded-md border border-[#063F3A]/10 w-fit">
              <Cpu className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>{project.machines.join(', ')}</span>
            </div>
          )}

          <p className="text-xs sm:text-sm text-[#1F2933]/80 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Technologies Tags */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#063F3A]/70 font-mono">
              Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-[#F7F4ED] border border-[#063F3A]/10 text-[11px] font-medium text-[#1F2933]/90 hover:border-[#063F3A]/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 5 && (
                <span className="px-1.5 py-0.5 rounded-md bg-[#063F3A]/5 text-[10px] font-bold text-[#063F3A]">
                  +{project.technologies.length - 5}
                </span>
              )}
            </div>
          </div>

          {/* Key Features Preview */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#063F3A]/70 font-mono">
              Key Features
            </span>
            <ul className="space-y-1 text-xs text-[#1F2933]/80">
              {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                <li key={fIdx} className="flex items-center gap-1.5 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer Buttons */}
      <div className="p-5 sm:p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#063F3A]/5 mt-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectProject(project);
          }}
          className="text-xs font-semibold text-[#063F3A] hover:underline cursor-pointer transition-colors"
        >
          View Details
        </button>

        <motion.a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#063F3A] hover:bg-[#042d29] text-white text-xs font-semibold shadow-2xs hover:shadow-xs transition-colors cursor-pointer"
          title="View on GitHub"
        >
          <Github className="w-3.5 h-3.5 text-[#C9A227] transition-transform duration-200 group-hover:scale-110" />
          <span>View on GitHub</span>
        </motion.a>
      </div>
    </motion.div>
  );
};

export const ProjectsScreen: React.FC<ProjectsScreenProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategoryFilter>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.categories.includes(activeFilter));

  return (
    <section
      id="projects"
      aria-label="Projects Section"
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
            Practical Engineering Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2933] tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] rounded-full" />
          <p className="text-sm sm:text-base text-[#1F2933]/75 max-w-2xl">
            A comprehensive showcase of 6 end-to-end practical projects spanning Machine Learning, Data Science, Industrial IoT, and Web Development.
          </p>
        </motion.div>

        {/* Category Filters with Micro-Interactions */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs font-bold text-[#063F3A] uppercase tracking-wider mr-1 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#C9A227]" /> Filter:
          </span>
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            const count =
              filter === 'All'
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.categories.includes(filter)).length;

            return (
              <motion.button
                key={filter}
                id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#063F3A] text-white shadow-sm'
                    : 'bg-white text-[#1F2933]/80 border border-[#063F3A]/15 hover:border-[#063F3A] hover:bg-[#F7F4ED]'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full transition-colors ${
                    isActive
                      ? 'bg-[#C9A227] text-[#063F3A] font-extrabold'
                      : 'bg-[#F7F4ED] text-[#1F2933]/60'
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Responsive Grid: Desktop: 3 cards per row, Tablet: 2 cards per row, Mobile: 1 card per row */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <ProjectCardItem
                key={project.id}
                project={project}
                idx={idx}
                onSelectProject={onSelectProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

