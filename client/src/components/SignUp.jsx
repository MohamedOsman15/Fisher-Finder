import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        email: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/users')
        navigate('/home')
    }

    const handleChange = (e) => (
        setNewUser({...newUser, [e.target.id]: e.target.value})
    )
    return (
        <div>
            <h1>Please Sign Up</h1>
            <p>Username: <input type="text" value={newUser.username} onChange={handleChange} id="username"/></p>
            <p>Password: <input type="text" value={newUser.password} onChange={handleChange} id="password"/></p>
            <p>Email: <input type="text" value={newUser.email} onChange={handleChange} id="email"/></p>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )    
}

export default SignUp