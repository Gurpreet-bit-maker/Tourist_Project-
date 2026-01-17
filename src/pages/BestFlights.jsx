import flights from "../data/FlightsData.js";
import firstimg from "../../public/airlines img/back-2.jpg";
import FlightsFilter from "../components/FlightsComp/FlightsFilter.jsx";
export default function BestFlights() {
 
  return (
    <>

<div className="flex">
  <div>
  {/* //! all flight cards  */}
 <h1 className="font-bold text-5xl text-center pt-2">Best Flight Here</h1>
      <div className="relative h-[123vh] flex flex-wrap gap-x-10 gap-y-15 pt-10 w-[100%] ">
        <img
          className=" h-[131vh] w-[100%] z-0 absolute top-[-60px] opacity-75"
          src={firstimg}
          alt=""
        />
        {flights.map((item, index) => {
          return (
            <div
              key={index}
              className=" transition delay-100 duration-100 ease-in-out border h-100 text-center p-2 w-70 hover:shadow-2xl hover:rounded z-10  hover:text-white"
            >
              <h1 className="text-2xl underline text-shadow-lg tracking-wider">
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
                  className="w-50 border h-30 rounded "
                  src={item.imges}
                  alt=""
                />
              </div>
              <div className="font-mono">
                <p>{item.departure}</p>
                <p>{item.arrival}</p>
                <p className="font-bold">{item.duration}</p>
                <strong className="block text-white text-lg">
                  {item.price} Rs.
                </strong>
                <p>{item.stops}</p>
              </div>
              <button className="border hover:bg-green-200 mt-20 w-20 text-black rounded active:bg-gray-200">
                Add
              </button>
            </div>
          );
        })}
      </div>
  </div>
  {/* //!fliter card */}
  
</div>

     
    </>
  );
}
