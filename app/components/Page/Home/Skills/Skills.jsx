'use client';

import { useEffect } from 'react';
import { scrollTransition } from '@/utils/scrollTransition';

const Skills = ({ data = [] }) => {
    useEffect(() => {
        if (data.length) {
            data.forEach(item => {
                const elmnt = document.querySelector('.' + item.id);
                scrollTransition({ target: elmnt.children, from: { x: '-1rem' }, to: { x: 0 } });
            })
        }
    }, [data]);

    return <div className="container flex flex-col gap-14 md:gap-20">
        {
            data.length ? data.map((skill, idx) => <div key={idx} className="md:mb-5">
                <h4 className="text-lg md:text-xl font-bold mb-4 flex items-center">
                    <img src={skill.img} className="w-8 lg:w-10 mr-2 mix-blend-darken" />
                    <span>{skill.type}</span>
                </h4>
                <div className={`flex flex-col flex-wrap gap-4 md:gap-4 ${skill.id}`}>
                    {
                        skill.items.map((item, idx) => <div key={idx} className={`flex items-center gap-3 md:gap-5 ${(idx % 2 === 0) ? 'flex-row-reverse' : ''}`}>
                            <img title={item.tag} alt={item.description} src={item.img} className="w-8 md:w-14" />
                            <div className={`relative bg-white p-3 rounded-lg drop-shadow ${idx % 2 === 0 ? 'triangle-r ml-[48px] md:ml-[72px]' : 'triangle-l mr-[48px] md:mr-[72px]'}`}>{item.description}</div>
                        </div>)
                    }
                </div>
            </div>) : null
        }
    </div>
}

export default Skills;