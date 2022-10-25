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
      <div className="home">
        <h1>Cities</h1>
        {cities.map((city) => {
            return(
            <div key={city._id}>
                <Link to={`/${city._id}`}><img src={city.image} alt={city.city} width="500px"/> </Link>
                <h3>{city.city}, {city.state}</h3>
            </div>
        )})}
      </div>
    )
  }
  
  export default Home