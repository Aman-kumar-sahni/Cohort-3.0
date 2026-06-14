// # Part 2 — Advanced Functions (21–35)

                                                                                    // // 1. Write a recursive function for factorial.
                                                                                    // function factorial (n){
                                                                                    //  if(n<=1) return 1;
                                                                                    // return n*factorial(n-1);
                                                                                    
                                                                                    // }
                                                                                    // console.log(factorial(6))

                                                                                 // 2. Write recursive Fibonacci function.

 
                                                                          // 3. Create a function that finds power using recursion.

// 4. Create an IIFE that prints `"Executed"`.
// (function(){
//     console.log("Executed")
// } )()
                                                                             // 5. Write a function that memoizes factorial calculation.



// 6. Create a closure counter function.
// function closure (){
//     let counter =3 ;

//     return function returnfunction( ){
//         counter ++
// console.log(counter)
//     }

// }  let extra=  closure()
// extra()
// 7. Write a function currying example for addition.

 function add1 (a){
    return function add2 (b){
 return a +b
    }
 }
 let result = add1(5)(9)
 console.log(result)
                                                                                                    // 8. Create debounce function logic.
                                                                                                          // 9. Create throttle function logic.
                                                                                             // 10. Write a function that executes only once.


                                                                                                // 11. Create custom implementation of `map`.

                                                                                                // 12. Create custom implementation of `filter`.
                                                                                                // 13. Create custom implementation of `reduce`.
                                                                                                // 14. Create custom `forEach`.


// // 15. Explain output:
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());

// section A - 1,2 ,3,9,10,8