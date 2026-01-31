import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import bookedVaribleContext from "../../context/bookedFlights/bookedCreateContext";

export default function Bookings() {
  let navigate = useNavigate();
  let { bookedFlightsContext, setBookedFlightContext } = useContext(bookedVaribleContext);

  useEffect(() => {
    let getBookings = async () => {
      try {
        let result = await axios.get("http://localhost:5000/user/bookings", {
          withCredentials: true,
        });
        setBookedFlightContext(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBookings();
  }, []);

  //   console.log(bookings);
  return (
    <div className="min-h-220 max-h-auto md:bg-gray-100 md:min-h-160">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2 "
      >
        ← back
      </button>
      <div className="md:flex md:justify-center md:items-center md:h-110 ">
        {bookedFlightsContext && bookedFlightsContext.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:flex ">
            {bookedFlightsContext.map((flight) => (
              <div
                key={flight._id}
                className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Airline + Status */}
                <div className="flex items-center justify-between mb-5 shadow-lg px-2 h-10">
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

                {/* Route (static ya backend se agar aaye to replace) */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-400">
                      From
                    </p>
                    <p className="text-lg font-semibold text-slate-800">
                      {flight.from || "DEL"}
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
                      {flight.to || "BOM"}
                    </p>
                  </div>
                </div>

                {/* Time */}
                <div className="grid grid-cols-2 gap-4 mb-6 rounded-xl bg-slate-50 p-4">
                  <div>
                    <p className="text-xs text-slate-500">Departure</p>
                    <p className="text-base font-semibold text-slate-800">
                      {new Date(flight.departureTime).toLocaleString()}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-slate-500">Arrival</p>
                    <p className="text-base font-semibold text-slate-800">
                      {new Date(flight.arrivalTime).toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Extra Info */}
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    ⏱{" "}
                    <span className="font-medium">
                      {flight.duration || "2h 40m"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    🪑{" "}
                    <span className="font-medium">
                      {flight.availableSeats || 30}
                    </span>{" "}
                    Seats
                  </div>
                  <div className="flex items-center gap-1">
                    🛑 <span className="font-medium">{flight.stops || 0}</span>{" "}
                    Stops
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-red-500">You don’t have any bookedFlights</p>
        )}
      </div>
    </div>
  );
}
