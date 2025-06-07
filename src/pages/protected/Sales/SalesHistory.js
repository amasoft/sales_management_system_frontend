import React, { useState } from "react";
import SaleDetailModal from "./SaleDetailModal";

const SalesHistory = () => {
  // Sample sales data
  const [sales, setSales] = useState([
    {
      id: 1,
      productName: "iPhone 13 Pro Max",
      quantitySold: 2,
      saleDate: "2023-08-15",
      totalAmount: 1998,
      customerName: "John Doe",
    },
    {
      id: 2,
      productName: "Samsung Galaxy S21",
      quantitySold: 1,
      saleDate: "2023-08-16",
      totalAmount: 799,
      customerName: "Jane Smith",
    },
    {
      id: 3,
      productName: "MacBook Pro",
      quantitySold: 1,
      saleDate: "2023-08-17",
      totalAmount: 2399,
      customerName: "Alice Johnson",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

  const handleOpenModal = (sale) => {
    setSelectedSale(sale);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSale(null);
  };
  const handleDelete = (id) => {
    setSales(sales.filter((sale) => sale.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Sales History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Product
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Quantity Sold
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Sale Date
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Customer Name
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Total Amount ($)
              </th>
              <th className="py-2 px-4 text-left text-gray-600 font-medium">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="border-t border-gray-200">
                <td className="py-2 px-4">{sale.productName}</td>
                <td className="py-2 px-4">{sale.quantitySold}</td>
                <td className="py-2 px-4">{sale.saleDate}</td>
                <td className="py-2 px-4">{sale.customerName}</td>
                <td className="py-2 px-4">${sale.totalAmount.toFixed(2)}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(sale.id)}
                    className="text-red-500 hover:text-red-700 mr-2"
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    onClick={() => handleOpenModal(sale)}
                  >
                    View Sale Details
                  </button>

                  {/* Sale Detail Modal */}
                  <SaleDetailModal
                    sale={""}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesHistory;
