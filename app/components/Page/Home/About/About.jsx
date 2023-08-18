'use client';

import { useEffect } from "react";
import { scrollTransition } from '@/utils/scrollTransition';

/** 關於我 */
const About = ({ data = {} }) => {

  useEffect(() => {
    scrollTransition({ target: '.fadeInRight', from: { x: -70 }, to: { x: 0, duration: 1.5 } });
    scrollTransition({ target: '.fadeInLeft', from: { x: 70 }, to: { x: 0, duration: 1.5 } });
  }, [])

  return (<div className="container flex flex-col lg:flex-row gap-7 md:gap-10">
    <div className="flex-1">
      <div className="max-w-[440px] mx-auto lg:ml-auto rounded-xl shadow-md overflow-hidden fadeInRight">
        <img src={data.img} className="block aspect-square object-cover object-center" />
      </div>
    </div>
    <div className="flex-1 fadeInLeft prose" dangerouslySetInnerHTML={{ __html: data.description }} />
  </div>)
}

export default About;