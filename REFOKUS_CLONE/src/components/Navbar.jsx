import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 flex items-center justify-between border-b-1 border-zinc-700">
      <div className="flex text-center nleft">
        <img
        src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
        alt=""
      />

      <div className="links flex gap-14 ml-20 items-center">
        {["Home", "Work", "Culture", "", "News"].map((elem, idx) => (
          
          <a key={idx} className="text-sm" href="#">
            {elem.length === 0 ? (
              <span className="inline-block w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              idx === 1 && (
                <span
                  style={{ boxShadow: "0 0 .25em #00FF19" }}
                  className="inline-block w-2 h-2  bg-green-400 mr-2 rounded-full"
                ></span>
              )
            )}
            {elem}
          </a>
        ))}
      </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;
