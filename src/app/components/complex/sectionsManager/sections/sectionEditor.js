import React, { useContext } from 'react';

import { Section, FancyButton } from '../../..';
import TextEditor from '../data/textEditor';
import EditContext from '../editContext';
import { addSectionHelper, addDataHelper, editArrayValue } from '../helpers';
import SectionsList from './sectionsList';
import GenericDataEditor from '../data/genericDataEditor';

const SectionEditor = ({ section, index, onChange }) => {
    const edit = useContext(EditContext);

    const onValueChangeHandler = (value, key) => {
        onChange({
            ...section,
            [key]: value
        }, index);
    };

    const onArrayValueChangeHandler = (value, valueIndex, key = 'subs') => {
        onChange({
            ...section,
            [key]: editArrayValue(section[key], value, valueIndex)
        }, index);

    };

    const { title, data, subs } = section;

    return <Section>
        <TextEditor edit={edit} value={title} name='title' label='Title' onChange={onValueChangeHandler} />
        {data.map((d, i) => <GenericDataEditor key={d.id} index={i} data={d} onChange={onArrayValueChangeHandler} />)}
        {edit && <FancyButton onClick={() => onValueChangeHandler(addDataHelper(data), 'data')}>ADD DATA</FancyButton>}

        <SectionsList list={subs} onChange={onArrayValueChangeHandler} />
        {edit && <FancyButton onClick={() => onValueChangeHandler(addSectionHelper(subs), 'subs')}>ADD SUBSECTION</FancyButton>}
    </Section>;
}

export default SectionEditor;