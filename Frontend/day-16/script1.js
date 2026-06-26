// // // 1. Difference between:
// // // - function declaration
// // // - function expression
// // // - arrow function

// // // in function declaration we only declare function while in function expression we declare the function 1st and store it in a variable and in arraoww function we declare function without using word function example()=>{}
// // // // 1. Difference between:
// // // // - `slice` 
// // // // - `splice`

// // // slice returns array  on the basis of index in slice (start,end) end is not included   while in splice we can modify same array  and return a new array on the basis of index like (start,Count ,end)
// // // // 1. Difference between:
// // // // - `map`
// // // // - `filter`
// // // // - `reduce`

// // // map is used to work on array which return every element with the condition we apply while filter is used to remove the desired elements based on the condition and reduce is used to reduced all the elements of array in a single value either in sum or multiply 
// // // // 1. Difference between:
// // // // - `for...in`
// // // for in used to work on object or array to return every index of elemnts
// // // // - `for...of`
// // // while for of is used to return  value of the each index of array and elemnts
// // // // 1. Difference between:
// // // // - shallow copy
// // // shallow copy is type of copy in which nested object or array cannot copy properply they used to use main refrence  so when we used to change the value of nested array and or onested objected the original value also will be change example and we can use [...destructuring] for shallow copy
// // // // - deep copy     :- while in deep even nested object and array also will be copied properply and we can work on it the main refrence value will not change we can use JSON.parse(JSON.stringfy(name)) to deep copy


// // // 1. Rotate array by k positions.


// // // 2. Find frequency of characters in string.
// // // 3. Find longest word in sentence.
// // // 4. Check if two strings are anagrams.
// // // 5. Capitalize first letter of every word.
// // // 6. Remove falsy values from array.
// // // 7. Convert array into object.
// // // let array = [9,3,43,54,545,6]
// // // let object={...array}
// // // console.log(object)
// // // // 8. Convert object into array.
// // // let object={
// // //     name:"aman",

// // //     section:"a",
// // //     class:8
// // // }
// // // console.log(Object.entries(object)
// // // )

// // // 9. Find duplicate elements.
// // // 10. Merge two sorted arrays.



// // // # Real World Practice

// // // // 1. Create authentication validation functions.

// // // let email= "Aman2004@gmail.com";
// // // let password="123456";
// // // function authenctication (email,password){
// // //     if(email!==email)return " check email or password again ";
// // //     if(password!==password)return "check email or passsword again";
// // //     else return "login successfull "
// // // }

// // // authentication("hello@2004","12345")
// // // 2. Create OTP generator.
// // // let otp=Math.floor( (Math.random()*8999)+1000)

// // // 3. Create password strength checker.
// // // let password = "ab12345"
// // // function strengthChecker(password){
// // // if(!password.includes("@")){
// // //     console.log("password must contain @")
// // // }else if (!password.includes("_")){
// // //     console.log("password must contain underscore")
// // // }else if(password.length<6){
// // //     console.log("it must be at list 6 digit")
// // // }else{console.log("password strength is good ")}
// // // }
// // // 4. Build leaderboard system.

// // // let leaderboard=[{
// // //     name:"Aman kumar ",
// // // point:450,


// // // },
// // // {
// // //     name:"suman kumar ",
// // // point:490,
// // // },{
// // //     name:"piyush kumar ",
// // // point:430,
// // // },{
// // //     name:"sidharth ",
// // // point:400,
// // // },
// // // ]
// // // let rankers = leaderboard.sort((a,b)=>b.point-a.point)
// // // let i = 1;
// // // function showranking(rankers){
// // //     for(let value of rankers){
        
// // //         console.log(`name = ${value.name},   point=${value.point},   rank=${i}`)
// // //         i++

// // //     }

// // // }
// // // showranking(rankers)

// // // // 5. Create attendance management logic.

// // // let attendance = [{
// // //     user1 :"aman",
// // //     record :[]
// // // },{
// // //     user1 :"suman",
// // //     record :[]
// // // },{
// // //     user1 :"ravi",
// // //     record :[]
// // // },{
// // //     user1 :"flana",
// // //     record :[]
// // // },{
// // //     user1 :"dimkana",
// // //     record :[]
// // // },

// // // ]
// // // function makeattendance(user){
// // //    for(let value of attendance){
// // //      if(value.user1===user){
// // //         value.record.push("p")
        
// // //     }else{value.record.push("A")}
// // //    }

// // // }
// // // makeattendance("dimkana")
// // // makeattendance("aman")

// // // console.log(attendance)

// // // // #

// // // 
// // // 2. Implement pipe function.
// // // 3. Create custom event emitter.
// // // 4. Build promise-like function logic.
// // // 5. Create retry mechanism function.

// // // // Build Mini Netflix Watchlist System.

// // // let netflixMovie=[{
// // //     moviename:"heroine",
// // //     rating:5

// // // },{
// // //     moviename:"heroine2",
// // //     rating:6
    
// // // },{
// // //     moviename:"heroine3",
// // //     rating:7
    
// // // },{
// // //     moviename:"heroine4",
// // //     rating:8
    
// // // },{
// // //     moviename:"heroine5",
// // //     rating:9
    
// // // }
// // // ]
// // // function searchMovies(movie){
// // //    return  netflixMovie.filter(a=>a.moviename===movie)
// // // }

// // // function deleteMovies(movie){
// // //     return netflixMovie.filter(a=>a.moviename!==movie)
// // // }
// // // function addMovies(movie,rate){
// // //     return netflixMovie.push({moviename:movie,rating:rate})
// // // }


// // // You are given an array of prices.

// // // // Print each price with `"₹"` before it.
// // //  let prices = [100, 250, 399, 499];
// // // prices.forEach((n)=>{
// // //     console.log(`@ ${n}`)
// // // })

// // // let names = ["anubhav", "rahul", "aman"];
// // // let newarray= names.map((a)=>{return a.toUpperCase()})
// // // console.log(newarray)
// // // let products = [
// // //   { name: "Laptop", price: 50000 },
// // //   { name: "Phone", price: 20000 },
// // // ];

// // // let newproducts = products.map((elem)=>{
// // // elem.discountedprice= (elem.price-(elem.price/10))
// // // return elem 
// // // })
// // // // console.log(newproducts)
// // // let nums = [1,2,3,4,5,6,7,8];
// // // console.log(nums.filter(a=>a%2===0))

// // // let users = [
// // //   { name: "Anubhav", active: true },
// // //   { name: "Rahul", active: false },
// // //   { name: "Aman", active: true },
// // // ];

// // // console.log(users.filter(a=>a.active===true))
// // let users = [
// //   { username: "rahul" },
// //   { username: "admin" },
// //   { username: "aman" }
// // ];
// // console.log(users.find(a=>a.username==="admin"))

// // let students = [
// //   { name: "A", marks: 90 },
// //   { name: "B", marks: 30 },
// //   { name: "C", marks: 70 },
// // ];
// // console.log(students.findIndex(a=>a.marks<40))

// // let nums = [10, 20, -5, 40];
// // console.log(nums.some(a=>a<0))

// // let students = [
// //   { name: "A", marks: 80 },
// //   { name: "B", marks: 45 },
// //   { name: "C", marks: 60 },
// // ];
// // console.log(students.every(a=>a.marks>40))
// // const user = {
// //   name: "Anubhav",
// //   age: 20
// // }
// // user.arr=25
// // delete user.name
// // console.log(user)
// // const marks = {
// //   Anubhav: 95,
// //   Rahul: 82,
// //   Aman: 90
// // }


// const arr = ["name", "Anubhav", "age", 24]

// let object={...arr}
// console.log(object)
