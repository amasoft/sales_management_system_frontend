import React from "react";
import { ShoppingCart } from "lucide-react";

const LaptopProduct = ({ laptop }) => {
  return (
    <div className="w-80 shadow-lg rounded-lg overflow-hidden bg-white">
      <img
        src={"https://techterms.com/definition/laptop"}
        alt={"laptop.name"}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{"laptop.name"}</h2>
        <p className="text-gray-600 text-sm mt-2">{"laptop.description"}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-blue-600">3000</span>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            <ShoppingCart size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaptopProduct;
