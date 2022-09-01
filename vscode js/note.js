 
 let recFunc=(x)=>{
    if(x>100){ 
        return x ;}
    else{ 
return recFunc(x)*x;
    }
}
 console.log(recFunc(2));

 function foo() {
    var f = (...args) => args[0];
    return f(2);
  }
  
  foo(6); // 2

  let arr=[1,2,5];
arr.splice(-1,0, 3,4);
console.log(arr);

let arrOfNumb=[6,7,8,9,10];

let arr2=arrOfNumb.concat(arr);
console.log(arr2);

arr2.forEach(console.log); 

/*arrOfNumb.forEach((item, index, array) => {
    alert(`${item} имеет позицию ${index} в ${array}`);
  }); */


 let arrOfString='this is like expaple of this exaple lol';
 let arrstr=arrOfString.split(' ')
 console.log(arrstr);
 console.log(arrstr.join(' '));

 let result=arrOfNumb.reduce((sum, currant)=>sum+currant, 0);
 console.log(result);


 function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 1000, "Привет", "Джон"); 
  clearTimeout(sayHi);



let  inputObj={ 
    name:"Andrew",
    id: 25,
    isActive: true
  }
function getKeyToProp(inputObj){
    const outputObj={};
for (let prop in inputObj){
    outputObj[inputObj[prop]]=prop;
}
return outputObj;
}
console.log(getKeyToPropObjectCopy(inputObj));


function getNumberFromArrCompare(){

    function arrRandom(){
        arr=[];
          for (let i=0; i<5; i++ ){
     arr[i]=Math.round(Math.random()*(15-1)+1);   
     };
     return arr;
      }
 let   arr1=arrRandom(); 
  let   arr2=arrRandom();
  let   arr3=arrRandom();

let randomNumber=Math.round(Math.random()*(15-1)+1);

if( (arr1.includes(randomNumber) && arr2.includes(randomNumber))||(arr2.includes(randomNumber) && arr3.includes(randomNumber))||(arr1.includes(randomNumber) && arr3.includes(randomNumber))||(arr1.includes(randomNumber) && arr2.includes(randomNumber)&& arr3.includes(randomNumber))){
 console.log(`Згенероване число ${randomNumber} є в декількох масивах`)
    }
    else if(arr1.includes(randomNumber)|| arr2.includes(randomNumber)||arr3.includes(randomNumber)){
console.log(`Згенероване число ${randomNumber} є в масиві ${arr1}`) }
else{  
    console.log(`Згенероване число ${randomNumber} нема в жодному масиві`) 
}
    }; 

getNumberFromArrCompare();

    


let randomNumber=Math.round(Math.random()*(5-1)+1);
console.log(randomNumber);
const arr5=[1,2,3,4,5];
if (arr5.includes(randomNumber)){
console.log(` it is`);
};

const b=2;
if(arr5.includes(b)){
console.log(`${b} in ${arr5}`)
}else console.log('error');

 function arrRandom(){
   arr=[];
     for (let i=0; i<5; i++ ){
arr[i]=Math.round(Math.random()*(15-1)+1);   
};
return arr;
 };

 let   arr1=arrRandom();
 console.log(arr1);


 let codes = {
    title: "Германия",
    author: "Швейцария",
    lirary: "Великобритания",
    // ..,
    dimas: "США"
  };
  function sortObj(obj){
    let strObj='';
  for (let prop in obj){
strObj=strObj+`${[prop]}, `;  
  }
  let strObjEdit=strObj.slice(0, -2);
  return strObjEdit;
}
  sortObj(codes);

 /*  let arrStr=strObj.split(',');
   arrStr.pop();
   arrStr.sort();

let sortObject={};
   for (let key of arrStr){
    sortObject[key]=obj[key];
   }
   return sortObject;
}
sortObj(codes);
*/

function isFillArrOfStr(strStart, strEnd, step){

strAlphabet=`a b c d e f g h i j k l m n o p q r s t u v w x y z `;

let result='';
let arrAlph = strAlphabet.split(' ');
let finalArr = arrAlph.slice(arrAlph.indexOf(strStart), arrAlph.indexOf(strEnd));

for(let i=0; i<finalArr.length; i+=step){
result=result+`${finalArr[i]}, `;
}
return result;
}
console.log(isFillArrOfStr('a', 's', 2));

function remove_array_elemnt(arr, elem){

   /* let strArr=arr.join(',');

let arrUntil = arr.slice(0,elem-1);
let arrAfter = arr.slice(elem, );
let resultArr = [];
return resultArr.concat(arrUntil, arrAfter);
let removeArr = arr.filter(item => item.id < 3);
return */
/*
for (let prop in arr){
    if (arr[prop]===elem){
        arr.splice(elem-1,1);
    }
}
return arr;*/

arr.splice(arr.indexOf(elem), 1);
return arr;
}

console.log(remove_array_elemnt([1,3,2,4,5,6,7,8,9], 2));
const arrnumbsus=[1,2,6,7,8,10];
console.log(remove_array_elemnt(arrnumbsus, 8))

function haveProp(obj, prop){
let strObj='';
for (let key in obj){
    strObj=strObj+`${[key]},`;
}
let arrObj=strObj.split(',');
return arrObj.includes(prop);
}

const obj={
    authot:`gagchad`,
    name: `dimas`,
    sex:'male',
    age:26
}
const prop=`name`;
const prop2='names'
console.log(haveProp(obj,prop));
console.log(haveProp(obj,prop2));

function getArraytoObj(arr){
let strArr='';
let objOfArr={};
for(let key in arr){
    strArr=strArr+`${arr[key]},`;
    }
    let arrOfNames=[], arrOfValues=[];
let arrOfProp=strArr.split(',');
  for(let i=0, j=0;  i<arrOfProp.length-1; j++, i=i+2){
arrOfNames[j]=arrOfProp[i];
  }
  for(let a=1, b=0;  a<arrOfProp.length-1; b++, a=a+2){
    arrOfValues[b]=arrOfProp[a];
      }

for(let c=0; c<arrOfNames.length; c++){
objOfArr[arrOfNames[c]]=arrOfValues[c];
}
return objOfArr;
}
let  arrObj=[['name','dima'],['surname','Vadya'],['ages',25],[ 'names','Kostya'],['age',26]];
console.log(getArraytoObj(arrObj));

function getArrFromObj(obj){
  let result=[];
  for( let key in obj){
  result.push([key, obj[key]]); 
}
  return result;
}
const obj1 = {
name:'dydda',
age:26,
surname:'jujube'
}
console.log(getArrFromObj(obj1));

function getLongestStartStr(arr){
let funcArr=arr[0];
for(let prop of arr){
   funcArr[prop]
}

return funcArr;
}

const arrOfStr=['goose', 'gone', 'gooogle', 'googgyy'];
console.log(getLongestStartStr(arrOfStr));

function getLongPref() {
  const result = [];
  const sortWords = words.sort((prev, next) => prev.length - next.length);
  for (let i = 0; i < sortWords[0].length; i++) {
      for (let j = 1; j < sortWords.length; j++) {
          if (sortWords[0][i] !== sortWords[j][i]) {
              return ''
          }
      }
      result.push(sortWords[0][i]);
  }
  return result.join('');
}

function getIndexFromArr(arr, sum){
  let result=[];
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
      if (arr[i]+arr[j]===sum){
        result=`${arr.indexOf(arr[i])},${arr.indexOf(arr[j])}`; 
        
      }
    }
  }
  return result;
}
const suma=50;
const arrNum=[10, 20, 30, 10, 50, 50];
console.log(getIndexFromArr(arrNum, suma));

function getReadingBook(arr){
let result=[]; 
for (let prop in arr){
if(arr[prop].readingStatus===true){
result.push(`${arr[prop].author}, ${arr[prop].title} `);
}
}
return `Зараз читають: ${result}`; 
}
const objbook=[
 { author:`gagchad`,
  readingStatus: true,
  title:'male',},

  { author:`omegachad`,
  readingStatus: false,
  title:'girl',},

  { author:`gagchadiques`,
  readingStatus: true,
  title:'there',},
]
  console.log(getReadingBook(objbook));



  function getNewProp(obj){
 let  result={};
 let p=obj.traingle.a+obj.traingle.b+obj.traingle.c;
obj.circle={
radius:obj.circle.radius,
measurement:obj.circle.measurement,
area:Math.PI*Math.pow(obj.circle.radius, 2), 
  perimeter:2*Math.PI*obj.circle.radius
}
obj.traingle={
  a:obj.traingle.a, b:obj.traingle.b, c:obj.traingle.c, area:Math.sqrt(p*(p-obj.traingle.a)*(p-obj.traingle.b)*(p-obj.traingle.c)), sinA:Math.sin(obj.traingle.a), sinB:Math.sin(obj.traingle.b), sinC:Math.sin(obj.traingle.c)
}
obj.rectangle={
size:obj.rectangle.size, perimeter:obj.rectangle.size.reduce((sum, current) => sum + current, 0) 
}
return result={obj};
  }

  let objFig={
    circle:{ radius: 15, measurement: 'centimeters'},
    traingle:{ a: 15, b: 10, c: 25},
    rectangle:{size:[25, 35, 25, 35]}
  }
  console.log(getNewProp(objFig));


  function sortArr(arr){
    let result=[];
    for(let key in arr){
 if (arr[key]!== null && arr[key]!== false && arr[key]!== 0 && arr[key]!== undefined){
  result.push(arr[key]);
 } 
  }
  return result;
  }
  let arrOfEver=[58, 'asd', null, 39, 41, 'sosi', false, 0];
  console.log(sortArr(arrOfEver));


  function rangeBetween(min, max){
let result=[];
for (let i=min; i<=max; i++){
  result.push(i);
}
return result;
  }

  console.log(rangeBetween(2,7));
  console.log(rangeBetween(-5,8));

  
  function sortArr(arr){
    let result=[];
    for(let key in arr){
 if (typeof arr[key] === 'number'  && arr[key]!== NaN){
  result.push(arr[key]);
 } 
  }
  return result;
  }
  let arrOfEver11=[58, 'asd', null, 39, 41, 'sosi', false, 0];
  console.log(sortArr(arrOfEver11));


  function sortArr(arr1, arr2){
let result=[];
result=arr1.concat(arr2);
for (let i=0; i<result.length; i++){
  for (let j=i+1; j<result.length; j++)
   if(result[i]===result[j]){result.splice(j,1);
  }
}
return result.sort( (a, b) => a - b );
  }

  let arr11=[1,2,3,5,6,9,7], arr22=[3,2,5,15];
  console.log(sortArr(arr11,arr22));

  function largestNumb(arr, number){
    let result=[];
result=arr.slice(0, number);
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
result.sort(compareNumeric);
return result[number-1];
};
  

  const arrOfMax=[1,4,555,7,88,999, 1337];
  console.log(largestNumb(arrOfMax, 5));

  

  function getObjSize(obj){
    let result=''; let i=0;
    for (let prop in obj){
      i++;
    }
    return `Розмір об'єкту: ${i}`; 
    }
    const objectbook={
      author:`gagchad`,
      readingStatus: true,
      title:'male'}

      console.log(getObjSize(objectbook));

      function changeElem(arr, numberFrom, numberTo){
        let result=[];
        result=arr.slice();
        result[numberTo]=arr[numberFrom];
        result[numberFrom]=arr[numberTo]
        return result;
      }
        
          let arrToFrom=[1,2,3,4,5,6,7]
          console.log(changeElem(arrToFrom, 1, 3));

          /*
let timerCount=0; 
let timerId;
const startTimer=()=>{
  console.log('startTimer()');
  timerId = setInterval(() => {
    console.log(`->${timerCount++}`)
  }, 1000)
};/*
const pauseTimer=()=>{
  clearInterval(timerId);
};
const stopTimer=()=>{
  clearInterval(timerId);
  timerCount = 0;
}; */
/*
let timerCount=0;
let timerId;

const startTimer=(arr, amount, sec)=>{
  timerId=setInterval(()=>{
  for(let i=0; i<arr.length; i++){
  console.log(`->${arr[i]}`);
}
}, sec*1000);
setTimeout(() => { clearInterval(timerId); }, amount*sec*1000);

}

const pauseTimer=()=>{
  clearInterval(timerId);
};
*/
let timerId;
let timerCount=0;
const startTimer= async (delay, amount )=>{
  await new Promise((resolve)=>{
    setTimeout(() =>{
    timerId = setInterval(()=>{
        console.log(`->${timerCount++}`);
        if(amount<timerCount){
          clearInterval(timerId);
          resolve();
         } 
         } , 1000);
        
    }, delay*1000)}
  )
}


 class Circle{
    constructor(cirRadius){
        this.cirRadius=cirRadius;
    }
    area(){
     return Math.round(Math.PI*Math.pow(this.cirRadius, 2)*100)/100;
    
    }

    perimeter(){
     return Math.round(2*Math.PI*this.cirRadius*100)/100;
    }
    
 }

 let firstCircle = new Circle(3), secondCircle = new Circle(4), thirdCircle = new Circle(5);
 console.log(`Area = ${firstCircle.area()}, Perimeter = ${firstCircle.perimeter()}`);
 console.log(`Area = ${secondCircle.area()}, Perimeter = ${secondCircle.perimeter()}`);
 console.log(`Area = ${secondCircle.area()}, Perimeter = ${secondCircle.perimeter()}`);

 class Cylinder{
  constructor(cylHeight, cylDiameter){
    this.cylHeight=cylHeight;
    this.cylDiameter=cylDiameter;
  }
 }
 function volume(){
  return Math.round(Math.PI*Math.pow(this.cylDiameter/2, 2)*this.cylHeight*10000)/10000;
}
Cylinder.prototype.volume=volume;

 let firstCylinder = new Cylinder(7,4)
 let secondCylinder = new Cylinder(8,5)
 let thirdCylinder = new Cylinder(9,6)

 console.log(`Volume: ${firstCylinder.volume()}`);
 console.log(`Volume: ${secondCylinder.volume()}`);
 console.log(`Volume: ${thirdCylinder.volume()}`);

 

 const promise = new Promise((resolve,reject)=>{ 
  setTimeout(() => {
  console.log('once');
  resolve('success');
 }, 1000)
})

let start=Date.now();
 promise.then((res)=>{
  console.log(`success ${Date.now()-start}`);
 }
 )
 





const propmiseDate = new Promise((resolve,reject)=>{ 
  setInterval(() => {
  let date= new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
 }, 1000)
})

class Oclock{

  currentTime(){
  setInterval(() => {
    let date= new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
   }, 1000)}

}

let getTime = new Oclock;
console.log(getTime.currentTime());


function* makeNumbers(){
  for(let i=0; i<100; i++){
    yield i;
  }
}
let numbers=makeNumbers();
console.log(numbers.next().value);

function* isIterable(){
    yield 'This';
    yield 'is';
    yield 'iterable'
    return '';
  }
let iterable=isIterable();
  for(const val of iterable){
    console.log(val);
  }