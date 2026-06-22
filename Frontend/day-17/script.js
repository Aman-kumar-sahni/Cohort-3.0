// # Part 5 — Objects Basics (76–90)

// 1. Create object for a student.

// let student = {
//    name:"aman",
//     class:"10"
// }
// // 2. Access properties using dot notation.

// console.log(student.name)

// // 3. Access properties using bracket notation.
// console.log(student["name"])
// // 4. Add new property dynamically.
// student.city="india"
// console.log(student)
// student={
//     name:"piyu",
//     class:"9th"
// }
// console.log(student)
// 5. Update existing property.
// let student = {
//     name:"aman",
//     class:"10" }

//     student.name="suman"
//     console.log(student)

// // 6. Delete a property.
// delete(student.class)
//     console.log(student)

// 7. Create object method.
// let student ={
// Name :function (){
//     console.log("Aman")
//     return "kumar"
// }
// }
// console.log(student.Name())
// 8. Use `this` keyword inside method.
// let student = {
//     name:"Aman",
//     class:"2nd",
//     work:function(){
//         console.log(this.name)
//     }
      
// }
// student.work()
// 9. Create nested object.
// let student ={
//     studet1:{
//         name:"aman"
//     },
// student2:{
//     name:"suman"

// }
// }
// console.log(student["student2"])

// console.log(student.student2.name)
// 10. Access deeply nested property.

// let student ={
//     student1:{
//         name:"Aman kumar",
//         class:75
//     }

// }
// console.log(student.student1.name)
// console.log(student.student1["class"])
                                                                                                                                                                                                                                                                //11.   Destructure object properties.

                                                                                                   //  12. Rename variables while destructuring.

// // 13. Add default values during destructuring.
// let student1= {
//     name:"Aman kumar",
//     class:75,
//     section:"A"
// }

// let {name ="ravan", village="kalyanpur"}=student1
// console.log(name,village)

// 14. Copy object using spread operator.
// let student = {
//     name:"Aman kumar",
//     class:53,
   
// }
// let student2= {...student}
// console.log(student2)
// 15. Merge two objects.
// let student= {
//     name:"Aman kumar",
//     class:99,
//     scetion:20
// }
//  let student2= {
//     name:"Aman kumar ",
//     class:"graudated"
// }
// let student3 = {
//     name:"bhagat sahni ",
//     class:"undergraduated"
// }
// student = {
//     ...student2,
//     ...student3
// }
// console.log(student)

// # Part 6 — Advanced Objects + Real Logic (91–100)

// 1. Use `Object.keys()` on object.
//  let student = {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }
//  }
// console.log(Object.keys(student.student2)
// )
// 2. Use `Object.values()`.
// let student = {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }
//  }
// console.log(Object.values(student.student2)
// )
// 3. Use `Object.entries()`.
// let student = {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }
//  }
// console.log(Object.entries(student)
// )
// 4. Loop through object using `for...in`.
// let student = {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }

//  }
//  for(let index in student){
//     console.log(index)
//  }
// console.log(
// )

// 5. Freeze an object and test modification.

// student ={
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }

// }
// Object.freeze(student)
//  student.name="suman"
//  student.city="india"
//  console.log(student)


// let student = {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }

//  }

// 6. Seal an object and test modification.
// student ={
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }

// }
// Object.seal(student)
//  student.name="suman"
//  student.city="india"
//  console.log(student)
// 7. Create array of objects for users.
// let users =[ {
//     name :"Aman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"suman"

//     }

//  },{
//     name :"suman kumar ",
//     class:"graudation",
//     section:"A",
//     student2:{name:"raviau"

//     }

//  }


// ]
// console.log(users[0].student2.name)


// 8. Find user with highest age.
// let users = [
//     { name: "Aman", age: 20 },
//     { name: "Suman", age: 25 },
//     { name: "Ravi", age: 22 }
// ];

//  users.sort((a,b)=>b.age-a.age)
// console.log(users[0].age)
// 9. Build a mini TODO app using arrays + objects.
// let object ={
//     name:prompt("enter your name "),
//     class:prompt("enter your class"),
//     section :prompt("enter your section"),
//     description:prompt("enter any description")
// }
 
// let arrays=[{
//     name:"Aman kumar",
//     class:"7",
//     section:"8",
//     description:"no doubt i m the best ,i fight and i comeback and i will win "
// },{
//     name:"suman",
//     class:"nhi pta",
//     section:"i dont know ",
//     method:"i dont want know"
// }
// ]

// arrays.push(object)


// 10. Build a shopping cart system with:

// - add item

// - remove item

// - calculate total


// - quantity update


// let item =[
//     {
//         itemName:"flana ",
//         price:5000,
//         keepitem:true
//     },
//      {
//         itemName:"dhimkana ",
//         price:4000,
//         keepitem:true
//     }
// ]


// let additem={
    
//         itemName:"flana2 ",
//         price:3000,
//         keepitem:true
    
// }
// item.push(additem)

// item[0].keepitem=false

// item = item.filter(product => product.keepitem);


// console.log(item)
// let total= 0 ;
// let quantity= 0;
// for(let key in item){
// total=total+item[key].price
// quantity =Number(key)+1
// }


// Scenario-Based Questions


// // 1. You have an array of users. Return only active users.
// let users = [
//     {
//         name: "Aman",
//         active: true
//     },
//     {
//         name: "Suman",
//         active: false
//     },
//     {
//         name: "Ravi",
//         active: true
//     },
//     {
//         name: "Priya",
//         active: false
//     }
// ];
// const newUser=users.filter(elem=>elem.active!==false)
//   console.log(newUser)
// 2. Calculate total revenue from orders array.
let orders = [
    {
        orderId: 1,
        revenue: 5000,
        quantity:1
    },
    {
        orderId: 2,
        revenue: 2500,
        quantity:3

    },
    {
        orderId: 3,
        revenue: 7000,
        quantity:2

    },
    {
        orderId: 4,
        revenue: 1500,
                quantity:1

    }
];
let total =0;
orders.reduce((acc ,num)=>{

    

},0)





// 3. Find second largest number in array.
// 4. Find missing number in array.
// 5. Check whether two objects are equal.


// # Logic Building Questions

// 1. Rotate array by k positions.
// 2. Find frequency of characters in string.
// 3. Find longest word in sentence.
// 4. Check if two strings are anagrams.
// 5. Capitalize first letter of every word.
// 6. Remove falsy values from array.
// 7. Convert array into object.
// 8. Convert object into array.
// 9. Find duplicate elements.
// 10. Merge two sorted arrays.

// # Real World Practice

// 1. Create authentication validation functions.
// 2. Create OTP generator.
// 3. Create password strength checker.
// 4. Build leaderboard system.
// 5. Create attendance management logic.

// ---





// # Advanced Functional Programming

// 1. Implement compose function.
// 2. Implement pipe function.
// 3. Create custom event emitter.
// 4. Build promise-like function logic.
// 5. Create retry mechanism function.

// # Final Challenge Questions

// 1. Build complete Notes App logic.
// 2. Build Student Dashboard logic.
// 3. Build Quiz App data handling.
// 4. Build E-commerce Cart System.
// 5. Build Mini Netflix Watchlist System.

// Ultra Advanced Practice
// Build custom Array.prototype.map.
// Build custom Array.prototype.filter.
// Build custom Array.prototype.reduce.
// Implement deep clone function.
// Create student management system.
// Create library management system.
// Create expense tracker logic.
// Build inventory management system.
// Create function composition utility.
// Build calculator using objects and methods.

