import React from 'react';
import { motion } from 'motion/react';
import { ProfileData } from '../types';
import { GraduationCap, Compass, Target, Rocket, Award, Building2, CheckCircle2 } from 'lucide-react';
import { CountUp } from './CountUp';

interface AboutScreenProps {
  profile: ProfileData;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ profile }) => {
  const cards = [
    {
      title: profile.educationCard.title,
      value: profile.educationCard.value,
      status: profile.educationCard.status || 'Currently pursuing – 4th Year',
      cgpa: profile.educationCard.cgpa || '7.94',
      icon: GraduationCap,
      color: '#063F3A',
      bgColor: 'bg-[#063F3A]/5',
    },
    {
      title: profile.interestsCard.title,
      value: profile.interestsCard.value,
      icon: Compass,
      color: '#C9A227',
      bgColor: 'bg-[#C9A227]/10',
    },
    {
      title: profile.focusCard.title,
      value: profile.focusCard.value,
      icon: Target,
      color: '#063F3A',
      bgColor: 'bg-[#063F3A]/5',
    },
    {
      title: profile.careerGoalCard.title,
      value: profile.careerGoalCard.value,
      icon: Rocket,
      color: '#C9A227',
      bgColor: 'bg-[#C9A227]/10',
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Me Section"
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
            Background &amp; Ambition
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2933] tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] rounded-full" />
        </motion.div>

        {/* Narrative Biography Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#063F3A]/15 shadow-sm space-y-4 text-[#1F2933]/90 leading-relaxed text-base sm:text-lg"
        >
          {profile.aboutText.map((paragraph, index) => (
            <p key={index} className="font-normal">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* 4 Information Cards (Education, Interests, Focus, Career Goal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-2xl p-5 border border-[#063F3A]/15 shadow-xs hover:shadow-md hover:border-[#063F3A]/30 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between gap-3 group cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl ${card.bgColor} flex items-center justify-center text-[#063F3A] group-hover:scale-110 transition-transform duration-200`}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-[#063F3A]/60 bg-[#F7F4ED] px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#063F3A]">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#1F2933] leading-snug">
                    {card.value}
                  </p>
                  {'status' in card && card.status && (
                    <div className="pt-1 flex flex-wrap items-center gap-1.5">
                      <span className="inline-block text-[11px] font-bold text-[#063F3A] bg-[#063F3A]/10 px-2 py-0.5 rounded-md">
                        {card.status}
                      </span>
                      {'cgpa' in card && card.cgpa && (
                        <span className="inline-block text-[11px] font-extrabold text-[#063F3A] bg-[#C9A227]/20 border border-[#C9A227]/30 px-2 py-0.5 rounded-md">
                          CGPA: <CountUp end={7.94} decimals={2} duration={1.6} />
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section with Progressive Timeline */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 pt-2"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#063F3A]/10 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#063F3A]/10 flex items-center justify-center text-[#063F3A]">
                <GraduationCap className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1F2933] tracking-tight">
                  Education
                </h3>
              </div>
            </div>
            <span className="text-xs font-bold text-[#063F3A] uppercase tracking-wider bg-[#F7F4ED] px-3 py-1 rounded-full border border-[#063F3A]/10 w-fit">
              Academic Qualifications &amp; Timeline
            </span>
          </div>

          {/* Progressive Animated Timeline Container */}
          <div className="relative pl-6 sm:pl-8 space-y-6">
            {/* Animated vertical timeline line */}
            <div className="absolute left-2 sm:left-3 top-4 bottom-4 w-0.5 bg-[#063F3A]/15 overflow-hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full bg-[#063F3A] origin-top"
              />
            </div>

            {/* 1. B.Tech Degree Card */}
            <div className="relative">
              {/* Timeline marker node */}
              <div className="absolute -left-6 sm:-left-8 top-6 flex items-center justify-center">
                <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-[#063F3A] border-2 border-white items-center justify-center text-[10px] text-[#C9A227] font-bold">
                    •
                  </span>
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#063F3A]/15 hover:border-[#063F3A]/40 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between gap-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#063F3A] uppercase tracking-wider bg-[#063F3A]/5 px-2.5 py-1 rounded-lg border border-[#063F3A]/10">
                      Undergraduate Degree
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#063F3A]/5 flex items-center justify-center text-[#063F3A] group-hover:scale-105 transition-transform duration-200">
                      <GraduationCap className="w-5 h-5 text-[#C9A227]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1F2933] group-hover:text-[#063F3A] transition-colors leading-snug">
                      B.Tech – Information Science &amp; Engineering
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1F2933]/80 font-medium flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-[#063F3A] shrink-0" />
                      <span>Women's Engineering College, Lawspet, Puducherry</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#063F3A]/10 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-medium text-[#1F2933]/70">Status &amp; CGPA</span>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063F3A] bg-[#063F3A]/10 px-3 py-1 rounded-full border border-[#063F3A]/15">
                      <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
                      Currently pursuing – 4th Year
                    </span>
                    <span className="inline-flex items-center text-xs font-extrabold text-[#063F3A] bg-[#C9A227]/20 border border-[#C9A227]/40 px-3 py-1 rounded-full">
                      CGPA: <CountUp end={7.94} decimals={2} duration={1.6} className="ml-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* 2. Higher Secondary Education (12th) Card */}
            <div className="relative">
              {/* Timeline marker node */}
              <div className="absolute -left-6 sm:-left-8 top-6 flex items-center justify-center">
                <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                  <span className="relative inline-flex rounded-full h-4 w-4 sm:h-5 sm:w-5 bg-[#C9A227] border-2 border-white items-center justify-center text-[10px] text-white font-bold">
                    •
                  </span>
                </span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#063F3A]/15 hover:border-[#063F3A]/40 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between gap-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#063F3A] uppercase tracking-wider bg-[#063F3A]/5 px-2.5 py-1 rounded-lg border border-[#063F3A]/10">
                      Higher Secondary
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] group-hover:scale-105 transition-transform duration-200">
                      <Award className="w-5 h-5 text-[#C9A227]" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-lg sm:text-xl font-bold text-[#1F2933] group-hover:text-[#063F3A] transition-colors leading-snug">
                      Higher Secondary Education (12th)
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1F2933]/70">
                      Academic qualification completed with strong foundation in mathematics and sciences.
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#063F3A]/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1F2933]/70">Percentage</span>
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#063F3A] bg-[#C9A227]/20 border border-[#C9A227]/40 px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#063F3A]" />
                    <CountUp end={79.8} decimals={1} duration={1.6} suffix="%" />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
