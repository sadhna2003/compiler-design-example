// compiler/lexer.js

const keywords = {
    'consider this': 'IF',
    'if that fails': 'ELSE',
    'keep doing': 'WHILE',
    'each time': 'FOR',
    'send back': 'RETURN',
    'thing': 'VAR',
    'yep': 'TRUE',
    'nope': 'FALSE',
    'cut off': 'BREAK',
    'carry on': 'CONTINUE',
};

const operators = {
    '+': 'PLUSY',
    '-': 'MINUSY',
    '*': 'BOOM',
    '/': 'SLICE',
    '=': 'EQUALSIES',
    '==': 'SAME-SAME',
    '!=': 'NUH-UH',
    '>': 'BIGGER-Y',
    '<': 'SMALLER-Y',
    '>=': 'BIG-OR-SAME',
    '<=': 'SMALL-OR-SAME',
    '&&': 'AND-ALSO',
    '||': 'EITHER-OR',
    '!': 'NOPE',
};

// function lexer(input) {
//     const tokens = [];
//     const regex = /\s*(=>|{|}|;|,|[A-Za-z]+|\d+|[-+*\/=<>!&|]+)\s*/g;
//     let result;

//     while ((result = regex.exec(input)) !== null) {
//         const token = result[1];
//         if (keywords[token]) {
//             tokens.push({ type: keywords[token], value: token });
//         } else if (operators[token]) {
//             tokens.push({ type: operators[token], value: token });
//         } else if(token == ";") {
//             tokens.push({ type: 'SEMICOLON', value: token });
//         } else if(token == "{") {
//             tokens.push({ type: 'LEFT_BRACE', value: token });
//         } else if(token == "}") {
//             tokens.push({ type: 'RIGHT_BRACE', value: token });  
//         } else if (!isNaN(token)) {
//             tokens.push({ type: 'NUMBER', value: Number(token) });
//         } else if (/[A-Za-z]+/.test(token)) {
//             tokens.push({ type: 'IDENTIFIER', value: token });
//         } else {
//             throw new Error(`Unknown token: ${token}`);
//         }
//     }

//     return tokens;
// }

//second
// function lexer(input) {
//     const tokens = [];
//     const regex = /\s*(=>|{|}|;|\(|\)|[A-Za-z]+(?: [A-Za-z]+)*|\d+|[-+*\/=<>!&|]+)\s*/g;
//     let result;

//     while ((result = regex.exec(input)) !== null) {
//         const token = result[1];

//         if (keywords[token]) {
//             tokens.push({ type: keywords[token], value: token });
//         } else if (operators[token]) {
//             tokens.push({ type: operators[token], value: token });
//         } else if (token === '{') {
//             tokens.push({ type: 'LEFT_BRACE', value: token });
//         } else if (token === '}') {
//             tokens.push({ type: 'RIGHT_BRACE', value: token });
//         } else if (token === ';') {
//             tokens.push({ type: 'SEMICOLON', value: token });
//         } else if (token === '(') {
//             tokens.push({ type: 'LEFT_PAREN', value: token });
//         } else if (token === ')') {
//             tokens.push({ type: 'RIGHT_PAREN', value: token });
//         } else if (!isNaN(token)) {
//             tokens.push({ type: 'NUMBER', value: Number(token) });
//         } else if (/[A-Za-z]+/.test(token)) {
//             tokens.push({ type: 'IDENTIFIER', value: token });
//         } else {
//             throw new Error(`Unknown token: ${token}`);
//         }
//     }

//     return tokens;
// }
// function lexer(input) {
//     const tokens = [];
//     let current = 0;

//     while (current < input.length) {
//         let char = input[current];

//         // Ignore whitespace
//         if (/\s/.test(char)) {
//             current++;
//             continue;
//         }

//         // Multi-word keywords
//         if (input.slice(current, current + 13) === 'consider this') {
//             tokens.push({ type: 'IF', value: 'consider this' });
//             current += 13;
//             continue;
//         } else if (input.slice(current, current + 13) === 'if that fails') {
//             tokens.push({ type: 'ELSE', value: 'if that fails' });
//             current += 13;
//             continue;
//         } else if (input.slice(current, current + 10) === 'send back') {
//             tokens.push({ type: 'RETURN', value: 'send back' });
//             current += 10;
//             continue;
//         }

//         // Handle single characters and symbols
//         if (operators[char]) {
//             tokens.push({ type: operators[char], value: char });
//             current++;
//             continue;
//         }

//         // Handle numbers
//         if (/[0-9]/.test(char)) {
//             let value = '';
//             while (/[0-9]/.test(char)) {
//                 value += char;
//                 char = input[++current];
//             }
//             tokens.push({ type: 'NUMBER', value: Number(value) });
//             continue;
//         }

//         // Handle identifiers (e.g., variable names)
//         if (/[a-zA-Z]/.test(char)) {
//             let value = '';
//             while (/[a-zA-Z]/.test(char)) {
//                 value += char;
//                 char = input[++current];
//             }

//             // Check for single-word keywords like 'plusy' and 'minusy'
//             if (keywords[value]) {
//                 tokens.push({ type: keywords[value], value });
//             } else {
//                 tokens.push({ type: 'IDENTIFIER', value });
//             }
//             continue;
//         }

//         // Handle symbols like parentheses and braces
//         if (char === '(') {
//             tokens.push({ type: 'LEFT_PAREN', value: char });
//             current++;
//             continue;
//         } else if (char === ')') {
//             tokens.push({ type: 'RIGHT_PAREN', value: char });
//             current++;
//             continue;
//         } else if (char === '{') {
//             tokens.push({ type: 'LEFT_BRACE', value: char });
//             current++;
//             continue;
//         } else if (char === '}') {
//             tokens.push({ type: 'RIGHT_BRACE', value: char });
//             current++;
//             continue;
//         } else if (char === ';') {
//             tokens.push({ type: 'SEMICOLON', value: char });
//             current++;
//             continue;
//         }

//         throw new Error(`Unknown token: ${char}`);
//     }

//     return tokens;
// }

// function lexer(input) {
//     const tokens = [];
//     let current = 0;

//     while (current < input.length) {
//         let char = input[current];

//         // Ignore whitespace
//         if (/\s/.test(char)) {
//             current++;
//             continue;
//         }

//         // Multi-word keywords
//         const remainingInput = input.slice(current);
//         if (remainingInput.startsWith('consider this')) {
//             tokens.push({ type: 'IF', value: 'consider this' });
//             current += 13;
//             continue;
//         } else if (remainingInput.startsWith('if that fails')) {
//             tokens.push({ type: 'ELSE', value: 'if that fails' });
//             current += 13;
//             continue;
//         } else if (remainingInput.startsWith('send back')) {
//             tokens.push({ type: 'RETURN', value: 'send back' });
//             current += 10;
//             continue;
//         }

//         // Handle single characters and symbols
//         if (operators[char]) {
//             tokens.push({ type: operators[char], value: char });
//             current++;
//             continue;
//         }

//         // Handle numbers
//         if (/[0-9]/.test(char)) {
//             let value = '';
//             while (/[0-9]/.test(char)) {
//                 value += char;
//                 char = input[++current];
//             }
//             tokens.push({ type: 'NUMBER', value: Number(value) });
//             continue;
//         }

//         // Handle identifiers (e.g., variable names)
//         if (/[a-zA-Z]/.test(char)) {
//             let value = '';
//             while (/[a-zA-Z]/.test(char)) {
//                 value += char;
//                 char = input[++current];
//             }

//             // Check for single-word keywords like 'plusy' and 'minusy'
//             if (keywords[value]) {
//                 tokens.push({ type: keywords[value], value });
//             } else {
//                 tokens.push({ type: 'IDENTIFIER', value });
//             }
//             continue;
//         }

//         // Handle symbols like parentheses and braces
//         if (char === '(') {
//             tokens.push({ type: 'LEFT_PAREN', value: char });
//             current++;
//             continue;
//         } else if (char === ')') {
//             tokens.push({ type: 'RIGHT_PAREN', value: char });
//             current++;
//             continue;
//         } else if (char === '{') {
//             tokens.push({ type: 'LEFT_BRACE', value: char });
//             current++;
//             continue;
//         } else if (char === '}') {
//             tokens.push({ type: 'RIGHT_BRACE', value: char });
//             current++;
//             continue;
//         } else if (char === ';') {
//             tokens.push({ type: 'SEMICOLON', value: char });
//             current++;
//             continue;
//         }

//         throw new Error(`Unknown token: ${char}`);
//     }

//     return tokens;
// }


function lexer(input) {
    const tokens = [];
    let current = 0;

    while (current < input.length) {
        let char = input[current];

        // Ignore whitespace
        if (/\s/.test(char)) {
            current++;
            continue;
        }

        // Multi-word keywords
        const remainingInput = input.slice(current);
        if (remainingInput.startsWith('consider this')) {
            tokens.push({ type: 'IF', value: 'consider this' });
            current += 13;
            continue;
        } else if (remainingInput.startsWith('if that fails')) {
            tokens.push({ type: 'ELSE', value: 'if that fails' });
            current += 13;
            continue;
        } else if (remainingInput.startsWith('send back')) {
            tokens.push({ type: 'RETURN', value: 'send back' });
            current += 10;
            continue;
        }

        // Handle operators 'plusy' and 'minusy'
        if (remainingInput.startsWith('plusy')) {
            tokens.push({ type: 'PLUSY', value: 'plusy' });
            current += 5;
            continue;
        } else if (remainingInput.startsWith('minusy')) {
            tokens.push({ type: 'MINUSY', value: 'minusy' });
            current += 6;
            continue;
        }

        // Handle single characters and symbols
        if (operators[char]) {
            tokens.push({ type: operators[char], value: char });
            current++;
            continue;
        }

        // Handle numbers
        if (/[0-9]/.test(char)) {
            let value = '';
            while (/[0-9]/.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({ type: 'NUMBER', value: Number(value) });
            continue;
        }

        // Handle identifiers (e.g., variable names)
        if (/[a-zA-Z]/.test(char)) {
            let value = '';
            while (/[a-zA-Z]/.test(char)) {
                value += char;
                char = input[++current];
            }

            // Check for single-word keywords like 'plusy' and 'minusy'
            if (keywords[value]) {
                tokens.push({ type: keywords[value], value });
            } else {
                tokens.push({ type: 'IDENTIFIER', value });
            }
            continue;
        }

        // Handle symbols like parentheses and braces
        if (char === '(') {
            tokens.push({ type: 'LEFT_PAREN', value: char });
            current++;
            continue;
        } else if (char === ')') {
            tokens.push({ type: 'RIGHT_PAREN', value: char });
            current++;
            continue;
        } else if (char === '{') {
            tokens.push({ type: 'LEFT_BRACE', value: char });
            current++;
            continue;
        } else if (char === '}') {
            tokens.push({ type: 'RIGHT_BRACE', value: char });
            current++;
            continue;
        } else if (char === ';') {
            tokens.push({ type: 'SEMICOLON', value: char });
            current++;
            continue;
        }

        throw new Error(`Unknown token: ${char}`);
    }

    return tokens;
}

export default lexer;


