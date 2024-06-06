
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) return "Underflow";
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      var str = "";
      for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
      return str;
    }
  }
  
  function isOperator(c) {
    return ['+', '-', '*', '/', '^'].includes(c);
  }
  
  function precedence(op) {
    switch (op) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      case '^':
        return 3;
    }
    return 0;
  }
  
  function infixToPostfix(infix) {
    let stack = new Stack();
    let result = "";
  
    for (let i = 0; i < infix.length; i++) {
      let c = infix[i];
  
      // If the character is an operand, add it to output
      if (/[a-zA-Z0-9]/.test(c)) {
        result += c;
      }
      // If the character is '(', push it to the stack
      else if (c === '(') {
        stack.push(c);
      }
      // If the character is ')', pop and output from the stack
      // until an '(' is encountered
      else if (c === ')') {
        while (!stack.isEmpty() && stack.peek() !== '(') {
          result += stack.pop();
        }
        stack.pop();
      }
      // An operator is encountered
      else {
        while (!stack.isEmpty() && precedence(c) <= precedence(stack.peek())) {
          result += stack.pop();
        }
        stack.push(c);
      }
    }
  
    // Pop all the operators from the stack
    while (!stack.isEmpty()) {
      result += stack.pop();
    }
  
    return result;
  }
  
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  function replaceBrackets(infix) {
    let result = "";
    for (let i = 0; i < infix.length; i++) {
      if (infix[i] === '(') {
        result += ')';
      } else if (infix[i] === ')') {
        result += '(';
      } else {
        result += infix[i];
      }
    }
    return result;
  }
  
  function infixToPrefix(infix) {
    // Step 1: Reverse the infix expression
    let reversedExpression = reverseString(infix);
  
    // Step 2: Replace '(' with ')' and vice versa
    let modifiedExpression = replaceBrackets(reversedExpression);
  
    // Step 3: Obtain the postfix expression of the modified expression
    let postfixExpression = infixToPostfix(modifiedExpression);
  
    // Step 4: Reverse the postfix expression to get the prefix expression
    let prefixExpression = reverseString(postfixExpression);
  
    return prefixExpression;
  }
  
  
  let infix="a+b*(c^d-e)^(f+g*h)-i";
  console.log("Prefix : "+infixToPrefix(infix));
  



