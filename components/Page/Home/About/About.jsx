/** 關於我 */

const About = ({ data = {} }) => (<div className="container flex flex-col lg:flex-row gap-7 md:gap-10">
  <div className="flex-1">
    <div className="max-w-[460px] mx-auto lg:ml-auto rounded-md overflow-hidden">
      <img src={data.img} className="block aspect-square object-cover object-center" />
    </div>
  </div>
  <div className="flex-1" dangerouslySetInnerHTML={{ __html: data.description }} />
</div>)

export default About;