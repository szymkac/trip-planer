import styled from 'styled-components';

const ResizedWrapper = styled.div`
    max-width: 100%;
    width: ${({ width }) => width || 'auto'};
    resize: horizontal;
    overflow: auto;
    align-self:center;
`;

export default ResizedWrapper;