import React from "react";

function Footer() {
  return (
    <div className="w-full mt-40 ">
      <div className="max-w-screen-xl mx-auto flex gap-28 py-10">
        <div className="basis-1/2 text-[11.5rem] font-semibold leading-none tracking-tight">Refokus.</div>

        <div className="basis-1/2 flex gap-5 text-sm">

            <div className="basis-1/3">
                <h4 className="text-zinc-400 mb-10">Socials</h4>
                {["Instagram" , "Twitter", "Linkedin"].map( (item , index)=> <a className="block text-zinc-600 mt-4" key={index}> {item} </a>)}
            </div>

            <div className="basis-1/3">
                <h4 className="text-zinc-400 mb-10">Socials</h4>
                {["Instagram" , "Twitter", "Linkedin"].map( (item , index)=> <a className="block text-zinc-600 mt-4" key={index}> {item} </a>)}
            </div>
            
            <div className="basis-1/2 flex flex-col text-end items-end justify-between">
                <p>Refokus is pioneer of digital agency driven by desugn and empowered by technology.</p>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="#" className="w-20"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
