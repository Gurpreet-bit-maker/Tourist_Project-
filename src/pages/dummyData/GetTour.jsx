import { useState, useContext } from "react";
import bookedVaribleContext from "../../context/bookedFlights/bookedCreateContext";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GetTour() {
  let { dummyTourData, setDummytourData } = useContext(bookedVaribleContext);
  let navigate = useNavigate();

  console.log(dummyTourData);

  // dummyData get api
  useEffect(() => {
    let getTourApi_call = async () => {
      try {
        let res = await axios.get(
          "https://tourist-project-backend.onrender.com/user/gettour",
        );
        setDummytourData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTourApi_call();
  }, []);
  // navigate details btn data to component
  let detailsBtnRoute = (index, place) => {
    window.scrollTo(0, 0);
    navigate("/getTourDetail_page", { state: place });
  };

  return (
    <div className=" grid grid-cols-1 gap-6 h-450">
      {dummyTourData.length > 0 ? (
        dummyTourData.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={`https://tourist-project-backend.onrender.com${place.image}`}
              alt={place.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800">
                {place.name}
              </h3>
              <h5 className="text-sm text-gray-500 mt-1">{place.state}</h5>
              <p className="text-gray-600 text-sm mt-2">{place.description}</p>
              <button
                onClick={() => detailsBtnRoute(place.id, place)}
                className="bg-green-500 px-2 text-white"
              >
                Details
              </button>
            </div>
          </div>
        ))
      ) : (
        <div role="status" className="h-200 ">
          <button
            type="button"
            className="h-140  flex justify-center items-center w-full h-140 text-body bg-neutral-primary-soft  border-default hover:bg-neutral-secondary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary-soft shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
          >
            <svg
              aria-hidden="true"
              className="w-12 h-12 text-neutral-tertiary animate-spin fill-brand me-2"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            Loading...
          </button>
        </div>
      )}
    </div>
  );
}
