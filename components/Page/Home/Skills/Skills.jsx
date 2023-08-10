import ReacGif from '@/images/icons/react.gif'
import WorldWideGif from '@/images/icons/worldwide.gif'
import PencilGif from '@/images/icons/pencil.gif';

const Skills = ({ data = [] }) => <div className="container flex flex-col gap-7 md:gap-10">
    {
        data.length ? data.map((skill, idx) => <div key={idx} className="md:mb-5">
            <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center">
                {/* <img src={skill.icon.src} className="w-8 lg:w-10 mr-2" /> */}
                <span>{skill.type}</span>
            </h4>
            <div className="flex flex-wrap gap-1.5" id={skill.id}>
                {
                    skill.items.map((item, _idx) => <span key={_idx} className="px-5 rounded-full bg-cyan-600 text-white md:text-lg leading-[32px] md:leading-[36px]">
                        {item}
                    </span>)
                }
            </div>
        </div>) : null
    }
</div>

export default Skills;