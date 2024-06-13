  // const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
// 2.Add two numbers (10,88) to end of arr1 (push methods)
// 3.Remove first two numbers from arr1
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// 5.Remove four numbers in front of arr1(shift)

//const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// arr1.push (10,88)

//console.log(arr1); 

//const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//arr1.shift(9)
//arr1.shift(1)
//console.log(arr1);

//const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
//arr1.unshift('0,9,11')
//console.log(arr1);

//const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

//arr1.shift('9')
//arr1.shift('5')
//arr1.shift('1')
//console.log(arr1);


//let text = 'ulfat'

//text.replace('u', 'U')

//text=text.replace('u','U')

//console.log(text)




////////////// TASK 6 //////////////
//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]


//const result = arr2.map(item => item.replaceAll('Gulshen', 'Rovshen'))

//console.log('resul',result);

//2.Change Gulshen to Rovshen 

//const result2 = arr2.map(item => {
  //  if (item === 'Gulshen') {
    //    return item = 'Rovshen'
    //} else {
      //  return item
    //}
//})

//console.log('result2',result2);

//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]

//4.Console only names which is Anar

//console.log(arr2.filter((onlyAnar)=> onlyAnar=="Anar"));

//5.Console all names where name is Anar, then change it to "Perviz"
//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]
//console.log(arr2.toString().replaceAll("Anar","Perviz").split('='));

//Console last second value of arr2

//console.log(arr2[arr2.length - 2]);
// 7.Console length of arr2
//console.log(arr2.length)

////////////// TASK 7 //////////////
//const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// 1.Show only numbers
// 2.Show only true values
// 3.Show only false values
// 4.Show only strings


//const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

//console.log(arr3.splice(0,4));

 //const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, something, false]

// console.log(arr3.splice(0,6));

//const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, something, false]

// 1.Show only numbers

//console.log(arr3.filter((number)=>typeof number==="number"));


// let arr1=[]
// let falsy=[]
// arr3.filter((value)=>
//     if (value){
//         arr1.push(value);
// }else{
//     falsy.push(value);
// }
// }
//  );
// console.log(arr);
// console.log(falsy);


//4.Show only strings
//console.log(arr3.filter((string)=>typeof string==="string"))




////////////// TASK 8 //////////////+
// const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]

// 1.Console (only even numbers)

// const evenNumbers = numbers.filter(number => number % 2 !== 0);


// console.log(numbers.filter((number) => number %2 !==1));

// console.log(evenNumbers);




//////////taks9//////////
// const obj = {
//   email: 'ulfat@gmail.com',
//   info: {
//       gender: 'Male',
//       loc: {
//           city: "Baku",
//           street: 'Nizami 22',
//           education: {
//               "uni name": "ADNSU",
//           }
//       }
//   }


//4.Console city
// 3.Console gender

//console.log(obj.info.loc.city)
//console.log(obj.info.gender);



////////////// TASK 11 //////////////

//let fullName = 'Ulfat Zakirli Rovshen'


//console.log(fullName.split(""));


// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
//let n1 = fullName.split(' ');
// let huseynovIndex = n1.findIndex(lastName => lastName === 'huseynov');
// if (huseynovIndex !== -1) {
//     let huseynov = n1.splice(huseynovIndex, 1);
//     n1.unshift(huseynov);
// }
// 


// 3) Alinan yeni arrayi stringe cevirin(join)

// let n = n1.join(' ');
// console.log(n);



//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

//Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//let count = 0;
//for (let i = 0; i < arr.length; i++) {
  //  if (arr[i] === 5) {
    //    count++;
    //}
//}

//console.log(count);


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//Y//uxaridaki arraydaki butun reqemlerin cemini tapin

// let ages = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let sum = 0

// ages.map(age => sum += age)

// console.log(sum);



//let arr1 = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//arrayda tekrar olunan reqemleri artan sira ile duzun

//arr1.sort((a, b) => a - b);
//console.log(arr1)



//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

//let maxNumber = Math.max(...arr);
//let countOfMax = arr.filter(num => num === maxNumber)
//console.log(maxNumber);
//console.log( countOfMax);

//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]
//4 reqeminin arrayin hansi indexlerinde oldugunu gosterin

// let  newArr=[]
// arr.map((numbers,index)=>{
//  if (numbers===4){
//    newArr.push(index)
//  }
// })
// console.log(newArr);

// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]



// let newArr=[]
// arr.filter((number)=>{
//  if (number>2) {
//    newArr.push(number)
// }
// })
// console.log(newArr);
// console.log(arr.length-newArr.length);



//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)


// let surName="ruslan"
// nameLength=surName.length
// console.log(nameLength);

// console.log(arr.includes(nameLength));


//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]



//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let  arr1=[]
// arr.map((numbers,index)=>{
//  if (numbers===4){
//    arr1.push(index)
//  }
// })
// console.log(arr1);


// let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// //2) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
// console.log(arr.indexOf(5));
// console.log(arr.lastIndexOf(5));







//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", 'Gulshen', "Fuad", "Anar"]




// //16
// let filterT = [];
// for (let obj of arrr2) {
//     if (obj.name.startsWith('t')) {
//         filterT.push(obj);
//     }
// }
// console.log(filterT);


// //17

// let countT = 0;
// for (let obj of arrr2) {
//     if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
//         countT++;
//     }
// }
// console.log(countT);

// //18
// let sumT = 0;
// for (let obj of arrr2) {
//     if (obj.name.startsWith('t') && obj.name.endsWith('t')) {
//         sumT += obj.key;
//     }
// }
// console.log(sumT);

// //19
// for (let obj of arrr2) {
//   if (obj.name.endsWith('e')) {
//       obj.name = 'SuperDev';
//   }
// }

// console.log(arrr2);
