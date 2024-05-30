
function searchMatrix(mat,n,x) {
    if (n == 0)
        return -1;
 
    // traverse through the matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++)
            // if the element is found
            if (mat[i][j] == x) {
                console.log("Element found");
              return 1;
        }
    }
    console.log('Element not found');
    return false;
}
    let matrix = [[ 10, 20, 30, 40 ],
                   [15, 25, 35, 45] ,
                   [ 27, 29, 37, 48 ],
                   [ 32, 33, 39, 50 ]];
 
    searchMatrix(matrix, 4, 29);