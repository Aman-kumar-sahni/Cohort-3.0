import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  const formData = new FormData();

formData.append("name", data.name);
formData.append("age", data.age);
  for (const file of data.file) {
    formData.append("images2", file);
  }
axios.post("http://localhost:3000/file",formData)
    reset()
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-xl bg-white p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold">User Form</h1>

        {/* Name */}
        <div>
          <label className="mb-2 block font-medium">Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-yellow-400"
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="mb-2 block font-medium">Age</label>

          <input
            type="number"
            placeholder="Enter your age"
            {...register("age", {
              required: "Age is required",
            })}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-yellow-400"
          />

          {errors.age && (
            <p className="mt-1 text-sm text-red-500">
              {errors.age.message}
            </p>
          )}
        </div>

        {/* File */}
        <div>
          <label className="mb-2 block font-medium">File</label>

          <input
            type="file" multiple
            {...register("file", {
              required: "File is required",
            })}
            className="w-full rounded-lg border border-gray-300 p-2"
          />

          {errors.file && (
            <p className="mt-1 text-sm text-red-500">
              {errors.file.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-yellow-400 px-4 py-2 font-semibold text-black transition hover:bg-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;