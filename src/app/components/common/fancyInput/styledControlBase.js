import { css } from 'styled-components';

const styledControlBase = css`
    background: ${({ theme }) => theme.body};
    border: solid 2px ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.text};
    width: calc(100% - 20px);
    margin: 2px 10px;
    font-size: 1.8rem;
    padding: 1rem;
`;

export default styledControlBase;