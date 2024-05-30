function findSaddlePoint(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    
    for (let i = 0; i < n; i++) {
        // Find the minimum element in the i-th row
        let minElement = matrix[i][0];
        let minColIndex = 0;
        
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] < minElement) {
                minElement = matrix[i][j];
                minColIndex = j;
            }
        }
        
        // Check if the found minimum element is the maximum in its column
        let isSaddlePoint = true;
        for (let k = 0; k < n; k++) {
            if (matrix[k][minColIndex] > minElement) {
                isSaddlePoint = false;
                break;
            }
        }
        
        if (isSaddlePoint) {
            console.log(`Saddle point is ${minElement} at position (${i}, ${minColIndex})` );
            return;
        }
    }
    
    console.log('No saddle point found');
}

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

findSaddlePoint(matrix);

