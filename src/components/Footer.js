import React from "react";
import { FaLinkedin, FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="mt-12">
      <div className="flex justify-around items-center mx-6">
        <div>
          <h2 className="text-3xl mb-4">Contact Information</h2>
          <a
            href="tel:+8801920129440"
            className="mt-4 text-xl hover:text-secondary font-bold"
          >
            +8801920129440
          </a>
          <br />
          <a
            href="mailto:moinulh.msn@gmail.com"
            className="mt-4 text-xl hover:text-secondary font-bold"
          >
            moinulh.msn@gmail.com
          </a>
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
        </div>
        <div className="hidden w-96 md:block">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_u25cckyh.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>

      <p className="my-6">Made by Md. Moinul Hassan</p>
    </div>
  );
};

export default Footer;
