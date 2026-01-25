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
        let res = await axios.get("https://tourist-project-backend.onrender.com/user/gettour");
        setDummytourData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTourApi_call();
  }, []);
  // navigate details btn data to component
  let detailsBtnRoute = (index, place) => {
    navigate("/getTourDetail_page", { state: place });
  };

  return (
    <div className=" grid grid-cols-1 gap-6">
      {dummyTourData.map((place) => (
        <div
          key={place.id}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <img
            src={`http://localhost:8080${place.image}`}
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
      ))}
    </div>
  );
}
