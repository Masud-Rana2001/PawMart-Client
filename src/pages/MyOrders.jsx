import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import AuthContext from "./../contexts/AuthContext";
import Swal from "sweetalert2";

import { jsPDF } from "jspdf";
import {autoTable} from "jspdf-autotable";




export default function MyOrders() {
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  // Fetch logged-in user's orders
  useEffect(() => {
    if (!currentUser?.email) return;
    fetch(`http://localhost:3000/orders/${currentUser.email}`, {
       
      headers: { authorization: `Bearer ${localStorage.getItem("accessTokenForPawMart")}` }
        
    })
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, [currentUser?.email]);



  
  //  Delete order handler
  const handleDeleteOrder = async (id) => {
      const result = await Swal.fire({
          title: "Are you sure you want to delete this order?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
          });
          if (!result.isConfirmed)   return

    try {
      const res = await fetch(`http://localhost:3000/orders/${id}`, {
        method: "DELETE",
        // headers: { authorization: `Bearer ${localStorage.getItem("accessTokenForPawMart")}` }
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Order deleted successfully");
        setOrders(orders.filter((order) => order._id !== id));
      }
    } catch (error) {
      console.error("Delete failed:", error);
      toast.error("Failed to delete order");
    }
  };

  // handle Download pdf 
  const handleDownloadPdf = () => {
    if (orders.length === 0) {
      toast.info("No order to download");
      return
    }
      //make a instance of jsPDF
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format : "a4"
      })
    
      // add title 
      doc.setFontSize(18);
    doc.text("My Orders Report", 14, 20);
    
    //table structure 
     const tableColumn = [
        "No", "Product Name", "Buyer Name", "Price", "Quantity", "Address", "Date", "Phone"
      ];
    // data map 
    const tableRow = orders.map((order, index) =>[
      index + 1,
      order.productName,
      order.buyerName,
      `${order.price} Tk`,
      order.quantity,
      order.address,
      order.date,
     order.phone
    ])

    //ganarate table 
    autoTable(doc,{
      startY: 30,
      head: [tableColumn],
      body: tableRow,
      theme: "striped",
      headStyles: { fillColor: [14, 165, 233], textColor: 255 },
      alternateRowStyles: { fillColor: [240, 249, 255] }, 
      styles: { fontSize: 11, cellPadding: 3 },
        
    })

    //save jsPDF
    doc.save(`my-orders.pdf`)
      toast.success("Download successful.");
    
  };


  return (
    <div
      className="min-h-screen bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950
      shadow-sm transition-colors duration-300 py-10"
    >
      <div className="w-11/12 mx-auto">
        <div className="flex justify-between">
        
                 <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800 dark:text-gray-100">
                    🧾 My Orders ({orders.length})
                   </h2>
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="btn btn-primary text-gray-100">Download Report ⬇️</button>
                </div>
       

        <div className="overflow-x-auto">
          <table
            className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg shadow-md 
            bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
          >
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
              <tr>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">#</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                  Product Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                  Buyer Name
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Price</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                  Quantity
                </th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Address</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Date</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">Phone</th>
                <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <tr
                    key={order._id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center font-medium">
                      {index + 1}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold text-blue-600 dark:text-blue-400">
                      {order.productName}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                      {order.buyerName}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-green-600 dark:text-green-400 font-semibold">
                      ৳ {order.price}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                      {order.quantity}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                      {order.address}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                      {order.date}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700">
                      {order.phone}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 text-center">
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="px-3 py-1 border border-red-400 text-red-500 dark:text-red-400 
                        rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center py-6 text-gray-500 dark:text-gray-400 font-medium"
                  >
                    No orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
