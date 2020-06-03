import DataModel from './dataModel';
import { LIST } from '../../constants/dataTypes';
import { ValueModel } from '../';

class ListDataModel extends DataModel {
    constructor(list = [new ValueModel()], opt) {
        super({ ...opt, type: LIST });

        this.list = list;
    }
}

export default ListDataModel;
