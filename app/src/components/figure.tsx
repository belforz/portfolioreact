import React from 'react'


type HeroIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface FigureProps {
    icon: HeroIcon
    size?: number;
    color?: string;
    className?: string;
}

export const Figure: React.FC<FigureProps> = ({
    icon: Icon,
    size = 0,
    color = 'currentColor',
    className = '',
}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>

            <Icon width={size} height={size} style={{color: color}} />
        </div>
    )
};
