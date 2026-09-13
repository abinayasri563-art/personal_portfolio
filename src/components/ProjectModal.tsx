import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { X, Github, ExternalLink, CheckCircle, ArrowRight, Layers, Cpu } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          id="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
          onClick={onClose}
        >
          <motion.div
            id="project-modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#063F3A]/15 shadow-2xl flex flex-col gap-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/90 backdrop-blur-xs border border-[#063F3A]/15 text-[#1F2933] hover:text-[#063F3A] hover:bg-[#F7F4ED] shadow-sm transition-all cursor-pointer"
          title="Close Modal"
          aria-label="Close Project Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Header Image & Category */}
        <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden relative bg-[#063F3A]/10 border border-[#063F3A]/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
            <span className="text-xs font-bold px-3 py-1 rounded-lg bg-[#063F3A] border border-white/20 shadow-xs">
              {project.categoryTag}
            </span>
            {project.machines && (
              <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-xs border border-white/20 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#C9A227]" />
                {project.machines.join(' • ')}
              </span>
            )}
          </div>
        </div>

        {/* Title & Overview */}
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1F2933] tracking-tight leading-snug">
            {project.title}
          </h3>
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono">
            Project Overview
          </h4>
          <p className="text-sm sm:text-base text-[#1F2933]/85 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies Used */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-[#C9A227]" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#F7F4ED] border border-[#063F3A]/15 text-xs font-semibold text-[#063F3A]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2 bg-[#F7F4ED] p-4 sm:p-5 rounded-2xl border border-[#063F3A]/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono">
            Key Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#1F2933]/90">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Workflow */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#063F3A] font-mono">
            Project Workflow
          </h4>
          <ol className="space-y-2.5">
            {project.workflow.map((step, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white border border-[#063F3A]/10 text-xs sm:text-sm text-[#1F2933]/85"
              >
                <span className="w-6 h-6 rounded-full bg-[#063F3A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Action Buttons: Close and View on GitHub */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#063F3A]/10">
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-[#063F3A]/20 hover:bg-[#F7F4ED] text-[#1F2933] text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.97 }}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#063F3A] hover:bg-[#042d29] text-white text-sm font-semibold shadow-md shadow-[#063F3A]/20 transition-colors cursor-pointer"
          >
            <Github className="w-4 h-4 text-[#C9A227]" />
            <span>View on GitHub</span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
};
