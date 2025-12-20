import useDarkMode from "../../hooks/useDarkMode";
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
  const {darkModeActive} = useDarkMode();

  useEffect(() => {
    if (skill.svgLink === "no-asset") {
      setShowSkill(true);
    }
  }, [skill.svgLink]);
  
  return (
    <div className={`flex flex-col items-center justify-center p-4 ${darkModeActive ? 'bg-black' : 'bg-white'} rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${showSkill ? 'opacity-100' : 'opacity-0'} ${className}`} style={style}>
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
            <div className={`w-12 h-12 mb-2 ${darkModeActive ? 'bg-gray-700' : 'bg-gray-200'} rounded-full flex items-center justify-center`}>
                <span className="text-2xl">💡</span>
            </div>
        )}
        <p className={`text-center text-sm font-medium ${darkModeActive ? 'text-white' : 'text-slate-700'}`}>{skill.label}</p>
    </div>
  )
}
