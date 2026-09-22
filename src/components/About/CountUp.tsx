import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
}

export const CountUp: React.FC<CountUpProps> = ({
    end,
    duration = 1.6,
    suffix = '',
    prefix = '',
    decimals = 0,
}) => {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);
    const reduce = useReducedMotion();
    const started = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    observer.disconnect();
                    if (reduce) {
                        setValue(end);
                        return;
                    }
                    const startTime = performance.now();
                    const tick = (now: number) => {
                        const progress = Math.min(1, (now - startTime) / (duration * 1000));
                        const eased = 1 - Math.pow(2, -10 * progress);
                        setValue(Number((eased * end).toFixed(decimals)));
                        if (progress < 1) requestAnimationFrame(tick);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration, reduce, decimals]);

    return (
        <span ref={ref}>
            {prefix}
            {value}
            {suffix}
        </span>
    );
};