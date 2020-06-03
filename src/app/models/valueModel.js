import BaseModel from './baseModel';

class ValueModel extends BaseModel {
    constructor(value = '', id = null) {
        super(id);

        this.value = value;
    }
}

export default ValueModel;