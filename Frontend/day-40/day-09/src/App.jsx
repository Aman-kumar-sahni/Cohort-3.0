import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users"))||[]);
let obj ={
  name:"man1",
  rollno:23,
  subject:"CSE",

}

function deleteHandler(index){
  
let newUser=  users.filter((elem,idx)=> idx!==index
)
setUsers(newUser)

localStorage.setItem("users",JSON.stringify(newUser))
}

function updateHandler(index){
  let updateHandler =users.filter((elem,idx)=>idx===index)
  
  
}
 

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar showForm={showForm} setShowForm={setShowForm} />

      {/* Form */}
      {showForm ? (
        <div className="flex justify-center mt-8">
          <Form
            setUsers={setUsers}
            setShowForm={setShowForm}
            users={users}
          />
        </div>
      ):(
         <div className="max-w-7xl mx-auto p-8 ">
        <UserCard users={users}            deleteHandler={deleteHandler}
        updateHandler={updateHandler}
         

 />
      </div>
      )}

     
    </div>
  );
};

export default App;