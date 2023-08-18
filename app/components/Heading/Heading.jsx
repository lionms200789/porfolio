
const Heading = ({ title, subTitle }) => (<div className='flex flex-col items-center justify-center mt-[60px] mb-10 font-bold'>
    <span className='text-base md:text-lg lg:text-2xl tracking-[0.1rem]'>{subTitle}</span>
    <span className='text-xl md:text-2xl lg:text-3xl tracking-[0.25rem]'>{title}</span>
</div>)

export default Heading;