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

export { fadeSlideFromLeft };