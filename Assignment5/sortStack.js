
// Function to insert an element in sorted order
function sortedInsert(stack, element) {
    if (stack.length === 0 || element > stack[stack.length - 1]) {
        stack.push(element);
    } else {
        // Remove the top element and hold it in a variable
        let top = stack.pop();
        // Recursively call sortedInsert
        sortedInsert(stack, element);
        // Put the top element back
        stack.push(top);
    }
}

// Function to sort the stack
function sortStack(stack) {
    if (stack.length > 0) {
        // Remove the top element
        let top = stack.pop();
        // Recursively sort the remaining stack
        sortStack(stack);
        // Insert the top element back in the sorted stack
        sortedInsert(stack, top);
    }
}

// Example usage:
let stack = [34, 3, 31, 98, 92, 23];
console.log("Original Stack:", stack);

sortStack(stack);
console.log("Sorted Stack:", stack);
