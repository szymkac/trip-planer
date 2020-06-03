import React from 'react';

import SectionEditor from './sectionEditor';

const SectionsList = ({ list, onChange }) => list.map((section, i) => (
    <SectionEditor
        key={section.id}
        index={i}
        section={section}
        onChange={onChange} />));

export default SectionsList;