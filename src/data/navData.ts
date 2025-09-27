import {
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { LiaBehanceSquare } from "react-icons/lia";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";

export interface SocialLink {
  href: string;
  icon: any;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const socialLinks: SocialLink[] = [
  { 
    href: "https://www.instagram.com/o_s_a_l_a/", 
    icon: AiOutlineInstagram, 
    label: "Instagram" 
  },
  { 
    href: "https://dribbble.com/KSalathiel/", 
    icon: AiOutlineDribbble, 
    label: "Dribbble" 
  },
  { 
    href: "https://behance.net/ojagesalathiel/", 
    icon: LiaBehanceSquare, 
    label: "Behance" 
  },
  { 
    href: "https://facebook.com/Salathiel.Ayuk/", 
    icon: BiLogoFacebook, 
    label: "Facebook" 
  },
  { 
    href: "https://linkedin.com/in/ojage-sala/", 
    icon: BiLogoLinkedin, 
    label: "LinkedIn" 
  },
  { 
    href: "https://wa.me/681402886", 
    icon: AiOutlineWhatsApp, 
    label: "WhatsApp" 
  },
];

export const navigationItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Internships", href: "/internships" },
];

// You'll need to import this from your constants
export const contactInfo = {
  name: "Ojage Salathiel Ayuk",
  email: "salathiel@ojage.com" 
};