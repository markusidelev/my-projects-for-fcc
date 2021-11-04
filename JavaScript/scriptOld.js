// var myArray = [];

// for (var i = 0; i < 6; i++) {
//   myArray.push(i)
//   console.log(myArray)
// }

// console.log('')

// var myArray2 = []
// var a = 0
// while (a < 6) {
//     myArray2.push(a)
//     console.log(myArray2)
//     a++
// }

// var myArray = [];

// // Only change code below this line

// for (var i = 9; i > 0; i -= 2) {
//   myArray.push(i);
//   console.log(i)
// }

// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line
//     for (var i=0; i < arr.length; i++) {
//       for(var j=0; j < arr[i].length; j++) {
//         product *= arr[i][j]
//         console.log(product)
//       }
//     }
//     // Only change code above this line
//     return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);



// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop) {
//   // Only change code below this line
//     for (var i = 0; i < contacts.length; i++) {
//         if (contacts[i]["firstName"] === name) {
//             if (contacts[i].hasOwnProperty(prop)) {
//                 var value = contacts[i][prop]
//                 return value
//             } else {

//             return "No such property"
//             }

//         }

//     }
//     return "No such contact"

//   // Only change code above this line
// }

// console.log(lookUpProfile("Kristian", "lastName"));


// var myConcat = function(arr1, arr2) {
//     return arr1.concat(arr2);
//   };

//   console.log(myConcat([1, 2], [3, 4, 5]));

// const timeFuncRuntime = funcParameter => {
//   let t1 = Date.now();
//   funcParameter();
//   let t2 = Date.now();
//   return t2 - t1;
// }

// const addOneToOne = () => 1 + 1;

// console.log(timeFuncRuntime(addOneToOne));

// const numbers = [28, 77, 45, 99, 27];


// console.log(numbers.map(number => {  
//   return number;}))

// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// const announcements = finalParticipants.map(member => {
//   return member + ' joined the contest.';
// })

// console.log(announcements);

// let spaceship = {
//     crew: {
//       captain: { 
//         name: 'Lily', 
//         degree: 'Computer Engineering', 
//         cheerTeam() { console.log('You got this!') } 
//       },
//       'chief officer': { 
//         name: 'Dan', 
//         degree: 'Aerospace Engineering', 
//         agree() { console.log('I agree, captain!') } 
//       },
//       medic: { 
//         name: 'Clementine', 
//         degree: 'Physics', 
//         announce() { console.log(`Jets on!`) } },
//       translator: {
//         name: 'Shauna', 
//         degree: 'Conservation Science', 
//         powerFuel() { console.log('The tank is full!') } 
//       }
//     }
//   }; 

// // for...in
// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }





// function reverseString(str) {
//   let obj = []
//   for(let i=0; i < str.length; i++){
//      obj.unshift(str.slice(i,i+1))

//   }
//   arr = obj.toString()

//   return arr;
// }

// console.log(reverseString("hello"));

// let h = 'hello'
// console.log(h.slice(1,2))

// function reverseString(str) {
//   let reverseStr = ''
//   for(let i = str.length - 1; i >= 0; i--){
//   reverseStr += str[i]
//   }


//   return reverseStr;
// }

// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }

// console.log(reverseString("hello"));


// function factorialize(num) {
//   factorial = 1
//   for (i=1; i <= num; i++){
//     factorial = factorial * i
//     console.log(factorial)
//   }


//   return factorial;
// }

// console.log(factorialize(5));

// 5! = 1 * 2 * 3 * 4 * 5 = 120

// function findLongestWordLength(str) {
//   obj = str.split(' ')
//   console.log(obj)
//   longest = 0
//   for (let i = 0; i < obj.length; i++) {
//     if(obj[i].length > longest) {
//       longest = obj[i].length
//     }

//   }

//   return longest;


// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// let strTest = "hello";
// let test = strTest.length;
// console.log(test)

// function largestOfFour(arr) {
// let largestObj = []

// for(let i = 0; i < arr.length; i++){

//   let largestMember = arr[i][0]

//   for(let j=0; j < arr[i].length; j++){

//     if(largestMember < arr[i][j]){
//       largestMember = arr[i][j]
//     }

//   }

//   largestObj.push(largestMember)
// }



//   return largestObj;
// }
// console.log(

//   largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))



// =====

// function confirmEnding(str, target) {

//   let lastLetter = str.slice(str.length - target.length)

//     return (lastLetter === target ? true : false);
//   }

// console.log(confirmEnding("Bastian", "n"));


// str = "hello"
// lastLetter = str.slice(str.length-1)
// console.log(lastLetter)



// function repeatStringNumTimes(str, num) {
// let repeatStr = ''
//   for(let i = 0; i < num; i++){
//     repeatStr += str
//   }
//   return repeatStr;
// }

// console.log(repeatStringNumTimes("abc", 3));



// function truncateString(str, num) {
//   let shortStr
//   console.log(num)
//   if(str.length > num) {
//     shortStr = str.slice(0,num)

//     return shortStr + '...';
//   } else{
//     return str
//   }

// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));


// function findElement(arr, func) {

//   let num 

//   for (let i = 0; i < arr.length; i++) {   
//     num = arr[i]
//     if(func(num)) {
//       return num
//     }    
//   }
//   return undefined
// }

// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));



// function titleCase(str) {
//   let lowStr = str.toLowerCase()
//   let strObj = lowStr.split(' ')
//   // let test = /^\w/;
//   for (let i = 0; i < strObj.length; i++) {
//     strreplace(strObj[i], strObj[i].toUpperCase)


//   }


//   return strObj;
// }
// console.log(

//   titleCase("I'm a little tea pot")
// )



// function frankenSplice(arr1, arr2, n) {

//  let localArray = arr2.slice()
//   for (let i = 0; i < arr1.length; i++) {
//     localArray.splice(n, 0, arr1[i])
//     console.log(localArray)
//     n++

//   }
//   return localArray
// }
// console.log(

//   frankenSplice([1, 2, 3], [4, 5, 6], 1)
//   )


// function bouncer(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]) {
//       newArr.push(arr[i])
//     }    
//   }
//   return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));


// false, null, 0, "", undefined, and NaN.




// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num)
//       return i;
//   }

// return arr.length;
// }
// should return 2.




// function mutation(arr) {
//   let word1 = arr[0].toLowerCase()
//   let word2 = arr[1].toLowerCase()

//   // console.log(word1)
//   // console.log(word2)

//   for (let i = 0; i < word2.length; i++) {
//     if(word1.indexOf(word2[i]) < 0 ) return false

//   }


//   return true;
// }

// mutation(["Hello", "heY"]);




// console.log(test2)



// function chunkArrayInGroups(arr, size) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i+=size) {
//     newArr.push(arr.slice(i, i + size))

//   }
//   return newArr
// }

// console.log(

//   chunkArrayInGroups(["a", "b", "c", "d"], 2)
//   )



// let name = 'John'
// let admin = name 

// alert(admin)

// result = prompt("имя?")
// alert(result)

// "" + 1 + 0 // 10
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // nan
// 7 / 0 // inf
// "  -9  " + 5 // -9 5
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // nan
// " \t \n" - 2 // -2

// let test = prompt("Какое «официальное» название JavaScript?")

// alert(test == 'ECMAScript' ? 'Верно' : "Неверно")

// let test = prompt('number?')


//   if(test > 0){
//     alert('higher then 0')
//   } else if (test < 0) {
//     alert('lower then 0')1
//   } else {
//     alert('zero')1
//   }

// number = (a,b) => {

//   let result = (a + b < 4) ?  'Мало' :  'Много';
//   return result

// }

// console.log(number(1,1))

// let login = 'Директор'


// let message = (login == 'Сотрудник') 
// ?  'Привет':
// (login == 'Директор') ?
// 'Здравствуйте':
// (login == '') ?
// 'Нет логина' :
//  '';


// console.log (message)


// let age = 13

// let result = (age >= 14 && age <= 90) ?
//     'yes':
//     "no";

// console.log( result)




// // =======================
// let loginTest = prompt('login?')
//   loginCheck = login =>
//   login == 'admin' ?
//   passwordCheck():
//   login == '' || login === null ?
//   alert('cancel') :
//   alert('wrong');

// passwordCheck = () => {
//   let password = prompt('password?');
//   password == 'iamtheone' ?
//   alert('Greetings'):
//   password == '' || password === null ?
//   adminalert('cancel') :
//   alert('It\'s not you');
//   }

// loginCheck(loginTest)

// //=====================

// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;

//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case  2 || 3 :
//     alert('Вы ввели число 2, а может и 3');
//     break;



//   default:
//     break;
// }


// ===================================


// function checkAge(age) {
//  return age > 18 ?  true:  confirm('Родители разрешили?')

// }


// min = (a,b) => a > b ? `${a} more ${b}` : `${b} less ${a}`

// console.log(min(2,4))



// pow = (a,b) => {
//   if (a > 0 ) {

//     let result = a
//     for (let i = 1; i < b; i++) {
//       result *= a
//       return result
//     }
//   } else {
//     return 'wrong'
//   }

// }
// console.log(pow(-1,5))





//=====


// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () =>  alert("Привет!") :
//   () => alert("Здравствуйте!");

// welcome(); // теперь всё в порядке

// // ===============


// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
// let testObj = []

// console.log(isEmpty(testObj))



// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }


// sum = (obj) => {

//   let result = 0
//   for (let key in obj) {
//     result += obj[key]
//     console.log(result)
//   }

//   return result
// }
// console.log(salaries)
// console.log(sum(salaries))




// // до вызова функции
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// multiplyNumeric = obj => {

//   for(let key in obj){
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2
//     }
//   }

// }

// multiplyNumeric(menu);

// console.log(menu)


// ========================

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },
//   mul() {
//     return this.a*this.b
//   },
//   read() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   }
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


// // ================
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     alert( this.step );
//     return this;
//   }
// }

// ladder.up().up().down().up().down().showStep(); // 1


// ==========================================

// function Calculator() {

//   this.read = function() {
//     this.a = +prompt('a?', 0);
//     this.b = +prompt('b?', 0);
//   };

//   this.sum = function() {
//     return this.a + this.b;
//   };

//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// ==================================

// function Accumulator(startingValue)  {

//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('number?')
//   };

// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений





// ========================



// function convertToF(celsius) {
//   let fahrenheit = celsius*(9/5) + 32;
//   return fahrenheit;
// }

// convertToF(30);


// ====================


// function reverseString(str) {
//   let reverseStr =''
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverseStr += str[i]

//   }
//   return reverseStr;
// }

// console.log(reverseString("hello"));


// let hello = "hello"

// ===============================

// function factorialize(num) {
//   let factorial = 1
//   for (let i = 1; i <= num; i++) {
//     factorial *= i

//   }

//   return factorial;
// }

// console.log(factorialize(5));


// ============================================

// function findLongestWordLength(str) {
//   let arr = str.split(' ');
//   let longest = 0


//   for (let i = 0; i < arr.length; i++) {
//     if (longest < arr[i].length) {
//       longest = arr[i].length
//     }

//   }

//   return longest;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

// ==========================



// function largestOfFour(arr) {

//   let largestArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let largestNum = arr[i][0]
//     for (let j = 0; j < arr[i].length; j++) {
//       if (largestNum < arr[i][j]) {
//         largestNum = arr[i][j]
//       }

//     }
//     largestArr.push(largestNum)
//   }

//   return largestArr;
// }

// console.log(

//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
//   )



// =================================


// function confirmEnding(str, target) {

//   let checkPart = str.slice((str.length - target.length),);

//   return (checkPart == target);
// }

// console.log(
//   confirmEnding("Bastian", "n")
//   )


// ===========================

// function repeatStringNumTimes(str, num) {

//   let newStr = ''
//   for (let i = 0; i < num; i++) {
//     newStr += str

//   }


//   return newStr;
// }

// console.log(

//   repeatStringNumTimes("abc", 3)
// )

// ========================


// function truncateString(str, num) {
//   let newStr = str
//   if (str.length > num) {
//     newStr = str.slice(0, num) + '...'
//   }



// return newStr

// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// let test = "A-tisket a-tasket A green and yellow basket"
// console.log(test.length)

// ===================================


// function findElement(arr, func) {
//   let num = 0;
//   for (let i = 0; i < arr.length; i++) {
//     num = arr[i]
//     if (func(num)) {
//      return num
//     }

//   }
//   return undefined;
// }

// console.log(

//   findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
// )

// ========================

// function booWho(bool) {

//   return typeof bool === 'boolean';
// }

// booWho(null);

// ===================

// function titleCase(str) {

//   let arr = str.toLowerCase().split(' ');

//   let result = arr.map(function(item){
//     return item.replace(item.charAt(0), item.charAt(0).toUpperCase())
//   })
//   return result.join(' ')



//   ;
// }
// console.log(
//   titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")

// )

//  ==========================================


// function frankenSplice(arr1, arr2, n) {

//   let newArr = arr2.slice()
//   console.log(newArr)

//   for (let i = 0; i < arr1.length; i++) {
//     newArr.splice(n, 0, arr1[i])

//     n++

//   }
//   return newArr;
// }

// console.log(

//   frankenSplice([1, 2, 3], [4, 5, 6], 1)
// )



// ===========================

// function bouncer(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       newArr.push(arr[i])
//     }

//   }
//   return newArr;
// }

// console.log(
//   bouncer([7, "ate", "", false, 9])
// )


// =========================================

// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b)
//   let index = arr.length 
//   for (let i = arr.length; i >= 0; i--) {
//     if (arr[i] >= num) {
//       index = i
//       console.log(index)
//     }    
//   }
//   return index;
// }

// console.log(

//   getIndexToIns([2, 5, 10], 15)
//   )
// =========================

// function mutation(arr) {
//   let firstWord = arr[0].toLowerCase()
//   let secondWord = arr[1].toLowerCase()

//   for (let i = 0; i < secondWord.length; i++) {
//     if(firstWord.indexOf(secondWord[i]) < 0) {

//       return false
//     }

//   }
// return true



// }

// console.log(

//   mutation(["hello", "hey"])
// )


// ==========================

// function chunkArrayInGroups(arr, size) {
//   let newArr = []

//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size))

//   }
//   return newArr;
// }

// console.log(

//   chunkArrayInGroups(["a", "b", "c", "d"], 2)
//   )


// ===========================



// const squareList = arr => {
//   // Only change code below this line
//   let newArr = arr
//     .filter(item => item > 0 && Number.isInteger(item))
//     .map(item => Math.pow(item, 2))

//   return newArr;
//   // Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);


// =========================================

// const globalArray = [5, 6, 3, 2, 9];
// console.log(globalArray)
// function nonMutatingSort(arr) {
//   // Only change code below this line
//  let newArr = arr
//  console.log(newArr)

//  return newArr.sort(function(a, b){
//    return a - b 
//  })

//   // Only change code above this line
// }
// console.log(

//   nonMutatingSort(globalArray)
// )
// console.log(globalArray)



// ============================


// function sumAll(arr) {
//   let newArr = [...arr]
//   newArr.sort((a,b) => a-b)
//   let firstNum = newArr[0]
//   let lastNum = newArr[1]


//   let j = 1
//   // newArr.splice(j ,0 ,firstNum+1)
//   for (let i = firstNum + 1 ; i < lastNum; i++) {
//     newArr.splice(j ,0 , i)
//     console.log(i)
//     j++
//   }

//   // console.log(newArr)


//   return newArr.reduce((prev, cur) => prev + cur)

// }

// console.log(

//   sumAll([10, 5])
// )

//=================================================

// function diffArray(arr1, arr2) {
//   const newArr = [];

//   arr1.forEach(element => {
//     if(arr2.indexOf(element) == -1) {
//       newArr.push(element)
//     }

//   });
//   arr2.forEach(element => {
//     if(arr1.indexOf(element) == -1) {
//       newArr.push(element)
//     }

//   });

//   return newArr;


// }
// console.log(

//   diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])
//   )

// ===========================

// function destroyer(arr) {
//   let valsToRemove = Object.values(arguments).slice(1);
//   let newArr = [...arr]

//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = 0; j < valsToRemove.length; j++) {
//       if (newArr[i] === valsToRemove[j]) {
//        delete newArr[i]
//     }}}

//   return newArr.filter(item => item !== null);;
// }
// console.log(

//   destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// )

// ============================

// function whatIsInAName(collection, source) {
//   // "What's in a name? that which we call a rose
//   // By any other name would smell as sweet.”
//   // -- by William Shakespeare, Romeo and Juliet
//   var srcKeys = Object.keys(source);

//   return collection.filter(function(obj) {
//     return srcKeys.every(function(key) {
//       return obj.hasOwnProperty(key) && obj[key] === source[key]

//     })
//   })

// }



// console.log(

//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
//   )

//===================================================


// function myReplace(str, before, after) {
//     // Find index where before is on string
//     var index = str.indexOf(before);
//     // Check to see if the first letter is uppercase or not
//     if (str[index] === str[index].toUpperCase()) {
//       // Change the after word to be capitalized before we use it.
//       after = after.charAt(0).toUpperCase() + after.slice(1);
//     } else {
//       // Change the after word to be uncapitalized before we use it.
//       after = after.charAt(0).toLowerCase() + after.slice(1);
//     }
//     // Now replace the original str with the edited one.
//     str = str.replace(before, after);

//     return str;
// }



// console.log(

//   myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
//     )

// =============================



// function sumAll(arr) {
//   let newArr = [...arr]
//   newArr.sort((a,b) => a-b)
//   let first = newArr[0]
//   let last = newArr[1]
//   let j = 1;

//   for(let i = first + 1; i < last; i++) {
//     newArr.splice(j, 0, i);

//     j++
//   }

//   return newArr.reduce((prev, cur) => prev + cur)
// }

// console.log(

//   sumAll([4, 1])
// )


//========================================================================

// function diffArray(arr1, arr2) {

//   const newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if(arr2.indexOf(arr1[i]) == -1){
//       newArr.push(arr1[i])
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if(arr1.indexOf(arr2[i]) == -1){
//       newArr.push(arr2[i])
//     }
//   }
//   return newArr;
// }
// console.log(

//   diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])
// )


//===========================================================================================

// function destroyer(arr) {
//   let newArr = arguments[0]
//   let arg = Object.values(arguments).slice(1)

//   console.log(newArr)
//   console.log(arg)


//   return arr.filter(elem => !arg.includes(elem));
// }

// console.log(

//   destroyer([1, 2, 3, 1, 2, 3], 2, 3)
// )


// function spinalCase(str) {

//   return str
//       .replace(/([a-z])([A-Z])/g, "$1 $2")
//       .replace(/\s+|_+/g, "-")
//       .toLowerCase()
// }
// console.log(spinalCase('This Is Spinal Tap'))

//=====================================================


// function myReplace(str, before, after) {
//   let index = str.indexOf(before)
//   console.log(index)
//   // let newStr = str


//   if (before.charAt(0) === before.charAt(0).toUpperCase()) {
//       str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1))

//   } else{
//     str = str.replace(before, after.charAt(0).toLowerCase() + after.slice(1))
//   }

//   // } else {
//   //   str = str.replace(before, after)
//   // }


//   return str;
// }

// console.log(

//   myReplace("I think we should look up there", "up", "Down")
// )


// ================================================

// function pairElement(str) {

//   let dnaArr = []

//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case 'A':
//         dnaArr.push(['A','T'])
//         break;    
//       case 'T':
//         dnaArr.push(['T','A'])
//         break;    
//       case 'C':
//         dnaArr.push(['C','G'])
//         break;       
//       case 'G':
//         dnaArr.push(['G','C'])
//         break;
//     }

//   }

//   return dnaArr;
// }

// console.log(

//   pairElement("GCG")
// )

//=====================================================================

// function fearNotLetter(str) {

//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i)

//     if (code !== str.charCodeAt(0) + i) {
//       return String.fromCharCode(code - 1)
//     }

//   }

//   return undefined;
// }

// fearNotLetter("abce");

// //====================================

// function uniteUnique(arr) {

//   let arg = [...arguments]
//   let newArr = []

//   for (let i = 0; i < arg.length; i++) {
//     for (let j = 0; j < arg[i].length; j++) {
//       if(!newArr.includes(arg[i][j])){
//         newArr.push(arg[i][j])
//       }
//     }
//   }

//   return newArr;
// }


// console.log(

//   uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
//   )

//======================================================


// function convertHTML(str) {

//   let arr = str.split('')
//   console.log(arr)

//   for (let i = 0; i < arr.length; i++) {

//     switch (arr[i]) {
//       case "&":
//         arr[i] = "&amp;";
//         break;

//       case "<":
//         arr[i] = "&lt;";
//         break;

//       case ">":
//         arr[i] = "&gt;";
//         break;

//       case `"`:
//         arr[i] = "&quot;";
//         break;

//       case "'":
//         arr[i] = "&apos;";
//         break;

//       default:
//         break;
//     }

//   }


//   let newStr = arr.join('')
//   return newStr;
// }

// console.log(
//   convertHTML("Hamburgers < Pizza < Tacos")
// )



//=============================================

// function sumFibs(num) {
//   let currentNum = 1
//   let prevNum = 0
//   let result = 0

//   while (currentNum <= num) {
//     console.log(`result = ${result}`)

//       if(currentNum %2 !==0) {
//         result += currentNum
//       }
//       currentNum += prevNum
//       prevNum = currentNum - prevNum
//       console.log(`current = ${currentNum}`)
//       console.log(`prev = ${prevNum}`)
//       console.log('====')

//   }

//   return result;
// }

// console.log(
//   sumFibs(10)

// )


// =========================================


// function dropElements(arr, func) {
//   let newArr = [...arr]


//   while (newArr.length > 0 && !func(newArr[0])) {
//     newArr.shift(0)
//   }

//   return newArr
// }

// console.log(
//   dropElements([1, 2, 3, 4], function(n) {return n >= 3;})

// )


//=======================================

// function binaryAgent(str) {
//   let binaryArr = str.split(' ')
//   let unicodeArr = []

//   for (let i = 0; i < binaryArr.length; i++) {
//     unicodeArr.push(String.fromCharCode(parseInt(binaryArr[i],2)))

//   }


//   return unicodeArr.join('');
// }

// console.log(

//   binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
//   )


// =============================================================

// function truthCheck(collection, pre) {

//   let counter = 0
//   for (let c in collection) {
//       if (collection[c].hasOwnProperty(pre) && collection[c][pre] ){
//         counter++
//       }
//   }


//   return counter == collection.length;
// }

// console.log(

//   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
// )



// function addTogether() {
//   const [firstArg, secondArg] = [...arguments]

//   if (typeof firstArg !== 'number') {
//     return undefined

//   } else if (secondArg == undefined) {

//     function addSecond(secondArg) {

//       if (typeof secondArg !== 'number') {
//         return undefined
//       } else {
//         return firstArg + secondArg
//       }
//     }
//     return addSecond

//   } else if (typeof secondArg !== 'number') {
//     return undefined

//   } else {

//     return firstArg + secondArg
//   }
// }

// console.log(
//   addTogether(2, "3")

// )

// const Person = function(firstAndLast) {
//   // Only change code below this line
//   // Complete the method below and implement the others similarly

//   let fullName = firstAndLast

//   this.getFirstName = function() {
//     return fullName.split(" ")[0]
//   };

//   this.getLastName = function() {
//     return fullName.split(" ")[1]
//   };

//   this.getFullName = function() {
//     return fullName
//   };

//   this.setFirstName = function(input) {
//     fullName = input + " " + fullName.split(" ")[1]
//   };

//   this.setLastName = function(input) {
//     fullName = fullName.split(" ")[0] + " " +  input 
//   };

//   this.setFullName = function(input) {
//     fullName = input
//   };


// };



// const bob = new Person('Bob Ross');
// bob.setFirstName("Haskell")


// console.log(bob.getFirstName())
// console.log(bob.getLastName())
// console.log(bob.getFullName())


//  =================================================================

function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let newArr = []

    for (const item in arr) {
        newArr.push({
            name: arr[item].name,
            orbitalPeriod: count(arr[item].avgAlt)
        })
    }

    function count(avgAlt) {
        let period =
            Math.round(
                (2 * Math.PI) * (Math.sqrt(
                    (Math.pow((avgAlt + earthRadius), 3) / GM)
                )));
        return period;
    }

    return newArr
}

console.log(

    orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
)