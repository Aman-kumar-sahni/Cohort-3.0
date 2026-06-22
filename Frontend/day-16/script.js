// // 1. Create an array of 5 fruits.
//  let array = ["mango","apple","bnana","guava","papaya"]
// // 2. Print first and last element of array.
// console.log(array[0])
// console.log(array[array.length-1])

// // 3. Find length of array.
// console.log(array.length)

// // 4. Add element at end using `push`.
// array.push("pomegranate")
// console.log(array)

// // 5. Remove last element using `pop`.
// array.pop()
// console.log(array)

// // 6. Add element at beginning using `unshift`.
// array.unshift("grapes")
// console.log(array)

// // 7. Remove first element using `shift`.
// array.shift()
// console.log(array)

// // 8. Reverse an array.
// array.reverse()
// console.log(array)

// // 9. Sort numbers ascending.
// // let number = [6,8,9,25,67,11,23,46]
// // number.sort((a,b)=>a-b)
// // console.log(number)
// // 10. Sort numbers descending.
// // let number = [6,8,9,25,67,11,23,46]

// // number.sort((a,b)=>b-a)
// // console.log(number)



// ## Intermediate
// let array = [5,7,23,67,45,33,21,34,5,66,]
// // 1. Use `splice` to remove elements.
// array.splice(2,2)
// console.log(array)
// // 2. Use `splice` to insert elements.
// array.splice(2,0,5,6,7,8)
// console.log(array)

// 3. Use `slice` to copy array.
// let array = [5,7,23,67,45,33,21,34,5,66,]

// let result= array.slice(2,array.length-1)
// console.log(result)
// 4. Find index of an element.
// let array = [5,7,23,67,45,33,21,34,5,66,]
// console.log(array.findIndex(u=>u===66))
// console.log(array.indexOf(33))
// 5. Check if array contains a value.
// console.log(array.some(u=>u===33))
                                                                                                               // 6. Join array elements with .
// // 7. Merge two arrays using spread operator.
// let secondarray = [5,6,7,8,...array]
// console.log(secondarray)
// 8. Copy array using spread operator.
// let copy = [...array]
// console.log(copy)
// 9. Find maximum value using `Math.max`.
// console.log(Math.max(...array)
// )
// 10. Swap two variables using destructuring.
// let a = 20 ;
// let b = 30 ;
// [a,b]=[b,a]
// console.log(a,b)



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






// ## 1. Array

// ### Intermediate



// // Create an array of 5 favorite movies and print all values.
// let array = ["dilwale","strangerthings","moneyHeist","udaan","msDhoni"]

// // **Hint:** Use indexing

// for(let value of array ){
//     console.log(value)
// }
// // ### Hard

// // Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
// let advancedArray=["number",23,true,[23,true,"number"]]
// console.log(advancedArray[3]);

// // **Hint:** Mixed data types + nested indexing


// # 2. Indexing in Array

// ### Intermediate

// // Print the first and last element of an array.
// let array = [89,76,89,90,56,27];

// // **Hint:** Use `0` and `length - 1`

// // ### Hard

// // Swap the second and second-last element using indexing.
// let temp = array[1];
// array[1]=array[array.length-2];

// array[array.length-2]=temp;
// console.log(array)
// // **Hint:** Use temporary variable



// Create a 2D array and print all first elements of inner arrays.

// let matrix= [[1,3,4], [1,2,3], [2,3,4]];

// let sum =0;
// let a=0;
// let b =0;
// for (let i = 0; i<=matrix.length-1;i++
// ){

//     sum += matrix[a][b]
// a++
// b++
// }
// console.log(sum)
// **Hint:** Double indexing

// ### Hard

// Find the sum of all diagonal elements in a 3x3 matrix.

// **Hint:** Same row and column index
// let array = [2,44,5,6,7,3,9]
// array.push(8)
// console.log(array.pop())
// console.log(array)

// array.unshift(2)
// console.log(array)

// let newarray=[]
// newarray=[...array]
// console.log(newarray)

// let merge=[...newarray,6,7,8,...array]
// console.log(merge)

// # 19. Reference Behaviour of Array

// ### Intermediate

// Assign one array to another variable and modify second one


// let array = ["mohan","ram"]
// let newarray = array 
// newarray.push("elem")
// // **Hint:** Observe original array
// console.log(array)
// // ### Hard

// // Create true copy so original array does not change.

// let value = JSON.parse(JSON.stringify(array)
// )
// console.log(value.push("enemy")
// )
// console.log(value)
// console.log(array)
// // **Hint:** Use spread operator

// # 18. for...of

// ### Intermediate

// Print all values using `for...of`.

// let array = ["aman","sumna","raviraushan","mohan"]



// **Hint:** Direct value iteration

// ### Hard

// Count vowels from array of characters.

// let vowels=0;


// for (let value of array ){
//  for (let find of value){
// if("aeiou".includes(find)){
//     vowels++
    
// }
//  }

// }
// console.log(vowels)

// **Hint:** Use conditions inside loop

// let array= ["array","notarray","cannotarray","mariya"]

// const newArray= array.join(" ")
// console.log(newArray)
// let array= ["array","notarray","cannotarray","mariya","rahul"]
// console.log(array.indexOf("rahul"))

// let array =[2,3,5,3,53,5,33,5,5,6,7,7,4,5,6,7]

// for  (let index in array){
// if (array[index]===5){
//     console.log(index)
// }
// }

// Check whether "apple" exists in array.

// let arr1 = [2, 4, 6];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let count=0;
// for (let value of arr1){
//     if( arr2.includes(value)
// )count++
// }
// if(count===arr1.length)console.log("exist all values ")
//     else console.log("doesnot exist any values")

// ### Intermediate

// Merge two arrays.

// let arr1= ["ram","rahim","sita"]
// let arr2= ["ram1","rahim2","sita3"]
// console.log(arr1.concat(arr2)
// )
// // **Hint:** Use `concat()`
// let arr1=[2,3,4,5,5,]
// let arr2=[2,3,45,66,]
// let arr3=[4,4,5,66,]
// let arr4= arr1.concat(arr2,arr3)
// let string = []
// for(let value of arr4){
//     if(!string.includes(value)){
//         string.push(value)
//     }
    

// }console.log(string)