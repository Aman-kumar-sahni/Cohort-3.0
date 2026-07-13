// // import React from 'react'

// // const UserCard = ({elem}) => {
  
// //   return (
    
// //     <div className='bg-black h-95 w-60 p-2 flex flex-col gap-1 border border-2 text-amber-50 border-gray-400 rounded '>
// //       <div className='h-60 w-55  '>
// //          <img className=' w-full h-full object-cover' src={elem.Image} alt="Image"></img> 

// //       </div>
      
// //         <h1> {elem.Name}</h1>
// //         <h1>{elem.Email}</h1>
// //         <h1>{elem.Mobile}</h1>
        


// // <div className='flex gap-2 items-center justify-center'>
// //             <button className='bg-emerald-500 h-8 w-25 rounded-xl'>Edit</button>
// //                         <button className='bg-red-800 h-8 w-25 rounded-xl'>Delete</button>


// // </div>
      
// //     </div>
// //   )
// // }

// // export default UserCard
// import React from "react";

// const UserCard = ({ users }) => {
//   if (users.length === 0) {
//     return (
//       <div className="flex justify-center mt-10">
//         <h1 className="text-2xl font-semibold text-gray-500">
//           No Users Found
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {users.map((user) => (
//         <div
//           key={user.id}
//           className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
//         >
//           {/* Image */}
//           <img
//             src={user.image}
//             alt={user.name}
//             className="w-full h-64 object-cover"
//           />

//           {/* Details */}
//           <div className="p-5 flex flex-col gap-3">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {user.name}
//             </h2>

//             <p className="text-gray-600">
//               <span className="font-semibold">Email :</span>{" "}
//               {user.email}
//             </p>

//             <p className="text-gray-600">
//               <span className="font-semibold">Mobile :</span>{" "}
//               {user.mobile}
//             </p>

//             <button className="mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
//               View Profile
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default UserCard;
import React from "react";

const UserCard = ({ users }) => {
  if (users.length === 0) {
    return (
      <div className="flex justify-center mt-10">
        <h1 className="text-2xl font-semibold text-gray-500">
          No Users Found
        </h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          {/* Image */}
          <img
            src={user.image}
            alt={user.name}
            className="w-full h-64 object-cover"
          />

          {/* Details */}
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}
            </h2>

            <p className="text-gray-600">
              <span className="font-semibold">Email :</span> {user.email}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold">Mobile :</span> {user.mobile}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-3"> 
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white py-2 rounded-lg font-medium transition">
                Update
              </button>

              <button className="flex-1 bg-red-600 hover:bg-red-700 cursor-pointer text-white py-2 rounded-lg font-medium transition">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;