import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface TiltCardProps {
    children: React.ReactNode;
    maxTilt?: number;
    className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
    children,
    maxTilt = 5,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const reduce = useReducedMotion();

    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const springX = useSpring(rotateX, { stiffness: 150, damping: 18 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 18 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (reduce || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        rotateY.set(px * maxTilt);
        rotateX.set(-py * maxTilt);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                position: 'relative',
                overflow: 'hidden',
                transformPerspective: 900,
                transformStyle: 'preserve-3d',
                rotateX: springX,
                rotateY: springY,
            }}
        >
            {children}
        </motion.div>
    );
};