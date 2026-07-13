// import React, { useState } from 'react'
// import Navbar from './components/Navbar'
// import UserCard from './components/UserCard'
// import Form from './components/Form'

// const App = () => {
//        const [user,setUser]= useState([])
//  const [toggle,setToggle]= useState(true)
//   return (
    
//     <div className='bg-gray-800 h-screen w-screen p-2 flex flex-col gap-2'>
//       <Navbar setToggle={setToggle}/>
//      <div className='h-full w-full flex flex-row  gap-5 '>
//        {toggle? (user.map((elem)=>{return <UserCard elem ={elem}/>})):      <Form setUser={setUser}  setToggle={setToggle} />
//  }
//      </div>
//     </div>
//   )
// }

// export default App
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Aman Kumar",
      email: "aman@gmail.com",
      mobile: "9876543210",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    },
  ]);

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
          />
        </div>
      ):( <div className="max-w-7xl mx-auto p-8">
        <UserCard users={users} />
      </div>)}

     
    </div>
  );
};

export default App;