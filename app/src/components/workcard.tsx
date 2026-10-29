import type { ExperienceItem } from "../types/sections";
import { Section } from "./section";

export function Experience({ experiences }: { experiences: ExperienceItem[] }) {
    return (
        <Section id="experiencia" title="Experiência profissional" lead="Onde trabalhei e o que entreguei, do mais recente ao mais antigo.">
            {experiences.map((experience) => (
                <div key={experience.company} className="company">
                    <div className="row">
                        <p className="row-meta">{experience.period}</p>
                        <div>
                            <h3>{experience.company}</h3>
                            <p className="muted small">{experience.location}</p>
                        </div>
                    </div>
                    {experience.roles.map((role) => (
                        <div key={role.title} className="role">
                            <p className="row-meta">{role.period}</p>
                            <div>
                                <h3>{role.title}</h3>
                                <ul className="bullets">
                                    {role.bullets.map((bullet, index) => (
                                        <li key={index}>{bullet}</li>
                                    ))}
                                </ul>
                                <p className="tags">{role.stack.join(" · ")}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </Section>
    );
}
