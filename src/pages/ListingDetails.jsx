import { useRef ,useState,useEffect,useContext} from "react";
import { useParams } from 'react-router';
import AuthContext from "../contexts/AuthContext";
import { toast } from 'react-toastify';

export default function ListingDetails() {
  const {id} = useParams()
  const [listing, setListing]  = useState({})
  const modalRef = useRef(null)

  const { currentUser } = useContext(AuthContext);
 console.log(currentUser)
  useEffect(() => {
    fetch(`http://localhost:3000/allList/${id}`)
    .then(res => res.json())
    .then(data => {
      setListing(data)
      
      })
  },[id])

  

  const handleSubmit =  (e) => {
    e.preventDefault();
    const data = {
      buyerName: currentUser.displayName,
      buyerEmail: currentUser.email,
      productId: listing._id,
      productName: listing.name,
      quantity: e.target.quantity.value,
      price: listing.price,
      address: e.target.address.value,
      date: e.target.date.value,
      phone: e.target.phone.value,
      notes :e.target.notes.value
    }
     fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
     })
       .then(res => res.json())
      .then(result => {
        toast.success("Order placed successfully!");
        console.log(result)
        modalRef.current.close();
        e.target.reset()
      })
       .catch(err => {
        console.log(err)
         toast.error("Something went wrong!")
       }
       );  
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center py-16 px-4 bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
      dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors duration-300"
    >
      <div className="max-w-4xl w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Image */}
          <img
            src={listing.image}
            alt={listing.name}
            className="w-full h-full object-cover"
          />

          {/* Info */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-amber-300">
              {listing.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Category: {listing.category}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {listing.description}
            </p>

            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>
                <strong>Owner’s Email:</strong> {listing.email}
              </p>
              <p>
                <strong>Location:</strong> {listing.location}
              </p>
              <p className="text-lg font-semibold text-emerald-700 dark:text-amber-400">
                Price: ৳{listing.price}
              </p>
            </div>

            {/* Button */}
            <button
             onClick={()=>modalRef.current.showModal()}
              className="mt-6 w-full py-3 bg-emerald-600 hover:bg-emerald-700 
              dark:bg-amber-400 dark:hover:bg-amber-300 dark:text-gray-900 text-white 
              rounded-xl font-semibold shadow-md transition"
            >
              🛒 Adopt / Order Now
            </button>
          </div>
        </div>
      </div>


      {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_5" ref={modalRef} className="modal  modal-bottom sm:modal-middle">
  <div className="modal-box">
    <div className=" inset-0 bg-black/10 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-lg p-6 relative shadow-xl">
            <h3 className="text-2xl text-center border-b-2 pb-2 font-bold mb-4 text-gray-800 dark:text-amber-300">
              🧾 Order Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium  text-gray-600 dark:text-gray-300">
                  Buyer Name
                </label>
                <input
                  value={currentUser.displayName}
                  readOnly
                  className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Email
                </label>
                <input
                  value={currentUser.email}
                  readOnly
                  className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium  text-gray-700 dark:text-gray-50 text-gray-600 dark:text-gray-300">
                    Product ID
                  </label>
                  <input
                    value={listing._id}
                    readOnly
                    className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                    Product Name
                  </label>
                  <input
                    value={listing.name}
                    readOnly
                    className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium  text-gray-700 dark:text-gray-50 ">
                    Quantity
                  </label>
                   <input
                      name="quantity"
                      type="number"
                      placeholder="Enter quantity"
                      defaultValue={listing.category === "Pets" ? 1 : ""}
                      readOnly={listing.category === "Pets"}
                      required
                      className="w-full mt-1 p-2 rounded-md border text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                    />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                    Price
                  </label>
                  <input
                    value={listing.price}
                    readOnly
                    className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Address
                </label>
                <textarea
                    required
                    name="address"
                  className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="Your full address"
                ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium  text-gray-700 dark:text-gray-50 text-gray-600 dark:text-gray-300">
                    Pick Up Date
                  </label>
                    <input
                      name="date"
                    type="date"
                    required
                    className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                    Phone
                  </label>
                  <input
                      type="tel"
                      name="phone"
                    required
                    placeholder="Enter phone number"
                    className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                  Additional Notes
                </label>
                  <textarea
                    name="notes"
                  className="w-full mt-1 p-2 rounded-md border  text-gray-700 dark:text-gray-50 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                  placeholder="Any special request..."
                ></textarea>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={()=>modalRef.current.close()}
                  className="px-4 py-2 bg-gray-700  dark:bg-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-600 dark:bg-amber-400 dark:text-gray-900 text-white rounded-lg hover:opacity-90 transition"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>
        </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

      
    </section>
  );
}
