import { useRef, useState } from "react";
import { useOnIntersect } from "../hooks/onIntersect";
import type { ProjectSectionProps } from "../types/sections";
import { ProjectCard } from "./cards/projectcard";

export function Project({ content, transitions }: ProjectSectionProps) {
    const workSection = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
    const intersectionVisible = useOnIntersect(workSection, transitions.showOnce,{
        threshold: transitions.thresholdOption,
    });
    const visible =
        transitions.active &&
        window.matchMedia("(prefers-reduced-motion: no-preference)").matches
            ? intersectionVisible
            : true;
    const projInitial = content.works.filter((_, index) => index < 3);
    const showPreview = content.works.length > 3;
    const [showMore, setShowMore] =  useState(false);

    return (
    <section className="min-h-screen w-full" ref={workSection} id="work-section">
        <div className={`relative flex py-5 items-center ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'} transition-all motion-reduce:transition-none duration-500`}>
            <h1 className="text-3xl font-bold pr-2 sm:pr-5">💻 Projetos</h1>
            <div className="flex-grow border-t border-black dark:border-white border-1"></div>
            <a href={content.works[0].archiveLink} className="pl-2 sm:pl-5 hover:text-link-color text-right text-sm">Histórico</a>
        </div>
        <div className={`flex flex-col gap-8 space-y-12 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300 ${visible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-4 opacity-0 blur-sm'}`}>
            {(showMore ? content.works : projInitial).map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}

            {showPreview && (
                <button onClick={() => setShowMore(!showMore)} className="w-52 py-2 px-6 mx-auto mt-10 bg-transparent border border-button-color text-button-color shadow-sm shadow-button-color transition ease-in-out hover:bg-button-color hover:text-white focus:bg-button-color focus:text-white active:bg-button-color active:text-white duration-300">
                    {showMore ? "Mostrar menos" : "Mostrar mais" }
                </button>
            )}
        </div>
    </section>
    )}