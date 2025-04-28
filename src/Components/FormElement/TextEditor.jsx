
import React, { useEffect } from 'react';

const TextEditor = ({ id, placeholder, onChange, value = '' }) => {
  useEffect(() => {
    $(`#${id}`).trumbowyg({
      btns: [
        ['viewHTML'],
        ['undo', 'redo'], // Only supported in Blink browsers
        ['formatting'],
        ['strong', 'em', 'del'],
        ['superscript', 'subscript'],
        ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
        ['unorderedList', 'orderedList'],
        ['horizontalRule'],
        ['removeformat'],
        ['fullscreen'],
      ],
    });

    $(function () {
      var tooltip_init = {
        init: function () {
          $('button').tooltip();
        },
      };
      tooltip_init.init();
    });

    $(`#${id}`).on('tbwchange', function () {
      const content = $(this).trumbowyg('html');
      onChange(content); // Update the parent component with new content
    });
  }, []);
  return (
    <div className="app-editor" id={id}>
      <p>{value?.trim() ? value : placeholder}</p>
    </div>
  );
};

export default TextEditor;
