import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import logoImage from '../../assets/EDGE_Logo.png'
const Header = () => {
    return (
        <header className={classes.header}>
            <div>
                <Link to ='/'> 
                <img src={logoImage} alt='Edge Logo' />
                </Link>
            </div>
            <div>
                <ul>
                    <li>
                        <Link to='/about-us'>About US</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;
