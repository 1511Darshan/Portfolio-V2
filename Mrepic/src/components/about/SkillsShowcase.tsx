'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsByCategory } from '@/lib/aboutData';
import { FaTimes } from 'react-icons/fa';
import type { MouseEvent } from 'react';

const SkillsShowcase = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const categories = Object.keys(skillsByCategory).sort();

  return (
    <section className="relative w-full py-20 px-4 md:px-10 bg-background border-t border-card-border">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Skills & Interests
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            From competitive programming to design, here's everything that defines my technical journey.
          </p>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 text-sm font-mono border border-card-border rounded-lg text-muted-foreground hover:text-foreground hover:border-cyan-500/50 transition-all bg-background/50 hover:bg-card/50"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto">
        {categories.map((category) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            {/* Category Title */}
            <div className="mb-8 pb-4 border-b border-card-border">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                {category}
              </h3>
            </div>

            {/* Skills Grid for Category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsByCategory[category].map((skill, idx) => (
                <motion.button
                  key={skill.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  onClick={() => setSelectedSkill(skill)}
                  className="group relative p-5 text-left bg-card border border-card-border rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-background rounded-lg group-hover:bg-cyan-500/10 transition-colors">
                      <skill.icon className="text-lg text-cyan-500" />
                    </div>
                    <h4 className="font-bold text-foreground group-hover:text-cyan-400 transition-colors text-sm">
                      {skill.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-cyan-500 font-mono">→</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-card border border-cyan-500/30 rounded-xl p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-red-500/20 rounded-lg transition-all"
              >
                <FaTimes size={20} />
              </button>

              {/* Content */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-background rounded-lg">
                  <selectedSkill.icon className="text-3xl text-cyan-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {selectedSkill.title}
                  </h3>
                  <p className="text-sm text-cyan-500 font-mono">
                    {selectedSkill.category}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 text-base leading-relaxed mb-6">
                {selectedSkill.description}
              </p>

              {/* Quote */}
              <div className="p-4 bg-background border-l-4 border-cyan-500 rounded">
                <p className="text-foreground italic">
                  "{selectedSkill.quote}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SkillsShowcase;
