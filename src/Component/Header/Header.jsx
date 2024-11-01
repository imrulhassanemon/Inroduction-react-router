import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to={'/'}>Home</Link>
                {/* <a href="/">Home</a> */}
                <Link to={'/about'}>About</Link>
                {/* <a href="/about">About</a> */}
                <Link to={'/contact'}>Contact</Link>
                {/* <a href="/contact">Contact Us</a> */}
                <Link to={'/users'}>Users</Link>
                <Link to={'/posts'}>Posts</Link>

            </nav>
        </div>
    );
};

export default Header;