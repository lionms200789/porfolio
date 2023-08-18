
const Experiences = ({ data = [] }) => <div className="container">
  <ol className="relative border-l border-gray-200">
    {
      data.length ? data.map((item, idx) => {
        return <li key={idx} className="mb-10 ml-6 group">
          <span className="flex absolute -left-3 justify-center items-center w-6 h-6 border-2 bg-[#929292] rounded-full group-hover:bg-cyan-600 group-hover:animate-bounce transition-colors duration-150 ease-linear"></span>
          <h3 className="flex items-center mb-2 font-semibold">
            <span className="text-base lg:text-xl shrink-0">{item.jobTitle}</span>
            <span className="text-base text-gray-500 mx-2">{item.company}</span>
          </h3>
          <span className="block mb-2 text-sm font-normal leading-none text-gray-500">
            {item.jobTenure}
          </span>
          <div className="mb-4 text-base font-normal text-gray-400 group-hover:text-gray-600 transition-colors duration-150 ease-linear" dangerouslySetInnerHTML={{ __html: item.jobDescription }}></div>
        </li>
      }) : null
    }
  </ol>
</div>;

export default Experiences;