import React from 'react';
import { motion } from 'motion/react';
import { SKILLS_CATEGORIES } from '../data';
import { CountUp } from './CountUp';
import {
  Code,
  Globe,
  Brain,
  Database,
  Wrench,
  Cloud,
  CheckCircle,
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  PROGRAMMING: Code,
  WEB: Globe,
  'DATA & MACHINE LEARNING': Brain,
  DATABASE: Database,
  TOOLS: Wrench,
  'CLOUD & DEPLOYMENT': Cloud,
};

const CATEGORY_PROFICIENCY: Record<string, number> = {
  PROGRAMMING: 88,
  WEB: 85,
  'DATA & MACHINE LEARNING': 90,
  DATABASE: 82,
  TOOLS: 88,
  'CLOUD & DEPLOYMENT': 84,
};

export const SkillsScreen: React.FC = () => {
  return (
    <section
      id="skills"
      aria-label="Skills Section"
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
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2933] tracking-tight">
            Skills
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] rounded-full" />
          <p className="text-sm sm:text-base text-[#1F2933]/75 max-w-xl">
            A comprehensive overview of programming languages, machine learning frameworks, databases, and deployment platforms applied across academic and hands-on projects.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[cat.title] || Code;
            const proficiency = CATEGORY_PROFICIENCY[cat.title] || 85;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-6 border border-[#063F3A]/15 shadow-xs hover:shadow-md hover:border-[#063F3A]/30 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Category Header with Icon */}
                  <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#063F3A]/10">
                    <div className="w-10 h-10 rounded-xl bg-[#063F3A]/5 text-[#063F3A] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <Icon className="w-5 h-5 text-[#063F3A]" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold tracking-wider text-[#063F3A] uppercase font-mono">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] text-[#1F2933]/60 font-medium">
                        <CountUp end={cat.skills.length} duration={1} /> Competencies
                      </span>
                    </div>
                  </div>

                  {/* Smooth Animated Proficiency Bar */}
                  <div className="mb-4 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#1F2933]/70">Proficiency</span>
                      <span className="font-mono font-bold text-[#063F3A]">
                        <CountUp end={proficiency} decimals={0} duration={1.4} suffix="%" />
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#063F3A]/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proficiency}%` }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 1.1, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-[#063F3A] to-[#C9A227] rounded-full"
                      />
                    </div>
                  </div>

                  {/* Professional Skill Tags/Chips */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F4ED] border border-[#063F3A]/10 text-xs font-semibold text-[#1F2933] hover:bg-[#063F3A] hover:text-white hover:border-[#063F3A] hover:scale-105 transition-all duration-150 shadow-2xs cursor-default"
                      >
                        <CheckCircle className="w-3 h-3 text-[#C9A227] shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
