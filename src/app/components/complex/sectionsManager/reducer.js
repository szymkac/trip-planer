import { addSectionHelper, editArrayValue } from './helpers';

const NEW = 'NEW';
const CHANGE_MODE = 'CHANGE_MODE';
const EDIT = 'EDIT';
const CLEAR = 'CLEAR';

const initialState = { list: [], edit: true };

const reducer = ({ list, ...rest }, { type, payload }) => {
    switch (type) {
        case NEW:
            return {
                ...rest,
                list: addSectionHelper(list)
            };
        case EDIT:
            const { editedSection, editedAtIndex } = payload;
            return {
                ...rest,
                list: editArrayValue(list, editedSection, editedAtIndex)
            };
        case CHANGE_MODE:
            return {
                list: list,
                edit: !rest.edit
            };
        case CLEAR:
            return {
                ...rest,
                list: []
            }
        default:
            throw new Error();
    }
}

export default reducer;

export {
    initialState,
    NEW,
    CHANGE_MODE,
    EDIT,
    CLEAR
}