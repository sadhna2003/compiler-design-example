// compiler/interpreter.js

// function interpreter(ast) {
//     const environment = {}; // to store variables and their values

//     function evaluate(node) {
//         switch (node.type) {
//             case 'IfStatement':
//                 if (evaluate(node.condition)) {
//                     return evaluate(node.thenBlock);
//                 } else if (node.elseBlock) {
//                     return evaluate(node.elseBlock);
//                 }
//                 break;
//             case 'Literal':
//                 return node.value;
//             case 'Identifier':
//                 return environment[node.name];
//             // Add more cases for other AST nodes
//         }
//     }

//     for (const statement of ast) {
//         evaluate(statement);
//     }
// }

// function interpreter(ast) {
//     const environment = {}; // to store variables and their values

//     function evaluate(node) {
//         switch (node.type) {
//             case 'VariableDeclaration':
//                 // Initialize the variable in the environment
//                 environment[node.id] = evaluate(node.expr);
//                 break;
//             case 'IfStatement':
//                 if (evaluate(node.condition)) {
//                     node.thenBlock.forEach(evaluate); // Evaluate the thenBlock
//                 } else if (node.elseBlock) {
//                     node.elseBlock.forEach(evaluate); // Evaluate the elseBlock
//                 }
//                 break;
//             case 'BinaryExpression':
//                 const left = evaluate(node.left);
//                 const right = evaluate(node.right);
//                 switch (node.operator) {
//                     case 'plusy':
//                         return left + right;
//                     case 'minusy':
//                         return left - right;
//                     case '<':
//                         return left < right;
//                     default:
//                         throw new Error(`Unknown operator: ${node.operator}`);
//                 }
//             case 'Literal':
//                 return node.value;
//             case 'Identifier':
//                 return environment[node.name]; // Return the variable's value
//             case 'AssignmentExpression':
//                 // Assign the evaluated value to the variable in the environment
//                 environment[node.id] = evaluate(node.expr);
//                 break;
//             case 'ReturnStatement':
//                 // Return the value and print it
//                 const returnValue = evaluate(node.expr);
//                 console.log(returnValue,"return"); // Print the final value of 'count'
//                 return returnValue; // Return the value (optional)
//             default:
//                 throw new Error(`Unknown node type: ${node.type}`);
//         }
//     }

//     for (const statement of ast) {
//         evaluate(statement);
//     }
// }
// compiler/interpreter.js

function interpreter(ast) {
    const environment = {}; // to store variables and their values
    let finalValue; // to hold the final return value

    function evaluate(node) {
        switch (node.type) {
            case 'VariableDeclaration':
                // Initialize the variable in the environment
                environment[node.id] = evaluate(node.expr);
                break;
            case 'IfStatement':
                if (evaluate(node.condition)) {
                    node.thenBlock.forEach(evaluate); // Evaluate the thenBlock
                } else if (node.elseBlock) {
                    node.elseBlock.forEach(evaluate); // Evaluate the elseBlock
                }
                break;
            case 'BinaryExpression':
                const left = evaluate(node.left);
                const right = evaluate(node.right);
                switch (node.operator) {
                    case 'plusy':
                        return left + right;
                    case 'minusy':
                        return left - right;
                    case '<':
                        return left < right;
                    default:
                        throw new Error(`Unknown operator: ${node.operator}`);
                }
            case 'Literal':
                return node.value;
            case 'Identifier':
                return environment[node.name]; // Return the variable's value
            case 'AssignmentExpression':
                // Assign the evaluated value to the variable in the environment
                environment[node.id] = evaluate(node.expr);
                break;
            case 'ReturnStatement':
                // Evaluate the expression and store it as final value
                finalValue = evaluate(node.expr);
                break; // Do not return anything; the final value will be captured
            default:
                throw new Error(`Unknown node type: ${node.type}`);
        }
    }

    for (const statement of ast) {
        evaluate(statement);
    }

    return finalValue; // Return the final value after evaluating all statements
}

// Exporting the interpreter
export default interpreter;

// export default interpreter;
