import type { ReactNode } from "react";

interface SectionProps {
    id: string;
    title: string;
    lead?: string;
    children: ReactNode;
}

export function Section({ id, title, lead, children }: SectionProps) {
    return (
        <section id={id} className="section">
            <h2 className="section-title">{title}</h2>
            {lead && <p className="section-lead">{lead}</p>}
            {children}
        </section>
    );
}
