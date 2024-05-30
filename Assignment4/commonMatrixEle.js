function findCommonElements(matrix) {
    if (matrix.length === 0) return [];

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    const elementCount = {};

    // Initialize the elementCount with the first row
    for (let col = 0; col < numCols; col++) {
        elementCount[matrix[0][col]] = 1;
    }

    // Traverse the rest of the matrix
    for (let row = 1; row < numRows; row++) {
        const rowSet = new Set(matrix[row]);
        for (let element of rowSet) {
            if (elementCount[element] !== undefined) {
                elementCount[element]++;
            }
        }
    }

    // Collect elements that are present in all rows
    const commonElements = [];
    for (let element in elementCount) {
        if (elementCount[element] === numRows) {
            commonElements.push(parseInt(element));
        }
    }

    return commonElements;
}

const matrix = [
    [1, 2, 1, 4, 8],
    [3, 7, 8, 5, 1],
    [8, 7, 7, 3, 1],
    [8, 1, 2, 7, 9]
];

const commonElements = findCommonElements(matrix);
console.log(commonElements);