import React, { useState } from "react";
const CodeMirrorComponent = require('react-codemirror');
require('../../../dist/mode/javascript/javascript');
require('codemirror/mode/javascript/javascript');
require('../../../dist/lib/night.css');
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/lint/lint';
// import 'codemirror-graphql/hint';
// import 'codemirror-graphql/lint';
require('../../../dist/lib/mode.js');


const CodeEditor = () => {
    const [code, updateCode] = useState('');
    return (
        <div>
            <CodeMirrorComponent value={code} onChange={updateCode} options={{lineNumbers: true, mode: 'graphql', theme: 'night'}}/>
            <p>{code}</p>
        </div>
    )
}

export default CodeEditor;