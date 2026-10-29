export type LinkItem = {
    label: string;
    url: string;
}

export type GreetingContent = {
    intro: string;
    name: string;
    role: string;
    location: string;
    summary: string;
    portraitLink: string;
    resumeLink: string;
}

export type AboutContent = {
    paragraphs: string[];
    facts: { label: string; value: string }[];
    photos: string[];
}

export type RoleItem = {
    title: string;
    period: string;
    bullets: string[];
    stack: string[];
}

export type ExperienceItem = {
    company: string;
    location: string;
    period: string;
    roles: RoleItem[];
}

export type SkillGroup = {
    label: string;
    items: string[];
}

export type ProjectItem = {
    name: string;
    year?: string;
    kind?: string;
    description: string;
    bullets?: string[];
    stack: string[];
    links: LinkItem[];
    image?: string;
    imageCaption?: string;
}

export type PhotusContent = {
    title: string;
    context: string;
    summary: string;
    pipeline: string[];
    parts: ProjectItem[];
}

export type EducationItem = {
    title: string;
    place: string;
    period: string;
}

export type CertificationItem = {
    title: string;
    detail: string;
    year: string;
}

export type ContactContent = {
    note: string;
    email: string;
    responseTime: string;
    links: LinkItem[];
}
