// // compiler/parser.js

// function parser(tokens) {
//     let current = 0;

//     function parseExpression() {
//         const token = tokens[current];
//         if (token.type === 'NUMBER') {
//             current++;
//             return { type: 'Literal', value: token.value };
//         } else if (token.type === 'IDENTIFIER') {
//             current++;
//             return { type: 'Identifier', name: token.value };
//         } else {
//             throw new Error(`Unexpected token: ${token.value}`);
//         }
//     }

//     function parseStatement() {
//         const token = tokens[current];
//         if (token.type === 'IF') {
//             current++; // move past the IF token
//             const condition = parseExpression();
//             const thenBlock = parseBlock();
//             let elseBlock = null;
//             if (tokens[current]?.type === 'ELSE') {
//                 current++;
//                 elseBlock = parseBlock();
//             }
//             return { type: 'IfStatement', condition, thenBlock, elseBlock };
//         }
//         // Handle other statements like assignments, while, etc.
//     }

//     function parseBlock() {
//         // Here you can define how to parse blocks of code
//         // For example, you can gather statements until a closing brace
//     }

//     const statements = [];
//     while (current < tokens.length) {
//         statements.push(parseStatement());
//     }

//     return statements;
// }

// export default parser;
// parser.js

// function parser(tokens) {
//     let current = 0;

//     function parseExpression() {
//         let left = parseTerm();

//         while (current < tokens.length && (tokens[current].type === 'PLUSY' || tokens[current].type === 'MINUSY')) {
//             const operator = tokens[current];
//             current++;
//             const right = parseTerm();
//             left = { type: 'BinaryExpression', operator: operator.type, left, right };
//         }

//         return left;
//     }

//     function parseTerm() {
//         let left = parseFactor();

//         while (current < tokens.length && (tokens[current].type === 'BOOM' || tokens[current].type === 'SLICE')) {
//             const operator = tokens[current];
//             current++;
//             const right = parseFactor();
//             left = { type: 'BinaryExpression', operator: operator.type, left, right };
//         }

//         return left;
//     }

//     function parseFactor() {
//         const token = tokens[current];

//         if (token.type === 'NUMBER') {
//             current++;
//             return { type: 'Literal', value: token.value };
//         } else if (token.type === 'IDENTIFIER') {
//             current++;
//             return { type: 'Identifier', name: token.value };
//         } else if (token.type === 'LEFT_PAREN') {
//             current++;
//             const expr = parseExpression();
//             current++; // Skip right parenthesis
//             return expr;
//         } else {
//             throw new Error(`Unexpected token: ${token.value}`);
//         }
//     }

//     function parseStatement() {
//         const token = tokens[current];

//         if (token.type === 'IDENTIFIER') {
//             const id = token.value;
//             current++; // Skip identifier
//             if (tokens[current]?.type === 'EQUALSIES') {
//                 current++; // Skip '='
//                 const expr = parseExpression();
//                 if (tokens[current]?.type === 'SEMICOLON') {
//                     current++; // Skip ';'
//                 }
//                 return { type: 'Assignment', id, expr };
//             }
//         } else if (token.type === 'IF') {
//             current++; // Skip 'consider this'
//             current++; // Skip '('
//             const condition = parseExpression();
//             current++; // Skip ')'
//             current++; // Skip '{'
//             const thenBlock = [];

//             while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                 thenBlock.push(parseStatement());
//             }

//             current++; // Skip '}'

//             let elseBlock = null;
//             if (tokens[current]?.type === 'ELSE') {
//                 current++; // Skip 'if that fails'
//                 current++; // Skip '{'

//                 elseBlock = [];

//                 while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                     elseBlock.push(parseStatement());
//                 }

//                 current++; // Skip '}'
//             }

//             return { type: 'IfStatement', condition, thenBlock, elseBlock };
//         }
//     }

//     const statements = [];
//     while (current < tokens.length) {
//         statements.push(parseStatement());
//     }

//     return statements;
// }

// function parser(tokens) {
//     let current = 0;

//     function parseExpression() {
//         let left = parseTerm();

//         // Handle comparison operators like '<' (SMALLER-Y) or '>'
//         while (current < tokens.length && (tokens[current].type === 'SMALLER-Y' || tokens[current].type === 'BIGGER-Y')) {
//             const operator = tokens[current];
//             current++;
//             const right = parseTerm();
//             left = { type: 'BinaryExpression', operator: operator.type, left, right };
//         }

//         return left;
//     }

//     function parseTerm() {
//         let left = parseFactor();
//         // Add handling for other operators if necessary

//         return left;
//     }

//     function parseFactor() {
//         const token = tokens[current];

//         if (token.type === 'NUMBER') {
//             current++;
//             return { type: 'Literal', value: token.value };
//         } else if (token.type === 'IDENTIFIER') {
//             current++;
//             return { type: 'Identifier', name: token.value };
//         } else if (token.type === 'LEFT_PAREN') {
//             current++; // Skip '('
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'RIGHT_PAREN') {
//                 current++; // Skip ')'
//             } else {
//                 throw new Error(`Expected closing parenthesis, found: ${tokens[current]?.value}`);
//             }
//             return expr;
//         } else {
//             throw new Error(`Unexpected token: ${token.value}`);
//         }
//     }

//     function parseStatement() {
//         const token = tokens[current];

//         if (token.type === 'VAR') {
//             current++; // Skip 'thing'
//             const id = tokens[current].value; // Variable name
//             current++; // Skip identifier
//             if (tokens[current]?.type === 'EQUALSIES') {
//                 current++; // Skip '='
//                 const expr = parseExpression();
//                 if (tokens[current]?.type === 'SEMICOLON') {
//                     current++; // Skip ';'
//                 }
//                 return { type: 'VariableDeclaration', id, expr };
//             }
//         } else if (token.type === 'IF') {
//             current++; // Skip 'consider this'
//             if (tokens[current]?.type === 'LEFT_PAREN') {
//                 current++; // Skip '('
//                 const condition = parseExpression(); // Parse condition inside '()'
//                 if (tokens[current]?.type === 'RIGHT_PAREN') {
//                     current++; // Skip ')'
//                 } else {
//                     throw new Error(`Expected closing parenthesis in if statement, found: ${tokens[current]?.value}`);
//                 }
//             } else {
//                 throw new Error(`Expected opening parenthesis after 'consider this', found: ${tokens[current]?.value}`);
//             }

//             if (tokens[current]?.type === 'LEFT_BRACE') {
//                 current++; // Skip '{'
//                 const thenBlock = [];
//                 while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                     thenBlock.push(parseStatement());
//                 }
//                 current++; // Skip '}'

//                 let elseBlock = null;
//                 if (tokens[current]?.type === 'ELSE') {
//                     current++; // Skip 'if that fails'
//                     if (tokens[current]?.type === 'LEFT_BRACE') {
//                         current++; // Skip '{'
//                         elseBlock = [];
//                         while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                             elseBlock.push(parseStatement());
//                         }
//                         current++; // Skip '}'
//                     }
//                 }

//                 return { type: 'IfStatement', condition, thenBlock, elseBlock };
//             }
//         } else if (token.type === 'RETURN') {
//             current++; // Skip 'send back'
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'SEMICOLON') {
//                 current++; // Skip ';'
//             }
//             return { type: 'ReturnStatement', expr };
//         } else {
//             throw new Error(`Unexpected token in statement: ${token.value}`);
//         }
//     }

//     const statements = [];
//     while (current < tokens.length) {
//         statements.push(parseStatement());
//     }

//     return statements;
// }

// function parser(tokens) {
//     let current = 0;

//     function parseExpression() {
//         let left = parseTerm();

//         // Handle comparison operators like '<' (SMALLER-Y) or '>'
//         while (current < tokens.length && (tokens[current].type === 'SMALLER-Y' || tokens[current].type === 'BIGGER-Y')) {
//             const operator = tokens[current];
//             current++;
//             const right = parseTerm();
//             left = { type: 'BinaryExpression', operator: operator.value, left, right };
//         }

//         return left;
//     }

//     function parseTerm() {
//         let left = parseFactor();
//         // Add handling for other operators if necessary
//         return left;
//     }

//     function parseFactor() {
//         const token = tokens[current];

//         if (token.type === 'NUMBER') {
//             current++;
//             return { type: 'Literal', value: token.value };
//         } else if (token.type === 'IDENTIFIER') {
//             current++;
//             return { type: 'Identifier', name: token.value };
//         } else if (token.type === 'LEFT_PAREN') {
//             current++; // Skip '('
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'RIGHT_PAREN') {
//                 current++; // Skip ')'
//             } else {
//                 throw new Error(`Expected closing parenthesis, found: ${tokens[current]?.value}`);
//             }
//             return expr;
//         } else {
//             throw new Error(`Unexpected token: ${token.value}`);
//         }
//     }

//     function parseStatement() {
//         const token = tokens[current];

//         if (token.type === 'VAR') {
//             current++; // Skip 'thing'
//             const id = tokens[current].value; // Variable name
//             current++; // Skip identifier
//             if (tokens[current]?.type === 'EQUALSIES') {
//                 current++; // Skip '='
//                 const expr = parseExpression();
//                 if (tokens[current]?.type === 'SEMICOLON') {
//                     current++; // Skip ';'
//                 }
//                 return { type: 'VariableDeclaration', id, expr };
//             } else {
//                 throw new Error(`Expected '=' after variable name, found: ${tokens[current]?.value}`);
//             }
//         } else if (token.type === 'IF') {
//             current++; // Skip 'consider this'
//             if (tokens[current]?.type === 'LEFT_PAREN') {
//                 current++; // Skip '('
//                 const condition = parseExpression(); // Parse condition inside '()'
//                 if (tokens[current]?.type === 'RIGHT_PAREN') {
//                     current++; // Skip ')'
//                 } else {
//                     throw new Error(`Expected closing parenthesis in if statement, found: ${tokens[current]?.value}`);
//                 }
//             } else {
//                 throw new Error(`Expected opening parenthesis after 'consider this', found: ${tokens[current]?.value}`);
//             }

//             if (tokens[current]?.type === 'LEFT_BRACE') {
//                 current++; // Skip '{'
//                 const thenBlock = [];
//                 while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                     thenBlock.push(parseStatement());
//                 }
//                 current++; // Skip '}'

//                 let elseBlock = null;
//                 if (tokens[current]?.type === 'ELSE') {
//                     current++; // Skip 'if that fails'
//                     if (tokens[current]?.type === 'LEFT_BRACE') {
//                         current++; // Skip '{'
//                         elseBlock = [];
//                         while (tokens[current]?.type !== 'RIGHT_BRACE') {
//                             elseBlock.push(parseStatement());
//                         }
//                         current++; // Skip '}'
//                     } else {
//                         throw new Error(`Expected '{' after 'if that fails', found: ${tokens[current]?.value}`);
//                     }
//                 }

//                 return { type: 'IfStatement', condition, thenBlock, elseBlock };
//             } else {
//                 throw new Error(`Expected '{' after if statement, found: ${tokens[current]?.value}`);
//             }
//         } else if (token.type === 'RETURN') {
//             current++; // Skip 'send back'
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'SEMICOLON') {
//                 current++; // Skip ';'
//             }
//             return { type: 'ReturnStatement', expr };
//         } else {
//             throw new Error(`Unexpected token in statement: ${token.value}`);
//         }
//     }

//     const statements = [];
//     while (current < tokens.length) {
//         statements.push(parseStatement());
//     }

//     return statements;
// }



// function parser(tokens) {
//     let current = 0;

//     function parseExpression() {
//         let left = parseTerm();

//         // Handle comparison operators like '<' (SMALLER-Y) or '>'
//         while (current < tokens.length && (tokens[current].type === 'SMALLER-Y' || tokens[current].type === 'BIGGER-Y')) {
//             const operator = tokens[current];
//             current++;
//             const right = parseTerm();
//             left = { type: 'BinaryExpression', operator: operator.value, left, right };
//         }

//         return left;
//     }

//     function parseTerm() {
//         let left = parseFactor();
//         // Add handling for other operators if necessary
//         return left;
//     }

//     function parseFactor() {
//         const token = tokens[current];

//         if (token.type === 'NUMBER') {
//             current++;
//             return { type: 'Literal', value: token.value };
//         } else if (token.type === 'IDENTIFIER') {
//             current++;
//             return { type: 'Identifier', name: token.value };
//         } else if (token.type === 'LEFT_PAREN') {
//             current++; // Skip '('
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'RIGHT_PAREN') {
//                 current++; // Skip ')'
//             } else {
//                 throw new Error(`Expected closing parenthesis, found: ${tokens[current]?.value}`);
//             }
//             return expr;
//         } else {
//             throw new Error(`Unexpected token: ${token.value}`);
//         }
//     }

//     function parseStatement() {
//         const token = tokens[current];

//         if (token.type === 'VAR') {
//             current++; // Skip 'thing'
//             const id = tokens[current].value; // Variable name
//             current++; // Skip identifier
//             if (tokens[current]?.type === 'EQUALSIES') {
//                 current++; // Skip '='
//                 const expr = parseExpression();
//                 if (tokens[current]?.type === 'SEMICOLON') {
//                     current++; // Skip ';'
//                 }
//                 return { type: 'VariableDeclaration', id, expr };
//             } else {
//                 throw new Error(`Expected '=' after variable name, found: ${tokens[current]?.value}`);
//             }
//         } else if (token.type === 'IF') {
//             current++; // Skip 'consider this'
//             if (tokens[current]?.type === 'LEFT_PAREN') {
//                 current++; // Skip '('
//                 const condition = parseExpression(); // Parse condition inside '()'
//                 if (tokens[current]?.type === 'RIGHT_PAREN') {
//                     current++; // Skip ')'
//                 } else {
//                     throw new Error(`Expected closing parenthesis in if statement, found: ${tokens[current]?.value}`);
//                 }

//                 if (tokens[current]?.type === 'LEFT_BRACE') {
//                     current++; // Skip '{'
//                     const thenBlock = [];
//                     while (tokens[current]?.type !== 'RIGHT_BRACE' && current < tokens.length) {
//                         thenBlock.push(parseStatement());
//                     }
//                     current++; // Skip '}'

//                     let elseBlock = null;
//                     // Check if the next token is 'if that fails'
//                     if (tokens[current]?.type === 'IF') {
//                         current++; // Skip 'if that fails'
//                         if (tokens[current]?.type === 'LEFT_BRACE') {
//                             current++; // Skip '{'
//                             elseBlock = [];
//                             while (tokens[current]?.type !== 'RIGHT_BRACE' && current < tokens.length) {
//                                 elseBlock.push(parseStatement());
//                             }
//                             current++; // Skip '}'
//                         } else {
//                             throw new Error(`Expected '{' after 'if that fails', found: ${tokens[current]?.value}`);
//                         }
//                     }

//                     return { type: 'IfStatement', condition, thenBlock, elseBlock };
//                 } else {
//                     throw new Error(`Expected '{' after if statement, found: ${tokens[current]?.value}`);
//                 }
//             } else {
//                 throw new Error(`Expected opening parenthesis after 'consider this', found: ${tokens[current]?.value}`);
//             }
//         } else if (token.type === 'RETURN') {
//             current++; // Skip 'send back'
//             const expr = parseExpression();
//             if (tokens[current]?.type === 'SEMICOLON') {
//                 current++; // Skip ';'
//             }
//             return { type: 'ReturnStatement', expr };
//         } else {
//             throw new Error(`Unexpected token in statement: ${token.value}`);
//         }
//     }

//     const statements = [];
//     while (current < tokens.length) {
//         statements.push(parseStatement());
//     }

//     return statements;
// }


function parser(tokens) {
    let current = 0;

    function parseExpression() {
        let left = parseTerm();

        // Handle comparison operators like '<' (SMALLER-Y) or '>'
        while (current < tokens.length && (tokens[current].type === 'SMALLER-Y' || tokens[current].type === 'BIGGER-Y')) {
            const operator = tokens[current];
            current++;
            const right = parseTerm();
            left = { type: 'BinaryExpression', operator: operator.value, left, right };
        }

        return left;
    }

    function parseTerm() {
        let left = parseFactor();

        // Handle addition and subtraction (plusy and minusy)
        while (current < tokens.length && (tokens[current].type === 'PLUSY' || tokens[current].type === 'MINUSY')) {
            const operator = tokens[current];
            current++;
            const right = parseFactor(); // Call parseFactor for right side
            left = { type: 'BinaryExpression', operator: operator.value, left, right };
        }

        return left;
    }

    function parseFactor() {
        const token = tokens[current];

        if (token.type === 'NUMBER') {
            current++;
            return { type: 'Literal', value: token.value };
        } else if (token.type === 'IDENTIFIER') {
            current++;
            return { type: 'Identifier', name: token.value };
        } else if (token.type === 'LEFT_PAREN') {
            current++; // Skip '('
            const expr = parseExpression();
            if (tokens[current]?.type === 'RIGHT_PAREN') {
                current++; // Skip ')'
            } else {
                throw new Error(`Expected closing parenthesis, found: ${tokens[current]?.value}`);
            }
            return expr;
        } else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }

    function parseAssignment() {
        const token = tokens[current];

        if (token.type === 'IDENTIFIER') {
            const id = token.value; // Variable name
            current++; // Skip identifier

            if (tokens[current]?.type === 'EQUALSIES') {
                current++; // Skip '='
                const expr = parseExpression(); // Parse the right-hand side expression
                if (tokens[current]?.type === 'SEMICOLON') {
                    current++; // Skip ';'
                }
                return { type: 'AssignmentExpression', id, expr };
            } else {
                throw new Error(`Expected '=' after variable name, found: ${tokens[current]?.value}`);
            }
        }
    }

    function parseStatement() {
        const token = tokens[current];

        if (token.type === 'VAR') {
            current++; // Skip 'thing'
            const id = tokens[current].value; // Variable name
            current++; // Skip identifier
            if (tokens[current]?.type === 'EQUALSIES') {
                current++; // Skip '='
                const expr = parseExpression();
                if (tokens[current]?.type === 'SEMICOLON') {
                    current++; // Skip ';'
                }
                return { type: 'VariableDeclaration', id, expr };
            } else {
                throw new Error(`Expected '=' after variable name, found: ${tokens[current]?.value}`);
            }
        } else if (token.type === 'IF') {
            current++; // Skip 'consider this'
            if (tokens[current]?.type === 'LEFT_PAREN') {
                current++; // Skip '('
                const condition = parseExpression(); // Parse condition inside '()'
                if (tokens[current]?.type === 'RIGHT_PAREN') {
                    current++; // Skip ')'
                } else {
                    throw new Error(`Expected closing parenthesis in if statement, found: ${tokens[current]?.value}`);
                }

                if (tokens[current]?.type === 'LEFT_BRACE') {
                    current++; // Skip '{'
                    const thenBlock = [];
                    while (tokens[current]?.type !== 'RIGHT_BRACE' && current < tokens.length) {
                        thenBlock.push(parseStatement());
                    }
                    current++; // Skip '}'

                    let elseBlock = null;
                    // Check if the next token is 'if that fails'
                    if (tokens[current]?.type === 'ELSE') {
                        current++; // Skip 'if that fails'
                        if (tokens[current]?.type === 'LEFT_BRACE') {
                            current++; // Skip '{'
                            elseBlock = [];
                            while (tokens[current]?.type !== 'RIGHT_BRACE' && current < tokens.length) {
                                elseBlock.push(parseStatement());
                            }
                            current++; // Skip '}'
                        } else {
                            throw new Error(`Expected '{' after 'if that fails', found: ${tokens[current]?.value}`);
                        }
                    }

                    return { type: 'IfStatement', condition, thenBlock, elseBlock };
                } else {
                    throw new Error(`Expected '{' after if statement, found: ${tokens[current]?.value}`);
                }
            } else {
                throw new Error(`Expected opening parenthesis after 'consider this', found: ${tokens[current]?.value}`);
            }
        } else if (token.type === 'RETURN') {
            current++; // Skip 'send back'
            const expr = parseExpression();
            if (tokens[current]?.type === 'SEMICOLON') {
                current++; // Skip ';'
            }
            return { type: 'ReturnStatement', expr };
        } else if (token.type === 'IDENTIFIER') {
            return parseAssignment(); // Parse assignment expression
        } else {
            throw new Error(`Unexpected token in statement: ${token.value}`);
        }
    }

    const statements = [];
    while (current < tokens.length) {
        statements.push(parseStatement());
    }

    return statements;
}


export default parser;
