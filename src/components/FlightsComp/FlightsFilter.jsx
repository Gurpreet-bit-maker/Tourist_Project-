import { useCallback, useEffect, useState } from "react";
import flightData from "../../data/FlightsData.js";
import advantureImg from "../../../public/FilterImages/advan.jpg";
import foodiImg from "../../../public/FilterImages/food.jpg";

export default function FlightsFilter() {
  let allClassLabel = "p-2 tracking-wider ";

  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  let [tourType, setTourType] = useState("Advanture");
  let [filterObj, setfilterObj] = useState([]);

  let SearchingCard = () => {
    if (startDate !== "" && endDate !== "") {
      let obj = flightData.filter((item) => item.tourType == tourType);
      setfilterObj(obj);
      console.log(obj);
    } else {
      alert("Please enter Start date and End date");
    }
  };

  return (
    <>
      {/*//* Box div */}
      {tourType == "Advanture" ? (
        <div className="pt-5 h-[95vh] transition delay-300 duration-300 bg-[url(/public\FilterImages\advan.jpg)] bg-center bg-cover flex flex-col items-center justify-center font-mono">
          {/* //?filter full first div  */}
          <div className="border h-[50vh] shadow-xl  rounded text-center">
            {/*//* Child Box div */}
            <div className="flex h-[40vh] w-200 justify-center gap-x-10 ">
              {/* //! date range 1st */}

              <div className="w-60 shadow-xl p-3 flex flex-col mt-5 bg-blue-300 border text-white">
                <h1 className="text-2xl underline text-black">Select Date</h1>
                <label htmlFor="startingDate" className="font-bold">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startingDate"
                  className="border"
                  onChange={(event) => setStartDate(event.target.value)}
                />
                <label htmlFor="endDate" className="font-bold">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="border"
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </div>
              {/* //! Choose tour  with conditional style div*/}
              {tourType == "Advanture" ? (
                <div className="text-center shadow-xl text-white p-3 w-60 mt-5 bg-yellow-300  rounded">
                  <h1 className="text-2xl underline   font-bold">Tour plain</h1>

                  <select
                    className="border mt-5 w-50 h-10 text-black tracking-wider"
                    name=""
                    id=""
                    defaultValue={"Advanture"}
                    onChange={(event) => setTourType(event.target.value)}
                  >
                    <option value="Advanture">Advanture Tour</option>
                    <option value="Foodie">Foodie Tour</option>
                  </select>
                </div>
              ) : (
                <div className="text-center bg-blue-300 w-50 mt-5 rounded text-white">
                  <h1 className="text-2xl underline text-yellow-200  font-bold">
                    Tour plain
                  </h1>
                  <select
                    className="border mt-5 w-50 h-10  "
                    name=""
                    id=""
                    defaultValue={"Advanture"}
                    onChange={(event) => setTourType(event.target.value)}
                  >
                    <option value="Advanture">Advanture</option>
                    <option value="Foodie">Foodie</option>
                  </select>
                </div>
              )}
            </div>

            {/* //! searching btn 1st */}
            <button
              onClick={SearchingCard}
              className="border bg-white w-50 mt-6 p-1 rounded hover:bg-black hover:text-white active:bg-orange-200"
            >
              Search
            </button>
          </div>

          {/* //?search cards div 1 */}
          <div className=" h-[40vh] flex flex-wrap gap-x-5 w-120  justify-center">
            {filterObj.length > 0
              ? filterObj.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" transition p-1 delay-100 duration-100 ease-in-out border h-80 text-center bg-blue-200  hover:bg-green-200  hover:shadow-2xl hover:rounded   hover:text-black flex flex-col "
                    >
                      <h1 className="text-lg underline text-shadow-lg tracking-wider">
                        {item.airline}
                      </h1>
                      <h2>
                        <b>From</b> : {item.source}
                      </h2>
                      <h2>
                        <b>To</b> : {item.destination}
                      </h2>
                      <div className="flex justify-center flex-col items-center">
                        <img
                          className="w-50 border h-15 rounded "
                          src={item.imges}
                          alt=""
                        />
                      </div>
                      <div className="font-mono">
                        <p>{item.departure}</p>
                        <p>{item.arrival}</p>
                        <p className="font-bold">{item.duration}</p>
                        <strong className="block text-sm underline bg-white">
                          {item.price} Rs.
                        </strong>
                        <p>{item.stops}</p>
                      </div>
                      <button className="m-auto border hover:bg-gray-200 w-20 text-black rounded active:bg-gray-200">
                        Add
                      </button>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      ) : (
        <div className="pt-5 h-[95vh] flex flex-col items-center justify-center font-mono bg-[url(/public\FilterImages\food.jpg)]  bg-cover bg-no-repeat bg-bottom-left">
          {/* //?filter div Second condition code */}
          <div className=" h-[50vh] shadow-xl  rounded text-center">
            {/* //*child divs */}
            <div className="flex h-[40vh] w-200 justify-center gap-x-80">
              {/* //! date range 2nd */}
              <div className="w-60 shadow-xl p-3 flex flex-col mt-5 bg-blue-300 rounded text-white ">
                <h1 className="text-3xl underline text-black">Select Date</h1>
                <label htmlFor="startingDate" className="font-bold pt-5 text-2xl">
                  Start Date
                </label>
                <input
                  type="date"
                  id="startingDate"
                  className="border mt-2 h-10 text-lg "
                  onChange={(event) => setStartDate(event.target.value)}
                />
                <label htmlFor="endDate" className="font-bold mt-5 text-2xl">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="border mt-2 h-10 text-lg"
                  onChange={(event) => setEndDate(event.target.value)}
                />
              </div>
              {/* //! Tour plain */}
              {tourType == "Foodie" ? (
                <div className="text-center shadow-xl text-white p-3 w-60 mt-5 bg-yellow-300  rounded">
                  <h1 className="text-3xl underline   font-bold">Tour plain</h1>

                  <select
                    className="border  mt-5 w-50 h-10 text-black text-lg tracking-wider "
                    name=""
                    id=""
                    defaultValue={"Advanture"}
                    onChange={(event) => setTourType(event.target.value)}
                  >
                    <option value="Advanture">Advanture Tour</option>
                    <option value="Foodie">Foodie Tour</option>
                  </select>
                </div>
              ) : (
                <div className="text-center  w-50 mt-5 border box-shadow-2xl  rounded text-white">
                  <h1 className="text-2xl underline text-yellow-200  font-bold">
                    Tour plain
                  </h1>
                  <select
                    className="border mt-5 w-50 h-10  "
                    name=""
                    id=""
                    defaultValue={"Advanture"}
                    onChange={(event) => setTourType(event.target.value)}
                  >
                    <option value="Advanture">Advanture</option>
                    <option value="Foodie">Foodie</option>
                  </select>
                </div>
              )}
            </div>
            {/* //! searching btn 2nd */}
            <button
              onClick={SearchingCard}
              className="border text-3xl shadow-lg hover:scale-x-[1.1] transition  duration-300 text-shadow-2xl text-white rounded-2xl h-12 w-50 mt-6 p-1 rounded hover:bg-slate-300 hover:text-black hover:border-none hover:text-shadow-lg  active:bg-orange-200 active:scale-[1.2]"
            >
              Search
            </button>
          </div>

          {/* //?search cards div*/}
          <div className=" h-[40vh] flex flex-wrap gap-x-5 w-120">
            <br />
            {filterObj.length > 0
              ? filterObj.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" transition p-1 delay-100 duration-100 ease-in-out border h-80 text-center bg-blue-200  hover:bg-green-200  hover:shadow-2xl hover:rounded   hover:text-black flex flex-col"
                    >
                      <h1 className="text-lg underline text-shadow-lg tracking-wider">
                        {item.airline}
                      </h1>
                      <h2>
                        <b>From</b> : {item.source}
                      </h2>
                      <h2>
                        <b>To</b> : {item.destination}
                      </h2>
                      <div className="flex justify-center flex-col items-center">
                        <img
                          className="w-50 border h-15 rounded "
                          src={item.imges}
                          alt=""
                        />
                      </div>
                      <div className="font-mono">
                        <p>{item.departure}</p>
                        <p>{item.arrival}</p>
                        <p className="font-bold">{item.duration}</p>
                        <strong className="block text-sm underline bg-white">
                          {item.price} Rs.
                        </strong>
                        <p>{item.stops}</p>
                      </div>

                      {/* //! flight card add btn 2nd */}
                      <button className="m-auto border hover:bg-gray-200 w-20 text-black rounded active:bg-gray-200">
                        Add
                      </button>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      )}
    </>
  );
}
