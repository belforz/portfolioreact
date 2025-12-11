import type { ExperienceProps } from "../../types/sections";

interface ExperienceCardProps {
    experience: ExperienceProps
}


const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    return (
        <div className="flex flex-col flex-1 rounded-md bg-white shadow-md hover:shadow-lg hover:-translate-y-1 motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md dark:bg-slate-800 text-left p-4 transition-all duration-300">
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
}

export default ExperienceCard;

