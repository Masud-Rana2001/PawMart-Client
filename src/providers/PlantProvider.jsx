
import { useState ,useEffect} from 'react';
import PlantContext from '../contexts/PlantContext';

function PlantProvider({ children }) {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data)
       setLoading(false) 
      }
      );
  }, []);

  const value= {plants,setPlants ,loading}
  return (
    <PlantContext.Provider value={value}>
      {children}
    </PlantContext.Provider>
  )
}

export default PlantProvider