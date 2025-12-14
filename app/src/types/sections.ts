export type TransitionsProps = {
    active: boolean;
    showOnce: boolean;
    thresholdOption: number;
}

export type LandingProps = {
    content: Record<string, unknown>;
    transitions: TransitionsProps;
}

export type AboutProps = {
    content: {
        autobiography: string [];
        techStack: string [];
        photo1Link?: string;
        photo2Link?: string;
    };
    transitions: TransitionsProps;
}

export type ContactProps = {
    content: {
        formEmbedLink?: string;
        externalLink?: {
            note: string[];
            link: {
                email?:string;
                other?: string;
            }
        
        };
        responseTimeMessage?: string;
    }
    transitions: TransitionsProps;
    
}

export type ExperienceSectionProps = {
    content: {
        experiences: ExperienceProps[];
    };
    transitions: TransitionsProps;
}

export type ExperienceProps = {
        position: string;
        company: {
            name: string;
        }
        duration: string;
        bulletPoints: string[];
        hashtags: string[];
}

