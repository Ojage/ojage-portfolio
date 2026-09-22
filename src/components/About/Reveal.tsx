import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    id?: string;
    className?: string;
    amount?: number;
    style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    delay = 0,
    y = 26,
    id,
    className,
    amount = 0.15,
    style,
}) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            id={id}
            className={className}
            style={style}
            initial={reduce ? false : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
};