import styled from 'styled-components';

const FancyImg = styled.img`
    width: ${({ width }) => width || '100%'};
    max-width: 100%;
    height: auto;
`;

export default FancyImg;