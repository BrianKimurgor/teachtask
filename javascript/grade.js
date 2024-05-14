/**
 * checks for total marks in examinations
 * student gets an A if marks arein range of 89 to 100 inclusive if examination is final
 * total marks must be greater or equal to 90
 * if he/she gets A, return true, otherwise return false
 */

function examination(nums) {
    let exams = []; //
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        exams.push(nums[i]);
        sum += nums[i];
    }

    let average = sum / exams.length;

    if (average >= 90) {
        console.log("true");
    } else {
        console.log("false");
    }

    return average;
}

console.log(examination([90, 87, 100]));
