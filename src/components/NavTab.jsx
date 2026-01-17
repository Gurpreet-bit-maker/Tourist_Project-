import { useState } from "react";
import logo from "../../public/Logo.png";
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
  return (
    <div>
      <div className="p-2 border flex gap-x-90 m-1 sticky top-0">
        <img className="w-25 h-fit mt-2" src={logo} alt="" />
        <ul className="flex gap-x-9 p-1 font-mono text-lg ">
          <li className={styles}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles}>
            <Link to="/contect">Contect</Link>
          </li>
          <li className={styles}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      
        <button
          onClick={btnClick}
          className="border mt-1 p-2 h-fit bg-green-200 hover:bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-green-700 hover:text-white rounded transition duration-300 ease-in-out tracking-wider"
        >
          Click me!
        </button>
      </div>
     
    </div>
  );
}

function btnClick() {
  alert("button clicked");
}
