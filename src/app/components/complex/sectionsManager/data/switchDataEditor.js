import React from 'react';

import { TEXT, LIST, IMAGE, IFRAME, LINK } from '../../../../constants/dataTypes';
import TextDataEditor from './textDataEditor';
import ListDataEditor from './listDataEditor';
import ImageDataEditor from './imageDataEditor';
import IframeDataEditor from './iframeDataEditor';
import LinkDataEditor from './linkDataEditor';

const SwitchDataEditor = (props) => {
    switch (props.data.type) {
        case TEXT:
            return <TextDataEditor {...props} />
        case LIST:
            return <ListDataEditor {...props} />
        case IMAGE:
            return <ImageDataEditor {...props} />
        case IFRAME:
            return <IframeDataEditor {...props} />
        case LINK:
            return <LinkDataEditor {...props} />
        default:
            return null
    }
};

export default SwitchDataEditor;