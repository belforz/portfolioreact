import type { CertificationItem, EducationItem } from "../types/sections";
import { Section } from "./section";

interface EducationProps {
    education: EducationItem[];
    certifications: CertificationItem[];
    extras: string;
}

export function Education({ education, certifications, extras }: EducationProps) {
    return (
        <Section id="formacao" title="Formação acadêmica" lead="Graduação, curso técnico, certificações e atividades complementares.">
            <div className="stack">
                {education.map((item) => (
                    <div key={item.title} className="row">
                        <p className="row-meta">{item.period}</p>
                        <div>
                            <h3>{item.title}</h3>
                            <p className="muted small">{item.place}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="sub-title">Certificações e cursos</h3>
            <div className="stack">
                {certifications.map((item) => (
                    <div key={item.title} className="row">
                        <p className="row-meta">{item.year}</p>
                        <div>
                            <h3>{item.title}</h3>
                            <p className="muted small">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="sub-title">Atividades complementares</h3>
            <p className="prose">{extras}</p>
        </Section>
    );
}
