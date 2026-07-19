import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function ExperienceEducation() {
  const experienceData = [
    {
      company: "Betopia",
      role: "Full Stack Developer (Backend-Focused)",
      period: "AUG 2025 – PRESENT",
      location: "Dhaka, Bangladesh",
      description: [
        "Engineered the backend for a health & weight-management platform covering 5+ body metrics, subscription-gated provider access, and secure payment processing.",
        "Delivered an AI meal-recommendation engine (3 input modes: text, voice, image) generating 3 daily targets (calorie, protein, water) plus provider marketplaces and admin panels.",
        "Shipped 3 production full-stack applications (Node.js, NestJS, PostgreSQL, MongoDB) with Socket.IO and Stripe, and streamlined CI/CD (Docker + GitHub Actions) on AWS."
      ],
      tech: [
        "NestJS", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Prisma",
        "Mongoose", "Redis", "Kafka", "gRPC", "Socket.IO", "Stripe", "Docker", "AWS"
      ]
    }
  ];

  const educationData = [
    {
      school: "Southeast University",
      degree: "B.Sc. in Computer Science and Engineering",
      period: "2025 – Present",
      location: "Dhaka, Bangladesh",
      details: "Pursuing Bachelor's degree in CSE, specializing in distributed systems and systems architecture."
    },
    {
      school: "BAF Shaheen College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2022 – 2024",
      location: "Dhaka, Bangladesh",
      details: "Background: Science. Graduated with a perfect GPA 5.00/5.00."
    }
  ];

  return (
    <section id="experience-education" className="py-16 w-full text-text">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Column: Work Experience */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <FaBriefcase className="text-primary text-2xl" />
            <span>Work Experience</span>
          </h2>
          
          <div className="space-y-6">
            {experienceData.map((exp, idx) => (
              <article 
                key={idx} 
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                    <p className="text-base font-semibold text-text/80">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      <time>{exp.period}</time>
                    </span>
                    <p className="text-xs text-gray-500 mt-1 uppercase font-mono">{exp.location}</p>
                  </div>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100 dark:border-gray-800/60">
                  {exp.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-mono font-medium text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/15 transition-colors duration-250 hover:bg-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Education History */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
            <FaGraduationCap className="text-primary text-2xl" />
            <span>Education History</span>
          </h2>

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <article 
                key={idx} 
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                    <p className="text-base font-semibold text-text/80">{edu.school}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                      <time>{edu.period}</time>
                    </span>
                    <p className="text-xs text-gray-500 mt-1 uppercase font-mono">{edu.location}</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {edu.details}
                </p>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
