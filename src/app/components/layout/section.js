import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 1rem;
    margin: 1rem 0;
    ${({ isSub }) => isSub && 'margin-left: 2rem;'}

    border: dashed 2px ${({ theme }) => theme.text};
`;

export default Section;