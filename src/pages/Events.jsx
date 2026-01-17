import EventData from "../data/EventsData.json";
import backimg from '../../public/events/edwin-andrade-6liebVeAfrY-unsplash (1).jpg';
export default function Events() {

  let dataIs = EventData._embedded.events || [];
  console.log(dataIs);
  return (
    <div style={{backgroundImage: "url('public/events/edwin-andrade-6liebVeAfrY-unsplash (1).jpg'')"}} className=" flex flex-wrap justify-center w-[100%]  h-180 gap-10">
      {dataIs.map((item) => {
        return (
          <div  className="border bg-blue-200 w-50 p-5 m-2 h-50 rounded hover:bg-gray-200 transition delay-100 duration-100 hover:scale-[1.1]" key={item.id}>
            <h1 className="text-orange-500 text-shadow-sm">Name : {item.name}</h1>
            <b>
              {item.dates.start.localDate} And {item.dates.start.localTime}
            </b>
            <p className="border text-center mt-10 hover:bg-black text-white active:bg-gray-200 active:text-white transition delay-200 duration-200">Veiws List</p>
          </div>
        );
      })}
    </div>
  );
}
