const name = "Sunny";

const repoCount = 50
// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is${repoCount}`)

const gameName = new String("sunnyHc")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase())
console.log(gameName)

console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('y'))

const newString  = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2);
console.log(anotherString);

const newStringtrim = " sunny  "
console.log(newStringtrim.trim());

const url = "https://sunny.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))

console.log(url.includes("."))

