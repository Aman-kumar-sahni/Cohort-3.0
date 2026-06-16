// // 1. Print `"Hello JavaScript"` in the console.
// console.log("Hello JavaScript")
// // 2. Print your name, age, and city using one `console.log()`.
// let name ="Aman" ;
// let age = 21;
// let city= "Samastipur"
// console.log(`my name is ${name} and my age is ${age} and my city is ${city}`)

// // 3. Print a warning message using `console.warn()`.

// console.warn('1st warning')
// // 4. Print an error message using `console.error()`.
// console.error("this is error ")
// // 5. Use `console.table()` to display an array of 5 numbers.
// console.table([20,40,50,60,70])

// // 1. Create a variable called `studentName` and store your name in it.
// var studentName="Aman kumar"
// // 2. Create a variable `age` and print it.
// var age = 21
// console.log(age)
// // 3. Create two variables and swap their values.
// let a = 10;
// let b = 20;
// a = 20;
// b = 10;

// // 4. Create a constant variable for `PI` and print it.
// const PI =3.14
// console.log(PI)
// // 5. Declare a variable without assigning a value and print it.
// let value;
// console.log(value)
// // 6. Create a variable `score` and increase it by 10.
// let score =0;
// score+=10;
// // 7. Create three variables for first name, last name, and full name.
// let firstName = "Aman";
// let lastName = "Kumar";
// let fullName = firstName + " " + lastName;

// console.log(fullName);


// ## Data Types

// // 1. Create variables of type string, number, boolean, null, and undefined.
// let string = "Aman";
// let number =5;
// let boolean=false;
// let nully = null;
// let undefiend;

// // 2. Check the type of different variables using `typeof`.
// console.log(typeof(string))
// console.log(typeof(number))
// console.log(typeof(boolean))
// console.log(typeof(nully))
// console.log(typeof(undefiend))

// // 3. Store your mobile number in a variable and check its type.
// let mobileNumber = 23456787654;
// console.log(typeof(mobileNumber))
// // 4. Create a variable with value `null` and check its type.
// // let nully = null;

// // 5. Create a bigint number and print it.

// let bigint = 2389920020227492002n
// console.log(typeof(bigint))





//                                                           // ## Type Conversion & Coercion

//     // 1. Convert the string `"50"` into a number.

//     console.log(Number("50"))

//     // 2. Convert the number `100` into a string.
    
//     let number =100
//     console.log(number.toString())
    
// // 3. Convert `"true"` into a boolean.

// let boolean = "true"
// console.log(Boolean(boolean))
// // 4. Check the output of:
// // - `"5" + 2`
//     console.log("5"+2 )
//     // - `"5" - 2`
//     console.log("5"-2)

// // - `true + 1`
// console.log(true + 1)
// // 1. Create a variable with value `"123abc"` and convert it into a number.
// let variable = "123abc"
//     console.log(Number(variable))
// // 2. Use `parseInt()` on `"500px"`.
// console.log(parseInt("500px"))


//  //    ## Operators

// // 1. Add two numbers and print the result.
// let a= 4
// let b=5
// console.log(a+b)
// // 2. Find the remainder when 25 is divided by 4.
// let c = 25%4
// console.log(c)
// // 3. Find the square of a number using exponent operator.
// let sq =  5 
// console.log(sq**2)
// // 4. Increment a variable using `++`.
// a++
// console.log(a)
// ++a
// console.log(a)
// // 5. Decrement a variable using `-`.
// b--
// console.log(b)
// --b
// console.log(b)

// // 6. Use `+=` operator to increase a variable by 20.
// a+=20
// console.log(a)
// // 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// console.log(a>b)
// console.log(a<b)
// console.log(a>=b)
// console.log(a<=b)
// // 8. Check if two values are strictly equal using `===`.
// let d= "5"
// let e = 5
// console.log(d===e)
// // 9. Compare `"10"` and `10` using both `==` and `===`.
// let f = "10"
// let g= 10  
// console.log(f==g)
// console.log(f===g)
// // 10. Create two boolean variables and test `&&`, `||`, and `!`.

// let a1 = true ;
// let a2= false ;

// console.log(a1&&a2)
// console.log(a1||a2)
// console.log(!a1)

                                                                                            // // ## Strings

//     // // 1. Create a string and print its length.
//      let string = "String"
//     console.log(string.length);
//  // // 2. Convert a string into uppercase.
//     console.log(string.toUpperCase());
//     // // 3. Convert a string into lowercase.
//     console.log(string.toLowerCase())
//     // // 4. Check if a string includes the word `"JavaScript"`.
//     console.log(string.includes("JavaScript"))
//     // // 5. Extract the word `"World"` from `"Hello World"`.
//     let newString = "Hello World";
//     console.log(nnewString.slice(6))
//     // // 6. Replace `"apple"` with `"mango"` in a sentence.
//     let fruits = "apple"
// let newfruits = fruits.replace("apple","mango");
//     console.log(newfruits)
//     // // 7. Split `"HTML,CSS,JS"` into an array.
//     let language = "HTML,CSS,JS"
//     console.log(language.split("HTML,CSS,JS"))
//     // 8. Remove extra spaces from a string.
//     // let extraSpaces = "   hello bachoo    "
//     // console.log(extraSpaces.trim())
//     // // 9. Repeat the word `"Hi"` 5 times.
//     // for (let a =0; a<=5;a++){
//     // console.log("Hi")
//     // }
//     // // 10. Print the first character of a string.
//     // console.log(string[0])
//     // // 11. Use template literals to print:`"My name is Aman and I am 20 years old"`
//     // console.log(`My name is Aman and I am 20 years old`)

// let arr = [10, 20, 30, 40];
// let sum =0 ;
// for (let value of arr){
//     sum = sum +value 
// }
// console.log(sum)


// let str = "JavaScript";

// for(let ch of str ){
//     console.log(ch)
// }


// let arr = [5, 8, 9, 2];
// for (let index in arr){
//     console.log(index)
//     console.log(arr[index])
// }

// let student = {
//     name: "Aman",
//     age: 20,
//     city: "Muzaffarpur"
// };
// for (let keys in student){
//         console.log(keys)

//     console.log(student.keys)
// }