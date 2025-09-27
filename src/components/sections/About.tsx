// components/About/About.tsx
import React, { useRef, useCallback } from 'react';
import { Box, Container, VStack, Button, Flex, Grid, useTheme } from "@chakra-ui/react";
import { FaPrint, FaDownload, FaFileDownload } from "react-icons/fa";
import Nav from "../Nav/Nav";
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
            @page {
              size: A4;
              margin: 0.5in;
            }
            body {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
              margin: 0;
              padding: 20px;
              line-height: 1.6;
              color: #2d3748;
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
            .no-print {
              display: none !important;
            }
            h1, h2, h3 {
              color: #3182ce;
              margin-top: 0;
            }
            .card {
              background: white;
              border: 1px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 20px;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            ul {
              padding-left: 20px;
            }
            li {
              margin-bottom: 5px;
            }
            .badge {
              display: inline-block;
              background: #edf2f7;
              color: #4a5568;
              padding: 4px 8px;
              border-radius: 6px;
              font-size: 12px;
              margin: 2px;
            }
            .timeline-dot {
              background: #3182ce !important;
            }
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
                setTimeout(function() {
                  window.print();
                }, 500);
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
      
      // Reload to restore React state
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
      
      {/* Theme Toggle Button */}
      <Box position="fixed" top={100} right={4} zIndex={1000} className="no-print">
        <ThemeToggle />
      </Box>
      
      <Container maxW="7xl" py={8} px={4} mt="2.5rem">
        {/* Download Button Group */}
        <Flex justify="flex-end" mb={6} gap={3} className="no-print">
          <Button
            leftIcon={<FaPrint />}
            size="md"
            onClick={handlePrint}
            bg={themeConstants.accent}
            color="white"
            _hover={{ bg: themeConstants.accentHover }}
            borderRadius="0"
            px={6}
            fontFamily="mono"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            border="2px solid"
            borderColor={themeConstants.accent}
          >
            Print Resume
          </Button>
          
          <Button
            leftIcon={<FaDownload />}
            size="md"
            onClick={handleQuickPrint}
            bg="transparent"
            color={themeConstants.accent}
            border="2px solid"
            borderColor={themeConstants.accent}
            _hover={{ 
              bg: themeConstants.accent,
              color: "white"
            }}
            borderRadius="0"
            px={6}
            fontFamily="mono"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
          >
            Quick Print
          </Button>
          
          <Button
            leftIcon={<FaFileDownload />}
            size="md"
            onClick={handleDownloadHTML}
            bg="transparent"
            color={themeConstants.mutedText}
            border="2px solid"
            borderColor={themeConstants.divider}
            _hover={{ 
              bg: themeConstants.divider,
              color: themeConstants.primaryText
            }}
            borderRadius="0"
            px={6}
            fontFamily="mono"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
          >
            Download HTML
          </Button>
        </Flex>

        {/* Resume Content */}
        <Box 
          ref={resumeRef}
          className="resume-content"
        >
          <VStack spacing={6} align="stretch">
            {/* Personal Header - Full Width */}
            <PersonalHeader personal={resumeData.personal} />
            
            {/* Professional Summary - Full Width */}
            <ProfessionalSummary summary={resumeData.summary} />
            
            {/* Main Content Grid */}
            <Grid
              templateColumns={{ 
                base: "1fr", 
                lg: "2fr 1fr" 
              }}
              gap={6}
            >
              {/* Left Column - Main Content */}
              <VStack spacing={6} align="stretch">
                <ExperienceSection experiences={resumeData.experience} />
                <EducationSection education={resumeData.education} />
              </VStack>
              
              {/* Right Column - Sidebar */}
              <VStack spacing={6} align="stretch">
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