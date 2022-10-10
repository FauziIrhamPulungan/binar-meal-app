import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((Response) => Response.json())
      .then((results) => setMeal(results.meals[0]));
  }, [id]);
  return (
    <div className="d-flex">
      <div
        style={{
          width: "500px",
          height: "400px",
          border: "1px solid transparent",
          margin: "90px",
          marginTop: "50px",
        }}
      >
        <img
          alt="example"
          src={meal.strMealThumb}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className="d-flex justify-content-between"
        style={{
          width: "900px",
          height: "700px",
          border: "1px solid",
          margin: "40px",
          marginTop: "50px",
          marginLeft: "-60px",
          marginRight: "50px",
        }}
      >
        <div>
          <h2 style={{ margin: "10px" }}>{meal.strMeal}</h2>
          <h4 style={{ margin: "20px" }}>
            Ingredients
            <h6>{meal.strIngredient1}</h6>
            <h6>{meal.strIngredient2}</h6>
            <h6>{meal.strIngredient3}</h6>
            <h6>{meal.strIngredient4}</h6>
            <h6>{meal.strIngredient5}</h6>
            <h6>{meal.strIngredient6}</h6>
          </h4>

          <h4 style={{ margin: "20px" }}>
            Instructions
            <h6>{meal.strInstructions}</h6>
          </h4>
        </div>
      </div>
    </div>
  );
}
