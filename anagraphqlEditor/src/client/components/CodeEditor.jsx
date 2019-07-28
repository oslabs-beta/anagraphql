import React, { useState } from "react";
const CodeMirrorComponent = require('react-codemirror');
import '../utility/codemirror/codemirror.js'
import '../utility/codemirror/codemirror.css'
import'../utility/codemirror/mode.js';
// import 'codemirror/addon/hint/show-hint';
// import 'codemirror/addon/lint/lint';
// import 'codemirror-graphql/hint';
// import 'codemirror-graphql/lint';


const CodeEditor = () => {
    const [code, updateCode] = useState('');
    return (
        <div>
            <CodeMirrorComponent value={code} onChange={updateCode} options={{lineNumbers: true, mode: 'graphql'}}/>
            <p>{code}</p>
        </div>
    )
}

export default CodeEditor;