/**
 * 1. Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/
var student = [
  {
    name: 'Brian',
    class: 'Computer science',
    rollno: 12
  }
]

console.log(Object.keys(student[0]))

/**
2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };*/

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(student)// { name: 'David Rayy', sclass: 'VI', rollno: 12 }
delete student.rollno
console.log(student) // { name: 'David Rayy', sclass: 'VI' }

/**
3. Write a JavaScript program to get the length of a JavaScript object.
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log(Object.keys(student).length) // 3

/**
4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
var library = [
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games',
       readingStatus: false
   }];
   */
var library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }];
let length = Object.values(library).length
for (let i = 0; i < length; i++) {
  console.log(library[i])
}

/**
7. Write a JavaScript program that returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/

function subsets(str){
  let subset =[];
  for (let i = 0; i <= str.length; i++){
    for(let j = i + 1; j <= str.length; j++){
      subset.push(str.slice(i, j))
    }
  }
  return subset
}

console.log(subsets("dog"))


/**

10. Write a JavaScript program to sort an array of JavaScript objects.
Sample Object :
var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
Expected Output:
[[object Object] {
  author: "Walter Isaacson",
  libraryID: 4264,
  title: "Steve Jobs"
}, [object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title: "Mockingjay: The Final Book of The Hunger Games"
}, [object Object] {
  author: "The Road Ahead",
  libraryID: 1254,
  title: "Bill Gates"
}]
*/
var library = [
  {
      title:  'The Road Ahead',
      author: 'Bill Gates',
      libraryID: 1254
  },
  {
      title: 'Walter Isaacson',
      author: 'Steve Jobs',
      libraryID: 4264
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      libraryID: 3245
  }];
  library.sort(
    function(a,b){
      return a.libraryID - b.libraryID
    }
  );
  console.log(library)

/**
11. Write a JavaScript function to print all the methods in a JavaScript object.
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/

function all_properties(val){
  let arr = [];
  for(let i = 0; i <= val.length; i++){
    arr.push(i)
  }
  return arr
}
//tests
let Array = ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"];
console.log(Array)

/**
12. Write a JavaScript function to parse an URL.
*/

function parseURL(url) {
  var parsedURL = new URL(url);

  var protocol = parsedURL.protocol;
  var hostname = parsedURL.hostname;
  var port = parsedURL.port;
  var pathname = parsedURL.pathname;
  var search = parsedURL.search;
  var hash = parsedURL.hash;

  return {
    protocol: protocol,
    hostname: hostname,
    port: port,
    pathname: pathname,
    search: search,
    hash: hash
  };
}


var url = "https://ansible.readthedocs.io/projects/ansible-core/en/devel/installation_guide/intro_installation.html";
var parsedURL = parseURL(url);
console.log(parsedURL);

/**
13. Write a JavaScript function to retrieve all the names of an object's own and inherited properties.
*/

function getProperty(obj){
  let propertyName = [];
  propertyName = propertyName.concat(Object.getOwnPropertyNames(obj))
  let prototype = Object.getPrototypeOf(obj);
  while(prototype != null){
    propertyName = propertyName.concat(Object.getOwnPropertyNames(prototype));
    prototype = Object.getPrototypeOf(prototype);
  }

  return propertyName;
}

var obj = {
  name: 'John',
  age: 30
};

var propertyName = getProperty(obj);
console.log(propertyName);


/**
14. Write a JavaScript function to retrieve all the values of an object's properties.
*/

function getAllPropertyValues(obj) {
  return Object.values(obj);
}
//tests
const myObject = {
  name: 'Brian',
  age: 24,
  city: 'Nairobi'
};

const values = getAllPropertyValues(myObject);
console.log(values);
/**
15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
*/

function objectToList(obj) {
  return Object.entries(obj);
}

//tests
const object = {
  name: 'Brian',
  age: 24,
  city: 'Nairobi'
};

const value = objectToList(object);
console.log(value);

/**
16. Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys.
/**
17. Write a JavaScript function to check whether an object contains a given property.
 */
