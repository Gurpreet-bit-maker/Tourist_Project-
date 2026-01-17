import Group48 from "../../public/tourcards img/Group 48.png";
import Group49 from "../../public/tourcards img/Group 49.png";
import Group50 from "../../public/tourcards img/Group 50.png";
import Group51 from "../../public/tourcards img/Group 51 (1).png";
export default function TourDemo({ idx,t,heading }) {
  let img = [Group48, Group50, Group49, Group51];
  let text = [
    "Built Wicket longer admire do barton vanity itself do in it",
    "Engrossed listening. Park gate sell they west hard for the",
    "Barton vanity itself do in it. Preferd to men it engrossed listening",
    "We deliver outsourced aviation services for military customers",
  ];
  let headingText = ["calculate weather", "best flights", "local events", "costomization"];
  return (
    <div>
      <div className="  active:bg-red-200 outline-2 outline-offset-1 outline-red-100  font-sanf tracking-wider rounded m-2 flex justify-center items-center flex-col h-60 p-4 hover:bg-blue-100 hover:transition duration-300 ease-in-out w-70 hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transition ease-in-out duration-300">
        <img className="w-21" src={img[idx]} alt="" />
        <h3 className="offerText">{headingText[t].toLocaleUpperCase()}</h3>
        <p className="text-sm pt-3  text-center">{text[t]}</p>
      </div>
    </div>
  );
}