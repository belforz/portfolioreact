import type { ExperienceSectionProps, ExperienceProps } from "../types/sections";
import { useRef, useEffect, useState } from "react";

import ExperienceCard from "./cards/ExperienceCard";
import { useOnIntersect } from "../hooks/onIntersect";


export function Experience({ transitions, content }: ExperienceSectionProps) {
    const experienceSection = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
    const refs = useRef<(HTMLDivElement | null)[]>([]);
    const [maxHeight, setMaxHeight] = useState(0);
    const intersectionVisible = useOnIntersect(experienceSection, transitions.showOnce, {
        threshold: transitions.thresholdOption,
    });
    const visible =
        transitions.active &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
            ? intersectionVisible
            : true;

    useEffect(() => {
        const heights = refs.current.map(ref => ref?.offsetHeight || 0);
        const max = Math.max(...heights);
        setMaxHeight(max);
    }, [content.experiences]);

    return (
        <section
            className="min-h-screen w-full"
            ref={experienceSection}
            id="experience-section"
        >
            <div
                className={`relative flex py-5 items-center ${
                    visible
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-4 opacity-0 blur-sm"
                } transition-all motion-reduce:transition-none duration-500`}
            >
                <h1 className="text-3xl font-bold pr-5 ">🛡️ Experiencias</h1>
                <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
            <div
                className={`flex flex-col space-y-4 mb-4 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-4 lg:space-y-2 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300 ${
                    visible
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-4 opacity-0 blur-sm"
                }`}
            >
               { content.experiences.map((experience: ExperienceProps, index: number) => (
                    <ExperienceCard key={index} experience={experience} className={`${index % 2 === 0 ? 'bg-white !dark:bg-slate-900' : 'bg-gray-100 !dark:bg-slate-600'} ${index % 2 !== 0 ? 'lg:mb-4' : ''}`} ref={(el) => { refs.current[index] = el; }} style={{ minHeight: maxHeight || undefined }} />
               ))}
            </div>
        </section>
    );
}