import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"

const AddListing = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [newListing, setNewListing] = useState({
        name: "",
        address: "",
        image: "",
        city: id
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:3001/listings', newListing)
        .then((res) => {
            return (res)
        }) 
        .catch((error) => {
            return (error.message)
        })
        navigate(`/${id}`)
    }

    const handleChange = (e) => (
        setNewListing({...newListing, [e.target.id]: e.target.value})
    )
    return (
        <div className='addPage'>
            <h1>New Listing</h1>
            <p>Name: <input type="text" value={newListing.name} onChange={handleChange} id="name"/></p>
            <p>Address: <input type="text" value={newListing.address} onChange={handleChange} id="address"/></p>
            <p>Image: <input type="text" value={newListing.image} onChange={handleChange} id="image"/></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )    
}

export default AddListing