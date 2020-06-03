import React, { useState, useEffect, useRef } from 'react';

import { FancyImg, ResizedWrapper } from '../../../';


const ImageEditor = (props) => {
    const { base64, onChange, initialWidth, setWidth } = props;
    const wraperRef = useRef();
    let debounceTimeout = null;
    let initResize = true;

    const onResize = () => {
        clearTimeout(debounceTimeout);
        if (!initResize) {
            debounceTimeout = setTimeout(() => {
                const { current } = wraperRef;
                let newWidth = current.style.width;
                //initResize = true;
                onChange(newWidth)
            }, 250);
        }
        else
            initResize = false;
    }

    const [resizeObserver] = useState(new ResizeObserver(onResize));
    console.log(props)
    useEffect(() => {
        resizeObserver.observe(wraperRef.current)
        return () => resizeObserver.disconnect();
    }, []);

    return <ResizedWrapper ref={wraperRef} width={initialWidth ? 'auto' : setWidth}>
        <FancyImg src={base64} />
    </ResizedWrapper>;
}

export default ImageEditor;