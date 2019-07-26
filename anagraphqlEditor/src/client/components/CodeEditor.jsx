import React, { useState } from "react";
const CodeMirrorComponent = require('react-codemirror');

const CodeEditor = () => {
    const [code, updateCode] = useState('');
    return (
        <div>
            <CodeMirrorComponent value={code} onChange={updateCode} options={{lineNumbers: true, theme: "night"}}/>
            <p>{code}</p>
        </div>
    )
}

export default CodeEditor;