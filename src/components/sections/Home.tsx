import React from 'react';
import {
  Box,
  Container,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { MotionBox } from '../common/MotionElts';
import { useThemeConstants } from '../../hooks/useThemeConstants';
import { containerVariants, itemVariants } from '../../constants/animationConstants';
import { coreCompetencies } from '../../data/homeData';

// Components
import { HeroSection } from '../Home/HeroSection';
import { ProjectCard } from '../Home/ProjectCard';
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

          {/* Core Competencies Grid */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="CORE COMPETENCIES" color={accentColor} />

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={8}>
              {/* Highlighted CM Sentinel Project */}
              <GridItem colSpan={{ base: 1, lg: 2 }}>
                <ProjectCard 
                  project={coreCompetencies[0]} 
                  isHighlighted={true}
                />
              </GridItem>

              {/* Other Projects */}
              {coreCompetencies.slice(1).map((project) => (
                <GridItem key={project.id}>
                  <ProjectCard project={project} />
                </GridItem>
              ))}
            </Grid>
          </MotionBox>

          {/* Leadership Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="EXECUTIVE LEADERSHIP" color={tertiaryAccent} />
            <LeadershipSection />
          </MotionBox>

          {/* References Section */}
          <MotionBox variants={itemVariants} mb={20}>
            <SectionHeader title="PROFESSIONAL REFERENCES" color={accentColor} />
            <ReferencesSection />
          </MotionBox>

          {/* Call to Action */}
          <MotionBox variants={itemVariants}>
            <SectionHeader title="COLLABORATION PROTOCOL" color={accentColor} />
            <CTASection />
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default Home;