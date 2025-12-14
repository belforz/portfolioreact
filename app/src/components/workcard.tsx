import type { ExperienceSectionProps, ExperienceProps } from "../types/sections";
import { useRef } from "react";

import ExperienceCard from "./cards/ExperienceCard";
import { useOnIntersect } from "../hooks/onIntersect";


export function Experience({ transitions, content }: ExperienceSectionProps) {
    const experienceSection = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
    const intersectionVisible = useOnIntersect(experienceSection, transitions.showOnce, {
        threshold: transitions.thresholdOption,
    });
    const visible =
        transitions.active &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
            ? intersectionVisible
            : true;

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
                <h1 className="text-3xl font-bold pr-5">🛡️ Experiencias</h1>
                <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            </div>
            <div
                className={`relative flex py-5 items-center ${
                    visible
                        ? "translate-y-0 opacity-100 blur-0"
                        : "translate-y-4 opacity-0 blur-sm"
                }`}
            >
               { content.experiences.map((experience: ExperienceProps, index: number) => (
                    <div key={index} className="mb-8">
                        <ExperienceCard experience={experience} />
                    </div>
               ))}
            </div>
        </section>
    );
}