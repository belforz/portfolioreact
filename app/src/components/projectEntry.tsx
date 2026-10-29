import type { ProjectItem } from "../types/sections";

export function ProjectEntry({ project }: { project: ProjectItem }) {
    const meta = project.year ?? project.kind ?? "";
    return (
        <article className="row">
            <p className="row-meta">{meta}</p>
            <div>
                {project.image && (
                    <figure className="figure">
                        <img
                            src={project.image}
                            alt={project.imageCaption ?? project.name}
                            loading="lazy"
                        />
                        {project.imageCaption && <figcaption>{project.imageCaption}</figcaption>}
                    </figure>
                )}
                <h3>{project.name}</h3>
                {project.year && project.kind && <p className="muted small">{project.kind}</p>}
                <p>{project.description}</p>
                {project.bullets && (
                    <ul className="bullets">
                        {project.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                )}
                <p className="tags">{project.stack.join(" · ")}</p>
                {project.links.length > 0 && (
                    <div className="links">
                        {project.links.map((link) => (
                            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label} ↗
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}
