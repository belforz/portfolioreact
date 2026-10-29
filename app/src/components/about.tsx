import type { AboutContent } from "../types/sections";
import { Section } from "./section";

export function About({ content }: { content: AboutContent }) {
    return (
        <Section id="sobre" title="Sobre mim" lead="Quem sou e no que trabalho hoje.">
            <div className="prose">
                {content.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <dl className="facts">
                {content.facts.map((fact) => (
                    <div key={fact.label} className="fact">
                        <dt>{fact.label}</dt>
                        <dd>{fact.value}</dd>
                    </div>
                ))}
            </dl>
            <div className="photos">
                {content.photos.map((src, index) => (
                    <img key={src} src={src} alt={`Leandro Belfor, foto ${index + 1}`} loading="lazy" />
                ))}
            </div>
        </Section>
    );
}
