import type { GreetingContent, LinkItem } from "../types/sections";

interface LandingProps {
    content: GreetingContent;
    links: LinkItem[];
}

export function Landing({ content, links }: LandingProps) {
    return (
        <section id="inicio" className="landing">
            <div className="container-wide landing-inner">
                <div className="landing-text fade">
                    <p className="landing-intro">{content.intro}</p>
                    <h1>{content.name}</h1>
                    <p className="landing-role">{content.role}</p>
                    <p className="landing-summary">{content.summary}</p>
                    <div className="hero-links">
                        {links.map((link) => (
                            <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <p className="landing-place">{content.location}</p>
                </div>
                <img className="landing-portrait fade" src={content.portraitLink} alt={content.name} />
            </div>
            <a href="#sobre" className="landing-cue" aria-label="Ir para Sobre">↓</a>
        </section>
    );
}
