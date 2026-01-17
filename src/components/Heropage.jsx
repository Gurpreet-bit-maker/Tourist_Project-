import { useState } from "react";
import Trevel from "../../public/Traveller 1.png";
import TourCards from "./TourCards";
export default function Heropage() {
  // let paddingTop = "mt-3";
  let[counter, setCounter] =useState(0);
  function pressGetBtn() {
    setCounter(counter + 1);
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/4">
          <div className="flex justify-center flex-col h-screen text-start p-4  w-100">
            <h1 className="text-6xl text-green-300 mt-8 font-sans">
              Travel enjoy, <br /> and live a new <br /> and full life
            </h1>
            <p className="mt-3 font-serif tracking-wider">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem temporibus sunt eveniet, autem eaque tempora
              mollitia expedita optio excepturi nemo cum architecto sed
              consequatur, atque hic tempore perspiciatis itaque ad officia
              corrupti non ea ullam. Suscipit rem eveniet eligendi esse!
            </p>
            <button
              onClick={pressGetBtn}
              className=" hover:bg-green-400 hover:text-white rounded transition duration-300 ease-in-out bg-yellow-300 rounded p-2 mt-4 mb-2 w-22"
            >
              Get Tour
            <span className="text-red-400 bg-blue-200 w-22"> {counter}</span></button>
          </div>
        </div>
        <div className=" mt-20 relative">
          <img src={Trevel} className="h-150 z-20 relative  " alt="" />
          <div
            className="absolute left-[245px] top-[-2px] w-full h-full bg-[#FAD7B0] z-10 rounded-tl-[110px] rounded-br-[100px]"
            style={{ clipPath: "polygon(0 0, 90% 0, 15% 90%, 0 10%)" }}
          ></div>
        </div>
      </div>
      <TourCards />
    </>
  );
}
