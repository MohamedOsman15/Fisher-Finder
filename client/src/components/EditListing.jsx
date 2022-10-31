import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"

const EditListing = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    

    
    const [EditListing, setEditListing] = useState({})




    console.log(EditListing)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.put(`/listings/${id}`, EditListing)
        .then((res) => {
            return (res)
        }) 
        .catch((error) => {
            return (error.message)
        })
        navigate(-1)
    }

    const handleChange = (e) => (
        setEditListing({...EditListing, [e.target.id]: e.target.value}),
        console.log(EditListing)
    )
    return (
        <div className='addPage'>
            <h1>Edit Listing</h1>
            <p>Name: <input type="text" value={EditListing.name} onChange={handleChange} id="name"/></p>
            <p>Address: <input type="text" value={EditListing.address} onChange={handleChange} id="address"/></p>
            <p>Image: <input type="text" value={EditListing.image} onChange={handleChange} id="image"/></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )    
}

export default EditListing