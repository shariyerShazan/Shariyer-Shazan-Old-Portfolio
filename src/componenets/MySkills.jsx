import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";

// Import required React Icons
import {
  SiTypescript, SiGo, SiJavascript, SiPython, SiCplusplus, SiC,
  SiNodedotjs, SiExpress, SiNestjs, SiPostgresql, SiMongodb, SiMysql,
  SiPrisma, SiRedis, SiApachekafka, SiRabbitmq, SiSocketdotio, SiGraphql,
  SiJsonwebtokens, SiDocker, SiGithubactions,
  SiNginx, SiVercel, SiRender, SiReact, SiNextdotjs, SiTailwindcss,
  SiRedux, SiMui, SiShadcnui, SiStripe,
  SiFirebase, SiPostman, SiFigma, SiSwagger, SiCloudinary, SiMongoose,
} from "react-icons/si";

import {
  FaGithub, FaAws,
  FaUsers, FaComments, FaHandshake, FaClock, FaCode, FaLayerGroup, FaCheckCircle,
  FaLinux, FaTerminal, FaCreditCard,
  FaServer, FaProjectDiagram, FaGlobe, FaCogs, FaSmile
} from "react-icons/fa";

import { TbNetwork } from "react-icons/tb";

// Tech stack data structure imported from the new website layout
const skillsData = [
  {
    id: "backend",
    title: "Backend & Databases",
    icon: FaServer,
    items: [
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#95A5A6" },
      { name: "Kafka", icon: SiApachekafka, color: "#1A252C" },
      { name: "gRPC", icon: TbNetwork, color: "#244C5A" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#34495E" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#635BFF" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Messaging",
    icon: FaProjectDiagram,
    items: [
      { name: "Microservices", icon: SiDocker, color: "#FF6B00" },
      { name: "Kafka", icon: SiApachekafka, color: "#1A252C" },
      { name: "gRPC", icon: TbNetwork, color: "#244C5A" },
      { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
    ],
  },
  {
    id: "languages",
    title: "Core Languages",
    icon: FaCode,
    items: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#00599C" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    icon: FaCogs,
    items: [
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Linux", icon: FaLinux, color: "#FCC624" },
      { name: "Shell Scripting", icon: FaTerminal, color: "#607D8B" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
      { name: "Nginx", icon: SiNginx, color: "#009639" },
      { name: "Vercel", icon: SiVercel, color: "#475569" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FaGlobe,
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#1E293B" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "ShadcnUI", icon: SiShadcnui, color: "#2D3748" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
      { name: "DaisyUI", icon: FaLayerGroup, color: "#00B4A2" },
      { name: "Zod", icon: FaCheckCircle, color: "#2F6BEE" },
    ],
  },
  {
    id: "payment",
    title: "Payment Systems",
    icon: FaCreditCard,
    items: [
      { name: "Stripe", icon: SiStripe, color: "#635BFF" },
      { name: "SSLCommerz", icon: FaCreditCard, color: "#005C9E" },
      { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: FaGithub,
    items: [
      { name: "Git", icon: FaGithub, color: "#F05032" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: FaCode, color: "#007ACC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    id: "soft-skills",
    title: "Interpersonal Skills",
    icon: FaSmile,
    items: [
      { name: "Leadership", icon: FaUsers, color: "#007BFF" },
      { name: "Communication", icon: FaComments, color: "#FF5722" },
      { name: "Teamwork", icon: FaHandshake, color: "#9C27B0" },
      { name: "Time Management", icon: FaClock, color: "#4CAF50" },
    ],
  },
];

export default function MySkills() {
  const darkTheme = useSelector((state) => state.theme.darkTheme);
  const [themeColor, setThemeColor] = useState("");
  const [activeCategory, setActiveCategory] = useState("backend");

  useEffect(() => {
    // Read the active primary color from the DOM variables dynamically
    const primaryColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-primary')
      .trim();
    setThemeColor(primaryColor || "#7AC72E");
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Helper to adjust color dynamically in dark/light mode for neutral brand colors (like black/white)
  const getSkillColor = (color) => {
    const hex = color.toUpperCase();
    if (hex === "#FFFFFF" || hex === "#FFF") {
      return darkTheme ? "#FFFFFF" : "#1A202C";
    }
    if (hex === "#000000" || hex === "#000" || hex === "#1E293B" || hex === "#2D3748" || hex === "#1A252C") {
      return darkTheme ? "#F8FAFC" : "#0F172A";
    }
    return color;
  };

  const activeCategoryObj = skillsData.find((cat) => cat.id === activeCategory) || skillsData[0];

  return (
    <section 
      className="max-w-7xl mx-auto px-6 py-16" 
      aria-labelledby="skills-heading"
    >
      <div className="text-center mb-12">
        <h2 
          id="skills-heading"
          className="text-4xl font-bold text-primary mb-4 relative inline-block pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-primary after:rounded mt-4"
        >
          My Skills
        </h2>
        <p className="text-sm text-text max-w-xl mx-auto mt-2">
          A comprehensive representation of my technical expertise, software engineering domains, and soft skills. Hover over cards to interact.
        </p>
      </div>

      {/* Category tabs */}
      <div 
        className="flex justify-center gap-3 mb-10 flex-wrap" 
        role="tablist" 
        aria-label="Technical skill domains"
      >
        {skillsData.map((cat) => {
          const TabIcon = cat.icon;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              id={`tab-${cat.id}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm md:text-base border-2 shadow-sm
                ${isActive 
                  ? "bg-primary text-white border-primary transform scale-105" 
                  : "border-primary/40 dark:border-primary/20 text-primary hover:bg-primary hover:text-white dark:hover:text-white dark:bg-gray-900 bg-white"
                }`}
            >
              <TabIcon className="w-4 h-4" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Skills grid */}
      <div 
        id={`panel-${activeCategory}`}
        role="tabpanel" 
        aria-labelledby={`tab-${activeCategory}`}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
      >
        {activeCategoryObj.items.map((skill, index) => {
          const SkillIcon = skill.icon;
          const displayColor = getSkillColor(skill.color);

          return (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-duration={`${(index % 5) * 150}`}
              style={{
                "--skill-color": displayColor,
              }}
              className="group flex flex-col items-center border-[3px] border-primary justify-center p-6 bg-white dark:bg-gray-900 rounded-xl relative select-none cursor-pointer transition-all duration-300 ease-out hover:border-[var(--skill-color)] hover:shadow-[-6px_6px_0_0_var(--skill-color)] hover:-translate-y-1.5 hover:translate-x-1.5"
              role="group"
              aria-label={`Skill: ${skill.name}`}
            >
              <div 
                className="w-16 h-16 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              >
                <SkillIcon 
                  style={{ color: displayColor }} 
                  className="w-12 h-12 object-contain transition-colors duration-300" 
                  aria-hidden="true"
                />
              </div>
              <span className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
