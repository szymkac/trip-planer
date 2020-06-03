import DataModel from './dataModel';
import { IFRAME } from '../../constants/dataTypes';

class IframeDataModel extends DataModel {
    constructor(iframeSrc = '', { height = "500", ...opt } = {}) {
        super({ ...opt, type: IFRAME });

        this.iframeSrc = iframeSrc;
        this.height = height;
    }
}

export default IframeDataModel;
