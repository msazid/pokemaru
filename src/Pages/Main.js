import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Main = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState(false)
    const [pName, setPname] = useState([])
    const [pokemonData, setPokemonData] = useState({
        name: '',
        species: '',
        img: '',
        hp: '',
        attack: '',
        defense: '',
        type: ''
    })
    useEffect(() => {
        Axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=100')
            .then(res => setPname(res.data.results))

    }, [])
    const searchPokemon = () => {
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(res => {
                setPokemonData({
                    name: pokemonName,
                    species: res.data.species.name,
                    img: res.data.sprites.front_default,
                    hp: res.data.stats[0].base_stat,
                    attack: res.data.stats[1].base_stat,
                    defense: res.data.stats[2].base_stat,
                    type: res.data.types[0].type.name
                });
                setSearchedPokemon(true);
                // console.log(res);
            })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <select onChange={(e) => { setPokemonName(e.target.value) }} className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
                                {
                                    pName.map((n, index) => <option key={index} value={n.name}>{n.name}</option>)
                                }
                            </select>
                            <button onClick={searchPokemon} className="btn inline-block px-6 mt-4 mx-auto py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 grid grid-cols-1 w-fit'>
                            {
                                !searchedPokemon ? (<p className=' text-center uppercase font-semibold'>Please select your pokemon name</p>) : (<div className="p-10">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                        <img className="w-full" src={pokemonData.img} alt="Mountain" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl uppercase mb-2">{pokemonData.name}</div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <span className={pokemonData.attack >= 80 ? `inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2` : pokemonData.attack >= 70 ? `inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2` : `inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2`}>Attack: {pokemonData.attack}</span>
                                            <span className={pokemonData.defense >= 80 ? `inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2` : pokemonData.defense >= 70 ? `inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2` : `inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2`}>Defense: {pokemonData.defense}</span>
                                            <span className={pokemonData.hp >= 80 ? `inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2` : pokemonData.hp >= 70 ? `inline-block bg-yellow-200 rounded-full px-3 py-1 text-sm font-semibold text-yellow-700 mr-2 mb-2` : `inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2`}>Hp: {pokemonData.hp}</span>
                                            <span className="inline-block bg-blue-200 rounded-full uppercase px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Type: {pokemonData.type}</span>

                                            <span className="inline-block bg-blue-200 rounded-full uppercase px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> {pokemonData.species}</span>
                                        </div>
                                    </div>
                                </div>)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;