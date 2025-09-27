import { useState } from 'react';

interface UseMobileMenuReturn {
    isOpen: boolean;
    toggle: () => void;
    close: () => void;
    open: () => void;
}

export const useMobileMenu = (): UseMobileMenuReturn => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(prev => !prev);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);

    return {
        isOpen,
        toggle,
        close,
        open
    };
};