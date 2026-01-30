import { useState, useEffect } from "react";
import logo from "../../public/Logo.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import WeatherPage from "../pages/WeatherPage";

export default function NavTab() {
  let navigate = useNavigate();
  let [dataReceived, setData] = useState(null);

  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get("http://localhost:5000/user/bookings", {
          withCredentials: true,
        });
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);

  let signOut = async () => {
    if (!dataReceived) {
      navigate("/login");
    }
    if (dataReceived) {
      try {
        let result = await axios.post(
          "http://localhost:5000/user/logout",
          {},
          {
            withCredentials: true,
          },
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
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

            <button onClick={signOut} className="underline">
              {dataReceived ? "/SignOut" : "/Login"}
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
