import React from "react";
import pcb from "../assets/PC-Bikroy.png";
import lit from "../assets/Learn-IT.png";
import pcam from "../assets/PhotoCam.png";

const Projects = () => {
  const projects = [
    {
      name: "PC-Bikroy",
      img: pcb,
      details:
        "This is an used pc parts buying and selling website. Users can buy or sell used products here with Stripe payment system. Admin can monitor users and reported products",
      link: "https://pc-bikroy.web.app/",
    },
    {
      name: "PhotoCam",
      img: pcam,
      details:
        "This is a photography service providing website. Users can get photography based service here.",
      link: "https://photo-cam.web.app/",
    },
    {
      name: "Learn-IT",
      img: lit,
      details:
        "This is an E-learning website, users can browse and purchase different courses here. ",
      link: "https://learn-it-33678.web.app/",
    },
  ];
  return (
    <div id="projects" className="mx-6 pt-24">
    <h2 className="text-3xl mb-10 text-start">Some Projects I have done:</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project, i) => (
          <div key={i} className="card glass rounded-md shadow-md shadow-white">
            {" "}
            <img src={project.img} className="rounded-t-md p-0.5" alt="" />   
            <div className="card-body bg-black bg-opacity-50">
            <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-sm">{project.details}</p>
              <a href={project.link} target='_blank' rel='noreferrer' className="btn btn-outline text-white btn-secondary my-5 mx-auto">
                {" "}
                Visit website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
