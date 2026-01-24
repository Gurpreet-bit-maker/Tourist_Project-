import bestFlightVaribleContext from "../../context/bestFlightsData/bestflightCreateContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function BestFlights() {
  let { bestFlights } = useContext(bestFlightVaribleContext);
  let navigate = useNavigate();

  console.log(bestFlights);
  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition m-2"
      >
        ←
      </button>
      <div className="flex flex-wrap gap-4 ">
        {bestFlights.map((flight) => (
          <div
            key={flight.id}
            className="w-full  max-w-md rounded-2xl border border-gray-400 bg-white p-4 shadow hover:shadow-md transition cursor-pointer"
            onClick={() => navigate("/bflightsingle", { state: flight })}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-2 ">
              <h2 className="text-xl font-bold text-gray-800">
                ✈️ {flight.airline}
              </h2>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                Top Choice
              </span>
            </div>

            {/* Route */}
            <p className="text-sm text-gray-600">
              {flight.from} → {flight.to}
            </p>
            <p>{flight.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
