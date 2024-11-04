import {  NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                {/* <Link to={'/'}>Home</Link> */}
                {/* <a href="/">Home</a> */}
                <NavLink to={'/'}>Home</NavLink>

                <NavLink to={'/about'}>About</NavLink>
                {/* <Link to={'/about'}>About</Link> */}
                {/* <a href="/about">About</a> */}

                <NavLink to={'/contact'}>Contact</NavLink>
                {/* <Link to={'/contact'}>Contact</Link> */}
                {/* <a href="/contact">Contact Us</a> */}

                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'} > Comments</NavLink>

            </nav>
        </div>
    );
};

export default Header;