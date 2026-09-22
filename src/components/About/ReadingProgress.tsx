import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ReadingProgress: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="reading-progress no-print"
            style={{ scaleX }}
            role="progressbar"
            aria-label="Page reading progress"
        />
    );
};