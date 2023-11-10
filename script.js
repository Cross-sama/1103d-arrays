// задача №1
const fill = (arraySize, value) => {
  // решение здесь
  const result = []
  for (let i = 0; (i < arraySize); i += 1) {
    result.push(value)
  }
  return result
}

const arraySize = 3;
const value = 'a';
console.log(fill(arraySize, value))
const arraySize2 = 5;
const value2 = 'z';
console.log(fill(arraySize2, value2))

// задача №2
const reverse = (array) => {
  // решение здесь
  let result = []
  result = array.reverse()
  return result
 }

const example = [1, 2, 3];
console.log(reverse(example)); // [3, 2, 1]
const example2 = [3, 5, 8, 9, 2, 1, 10, 5];
console.log(reverse(example2)); // [5, 10, 1, 2, 9, 8, 5, 3]

// задача №3
const compact = (array) => {
  // решение здесь
  const result = [];

  for (const item of array) {
    if (item !== null && item !== null && item !== undefined && item !== false && item !== "") {
      result.push(item);
    }
  }
  return result
}

const data = [0, 1, false, 2, undefined, '', 3, null];
console.log(compact(data)) // [1, 2, 3]
const data2 = [false, undefined, 3, '', 2, undefined, '', 3, null, 20, 10];
console.log(compact(data2)) // [ 3, 2, 3, 20, 10 ]
