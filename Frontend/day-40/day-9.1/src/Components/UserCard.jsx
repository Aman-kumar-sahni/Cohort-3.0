const UserCard = ({elem,idx,deleteHandler,setToggle,setUpdatedData}) => {
  return (
    <div className="w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg transition hover:shadow-xl">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={elem.image}
          alt="Profile"
          className="h-60 w-full rounded-xl border-2 border-gray-300 object-cover"
        />
      </div>

      {/* User Details */}
      <div className="mt-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{elem.username}</h2>

        <p className="text-sm text-gray-600">
{elem.email}        </p>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button
        onClick={()=>{
setToggle((prev)=>!prev)
setUpdatedData(elem)
        }}
          type="button"
          className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Update
        </button>

        <button
        onClick={()=>{
          deleteHandler(idx)
        }}
          type="button"
          className="flex-1 rounded-lg bg-red-600 py-2.5 text-sm font-semibold text-white transition duration-200 hover:bg-red-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;