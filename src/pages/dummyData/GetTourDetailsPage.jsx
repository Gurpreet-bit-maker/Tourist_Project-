import { useLocation, useNavigate } from "react-router-dom";
export default function GetTourDetailsPage() {
  let data = useLocation();
  let place = data.state;
  let navigate = useNavigate();

  let bookFlight_btn = (p) => {
    navigate("/booking_page", {state: p});
  };

  return (
    <>
      <div className="max-w-5xl  mx-auto p-4 space-y-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
        {/* About */}
        <div className="bg-white border rounded-xl shadow border-l-4 border-indigo-500 p-5">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">
            About This Place
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {place.longDescription}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Best Time */}
          <div className="bg-white rounded-xl shadow border-t-4 border-blue-500 p-4">
            <h3 className="font-semibold text-blue-600 mb-1">
              Best Time to Visit
            </h3>
            <p className="text-gray-700">{place.bestTime}</p>
          </div>

          {/* Budget */}
          <div className="bg-white rounded-xl shadow border-t-4 border-green-500 p-4">
            <h3 className="font-semibold text-green-600 mb-1">
              Average Budget
            </h3>
            <p className="text-gray-700">{place.avgBudget}</p>
          </div>
        </div>

        {/* Famous For */}
        <div className="bg-white rounded-xl shadow border-l-4 border-purple-500 p-5">
          <h3 className="text-lg font-semibold text-purple-600 mb-3">
            Famous For
          </h3>
          <div className="flex flex-wrap gap-2">
            {place.famousFor.map((item, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-xl shadow border-l-4 border-orange-500 p-5">
          <h3 className="text-lg font-semibold text-orange-600 mb-3">
            Activities
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {place.activities.map((act, index) => (
              <li
                key={index}
                className="bg-orange-100 text-orange-800 px-3 py-2 rounded-md text-sm"
              >
                {act}
              </li>
            ))}
          </ul>
        </div>

        {/* How to Reach */}
        <div className="bg-white rounded-xl shadow border-l-4 border-teal-500 p-5">
          <h3 className="text-lg font-semibold text-teal-600 mb-2">
            How to Reach
          </h3>
          <p className="text-gray-700 leading-relaxed">{place.howToReach}</p>
        </div>
      </div>
      {/*//! book btn */}
      <div className="mx-2 my-1 h-25">
        <button
          onClick={() => bookFlight_btn(place)}
          className="border-1 h-12 font-bold border-black text-shadow-lg px-2 rounded-lg text-lg bg-green-500 text-black m-auto w-full"
        >
          Go For Flight
        </button>
      </div>
    </>
  );
}
