// import React, { useState } from "react";

// const AddSales = () => {
//   // State to manage products, customer, and payment details
//   const [products, setProducts] = useState([]);
//   const [totalAmount, settotalAmount] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [discount, setDiscount] = useState(0);
//   const [tax, setTax] = useState(50); // Example tax
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [paymentReceived, setPaymentReceived] = useState(false);

//   // Sample product and customer data for demonstration
//   const sampleProducts = [
//     { id: 1, name: "iPhone 13 Pro Max", price: 999 },
//     { id: 2, name: "Samsung Galaxy S21", price: 799 },
//   ];

//   const sampleCustomers = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "+123456789",
//     },
//     {
//       id: 2,
//       name: "Jane Smith",
//       email: "jane.smith@example.com",
//       phone: "+987654321",
//     },
//   ];

//   // Function to handle adding products to the sale
//   const addProduct = (product) => {
//     // console.log("Add>>>" + JSON.stringify(product));
//     products.map((product_val) => console.log(0, JSON.stringify(product_val)));
//     setProducts([...products, { ...product, quantity: 1 }]);
//   };

//   // Function to handle changing product quantity
//   const updateQuantity = (index, quantity) => {
//     const updatedProducts = [...products];
//     updatedProducts[index].quantity = quantity;
//     setProducts(updatedProducts);
//   };

//   // Function to remove a product from the list
//   const removeProduct = (index) => {
//     setProducts(products.filter((_, i) => i !== index));
//   };

//   // Calculate subtotal, total with discount, and tax
//   const subtotal = products.reduce(
//     (sum, product) => sum + product.price * product.quantity,
//     0
//   );
//   const total = subtotal - discount + tax;

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Perform sale submission logic here
//     // console.log("Sale submitted", {
//     //   products,
//     //   selectedCustomer,
//     //   total,
//     //   paymentMethod,
//     //   paymentReceived,
//     // });
//     // var sales_details = {
//     //   total: totalAmount,
//     // };
//     // console.log(
//     //   JSON.stringify("selected products>>>", JSON.stringify(products))
//     // );
//     // console.log(
//     //   JSON.stringify("customers>>>", JSON.stringify(selectedCustomer))
//     // );
//     // console.log(
//     //   JSON.stringify("sales_details>>>", JSON.stringify(sales_details))
//     // );
//   };
//   var data = {
//     products: [
//       {
//         id: 1,
//         name: "iPhone 13 Pro Max",
//         price: 999,
//         quantity: 22,
//       },
//       {
//         id: 2,
//         name: "Samsung Galaxy S21",
//         price: 799,
//         quantity: 1,
//       },
//       {
//         id: 1,
//         name: "iPhone 13 Pro Max",
//         price: 999,
//         quantity: 1,
//       },
//       {
//         id: 2,
//         name: "Samsung Galaxy S21",
//         price: 799,
//         quantity: 1,
//       },
//       {
//         id: 1,
//         name: "iPhone 13 Pro Max",
//         price: 999,
//         quantity: 6,
//       },
//     ],
//     selectedCustomer: {
//       id: 1,
//       name: "John Doe",
//       email: "john.doe@example.com",
//       phone: "+123456789",
//     },
//     total: 30619,
//     paymentMethod: "credit-card",
//     paymentReceived: false,
//   };
//   return (
//     <div className="container mx-auto p-4">
//       {/* Header */}
//       <h1 className="text-2xl font-bold mb-4">Record a New Sale</h1>
//       {/* Product Selection Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Product Selection</h2>
//         <div className="flex flex-wrap items-center gap-2 mb-4">
//           {/* Example product search (select from sample data) */}
//           <select
//             className="border p-2 rounded w-full md:w-auto"
//             onChange={(e) =>
//               addProduct(sampleProducts.find((p) => p.id == e.target.value))
//             }
//           >
//             <option value="">Select Product</option>
//             {sampleProducts.map((product) => (
//               <option key={product.id} value={product.id}>
//                 {product.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full border">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 text-left">Product Name</th>
//                 <th className="p-2 text-left">Quantity</th>
//                 <th className="p-2 text-left">Unit Price</th>
//                 <th className="p-2 text-left">Total Price</th>
//                 <th className="p-2"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {products.map((product, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="p-2">{product.name}</td>
//                   <td className="p-2">
//                     <input
//                       type="number"
//                       className="w-16 p-1 border rounded"
//                       value={product.quantity}
//                       onChange={(e) =>
//                         updateQuantity(index, parseInt(e.target.value))
//                       }
//                     />
//                   </td>
//                   <td className="p-2">${product.price}</td>
//                   <td className="p-2">
//                     ${(product.price * product.quantity).toFixed(2)}
//                   </td>
//                   <td className="p-2">
//                     <button
//                       className="text-red-500"
//                       onClick={() => removeProduct(index)}
//                     >
//                       Remove
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Customer Details Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Customer Details</h2>
//         <select
//           className="border p-2 rounded w-full md:w-auto mb-2"
//           onChange={(e) =>
//             setSelectedCustomer(
//               sampleCustomers.find((c) => c.id == e.target.value)
//             )
//           }
//         >
//           <option value="">Select Customer</option>
//           {sampleCustomers.map((customer) => (
//             <option key={customer.id} value={customer.id}>
//               {customer.name}
//             </option>
//           ))}
//         </select>
//         {selectedCustomer && (
//           <div className="border p-4 rounded">
//             <p>
//               <strong>Name:</strong> {selectedCustomer.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {selectedCustomer.email}
//             </p>
//             <p>
//               <strong>Phone:</strong> {selectedCustomer.phone}
//             </p>
//           </div>
//         )}
//       </div>
//       {/* Payment Information Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Payment Information</h2>
//         <div className="flex flex-wrap gap-4">
//           <div className="flex-grow">
//             <label className="block font-semibold">Subtotal: </label>
//             <p className="p-2 border rounded">${subtotal.toFixed(2)}</p>
//           </div>
//           <div className="flex-grow">
//             <label className="block font-semibold">Discount:</label>
//             <input
//               type="number"
//               className="p-2 border rounded w-full"
//               value={discount}
//               onChange={(e) => setDiscount(parseFloat(e.target.value))}
//             />
//           </div>
//           <div className="flex-grow">
//             <label className="block font-semibold">Tax:</label>
//             <p className="p-2 border rounded">${tax.toFixed(2)}</p>
//           </div>
//           <div className="flex-grow">
//             <label className="block font-semibold">Total:</label>
//             <p className="p-2 border rounded">${total.toFixed(2)}</p>
//           </div>
//         </div>
//         <div className="flex flex-wrap gap-4 mt-4">
//           <div className="flex-grow">
//             <label className="block font-semibold">Payment Method:</label>
//             <select
//               className="p-2 border rounded w-full"
//               onChange={(e) => setPaymentMethod(e.target.value)}
//             >
//               <option value="">Select Payment Method</option>
//               <option value="cash">Cash</option>
//               <option value="credit-card">Credit Card</option>
//               <option value="mobile-payment">Mobile Payment</option>
//             </select>
//           </div>
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               className="mr-2"
//               checked={paymentReceived}
//               onChange={(e) => setPaymentReceived(e.target.checked)}
//             />
//             <label>Payment Received</label>
//           </div>
//         </div>
//       </div>
//       {/* Receipt Preview Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-2">Receipt Preview</h2>
//         <div className="border p-4 rounded">
//           <h3 className="font-semibold">Receipt</h3>
//           <ul>
//             {products.map((product, index) => (
//               <li key={index}>
//                 {product.name} - {product.quantity} x $
//                 {product.price.toFixed(2)} = $
//                 {(product.quantity * product.price).toFixed(2)}
//               </li>
//             ))}
//             {settotalAmount(total.toFixed(2))}
//           </ul>

//           <p>Subtotal: ${subtotal.toFixed(2)}</p>
//           <p>Discount: -${discount.toFixed(2)}</p>
//           <p>Tax: ${tax.toFixed(2)}</p>
//           <p>Total: ${total.toFixed(2)}</p>
//           <div className="mt-2">
//             <input type="checkbox" id="print" />
//             <label htmlFor="print" className="ml-2">
//               Print Receipt
//             </label>
//             <input type="checkbox" id="email" className="ml-4" />
//             <label htmlFor="email" className="ml-2">
//               Email Receipt
//             </label>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <div className="flex justify-between">
//         <button
//           className="bg-gray-500 text-white py-2 px-4 rounded"
//           onClick={() => console.log("Cancel clicked")}
//         >
//           Cancel
//         </button>
//         <button
//           className="bg-blue-500 text-white py-2 px-4 rounded"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddSales;
