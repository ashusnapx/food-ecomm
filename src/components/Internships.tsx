"use client";

import { internshipData } from "@/constants/constant";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    month: "short", 
    year: "numeric" 
  });
};

const Internships = () => {
  const totalMonths = internshipData.reduce((acc, internship) => {
    const start = new Date(internship.fromDate);
    const end = new Date(internship.toDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12 + 
                   (end.getMonth() - start.getMonth()) + 1;
    return acc + months;
  }, 0);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="mx-4 md:mx-9 mt-16" aria-labelledby="experience-heading">
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
          Professional Journey
        </motion.span>
        <h2 
          id="experience-heading"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {internshipData.length} roles • {totalMonths}+ months of experience
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <motion.div 
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-400/30 to-transparent hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformOrigin: "top" }}
        />

        {internshipData.map((internship, index) => (
          <motion.div 
            key={index}
            className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Timeline dot */}
            <motion.div 
              className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 bg-purple-500 rounded-full border-4 border-white dark:border-gray-950 hidden md:block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.2, type: "spring" }}
            />

            {/* Content Card */}
            <motion.article 
              className={`flex-1 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ${
                index % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Role & Company */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {internship.role}
                </h3>
                <p className="text-lg text-purple-600 dark:text-purple-400 font-medium">
                  {internship.companyName}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {formatDate(internship.fromDate)} — {formatDate(internship.toDate)}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {internship.modeOfWork}
                </span>
              </div>

              {/* Work Done */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Key Contributions
                </h4>
                <ul className="space-y-2">
                  {internship.workDone.map((task, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                      {task}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {internship.TechStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
