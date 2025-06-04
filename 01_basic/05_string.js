const name = "Rohit Choudhary"
const repoCount = 50

// console.log(name + repoCount + " Value");   # it is a very old method

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string define ka new trick

const gameName = new String('Rohit-rk-sikar')//yeh bhi same 

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Rohit Choudhary    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"//yaha pr %20 default save kr leta h jb user input m space dedeta h toh hm us ki jga -use krne ke liye replacemethod use krte h 

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));