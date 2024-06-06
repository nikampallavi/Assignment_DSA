function nextGreaterElements(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1); // Initialize the result array with -1
    const stack = []; // Stack to keep track of indices
  
    for (let i = 0; i < n; i++) {
      
      while (stack.length > 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = arr[i];
      }
      // Push the current index onto the stack
      stack.push(i);
    }
  
    return result;
  }
  
  
  const arr = [4, 5, 2, 25];
  const result = nextGreaterElements(arr);
  console.log("Array:", arr);
  console.log("Next Greater Elements:", result); 
  