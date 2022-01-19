// 1. Basic of Array:
/*
    - 2 ways of declaring array
    - how to access elements in array with key
*/
console.log("");
console.log("1. 2 ways of declaring arrays");
const friends = ["Minh", "Trung", "Linh", "Mike", "Nick", "Messi"];
const friends2 = new Array("Minh", "Trung", "Linh", "Mike", "Nick", "Messi");

console.log("Friends");
console.log(friends);
console.log("Friends2");
console.log(friends2);

/***********************************/

console.log("");
console.log("1. How to access elements in array");

console.log("friends[0]: " + friends[0]);
console.log("friends[3]: " + friends[3]);

// 2. Basic Array Properties and Methods:
/*
    Functions and properties that help us working with Array

    - Property: 
        +, .length
    - Methods: 
        +, push(); 
        +, pop(); 
        +, shift(); 
        +, includes(); 
*/
console.log("");
console.log("2. Array Properties and Methods");

console.log("Friends array: ");
console.log(friends);
console.log("");

console.log("friends.length: " + friends.length);
console.log("");

friends.push("Trang");
console.log("friends.push('Trang'): ");
console.log(friends);
console.log("");

friends.pop();
console.log("friends.pop(): ");
console.log(friends);
console.log("");

friends.shift();
console.log("friends.shift(): ");
console.log(friends);
console.log("");

console.log("friends.includes('Mike'): ");
console.log(friends.includes("Mike"));
console.log("");

// 3. String in Javascript
/*
    In JavaScript, String is treated as an Array
*/

console.log("");
console.log("3. String in Javascript");

const newString = "ONTHECARD In 2022";
console.log("newString[1]");
console.log(newString[1]);
console.log(newString.length);
