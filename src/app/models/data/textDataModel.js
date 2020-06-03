import DataModel from './dataModel';
import { TEXT } from '../../constants/dataTypes';

class TextDataModel extends DataModel {
    constructor(value = '', opt) {
        super({ ...opt, type: TEXT });

        this.value = value;
    }
}

export default TextDataModel;
