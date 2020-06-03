import React, { useRef } from 'react';

import ImageEditor from './imageEditor';
import { ValueModel } from '../../../../models';
import TextEditor from './textEditor';
import { FancyFigure } from '../../../';

const ImageDataEditor = ({ data, onChange, edit }) => {
    const fileRef = useRef();

    const { imgValue, title, initialWidth, setWidth } = data;

    const readFIle = () => {
        console.log(fileRef.current.files);
        const reader = new FileReader();
        if (fileRef.current.files.length === 1) {
            reader.readAsDataURL(fileRef.current.files[0]);
            reader.onload = e => {
                onChange(new ValueModel(e.srcElement.result), 'imgValue');
            }
        }
    }

    const onImgWidthChangeHandler = newWidth => {
        onChange({ ...data, initialWidth: false, setWidth: newWidth });
    }
    console.log(data)
    if (edit) {
        console.log(setWidth)
        return <>
            <input ref={fileRef} type='file' onChange={readFIle} />
            {!!imgValue && <ImageEditor key={imgValue.id}
                base64={imgValue.value}
                onChange={onImgWidthChangeHandler}
                initialWidth={initialWidth}
                setWidth={setWidth} />}
            <TextEditor edit name='title' label='Image description' value={title} onChange={onChange} />
        </>;
    }
    else {
        return <FancyFigure title={title} src={imgValue.value} width={initialWidth ? 'auto' : setWidth} />
    }
}

export default ImageDataEditor;