function sumOfTopTwoIntegers(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two integers.");
    }

    arr.sort((a, b) => b - a);

    return arr[0] + arr[1];
}

// Test cases
function testSumOfTopTwoIntegers() {
    // Test case 1
    const input1 = [1, 4, 2, 3, 5];
    const expected1 = 9;
    console.log(`Test case 1: Input: ${input1}, Expected: ${expected1}, Output: ${sumOfTopTwoIntegers(input1)}`);

    // Test case 2
    const input2 = [10, 20, 30, 40, 50];
    const expected2 = 90;
    console.log(`Test case 2: Input: ${input2}, Expected: ${expected2}, Output: ${sumOfTopTwoIntegers(input2)}`);

    // Test case 3
    const input3 = [-10, -20, -5, -1];
    const expected3 = -6;
    console.log(`Test case 3: Input: ${input3}, Expected: ${expected3}, Output: ${sumOfTopTwoIntegers(input3)}`);

    // Test case 4
    const input4 = [0, 1, 2, 3];
    const expected4 = 5;
    console.log(`Test case 4: Input: ${input4}, Expected: ${expected4}, Output: ${sumOfTopTwoIntegers(input4)}`);

    // Test case 5
    const input5 = [100, 200];
    const expected5 = 300;
    console.log(`Test case 5: Input: ${input5}, Expected: ${expected5}, Output: ${sumOfTopTwoIntegers(input5)}`);
}

// Run tests
testSumOfTopTwoIntegers();
