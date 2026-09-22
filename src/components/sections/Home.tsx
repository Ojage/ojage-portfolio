import React from 'react';
import {
  Box,
  Container,
} from '@chakra-ui/react';
import { MotionBox } from '../common/MotionElts';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { containerVariants, itemVariants } from '../../constants/animationConstants';
import { coreCompetencies } from '../../data/homeData';

// Components
import { HeroSection } from '../Home/HeroSection';
import { CaseStudyCarousel } from '../Home/CaseStudyCarousel';
import { LeadershipSection } from '../Home/LeadershipSection';
import { ReferencesSection } from '../Home/ReferencesSection';
import { CTASection } from '../Home/CTASection';
import { SectionHeader } from '../Home/SectionHeader';
import { ThemeToggle } from '../common/ThemeToggle';

const Home: React.FC = () => {
  const { bgColor, accentColor, tertiaryAccent } = useThemeConstants();

  return (
    <Box minH="100vh" mt="2rem" bg={bgColor} py={16} position="relative">
      {/* Theme Toggle Button */}
      <Box position="fixed" top={100} right={4} zIndex={1000}>
        <ThemeToggle />
      </Box>

      <Container maxW="8xl" px={8}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <HeroSection />
          </MotionBox>

          {/* Case Studies Carousel */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="CASE STUDIES" color={accentColor} />
            <CaseStudyCarousel projects={coreCompetencies} />
          </MotionBox>

          {/* Leadership Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="CURRENTLY" color={tertiaryAccent} />
            <LeadershipSection />
          </MotionBox>

          {/* References Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="PROFESSIONAL REFERENCES" color={accentColor} />
            <ReferencesSection />
          </MotionBox>

          {/* Call to Action */}
          <MotionBox variants={itemVariants}>
            <SectionHeader title="GET IN TOUCH" color={accentColor} />
            <CTASection />
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Home;