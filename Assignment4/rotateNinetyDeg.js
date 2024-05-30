
function rotateNinetyDeg(matrix){
    let left=0,right=matrix.length-1;
    while(left<right){
        for(i=0;i<right-left;i++){
            let top=left,bottom=right;

            //top left
            let topLeft=matrix[top][left+i];

            //swap top left and bottom left
            matrix[top][left+i]=matrix[bottom-i][left];

            //swap bottom left and bottom right
            matrix[bottom-i][left]=matrix[bottom][right-i];

            //swap bottom right and top right
            matrix[bottom][right-i]=matrix[top+i][right];

            //swap top right and top left
            matrix[top+i][right]=topLeft;
        }
        left++;
        right--;
    }
}

const matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
];

rotateNinetyDeg(matrix);
console.log(matrix);