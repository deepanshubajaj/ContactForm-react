import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaHeart, FaVolumeUp } from 'react-icons/fa';
import chamberFlute from '../assets/ChamberFlute.mp3';

const fadeOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

const scaleUp = keyframes`
  0% {
    transform: scale(0) rotate(-180deg);
    opacity: 0;
  }
  60% {
    transform: scale(1.2) rotate(10deg);
  }
  80% {
    transform: scale(0.95) rotate(-5deg);
  }
  100% {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SplashContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #FAE8E0, #FFD5C2, #F8B195);
  background-size: 200% 200%;
  animation: ${fadeOut} 0.5s ease-in-out forwards,
             ${gradient} 5s ease infinite;
  animation-delay: 2.5s, 0s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;

const LogoContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  background: #2A2A2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${scaleUp} 1s ease-out forwards,
             ${float} 3s ease-in-out infinite;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  position: relative;

  &::before {
    content: "DB";
    color: #FAE8E0;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Arial', sans-serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 3px solid #2A2A2A;
    border-radius: 50%;
    opacity: 0.2;
    animation: ${pulse} 2s ease-in-out infinite;
  }
`;

const IconCircle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: #2A2A2A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  svg {
    color: #FAE8E0;
    font-size: 1.2rem;
  }

  &:nth-child(1) {
    top: -20px;
    right: 0;
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    bottom: -10px;
    left: 0;
    animation-delay: 1s;
  }
`;

const Title = styled.h1`
  color: #2A2A2A;
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  opacity: 0;
  animation: ${scaleUp} 0.5s ease-out forwards;
  animation-delay: 0.3s;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  letter-spacing: 2px;
`;

const Subtitle = styled.p`
  color: #2A2A2A;
  font-size: 1.5rem;
  margin: 1rem 0;
  opacity: 0;
  animation: ${scaleUp} 0.5s ease-out forwards;
  animation-delay: 0.6s;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: rgba(42, 42, 42, 0.1);
  border-radius: 2px;
  margin-top: 2rem;
  overflow: hidden;
  opacity: 0;
  animation: ${scaleUp} 0.5s ease-out forwards;
  animation-delay: 0.9s;

  &::after {
    content: '';
    display: block;
    width: 40%;
    height: 100%;
    background: #2A2A2A;
    border-radius: 2px;
    animation: loading 1.5s ease-in-out infinite;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(350%);
    }
  }
`;

const AudioButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: #2A2A2A;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(42, 42, 42, 0.1);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ isVisible }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio(chamberFlute);
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Stop audio when splash screen is hidden
    if (!isVisible && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [isVisible]);

  const handleClick = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <SplashContainer isVisible={isVisible} onClick={handleClick}>
      <AudioButton type="button" onClick={(e) => e.stopPropagation()}>
        <FaVolumeUp style={{ opacity: isPlaying ? 1 : 0.5 }} />
      </AudioButton>
      <LogoContainer>
        <IconCircle>
          <FaEnvelope />
        </IconCircle>
        <Logo />
        <IconCircle>
          <FaHeart />
        </IconCircle>
      </LogoContainer>
      <Title>Welcome</Title>
      <Subtitle>Let's Connect</Subtitle>
      <LoadingBar />
    </SplashContainer>
  );
};

export default SplashScreen; 