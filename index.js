// // Prompt user to input numbers
const userInput = prompt(`Please enter numbers separated by commas`, `1, 2, 3, 4, 5`);

// // Turn the user's input into an array 
const userInputArray = userInput.split(`,`);

// // Create a new empty array
const numArray = [];

// go through the array of strings
for(let i = 0; i < userInputArray.length; i++) {
  // convert the string into a number
  const unconvertedNum = userInputArray[i];
  const convertedNum = Number(unconvertedNum);
  // add the converted number to the empty array
  numArray.push(convertedNum);
  // console.log(numArray)
};


// create a function called `getLength`
// `getLength` takes in an array of numbers
const getLength = (nums) => {
  // gets the length of the numbers array using the length method
  const newLength = nums.length;
  // returns the length
  return newLength;
};
// console.log(getLength(numArray))


// create a function called `getSum`
// `getSum` takes in an array of numbers
const getSum = (nums) => {
  // create a variable `total`
  const total = 0

  // iterate over the numbers in the array
  for(let i = 0; i < nums.length; i++ ) {
    // add each number to the `total`
    const numbers = nums[i]
    total += numbers
  }
  return total
};
// console.log(getSum(numArray))


// create a function called `getMean`
const getMean = (nums) => {
  // `getMean` takes in an array of numbers
  // divide the getSum by the getLength
  const dividend = getSum(nums) / getLength(sums)
  // return the dividend
  return dividend
}
// console.log(getMean(numArray))


// create a function called `getMin`
// `getMin` takes in an array of numbers
const getMin = (nums) => {
  // create a variable called `lowestNum` set to the first number in the array
  let lowestNum = nums[0]
  
  // go through each number
  for(let i = 0; i < nums.length; i++) {
    // compare the current number to `lowestNum`
    // if the current number is lower than the `lowestNum`
    if (nums[i] < lowestNum) {
      // replace the `lowestNum` with the current number
      lowestNum = nums[i]
    }
    // return `lowestNum`
    return lowestNum
  }  
};
// console.log(getMin(numArray))


// create a function called getMax
// getMax takes in an array of numbers
const getMax = (nums) => {
  // create a variable called `highestNum` set to the first number in the array
  let highestNum = nums[0]
  // go through each number
  for(let i = 0; i < nums.length; i++) {
    // compare the current number to the highest number
    // if the current number is higher than the highestNum
    if (nums[i] > highestNum) {
      // replace the `highestNum` with the current number
      highestNum = nums[i]
    };
  };
    return highestNum;
};
// console.log(getMax(numArray))


// create a function called getRange
// getRange takes in an array of numbers
const getRange = (nums) => {
  // return getMax minus the getMin
  return getMax(nums) - getMin(nums);
};
// console.log(getRange(numArray))


// create a function called getEvens
// getEvens takes in an array of numbers
const getEvens = (nums) => {
  // create a variable called `evens` that is set to []
  const evens = [];
  // go through each number
  for(let i = 0; i < nums.length; i++) {
    // figure out if the number is even
    // if the number is even
    if (nums[i] % 2 === 0) {
      // add it to the `evens` array
      evens.push(nums[i]);
    };
  };
  // return `evens`
  return evens
};
// console.log(getEvens(numArray))


// create a function called getOdds
// getOdds takes in an array of numbers
const getOdds = (nums) => {
  // create a variable called `odds` that is set to []
  const odds = []
  // go through each number
  for(let i = 0; i < nums.length; i++) {
    // figure out if the number is odd
    // if the number is odd
    if(nums[i] % 2 !== 0) {
      // then add it to the odds array
      odds.push(nums[i])
    }
  }
  // return odds array
  return odds
}
// console.log(getOdds(numArray))











































// // create function to calculate
// const getLength = () => {}
// const getSum = () => {}
// const getMean = () => {}
// const getMin = () => {}
// const getMax = () => {}
// const getRange = () => {}
// const getEvens = () => {}
// const getOdds = () => {}

