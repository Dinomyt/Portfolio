import React from "react";
import { projects } from "@/data";
import Carousel from "@/components/Carousel";  
const ProjectsCarousel = () => {
  return (
    <section className="py-20" id="projects-carousel">
      <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-10" id="projects">
        My Real World Application Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {projects.map(({ id, title, des, img, iconLists, carouselImages }) => (
          <div
            key={id}
            className="w-[320px] sm:w-[400px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <div className="w-full mb-4">
              <Carousel images={carouselImages} />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">{des}</p>
            <div className="flex items-center mt-4">
              {iconLists.map((icon, idx) => (
                <div
                  key={idx}
                  className="border border-white/[0.2] rounded-full bg-black-100 h-10 w-10 m-1 flex justify-center items-center"
                >
                  <img src={icon} alt={icon} className="p-2" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
