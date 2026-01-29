import { Link, useNavigate } from "react-router-dom";
export default function FlightCategory() {
  let navigate = useNavigate();
  let bestFlightsNavigate = () => {
    window.scrollTo(0, 0);
    navigate("/bestflights");
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
      <Link to="/events">
        <div className="max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition h-40 w-50 md:border-black md:h-60 md:w-60  md:bg-black/80 ">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-800 md:text-white">
              🎉 Upcoming Event
            </h2>
            <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-semibold text-pink-700">
              Click for Details
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
