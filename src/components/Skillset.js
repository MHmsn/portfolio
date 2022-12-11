import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const Skillset = () => {
  const Skills = [
    {
    name: 'HTML5',
      element: (
        <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_wuuqhfmi.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
      ),
    },
    {
    name: 'CSS3',
      element: (
        <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_d6czzyqr.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
      ),
    },
    {
    name: 'JavaScript',
      element: (
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_fy4bunta.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
      ),
    },
    {
    name: 'React.JS',
      element: (
        <lottie-player
          src="https://assets4.lottiefiles.com/datafiles/fab7172a9302d416bcdb8ac7e1c71123/data.json"
          background="transparent"
          loop
          autoplay
        ></lottie-player>
      ),
    },
    {
    name: 'Node.JS',
      element: (
        <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ipzmqnqg.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
      ),
    },
    {
        name: 'MongoDB',
      element: (
        <lottie-player
          src="https://assets7.lottiefiles.com/private_files/lf30_9xcevvfo.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      ),
    },
    {
        name: 'Firebase',
      element: (
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_s3zjvwxq.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
      ),
    }
  ];

  return (
    <div id="skills" className="mx-10 my-12 pt-6 justify-around flex flex-col md:flex-row">
      <div className="my-16 w-5/6 text-3xl font-bold md:w-3/6">
        Skill Set
        <div className="  grid grid-cols-2 gap-4 md:grid-cols-6 mb-6">
            {Skills.map((skill,i) => <div key={i} className="w-20 md:w-24 text-lg mx-auto">{skill.element}{skill.name}</div>)}
        </div>
      </div>
      <div className=" md:ml-10 pt-10 b-48 w-full rounded-xl md:w-1/4">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_ctaacxzb.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
        <div className="text-3xl text-lime-500 font-bold">
        <Typewriter
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={true}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Skillset;
