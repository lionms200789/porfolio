'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

//swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

const Projects = ({ data = [] }) => <div className="container mx-auto px-8">
    <Swiper
        slidesPerView={1.1}
        spaceBetween={24}
        className="mySwiper my-8"
        modules={[Autoplay]}
        autoplay={{
            delay: 4000
        }}
        breakpoints={{
            576: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 3
            }
        }}
        style={{
            overflow: 'visible'
        }}
    >
        {
            data.length ? data.map((item, idx) => {
                return <SwiperSlide key={idx}>
                    <a href={item.link} target="_blank" className="group">
                        <div className="relative shadow-md rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-150 ease-linear">
                            <img src={item.img} className="group-hover:blur-sm transition-all duration-150 ease-linear aspect-[16/9] object-contain bg-white" />
                            <span className="absolute top-full left-1/2 text-white px-5 py-1 rounded-full bg-cyan-600 -translate-x-1/2 group-hover:opacity-100 transition-all duration-150 ease-linear group-hover:top-1/2 group-hover:-translate-y-1/2">前往查看</span>
                        </div>
                        <h5 className="text-xl font-bold mt-2 transition-colors duration-150 ease-linear group-hover:text-cyan-600">{item.title}</h5>
                        <p className="mt-2 text-gray-500 group-hover:text-cyan-600">{item.description}</p>
                    </a>
                </SwiperSlide>
            }) : null
        }
    </Swiper>
</div >

export default Projects;