import type { ExperienceProps } from "../../types/sections";
import { forwardRef } from "react";

interface ExperienceCardProps {
    experience: ExperienceProps
    className?: string
    style?: React.CSSProperties
}


const ExperienceCard = forwardRef<HTMLDivElement, ExperienceCardProps>(({ experience, className = "", style }, ref) => {
    return (
        <div ref={ref} className={`flex flex-col flex-1 min-h-80 rounded-md shadow-md hover:shadow-lg hover:-translate-y-3 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md text-left p-4 transition-all duration-300 ${className}`} style={style}>
            <h3 className="text-xl font-extrabold"> {experience.position} @ {experience.company.name} </h3>
            <p className="italic">{experience.duration}</p>
            <ul className="list-['\1F449'] pl-6 pt-4 text-slate-500 dark:text-slate-300">
                    {experience.bulletPoints.map((point, index) => (
                        <li key={index} className="pl-2 pb-2">
                            {point}
                        </li>
                    ))}
            </ul>
            <div className="text-slate-600 pt-4 flex flex-wrap mt-auto">
                {experience.hashtags.map((hashtag, index) => (
                    <p key={index} className="pr-4 last:pr-0">#{hashtag}</p>
                ))}
            </div>

            
        </div>
    )
});

export default ExperienceCard;

