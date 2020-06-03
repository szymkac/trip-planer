import { TEXT, LIST, IMAGE, IFRAME, LINK } from '../../../constants/dataTypes';
import { SectionModel, TextDataModel, LinkDataModel, ListDataModel, ValueModel, IframeDataModel, ImageDataModel } from '../../../models';


const addSectionHelper = (sections, isSub = false) => [...sections, new SectionModel('', { isSub: isSub })];

const addDataHelper = (data, type = TEXT) => [...data, dataModelFactory(type)];

const addValueHelper = elements => [...elements, new ValueModel()];

const editArrayValue = (array, value, index) => array.map((v, i) => i === index ? value : v);

const dataModelFactory = (type, opt) => {
    switch (type) {
        case TEXT:
            return new TextDataModel('', opt);
        case IMAGE:
            return new ImageDataModel(null, { ...opt, type });
        case IFRAME:
            return new IframeDataModel('', opt);
        case LIST:
            return new ListDataModel([new ValueModel()], opt);
        case LINK:
            return new LinkDataModel('', opt);
        default:
            throw new Error();
    }
};

export {
    addSectionHelper,
    addDataHelper,
    addValueHelper,
    editArrayValue,
    dataModelFactory
};