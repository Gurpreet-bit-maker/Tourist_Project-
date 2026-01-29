import { useState } from "react";
import logo from "../../public/Logo.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WeatherPage from "../pages/WeatherPage";

export default function NavTab() {
  let styles = " hover:text-green-400 p-2 font-bold";

  let logintrue = useLocation();
  let loginOrSignup = async () => {
    if (logintrue) {
      let sendToken = await axios.post(
        "https://tourist-project-backend.onrender.com/user/signout",
        {
          withCredentials: true,
        },
      );
    } else {
      navigate("/login");
    }
  };
  return (
    <div className=" w-full h-20 ">
      {/* navbaar */}

      <div
        className=" fixed top-0 w-full flex justify-between px-2 py-5 z-3 bg-blue-50

"
      >
        <img className="w-25 h-fit" src={logo} alt="" />
        <div>
          <div className="flex gap-x-2">
            <Link to="/signup">
              <button className="">SignUp</button>
            </Link>

            <button onClick={loginOrSignup} className="underline">
              /{logintrue ? "SignOut" : "Login"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function btnClick() {
  alert("button clicked");
}
