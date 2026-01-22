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
      let loginData = await axios.post("http://localhost:8080/user/login", e, {
        withCredentials: true,
      });

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
    <div style={{ padding: "20px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit(loginForm)}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            {...register("userName", { required: "req" })}
            placeholder="Enter name"
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            {...register("userPassword", { required: "req" })}
            placeholder="Enter password"
          />
        </div>
        {errorHai && <p className="text-red-500 font-bold">{errorHai}</p>}

        <br />

        <button type="submit">Login</button>
      </form>
      {isSubmitSuccessful && <p>submited</p>}
      
    </div>
  );
}
