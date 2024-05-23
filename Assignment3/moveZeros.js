function moveZeros(n,a){
    let j=-1;

    //place the pointer j
    for(let i=0;i<n;i++){
        if(a[i]==0){
            j=i;
            break;
        }
    }

    //Move the pointer i and j and swap
    for(let i=j+1;i<n;i++){
        if(a[i]!==0){
            [a[i],a[j]]=[a[j],a[i]];
            j++
        }
    } 
    return a;
}

let arr=[0,1,9,8,4,0,0,2,7,0,6,0,9];
let n=arr.length;
let ans=moveZeros(n,arr);

console.log("Array After pushing all the zeros to the end");
for(let i=0;i<n;i++){
    console.log(arr[i]);
}