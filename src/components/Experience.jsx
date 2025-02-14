import ExperienceCard from "./ui/ExperienceCard";
import { default as moznLogo } from "../assets/nnn.png";
import {default as yuLogo} from "../assets/saa.png";
// Add logos for the new experiences
import { default as companyLogo1 } from "../assets/blackc.png";
import { default as companyLogo2 } from "../assets/micc.png";
//import { default as companyLogo3} from "../assets/ibmm.png";
const Experience = () => {
  var mozn = [
    "Developed and deployed responsive web applications using React.js and Node.js in an agile environment.",
    "Designed RESTful APIs, integrated third-party services, and contributed to stakeholder management.",

  ];

 

  var company1 = [
    "Enhanced user interfaces with HTML, CSS, and JavaScript, delivering responsive and visaully appealing designs that improved user satisfaction.",
    "Worked closely with cross-functional teams, aligning development with business goals and contributing to technical solutions for user experience enhancements.",
    
  ];

  var company2 = [
    "Created a Machine Learning-based Disease Prediction System using Streamlit, Scikit-Learn, and Pickle, enabling predictions for Diabetes, Heart Disease, and Parkinsons Disease with a user-friendly interface.",
    "Trained multiple machine learning models, evaluated their performance, and selected the most accurate model for reliable disease prediction.",
    
  ];
  
  var yu = [`Bachelor of Engineering in Computer Science Engineering`, `CGPA of: 7.35/10.0`];

  return (
    <div
      id="experience"
      className="mx-auto flex flex-col justify-center gap-8 p-4 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Education & Experience
          
      </h1>
      <ExperienceCard
        logo={yuLogo}
        name="YU"
        job="Computer Science Engineering"
        duration="Nov. 2021 - May. 2025"
        skills={yu}
      />
      {/* Experience Cards */}
      <ExperienceCard
        logo={moznLogo}
        name="Mozn"
        job="Full Stack Intern"
        duration="June. 2024 - June. 2024"
        skills={mozn}
      />
      
      <ExperienceCard
        logo={companyLogo1}
        name="Company 1"
        job="Front End Development Intern"
        duration="July. 2023 - Aug. 2023"
        skills={company1}
      />
      <ExperienceCard
        logo={companyLogo2}
        name="Company 2"
        job="Artificial Intelligence Intern"
        duration="Jan. 2025 - Feb. 2025"
        skills={company2}
      />
     
    </div>
  );
};

export default Experience;
