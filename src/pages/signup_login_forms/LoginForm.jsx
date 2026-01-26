import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm() {
  let navigate = useNavigate();
  let [errorHai, seterrorHai] = useState("");
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const loginForm = async (e) => {
    try {
      let loginData = await axios.post(
        "https://tourist-project-backend.onrender.com/user/login",
        e,
        {
          withCredentials: true,
        },
      );

      console.log(loginData);
      seterrorHai("");
      reset();
      navigate("/");
    } catch (error) {
      seterrorHai(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <div className="mb-5 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl h-screen border">
      <div className="fixed inset-0 bg-black/60 z-40 border"></div>
      <div className="fixed bg-white z-50 flex flex-col justify-center items-center w-85 px-10 py-5 rounded-lg border">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
          🔐 Login
        </h2>

        <form onSubmit={handleSubmit(loginForm)}>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Name:
            </label>
            <br />
            <input
              type="text"
              {...register("userName", { required: "req" })}
              placeholder="Enter name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
            />
          </div>

          <br />

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Password:
            </label>
            <br />
            <input
              type="password"
              {...register("userPassword", { required: "req" })}
              placeholder="Enter password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-lg focus:border-blue-500 focus:outline-none"
            />
          </div>
          {errorHai && <p className="text-red-500 font-bold">{errorHai}</p>}

          <br />

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        {isSubmitSuccessful && <p>submited</p>}
        {/* home btn */}
        <button
          onClick={() => navigate("/")}
          className="flex mt-2 items-center  gap-1 rounded-lg border border-gray-300 bg-black/80 px-3 py-1 text-lg font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6 text-white "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75h-5.25v-6a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v6H3.75A.75.75 0 013 21V9.75z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
