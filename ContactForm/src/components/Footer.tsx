import React from 'react';
import styled from 'styled-components';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSnapchat,
  FaEnvelope,
  FaGlobe,
  FaIdCard,
  FaHeart,
  FaCopyright,
  FaFacebook
} from 'react-icons/fa';

import { SiX } from 'react-icons/si';

const FooterContainer = styled.footer`
  background: #2A2A2A;
  padding: 2rem 0;
  color: white;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const IconLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  span {
    font-size: 0.8rem;
    font-weight: 500;
  }

  &:hover {
    color: #FAE8E0;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #FAE8E0;

  .heart {
    color: #ff6b6b;
    animation: heartbeat 1.5s infinite;
  }

  @keyframes heartbeat {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const Footer: React.FC = () => {
  const creatorName = import.meta.env.VITE_CREATOR_NAME;
  const currentYear = import.meta.env.VITE_COPYRIGHT_YEAR;

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      url: import.meta.env.VITE_GITHUB_URL || 'https://github.com/yourusername'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      url: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/yourusername'
    },
    {
      icon: FaFacebook,
      label: 'Facebook',
      url: import.meta.env.VITE_FACEBOOK_URL || 'https://facebook.com/yourusername'
    },
    {
      icon: FaInstagram,
      label: 'Instagram',
      url: import.meta.env.VITE_INSTAGRAM_URL || 'https://instagram.com/yourusername'
    },
    {
      icon: FaSnapchat,
      label: 'Snapchat',
      url: import.meta.env.VITE_SNAPCHAT_URL || 'https://snapchat.com/add/yourusername'
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      url: `mailto:${import.meta.env.VITE_EMAIL || 'your.email@example.com'}`
    },
    {
      icon: FaGlobe,
      label: 'Website',
      url: import.meta.env.VITE_WEBSITE_URL || 'https://yourwebsite.com'
    },
    {
      icon: FaIdCard,
      label: 'eCard',
      url: import.meta.env.VITE_ECARD_URL || 'https://yourecard.com'
    },
    {
      icon: SiX,
      label: 'X',
      url: import.meta.env.VITE_TWITTER_URL || 'https://twitter.com/yourusername'
    }
  ];

  return (
    <FooterContainer>
      <SocialIcons>
        {socialLinks.map((link, index) => (
          <IconLink
            key={index}
            href={link.url}
            target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
          >
            <link.icon />
            <span>{link.label}</span>
          </IconLink>
        ))}
      </SocialIcons>
      <Copyright>
        <FaCopyright /> {currentYear} | Made with <FaHeart className="heart" /> by {creatorName}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 