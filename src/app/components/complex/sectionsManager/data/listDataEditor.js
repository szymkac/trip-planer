import React from 'react';

import TextEditor from './textEditor';
import { FancyInput, FancyButton } from '../../../';
import { editArrayValue, addValueHelper } from '../helpers';

const propertyName = 'list';

const ListDataEditor = ({ edit, data, onChange }) => {
    const { title, list } = data;

    const onElementChangeHandler = (value, i) => {
        onChange(editArrayValue(list, { id: list[i].id, value: value }, parseInt(i)), propertyName);
    };

    const elementsList = edit ? list.map(({ id, value }, i) => <li key={id}>
        <FancyInput value={value} name={i} onChange={onElementChangeHandler} />
    </li>) :
        list.map(({ id, value }) => <li key={id}>{value}</li>);

    return <>
        <TextEditor edit={edit} name='title' label='Text title' value={title} onChange={onChange} />
        <ul>{elementsList}</ul>
        {edit && <FancyButton onClick={() => onChange(addValueHelper(list), propertyName)}>Add Element</FancyButton>}
    </>
}

export default ListDataEditor;