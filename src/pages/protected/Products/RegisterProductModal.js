import React, { useState } from "react";
import axios from "axios";

const RegisterProductModal = ({ isOpen, onClose }) => {
  const [productName, setProductName] = useState("");
  const [product_code, setproduct_code] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Validate form
    const errors = {};
    if (!productName) errors.productName = "Product name is required";
    if (!product_code) errors.product_code = "Product ID is required";
    if (!category) errors.category = "Category is required";
    if (!price || isNaN(price)) errors.price = "Valid price is required";
    if (!quantity || isNaN(quantity))
      errors.quantity = "Valid quantity is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // const productData = {
    //   product_name: productName,
    //   description: description,
    //   product_code_no: product_code,
    //   unit_price: price,
    //   quantity: quantity, // Remember to hash the password in the service
    //   image_URL: image,
    //   category_id: category,
    //   product_type: "category",
    //   propertise: "{color:gold}",
    // };
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("description", description);
    formData.append("product_code_no", product_code);
    formData.append("unit_price", price);
    formData.append("quantity", quantity);
    formData.append("category_id", category);
    formData.append("product_type", "category");
    formData.append("propertise", JSON.stringify({ color: "gold" })); // Ensure this is a string

    // If image is a file input, append it
    if (image instanceof File) {
      formData.append("image", image);
    } else {
      console.warn("Image is not a File object");
    }
    console.log([...formData.entries()]);
    try {
      // http://localhost:4000/api/v1/product/getallproduct
      const response = await axios.post(
        "http://localhost:4000/api/v1/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product created:", response.data);
    } catch (error) {
      console.error("Error creating product:", error);
    }
    // Clear form and close modal
    // resetForm();
    // onClose();
  };

  const resetForm = () => {
    setProductName("");
    setproduct_code("");
    setCategory("");
    setPrice("");
    setQuantity("");
    setDescription("");
    setImage(null);
    setFormErrors({});
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 sm:max-w-md md:max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Register New Product
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Product Name</label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product name"
              />
              {formErrors.productName && (
                <p className="text-red-500 text-sm">{formErrors.productName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">
                Product ID/SKU
              </label>
              <input
                type="text"
                value={product_code}
                onChange={(e) => setproduct_code(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product ID or SKU"
              />
              {formErrors.product_code && (
                <p className="text-red-500 text-sm">
                  {formErrors.product_code}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select category</option>
                <option value="1">Laptops</option>
                <option value="2">Mobile Phones</option>
                {/* <option value="Accessories">Accessories</option> */}
              </select>
              {formErrors.category && (
                <p className="text-red-500 text-sm">{formErrors.category}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter price"
                />
                {formErrors.price && (
                  <p className="text-red-500 text-sm">{formErrors.price}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Quantity</label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter quantity"
                />
                {formErrors.quantity && (
                  <p className="text-red-500 text-sm">{formErrors.quantity}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter product description"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Product Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 w-full md:w-auto"
              >
                Register Product
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200 w-full md:w-auto mt-2 md:mt-0"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default RegisterProductModal;
