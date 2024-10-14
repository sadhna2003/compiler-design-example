
import { NextResponse } from 'next/server';
import lexer from '../../../utils/lexer';
import parser from '../../../utils/parser';
import interpreter from '../../../utils/interpreter';

export async function POST(request) {
    try {
        const { code } = await request.json();  // Correct the reference to request.json()
        
        // Run lexer, parser, and interpreter
        const tokens = lexer(code);
        console.log(tokens,"token here");
        const ast = parser(tokens);
        console.log(ast,"ast here");
        const output = interpreter(ast);

        // Return the result as JSON
        return NextResponse.json({ tokens, ast, output });
    } catch (error) {
        // Return error response if something goes wrong
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}