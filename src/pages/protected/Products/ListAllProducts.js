import React, { useEffect, useState } from "react";
import RegisterProductModal from "./RegisterProductModal";
import UpdateProductModal from "./UpdateProductModal";
import axios from "axios";

const productsbefo = [
  {
    id: 1,
    name: "iPhone 13 Pro Max",
    price: 999,
    quantity: 22,
    imageUrl:
      "https://curvissa.scene7.com/is/image/OttoUK/553w/hp-15s-15.6-inch-i3-4gb-128gb-laptop~45W797FRSP.jpg", // Replace with actual image URL
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
  const [products, setProducts] = useState([]);
  const [isUpdateModalOpen, setisUpdateModalOpen] = useState(false);
  const [selectedProduct, setselectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    console.log("CLICKED DATA", JSON.stringify(product));
    setselectedProduct(product);
    setisUpdateModalOpen(true);
    // setIsModalOpen(true);
  };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedSale(null);
  // };
  const fetchProducts = async () => {
    try {
      const reponse = await axios.get(
        "http://localhost:4000/api/v1/product/getallproduct"
      );
      const data = reponse.data.products;
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log("the ERROR>>" + error);
    }
  };
  useEffect(() => {
    console.log("Useefect done");
    fetchProducts();
  }, []);
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
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-center">Quantity Left</th>
              <th className="py-3 px-6 text-center">
                Price(<span>&#8358;</span>)
              </th>
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
                      src={product.image_URL}
                      alt={product.product_name}
                      className="w-10 h-10 object-cover rounded-md"
                    />
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium">{product.product_name}</span>
                </td>
                <td className="py-3 px-6 text-left">
                  <span className="font-medium">{product.category_name}</span>
                </td>
                <td className="py-3 px-6 text-center">{product.quantity}</td>
                <td className="py-3 px-6 text-center">{product.unit_price}</td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    {/* <button
                      onClick={() => handleUpdate(product.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
                    >
                      Update
                    </button> */}
                    {/* isOpen={isUpdateModalOpen} */}
                    {isUpdateModalOpen && selectedProduct && (
                      <UpdateProductModal
                        // product={product}
                        product={selectedProduct}
                        isOpen={isUpdateModalOpen}
                        onClose={() => setisUpdateModalOpen(false)}
                      />
                    )}
                    <button
                      // onClick={() => setisUpdateModalOpen(true)}
                      onClick={() => handleOpenModal(product)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200 mr-2"
                    >
                      View
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
