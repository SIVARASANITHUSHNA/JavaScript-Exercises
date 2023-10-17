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
var f = 'learn Javascript';
//2q
console.log(f);
//3q
console.log(f.length);
//4q
var fg = f.toUpperCase();
console.log(fg);
//5q
var g = f.toLowerCase();
console.log(g);
//6q
var firstWord = f.substring(6,16);
console.log(firstWord);
//7q
var sliced = f.slice(0, 14); 
console.log(sliced);
//8q
var f = 'learn Javascript';
console.log(f.includes('learn')) 
//9q
var words = f.split(" ");
console.log(words);
//10q
var n = "learn Javascript";
const nm = n.split(" ");
console.log(nm);
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
var gh = 'learn Javascript';
var hi = gh.charCodeAt(6); 
console.log(hi);
//15
var ij = 'learn Javascript';
var k = ij.indexOf('a');
console.log(k);
//16
var abc = 'learn Javascript';
var cde = abc.lastIndexOf('a');
console.log(cde);
//17
var efg = 'You cannot end a sentence with because because because is a conjunction';
var hij = efg.indexOf('because');
console.log(hij);
//18
var hij = efg.lastIndexOf('because');
console.log(hij);
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
console.log(startsWithLearn); 
//22
var str = 'learn Javascript';
var matches = str.match(/a/g);
console.log(matches); 
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
