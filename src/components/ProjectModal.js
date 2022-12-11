import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

const ProjectModal = ({ project }) => {
  return (
    <div>
      <input type="checkbox" id="projectModal" className="modal-toggle" />
      <label
        htmlFor="projectModal"
        className="modal cursor-pointer"
      >
        <label className="modal-box w-11/12 max-w-5xl bg-gray-800 bg-opacity-70" htmlFor="">
          <label
            htmlFor="projectModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{project?.name}</h3>
          <Swiper
            loop={true}
            pagination={true}
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {project?.swiperImages?.map((image, i) => (
              <SwiperSlide key={i}>
                <img className="rounded-md" src={image} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </label>
      </label>
    </div>
  );
};

export default ProjectModal;
