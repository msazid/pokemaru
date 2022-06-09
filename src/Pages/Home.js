import React from 'react';
import { Link } from 'react-router-dom';
import styleCSS from './css/style.module.css'
const Home = () => {
    return (
        <div className={styleCSS.homeBG}>
           <div className='text-center'>
           <h1 className={styleCSS.bannerTitle}>Welcome To <span className='text-red-500'>Pokemaru</span></h1>
           <Link className={styleCSS.showAllResultBtn} to='/searchPokemon'>Find Your Pokemon</Link>
           </div>
        </div>
    );
};

export default Home;