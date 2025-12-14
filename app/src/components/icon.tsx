import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  type IconDefinition, type SizeProp } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
    icon: IconDefinition;
    size?: SizeProp;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    spin?: boolean;
    flip?: 'horizontal' | 'vertical';
    transform?: string;
    title?: string;
}

export const Icon: React.FC<IconProps> = ({
    icon,
    size = '1x',
    color = 'currentColor',
    className = '',
    style = {},
    spin = false,
    flip,
    transform,
    title,
}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <FontAwesomeIcon 
                icon={icon} 
                size={size}
                color={color} 
                style={{color: color, ...style}} 
                spin={spin} 
                flip={flip} 
                transform={transform} 
                title={title} 
            />
        </div>
    );
};
