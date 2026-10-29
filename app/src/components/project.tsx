import { useState } from "react";
import type { PhotusContent, ProjectItem } from "../types/sections";
import { Section } from "./section";
import { Photus } from "./photus";
import { ProjectEntry } from "./projectEntry";

const INITIAL = 6;

interface ProjectProps {
    photus: PhotusContent;
    works: ProjectItem[];
    archiveLink: string;
}

export function Project({ photus, works, archiveLink }: ProjectProps) {
    const [showAll, setShowAll] = useState(false);
    const visible = showAll ? works : works.slice(0, INITIAL);

    return (
        <Section id="projetos" title="Projetos" lead="O Photus, meu TCC, e outros trabalhos acadêmicos, pessoais e freelas.">
            <Photus content={photus} />

            <h3 className="sub-title">Outros projetos</h3>
            <div className="stack">
                {visible.map((project) => (
                    <ProjectEntry key={project.name} project={project} />
                ))}
            </div>
            <div className="links" style={{ marginTop: "2rem" }}>
                {works.length > INITIAL && (
                    <button type="button" className="plain" onClick={() => setShowAll(!showAll)}>
                        {showAll ? "mostrar menos" : `mostrar todos (${works.length})`}
                    </button>
                )}
                <a href={archiveLink} target="_blank" rel="noopener noreferrer">todos os repositórios ↗</a>
            </div>
        </Section>
    );
}
