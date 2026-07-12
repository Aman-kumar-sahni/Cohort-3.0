// import React from 'react'
// import FormCard from './components/formCard'
// import  { useState } from "react";
// import UserCard from './components/UserCard';

// const App = () => {
//       const [user ,setUser]=useState([])

//   return (

//     <div className='h-screen w-screen flex justify-center items-center gap-4'>
//       <FormCard setUser={setUser}/>
//       {
//         user.map((elem)=>{
//           return <UserCard username={elem.username} password={elem.password} image={elem.image}  email={elem.email}/>
//         })
//       }
//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import FormCard from "./components/FormCard";
import UserCard from "./components/UserCard";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        User Registration
      </h1>

      <div className="flex flex-col items-center gap-10">
        <FormCard setUsers={setUsers} />

        <div className="flex flex-wrap justify-center gap-6">
          {users.map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
