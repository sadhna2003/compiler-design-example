"use client"
import React, { useState, useEffect } from "react";
import CodeEditor from "@/components/CodeEditor";
import Image from "next/image";

export default function Home() {
  const [output, setOutput] = useState('');
  const [tokens, setTokens] = useState([]);
  const [ast, setAst] = useState(null);
  const handleRunCode = async (code: any) => {
    const response = await fetch('/api/run', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    const result = await response.json();
    if (response.ok) {
      console.log('Output:', result);
      setOutput(result.output);
      setTokens(result.tokens);
      setAst(result.ast);
    } else {
      console.error('Error:', result.error);
    }
  };


  console.log(output, "output");
  return (
    <div className=" min-h-screen  w-full">
      <h1 className="text-3xl font-bold">  Grammar <br /></h1>
      <div className=" bg-black text-white px-4">
        <code className="text-lg font-bold">
          Statement   ::= Assignment | IfStatement <br />
          Assignment  ::= Identifier '=' Expression ';'<br />
          IfStatement ::= 'consider this' '(' Expression ')' '{' Statement* '}' ('if that fails' '{' Statement* '}')?<br />
          Expression   ::= Term (('plusy' | 'minusy') Term)*<br />
          Term        ::= Factor (('boomy' | 'slicey') Factor)*<br />
          Factor      ::= Number | Identifier | '(' Expression ')'<br />
          Identifier  ::= [a-zA-Z_][a-zA-Z0-9_]* // variable names<br />
          Number      ::= [0-9]+<br />

          <div>
        
          </div>
        </code>
      </div>
      <h1 className="text-3xl font-bold mt-12">Online Toy Compiler</h1>
      <CodeEditor onRun={handleRunCode} />
      <h2>Output:</h2>
      <pre className="text-lg font-bold">{output}</pre>
      <div className="flex flex-row gap-4 w-full justify-evenly">
        <div className="w-1/2 ">
          <h2>Tokens:</h2>
          <pre className="text-lg font-bold">{JSON.stringify(tokens, null, 2)}</pre>
        </div>
        <div className="w-1/2">
          <h2>AST:</h2>
          <pre className="text-lg font-bold">{JSON.stringify(ast, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
