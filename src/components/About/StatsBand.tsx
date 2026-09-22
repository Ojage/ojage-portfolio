import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

interface Stat {
    end: number;
    suffix: string;
    label: string;
    decimals?: number;
}

const stats: Stat[] = [
    { end: 4, suffix: '+', label: 'Years Building Products' },
    { end: 500, suffix: '+', label: 'Platform Users' },
    { end: 99.9, suffix: '%', label: 'Production Uptime', decimals: 1 },
    { end: 70, suffix: '%', label: 'Manual Deploy Steps Removed' },
];

export const StatsBand: React.FC = () => {
    const { accent, divider, mutedText } = useAboutThemeConstants();

    return (
        <Reveal className="no-print" delay={0.1}>
            <Box borderY="1px solid" borderColor={divider}>
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    justify="space-evenly"
                    spacing={{ base: 5, sm: 4 }}
                    py={6}
                >
                    {stats.map((stat) => (
                        <Box key={stat.label} textAlign="center" flex="1">
                            <Text
                                fontFamily="mono"
                                fontWeight="bold"
                                fontSize={{ base: '2xl', md: '3xl' }}
                                color={accent}
                                lineHeight="1"
                            >
                                <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                            </Text>
                            <Text
                                mt={2}
                                fontSize={{ base: 'xs', md: 'sm' }}
                                color={mutedText}
                                textTransform="uppercase"
                                letterSpacing="wider"
                                fontWeight="medium"
                            >
                                {stat.label}
                            </Text>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Reveal>
    );
};