import React, { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface TypewriterProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pause?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    phrases,
    typingSpeed = 55,
    deletingSpeed = 26,
    pause = 1700,
}) => {
    const reduce = useReducedMotion();
    const [phraseIdx, setPhraseIdx] = useState(0);
    const [text, setText] = useState(phrases[0] ?? '');

    useEffect(() => {
        if (reduce) {
            setText(phrases[0] ?? '');
            return;
        }
        const current = phrases[phraseIdx % phrases.length];
        let timer: number;

        if (text === current) {
            timer = window.setTimeout(() => setPhraseIdx((i) => i + 1), pause);
        } else if (current.startsWith(text)) {
            timer = window.setTimeout(
                () => setText(current.slice(0, text.length + 1)),
                typingSpeed
            );
        } else {
            timer = window.setTimeout(() => setText((t) => t.slice(0, -1)), deletingSpeed);
        }

        return () => window.clearTimeout(timer);
    }, [text, phraseIdx, phrases, typingSpeed, deletingSpeed, pause, reduce]);

    return (
        <span aria-label={phrases[phraseIdx % phrases.length]}>
            {text}
        </span>
    );
};