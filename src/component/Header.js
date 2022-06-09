import React from 'react';
import { Link } from 'react-router-dom';
import headerCSS from './Header.module.css'

const Header = () => {
    return (
        <div className='flex justify-around items-center my-3'>
            <h1 className={`${headerCSS.logo} hidden md:block`}>Pokemaru</h1>
            <div className={`${headerCSS.link}`}>
                <Link className={`${headerCSS.navLink}`} to='/'>Home</Link>
                <Link className={`${headerCSS.navLink}`} to='/allResults'>Pokemons</Link>
                <Link className={`${headerCSS.navLink}`} to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Header;