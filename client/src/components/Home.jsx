import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"


const Home = () => {
    const [cities, updateCities] = useState([])

    useEffect(() => {
    const api = async () => {
        let response = await axios.get('/city')
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
                      const rem = async (e) => {
                        e.preventDefault()
                
                        const del = await axios.delete(`/city/${city._id}`)
                        .then((del) => {
                            return (del)
                        })
                        .catch((error) => {
                            return (error.message)
                        })
                        window.location.reload()
                    }
            return(
            <div className='cities' key={city._id} >
                <Link to={`/${city._id}`}><img src={city.image} alt={city.city} width="500px" className='image'/> </Link>
                <h3>{city.city}, {city.state}</h3>
                <Link to={`/city/${city._id}`}><button>Edit</button></Link>
                <button onClick={rem}>Delete</button>
            </div>
        )})}
      </div>
      </div>
    )
  }
  
  export default Home