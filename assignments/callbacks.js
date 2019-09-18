// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  // getLength passes the length of the array into the callback.
function getLength(arr,cb){
  cb(items.length);
}
  console.log(getLength());

  function getLength(arr, cb) {
    return cb(items.length);
    }
    const test1 = getLength(items, item => `I love the number ${item}!`);
    console.log(test1);

  // last passes the last item of the array into the callback.
function last(arr, cb) {
  const lastItem = (array.length - 1)
  cb(array[lastItem]);
}
// last(items (lastItem)){
//   console.log(lastItem);
// };

  // sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  cb(x + y);
}
// sumNums(4, 10, (cb)) {
// return sumNums;
// }

  // multiplyNums multiplies two numbers and passes the result to the callback.
  let multiplyNums = (x, y, cb) => {
    cb(x, y);
  };
  
  // multiplyNums(4, 5, (cb)) {
  // return multiplyNums();
  // }

  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
function contains(thing, list, cb) {
  for(let i=0; i<items.length;i++)
  if(list[i] = items){
    return cb(true);
  } else {
  return cb(false);
}
}
function test(testItem) {
  console.log(testItem);
  return;
}

firstItem(items, test);
getLength(items, test);
last(items, test);
sumNums(3, 5, test);
multiplyNums(3, 5, test);
contains('Dog', items, test);
contains('Notebook', items, test); 

// console.log(contains('Notebook', items, (cb)))

// console.log(contains('Peach', items, (cb)))

/* STRETCH PROBLEM */

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  function removeDuplicates(array, cb) {
  }

// function banana(a,b,cb){
//   cb(a,b);
// }

// function add(x,y){
//   console.log(x + y);
// }

// function multiply(x,y){
//   console.log(x * y);
// }

// banana(5,7, multiply);
// banana(3,8,add)