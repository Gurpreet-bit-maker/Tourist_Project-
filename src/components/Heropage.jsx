import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Trevel from "../../public/Traveller 1.png";
import FlightCategory from "./FlightsCategory";
import Footer from "./Footer";

export default function Heropage() {
  return (
    <>
      <div className="flex w-full h-180 shadow-sm gap-x-1 justify-center">
        <div className="">
          <div className="flex justify-center flex-col  h-screen  pl-2  w-50">
            <h1 className="text-2xl text-green-500 mt-1 font-sans text-shadow-md">
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
        <div className="flex h-100 justify-center items-center relative ">
          <img src={Trevel} className="h-90 z-2 w-50 " alt="" />
          <div
            className="absolute left-[45px] top-20 w-30 h-130 bg-[#FAD7B0]  rounded-tl-[110px] rounded-br-[100px]"
            style={{ clipPath: "polygon(0 0, 90% 0, 15% 90%, 0 10%)" }}
          ></div>
        </div>
      </div>
      <div className="shadow-sm bg-green-50 mt-1">
        <h1 className="text-center text-2xl font-semibold tracking-wide">Categories</h1>
        <FlightCategory />
      </div>
      <Footer/>
    </>
  );
}
