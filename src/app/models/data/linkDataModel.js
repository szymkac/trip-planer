import DataModel from './dataModel';
import { LINK } from '../../constants/dataTypes';

class LinkDataModel extends DataModel {
    constructor(url = '', opt) {
        super({ ...opt, type: LINK });

        this.url = url;
    }
}

export default LinkDataModel;
