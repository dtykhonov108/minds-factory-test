// НЕ ВИКОРИСТОВУЙ any
// 1. Допиши типи всім змінним
let num:number = 5
let str:string = 'hello'
let isIt:boolean = false

let arr:[number, string, boolean] = [num,str,isIt]

let obj:{a:number, b:[number, string, boolean], c:string} = {
  a: num,
  b: arr,
  c: num+str
}

str = '10';
isIt = true;
obj.a = 108;


// 2. Потрібно прописати типи для змінних, аргументів функції та що вона функція

const funcData:{name:string, sex:string|undefined, stats:{age:number, weight:number}}[] =[
  {
    name: "Alfred",
    sex:'male',
    stats: {
        age: 32,
        weight: 70
    },
  },
    {
      name: "Patricia",
      sex:undefined,
      stats: {
          age: 32,
          weight: 55
      }
    }
]

const setGender =  (data:{name:string, sex:string|undefined, stats:{age:number, weight:number}, gender:string}[]):void => {
  data.forEach(item => {
    if(item.sex) {
      item.gender = 'simple'
    } else {
      item.gender = 'unbinary'
    }
  })
}

const returnNames = (data:{name:string, sex:string|undefined, stats:{age:number, weight:number}}[], name:string)=>{
  return data.find(item => item.name === name)
}

// 3. Допиши недостаючі інтерфейси
// Також потрібно створити enum для розмірів пташок (big, medium, small)

interface ICreature {
  canBreath: boolean
}

interface IBird extends ICreature {
  size:string;
  canFly:boolean;
}

const penguin:IBird = {
  canBreath:true,
  size: 'big',
  canFly: false,
}

// ...
interface IBirdWithFeathers extends IBird{
  feathers:boolean;
}

const sparrow:IBirdWithFeathers = {
  canBreath:true,
  size:'small',
  canFly: true,
  feathers: true
}

// 4. Викличи метод length за допомоною casting

let x: unknown = 'show my length';
console.log((x as string).length);

// 5. Скористайся utility types
//  a) Створи тип в якому всі ці поля обов'язкові
//  b) Створи тип в якому всі ці поля необов'язкові

interface SimpleObj {
  name:string,
  age:number,
  email?:string,
  address?:string
}

type OptionalObj = Partial<SimpleObj>;

type RequiredObj = Required<SimpleObj>;

const obj1:OptionalObj = {
  name:'string',
  age:44,
  
}
const obj2: RequiredObj = {
  name:'Jojo',
  age:16,
  email:'forexample1337@gmail.com',
  address:'Vinnitsya, Soborna street 111'
}
 