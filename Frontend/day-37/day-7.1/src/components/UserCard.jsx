import React from "react";

const UserCard = ({username,password,image,email}) => {
  return (
    <div className="w-[350px] bg-white rounded-2xl shadow-xl p-6">
      <div className="flex justify-center mb-5">
        <img
          src={image}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
        />
      </div>

      <div className="space-y-4">
        <div className="border rounded-lg p-3">
          <p className="text-gray-500 text-sm">Username</p>
          <h2 className="text-lg font-semibold">{username}</h2>
        </div>

        <div className="border rounded-lg p-3">
          <p className="text-gray-500 text-sm">Email</p>
          <h2 className="text-lg font-semibold">{email}</h2>
        </div>

        <div className="border rounded-lg p-3">
          <p className="text-gray-500 text-sm">Password</p>
          <h2 className="text-lg font-semibold">{password}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserCard;