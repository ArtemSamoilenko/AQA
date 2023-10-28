// task #1
function sum(gamburg, kartofan){
    if (gamburg >= 4 && kartofan >= 1)
 {
 console.log('Ми поїли');
 }
else 
  {
 console.log('Ми йдемо в інше кафе');
  }
}
sum(4,0);
sum(4,1);
// =====================================================================
// task #2
function sum(price){
 if (price >= 1000 && price <= 1900)
 {
 console.log('yes');
 }
else 
  {
 console.log('no');
  }
}
sum(1000);
sum(999);
// =====================================================================
// task #3
function sum(p){
if (p >= 1000 && p <= 1900)
 {
 console.log(p + ' NO');
 }
else 
  {
 console.log(p + ' YES');
  }
}
sum(1000);
sum(999);

//variant2


function sum(price){
  if (!(price >= 1000 && price <= 1900)) {  
     console.log(p + ' YES'); 
 } else { 
     console.log(p + ' NO'); 
 }
}
sum(999);
sum(1000);

// =====================================================================
// task #4
  function sum(a){
     if (a <= 2 || a == 12)
         {
         console.log('winter');
         }
         else if (a >= 3 && a <= 5)
          {
         console.log('spring');
          }
          else if (a >= 6 && a <= 8)
          {
         console.log('summer');
          }
          else if (a >= 9 && a <= 11)
          {
         console.log('autumn');
          }
 }
 sum(12);
 sum(5);
 sum(8);
 sum(10);
// =====================================================================
// task #5
function sum(a, b, c, avg){
 if (a > b) {
 if (a > c) {
     if (b > c)
     avg = b
     else
     avg = c
 }
 else 
     avg = a
 }
 else {
 if (b > c) {
     if (a > c)
     avg = a
     else
     avg = c
 }
 else
     avg = b
 }
 console.log(avg);
}
sum(4,6,5);
// =====================================================================
// task #6
function sum(a){
 switch (a) {
     case 1:
         console.log('Monday');
         break;
         case 2:
             console.log('Tuesday');
             break;
             case 3:
                 console.log('Wednesday');
                 break;
                 case 4:
                     console.log('Thursday');
                     break;
                     case 5:
                         console.log('Friday');
                         break;
                         case 6:
                             console.log('Saturday');
                             break;
                             case 7:
                                 console.log('Sunday');
                                 break;
}
}
sum(1);
sum(2);
sum(3);
sum(4);
sum(5);
sum(6);
sum(7);
// =====================================================================
// task #7
let symbol = '+'
let x = 5, y = 8, z
 switch (symbol) {
 case '+': z = x + y;
 break;
 case '-': z = x - y;
 break;
 case '*': z = x * y;
 break;
 case '/': z = x / y
 break;
 default:
     z = 0;
 break;
 }
 console.log(z);
 //---------------------------------
 function sum(x, y, z, symbol = '-'){
         switch (symbol) {
         case '+': z = x + y;
         break;
         case '-': z = x - y;
         break;
         case '*': z = x * y;
         break;
         case '/': z = x / y
         break;
         default:
             z = 0;
         break;
         }
         console.log(z);
 }
 sum(4,6);
// =====================================================================
// task #8
function createArray()  {
 let myArray = [];
 for (let i = 1; i < 6; i++) {
   myArray.push(i);
                             }
 return myArray;
                     }
let resultArray = createArray();
console.log(resultArray);
// =====================================================================
// task #9 
function createOddArray() {
 let myArray = [];
 for (let i = 1; i < 10; i += 2) {
   myArray.push(i);
 }
 return myArray;
}
let resultArray = createOddArray();
console.log(resultArray);
//---
function createOddArray() {
 let myArray = [];
 for(let i = 2; i < 10 ; i += 2){ 
   myArray.push(i);
 }
 return myArray;
}
let resultArray = createOddArray();
console.log(resultArray);
// =====================================================================
// task #10
function calculateArraySum(arr) {
 let total = 0;
 for (let i = 0; i < arr.length; i++) {
   total += arr[i];
 }
 return total;
}
const myArr = [2, 3, 4, 5, 6];
const sum = calculateArraySum(myArr);
console.log(sum);

// =====================================================================
// task #11
function processNestedArray(arr) {
 for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
     console.log(arr[i][j]);
   }
 }
}
const arr = [[1, 2], [3, 4], [5, 6]];
processNestedArray(arr);
// =====================================================================
// task #12
function a(arr) {
 let product = 1;
 for (let i = 0; i < arr.length; i++) {
   for (let j = 0; j < arr[i].length; j++) {
     product *= arr[i][j];
   }
 }
 return product;
}
const arr = [[1, 2], [3, 4], [5, 6, 7]];
const result = a(arr);
console.log(result);

// =====================================================================
// task #13 
function b(inputString) {
 return inputString.replace(/[аеёийоуэюяАЕЁИЙОУЭЮЯ]/g, '');
}
const word = "ёлка Ежиха йогурт эквилибриум Южная";
const a = b(word);
console.log(a);
// =====================================================================
// task #14               
             function sum(a, b = a / 1000){                    
                     if(a == 1)  {
                     console.log(a + " metr " + b + " kilometriv");
                                 }
                      else if(a >= 2 && a <= 4 ){
                         console.log(a + " metru " + b + " kilometriv");
                                              }
                      else if(a >= 5 && a <= 999){
                         console.log(a + " metriv  " + b + " kilometriv");
                                              }                        
                     else if (a >= 1000 && a <= 1999){
                         
                     console.log(b + " kilometr");
                                                     }
                     else if (a >= 2000 && a <= 4999){
                     console.log(b + " kilometru");
                                                     }
                     else if (a >= 5000 && a / 0){
                     console.log(b + " kilometriv");
                                                     }
                 else if (a < 1) {
                     console.log("ERROR");
                                 }
             }
             sum(1);
             sum(2);
             sum(5);
             sum(13);
             sum(50);
             sum(1000);
             sum(2000);               
             sum(5010);


             