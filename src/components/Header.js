import React from "react";
import { FaLinkedin, FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";


const Header = () => {
  const resumeURL =
  "https://drive.google.com/uc?id=197ZbRl4M3ZVNmylsrRum20F4074OlmXl&export=download" ; 
  

  return (
    <div className=" min-h-screen mx-0 -mt-16 mb-8 w-full flex justify-around items-center  flex-col md:flex-row-reverse">
      <div className="mt-20 w-5/6 md:w-2/6">
    <script src="https://tryhackme.com/badge/t/683a939b26eb05f1c6a717bbf3d5a2afa26791c89ed3cf263b5189a085e7db33fad5ea419362d44f5a796dd013c9d758?theme=dark"></script>
     <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1506346" title="TryHackMe Badge"
      className="mx-auto rounded-box"
      loading="lazy"
      scrolling="no"
      style={{
        display: 'block',
        width: '326px',
        height: '84px',
        border: 'none',
        background: 'transparent',
        }}></iframe>
        <h4 className=" text-4xl font-bold sm:text-5xl lg:text-6xl mb-5">
          <span className="text-violet-500">Hello</span> Everyone,
        </h4>
        <p className="lg:text-2xl">
          I am Md. Moinul Hassan, a Cyber Security Researcher, polyglot, and an aspiring MERN stack web developer with the knowledge of JavaScript, React.js, Node.js and some more packages,
          frameworks and libraries.{" "}
        </p>
        <div className="text-3xl mt-6 flex justify-center">
          <a
            href="https://github.com/MHmsn"
            className="mx-2 hover:text-gray-400"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mhmsn/"
            className="mx-2 text-blue-700 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:moinulh.msn@gmail.com"
            className="mx-2  text-orange-700 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaGoogle />
          </a>
          <a
            href="https://www.facebook.com/mssn.l"
            className="mx-2 text-blue-700 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="flex justify-between mt-10">
          <a href="#contact" className="btn btn-outline btn-secondary">Contact Me</a>
          <a href={resumeURL} className="btn btn-outline btn-secondary">
            My Resume
          </a>
        </div>
      </div>

      <div className=" ml-10 b-48 md:w-2/6">
        <lottie-player
          src="https://assets6.lottiefiles.com/packages/lf20_fi2zcy9b.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Header;
