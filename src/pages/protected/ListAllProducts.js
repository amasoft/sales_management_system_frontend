// import React from "react";

// const products = [
//   {
//     id: 1,
//     name: "iPhone 13 Pro Max",
//     price: 999,
//     quantity: 22,
//     imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 2,
//     name: "Samsung Galaxy S21",
//     price: 799,
//     quantity: 5,
//     imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   {
//     id: 3,
//     name: "MacBook Pro",
//     price: 1299,
//     quantity: 12,
//     imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
//   },
//   // Add more products here...
// ];

// const ListAllProducts = () => {
//   const handleDelete = (id) => {
//     console.log(`Product with ID ${id} deleted`);
//     // Implement the delete functionality here
//   };

//   const handleUpdate = (id) => {
//     console.log(`Product with ID ${id} updated`);
//     // Implement the update functionality here
//   };

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
//           >
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-32 h-32 object-cover mb-4 rounded-md"
//             />
//             <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
//             <p className="text-gray-600 mb-2">Price: ${product.price}</p>
//             <p className="text-gray-600 mb-4">
//               Quantity Left: {product.quantity}
//             </p>
//             <div className="flex justify-between w-full mt-auto">
//               <button
//                 onClick={() => handleUpdate(product.id)}
//                 className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600 transition duration-200"
//               >
//                 Update
//               </button>
//               <button
//                 onClick={() => handleDelete(product.id)}
//                 className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 transition duration-200"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListAllProducts;

import React, { useState } from "react";
import RegisterProductModal from "./Products/RegisterProductModal";

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 999,
    quantity: 22,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    quantity: 5,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1299,
    quantity: 12,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  // Add more products here...
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 999,
    quantity: 22,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    quantity: 5,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1299,
    quantity: 12,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 999,
    quantity: 22,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    price: 799,
    quantity: 5,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 1299,
    quantity: 12,
    imageUrl: "https://via.placeholder.com/50", // Replace with actual image URL
  },
];

const ListAllProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    console.log(`Product with ID ${id} deleted`);
    // Implement the delete functionality here
  };

  const handleUpdate = (id) => {
    console.log(`Product with ID ${id} updated`);
    // Implement the update functionality here
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">All Products</h2>
      {/* <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 mr-2">
        Update
      </button> */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
      >
        Add new products
      </button>
      <RegisterProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Product Image</th>
              <th className="py-3 px-6 text-left">Product Name</th>
              <th className="py-3 px-6 text-center">Quantity Left</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <div className="flex items-center">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium">{product.name}</span>
                </td>
                <td className="py-3 px-6 text-center">{product.quantity}</td>
                <td className="py-3 px-6 text-center">${product.price}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <button
                      onClick={() => handleUpdate(product.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAllProducts;
