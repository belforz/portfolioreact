import React, { useRef } from 'react'
import { useOnIntersect } from '../hooks/onIntersect';
import type { SkillsSectionProps } from '../types/sections';
import { SkillCard } from './cards/SkillsCard';

export function Skills({content, transitions}: SkillsSectionProps) {
     const skillsSection = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
     const intersectionVisible = useOnIntersect(skillsSection, transitions.showOnce, {
         threshold: transitions.thresholdOption,
       });
       const visible =
         transitions.active &&
         window.matchMedia("(prefers-reduced-motion: no-preference)").matches
           ? intersectionVisible
           : true;
     
  return (
    <>
    <section className="w-full" ref={skillsSection} id="skills-section">
        <div className={`relative flex py-5 items-center ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'} transition-all motion-reduce:transition-none duration-500`}>
            <h1 className="text-3xl font-bold pr-5">💪🤝 Habilidades e Competências </h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div
            className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'}`}>
            {content.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
            ))}
        </div>
    </section>
    </>
  )
}