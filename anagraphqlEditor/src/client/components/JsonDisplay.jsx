import React from 'react';
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


const JsonDisplay = ({ json }) => {
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
  return (
    <CodeMirror
      value={JSON.stringify(json, null, 4)}
      options={options}
    />
  );
};

export default JsonDisplay;
