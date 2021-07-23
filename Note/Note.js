//Javascript Note

* 8 data types:undefined,null,boolean,string,symbol,bigint,number,object.

*var test = 11 % 3; // %表示兩數值相除的餘數，在此為2

*a += 12 equal to a = a + 12

*= "I am a \"double quoted\" string inside \"double quotes\"."; // 在"前面加\可以避免斷句 稱作escape character

*\n = newline
 \r = carrige return // Hello/rWorld 會顯示World，把Hello取代掉 
 \t = tab
 \b = word boundary // Hello/b/bWorld 會顯示HelWorld，把前二個字母取代掉
 \f = form feed //直接換頁

*var lastName = "Lovelace";
console.log("lastName".length); // 可以算出lastName值的文字長度.

*var firstName = "Charles";
 var firstLetter = "firstName[0]"; //0代表值的初始，在此處就是C。
 var firstNameLastLetter = firstName[firstName.length - 1]; //文字長度-1就是最後一個字母的值

*var myArray = ["Good", 31]; //含有Multiple Values : string and number. 
 var myArray = [["Hello",31],["Love",17]]; //Multi-dimensional array

*var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3] = [[10,11,12],13,14];
arr[3][0] = [10,11,12]
arr[3][0][1] = 11;

*myArray.push(["yoyo",7]);
 //就會變成[["Hello",31],["Love",17],["yoyo",7]]; 把值加到變數最後方
 // .unshift 把值加到變數最前方
*var removedFromMyArray =  myArray.pop();
 console.log(myArray); //變成["Good",31]
 console.log(removedFromMyArray); //變成["Love",17]
 // .pop()可以取代掉原本變數裡最後面的值
 // .shift可以取代掉原本變數裡最前面的值

// push,pop,shift,unshift

*var myList = [["Chocolate",1],["Candy",4],["Drinks",5],["Beers",3],["Grapes",2]]; //列出清單

//Define function
*function reusableFunction(){ 
  console.log("Hi World");
}

//Call function
reusableFunction();

*function functionWithArgs(a,b){
  console.log(a + b);
}

functionWithArgs(1,2); == 3
functionWithArgs(7,9); == 16
//a和b稱作argument,是在程式運行時參數丟入的區域，下列將值1,2輸入，即可得出function運算出的值。

*function timesFive(num){
  return num * 5;
}

var answer = timesFive(3); //即可算出15

//undefined value return from a function

*var sum = 0;

function addThree(){
  sum = sum + 3;
}

function addFive(){
  sum += 5 ;
}

addThree();
addFive();
//sum就會變成8

*function trueOrFalse(wasThatTrue){
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
*
//Boolean 條件式 if

//== equality 1 == "1"
//=== strict equality ,  1 === 1 but 1 not equal to "1"
//inequlaity != , 1 != 2 , true
//!== strict inequlity , 1 !== 1 , false , 1 !== "1" , true

// > greater than , 6 > 5 , true 
// >= greater than or equal to 6 >= 6 , true 
// < less than
// <= less than or equal to
*
if (num > 5){
  if (num < 10){
    return "Yes";
  }
  return "No";
}

is equal to 

if (num > 5 && num < 10){
  return "Yes";
}

return "No";

//
*
if (num > 20 || num < 10){
  return "Yes";
}

return "No";

// ||代表or
*
if (num > 10){
  return "Bigger than 10";
} else {
  return "10 or Less";
}

//在此 else = if (num <= 10) 
*
if (num > 15){
  return "Bigger than 15";
} else if (num < 5){
  return "Less than 5";
} else {
  return "Between 5 and 15";
}

//額外添加一個if 可以用 else if
*
function testSize(num) {
  if (num < 5){
    return "Tiny";
  } else if (num < 10){
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
  } else {
    return "Huge";
  }
// else if 可以重複疊加
*
function caseInSwitch(val) {
  var answer = "";
  
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "Nope";
      break;
  } 

  return answer;
// 可以用case來代表各種情況，找不到case就回覆default
*
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;
}

//case們可以寫在一起ㄛ
*
function isLess(a, b) {
  
  return a < b; 
}

//此式即會回覆 a < b 為true or false.
//不用寫成 
if (a < b){
  return true;
} else {
  return false;
}

//
** !important

var count = 0;

function cc(card) {
  
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
    case 7:
    case 8:
    case 9:
      count += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -= 1;
      break;
  }
  
  
  var holdbet = "Hold"
  if (count > 0){
    holdbet = "Bet"
  }
  return count + " " + holdbet;
  
}

//
*
var myDog = {
  name: "Hello",
  "legs": 4,
  "tails here" : 1,
  "friends":["Cat","Mouse"]
};

//myDog 是object，裡面有properties，標題可以不用""
//delete myDog.legs; 可以把那段property刪除
* var useLegs = myDog.legs //即可取得4的資料
* var needTail = myDog["tails here"]; //假設標題有空格，就要用[]的符號

//
*
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;      
var player = testObj[playerNumber];

//再用一個var來取得object中的數字標題
*
var someObj = {
  propName: "Hans"
};

function propPrefix(any){
  var a = "prop";
  return a + any;
}

var someProp = propPrefix("Name");
console.log(someObj[someProp]);

//可以用於property為浮動的時候

*
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha":"Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta": "Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
  };
  
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");

//查找功能 JSON Javascript objective notation
*
function checkObj(obj, checkProp) {

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

//確認項目有無在Obj裡面，hasOwnProperty可以確認有無property在Object裡面
//myObj.hasOwnProperty("top");  如果有top就會顯示true,無則顯示false
*
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
//可以讀取層層裡面的資料！Access nested object
*
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
//Access nested arrays

//freeCodeCamp 83/111超重要 程式大集合
*
// Setup 在此稱["albumTitle","artist","tracks"]為標題
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") { //如果要輸入的標題不是tracks的話就加上去，然後加上後面的值
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) { //如果標題沒有tracks的話，就加tracks上去並附上值
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") { //如果標題是tracks，但是value有東西的話就加到原本的tracks後面
    records[id][prop].push(value);
  } else if (value === "") { //如果沒有value，直接把標題刪除
    delete records[id][prop];
  }
  return records;
}
updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');
console.log([recordCollection[1245]]);
//

*
var myArray = [];
var x = 5;
while (x >= 0){
  myArray.push(x);
  x --;
}
//yoyoyo,loop終於來囉，看好了我只示範一次。

*
var myArray = [];
for (var i = 1; i < 6; i++){
  myArray.push(i);
}

//for (a; b; c){} a是initialization statement, b是condition statement, c是final expression. 起始;條件;作用

*
var myArr = [ 2, 3, 4, 5, 6];
for ( var total = 0; total < myArr.length; total++){
  console.log(myArr[total]);
}
//利用.length的方式，將myArr之中的數字一一console出來ㄡ

*
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for ( var i = 0 ; i < myArr.length; i++){
  total += myArr[i];
}

//重複疊加myArr裡面的數字

*
function multiplyAll(arr) {
  var product = 1;
  
  for (var i = 0; i< arr.length; i++){
    for (var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }

  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

//重複相乘arr裡面的數字

*
var myArray = [];
var i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);

//do...while loop是不論如何先跑程式再看while，
//因此一開始是先push 10進到myArray裡面，再來變成11測試後沒過，
//迴圈便終止，僅執行myArray.push(i)即結束。

*
function sum(arr, n) {

  if ( n <= 0){
    return 0
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
 
}

//重複加上arr陣列裡面的數字，sum([2,3,4],1) = 2; sum([2,3,4,5],3) = 9;

*
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

//重複乘上arr陣列裡面的數字，起始為1
*

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if(contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contact";
} 

//Profile Lookup
//用for來一個一個檢視if
//lookUpProfile("Kristian","lastName") will return Vos
//lookUpProfile("Bob","Potato") will return "No such contact"
//lookUpProfile("Akira","address") will return "No such property"

*
function randomFraction() {
  
  return Math.random();
}

//Math.random()可以產出0<=x<1的數字

*
function randomWholeNum() {
  
  return Math.floor(Math.random() * 10);
}

//Math.floor()可以把Math.random()無條件捨去小數並僅留下整數，
//在此會得到0<=x<=9的數字

*
function randomRange(myMin, myMax) {
 
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

//在兩個數值之中隨機取一個數字，概念 = Math.random() * 兩個數字中間有幾個數字 + 最小值的位移量

*
function convertToInteger(str) {
  var a = parseInt(str);
  return a
}

convertToInteger("56");

//解析string裡面的數字並轉換成整數

*
function convertToInteger(str) {
  var a = parseInt(str,2)
  return a
}

convertToInteger("10011");

//將數字轉換為不同的進位制，(str,2)的2代表進位法 between 2 and 36

*
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

//conditional operator a ? b : c 是if/else的變化，
//a 是condition, b 是當condition = true 時的code, 
//c 是當condition = false 的code

*
function checkSign(num) {
  return (num > 0) ? "positive"
  : (num < 0) ? "negative"
  : "zero"
};

checkSign(10);

//多重conditional operator 酷吧ouo

*
function countdown(n){
  if (n < 1){
    return [];
  } else {
  const countArray = countdown(n - 1);
  countArray.unshift(n);
  return countArray;
  }
}

//console.log(countdown(5)); 就會是[5,4,3,2,1]
//const是定義為常數

*
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5)); 

//[1,2,3,4,5]

*
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum){
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1);
    countArray.push(endNum);
    return countArray
  } 
};

//rangeOfNumbers(1,3) = [1,2,3]

*
Object.freeze(); 

//可以固定const所定義的值 

*
const myFunc = function() {
  const myVar = "value";
  return myVar;
}

and it could be rewrited to

const myFunc = () =>{
  const myVar = "value";
  return myVar;
}

also equal to

const myFunc = () => "value";

//()就是function "value"就是return的值

*
arr.reduce(callback[accumulator, currentValue, currentIndex, array], initialValue)

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4)) 就會 = 10
console.log(sum()) = 0

//reduce()的寫法，如果不設置initialValue的話，accumulator就會等於陣列裡的第一個數字，
//而currentValue則會等於第二個數字

*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2); //這邊就會等於arr1 ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

//spread operator 可以展開數列ㄛ酷ㄅ

*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};


const {today, tomorrow} = HIGH_TEMPERATURES;

//可以直接讀到77跟80這兩個數字
  
const {today: highToday,tomorrow: highTomorrow} = HIGH_TEMPERATURES; 

//可以直接將array裡面的variable改名

const {today: {low : lowToday, high :highToday}} = LOCAL_FORECAST; 

//array裡面的property更改

*
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

//結果就會是1,2,5。逗號可以代表array裡面的數字位置

*
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [a, b, ...arr] = list; 
  return arr;
}
const arr = removeFirstTwo(source);

//arr就是去掉前兩個數字的剩餘陣列[3,4,5,6,7,8,9,10]

*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max, min}) => (max + min) / 2.0 ; 

//可以直接destructure in a function argument

*
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting) //就會顯示Hello, my name is Zodiac Hasbro!...

//利用$符號抓取const裡面的值

*
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
const getMousePosition = (x, y) => ({ x, y });

//改寫句子


