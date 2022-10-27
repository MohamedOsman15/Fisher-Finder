import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign In</Link>
        </div>
    )
}

export default Nav