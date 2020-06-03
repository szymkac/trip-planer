import React, { createRef } from 'react';

import TextEditor from './textEditor';

const IframeDataEditor = ({ edit, data, onChange }) => {
    const iframeRef = createRef();
    const { title, iframeUrl, height, id } = data;

    if (edit) {
        return <>
            <TextEditor edit name='title' label='Iframe title' value={title} onChange={onChange} />
            <TextEditor edit name='iframeUrl' label='Iframe source' value={iframeUrl} onChange={onChange} />
            <TextEditor edit name='height' label='Iframe height [px]' value={height} onChange={onChange} />
        </>
    }
    else {
        return <>
            <TextEditor name='title' label='Iframe title' value={title} onChange={onChange} />
            <iframe ref={iframeRef}
                title={id}
                src={iframeUrl}
                width="100%"
                height={height + 'px'}
                frameBorder="0"
                marginHeight="0"
                marginWidth="0" />
        </>

    }

}

export default IframeDataEditor;