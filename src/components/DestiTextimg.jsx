import logo1 from "../topDestination/imges/Rectangle 14 (1).png";
import logo2 from "../topDestination/imges/Rectangle 14 (2).png";
import logo3 from "../topDestination/imges/Rectangle 14.png";
import mark from "../topDestination/imges/navigation 1.png";
export default function DestiTextimg() {
  let states = ["Rome,italy","London,UK","Full Europe"];
  return (
    <div className=" h-200">
      <h1 className="text-center text-gray-400">Selling</h1>
      <h1 className="text-center text-4xl tracking-wider font-bold">
        Top Destination
      </h1>
      <div className="flex justify-center items-center h-full">
        <div className="box">
          <img src={logo1} className="h-120  w-100" alt="" />
          <div className="text">
            <h3>{states[0]}</h3>
            <h5 > <img className="mark" src={mark} alt="" />cost,cost2</h5>
          </div>
        </div>
        <div className="box">
          <img src={logo2} className="h-120 w-100" alt="" />
          <div className="text">
            <h3>{states[1]}</h3>
            <h5 > <img className="mark" src={mark} alt="" />cost,cost2</h5>
          </div>
        </div>
        <div className="box">
          <img src={logo3} className="h-120 w-100" alt="" />
          <div className="text">
            <h3>{states[2]}</h3>
            <h5> <img  className="mark" src={mark} alt="" />cost,cost2</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
