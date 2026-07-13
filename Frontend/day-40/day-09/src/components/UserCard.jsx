import React from "react";

const UserCard = ({ users ,deleteHandler}) => {
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
    <div className="grid grid-cols-4 grid-rows-4 gap-8">
      {users.map((user,index) => (
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
              <button className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg font-medium transition">
                update
              </button>

              <button onClick={()=>{
            deleteHandler(index)
              }} className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition">
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