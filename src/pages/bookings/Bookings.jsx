import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Bookings() {
  let navigate = useNavigate();

  let [flight, setbookings] = useState([]);
  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get(
          "https://tourist-project-backend.onrender.com/user/bookings",
          { withCredentials: true },
        );
        setbookings(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);

  //   console.log(bookings);
  return (
    <div className="h-screen md:bg-gray-100 md:h-140">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2 "
      >
        ← back
      </button>
      <div className="md:flex md:justify-center ">


      {flight ? (
        <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 md:max-w-200 md:h-90">
          {/* Airline + Status */}
          <div className="flex items-center justify-between mb-5  shadow-lg px-2 h-10">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✈️</span>
              <h2 className="text-xl font-semibold text-slate-800">
                {flight.airline}
              </h2>
            </div>

            {flight.booked && (
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                Booked
              </span>
            )}
          </div>

          {/* Route */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-400">
                From
              </p>
              <p className="text-lg font-semibold text-slate-800">
                {flight.from}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xl text-slate-500">✈️</span>
              <span className="text-sm text-slate-400">Non-Stop</span>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                To
              </p>
              <p className="text-lg font-semibold text-slate-800">
                {flight.to}
              </p>
            </div>
          </div>

          {/* Time */}
          <div className="grid grid-cols-2 gap-4 mb-6 rounded-xl bg-slate-50 p-4">
            <div>
              <p className="text-xs text-slate-500">Departure</p>
              <p className="text-base font-semibold text-slate-800">
                {flight.departureTime}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">Arrival</p>
              <p className="text-base font-semibold text-slate-800">
                {flight.arrivalTime}
              </p>
            </div>
          </div>

          {/* Extra Info */}
          <div className="flex items-center justify-between text-sm text-slate-600">
            <div className="flex items-center gap-1">
              ⏱ <span className="font-medium">{flight.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              🪑 <span className="font-medium">{flight.availableSeats}</span>{" "}
              Seats
            </div>
            <div className="flex items-center gap-1">
              🛑 <span className="font-medium">{flight.stops}</span> Stops
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-500"> you dont have any flightS</p>
      )}
      </div>
    </div>
  );
}
