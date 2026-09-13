import React from 'react';
import { motion } from 'motion/react';
import { CERTIFICATES_DATA } from '../data';
import { Award, Calendar, MapPin, Trophy, ExternalLink } from 'lucide-react';

export const AchievementsScreen: React.FC = () => {
  return (
    <section
      id="achievements"
      aria-label="Achievements and Certifications Section"
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
            Verified Credentials &amp; Workshops
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1F2933] tracking-tight">
            Achievements &amp; Certifications
          </h2>
          <div className="w-16 h-1 bg-[#C9A227] rounded-full" />
          <p className="text-sm sm:text-base text-[#1F2933]/75 max-w-2xl">
            Verified academic credentials, technical internships, NPTEL Elite certifications, and hands-on workshops.
          </p>
        </motion.div>

        {/* Certificate Cards Grid: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES_DATA.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-[#063F3A]/15 hover:border-[#063F3A] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Badge & Date */}
                <div className="flex items-center justify-between gap-2 border-b border-[#063F3A]/10 pb-3">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#063F3A]">
                    <Award className="w-4 h-4 text-[#C9A227]" />
                    <span className="truncate">{cert.issuer}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 text-[11px] text-[#1F2933]/70 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#063F3A]/60" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold text-[#1F2933] group-hover:text-[#063F3A] transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  {cert.location && (
                    <div className="flex items-center gap-1 text-xs text-[#063F3A] font-semibold mt-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>Location: {cert.location}</span>
                    </div>
                  )}
                </div>

                {/* Achievement Highlight */}
                {cert.achievement && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F7F4ED] border border-[#063F3A]/10 text-xs font-bold text-[#063F3A] w-fit">
                    <Trophy className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{cert.achievement}</span>
                  </div>
                )}

                {/* Description */}
                {cert.description && (
                  <p className="text-xs sm:text-sm text-[#1F2933]/80 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>
                )}
              </div>

              {/* Action Button: Opens actual certificate link in a new browser tab */}
              <div className="pt-4 mt-4 border-t border-[#063F3A]/5 flex items-center justify-between">
                <span className="text-[11px] text-[#1F2933]/60 font-mono">
                  Verified Credential
                </span>
                <motion.a
                  id={`view-cert-btn-${cert.id}`}
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -1.5 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#063F3A] hover:bg-[#042d29] text-white text-xs font-semibold shadow-xs hover:shadow-md transition-colors cursor-pointer"
                  title={`View ${cert.title} certificate in new tab`}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A227] transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

