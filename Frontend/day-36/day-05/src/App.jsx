// // // import React, { useState } from 'react'

// // // const App = () => {
// // // let [name,setName]=useState("Aman")
// // // const [email,setEmail]=useState("email")
// // // const [password,setPassword]=useState("password")
// // //  function submitHandler(e){
// // // e.preventDefault()
// // // setName(name)

// // //  }

// // //   return (
// // //     <div className='bg-blue-200 h-screen w-screen flex flex-col   justify-center items-center'>
// // //   <div className='bg-amber-50 h-auto w-auto flex flex-col  justify-center items-center border-2 border-b-black  rounded-xl'>
// // //     <input onChange={(e)=>{
// // //       name=e.target.value
// // //     }} className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter name '></input>
// // //     <input className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter email '></input>
// // //     <input className="h-10 w-50 bg-amber-50 m-2 border border-2 border-b-black"type="text" placeholder='enter password'></input>
// // //       <button onSubmit={submitHandler} className='h-10 w-50 bg-emerald-600 mb-1 rounded-xl'>submit</button>
     
// // //   </div>
// // // <h1>{name}</h1>
// // // <h1>{email}</h1>
// // // <h1>{password}</h1>


// // //     </div>
// // //   )
// // // }

// // // export default App

// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   //usestate => state maintain krne k liye ,own component ko renrender krne ke liye 
// //   //state update krne ke liye  
// //   console.log("Appis rerendering")
// //     const [count ,setCount]=useState(0)
// //     let [user ,setUser ]=useState(0)
// //   return (
// //     <div>
// //       <h1>count is {count}</h1>
// //       <button  className="h-10 w-50 bg-amber-500"onClick ={()=>{
// //         setCount((prev)=>prev+1)
// //       }}> increase count </button>
// //       <h1>name is {user}</h1>
// //       <button className='h-10 w-50 bg-amber-500' onClick={()=>{
// //         setUser(user++)
// //       }
// //       }>
// //         change name 
// //       </button>
// //     </div>
// //   )
// // }

// // export default App

// //  this is brute force approach 


// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   const [name,setName]=useState("")
// //     const [email,setEmail]=useState("")
// //   const [password,setPassword]=useState("")

// //   return (
// //     <div className='bg-blue-300 h-70 w-90 flex flex-col  gap-1 justify-center items-center m-40 pt-2 rounded-2xl'>
// //       <h1>my name is -{name}</h1>
// //      <h1>my email is -{email}</h1>
// //           <h1>my password is -{password}</h1>

// //       <input onChange={(e)=>{setName(e.target.value)}} className='border-2 '  type = "text" placeholder='EnterName'></input>
// //       <input onChange={(e)=>{setEmail(e.target.value)}}  className='border-2 ' type = "text" placeholder='Enteremail'></input>
// //       <input  onChange={(e)=>{setPassword(e.target.value)}}className='border-2 '  type = "text" placeholder='Enterpassword'></input>

// // <button className='h-10 w-60 bg-emerald-500 border-2 rounded-xl m-2'>submit</button>
// //     </div>
// //   )
// // }

// // export default App

// // // this is better approach

// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   const [formdata,setFormData]=useState({name:"aman"})

// //   return (
// //     <div className='bg-blue-300 h-70 w-90 flex flex-col  gap-1 justify-center items-center m-40 pt-2 rounded-2xl'>
// //       <h1>my name is -{formdata.name}</h1>
// //      <h1>my email is -{formdata.email}</h1>
// //           <h1>my password is -{formdata.password}</h1>

// //       <input onChange={(e)=>{setFormData({...formdata,name:e.target.value})} }className='border-2 '  type = "text" placeholder='EnterName'></input>
// //       <input onChange={(e)=>{setFormData({...formdata,email:e.target.value})}}  className='border-2 ' type = "text" placeholder='Enteremail'></input>
// //       <input  onChange={(e)=>{setFormData({...formdata,password:e.target.value})}}className='border-2 '  type = "text" placeholder='Enterpassword'></input>

// // <button className='h-10 w-60 bg-emerald-500 border-2 rounded-xl m-2'>submit</button>
// //     </div>
// //   )
// // }

// // export default App

// // // this is optimized approach 

// // import React from 'react'
// // import { useState } from 'react'

// // const App = () => {
// //   const [formdata,setFormData]=useState({})
// // function formHandler(e){
// //   setFormData({...formdata,[e.target.name]:e.target.value})
// // }
// //   return (
// //     <div className='bg-blue-300 h-70 w-90 flex flex-col  gap-1 justify-center items-center m-40 pt-2 rounded-2xl'>
// //       <h1>my name is -{formdata.name}</h1>
// //      <h1>my email is -{formdata.email}</h1>
// //           <h1>my password is -{formdata.password}</h1>

// //       <input 
// //       name="name"
// //       onChange={formHandler }className='border-2 '  type = "text" placeholder='EnterName'></input>
// //       <input 
// //       name="email"
// //       onChange={formHandler}  className='border-2 ' type = "text" placeholder='Enteremail'></input>
// //       <input 
// //       name="password" onChange={formHandler}className='border-2 '  type = "text" placeholder='Enterpassword'></input>

// // <button className='h-10 w-60 bg-emerald-500 border-2 rounded-xl m-2'>submit</button>
// //     </div>
// //   )
// // }

// // export default App

// // //  this is practise of optimised approach 
// // import React, { useState } from 'react'

// // const App = () => {
// //  const [formdata,setFormData]=useState({
// //  });
// //  function formHandler(e){
// //    const   {name ,value}=e.target
// //                 setFormData({...formdata, [name]:value})

// //  }


// //   return (
// //     <div className='bg-black h-screen w-screen text-amber-50 flex flex-col justify-center items-center'>
// //       <div className='bg-black h-auto w-auto text-amber-50'>
// //         <h1>{formdata.name} </h1>
// //       <h1>{formdata.username}</h1>
// //       <h1>{formdata.email}</h1>
// //       <h1>{formdata.password}</h1>
// //       </div>
// //       <div className=' bg-blue-200 h-70 w-90 flex justify-center items-center flex-col  gap-2'>
// //     <input onChange={formHandler} className='bg-amber-50 p-2 border border-2  text-black rounded-xl' type="text" name="name" placeholder='Enter name '></input>
// //         <input onChange={formHandler} className='bg-amber-50 p-2 border border-2  text-black rounded-xl' name="username" type="text" placeholder='Enter usename '></input>
// //     <input onChange={formHandler} className='bg-amber-50 p-2 border border-2 text-black rounded-xl 'name="email" type="text" placeholder='Enter email '></input>
// //     <input onChange={formHandler} className='bg-amber-50 p-2 border border-2  text-black rounded-xl'name="password" type="text" placeholder='Enter password '></input>


// //       </div>
// //     </div>
// //   )
// // }

// // export default App


// // this is brute force approach 
// // import React, { useState } from "react";

// // const App = () => {

// //   const [formData,setFormData]=useState({
  
// //   })
// //   function formHandler(e){
// //   let {name ,value} =e.target
// //              setFormData(     {...formData,[name]:value})

// //   }

// //   return (
// //     <div className="min-h-screen bg-amber-100 flex items-center justify-center  gap-4">
// //      <div className="w-96 bg-white rounded-xl shadow-lg p-6">
// //   <h2 className="text-2xl font-bold text-center mb-4">
// //     User Details
// //   </h2>

// //   <div className="flex flex-col gap-3">
// //     <div className="border rounded-lg p-3">
// //       <p className="text-gray-500 text-sm">Name</p>
// //       <h1 className="text-lg font-semibold">{formData.name}</h1>
// //     </div>

// //     <div className="border rounded-lg p-3">
// //       <p className="text-gray-500 text-sm">Email</p>
// //       <h1 className="text-lg font-semibold">{formData.email}</h1>
// //     </div>

// //     <div className="border rounded-lg p-3">
// //       <p className="text-gray-500 text-sm">Password</p>
// //       <h3 className="text-lg font-semibold">{formData.password}</h3>
// //     </div>
// //   </div>
// // </div>
// //       <div className="w-96 bg-white rounded-xl shadow-lg p-6">
// //         <h1 className="text-3xl font-bold text-center mb-6">
// //           Register
// //         </h1>

// //         <form className="flex flex-col gap-4">
// //           <input onChange={formHandler}
// //             type="text"
// //             name="name"
// //             placeholder="Enter your name"
// //             className="border border-gray-400 rounded-lg p-3 outline-none focus:border-blue-500"
// //           />

// //           <input onChange={formHandler}

// //             type="email"
// //             name="email"
// //             placeholder="Enter your email"
// //             className="border border-gray-400 rounded-lg p-3 outline-none focus:border-blue-500"
// //           />

// //           <input
// //           onChange={formHandler}
// //             type="password"
// //             name="password"
// //             placeholder="Enter your password"
// //             className="border border-gray-400 rounded-lg p-3 outline-none focus:border-blue-500"
// //           />

// //           <button
// //         onClick={()=>{
// //         }}
// //             type="submit"
// //             className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 cursor-pointer"
// //           >
// //             Register
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [formData, setFormData] = useState({
//   });

//   function handleChange(e) {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }

//   return (
//     <div className="min-h-screen bg-amber-100 flex items-center justify-center gap-10">
//       {/* Register Card */}
//       <div className="w-96 bg-white rounded-2xl shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           Register
//         </h1>

//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border p-3 rounded-lg"
//           />

//           <button className="bg-amber-700 text-white py-3 rounded-lg cursor-pointer">
//             Register
//           </button>
//         </div>
//       </div>

//       {/* Preview Card */}
//       <div className="w-96 bg-white rounded-2xl shadow-lg p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           User Details
//         </h1>

//         <div className="space-y-4">
//           <div className="border p-3 rounded-lg">
//             <p className="text-gray-500">Name</p>
//             <h2>{formData.name || "Not Entered"}</h2>
//           </div>

//           <div className="border p-3 rounded-lg">
//             <p className="text-gray-500">Email</p>
//             <h2>{formData.email || "Not Entered"}</h2>
//           </div>

//           <div className="border p-3 rounded-lg">
//             <p className="text-gray-500">Password</p>
//             <h2>{formData.password || "Not Entered"}</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;
