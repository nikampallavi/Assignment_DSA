
function reverseArray(array){
    const reversedArr=[];
    for(let i=array.length-1;i>=0;i--){
        reversedArr.push(array[i]);
    }
    return reversedArr;
}


const numbers=[10,20,30,40,50];
const reversedArray=reverseArray(numbers);
console.log("Reverserd array is "+reversedArray);