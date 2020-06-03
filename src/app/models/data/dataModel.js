import BaseModel from '../baseModel';
import { TEXT } from '../../constants/dataTypes';

class DataModel extends BaseModel {
    constructor({ title = '', type = TEXT, id = null } = {}) {
        super(id);

        this.type = type;
        this.title = title;
    }
}

export default DataModel;