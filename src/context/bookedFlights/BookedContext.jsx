import bookedVaribleContext from "./bookedCreateContext";
import { useState, useEffect } from "react";
import axios from "axios";

let BookedContext = ({ children }) => {
  let [dummyTourData, setDummytourData] = useState([]);
  let [flightsData, setFlightData] = useState([]);

  useEffect(() => {
    let dataFetch = async () => {
      let res = await axios.get("https://tourist-project-backend.onrender.com/user/flight");
      setFlightData(...res.data);
    };
    dataFetch();
  }, []);

  return (
    <bookedVaribleContext.Provider
      value={{ dummyTourData, setDummytourData, flightsData,setFlightData }}
    >
      {children}
    </bookedVaribleContext.Provider>
  );
};
export default BookedContext;
