import { v4 as uuid } from 'uuid';

class BaseModel {
    constructor(id) {
        this.id = id || uuid();
    }
}

export default BaseModel;