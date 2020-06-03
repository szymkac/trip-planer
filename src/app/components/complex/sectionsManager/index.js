import React, { useReducer } from 'react';

import reducer, { initialState, NEW, CHANGE_MODE, EDIT, CLEAR } from './reducer';
import { FancyButton, Row } from '../../';
import EditContext from './editContext';
import SectionsList from './sections/sectionsList';

const SectionsManager = () => {
    const [{ list, edit }, dispatch] = useReducer(reducer, initialState);

    const onChangeHandler = (editedSection, editedAtIndex) => {
        dispatch({ type: EDIT, payload: { editedSection, editedAtIndex } });
    }

    return <EditContext.Provider value={edit}>
        <Row>
            <FancyButton onClick={() => dispatch({ type: CHANGE_MODE })}>{edit ? 'Disable Edit' : 'Enable Edit'}</FancyButton>
            <FancyButton onClick={() => dispatch({ type: CLEAR })}>Clear</FancyButton>
        </Row>
        <SectionsList list={list} onChange={onChangeHandler} />

        {edit && <FancyButton expand onClick={() => dispatch({ type: NEW })}>Add Section</FancyButton>}
    </EditContext.Provider>
}

export default SectionsManager;