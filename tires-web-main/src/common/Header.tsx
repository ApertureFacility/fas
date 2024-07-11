import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
    return (
        <div className="menu-container">
            <Link to="/">Start page</Link>
            <Link to="/all">See all</Link>
            <Link to="/create">Create tire</Link>
            <Link to="/filter">Select tire</Link>
            <Link to="/tireDetail">Tire Detail</Link>
            <Link to="/allnews">All news</Link>
            <Link to="/cart">Cart</Link>
            <Link to='/signIn'>Sign In</Link>
            <Link to='/registration'>Sign up</Link>
        </div>
    )
}

export default Header;