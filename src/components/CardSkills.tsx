"use client";

import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { motion, type Variants } from "framer-motion";

interface SkillCategory {
  icon: IconType | LucideIcon;
  title: string;
  skills: { icon: IconType; label: string }[];
}

interface SkillCardProps {
  skillCategory: SkillCategory;
  index?: number;
}

const CardSkills = ({ skillCategory, index = 0 }: SkillCardProps) => {
  const CategoryIcon = skillCategory.icon;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        delay: index * 0.1,
      },
    },
  };
  
  return (
    <motion.article 
      className="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)"
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800">
        <motion.div 
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring" as const, stiffness: 300 }}
        >
          <CategoryIcon className="w-6 h-6" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {skillCategory.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-3">
        {skillCategory.skills.map((skill, idx) => {
          const SkillIcon = skill.icon;
          return (
            <motion.div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-200"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.02 }}
            >
              <SkillIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.article>
  );
};

export default CardSkills;
