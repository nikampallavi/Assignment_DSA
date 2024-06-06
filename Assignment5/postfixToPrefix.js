function isOperator(X){
    switch(X){
        case '+':
        case '-':
        case '*':
            return true;        
    }
    return false;
}

function postfixToPrefix(expr){
    let stack=[];
    for(let i=0;i<expr.length;i++){
       
        if(isOperator(expr[i])){
            let op1=stack[stack.length-1];
            stack.pop();
            let op2=stack[stack.length-1];
            stack.pop();

            let temp=expr[i]+op2 + op1 ;
            stack.push(temp);
        }else{
            stack.push(expr[i]+"");
        }
    }
    let ans=" ";
    while(stack.length>0){
        ans+=stack.pop();
        return ans;
    }
    
}


let exp="AB+CD-*";
console.log("Prefix : " +postfixToPrefix(exp));