import type { ContactContent } from "../types/sections";
import { Section } from "./section";

export function Contact({ content }: { content: ContactContent }) {
    return (
        <Section id="contato" title="Contato" lead="Fale comigo por email ou pelas redes.">
            <p className="prose">{content.note}</p>
            <p style={{ marginTop: "1.5rem" }}>
                <a className="mail" href={`mailto:${content.email}`}>{content.email}</a>
            </p>
            <p className="muted small" style={{ marginTop: "0.5rem" }}>{content.responseTime}</p>
            <div className="links" style={{ marginTop: "1.5rem" }}>
                {content.links.map((link) => (
                    <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} ↗
                    </a>
                ))}
            </div>
        </Section>
    );
}
