import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [searchInput, setsearchInput] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchInput)
      .then((Response) => Response.json())
      .then((results) => {
        if (!results.meals) return setMeals([]);
        setMeals(results.meals);
      });
  }, [searchInput]);

  const navigate = useNavigate();
  return (
    <div className="meals">
      <div
        className="d-flex justify-content-between"
        style={{
          marginLeft: "100px",
          marginBottom: "-50px",
          marginTop: "40px",
        }}
      >
        <h1>All Meal</h1>
        <div className="d-flex align-items-center">
          <img
            src="/icons/magnifying-glass-solid.svg"
            style={{
              position: "relative",
              right: "-30px",
              width: "15px",
            }}
            alt="icon"
          />
          <input
            value={searchInput}
            onChange={(event) => setsearchInput(event.target.value)}
            placeholder="Search"
            style={{ marginRight: "80px", height: "40px", paddingLeft: "40px" }}
          />
        </div>
      </div>
      <div
        className="site-layout-background"
        style={{
          gap: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr)",
          padding: "80px",
        }}
      >
        {meals.map((meal) => (
          <div>
            <span onClick={() => navigate("/Detail/" + meal.idMeal)}>
              <Card>
                <img src={meal.strMealThumb} alt="example" />
                <p style={{ marginLeft: "10px" }}>{meal.strMeal}</p>
                <p style={{ marginLeft: "10px" }}>{meal.strCategory}</p>
              </Card>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
