import React from "react";
import Trumbowyg from 'react-trumbowyg';
import PropTypes from 'prop-types';

const TextEditor = ({ id, placeholder, data = "" }) => {
    return (
        <Trumbowyg
            id={id}
            placeholder={placeholder}
            data={data}
            buttons={[
                ['viewHTML'],
                ['undo', 'redo'],
                ['formatting'],
                ['strong', 'em', 'del'],
                ['superscript', 'subscript'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['unorderedList', 'orderedList'],
                ['horizontalRule'],
                ['removeformat'],
                ['fullscreen']
            ]}
            onChange={() => { }}
        />
    );
};

TextEditor.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    data: PropTypes.string,
};

export default TextEditor;
