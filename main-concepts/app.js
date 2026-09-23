"use strict";
// const number = 12
// num1 = 10 // error for const 
// TS good for Type Checking
// const sum = (num1:number, num2:number) => {
//    return (num1 + num2)
// }
// How TO Compile TS --> npx tsc app.ts
// -------------------------------------
// Static Type - Dynamic Type:
// Tooye JS mitooni variable ro reAsign koni ba data type haie mokhtalef
// زبان های داینامیک تایپ : زبانی که متغیر ها تایپ ثابتی ندارند و ولیوهاشون هم همینطور .
// زبان های استاتیک تایپ : زبان هایی که متغیرهاشون تایپ یکسان و مشخصی دارند و مدام در حال تغییر نیستند
// let number = 90
// number = 99
// number = 'ali' // error type
// -------------------------------------------
// Number Data Type:
// let userAge = 25
// userAge = 30 // Ok 
// userAge = 'ali' // error type
// console.log(userAge);
// let userAge: number = 25  // number data type
// -----------------------------------------------
// String Data Type:
// let username = 'amin_saeedi' // byDefault String
// let username: string = 'amin_saeedi'
// username = 12 // error
// console.log(username);
// --------------------------------------------
// Watch Flag:
// npx tsc -w app.ts // watching for file changes
// --------------------------------------------
// Type Inference Vs Type Annotation:
// Type Inference like: 
// let userAge = 12 // bydefault T.S hads zade type chi bashe
// به صورت کلی برای وریبلی که نمیدونیم قراره ولیوش چی باشه تایپ در نظر نمیگیریم 
// userAge = 'js' // error
// Type Annotaion like: 
// let username: string = 'alorez' // : string
// --------------------------------------------
// Boolean Data Type:
// let isLogin = true // type inference
// let isValid: boolean = false // type annotation
// let isAdmin: boolean;
// isAdmin = 0 // error
// isAdmin = true
// isLogin = false // Ok
// isLogin = 0 // error
// isLogin = Boolean(0) // Ok
// --------------------------------------------
// Object Data Type :
// Inference Type
// let user = {
//     id: 1
// }
// user.id = 'ali' // error
// console.log(user);
// Annotation Type 
//  زمانیکه برای آبجکتی تایپ میخوایم در نظر بگیریم حتمام موظفیم که پراپرتی هاشم تعریف کنیم و تایپ پراپرتی ها هم همینطور
// let user: object = {
//     id: 1
// }
// error chon type property haro tarif nakardim
// let user: {id: number, name: string, age: number} = {
//     id: 1,
//     name: 'erfan',
//     age: 12
// }
// console.log(user.name);
// --------------------------------------------
// Array Data Type:
// let users: string[] ==> just string in array
// let users = ['ali', 'reza', 'erfan'] // ok
// let users: string[] = ['alireza', 'erfan'] // Ok
// let users: string[] = ['alireza', 'erfan', false] // error
// let users: (string | number | boolean)[] = ['erfan', 12, true]
// --
// users.push(13) // Ok
// users.push({abs: false}) // error
// let user: {
//     id: number,
//     username: string,
//     age: number,
//     skills: string[]
// } = {
//     id: 1,
//     username: 'Erfan',
//     age: 22,
//     skills: ['front-end', 'back-end']
// }
// console.log(user.id);
// console.log(user.username);
// console.log(user.age);
// console.log(user.skills);
// -------------------------------------------
// Multidimensional:
// 
// let roles: (string|number)[][] = [
//     [1, 'admin'],
//     [2, 'user'],
// ]
// --------------------------------------------
// Tuple in Typescript:
// محدود کردن تعداد آیتم های یک آرایه :
// let role: [number, string] = [1, 'ADMIN'] // Tuple
//  role[2] = 'user' // Error
// role.push(1222)   // استثنا
// console.log(role); // Push mishe Ok ! 
// role [1] = 'USER'
// console.log(role);
// Tuple in Dimensional Arrays :
// let roles: (string|number)[][] = [
//     [1, 'ADMIN'],
//     [2, 'USER']
// ]
// let roles: [string, number][] = [
//     ['ADMIN', 1],
//     ['USER', 2],
// ]
// -----------------------------------------------------
// Type in Function Arguments :
// function isLogin(username: string, password: string|number) {
//     if (username === 'admin' && password === 1222) {
//         return true
//   }
//   else {
//     return false
//   }
// }
// console.log(isLogin('amin', 1222));
// -----------------------------------------------------
// DataType --> Output of Function: 
// function isLogin (username: string, password: string|number): boolean {
//     if (username === 'admin' && password === 'admin') {
//         return true
//     } else {
//         // return 12 // Error
//         return false
//     }
// }
// -----------------------------------------------------
//  Any Data Type:
// any : هرچیزی : زیاد استفاده نکنید قابلیت تی اس رو ازمون میگیره -- وقتی ندونیم از سمت سرور چه ولیویی برامون قراره ارسال بشه استفاده میکنیم
// let testVariable: any;
// testVariable = 12
// testVariable = false
// testVariable = 'erf'
// console.log(testVariable);
// console.log( typeof testVariable); // string 
// function sum (num1: any, num2: any): number {
//     return num1 + num2
// }
// let testArray : any[] = ['admin', 12, false]
// ---------------------------------------------------
// Union Data Type:
// ممکنه نیاز داشته باشم متغیر من هم تایپ رشته و هم عدد قبول کنه
// let test: number | string = 12
// test = 'str'
// Error Occured : 
// function sum (param1: number|string, param2: number|string) {
//     return param1 + param2 // Error if use String
// }
// //
// Solution:
// function sum (param1: number|string, param2: number|string) {
//     if (typeof param1 === 'number' && typeof param2 === "number") {
//         return param1 + param2
//     } else if (typeof param1 === 'string' && typeof param2 === "string") {
//         return param1.toString() + param2.toString()
//     }
// }
// const users: (string|number|boolean)[] = ['Ali', 23, false]
// --------------------------------------------------
// Literal Type:
// محدود کردن وریبل که مقدارش هم مشخص باشه حتی
// let num: 12 = 13 // Error
// let num: 13 = 13 // Type: 13
// const userAge = 12
// userAge = 13 // Error
// let age: 18 | 19 | 20 = 19
// age = 19 // Ok
// age = 30 // Error
// function setCssProperty (param: 'px' | 'em' | 'rem') {
//     return `20${param}`
// }
// console.log(setCssProperty('rem'));
// ----------------------------------------------------
// Define Template Literal Type: 
// let num1 = 12
// let num2 = 13
// let sum = `Sum: ${num1 + num2}`
// function setCssProperty(param: `${number}px` | `${number}em` | `${number}rem`) {
//     return param
// }
// console.log(setCssProperty('12px')); // Ok
// console.log(setCssProperty('12%')); // Error
// ------------------------------------------------------
