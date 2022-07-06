import React, { useEffect, useRef } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkEditor = (props) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editor.addHook('change', props.onContentChange);
  });

  return (
    <div id="edit" ref={editorRef}>
      <h1>Test</h1>
    </div>
  );
};

// Second variant

// const MarkEditor = () => {
//   const editor = new Editor({
//     el: document.querySelector('#root'),
//     height: '500px',
//     initialEditType: 'markdown',
//     previewStyle: 'vertical',
//   });

//   editor.getMarkdown();
// };

export default MarkEditor;
