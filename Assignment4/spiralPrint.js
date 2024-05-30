function printSpiral(matrix) {
    // Define ans array to store the result.
    let result = [];
  
    
    let n = matrix.length; // no. of rows
    let m = matrix[0].length; // no. of columns
  
   
    let top = 0, left = 0, bottom = n - 1, right = m - 1;
  
   
    while (top <= bottom && left <= right) {
      // For moving left to right
      for (let i = left; i <= right; i++)
        result.push(matrix[top][i]);
  
      top++;
  
      // For moving top to bottom.
      for (let i = top; i <= bottom; i++)
        result.push(matrix[i][right]);
  
      right--;
  
      // For moving right to left.
      if (top <= bottom) {
        for (let i = right; i >= left; i--)
            result.push(matrix[bottom][i]);
  
        bottom--;
      }
  
      // For moving bottom to top.
      if (left <= right) {
        for (let i = bottom; i >= top; i--)
          result.push(matrix[i][left]);
  
        left++;
      }
    }
    return result;
  }
  
 
  let matrix = [[1, 2, 3, 4],
             [5, 6, 7, 8],
             [9, 10, 11, 12],
             [13, 14, 15, 16]];
      
  let result = printSpiral(matrix);
  
  for (let i = 0; i < result.length; i++) {
    console.log(result[i] + " ");
  }
  
