/**
 * determines a students grade based on total marks and exam type
 * should return specific message
 */

function checkGrade(totalMarks, examType) {
    if (examType === 'Final' && totalMarks >= 90) {
        return "Excellent job, you got an A+.";
    }

    if (totalMarks >= 89) {
        return "Excellent job, you got an A+.";
    } else if (totalMarks >= 80) {
        return "Good job, you got an A.";
    } else if (totalMarks >= 75) {
        return "Well done, you got a B+.";
    } else if (totalMarks >= 70) {
        return "Nice work, you got a B.";
    } else if (totalMarks >= 60) {
        return "You got a C.";
    } else {
        return "You need to improve.";
    }
}


console.log(checkGrade(90, 'General'))
