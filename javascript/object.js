let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

/**
 * 1. in obj[1] = 'One', the value within the square brackets will be converted to a string
 * therefore, the string 'One' is assisned a value string of '1'
 * 2. in obj['1'] = 'String One', the value in square brackets is already a string, therefore no need
 * of a conversion, the 'String One'is assigned to a string value '1'
 * the output therefore will give the value referenced in the variables which is 'String One'
 * hence the result true in the end
 */
