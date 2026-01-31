import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function BestFlightSinglePage() {
  let flightState = useLocation();
  let navigate = useNavigate();
  let flight = flightState.state;
  let [bookedFlights, setBookedFlight] = useState([]);
  let [isQR, setQR] = useState(false);
 

  let reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        console.log(state);
        return {
          count: state.count <= 4 ? state.count + 1 : state.count,
        };
      case "dec":
        return {
          count: state.count > 0 ? state.count - 1 : state.count,
        };
    }
  };

  let [state, dispatch] = useReducer(reducer, { count: 1 });
  // available seats
  let totalSeats = flight.availableSeats;
  let availableSeats = totalSeats - state.count;
  // total price with gst
  let priceS = flight.price.Economy;
  let coversTotalPrice = priceS * state.count;
  let gstPrice = (5 / 100) * coversTotalPrice;
  let finalPrice = gstPrice + coversTotalPrice;

  let { price, seatClass, ...rest } = flight;

  let storeBestFlight = async () => {
    // ! check as backend level bookings
    // if(bookedFlights < 0)
    // {
    //   return <p></p>
    // }
    let newBooking = {
      ...rest,
      availableSeats: availableSeats,
      price: finalPrice,
      booked: true,
      persons: state.count,
    };
    try {
      let res = await axios.post(
        "https://tourist-project-backend.onrender.com/user/best",
        newBooking,
        { withCredentials: true },
      );
      if (res.data.message == "length is full") {
        alert("cannot store more booking");
        setTimeout(() => {
          setQR(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setQR(true);
        }, 1000);
      }

      setBookedFlight(newBooking);
      console.log(res.data);

      // ! dbs live data
      // available seats
    } catch (error) {
      if (error.response.data == "please Login") {
        console.log(error.response.data);
        navigate("/login");
      }
    }
  };

  let closeErrorBtn = () => {};
  return (
    <div className="h-200 md:h-140">
      <button
        onClick={() => navigate("/bestflights")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2 md:w-20"
      >
        ← back
      </button>
      <div className=" md:flex md:justify-center">
        <div className="  w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg ">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
              ✈️ Flight Details
            </h2>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Best Flight
            </span>
          </div>

          {/* Airline */}
          <div className="mb-6">
            <p className="text-sm text-gray-500">Airline</p>
            <p className="text-2xl font-semibold text-gray-800">
              {flight.airline} ({flight.flightNumber})
            </p>
          </div>

          {/* Route */}
          <div className="grid grid-cols-2 gap-8 mb-6">
            <div>
              <p className="text-sm text-gray-500">From</p>
              <p className="text-xl font-semibold text-gray-800">
                {flight.from}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">To</p>
              <p className="text-xl font-semibold text-gray-800">{flight.to}</p>
            </div>
          </div>

          {/* Info */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-lg font-semibold text-gray-800">
                {flight.duration}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Seats</p>
              <p className="text-lg font-semibold text-gray-800">
                {availableSeats}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4 text-center">
              <p className="text-sm text-gray-500">Persons</p>
              {state.count == 5 ? (
                <p className="text-lg font-semibold text-red-500">
                  {state.count} limit
                </p>
              ) : (
                <p className="text-lg font-semibold text-gray-800">
                  {state.count}
                </p>
              )}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between rounded-xl bg-green-50 p-5">
            <div>
              <p className="text-sm text-gray-500">Economy Price</p>
              <p className="text-3xl font-bold text-green-700">₹{finalPrice}</p>
            </div>
            {/* booking button */}
            <div className="flex gap-x-2">
              <button onClick={() => storeBestFlight()} className=" ">
                {isQR ? (
                  <span className="bg-blue-500 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition text-white">
                    Pay
                  </span>
                ) : (
                  <span className="bg-green-600  text-white text-lg font-semibold hover:bg-green-700 transition px-6 py-3 rounded-xl">
                    Book Now
                  </span>
                )}
              </button>
              {/* select covers button */}
              <div className="flex flex-col gap-y-1 text-center text-md">
                <span
                  onClick={() => dispatch({ type: "inc" })}
                  className="border px-2 rounded-sm active:bg-black active:text-white "
                >
                  +
                </span>
                <span
                  onClick={() => dispatch({ type: "dec" })}
                  className="border px-2 rounded-sm active:bg-black active:text-white"
                >
                  -
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {isQR ? (
          <>
            <h1 className="text-center"></h1>

            <div className="relative flex justify-center">
              <div id="qrcode" className="w-48 h-48">
                <svg
                  className="text-heading"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 29 29"
                  shapeRendering="crispEdges"
                >
                  <path fill="none" d="M0 0h29v29H0z"></path>
                  <path
                    stroke="currentColor"
                    d="M4 4.5h7m1 0h1m1 0h2m2 0h7M4 5.5h1m5 0h1m4 0h2m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m3 0h1m3 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h1m2 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h1m5 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h7M13 11.5h2M5 12.5h7m3 0h2m2 0h2m3 0h1M6 13.5h1m1 0h1m6 0h1m1 0h1m2 0h5M4 14.5h3m1 0h3m1 0h2m3 0h2m2 0h1m1 0h1M4 15.5h1m2 0h1m3 0h1m5 0h1m1 0h4m1 0h1M4 16.5h1m1 0h2m2 0h2m3 0h1m2 0h1m4 0h1M12 17.5h2m2 0h2m1 0h4m1 0h1M4 18.5h7m1 0h3m2 0h1m3 0h3M4 19.5h1m5 0h1m1 0h1m2 0h1m1 0h1m3 0h2m1 0h1M4 20.5h1m1 0h3m1 0h1m1 0h2m1 0h1m2 0h1m5 0h1M4 21.5h1m1 0h3m1 0h1m1 0h2m2 0h2m1 0h4M4 22.5h1m1 0h3m1 0h1m1 0h1m1 0h2m2 0h1M4 23.5h1m5 0h1m1 0h1m1 0h1m5 0h3M4 24.5h7m2 0h3m5 0h1m1 0h1"
                  ></path>
                </svg>
              </div>
            </div>
          </>
        ) : null}
        {/* warning */}
      </div>
    </div>
  );
}
