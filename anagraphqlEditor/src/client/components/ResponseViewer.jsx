import React from 'react';
import { useSelector } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/mode/javascript/javascript';


const ResponseViewer = () => {
  const response = useSelector(state => state.response.currResponse);
  const options = {
    lineNumbers: true,
    tabSize: 2,
    keyMap: 'sublime',
    autoCloseBrackets: true,
    matchBrackets: true,
    showCursorWhenSelecting: true,
    foldGutter: {
      minFoldSize: 4,
    },
    mode: 'application/json',
    readOnly: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  };
  console.log(JSON.stringify(response, null, 4));
  return (
    <CodeMirror
      value={JSON.stringify(response, null, 4)}
      options={options}
    />
  );
};

export default ResponseViewer;
