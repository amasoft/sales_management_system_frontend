import React from "react";

const SaleDetailModal = ({ sale, isOpen, onClose }) => {
  if (!isOpen) return null;

  const saleData = sale || {
    saleId: "12345",
    date: "2024-08-19",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+123456789",
    },
    products: [
      { id: 1, name: "iPhone 13 Pro Max", price: 999, quantity: 2 },
      { id: 2, name: "Samsung Galaxy S21", price: 799, quantity: 1 },
    ],
    discount: 50,
    tax: 20,
    paymentMethod: "Credit Card",
    paymentReceived: true,
  };

  const subtotal = saleData.products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const total = subtotal - saleData.discount + saleData.tax;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Sale ID: {saleData.saleId}</h1>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        {/* Customer Information */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Customer Information</h2>
          <p>
            <strong>Name:</strong> {saleData.customer.name}
          </p>
          <p>
            <strong>Email:</strong> {saleData.customer.email}
          </p>
          <p>
            <strong>Phone:</strong> {saleData.customer.phone}
          </p>
        </div>

        {/* Product List */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Product Name</th>
                <th className="p-2 text-left">Quantity</th>
                <th className="p-2 text-left">Unit Price</th>
                <th className="p-2 text-left">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {saleData.products.map((product, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.quantity}</td>
                  <td className="p-2">${product.price.toFixed(2)}</td>
                  <td className="p-2">
                    ${(product.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Payment Details */}
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Payment Details</h2>
          <p>
            <strong>Payment Method:</strong> {saleData.paymentMethod}
          </p>
          <p>
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </p>
          <p>
            <strong>Discount:</strong> -${saleData.discount.toFixed(2)}
          </p>
          <p>
            <strong>Tax:</strong> ${saleData.tax.toFixed(2)}
          </p>
          <p>
            <strong>Total:</strong> ${total.toFixed(2)}
          </p>
          <p>
            <strong>Payment Status:</strong>{" "}
            {saleData.paymentReceived ? (
              <span className="text-green-500">Received</span>
            ) : (
              <span className="text-red-500">Pending</span>
            )}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end">
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={() => console.log("Print Receipt")}
          >
            Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleDetailModal;
