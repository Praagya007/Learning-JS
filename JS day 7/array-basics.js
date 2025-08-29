// Day08/arrays-basic.js

// min
function min(arr) {
  return Math.min(...arr);
}

// max
function max(arr) {
  return Math.max(...arr);
}

// chunk
function chunk(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// flattenOneLevel
function flattenOneLevel(arr) {
  return arr.flat();
}

// Tests
console.log(min([3, 1, 4])); // 1
console.log(max([3, 1, 4])); // 4
console.log(chunk([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log(flattenOneLevel([1, [2, 3], [4], 5])); // [1, 2, 3, 4, 5]
