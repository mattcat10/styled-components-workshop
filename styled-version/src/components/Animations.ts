import { keyframes } from 'styled-components';

const fadeSlideFromLeft = keyframes`
  from {
    opacity: 0; 
    margin-left: -50px;
  }

  to {
    opacity: 1; 
    margin-left: 0px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg); 
  }

  to {
    transform: rotate(360deg); 
  }
`;

export { fadeSlideFromLeft, rotate };