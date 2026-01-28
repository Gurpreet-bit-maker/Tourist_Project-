import { useLocation, useNavigate } from "react-router-dom";
import bookedVaribleContext from "../../context/bookedFlights/bookedCreateContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function BookingPage() {
  let data = useLocation();
  let navigate = useNavigate();
  let { flightsData, setFlightData } = useContext(bookedVaribleContext);
  let [bookedFlightBtn, setBookedFlight] = useState(null);

  // let datahai = [{ name: "singh", roll: "23" }, { other: "manoj" }];
  // console.log(datahai[datahai.length - 1]);

  // economy selection function
  let selectEconomy = (economy, flight) => {
    setFlightData((prev) =>
      prev.map((item) =>
        item.id == flight.id
          ? { ...item, price: { ...item.price, bookedClass: economy } }
          : item,
      ),
    );
  };

  let bookFlight = async (flight) => {
    if (!flight.price.bookedClass) {
      alert(`Choose Classes Of ${flight.airline}`);
      return;
    }

    try {
      let booked = flightsData.map((item) =>
        item.id == flight.id ? { ...item, booked: true } : item,
      );
      let update = booked.filter((item) => item.booked);

      let storeBookedFlight = await axios.post(
        "https://tourist-project-backend.onrender.com/user/book",
        update[update.length - 1],
        { withCredentials: true },
      );
      setFlightData(booked);
    } catch (error) {
      console.log(error);
      if (error) {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    console.log(flightsData);
  });

  return (
    <>
      <div className="max-w-4xl mx-auto p-2 grid grid-cols-1 md:grid-cols-2 gap-2 h-200 ">
        {flightsData.map((flight) => {
          return (
            flight.to.split(" ")[0] == data.state.to && (
              <div
                key={flight.id}
                className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 p-5 hover:shadow-2xl transition duration-300 h-60"
              >
                {/* Airline + Flight Number */}
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-indigo-600">
                    {flight.airline}
                  </h2>
                  <span className="text-sm font-medium text-gray-500">
                    {flight.flightNumber}
                  </span>
                </div>

                {/* From → To */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 font-semibold">
                    {flight.from}
                  </span>
                  <span className="text-gray-400">→</span>
                  <span className="text-gray-700 font-semibold">
                    {flight.to}
                  </span>
                </div>

                {/* Time + Duration */}
                <div className="flex justify-between text-gray-600 mb-3 text-sm">
                  <span>
                    Departure:{" "}
                    {new Date(flight.departureTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  <span>
                    Arrival:{" "}
                    {new Date(flight.arrivalTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3">
                  Duration: {flight.duration}
                </p>

                {/* Seat Classes */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {flight.seatClass.map((cls, idx) => (
                    <span
                      key={idx}
                      onClick={() => selectEconomy(cls, flight)}
                      className="bg-indigo-100 text-indigo-700 active:bg-red-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-200"
                    >
                      {cls} - ₹{flight.price[cls]}
                    </span>
                  ))}
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => bookFlight(flight, flight.cls)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  {flight.booked ? (
                    <span className="text-red-500 text-lg font-semibold">
                      Booked...
                    </span>
                  ) : (
                    <span className="text-green-500">Book Now</span>
                  )}
                </button>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
