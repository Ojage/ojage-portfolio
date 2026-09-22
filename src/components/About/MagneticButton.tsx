import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    strength?: number;
    className?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
    children,
    strength = 0.25,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const reduce = useReducedMotion();

    const handleMouseMove = (e: React.MouseEvent) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
        const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
        setPos({ x: Math.max(-10, Math.min(10, x)), y: Math.max(-10, Math.min(10, y)) });
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            animate={reduce ? { x: 0, y: 0 } : pos}
            transition={{ type: 'spring', stiffness: 180, damping: 14, mass: 0.4 }}
            style={{ display: 'block' }}
        >
            {children}
        </motion.div>
    );
};