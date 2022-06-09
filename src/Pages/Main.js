import React, { useEffect, useState } from 'react';
import Pokemon from './Pokemon';
import Axios from 'axios';

const Main = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState(false)
    const [pokemonData, setPokemonData] = useState({
        name: '',
        species: '',
        img: '',
        hp: '',
        attack: '',
        defense: '',
        type: ''
    })
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
                console.log(res);
            })
    }
    return (
        <div>
            <div className="flex justify-center">
                <div>
                    <div className="mb-3 xl:w-96">
                        <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input onChange={(event) => {
                                setPokemonName(event.target.value)
                            }} type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3" />
                            <button onClick={searchPokemon} className="btn inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                        </div>
                    </div>
                    <div>
                        <div className='p-10 grid grid-cols-1'>
                            {
                                !searchedPokemon ? (<p>Please enter pokemon name</p>) : ( <div class="p-10">
                                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img class="w-full" src={pokemonData.img} alt="Mountain" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2">{pokemonData.name}</div>
                                        <p class="text-gray-700 text-base">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                        </p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
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