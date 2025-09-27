import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';

interface MobileMenuToggleProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const MobileMenuToggle: React.FC<MobileMenuToggleProps> = ({
    isOpen,
    onToggle
}) => {
    const { textColor } = useNavThemeConstants();

    return (
        <IconButton
            aria-label="Toggle menu"
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            display={{ base: "inline-flex", md: "none" }}
            onClick={onToggle}
            variant="ghost"
            fontSize="22px"
            color={textColor}
            _hover={{
                bg: "transparent",
                opacity: 0.8
            }}
        />
    );
};