import type { SkillItemProps } from "../../types/sections"
import { useState, useEffect } from 'react';


interface SkillCardProps {
    skill: SkillItemProps
    className?: string
    style?: React.CSSProperties
}

export function SkillCard({ skill, className = "", style }: SkillCardProps) {
  const [showSkill, setShowSkill] = useState(false);
  const getSvgOrImageUrl = (path: string) => {
    return `/assets/${path.replace('assets/', '')}`
  }

  useEffect(() => {
    if (skill.svgLink === "no-asset") {
      setShowSkill(true);
    }
  }, [skill.svgLink]);
  
  return (
    <div className={`flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${showSkill ? 'opacity-100' : 'opacity-0'} ${className}`} style={style}>
        {skill.svgLink !== "no-asset" ? (
            <img
                src={getSvgOrImageUrl(skill.svgLink)}
                alt={skill.label}
                className="w-12 h-12 mb-2"
                loading="lazy"
                onLoad={() => setShowSkill(true)}
                onError={() => setShowSkill(true)}
            />
        ) : (
            <div className="w-12 h-12 mb-2 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-2xl">💡</span>
            </div>
        )}
        <p className="text-center text-sm font-medium text-slate-700 dark:text-slate-300">{skill.label}</p>
    </div>
  )
}
