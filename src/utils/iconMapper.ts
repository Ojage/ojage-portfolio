import { BiCode, BiWorld } from 'react-icons/bi';
import {
    FaBrain,
    FaGithub,
    FaLinkedinIn,
    FaRocket,
    FaCog,
    FaLink,
    FaShieldAlt,
    FaLightbulb,
    FaBriefcase,
    FaWrench
} from 'react-icons/fa';

export const iconMap = {
    BiCode,
    BiWorld,
    FaBrain,
    FaGithub,
    FaLinkedinIn,
    FaRocket,
    FaCog,
    FaLink,
    FaShieldAlt,
    FaLightbulb,
    FaBriefcase,
    FaWrench
};

export const getIcon = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || FaShieldAlt;
};