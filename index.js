

/*let arr = [1, 2, 3];
 let result  = arr.map((item) => {
   return item * 2;});
   console.log(result);

   let arr = [1, 2, 3];  //первое задание, как скопировать один массив в другой
   let test = arr;
   test.push('a');
   console.log(test);
   console.log(arr);*/

   let user1 = {     //для второго задания   Копирование объектов и копирование массивов
     name: 'test',
     lastName: 'last'
   };

   //let user2 = Object.assign( {}, user1); 
   let user2 = user1;
   user2.name = '123';
   console.log(user1.name);
   console.log(user2.name);