import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"

const EditCity = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    

    
    const [EditCity, setEditCity] = useState({})




    console.log(EditCity)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.put(`/city/${id}`, EditCity)
        .then((res) => {
            return (res)
        }) 
        .catch((error) => {
            return (error.message)
        })
        navigate(-1)
    }

    const handleChange = (e) => (
        setEditCity({...EditCity, [e.target.id]: e.target.value}),
        console.log(EditCity)
    )
    return (
        <div className='addPage'>
            <h1>Edit Listing</h1>
            <p>Name: <input type="text" value={EditCity.name} onChange={handleChange} id="name"/></p>
            <p>Address: <input type="text" value={EditCity.address} onChange={handleChange} id="address"/></p>
            <p>Image: <input type="text" value={EditCity.image} onChange={handleChange} id="image"/></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )    
}

export default EditCity