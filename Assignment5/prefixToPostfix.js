function isOperator(X){
    switch(X){
        case '+':
        case '-':
        case '*':
            return true;        
    }
    return false;
}

function prefixToPostfix(expr){
    let stack=[];
    for(let i=exp.length-1;i>=0;i--){
       
        if(isOperator(expr[i])){
            let op1=stack[stack.length-1];
            stack.pop();
            let op2=stack[stack.length-1];
            stack.pop();

            let temp=op1 + op2 + expr[i];
            stack.push(temp);
        }else{
            stack.push(expr[i]+"");
        }
    }
    return stack[stack.length-1];
}


let exp="*+AB-CD";
console.log("Postfix : " +prefixToPostfix(exp));