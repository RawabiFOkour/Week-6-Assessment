console.log('GOOD LUCK 👩‍💻 👨‍💻')
/* Q1:
Usind For Each
Create a function called addKeyPowerIndex
that takes an array of objects as a parameter
and return this array with add a key to each object
that is the (index) of this object in this array
and the value will be the (power) of the index

var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
]

Ex: addKeyPowerIndex(arrOfObj1)
=> [
  {0: 0, a: 12},
  {1: 1, b: 5},
  {2: 4, c: 16},
  {3: 9, d: 4},
  {4: 16, e: 3}
] 

var arrOfObj2 = [
  { a: 'cat' },
  { b: 'dog' },
  { c: 'duck' }
]

Ex: addKeyPowerIndex(arrOfObj2)
=> [
  {0: 0, a: 'cat'},
  {1: 1, b: 'dog'},
  {2: 4, c: 'duck'}
]   
*/
var arrOfObj1 = [
  { a: 12 },
  { b: 5 },
  { c: 16 },
  { d: 4 },
  { e: 3 }
];
function addKeyPowerIndex() {
  // WRITE YOUR CODE UNDER THIS LINE 
  var ar=[];
  var result=arrOfObj1.forEach((elem,index)=>{
    for (var key in elem) {
      ar.push(elem[key]=index*index);
  }
  // add each index object contan two keys the first key index:index*index  + privious object
  return ar;}) 
return result;
}
console.log(addKeyPowerIndex(arrOfObj1));






/* Q2:
Usind Map
Create a function called decreseBy
that takes an array of numbers and number as a parameter
and return a new array after will decrease this number 
from each element in this array

var arrOfNum1 = [77,5,33]
Ex: decreseBy(arrOfnum1,10)
=> [67,-5,23]

Ex: decreseBy(arrOfNum1,-6)
=> [83, 11, 39]
*/
var arrOfNum1 = [77,5,33];

function decreseBy(arrOfNum1,number) {
  // WRITE YOUR CODE UNDER THIS LINE 
var result=arrOfNum1.map(num=> num - number);
return result;
}
console.log(decreseBy(arrOfNum1,10));
console.log(decreseBy(arrOfNum1,-6));





/* Q3:
Using Filter
Create a function called nameLongerThan
that takes an array of objects and number as a parameter
and return a new array with only the object has a value inside 
the key name longer than this number

var arrOfObj4 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]
Ex: nameLongerThan(arrOfObj4,4)
=>[
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
]

Ex: nameLongerThan(arrOfObj4,6)
=>[
  { name: "elizabeth"}
]
*/
var arrOfObj3 = [
  { name: "alex" },
  { name: "mercer"},
  { name: "alice" },
  { name: "zaheer"},
  { name: "elizabeth"}
];
function nameLongerThan(arrOfObj3,number) {
  // WRITE YOUR CODE UNDER THIS LINE      
  var result = arrOfObj3.filter(ob=>{
    for (var key in ob) {
     if (ob[key].length>number) {
       return ob[key];
     }
    }
  })  
  return result;
}
console.log(nameLongerThan(arrOfObj3,4));







/* Q4:
Using Reduce
Create a function called avgLength
that takes an array of objects of strings and key as a parameter
and return the avg of the length of this key inside this objects

var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
]
Ex: avgLength(arrOfObj4,"name")
=> 6

Ex: avgLength(arrOfObj4,"food")
=> 6.8
*/
var arrOfObj4 = [
  { name: "alex", food: "fried chiken" },
  { name: "mercer", food: "pizaa" },
  { name: "alice", food: "burger" },
  { name: "zaheer", food: "hot dog" },
  { name: "elizabeth", food: "eggs" }
];
function avgLength(arrOfObj4,key) {
  // WRITE YOUR CODE UNDER THIS LINE   
  var result= arrOfObj4.reduce((acc,elem)=>{
    for(var key in elem) {
    return acc + elem[key].length;
  }

},0)  ;    
return result/arrOfObj4.length;
}
console.log(avgLength(arrOfObj4,"name"));
// Good luck :)