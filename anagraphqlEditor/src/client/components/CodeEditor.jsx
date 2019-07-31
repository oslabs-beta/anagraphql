import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery, getQueryResponse, createAnagraph } from '../actions/actions';
import anagraphCreator from '../utility/anagraphCreator';

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

const CodeEditor = () => {
  const AUTO_COMPLETE_AFTER_KEY = /^[a-zA-Z0-9_@(]$/;

  const { query, schema } = useSelector(state => ({
    query: state.query.query,
    schema: state.query.schema,
  }));
  const [hasErrors, setErrors] = useState(true);
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
    theme: 'default',
  };

  const handleQuery = () => {
    dispatch(getQueryResponse(query));
    const anagraph = anagraphCreator(query);
    dispatch(createAnagraph(anagraph));
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
      <button type="button" onClick={handleQuery} disabled={hasErrors} style={{cursor: 'grab'}}>Send Query</button>
    </div>
  );
};

export default CodeEditor;
