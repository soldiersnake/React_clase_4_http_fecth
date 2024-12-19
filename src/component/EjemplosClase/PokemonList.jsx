import React from "react";
import useFetch from "../../Hooks/useFetch";

const PokemonList = () => {
  const { data, loading, error } = useFetch("https://pokeapi.co/api/v2/pokemon?limit=10");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{color:'red'}}>Error: {error.message}</p>;

  return (
    <>
        <h2>Lista de pokemons</h2>
        <ul>
        {data.results.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
        ))}
        </ul>
    </>
  );
};

export default PokemonList;
