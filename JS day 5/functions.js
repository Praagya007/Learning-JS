// ------------------------------
// Day 5 — Functions Fundamentals
// ------------------------------

// 1. Sum
function sum(...nums) {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += Number(nums[i]); // handle string numbers too
    }
    return total;
}
console.log(sum(1, 2, 3, "4")); // 10

// 2. Average
function average(...nums) {
    if (nums.length === 0) return 0;
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return parseFloat((total / nums.length).toFixed(2));
}
console.log(average(24, 77, 42)); // 47.67

// 3. Remove Duplicates
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let exists = false;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result.push(arr[i]);
        }
    }
    return result;
}
let fruits = ["Apple", "Banana", "Cherry", "Kiwi", "Apple", "Grapes"];
console.log(removeDuplicates(fruits)); // ["Apple","Banana","Cherry","Kiwi","Grapes"]

// 4. Function Composition
const double = n => n * 2;
const square = n => n * n;

const doubleThenSquare = x => square(double(x));
console.log(doubleThenSquare(4)); // 64