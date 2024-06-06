
function isOperand(x){
    return(x>='a' && x<='z')||(x>='A' && x<='Z');
}

function postfixToInfix(postfix){
    let stack=[];
    for(let i=0;i<postfix.length;i++){
        if(isOperand(postfix[i])){
            stack.push(postfix[i]+"");
        }
        else{
            let op1 = stack[stack.length-1];
            stack.pop();
            let op2 = stack[stack.length-1];
            stack.pop();
            stack.push("(" + op2 + postfix[i] +
                    op1 + ")");
        }
    }
    return stack[stack.length-1];
}

let postfix="AB+CD-*";
console.log("Infix : " +postfixToInfix(postfix));