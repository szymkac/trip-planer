import styled from 'styled-components';

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 70%;
    margin: 0 auto;
    border-width: 0 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.text};
`;

export default Main;