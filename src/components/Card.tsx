import React, { useState } from 'react'

export enum CardVariant {
    outline = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    onClick: (nun: number) => void;
}

const Card: React.FC<CardProps> =
    ({
        width,
        height,
        children,
        variant,
        onClick
    }) => {
        const [state, setstate] = useState(0)
        return (
            <div onClick={() => onClick(state)} style={{
                height, width,
                border: variant === CardVariant.outline ? '1px solid gray' : 'none',
                background: variant === CardVariant.primary ? 'lightgray' : ''
            }}>
                {children}
            </div>
        )
    }


export default Card
