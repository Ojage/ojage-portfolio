import { useEffect, useRef, useState } from 'react';

interface UseMobileMenuReturn {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}

export const useMobileMenu = (): UseMobileMenuReturn => {
    const [isOpen, setIsOpen] = useState(false);
    const lastFocused = useRef<HTMLElement | null>(null);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    // A11y: lock body scroll, move focus into the menu, close on Escape,
    // and return focus to the toggle button once the menu closes.
    useEffect(() => {
        if (isOpen) {
            lastFocused.current = document.activeElement as HTMLElement | null;
            document.body.style.overflow = 'hidden';

            const handleKeyDown = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    e.preventDefault();
                    setIsOpen(false);
                }
            };
            document.addEventListener('keydown', handleKeyDown);

            // Defer focus until the Collapse mounts its links
            const t = window.setTimeout(() => {
                const firstLink = document.querySelector<HTMLElement>('#mobile-menu a, #mobile-menu [tabindex]');
                if (firstLink) firstLink.focus();
            }, 50);

            return () => {
                document.removeEventListener('keydown', handleKeyDown);
                window.clearTimeout(t);
                document.body.style.overflow = '';
                lastFocused.current?.focus?.();
                lastFocused.current = null;
            };
        }
    }, [isOpen]);

    return {
        isOpen,
        toggle,
        close,
        open
    };
};