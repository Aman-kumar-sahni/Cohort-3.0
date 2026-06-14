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