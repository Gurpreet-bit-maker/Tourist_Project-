import TourDemo from "./TourDemo";
import { Link } from "react-router-dom";

export default function TourCards() {
  return (
    <div className="">
      <p className="text-center text-lg">Category</p>
      <h1 className="text-center text-3xl font-bold mt-2 tracking-wider">
        {"we best offer you".toUpperCase()}
      </h1>
      <div className="flex h-180 justify-center items-center">
        <Link to="whether">
          <TourDemo idx={0} t={0} />
        </Link>

        <Link to="bestflights">
          <TourDemo idx={1} t={1} />{" "}
        </Link>
        <Link to="events">
          <TourDemo idx={2} t={2} />
        </Link>
        <Link to="customization">
        <TourDemo idx={3} t={3} />
         
        </Link>
      </div>
    </div>
  );
}
