import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom"


const City = () => {
    const [spots, updateSpots] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const api = async () => {
            let response = await axios.get(`/listings/city/${id}`)
            updateSpots(response.data.listings)
        }
        api()
    }, [])
    console.log(spots)

    
    
    return(
        <div>
            <Link to={`/addlisting/${id}`} className="add">Add listing</Link>
            
            <h1 className='title'>Fishing Areas</h1>
      <div className="gallery">
        {spots.map((spot) => {
            const rem = async (e) => {
                e.preventDefault()
        
                const del = await axios.delete(`/listings/${spot._id}`)
                .then((del) => {
                    return (del)
                })
                .catch((error) => {
                    return (error.message)
                })
                window.location.reload()
            }
            return(
                <div className='lakes' key={spot._id}>
                    <img src={spot.image} alt="thumbnail" className='image'/>
                    <h2>{spot.name}</h2>
                    <div className='content'>
                    <Link to={`/listings/${spot._id}`}><button>Edit</button></Link>
                    <button onClick={rem}>Delete</button>
                    <h3>{spot.address}</h3>
                </div>
                </div>
            )
        })}
    </div>
    </div>

)

}


export default City