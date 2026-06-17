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
