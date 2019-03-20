import styled from 'styled-components';

const RoundButton = styled.button`
    border-radius: 15px;

    &:disabled {
        cursor: auto;
    }
`;

export { RoundButton }