import React from "react";
import Button from "./Button";

function Product({ value }) {
  return (
    <div className="w-full py-20 mt-30">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <h1 className="text-6xl capitalize font-medium">{value.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{value.description}</p>
          <div className="flex gap-7 items-center">
            {value.live && <Button />}
            {value.demo && <Button title="Demo" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
