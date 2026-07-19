import React from 'react'
// import { FaArrowRight } from 'react-icons/fa'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'
import MySkills from '../componenets/MySkills';
import { FiDownload } from "react-icons/fi";
import BlogSection from '../componenets/GallerySection';
import EducationTimeline from '../componenets/EducationTimeline';



function AboutPage() {
  const birthYear = 2003;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
    
      <h2 className="text-2xl md:text-5xl text-text font-bold text-center py-4 ">
        About <span className="text-primary">Shariyer Shazan</span>
      </h2>
 
{/* social links */}
      <div className="flex  justify-center items-center gap-8 pb-6  my-6 border-b-1 border-gray-400">
            <a
              href="mailto:shariyershazan1@gmail.com"
              className="text-primary hover:scale-110  text-2xl"
              aria-label="Send Email"
            >
              <HiOutlineMail size={50} />
            </a>
            <a
              href="https://github.com/shariyerShazan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 text-2xl"
              aria-label="GitHub Profile"
            >
              <FaGithub size={50}/>
            </a>
            <a
              href="https://linkedin.com/in/shariyerShazan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 text-2xl"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={50}/>
            </a>
            <a
              href="https://facebook.com/darling.Shazan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:scale-110 text-2xl"
              aria-label="Facebook Profile"
            >
              <FaFacebookF size={50}/>
            </a>
          
          </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left grid - personal info, 2 cols inside */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 text-text">
          {/* Name */}
          <div>
            <p className="font-semibold text-lg">Name:</p>
            <p>Shariyer Shazan</p>
          </div>
          {/* Age */}
          <div>
            <p className="font-semibold text-lg">Age:</p>
            <p>{age}</p>
          </div>
          {/* Nationality */}
          <div>
            <p className="font-semibold text-lg">Nationality:</p>
            <p>Bangladeshi</p>
          </div>
          {/* Address */}
          <div>
            <p className="font-semibold text-lg">Address:</p>
            <p>Tejgaon, Dhaka, Bangladesh</p>
          </div>
          {/* Freelance */}
          <div>
            <p className="font-semibold text-lg">Freelance:</p>
            <p>Available</p>
          </div>
          {/* Phone */}
          <div>
            <p className="font-semibold text-lg">Phone</p>
            <p>+880 1724 630245</p>
          </div>
          
          {/* Language */}
          <div>
            <p className="font-semibold text-lg">Language</p>
            <p>English (Fluent), Bangla (Native), Hindi, Urdu</p>
          </div>
          <div>
                  <a target="_blank" href='https://drive.google.com/file/d/1vq9T0M7qWBFi7xLagAcx9nojvnApvJyQ/view?usp=sharing' className="my-4 w-max cursor-pointer group relative flex items-center  px-5 py-2 border-2 border-primary rounded-full text-primary overflow-hidden hover:text-white">
                   <span className="ml-8">Shazan's Resume</span>
                    <span className=" absolute -left-[4px]  flex items-center justify-center w-11 h-full rounded-full bg-primary  text-white z-10">
                      <FiDownload size={20}/>
                    </span>
                  
                    {/* Background fill effect */}
                    <span
                      className="absolute top-0 left-0 w-0 h-full  bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10 rounded-full"
                    ></span>
                  </a>
          </div>
        </div>

        {/* Right grid - cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-text">
          {/* Card 1 */}
          <div className="bg- p-6 rounded-lg shadow-md  dark:border-primary border border-transparent text-center">
            <h3 className="text-xl font-bold mb-2">Experience</h3>
            <p className="text-3xl font-extrabold text-primary mb-1">2+</p>
            <p>Years Working</p>
          </div>
          {/* Card 2 */}
          <div className="bg- p-6 rounded-lg shadow-md text-center  dark:border-primary border border-transparent">
            <h3 className="text-xl font-bold mb-2">Customers</h3>
            <p className="text-3xl font-extrabold text-primary mb-1">50+</p>
            <p>Satisfied Clients</p>
          </div>
          {/* Card 3 */}
          <div className="bg- p-6 rounded-lg shadow-md text-center  dark:border-primary border border-transparent">
            <h3 className="text-xl font-bold mb-2">Projects </h3>
            <p className="text-3xl font-extrabold text-primary mb-1">30+</p>
            <p>Successful Projects</p>
          </div>
          {/* Card 4 */}
          <div className="bg- p-6 rounded-lg shadow-md text-center  dark:border-primary border border-transparent">
            <h3 className="text-xl font-bold mb-2">Awards Win</h3>
            <p className="text-3xl font-extrabold text-primary mb-1">10+</p>
            <p>Award Won</p>
          </div>
        </div>
      </div>

      {/* Experience & Education */}
      <EducationTimeline />

      {/* skills */}
      <MySkills />


    </div>
  )
}

export default AboutPage
