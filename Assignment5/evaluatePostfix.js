
function evaluatePostfix(expr){
    let stack=[];            //create stack
    for(let i=0;i<expr.length;i++){
        let c=expr[i];

        if(!isNaN(parseInt(c))){
            stack.push(c.charCodeAt(0)-'0'.charCodeAt(0));
            }
            else{
                let val1=stack.pop();
                let val2=stack.pop();

                switch(c){
                    case '+':stack.push(val2+val1);
                                break;

                    case '-':stack.push(val2-val1);
                                break;

                    case '/':stack.push(val2/val1);
                                break;
                                
                    case '*':stack.push(val2*val1);
                                break;
                }
            }
    }
  return stack.pop();
}

let expr="231*+9-";
console.log("Postfix evaluation : "+evaluatePostfix(expr));












