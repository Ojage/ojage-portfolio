import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';
import O from "../../assets/images/732.svg";
import { contactInfo } from '../../data/navData';

export const BrandLogo: React.FC = () => {
    const { textColor } = useNavThemeConstants();

    return (
        <Flex
            as={Link}
            to="/"
            aria-label={`${contactInfo.name} — Home`}
            alignItems="center"
            gap={3}
            _hover={{ textDecoration: 'none' }}
        >
            <Image
                src={O}
                alt=""
                aria-hidden
                boxSize="40px"
                borderRadius="full"
                bg="white"
            />
            <Text fontWeight="bold" fontSize="lg" color={textColor}>
                {contactInfo.name}
            </Text>
        </Flex>
    );
};