import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import userFormContext from "../../context/forms/formcreate";
import axios from "axios";
export default function SignUpForm() {
  //   let { signUpData, setSignUpData } = useContext(userFormContext);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const userformSubmit = async (signupData) => {
    try {
      let res = await axios.post(
        "https://tourist-project-backend.onrender.com/user/signup",
        signupData,
      );

      console.log(res.data);
      reset();
    } catch (error) {
      console.log(error);
    }
    reset();
  };

  return (
    <div style={{ padding: "20px" }} className="h-screen">
      <form
        onSubmit={handleSubmit(userformSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          📝 User Form
        </h2>

        {/* Name */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Name:</label>
          <input
            type="text"
            {...register("userName", { required: "Name is required" })}
            placeholder="Enter your name"
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
          {errors.userName?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Email:</label>
          <input
            type="email"
            {...register("userEmail", { required: "Email is required" })}
            placeholder="Enter your email"
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
          {errors.userEmail?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userEmail.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Phone:</label>
          <input
            type="number"
            {...register("userPhone", { required: "Phone is required" })}
            placeholder="Enter your phone"
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
          {errors.userPhone?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userPhone.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="mb-1 text-gray-600 font-medium">Password:</label>
          <input
            type="password"
            {...register("userPassword", { required: "Password is required" })}
            placeholder="Enter your password"
            className="rounded-xl border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:border-blue-500"
          />
          {errors.userPassword?.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.userPassword.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-green-500 py-3 text-white font-semibold hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>

      {isSubmitSuccessful && (
        <p className="bg-green-400 text-white">Submited</p>
      )}
    </div>
  );
}
