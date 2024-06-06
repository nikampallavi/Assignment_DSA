function isOperator(X){
    switch(X){
        case '+':
        case '-':
        case '*':
            return true;        
    }
    return false;
}

function prefixToInfix(str){
    let stack=[];
    for(let i=str.length-1;i>=0;i--){
        let c=str[i];
        if(isOperator(c)){
            let op1=stack[stack.length-1];
            stack.pop();
            let op2=stack[stack.length-1];
            stack.pop();

            let temp="(" + op1 + c + op2 + ")";
            stack.push(temp);
        }else{
            stack.push(c+"");
        }
    }
    return stack[stack.length-1];
}

let prefix="*+AB-CD";
console.log("Infix : " + prefixToInfix(prefix));