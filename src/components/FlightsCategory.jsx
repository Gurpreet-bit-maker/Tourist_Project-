import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import bookedVaribleContext from "../context/bookedFlights/bookedCreateContext";
import { useEffect } from "react";
import axios from "axios";

export default function FlightCategory({ dataReceived }) {
  let { bookedFlightsContext, setBookedFlightContext } =
    useContext(bookedVaribleContext);

  let navigate = useNavigate();
  // ! copy varible of bookingFlights of useContext
  let [bookedFlights, setBookedFlight] = useState();

  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get("https://tourist-project-backend.onrender.com/user/bookings", {
          withCredentials: true,
        });
        setBookedFlight(result.data.length);
        setBookedFlightContext(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error.response.data);
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
      let result = await axios.get("https://tourist-project-backend.onrender.com/user/events", {
        withCredentials: true,
      });
      console.log(result);
      window.scrollTo(0, 0);
      navigate("/events");
    } catch (error) {
      console.log(error.response.data);
      navigate("/login");
    }
  };
  return (
    <div className="mt-5 flex flex-col gap-y-5 items-center w-full  min-h-200 h-auto md:flex md:flex-row md:justify-around md:items-start pt-10">
      {/* best flights */}

      <div
        onClick={bestFlightsNavigate}
        className=" max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition h-70 w-70 md:border-black md:h-60 md:w-80 md:bg-black/80   hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:hover:bg-gray-800"
      >
        <div className="flex flex-col items-center gap-y-6 ">
          <div className="flex justify-between gap-x-2">
            <h2 className="text-lg font-bold text-gray-800 md:text-white">
              ✈️ Best Flights
            </h2>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Top Choice
            </span>
          </div>
          <p className="text-sm md:text-gray-300 leading-5  ">
            Best Flights offers you the best travel experience with reliable
            airlines, affordable prices, and convenient flight timings. Whether
            you are traveling for a business trip or planning a vacation,
            comfortable seating, and trusted services here.
          </p>
        </div>
      </div>

      {/* upcoming events */}

      <div
        onClick={veiwEvent}
        className="relative max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition h-70 w-70 md:border-black md:h-60 md:w-80  md:bg-black/80 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:hover:bg-gray-800"
      >
        <h3 className="bg-red-600 absolute top-[-10px] right-[-4px] text-white px-2 rounded-2xl">
          {bookedFlights}
        </h3>
        <div className="flex items-center flex-col gap-y-6 justify-between">
          <div className="flex justify-between ">
            <h2 className="text-lg font-bold text-gray-800 md:text-white">
              🎉 Upcoming Event
            </h2>
            <span className="rounded-full flex justify-center items-center bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
              Click for Details
            </span>
          </div>
          <p className="text-sm md:text-gray-300 leading-5">
            Flight Events keep you updated with all important information
            related to your journey. From booking confirmation and check-in
            updates to delays, gate changes, and landing status, every event is
            shown in real time.
          </p>
        </div>
      </div>
    </div>
  );
}
