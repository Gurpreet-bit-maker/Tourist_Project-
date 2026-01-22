import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Trevel from "../../public/Traveller 1.png";
import TourCards from "./TourCards";

export default function Heropage() {
  return (
    <>
      <div className="flex w-full h-200 border">
        <div className="">
          <div className="flex justify-center flex-col h-screen  text-start pl-2  w-50">
            <h1 className="text-2xl text-green-300 mt-1 font-sans">
              Travel enjoy, <br /> and live a new <br /> and full life
            </h1>
            <p className="mt-3 font-serif tracking-wider text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Exercitationem temporibus sunt eveniet, autem eaque tempora
              mollitia expedita optio excepturi nemo cum architecto sed
              consequatur, atque hic tempore perspiciatis itaque ad officia
              corrupti non ea ullam. Suscipit rem eveniet eligendi esse!
            </p>
            <Link to="/getTour">
              <button className=" hover:bg-green-400 hover:text-white rounded transition duration-300 ease-in-out bg-yellow-300 rounded p-2 mt-4 mb-2 w-22">
                Get Tour
              </button>
            </Link>
          </div>
        </div>
        <div className="flex  h-100 relative flex">
          <img src={Trevel} className="h-100 z-2   " alt="" />
          <div
            className="absolute left-[45px] top-20 w-30 h-130 bg-[#FAD7B0]  rounded-tl-[110px] rounded-br-[100px]"
            style={{ clipPath: "polygon(0 0, 90% 0, 15% 90%, 0 10%)" }}
          ></div>
        </div>
      </div>
      <button className="border bg-red-400 px-2">click me!</button>
      <TourCards />
    </>
  );
}
