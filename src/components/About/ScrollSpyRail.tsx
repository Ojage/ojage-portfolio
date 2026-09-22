import React, { useEffect, useState } from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import { useThemeConstants } from '../../hooks/useThemeConstants';

interface SectionDef {
    id: string;
    label: string;
}

const sections: SectionDef[] = [
    { id: 'resume-summary', label: 'Summary' },
    { id: 'resume-experience', label: 'Experience' },
    { id: 'resume-education', label: 'Education' },
    { id: 'resume-skills', label: 'Skills' },
    { id: 'resume-credentials', label: 'Credentials' },
];

export const ScrollSpyRail: React.FC = () => {
    const { accentColor, isDark } = useThemeConstants();
    const [active, setActive] = useState<string>('resume-summary');

    useEffect(() => {
        const targets = sections
            .map((s) => document.getElementById(s.id))
            .filter((el): el is HTMLElement => Boolean(el));

        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
        );

        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const inactive = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)';

    return (
<Box
        position="fixed"
        right={5}
        top="50%"
        transform="translateY(-50%)"
zIndex={900}
        display={{ base: 'none', lg: 'flex' }}
        flexDirection="column"
        alignItems="flex-end"
        gap={5}
        className="no-print"
            aria-label="Resume section navigation"
        >
            {sections.map((section) => {
                const isActive = section.id === active;
                return (
                    <Tooltip
                        key={section.id}
                        label={section.label}
                        placement="left"
                        bg={accentColor}
                        color="black"
                        borderRadius="0"
                        fontFamily="mono"
                        fontSize="xs"
                    >
                        <Box
                            as="button"
                            onClick={() => scrollTo(section.id)}
                            aria-label={`Jump to ${section.label}`}
                            aria-current={isActive ? 'true' : undefined}
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-end"
                            cursor="pointer"
                        >
                            <Text
                                fontFamily="mono"
                                fontSize="xs"
                                fontWeight="bold"
                                color={isActive ? accentColor : inactive}
                                pr={2}
                                opacity={isActive ? 1 : 0}
                                transition="opacity 0.25s ease"
                                textTransform="uppercase"
                                letterSpacing="wider"
                                whiteSpace="nowrap"
                            >
                                {section.label}
                            </Text>
                            <Box
                                w={isActive ? 3 : 2}
                                h={isActive ? 3 : 2}
                                bg={isActive ? accentColor : inactive}
                                transform="rotate(45deg)"
                                transition="all 0.25s ease"
                            />
                        </Box>
                    </Tooltip>
                );
            })}
        </Box>
    );
};