// ## Beginner Level

// // 1. Create a function named `greet` that prints `"Hello World"`.
// function greet(){
//     console.log(" Hello world")
// }
// greet()

// // 2. Create a function `add(a, b)` that returns the sum.
// function add (a,b){
//    let  sum = a+b
//     return sum 
// } add(25,24)
// // 3. Write a function to calculate the square of a number.
// function calculateSquare(n){
// let sq= n*n
// return sq
// }calculateSquare(5)
// // 4. Create a function that checks whether a number is even or odd.
// function checkOddEven(n){
// if(n%2===0){
//     return "Even"
// }else {
//     return "odd"
// }
// } checkOddEven(8)
// // 5. Write a function that converts Celsius to Fahrenheit.=done

// // 6. Create a function with default parameter `"Guest"`.
// function greet (name = "guest"){
//     console.log(`welcome${name}`)
// }greet()
// // 7. Write a function that returns the greater of two numbers.
// function checkGreaterNumber(a,b){
// if(a>b)return a
// else return b 
// }checkGreaterNumber(24,77)

// // 8. Create a function to calculate area of rectangle.

// // 9. Write a function that returns `"Adult"` if age ≥ 18 else `"Minor"`.


                                                                                       // // 10. Create a function to reverse a string.
                                                                                       // function reverse(string){
                                                                                       //     return str.split("").reverse().join("");

                                                                                      // }reverse("Aman")


// ## Intermediate Level

// 1. Write a function expression for multiplication.
// const multiplication = function multiply (a,b){
//          return  a*b
// }
// console.log(multiplication(4,5))
// 2. Convert a normal function into an arrow function
// const multiplication = (a,b)=>{
//     return a*b
// }
// console.log(multiplication(9,8))

// // 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.

// function checksum(...rest){
//     let sum = 0 ;
// for (let i =0 ; i <=rest.length-1;i++){
//     sum = sum +rest[i]


// }
// return sum 

// }
// console.log(checksum(5,8,9,0,9,0,23,4,4,3,2,2,3,4,3))

// // 4. Write a function that counts vowels in a string.

//   function checkVowels(str) {
//     let count = 0;
//     let vowels = "aeiouAEIOU";

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(checkVowels("vasudevSriKrishnagod")
// )
// 5. Create a function that checks if a string is palindrome. 
// function checkPalindrome(string){
//   let newString =   string.split("").reverse().join("")
//   if(newString=== string) return "palindrome"
//   else return "Not palindrome"

// } console.log(checkPalindrome("Aman"))
// 6. Write a callback function example using `setTimeout`.
// setTimeout(function(){
//     console.log("hello world")
// },2000)
// // 7. Create a higher-order function that executes another function twice.
// function hof (name){
// name()
// name()
// }
// function flana (){
//     console.log("hello kya ye higher order function shi solved hai ")
// }
// hof(flana)
// // 8. Write a function that returns another function.
// function hof(name ){
//     console.log(name)
//     return function hof1(shy){
//    console.log("welcome",shy,name)
//     }
// }
// const returnFunction = hof("kumar")
// returnFunction("Aman")
// // 9. Create a pure function for subtraction.

// function substraction(a,b){
// return a-b
// }
// console.log(substraction(58,89)
// )
// // 10. Create an impure function using global variable modification.
// let value = 5
// let impure= (a,b)=>{  value = a-b 
//     return value
// }
// console.log(impure(7,6))



// section A -10
// section B- 4