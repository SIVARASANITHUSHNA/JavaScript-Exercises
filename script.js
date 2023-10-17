// comments can make code readable
//Welcome to learn Javascript
/*comments can make code readable, easy to reuse_
   _and informative_ */
//string
   var a= "hello";
   console.log(typeof(a));
// boolen
var a=50;
var b=50;
c=a>b;
console.log(typeof(c));
// undefined
var d=
console.log(typeof(d));
//  null object type
var e=null;
console.log( typeof(e)) 

console.log(typeof 'Asabeneh') ;
console.log(typeof 5);
console.log(typeof true) 
console.log(typeof null) 
console.log(typeof undefined) 

var one;
var two;
var three;
var four;

var one="hello";
var two=20;
var three=true;
var four=null;

var firstName = "Nithu";
var lastName = "shna";
var maritalStatus = "Single";
var country = "srilanka";
var age = 22;
console.log();
var firstName = "Nithu", lastName = "shna", maritalStatus = "Single", country = "Srilanka", age = 22;
console.log(firstName,country,age);

var myAge = 22;
var yourAge = 23;

console.log("MyAge: " + myAge);
console.log("Your Age: " + yourAge);
//day2
// 1q
var challenge = 'learn Javascript';
//2q
console.log(challenge);
//3q
console.log(challenge.length);
//4q
var uppercaseChallenge = challenge.toUpperCase();
console.log(uppercaseChallenge);
//5q
var lowercaseChallenge = challenge.toLowerCase();
console.log(lowercaseChallenge);
//6q
var firstWord = challenge.substring(6,16);
console.log(firstWord);
//7q
var sliced = challenge.slice(0, 14); 
console.log(sliced);
//8q
var challenge = 'learn Javascript';
console.log(challenge.includes('learn')) 
//9q
var words = challenge.split(" ");
console.log(words);
//10q
var n = "learn Javascript";
const wordsArray = n.split(" ");
console.log(wordsArray);
//11
const box = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const add = box.split(", ");
console.log(add);
//12
var ab = 'learn JavaScript';
console.log(ab.replace('JavaScript', 'Python'));
//13
var st = 'learn Javascript';
var ch = st.charAt(15);
console.log(ch); 
//14
var str = 'learn Javascript';
var charCode = str.charCodeAt(6); // Index 6 corresponds to 'J' in the string
console.log(charCode);
//15
var str = 'learn Javascript';
var position = str.indexOf('a');
console.log(position);
//16
var str = 'learn Javascript';
var position = str.lastIndexOf('a');
console.log(position);
//17
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var position = sentence.indexOf('because');
console.log(position);
//18
var position = sentence.lastIndexOf('because');
console.log(position);
//19
var sentence = 'You cannot end a sentence with because because because is a conjunction';
var position = sentence.search(/\bbecause\b/);
console.log(position);
//20
var str = ' learn Javascript ';
var trimmedStr = str.trim();
console.log(trimmedStr);
//21
var str = 'learn Javascript is fun';
var startsWithLearn = str.startsWith('learn Javascript');
console.log(startsWithLearn); // Should be true
//22
var str = 'learn Javascript';
var matches = str.match(/a/g);
console.log(matches); // Should return an array of ['a', 'a']
//23
var firstStr = '30 Days of';
var secondStr = ' JavaScript';
var mergedStr = firstStr.concat(secondStr);
console.log(mergedStr);
//24
var firstStr = '30 Days of';
var secondStr = ' JavaScript';
var mergedStr = firstStr.concat(secondStr);
console.log(mergedStr);
//25
var str = 'learn Javascript ';
var repeatedStr = str.repeat(2);
console.log(repeatedStr);
