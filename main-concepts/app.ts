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


