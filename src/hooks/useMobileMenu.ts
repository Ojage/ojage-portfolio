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
                    return;
                }
                if (e.key !== 'Tab') return;
                // Keep Tab / Shift+Tab cycling inside the open menu
                const menu = document.getElementById('mobile-menu');
                if (!menu) return;
                const focusables = Array.from(
                    menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled])')
                ).filter((el) => el.offsetWidth > 0 || el.offsetHeight > 0);
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
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