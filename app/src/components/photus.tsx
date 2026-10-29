import type { PhotusContent } from "../types/sections";
import { ProjectEntry } from "./projectEntry";

export function Photus({ content }: { content: PhotusContent }) {
    return (
        <div id="photus" className="photus">
            <h3 className="sub-title first">{content.title} · {content.context}</h3>
            <p className="prose">{content.summary}</p>
            <div className="pipeline" aria-label="Pipeline">
                {content.pipeline.map((step, index) => (
                    <span key={step} style={{ display: "contents" }}>
                        {index > 0 && <span className="arrow">→</span>}
                        <span>{step}</span>
                    </span>
                ))}
            </div>
            <div className="parts">
                {content.parts.map((part) => (
                    <ProjectEntry key={part.name} project={part} />
                ))}
            </div>
        </div>
    );
}
