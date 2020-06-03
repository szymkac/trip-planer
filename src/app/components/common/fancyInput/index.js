import React from 'react';
import { DebounceInput } from 'react-debounce-input';

import { Row, Col, FancyLabel } from '../..';
import StyledInput from './styledInput';
import StyledTextArea from './styledTextArea';

const FancyInput = ({ label, value, name, onChange, vertical, textarea }) => {
    const onChangeHandler = e => {
        if (typeof onChange === 'function' && value !== e.target.value)
            onChange(e.target.value, e.target.name);
    }

    const input = <DebounceInput
        name={name}
        value={value}
        minLength={2}
        debounceTimeout={300}
        onChange={onChangeHandler}
        element={textarea ? StyledTextArea : StyledInput} />;

    if (!label) {
        return input;
    }
    else if (vertical) {
        return <FancyLabel vertical>
            <Row>{label}</Row>
            <Row>{input}</Row>
        </FancyLabel>;
    }
    else {
        return <FancyLabel>
            <Row>
                <Col width="30%">{label}</Col>
                <Col width="70%">{input}</Col>
            </Row>
        </FancyLabel>
    }
}

export default FancyInput;