import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
import {  NavLink,  } from "react-router";
import shariyerShazan from "../../public/assets/shariyer-shazan.jpg"

function HomePage() {

  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row items-center">
      {/* Background for Desktop (Left Side) */}
      <div
        className="hidden md:block absolute top-0 left-0 w-[50%] h-full bg-primary z-0 pointer-events-none"
        style={{
          clipPath: "polygon(0 -20%, 100% 100%, 100% 100%, 0% 100%)",
        }}
      ></div>

      {/* Background for Mobile (Top) */}
      <div
        className="block md:hidden absolute top-0 left-0 w-full h-[70vh] bg-primary z-0 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 100% 100%, 100% 50%, 0% 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center  gap-8 px-6 md:px-12 mt-[15vh] md:mt-0">
        {/* Image */}
        <img
          className="w-[80%] md:w-[40%] h-[50vh] md:h-[90vh] object-cover rounded-2xl shadow-lg "
          src={shariyerShazan}
          alt="Shariyer Shazan"
           title="Shariyer Shazan"
        />

        {/* Text */}
        <div className="text-center md:text-left flex-1 ">
          <div className="flex justify-center items-center">
          <div>
          <h1 className="text-3xl  md:text-5xl font-bold text-primary ">
            - I'm <span className="">Shariyer Shazan .</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Backend Engineer_",
              2000,
              "",
              "NestJS & Node.js Expert_",
              2000,
              "",
              "Microservices Developer_",
              2000,
              "",
              "Distributed Systems Architect_",
              2000,
              "",
              "Event-Driven Developer_",
              2000,
              "",
              "gRPC & Kafka Infrastructure Engineer_",
              2000,
              "",
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="block text-lg md:text-xl text-primary font-semibold mt-2"
          />

          <p className="flex flex-col gap-4 mt-4 text-left text-text  text-sm md:text-base max-w-md">
            <span>
              I am a Backend Engineer focused on building production-ready backend systems and distributed architectures. I enjoy developing scalable services using NestJS, Node.js, gRPC, Kafka, PostgreSQL, MongoDB, Redis, and Docker.
            </span>
            <span className="">
              Through projects like Waave, I design microservice architectures, asynchronous event-driven workflows, and high-performance APIs with a strong focus on reliability, maintainability, and developer experience.
            </span>
          </p>
          </div>
          </div>

    
         <NavLink to={"/about"} className="flex justify-center items-center"> 
         <button  className="my-6  cursor-pointer group relative flex items-center  px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white">
 <span className="ml-8"> More About Me</span>
  <span className=" absolute -left-[4px]  flex items-center justify-center w-11 h-full rounded-full bg-primary text-white z-10">
    <FaArrowRight size={20}/>
  </span>

  {/* Background fill effect */}
  <span
    className="absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"
  ></span>
</button>
         </NavLink>

        </div>
      </div>
    </div>
  );
}

export default HomePage;
