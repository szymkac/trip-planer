import React from 'react';
import styled, { css } from 'styled-components';

const smallButtonBaseCss = css`
    border-width: 2px;
    font-size: 1.6rem;
    margin: 0.5rem;
`;

const smallButtonCss = css`
    ${smallButtonBaseCss}
    padding: 1rem;
    min-width: 150px;
    border-radius: 2rem;
`;

const icoButtonCss = css`
    ${smallButtonBaseCss}
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const normalButtonCss = css`
    border-width: 2px 0;
    padding: 2rem;
    font-size: 2rem;
    margin: 1rem 0;
    min-width: 300px;
`;

const StyledButton = styled.button`
    outline: none;
    ${({ small, ico }) => small ? smallButtonCss : ico ? icoButtonCss : normalButtonCss}
    border-style: solid;
    border-color: ${({ theme }) => theme.text};
    font-weight: bold;
    &:hover{
        filter: invert(25%);
    }
    
    ${({ expand }) => expand && 'width: 100%;'}

    ${
    ({ selected }) => !selected ? css`
            background: transparent;
        `: css`
            color: ${({ theme }) => theme.body};
            background: ${({ theme }) => theme.secondaryBackground};
        `
    }

`;

const FancyButton = ({ name, onClick, children, ...restProps }) => {
    const onClickHandler = () => {
        if (typeof onClick === 'function')
            onClick(name);
    }

    return <StyledButton onClick={onClickHandler} {...restProps}>
        {children}
    </StyledButton>;
}

export default FancyButton;