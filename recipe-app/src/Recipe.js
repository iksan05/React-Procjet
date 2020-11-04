import React from "react";
import style from "./recipe.module.css";


// menampilkan data 1 recipes dengan menerima property dari App.js
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <img className={style.image} src={image} alt={title} />
      <ul>
        {ingredients.map((ingredient,index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>
        <b>Calories: {calories.toFixed(1)}</b>
      </p>
     
    </div>
  );
};

export default Recipe;
