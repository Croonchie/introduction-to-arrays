let declareArray = ["red", 5, "blue", "green", "true"];

let firstElement = declareArray[0];
let secondElement = declareArray[2];
let thirdElement = declareArray[4];

console.log(declareArray[0]);
console.log(declareArray[2]);
console.log(declareArray[4]);

let arrayLength = declareArray.length;

console.log("Number of elements in the array:", arrayLength);

let lastArray = declareArray.pop();

console.log(lastArray, "last array");
console.log(declareArray, "array");

declareArray.push("false");

console.log(declareArray);

let numbers = declareArray.filter(num => num >= 0);

console.log("\n");

console.log(numbers);

console.log("\n");
let iterator = declareArray.values();
console.log(iterator, " - this is iterator");

for (let value of iterator){
  console.log(value);
}

let [firstArray, secondArray] = declareArray;
console.log("\n--This is step 6");
console.log(firstArray);
console.log(secondArray);