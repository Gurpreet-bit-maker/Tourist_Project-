import { useLocation } from "react-router-dom";
import bookedVaribleContext from "../../context/bookedFlights/bookedCreateContext";
import { useContext } from "react";

export default function BookingPage() {
  let data = useLocation();
  let { flightsData } = useContext(bookedVaribleContext);
  console.log(flightsData);

  let bookFlight = (flight) => {
    console.log(flight);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {flightsData.map((flight) => {
          return (
            flight.to.split(" ")[0] == data.state.to && (
              <div
                key={flight.id}
                className="bg-white rounded-xl shadow-lg border-l-4 border-indigo-500 p-5 hover:shadow-2xl transition duration-300"
              >
                {/* Airline + Flight Number */}
                <div className="flex items-center justify-between mb-3">
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
                      className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-indigo-200"
                    >
                      {cls} - ₹{flight.price[cls]}
                    </span>
                  ))}
                </div>

                {/* Book Now Button */}
                <button
                  onClick={() => bookFlight(flight)}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-300"
                >
                  Book Now
                </button>
              </div>
            )
          );
        })}
      </div>
    </>
  );
}
