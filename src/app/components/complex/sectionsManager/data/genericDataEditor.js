import React, { useContext } from 'react';

import { Section, Row, FancyButton } from '../../../';
import dataTypes from '../../../../constants/dataTypes';
import { dataModelFactory } from '../helpers';
import EditContext from '../editContext';
import SwitchDataEditor from './switchDataEditor';

const GenericDataEditor = ({ data, index, onChange }) => {
    const { type } = data;
    const edit = useContext(EditContext);

    const onTypeChangeHandler = newType => {
        onChange(dataModelFactory(newType, data), index, 'data');
    }

    const onChangeHandler = (value, key) => {
        onChange(!!key ? { ...data, [key]: value } : value, index, 'data');
    }

    return <Section>
        <Row>
            {edit && dataTypes.map(dt => <FancyButton key={dt} name={dt} small
                selected={type === dt} onClick={onTypeChangeHandler}>
                {dt}
            </FancyButton>)}
        </Row>
        <SwitchDataEditor edit={edit} data={data} onChange={onChangeHandler} />
    </Section>
}

export default GenericDataEditor;