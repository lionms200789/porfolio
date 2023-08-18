'use client';

import { useEffect } from 'react';
import ReacGif from '@/images/icons/react.gif'
import WorldWideGif from '@/images/icons/worldwide.gif'
import PencilGif from '@/images/icons/pencil.gif';
import { scrollTransition } from '@/utils/scrollTransition';

const icons = {
    frontEnd: ReacGif,
    backEnd: WorldWideGif,
    others: PencilGif
};

const Skills = ({ data = [] }) => {

    useEffect(() => {
        if (data.length) {
            data.forEach(item => {
                const elmnt = document.querySelector('.' + item.id);
                scrollTransition({ target: elmnt.children, from: { x: '-1rem' }, to: { x: 0 } });
            })
        }
    }, [data]);

    return <div className="container flex flex-col gap-7 md:gap-10">
        {
            data.length ? data.map((skill, idx) => <div key={idx} className="md:mb-5">
                <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center">
                    <img src={icons[skill.icon].src} className="w-8 lg:w-10 mr-2 mix-blend-darken" />
                    <span>{skill.type}</span>
                </h4>
                <div className={`flex flex-wrap gap-1.5 ${skill.id}`}>
                    {
                        skill.items.map((item, _idx) => <span key={_idx} className="px-5 rounded-full bg-cyan-600 text-white md:text-lg leading-[32px] md:leading-[36px]">
                            {item}
                        </span>)
                    }
                </div>
            </div>) : null
        }
    </div>
}

export default Skills;