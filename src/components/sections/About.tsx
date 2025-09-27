// components/About/About.tsx
import React, { useRef, useCallback } from 'react';
import {
    Box,
    Container,
    VStack,
    Button,
    Stack,
    Grid,
    Icon,
} from '@chakra-ui/react';
import { FaPrint, FaDownload, FaFileDownload } from 'react-icons/fa';
import Nav from '../Nav/Nav';
import { resumeData } from '../../data/aboutData';
import { useAboutThemeConstants } from '../../hooks/useAboutThemeConstants';
import CertificationsSection from '../About/CertificationsSection';
import EducationSection from '../About/EducationSection';
import ExperienceSection from '../About/ExperienceSection';
import PersonalHeader from '../About/PersonalHeader';
import ProfessionalSummary from '../About/ProfessionalSummary';
import SkillsSection from '../About/SkillsSection';
import { ThemeToggle } from '../common/ThemeToggle';

const About: React.FC = () => {
    const resumeRef = useRef<HTMLDivElement>(null);
    const themeConstants = useAboutThemeConstants();

    // Primary print function using window.print
    const handlePrint = useCallback(() => {
        if (resumeRef.current) {
            const printContent = resumeRef.current;
            const printWindow = window.open('', '_blank');

            if (printWindow) {
                const styles = `
          <style>
            @page { size: A4; margin: 0.5in; }
            body {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              margin: 0;
              padding: 20px;
              line-height: 1.6;
              color: #2d3748;
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
            .no-print { display: none !important; }
            h1, h2, h3 { color: #3182ce; margin-top: 0; }
            .card {
              background: white;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            ul { padding-left: 20px; }
            li { margin-bottom: 5px; }
            .badge {
              display: inline-block;
              background: #edf2f7;
              color: #4a5568;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 12px;
              margin: 2px;
            }
            .timeline-dot { background: #3182ce !important; }
            .section-header {
              border-bottom: 2px solid #3182ce;
              padding-bottom: 5px;
              margin-bottom: 15px;
            }
          </style>
        `;

                const htmlContent = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <title>${resumeData.personal.name} - Resume</title>
            ${styles}
          </head>
          <body>
            ${printContent.innerHTML}
            <script>
              window.onload = function() {
                setTimeout(function() { window.print(); }, 500);
              }
            </script>
          </body>
          </html>
        `;

                printWindow.document.write(htmlContent);
                printWindow.document.close();
            }
        }
    }, []);

    // Quick browser print
    const handleQuickPrint = useCallback(() => {
        if (resumeRef.current) {
            const originalContent = document.body.innerHTML;
            const printContent = resumeRef.current.innerHTML;

            const printStyles = `
        <style>
          @page { size: A4; margin: 0.5in; }
          body { font-family: system-ui, sans-serif; color: #2d3748; }
          .no-print { display: none !important; }
          h1, h2, h3 { color: #3182ce; }
          .card { border: 1px solid #e2e8f0; padding: 20px; margin: 20px 0; border-radius: 8px; }
        </style>
      `;

            document.body.innerHTML = printStyles + printContent;
            window.print();
            document.body.innerHTML = originalContent;
            setTimeout(() => window.location.reload(), 100);
        }
    }, []);

    // Download as HTML file
    const handleDownloadHTML = useCallback(() => {
        if (resumeRef.current) {
            const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>${resumeData.personal.name} - Resume</title>
          <style>
            body { font-family: system-ui, sans-serif; margin: 20px; line-height: 1.6; color: #2d3748; }
            .card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            h1, h2, h3 { color: #3182ce; }
            .no-print { display: none; }
            ul { padding-left: 20px; }
            li { margin-bottom: 5px; }
            .badge { display: inline-block; background: #edf2f7; color: #4a5568; padding: 4px 8px; border-radius: 6px; font-size: 12px; margin: 2px; }
          </style>
        </head>
        <body>
          <div style="max-width: 800px; margin: 0 auto;">
            ${resumeRef.current.innerHTML}
          </div>
        </body>
        </html>
      `;

            const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${resumeData.personal.name.replace(/\s+/g, '_')}_Resume.html`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    }, []);

    return (
        <Box minH="100vh" bg={themeConstants.pageBg}>
            <Nav />

            {/* Theme Toggle */}
            <Box
                position="fixed"
                top={{ base: 6, md: 20, lg: 24 }}
                right={{ base: 3, md: 4 }}
                zIndex={1000}
                className="no-print"
            >
                <ThemeToggle />
            </Box>

            <Container
                maxW="7xl"
                py={{ base: 6, sm: 8, md: 10 }}
                px={{ base: 4, sm: 6 }}
                mt="2.5rem"
            >
                {/* Action Bar */}
                <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    justify="flex-end"
                    align={{ base: 'stretch', sm: 'center' }}
                    spacing={{ base: 3, sm: 3 }}
                    mb={{ base: 4, md: 6 }}
                    className="no-print"
                >
                    <Button
                        leftIcon={<Icon as={FaPrint} boxSize={{ base: 4, md: 5 }} aria-hidden />}
                        size={{ base: 'sm', md: 'md' }}
                        onClick={handlePrint}
                        bg={themeConstants.accent}
                        color="white"
                        _hover={{ bg: themeConstants.accentHover }}
                        borderRadius="0"
                        px={{ base: 5, md: 6 }}
                        py={{ base: 5, md: 0 }}
                        fontFamily="mono"
                        textTransform="uppercase"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        border="2px solid"
                        borderColor={themeConstants.accent}
                        w={{ base: 'full', sm: 'auto' }}
                        aria-label="Print resume in a new window"
                    >
                        Print Resume
                    </Button>

                    <Button
                        leftIcon={<Icon as={FaDownload} boxSize={{ base: 4, md: 5 }} aria-hidden />}
                        size={{ base: 'sm', md: 'md' }}
                        onClick={handleQuickPrint}
                        bg="transparent"
                        color={themeConstants.accent}
                        border="2px solid"
                        borderColor={themeConstants.accent}
                        _hover={{ bg: themeConstants.accent, color: 'white' }}
                        borderRadius="0"
                        px={{ base: 5, md: 6 }}
                        py={{ base: 5, md: 0 }}
                        fontFamily="mono"
                        textTransform="uppercase"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        w={{ base: 'full', sm: 'auto' }}
                        aria-label="Quick print resume"
                    >
                        Quick Print
                    </Button>

                    <Button
                        leftIcon={<Icon as={FaFileDownload} boxSize={{ base: 4, md: 5 }} aria-hidden />}
                        size={{ base: 'sm', md: 'md' }}
                        onClick={handleDownloadHTML}
                        bg="transparent"
                        color={themeConstants.mutedText}
                        border="2px solid"
                        borderColor={themeConstants.divider}
                        _hover={{ bg: themeConstants.divider, color: themeConstants.primaryText }}
                        borderRadius="0"
                        px={{ base: 5, md: 6 }}
                        py={{ base: 5, md: 0 }}
                        fontFamily="mono"
                        textTransform="uppercase"
                        fontSize={{ base: 'xs', md: 'sm' }}
                        fontWeight="bold"
                        w={{ base: 'full', sm: 'auto' }}
                        aria-label="Download resume as HTML"
                    >
                        Download HTML
                    </Button>
                </Stack>

                {/* Resume Content */}
                <Box
                    ref={resumeRef}
                    className="resume-content"
                    sx={{ overflowWrap: 'anywhere' }}
                >
                    <VStack spacing={{ base: 5, md: 6 }} align="stretch">
                        <PersonalHeader personal={resumeData.personal} />
                        <ProfessionalSummary summary={resumeData.summary} />

                        <Grid
                            templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
                            gap={{ base: 5, md: 6 }}
                        >
                            {/* Left Column */}
                            <VStack spacing={{ base: 5, md: 6 }} align="stretch">
                                <ExperienceSection experiences={resumeData.experience} />
                                <EducationSection education={resumeData.education} />
                            </VStack>

                            {/* Right Column */}
                            <VStack spacing={{ base: 5, md: 6 }} align="stretch">
                                <SkillsSection skills={resumeData.skills} />
                                <CertificationsSection certifications={resumeData.certifications} />
                            </VStack>
                        </Grid>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default About;
