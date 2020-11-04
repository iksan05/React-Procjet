import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  // credential untuk request API
  const APP_ID = 88026427;
  const APP_KEY = "051eae417fc2ac07c170925ef16b0815";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  // mengambil data dari API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // ubah response menjadi bentuk json
    const data = await response.json();
    //simpan data kedalam state recipes
    setRecipes(data.hits);
  };

  // eksekusi ketika awal render dan jika nilai state query mengalami perubahan
  useEffect(() => {
    getRecipes();
  }, [query]);

  // eksekusi jika ada perubahan pada nilai tag input
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // eksekusi jika form disubmit
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        {/* tag input untuk menerima recipe yang akan dicari */}
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search.."
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {/* cek jika data recipes yang dicari ada atau tidak.
            jika data ada maka kirim data ke komponen Recipe
        */}
        {recipes.length === 0 ? (
          <h3>No Data Found</h3>
        ) : (
          recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
