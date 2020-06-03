import React from 'react';

import TextEditor from './textEditor';

const TextDataEditor = ({ edit, data, onChange }) => {
    const { title, value } = data;

    return <>
        <TextEditor edit={edit} name='title' label='Text title' value={title} onChange={onChange} />
        <TextEditor edit={edit} name='value' label='Text content' value={value} onChange={onChange} textarea />
    </>
}

export default TextDataEditor;