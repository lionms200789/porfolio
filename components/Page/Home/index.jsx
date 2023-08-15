import { useEffect, useState } from 'react';
import useSWR from 'swr';
import Heading from '@/components/Heading';
import About from './About';
import Skills from './Skills';
import Experiences from './Experiences';
import Project from './Project';
import { fetcher } from '@/utils/fetcher';

const HomePage = () => {
  const [data, setData] = useState(null);
  const result = useSWR('/api/staticdata', fetcher);

  useEffect(() => {
    if (result.data) setData(JSON.parse(result.data));
  }, [result.data])

  return <>
    <div className='relative inset-x-0 h-[85vh] md:h-[80vh] w-full overflow-hidden'>
      <video className='absolute inset-0 max-w-[1920px] lg:max-w-full' loop="loop" muted="muted" autoplay="autoplay" preload="auto">
        <source src="/videos/clouds.webm" type="video/webm"></source>
        <source src="/videos/clouds.mp4" type="video/mp4"></source>
      </video>
      <div className='text-white text-center w-full absolute z-[10] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <div className='text-3xl md:text-5xl lg:leading-normal'>{`Hey, I'm Chris Tseng.`}</div>
        <div className='text-3xl md:text-5xl lg:leading-normal mt-3'>a Web Developer.</div>
      </div>
      <div className="absolute inset-0 bg-[rgba(100,180,220,0.7)]"></div>
    </div>
    <Heading title="關於我" subTitle="ABOUT ME" />
    <About data={data?.introduction} />
    <Heading title="技能" subTitle="SKILLS" />
    <Skills data={data?.skills} />
    <Heading title="工作經歷" subTitle="EXPERIENCES" />
    <Experiences data={data?.experiences} />
    <Heading title="正式專案" subTitle="WORK PROJECT" />
    <Project data={data?.projects} />
    <Heading title="個人作品" subTitle="SIDE PROJECT" />
    <Project data={data?.sideProjects} />
  </>
}

export default HomePage;