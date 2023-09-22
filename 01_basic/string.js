const name = "sagar";
const repoCount = 60;

//  console.log(name + repoCount + "Value"); bad way of concating strings

// console.log(`Hello I am ${name} and my Repo Count is ${repoCount}`) use this way while concating srings

const gameName = new String("Fortnite-game"); //declaring strings

// console.log(gameName.__proto__);
// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

// const newGame = gameName.substring(0, 4);
// console.log(newGame);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

const newString = "    Sagar   " ;
console.log(newString)
console.log(newString.trim())