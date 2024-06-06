
function isBalanced(str) {
    // Create a stack to keep track of opening parentheses
    let stack = [];
    
    // Iterate through each character in the string
    for (let char of str) {
        // If the character is an opening parenthesis, push it onto the stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If the character is a closing parenthesis
        else if (char === ')' || char === '}' || char === ']') {
            // If the stack is empty, parentheses are not balanced
            if (stack.length === 0) {
                return false;
            }
            // Pop the top element from the stack
            let top = stack.pop();
            // Check if the popped element matches the current closing parenthesis
            if ((char === ')' && top !== '(') ||
                (char === '}' && top !== '{') ||
                (char === ']' && top !== '[')) {
                return false;
            }
        }
    }
    
    // If the stack is empty, parentheses are balanced
    return stack.length === 0;
}



console.log(isBalanced("{[()]}"));         // true
console.log(isBalanced("{[(])}"))          //false 

