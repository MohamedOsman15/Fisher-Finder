import axios from 'axios'
import { useState, useEffect } from 'react'

const City = () => {
    const [spots, updateSpots] = useState([])

    useEffect(() => {
        const api = async () => {
            let response = await axios.get('http://localhost:3001/listings/city/:id')
            updateSpots(response.data.listings)
        }
        api()
    }, [])
    console.log(spots)

    return(
        <div className='City'>
        {spots.map((spot) => {
            return(
                <div key={spot._id}>
                    <img src={spot.image} alt="thumbnail" height="300px"/>
                    <h2>{spot.name}</h2>
                    <h3>{spot.address}</h3>
                </ div>
            )
        })}
    </div>
)

}


export default City