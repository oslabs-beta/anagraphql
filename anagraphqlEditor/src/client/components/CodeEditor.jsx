import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../actions/actions';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/keymap/sublime';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/info';
import 'codemirror-graphql/jump';
import 'codemirror-graphql/mode';

const CodeEditor = ({ hasErrors, setErrors, prettifyQuery }) => {
  const AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/;

  const { query, schema } = useSelector(state => ({
    query: state.query.query,
    schema: state.query.schema,
  }));
  // const [hasErrors, setErrors] = useState(true);
  const dispatch = useDispatch();
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
    mode: 'graphql',
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
    lint: {
      schema,
    },
    hintOptions: {
      schema,
      closeOnUnfocus: false,
      completeSingle: false,
    },
    extraKeys: {
      'Alt-P': () => {
        if (!hasErrors) prettifyQuery();
      },
    },
    theme: 'default',
  };


  return (
    <div>
      <CodeMirror
        value={query}
        onKeyUp={(editor, event) => {
          if (AUTO_COMPLETE_AFTER_KEY.test(event.key)) {
            editor.execCommand('autocomplete');
          }
        }}
        onBeforeChange={(editor, data, value) => dispatch(updateQuery(value))}
        onUpdate={editor => setErrors(editor.state.lint.marked.length !== 0)}
        options={options}
      />

    </div>
  );
};

export default CodeEditor;
