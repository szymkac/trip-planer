import React from 'react';

import FancyImg from '../fancyImg';
import StyledFigure from './styledFigure';

const FancyFigure = ({ src, alt, title, width }) => {

    return <StyledFigure>
        <FancyImg src={src} alt={alt || title} width={width} />
        {title && <figcaption><h4>{title}</h4></figcaption>}
    </StyledFigure>;
}

export default FancyFigure;