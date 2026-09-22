import React, { useState } from 'react';
import { Box, Icon } from '@chakra-ui/react';
import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from 'framer-motion';
import { FaChevronUp } from 'react-icons/fa';
import { useThemeConstants } from '../../hooks/useThemeConstants';

const SIZE = 56;
const STROKE = 3;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ScrollToTopFab: React.FC = () => {
    const { accentColor, textColor } = useThemeConstants();
    const { scrollY, scrollYProgress } = useScroll();
    const [visible, setVisible] = useState(false);

    // Progress travels from full ring (top) down to empty ring (page bottom)
    const strokeDashoffset = useTransform(
        scrollYProgress,
        [0, 1],
        [CIRCUMFERENCE, 0]
    );

    useMotionValueEvent(scrollY, 'change', (v) => {
        setVisible(v > 400);
    });

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="back-to-top"
                    className="no-print"
                    initial={{ opacity: 0, scale: 0.6, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 16 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    style={{ position: 'fixed', right: 16, bottom: 16, zIndex: 1200 }}
                >
                    <Box
                        as="button"
                        type="button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="Back to top"
                        title="Back to top"
                        position="relative"
                        w={`${SIZE}px`}
                        h={`${SIZE}px`}
                        borderRadius="0"
                        bg="transparent"
                        border="2px solid"
                        borderColor={accentColor}
                        color={textColor}
                        boxShadow="0 8px 24px -8px rgba(0,0,0,0.5)"
                        _hover={{ bg: accentColor, color: 'black' }}
                        transition="background 0.25s ease, color 0.25s ease"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        {/* Progress ring */}
                        <svg
                            viewBox={`0 0 ${SIZE} ${SIZE}`}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                pointerEvents: 'none',
                                transform: 'rotate(-90deg)',
                            }}
                            aria-hidden
                        >
                            <circle
                                cx={SIZE / 2}
                                cy={SIZE / 2}
                                r={RADIUS}
                                fill="none"
                                stroke="currentColor"
                                strokeOpacity={0.15}
                                strokeWidth={STROKE}
                            />
                            <motion.circle
                                cx={SIZE / 2}
                                cy={SIZE / 2}
                                r={RADIUS}
                                fill="none"
                                stroke={accentColor}
                                strokeWidth={STROKE}
                                strokeDasharray={CIRCUMFERENCE}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="square"
                            />
                        </svg>
                        <Icon as={FaChevronUp} boxSize={5} aria-hidden />
                    </Box>
                </motion.div>
            )}
        </AnimatePresence>
    );
};