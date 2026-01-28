import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para , hover}) {
  return (
    <div className={`w-1/2 bg-zinc-800 p-5 rounded-xl ${width} ${hover} min-h-[30rem] flex flex-col justify-between`}>
      <div className="up w-full">
        <div className="w-full flex justify-between intems-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">Let's get to it, together.</h1>
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a project
            </h1>
            <button className="rounded-full py-2 px-5 border-1 border-zinc-50 mt-5">
              Contact Us
            </button>{" "}
          </>
        )}
 
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what our team does.
          </p>
        )}
      </div>
    </div>
  );
}

export default Card;
