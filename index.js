// let fruits = ['Apple','Orange','Banana']; Copy array to new array and console.log()

// let fruits = ["Apple", "Orange", "Banana"];
// let NewArr = [...fruits];

// console.log(NewArr);

// the array by using spread operator and console.log()

// let arr1 = ['A', 'B', 'C'];
// let arr2 = ['X', 'Y', 'Z'];

// arr1.push(...arr2);
// console.log(arr1);

// Using spread operator to create newFruits array and add ‘Cherry’ in array and console.log()
// The result would be: console.log(newFruits); // ['Cherry', 'Apple','Orange','Banana']

// let fruits = ['Apple','Orange','Banana'];
// let newFruits = ['Cherry',...fruits]
// console.log(newFruits)

// Create new object that contain the values of obj1 and obj2

// let obj1 = { id: 101, name: "John Doe" };
// let obj2 = { age: 25, country: "USA" };
// let newObj = { ...obj1, ...obj2 };
// console.log(newObj);

// extract the firstName,lastName, middleName, age using object destructuring

// let object = {
// 	firstName : "John",
// 	lastName: "Doe",
// 	middleName: "C",
// 	age: 25
// }

// let { firstName,lastName,middleName,age}= object;
// console.log(firstName);
// console.log(lastName);
// console.log(middleName);
// console.log(age);

// extract the firstName,lastName using object destructuring

// let employee = {
//     id: 101,
//     name: {
//         firstName: "john",
//         lastName: "Doe",
//     },
// };

// let {
//     name: { firstName, lastName },
// } = employee;
// console.log(firstName);
// console.log(lastName)

// Write a function name greeting() console.log() with the name is the default parameter (with any name)
// function Greeeting (x = "Hi I am default parameter") {
//     return x;
// }
// console.log(Greeeting());

// Write function multiply a , b with b is the default parameter = 1
//  function multiply (a,b=1){
//     return a*b
//  }
//  console.log(multiply(6))

// Write a function to calculate the sum of the array

// function Sum (...args){
//     let result = 0
//     args.forEach(a =>{
//         result += a
//     })
//     return result;
// }
// console.log(Sum(1,2,3))

// const data = [5,10,15,20,25]

// let result = data.reduce((sum,current) => sum+current ,0)
// console.log(result)

// const carts = [
//     { name: "Iphone", price: 900 },
//     { name: "Ipad", price: 400 },
//     { name: "airpord", price: 200 },
// ];

// let totalPrice = carts.reduce((sum, current) => {
//     return sum + current.price;
// }, 0);

// console.log(totalPrice);

// const arrayA = [5, 12, 8, 130, 44];

// let result = arrayA.find(num => num>10)
// console.log(result)

// Find index where rank is 7

// let ranks = [1, 5, 7, 8, 10, 7];
// let result = ranks.findIndex((num) => num > 7);
// console.log(result);

// return the index of the first element in the array

// let numbers = [1, 45, 8, 98, 7];
// console.log(numbers.indexOf(1))

// Find the product with the name is Phone

// const products = [
//     { name: "Phone", price: 900 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 300 },
// ];
// let Phone = products.find(({ name }) => name === "Phone");
// console.log(Phone);

// const products = [
//     { name: "Phone", price: 900 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 300 },
// ];

// let phoneIndex = products.findIndex( name => {
//     return name.name ==="Phone"
// });
// console.log(phoneIndex);

// let phonePrice = products.find( price => {
//         return price.price === 900
//     });
//     console.log(phonePrice);

// const products = [
//     { name: "iPhone", price: 900 },
//     { name: "Laptop", price: 1200 },
//     { name: "Tablet", price: 300 },
// ];
// let phoneIndex = products.findIndex((name) => {
//     return name.name === "iPhone";


// });
// products.splice(phoneIndex,1)
// console.log(products)
// let  data = [
//     {email: "usera@gmail.com",name:"User A", Level:"Super Admin"},
//     {email: "userb@gmail.com",name:"User B", Level:"Super Admin"},
//     {email: "userc@gmail.com",name:"User C", Level:"Standard"},
//     {email: "userd@gmail.com",name:"User D", Level:"Standard"},
//     {email: "usere@gmail.com",name:"User E", Level:"Admin"},
//     {email: "userf@gmail.com",name:"User F", Level:"Standard"}
//   ];

//   let users = data.filter((user) => user.Level === "Standard")
//   console.log(users)
  
