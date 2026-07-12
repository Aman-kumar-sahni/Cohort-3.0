import React, { useState } from "react";

const FormCard = ({setUser}) => {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:"",
        image:""

    })
    function formHandler(e){
     let {name,value}=   e.target
setFormData({...formData,[name]:value})
    }

    function submitHandler(e){
        e.preventDefault()
setUser((prev)=>[...prev,formData])
setFormData({
     username:"",
        email:"",
        password:"",
        image:""
})

    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[380px] bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input 
          value={formData.username}
          onChange={formHandler}
            type="text"
            name="username"
            placeholder="Enter Username"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <input
          value={formData.email}
          onChange={formHandler}
            type="email"
            name="email"
            placeholder="Enter Email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <input
          value={formData.password}
          onChange={formHandler}
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <div>
            <label className="block mb-2 font-medium">
              Upload Profile Image
            </label>

            <input
                      value={formData.image}

            onChange={formHandler}
              type="url"
              name="image"
              className="w-full border border-gray-300 rounded-lg p-2 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
          >
            Register
          </button>
        </form>
        
      </div>
      
    </div>
  );
};

export default FormCard;