import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import bookedVaribleContext from "../context/bookedFlights/bookedCreateContext";
import { useEffect } from "react";
import axios from "axios";

export default function FlightCategory() {
  let { bookedFlightsContext, setBookedFlightContext } =
    useContext(bookedVaribleContext);

  let navigate = useNavigate();
  // ! copy varible of bookingFlights of useContext
  let [bookedFlights, setBookedFlight] = useState();

  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get("http://localhost:5000/user/bookings", {
          withCredentials: true,
        });
        setBookedFlight(result.data.length);
        setBookedFlightContext(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, [bookedFlights]);

  let bestFlightsNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/bestflights");
  };

  let veiwEvent = async () => {
    try {
      let result = await axios.get("http://localhost:5000/user/events", {
        withCredentials: true,
      });
      console.log(result);
      window.scrollTo(0, 0);
      navigate("/events");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 grid grid-cols-2 h-100 md:flex md:justify-around">
      {/* best flights */}

      <div
        onClick={bestFlightsNavigate}
        className=" max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition h-40 w-50 md:border-black md:h-60 md:w-60 md:bg-black/80 "
      >
        <div className="flex items-center justify-between ">
          <h2 className="text-lg font-bold text-gray-800 md:text-white">
            ✈️ Best Flights
          </h2>
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Top Choice
          </span>
        </div>
      </div>

      {/* upcoming events */}

      <div
        onClick={veiwEvent}
        className="relative max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition h-40 w-50 md:border-black md:h-60 md:w-60  md:bg-black/80 "
      >
        <h3 className="bg-red-600 absolute top-[-10px] right-[-4px] text-white px-2 rounded-2xl">
          {bookedFlights}
        </h3>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800 md:text-white">
            🎉 Upcoming Event
          </h2>
          <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
            Click for Details
          </span>
        </div>
      </div>
    </div>
  );
}
