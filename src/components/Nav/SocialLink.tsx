import React from 'react';
import { motion } from 'framer-motion';
import { SocialLink as SocialLinkType } from '../../data/navData';
import { useNavThemeConstants } from '../../hooks/useNavThemeConstants';

interface SocialLinkProps {
  socialLink: SocialLinkType;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ socialLink }) => {
  const { textColor } = useNavThemeConstants();
  const { href, icon: Icon, label } = socialLink;

  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
      <motion.div
        whileHover={{ scale: 1.2, rotate: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
        style={{ margin: "0 5px" }}
      >
        <Icon size="20px" color={textColor} />
      </motion.div>
    </a>
  );
};