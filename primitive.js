/* 
Data types
primitive/primary data types 
1.numbers
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol

non-primitive data type
8.object
*/

let a = 'hello';
let b = a;
// console.log(a, b);
a = 'gello';
// console.log(a, b);

const x = {job: 'web developer'}
const y = x;
console.log(x,y);
// x.job = 'front end developer';
y.job = 'front end developer';
console.log(x,y);