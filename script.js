// Step 1: Declaring Arrays
let mixedArray = [42, "apple", true, "banana", 3.14];

// Step 2: Accessing Arrays
let firstElement = mixedArray[0];
let lastElement = mixedArray[mixedArray.length - 1];
let middleElement = mixedArray[Math.floor(mixedArray.length / 2)];

// Step 3: Using Array Properties
console.log("Array Length:", mixedArray.length);

// Step 4: Array Methods
mixedArray.push("newItem"); // Add to the end
console.log("After push:", mixedArray);

mixedArray.unshift("startItem"); // Add to the beginning
console.log("After unshift:", mixedArray);

mixedArray.pop(); // Remove from the end
console.log("After pop:", mixedArray);

mixedArray.splice(2, 1, "modifiedItem"); // Replace 1 item at index 2
console.log("After splice:", mixedArray);

// Step 5: Iterating Through Arrays

// Traditional for loop
console.log("Traditional for loop:");
for (let i = 0; i < mixedArray.length; i++) {
  console.log(mixedArray[i]);
}

// Modern forEach method
console.log("forEach method:");
mixedArray.forEach(element => {
  console.log(element);
});

// Step 6: Array Destructuring
const [first, second, ...rest] = mixedArray;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);
