import React from 'react';

import { FancyInput } from '../../..';

const TextEditor = ({ edit, value, onChange, name, label, textarea }) => {
    if (edit) {
        const onChangeHandler = (v) => {
            onChange(v, name);
        }

        return <FancyInput vertical
            textarea={textarea}
            label={label}
            value={value}
            onChange={onChangeHandler} />
    }
    else if (!!value) {
        if (textarea) {
            return <article>{value}</article>
        }
        else {
            return <h2>{value}</h2>
        }
    }
    else {
        return null;
    }
};

export default TextEditor;