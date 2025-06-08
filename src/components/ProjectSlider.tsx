import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { EffectCoverflow, Pagination, Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import '../styles/style.css';
import ProjectCard from './ProjectCard';



interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  type: string;
  techStack: string[];
}

interface ProjectSliderProps {
  projects: Project[];
}

const ProjectSlider: React.FC<ProjectSliderProps> = ({ projects }) => {
  return (
    <div className="md:hidden w-full">

      <Swiper
        autoplay={{delay: 2000, disableOnInteraction: false}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className="mySwiper"
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx}>
            <ProjectCard project={project} idx={idx} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectSlider; 