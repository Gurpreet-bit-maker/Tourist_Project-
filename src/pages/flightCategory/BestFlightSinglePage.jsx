import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function BestFlightSinglePage() {
  let flightState = useLocation();
  let navigate = useNavigate();

  let flight = flightState.state;
  return (
    <div className="h-screen">
      <button
        onClick={() => navigate("/bestflights")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2"
      >
        ←
      </button>
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-lg ">
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
            <p className="text-xl font-semibold text-gray-800">{flight.from}</p>
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
              {flight.availableSeats}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4 text-center">
            <p className="text-sm text-gray-500">Stops</p>
            <p className="text-lg font-semibold text-gray-800">
              {flight.stops}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between rounded-xl bg-green-50 p-5">
          <div>
            <p className="text-sm text-gray-500">Economy Price</p>
            <p className="text-3xl font-bold text-green-700">
              ₹{flight.price.Economy}
            </p>
          </div>
          <button className="rounded-xl bg-green-600 px-6 py-3 text-white text-lg font-semibold hover:bg-green-700 transition">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
