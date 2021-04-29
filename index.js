

/*let arr = [1, 2, 3];
 let result  = arr.map((item) => {
   return item * 2;});
   console.log(result);

   let arr = [1, 2, 3];  //первое задание, как скопировать один массив в другой
   let test = arr;
   test.push('a');
   console.log(test);
   console.log(arr);

   let user1 = {     //для второго задания   Копирование объектов и копирование массивов
     name: 'test',
     lastName: 'last'
   };

   //let user2 = Object.assign( {}, user1); 
   let user2 = user1;
   user2.name = '123';
   console.log(user1.name);
   console.log(user2.name);
   const languages = ['php', 'php', 'css', 'script', 'html', 'html', 'java'];
   const result = [ ];
   languages.forEach((item) => {
     if (!result.find( value => item === value)){
      result.push(item);
     }
   });
   console.log(result);

   const fulsyArray = [NaN, 0, 77, false, -17, undefined, 99, null];
   const filteredResult = falsyArrayFilter(item=>!!item)
   console.log(filteredResult);

const sum1 = sum1 = 1 + 2 * 2;
const sum2 = sum2 = 6 + 7 * 2;
const sum3 = sum3 = 3 + 4 * 8;
 

function sum(a,b,c){
  return a + b * c;
}
const totalByFun = sum(1,2,2) + sum(6,7,2) + sum(3,4,8);
console.log(totalByFun);


let a = 10;
function foo (a) {
  a = 7;
}
foo(a);
console.log(a);

function sayHello(name){
  alert('Hello ' + name);
}
sayHello("alex");

function getMinMax(mass){
let min,max;
mass.forEach(item => {
  if(min === undefined){
  min = item
  }if(max === undefined){
    max = item;
  }
  if(min > item){
    min = item;
  }
  if(max < item){
    max = item;
  }

});
return{
  min : min,
  max : max
};
}

console.log(getMinMax ([1, 7, 9, -8, 16, 4]));

function getMinMax(mass){
  return{
    max: Math.max.apply(null, mass),
    min: Math.min.apply(null,mass)
  };
}
console.log(getMinMax ([1, 7, 9, -8, 16, 4]));

let obj = {
  name: '123',
  lastName: '248',
  getFullName: function( ){
    return this.name + this.lastName;
  }
};
console.log(obj.getFullName());

console.log(Object.keys(obj));
console.log(Object.getOwnPropertyNames(obj));
console.log(Object.values(obj));
console.log(obj.hasOwnProperty('text'));

const user = { name: "text"};
const test = {...user};
test.name ="new";
console.log(user.name);
console.log(test.name);
*/
 const obj = {a: 1, b: 2, c: 3};
 console.log(obj.c);
 console.log(obj['c']);

let obje = {
  Den: 1000,
  Matt: 5000,
  Steve:2000
};
 let mass = Object.values(obje);
 mass[0];
 mass[2];
console.log(mass[0]);

 let objec = {

  1:'Monday',
  2:'Tuesday',
  3:'thirsday',
  4:'thuesday',
  5: 'Friday',
  6: 'Sanday',
  7: 'Saterday'
 };

let day = 3;
console.log(objec[day]);
