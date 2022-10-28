import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">
            <img className="logo" src="https://i.etsystatic.com/22467704/r/il/7c21f6/3361056401/il_570xN.3361056401_lcbi.jpg"/>
            <div className="navs">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign In</Link>
            </div>
        </div>
    )
}

export default Nav