import React from 'react';
import CodeMirrorComponent from 'react-codemirror';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../actions/actions';

import 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint';
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
import 'codemirror-graphql/hint';
import 'codemirror-graphql/lint';
import 'codemirror-graphql/info';
import 'codemirror-graphql/jump';
import 'codemirror-graphql/mode';


const CodeEditor = () => {
  const { query, schema } = useSelector(state => ({
    query: state.query.query,
    schema: state.query.schema,
  }));
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
    lint: {
      schema,
    },
    hintOptions: {
      schema,
    },
  };

  return (
    <div>
      <CodeMirrorComponent
        value={query}
        onChange={currQ => dispatch(updateQuery(currQ))}
        options={options}
      />
      {/* <button onClick={() => dispatch()}>Send Query</button> */}
    </div>
  );
};

export default CodeEditor;
