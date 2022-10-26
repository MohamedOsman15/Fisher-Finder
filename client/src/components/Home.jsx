import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


const Home = () => {
    const [cities, updateCities] = useState([])

    useEffect(() => {
    const api = async () => {
        let response = await axios.get('http://localhost:3001/city')
        updateCities(response.data.cities)
    }
    api()
}, [])
    return (
      <div>
        <Link to="/addcity" className='citylink'>Add City</Link>
        <h1 className='title'>Cities</h1>
      <div className="gallery">
        {cities.map((city) => {
            return(
            <div className='cities' key={city._id}>
                <Link to={`/${city._id}`}><img src={city.image} alt={city.city} width="500px" className='image'/> </Link>
                <h3>{city.city}, {city.state}</h3>
            </div>
        )})}
      </div>
      </div>
    )
  }
  
  export default Home