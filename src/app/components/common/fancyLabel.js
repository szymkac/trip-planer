import styled, { css } from 'styled-components';
import { Row } from '../';

const FancyLabel = styled.label`
    width: 100%;
    font-size: 2rem;
    font-weight: bold;

    ${({ vertical }) => vertical && css`
        ${Row}:nth-child(2){
            padding-left: 3rem;
        }
    `}
`;

export default FancyLabel;