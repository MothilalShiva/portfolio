import { HiMail } from "react-icons/hi";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      id="contact"
      className="mx-auto flex flex-col justify-center gap-8 p-4 pb-8 text-center md:items-center md:justify-between lg:max-w-7xl"
    >
      <h1 className="py-6 text-3xl font-bold text-primary md:text-4xl ">
        Contact Me
      </h1>
      <div className="w-full md:flex md:flex-row md:justify-between md:gap-5 md:px-4">
        <a href="/">
          <h2 className="font-impact text-3xl">
            <span className="text-primary">&lt;M</span>othilal Shiva
            <span className="text-primary">/&gt; </span>
          </h2>
        </a>
        <div className="flex flex-col items-center gap-4 py-4 md:flex-row md:py-0">
          <a
            className="inline-flex items-center gap-2"
            href="https://github.com/MothilalShiva"
          >
            <GoMarkGithub /> MothilalShiva
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="https://www.linkedin.com/in/mothilal-shiva-41151b228/"
          >
            <BsLinkedin /> Mothilal Shiva R
          </a>
          <a
            className="inline-flex items-center gap-2"
            href="mailto:shivaprabhu04@gmail.com"
          >
            <HiMail /> shivaprabhu04@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
