import type { SkillGroup } from "../types/sections";
import { Section } from "./section";

export function Skills({ skills }: { skills: SkillGroup[] }) {
    return (
        <Section id="skills" title="Competências técnicas" lead="Linguagens, bibliotecas e ferramentas que uso no dia a dia.">
            <dl className="stack">
                {skills.map((group) => (
                    <div key={group.label} className="skill-row">
                        <dt>{group.label}</dt>
                        <dd>{group.items.join(" · ")}</dd>
                    </div>
                ))}
            </dl>
        </Section>
    );
}
