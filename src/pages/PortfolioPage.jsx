// PortfolioPage.jsx
import React from "react";
import ProjectCard from "../componenets/ProjectsCard";
// import flatflow from "../assets/flatflow.png";
// import noHunger from "../assets/noHunger.png";
// import mealMart from "../assets/mealMart.png";
// import jobDrop from "../assets/jobDrop.png";

function PortfolioPage() {
  const projects = [
    {
      img: "/assets/waave-arch.png",
      name: "Waave — Enterprise Microservices Social Platform",
      description: [
        "Engineered a high-performance, event-driven social platform using a NestJS monorepo infrastructure.",
        "Created synchronous communication using gRPC protobuf contracts and decoupled asynchronous domain events via Apache Kafka message brokers.",
        "Orchestrated independent database layers containing PostgreSQL/Prisma, MongoDB/Mongoose, and Redis session caching.",
        "Facilitated real-time private messaging and group chat coordinating over Socket.IO WebSockets."
      ],
      technology: "NestJS Monorepo | Apache Kafka | gRPC | PostgreSQL | MongoDB | Redis | Prisma | Mongoose | Docker | Socket.IO",
      liveLink: "https://github.com/shariyerShazan/Waave-SocialMedia-Backend-Microservices",
      clientSide: "https://github.com/shariyerShazan/Waave-SocialMedia-Backend-Microservices",
      serverSide: "https://github.com/shariyerShazan/Waave-SocialMedia-Backend-Microservices",
    },
    {
      img: "/assets/ai-health.png",
      name: "AI-Powered Health & Weight Management (NDA Protected)",
      description: [
        "Established user profiles based on 5+ body health metrics (weight, height, age, activity level) with subscription-tiered access.",
        "Created an AI meal-recommendation engine accepting text, voice, and image input to auto-generate daily nutritional targets (calorie, protein, water).",
        "Configured secure payment processing through Stripe Checkout and added real-time consultation chat interfaces."
      ],
      technology: "NestJS | PostgreSQL | Prisma ORM | MongoDB | Mongoose | OpenAI API | Stripe Payments | Socket.IO | Docker",
      liveLink: "#",
      clientSide: "# (Confidential)",
      serverSide: "#",
    },
    {
      img: "/assets/finn-market.png",
      name: "Finn — Real-Time Auction & Classified Ads Marketplace",
      description: [
        "A premium monolithic auction and classified marketplace platform with Dual Mode Purchase (Fixed Price & Live Bidding).",
        "Integrated real-time user-to-user chat with presence status, typing indicators, and message logs.",
        "Implemented Stripe Connect for automatic merchant payouts and platform commission collection.",
        "Designed geospatial nearest-neighbor search utilizing Leaflet map tracking to discover regional listings."
      ],
      technology: "NestJS | PostgreSQL | Prisma | Socket.IO | Stripe Connect | React | Redux Toolkit | TypeScript | Tailwind CSS | Cloudinary | Leaflet",
      liveLink: "https://shazan-ad-marketplace-project.onrender.com",
      clientSide: "https://github.com/shariyerShazan/Finn-Frontend-Reactjs-Marketplaces",
      serverSide: "https://github.com/shariyerShazan/Finn-Nestjs-Marketplace-Backend",
    },
  ];

  return (
    <section className="max-w-7xl min-h-screen mx-auto p-8 relative">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Shariyer Shazan's <span className='text-text'>Projects</span>
      </h2>

      {/* Desktop: two columns with staggered margin */}
      <div className="hidden md:flex relative gap-8">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary opacity-30 translate-x-[-50%]" />

        <div className="flex flex-col gap-8 w-1/2">
          {projects.filter((_, idx) => idx % 2 === 0).map((proj, idx) => (
            <ProjectCard
              key={idx}
              {...proj}
              marginTop={idx === 0 ? "150px" : ""} // staggered effect
            />
          ))}
        </div>

        <div className="flex flex-col gap-8 w-1/2">
          {projects.filter((_, idx) => idx % 2 === 1).map((proj, idx) => (
            <ProjectCard
              key={idx}
              {...proj}
              marginTop={idx === 0 ? "0" : ""} // staggered effect
            />
          ))}
        </div>
      </div>

      {/* Mobile: single column */}
      <div className="md:hidden grid grid-cols-1 gap-8">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} marginTop="0" />
        ))}
      </div>
    </section>
  );
}

export default PortfolioPage;
