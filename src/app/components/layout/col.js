import styled from 'styled-components';

const Col = styled.section`
    width: ${({ width }) => !!width ? `${width}` : '100%'};
`;

export default Col;