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
        "http://localhost:8080/user/signup",
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
    <div style={{ padding: "20px" }}>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit(userformSubmit)}>
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            {...register("userName", { required: "req" })}
            placeholder="Enter name"
          />
          {errors.userName?.message && <p>{errors.userName.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            {...register("userEmail", { required: "req" })}
            placeholder="Enter email"
          />
          {errors.userEmail?.message && <p>{errors.userEmail.message}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <br />
          <input
            type="number"
            {...register("userPhone", { required: "req" })}
            placeholder="Enter phone"
          />
          {errors.userPhone?.message && <p>{errors.userPhone.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <br />
          <input
            type="number"
            {...register("userPassword", { required: "req" })}
            placeholder="Enter password"
          />
          {errors.userPassword?.message && <p>{errors.userPassword.message}</p>}
        </div>

        <br />

        <button className="border px-2 bg-green-400 rounded-lg" type="submit">
          Submit
        </button>
      </form>
      {isSubmitSuccessful && (
        <p className="bg-green-400 text-white">Submited</p>
      )}
    </div>
  );
}
