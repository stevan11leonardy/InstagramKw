import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/layout">Discover People</Link>
            </li>
            <li>
                <Link to="/seeall">See All</Link>
            </li>
        </ul>
    )
}

export default Header;