import React from 'react';
import CodeMirrorComponent from 'react-codemirror';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery, getQueryResponse } from '../actions/actions';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/search/search';
import 'codemirror/addon/search/searchcursor';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/keymap/sublime';
import 'codemirror-graphql/results/mode';
import 'codemirror/addon/fold/brace-fold';

const ResponseViewer = () => {
  const response = useSelector(state => state.response.currResponse);
  return (
    <p>{JSON.stringify(response, null, 4)}</p>
  );
};

export default ResponseViewer;
