
function findIntersection (first_array, second_array)  {
    let new_array = [];         //empty array
    for (let i = 0; i < first_array.length; i++) {   //iterate first_array
        const element=first_array[i];

//For each element, we check if it exists in arr2 using the indexOf function
//If the element is found in arr2 and does not already exist in the intersection array, 
//it is added to the new array using the push function.

        if(second_array.indexOf(element)!==-1 &&     
                new_array.indexOf(element)===-1){
                    new_array.push(element);
                }
    }
    return new_array;
};


let first_array=[1,2,2,1];
let second_array=[2,2];

const intersection=findIntersection(first_array,second_array);
console.log(intersection);  



