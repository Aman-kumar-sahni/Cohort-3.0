// import React, { useState } from "react";

// const FormCard = ({setUser}) => {
//     const [formData,setFormData]=useState({
//         username:"",
//         email:"",
//         password:"",
//         image:""

//     })
//     function formHandler(e){
//      let {name,value}=   e.target
// setFormData({...formData,[name]:value})
//     }

//     function submitHandler(e){
//         e.preventDefault()
// setUser((prev)=>[...prev,formData])
// setFormData({
//      username:"",
//         email:"",
//         password:"",
//         image:""
// })

//     }
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="w-[380px] bg-white rounded-2xl shadow-xl p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">
//           Register
//         </h1>

//         <form onSubmit={submitHandler} className="flex flex-col gap-4">
//           <input 
//           value={formData.username}
//           onChange={formHandler}
//             type="text"
//             name="username"
//             placeholder="Enter Username"
//             className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//           />

//           <input
//           value={formData.email}
//           onChange={formHandler}
//             type="email"
//             name="email"
//             placeholder="Enter Email"
//             className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//           />

//           <input
//           value={formData.password}
//           onChange={formHandler}
//             type="password"
//             name="password"
//             placeholder="Enter Password"
//             className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
//           />

//           <div>
//             <label className="block mb-2 font-medium">
//               Upload Profile Image
//             </label>

//             <input
//                       value={formData.image}

//             onChange={formHandler}
//               type="url"
//               name="image"
//               className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
//           >
//             Register
//           </button>
//         </form>
        
//       </div>
      
//     </div>
//   );
// };

// export default FormCard;


import React, { useState } from "react";

const FormCard = ({ setUsers }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    image: "",
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData((prev) => ({
        ...prev,
        image: URL.createObjectURL(files[0]),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setUsers((prev) => [...prev, formData]);

    setFormData({
      username: "",
      email: "",
      password: "",
      image: "",
    });

    e.target.reset();
  }

  return (
    <div className="w-[400px] bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Register
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:border-blue-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:border-blue-500"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none focus:border-blue-500"
          required
        />

        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="border p-2 rounded-lg cursor-pointer"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default FormCard;