// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const maxContainer = (height) => {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxArea = 0;
    
    while (leftPointer < rightPointer) {
        const currentArea = Math.min(height[leftPointer], height[rightPointer]) * (rightPointer - leftPointer);
        maxArea = Math.max(maxArea, currentArea);

        if (height[leftPointer] < height[rightPointer]) {
            leftPointer++;
        }
        else rightPointer--;
    }
    return maxArea;
}


console.log(maxContainer([1,8,6,2,5,4,8,3,7]))