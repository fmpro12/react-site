import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for the background gradient
const gradientAnimation = keyframes`
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

// Styled component for the AnimatedBackground
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite; // Apply the animation
`;

const AnimatedBackground = () => {
  return <Background />;
};

export default AnimatedBackground;
