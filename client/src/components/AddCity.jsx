import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const AddCity = () => {
    const navigate = useNavigate()
    const [newCity, setNewCity] = useState({
        city: "",
        state: "",
        image: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/city', newCity)
        .then((res) => {
            return (res)
        }) 
        .catch((error) => {
            return (error.message)
        })
        navigate('/')
    }

    const handleChange = (e) => (
        setNewCity({...newCity, [e.target.id]: e.target.value})
    )
    return (
        <div className='addPage'>
            <h1>New City</h1>
            <p>City: <input type="text" value={newCity.city} onChange={handleChange} id="city"/></p>
            <p>State: <input type="text" value={newCity.state} onChange={handleChange} id="state"/></p>
            <p>Image: <input type="text" value={newCity.image} onChange={handleChange} id="image"/></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )    
}

export default AddCity