// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].


const twoSum = (numbers, target) => {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    let targetVals = null;

    while (leftPointer < rightPointer) {
        if (numbers[leftPointer] + numbers[rightPointer] === target) {
            targetVals = [leftPointer + 1, rightPointer + 1];
            break;
         }
         else if (numbers[leftPointer] + numbers[rightPointer] < target) {
            leftPointer++;
        }
        else {
            rightPointer--;
        }
    }
    return targetVals;
};

console.log(twoSum([2,7,11,15], 9));