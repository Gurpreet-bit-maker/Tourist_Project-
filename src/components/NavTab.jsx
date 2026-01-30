import { useState } from "react";
import logo from "../../public/Logo.png";
import { useLocation } from "react-router-dom";
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
            <Link to="login">
              <button className="underline">/Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function btnClick() {
  alert("button clicked");
}
