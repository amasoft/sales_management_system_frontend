import React, { useState } from "react";

const UpdateProductModal = ({ isOpen, onClose, product, onUpdateProduct }) => {
  console.log("TOATAL PRODUCT:::", product.length);
  console.log("UpdateProductModal product>>>", JSON.stringify(product));
  const [productName, setProductName] = useState(product.product_name);
  const [productId] = useState(product.product_code_no); // Assuming the ID is not editable
  const [category, setCategory] = useState(product.category_name);
  const [price, setPrice] = useState(product.unit_price);
  const [currentQuantity, setCurrentQuantity] = useState(product.quantity);
  const [quantityChange, setQuantityChange] = useState(0);
  const [description, setDescription] = useState(product.description);
  const [formErrors, setFormErrors] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate form
    const errors = {};
    if (!productName) errors.productName = "Product name is required";
    if (!category) errors.category = "Category is required";
    if (!price || isNaN(price)) errors.price = "Valid price is required";
    if (isNaN(quantityChange))
      errors.quantityChange = "Valid quantity is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Handle product update logic
    const updatedProduct = {
      ...product,
      name: productName,
      category,
      price,
      quantity: currentQuantity + parseInt(quantityChange),
      description,
    };

    onUpdateProduct(updatedProduct);

    // Clear form and close modal
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setProductName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setCurrentQuantity(product.quantity);
    setQuantityChange(0);
    setDescription(product.description);
    setFormErrors({});
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Update Product
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
              <label className="block text-sm font-medium">Product ID</label>
              <input
                type="text"
                value={productId}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 cursor-not-allowed"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select category</option>
                <option value="Mobile Phones">Mobile Phones</option>
                <option value="Laptops">Laptops</option>
                <option value="Accessories">Accessories</option>
                {/* Add more categories as needed */}
              </select>
              {formErrors.category && (
                <p className="text-red-500 text-sm">{formErrors.category}</p>
              )}
            </div>

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
              <label className="block text-sm font-medium">
                Current Quantity
              </label>
              <input
                type="number"
                value={currentQuantity}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-gray-100 cursor-not-allowed"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Change Quantity (Add/Subtract)
              </label>
              <input
                type="number"
                value={quantityChange}
                onChange={(e) => setQuantityChange(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter quantity change"
              />
              {formErrors.quantityChange && (
                <p className="text-red-500 text-sm">
                  {formErrors.quantityChange}
                </p>
              )}
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

            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Update Product
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
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

export default UpdateProductModal;
