import BaseModel from '../baseModel';
import { NONE } from '../../constants/numerations';

class SectionModel extends BaseModel {
    constructor(title = '', { isSub = false, numeration = NONE } = {}) {
        super();
        
        this.title = title;
        this.isSub = isSub;
        this.numeration = numeration;

        this.data = [];
        this.subs = [];
    }
}

export default SectionModel;