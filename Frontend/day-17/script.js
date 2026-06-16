
            //    Part 4 — Array Iteration Methods (56–75)
// 1. Use `forEach` to print all numbers doubled.
// let array = [10,20,30,40,50,60,70,80,]
// array.forEach(elem => {
//     console.log(elem*2)
// });
// 2. Use `map` to square all numbers.
// let array = [10,20,30,40,50,60,70,80,]
// let result= array.map((elem )=>{
//     return elem *elem
// })           
// 3. Use `filter` to get even numbers.\
// let array = [10,20,30,40,50,60,70,80,]
// let result = array.filter((elem)=>{
//     return elem%3===0
// })
// console.log(result)
// 4. Use `reduce` to calculate sum.
// let array = [10,20,30,40,50,60,70,80,]
// let result= array.reduce((acc,value)=>{
//  return acc+value
// },1)
// console.log(result)
// 5. Use `reduce` to find maximum number.
// let array = [10,20,30,40,50,60,70,80,]
// let result = array.reduce((acc,value)=>{
//     if(acc<value )acc=value
//     return acc
// },0)
// console.log(result)
// 6. Use `find` to get first even number.
//  let array = [11,20,30,40,50,60,70,80,]
// let result=array.find((elem)=>{
//     if (elem%2===0)return elem
// })
// console.log(result)

// // 7. Use `findIndex` to locate number > 50.
// let array = [11,20,30,40,50,60,70,80,]
// let result=array.findIndex((elem)=>{
//     if (elem%3===0)return elem 
// })
// console.log(result)

// 8. Use `some` to check if any number is negative.

// let array = [11,20,30,40,50,60,-1,80,]
// let result=array.some((elem)=>{
//     return elem <0
// })
// console.log(result)

// // 9. Use `every` to check if all numbers are positive.
// let array = [11,20,30,40,50,60,70,80,]
// let result=array.every((elem)=>{
//     if (elem>0)return elem
// })
// console.log(result)

// 10. Create array of names and convert all to uppercase.


// 11. Filter all students with marks > 80.
// let array = [11,20,30,40,50,60,70,80,]
// let result=array.filter((elem)=>{
//     if (elem>50)return elem
// })
// console.log(result)

// 12. Calculate average using reduce.

// 13. Count occurrences of numbers in array.
//   let array = [11,20,30,30,50,60,70,100,90,80,80,]



// 14. Flatten nested arrays using `flat`.

// 15. Remove duplicates using `Set`.
//  let array = [11,20,30,30,50,60,70,100,90,80,80,]


//          let unique = [...new Set(array)]
//          console.log(unique)
// 16. Sort array of objects by age.
// let users = [
//     { name: "Aman", age: 20 },
//     { name: "Rahul", age: 22 },
//     { name: "Rohit", age: 19 },
//     { name: "Priya", age: 21 },
//     { name: "Anjali", age: 23 }
// ];

//  let sorted= users.sort((a,b)=>a.age-b.age)

// console.log(sorted)

// 17. Find total price of shopping cart.


// 18. Group users by age.


// 20. Explain difference between `map` and `forEach`
// forEach() is used to iterate over an array and perform an action, while map() is used to transform array elements and return a new array.
