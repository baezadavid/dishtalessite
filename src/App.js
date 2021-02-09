import React, { useEffect, Component, useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
    const APP_ID = "806cfd43";
    const APP_KEY = "25ab48a83526aa2786eca371c6b9cf71";

    const [recipes, setResipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("chicken");
    

    useEffect( () => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setResipes(data.hits);
    }

    const updateSearch = e => {
      setSearch(e.target.value);
    }

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    }

  return (
    <div className="App">
        <form onSubmit ={getSearch} className="search-form">
          <input className = "search-bar" type="text" value ={search} onChange = {updateSearch} />
          <button className = "search-button" type = "submit">Search by ingredient</button>
        </form>
        <div className = "recipes">
            {recipes.map(recipe => (
               <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} url={recipe.recipe.url} />
            ))}
        </div>
    </div>
  );
}

export default App;
