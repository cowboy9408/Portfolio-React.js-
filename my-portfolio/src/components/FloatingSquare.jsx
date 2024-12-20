import React from 'react'; 
import styled, { keyframes } from 'styled-components'; 

const fallingAnimation = keyframes`
  0% { transform: translateY(0); opacity: 1; } 
  100% { transform: translateY(100vh); opacity: 0; }
`;

const Square = styled.div`
  position: absolute; 
  width: ${({ $size }) => $size}px; 
  height: ${({ $size }) => $size}px; 
  background-color: #ff6347; 
  top: ${({ $top }) => $top}vh; 
  left: ${({ $left }) => $left}%; 
  opacity: 0.8; 
  animation: ${fallingAnimation} ${({ $duration }) => $duration}s linear infinite; 
  animation-delay: ${({ $initialDelay }) => $initialDelay}s; 
`;

const FloatingSquare = ({ top, left, size, duration, initialDelay }) => (
  // FloatingSquare 컴포넌트에 필요한 위치, 크기, 지속 시간, 초기 지연 시간 props 전달
  <Square $top={top} $left={left} $size={size} $duration={duration} $initialDelay={initialDelay} />
);

export default FloatingSquare; 
