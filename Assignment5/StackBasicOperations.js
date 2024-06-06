class Stack{
    constructor() {
        this.items=[];
    }

    add(elements){
        return this.items.push(elements);
    }

    remove(){
        if(this.items.length>0)
            {
                return this.items.pop();
            }   
         }
     
     isEmpty(){
        return this.items.length==0;
     }    

     peek(){
        return this.items[this.items.length-1];
     }
}



let stack=new Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
console.log("Inserting element to the stack :" ,stack.items);

stack.remove();
console.log("Remove element from the stack :",stack.items);

console.log(stack.isEmpty());

console.log('Last element of stack :',stack.peek());