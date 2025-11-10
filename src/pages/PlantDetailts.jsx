import { useContext,useEffect,useState } from 'react'
import {useParams} from 'react-router'
import PlantContext from '../contexts/PlantContext'
import { toast } from 'react-toastify';


function PlantDetailts() {
  const [plant,setPlant] = useState({})
  const { plants } = useContext(PlantContext);
  const {id} = useParams()
  const numId = parseInt(id);


  useEffect(() => {
    if (plants.length > 0) {
      
      const p = plants.find(n => n.plantId === numId);
      setPlant(p)
    } else {
      setPlant({})
    }
  }, [plants, numId])
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const name= e.target.name.value
    const email = e.target.email.value;

    toast.success(`Successfully booked Consulttation form 
       Name: ${name} 
       Email: ${email}  
       Thank you !🎉`)
    
    e.target.reset()
  };


  
    
   return (
    <section className="py-16 px-6 bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">

        
        <div className="md:w-1/2 w-full rounded-3xl overflow-hidden shadow-lg">
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

       
        <div className="md:w-1/2 w-full flex flex-col gap-8">

          
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-200 mb-4">
              {plant.plantName}
             </h1>
             <p className="text-green-100/90 text-base md:text-lg">
              Provider : {plant.providerName}
            </p>
             <p className="text-green-100/90 text-base md:text-lg my-2 ">
              Category : {plant.category}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400">⭐</span>
              <span className="text-green-100/80">({plant.rating} / 5)</span>
               <span className="ml-auto text-green-300 font-semibold">In Stock: { plant.availableStock}</span>
            </div>
            <p className="text-green-100/90 text-base md:text-lg">
              {plant.description}
            </p>
             <p className="text-emerald-200 font-bold mt-4 text-xl">Price: ${ plant.price}</p>
          </div>

         
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-6">
              Book Consultation
            </h2>
            <form  onSubmit={handleSubmit} className="flex flex-col gap-4">
               <input
                 name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered w-full bg-white/10 text-white border-emerald-300 placeholder-green-200"
              />
               <input
                 name="email"
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-white/10 text-white border-emerald-300 placeholder-green-200"
              />
              <button
                type="submit"
                className="btn btn-primary mt-2 bg-emerald-700 hover:bg-emerald-600 border-0 text-white"
              >
                Book Now
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PlantDetailts