import React from 'react';

import TextEditor from './textEditor';

const LinkDataEditor = ({ edit, data, onChange }) => {
    const { title, url } = data;

    if (edit) {
        return <>
            <TextEditor edit name='title' label='Link name' value={title} onChange={onChange} />
            <TextEditor edit name='url' label='Url link' value={url} onChange={onChange} />
        </>
    }
    else {
        return <a href={url} target="_blank" rel="noopener noreferrer">{title || url}</a>
    }
}

export default LinkDataEditor;