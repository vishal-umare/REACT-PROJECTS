import React from "react";
import Product from "./Product";

function Products() {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      demo: false,
    },
    {
      title: "Cula",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      demo: false,
    },
    {
      title: "Layout Land",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      demo: true,
    },
    {
      title: "TTR",
      description:
        "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      demo: true,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      demo: true,
    },
  ];
  return (
    <div>
      {products.map((value, index) => (
        <Product value = {value} key={index}/>
      ))}
      {/* <Product /> */}
    </div>
  );
}

export default Products;
