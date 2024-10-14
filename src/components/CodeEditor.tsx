'use client'; // This component is client-side

import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css'; // You can choose a theme

const CodeEditor = ({ onRun }: any) => {
    const [code, setCode] = useState(
        `
        // example
        // thing count = 0;

        // consider this (count < 5) {
        //     count = count plusy 1;
        // } if that fails {
        //     count = count minusy 1;
        // }
        
        // send back count;
        `
    );

    const handleRun = () => {
        onRun(code);
    };

    return (
        <div className="flex flex-col gap-4">
            <CodeMirror
                value={code}
                options={{
                    mode: 'text/x-javascript',
                    theme: 'material',
                    lineNumbers: true,
                    autoCloseBrackets: true,
                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
            />
            <button onClick={handleRun} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-24">Run</button>
        </div>
    );
};

export default CodeEditor;
