import React, {Component} from "react";
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, ingredients, url}) => {
    return (
        <div className ={style.recipe}>
            <h1>{title}</h1>
          { /* <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
                </ul> */}
            <p>Calories per recipe: {Math.floor(`${calories}`)}</p>
            <a href={url} target="_blank" >
                <img className={style.image} src={image} alt="Recipe" />
            </a>
        </div>
    );
}

export default Recipe