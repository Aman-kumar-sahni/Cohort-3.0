
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  
const onSubmit = async (data) => {
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("age", data.age);
for (let i =0;i<data.file.length;i++){
  formData.append("image", data.file[i]);

}

  try {
    const response = await axios.post(
      "http://localhost:3000/file",
      formData
    );

    console.log(response.data);

    reset();
  } catch (error) {
    console.log(error);
  }
};




  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          User Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Age */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Age
            </label>

            <input
              type="number"
              placeholder="Enter your age"
              {...register("age", {
                required: "Age is required",
              })}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            {errors.age && (
              <p className="mt-1 text-sm text-red-500">
                {errors.age.message}
              </p>
            )}
          </div>

          {/* File */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Upload File
            </label>

            <input
              type="file"
              multiple
              {...register("file", {
                required: "File is required",
              })}
              className="w-full rounded-lg border border-gray-300 p-3"
            />

            {errors.file && (
              <p className="mt-1 text-sm text-red-500">
                {errors.file.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

