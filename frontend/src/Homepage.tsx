// HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';
import backgroundImage from '/home/cpow/Desktop/AI-Video-Generator/image5.png'; // Update the path

// Container with styled-components
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  color: white;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0.4, 0, 0.2, 0.54);
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
  width: 50%;
`;

const RightContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  width: 50%;
  transform: skew(-5deg, -1deg); /* Vertical and horizontal slant with slight rotation */
`;

// Animated gradient for video loading
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  80% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Title = styled(motion.h1)`
  font-size: 48px;
  text-align: left;
  margin: 0;
  background: linear-gradient(35deg, #ff4081, #6200ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  text-align: left;
  margin: 20px 0;
  background: linear-gradient(35deg, #03a9f4, #ffeb3b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Input = styled(motion.input)`
  border: 2px solid white;
  border-radius: 24px;
  padding: 12px 24px;
  background: transparent;
  color: white;
  margin-bottom: 10px;
  width: 100%;
  transition: border-color 0.3s, background-color 0.3s;

  &:focus {
    border-color: #03a9f4;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled(motion.button)`
  padding: 12px 24px;
  background-image: linear-gradient(135deg, #ff4081, #6200ea);
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #3700b3;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.95);
  }
`;

// Slanted video preview with animated gradient for loading
const gradientPulse = keyframes`
  0% {
    background-position: 50% 50%;
    background-size: 200% 200%;
    opacity: 0.6;
  }
  70% {
    background-position: 100% 100%;
    background-size: 300% 300%;
    opacity: 1;
  }
  100% {
    background-position: 50% 50%;
    background-size: 200% 200%;
    opacity: 0.6;
  }
`;

const VideoPreview = styled(motion.div)`
  background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.7), rgba(255, 0, 0, 0.3)); /* Dark blend with soft red */
  background-size: 300% 300%;
  animation: ${gradientPulse} 3s ease-in-out infinite;
  border-radius: 20px; /* Rounded corners */
  width: 320px;
  height: 480px;
  margin-top: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease-in-out;
  transform: skew(-5deg, 1deg); /* Initial slant effect */

  /* Blend effect using a more natural approach */
  &:before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.5) 30%, transparent 60%);
    border-radius: 20px; /* Match the border-radius of the video */
    z-index: 1; /* Place the gradient behind the video */
  }

  &:hover {
    transform: scale(1.05) skew(1deg, -8deg); /* Keep the skew on hover */
  }
`;

interface HomePageProps {
  onClick?: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onClick }) => {
  return (
    <Container>
      <Overlay />

      <LeftContent>
        <Title
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='text-4xl font-bold uppercase '
        >
          <span className='text-5xl'>URL to Video Converter</span>
          <br />
          with the power of AI
        </Title>

        <Subtitle
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Convert your favorite URLs to videos easily!
        </Subtitle>

        <FormContainer>
          <Input
            type="url"
            placeholder="http://........................../"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
          >
            Create Video
          </Button>
        </FormContainer>
      </LeftContent>

      <RightContent>
        <VideoPreview
          whileHover={{ scale: 1.085 }}
          transition={{ duration: 0.3 }}
        >
          {/* This is a placeholder for video preview */}
        </VideoPreview>
      </RightContent>
    </Container>
  );
};

export default HomePage;
