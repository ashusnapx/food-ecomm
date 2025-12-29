"use client";

import CardSkills from "./CardSkills";
import { skillCategories } from "@/constants/constant";
import { motion } from "framer-motion";

// Normalize skill names to count unique skills properly
const normalizeSkillName = (skill: string): string => {
  return skill
    .toLowerCase()
    .replace(/[.\s-\/]/g, '')    // Remove dots, spaces, hyphens, slashes
    .replace(/\d+(\.\d+)*/g, '') // Remove version numbers
    .trim();
};

const getUniqueSkillCount = (categories: typeof skillCategories): number => {
  const skillSet = new Set<string>();
  categories.forEach((category) => {
    category.skills.forEach((skill) => {
      skillSet.add(normalizeSkillName(skill.label));
    });
  });
  return skillSet.size;
};

const Skills = () => {
  const totalSkills = getUniqueSkillCount(skillCategories);

  return (
    <section className="mx-4 md:mx-9 mt-16" aria-labelledby="skills-heading">
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.span 
          className="inline-block px-4 py-1.5 text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 rounded-full mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Technical Expertise
        </motion.span>
        <h2 
          id="skills-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">Skills</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {totalSkills} technologies across {skillCategories.length} domains
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((skillCategory, index) => (
          <CardSkills key={index} skillCategory={skillCategory} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
