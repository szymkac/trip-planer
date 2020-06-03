import DataModel from './dataModel';
import { IMAGE } from '../../constants/dataTypes';

class ImageDataModel extends DataModel {
    constructor(imgValue = null, { initialWidth = true, setWidth = null, ...opt } = {}) {
        super({ ...opt, type: IMAGE });

        this.imgValue = imgValue;
        this.initialWidth = initialWidth;
        this.setWidth = setWidth;
    }
}

export default ImageDataModel;
