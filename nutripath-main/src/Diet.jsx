import { useParams, useNavigate } from "react-router-dom";
import Diets from "./Diet.json";
import "./App.css";

function Diet() {
  const { id } = useParams();
  const navigate = useNavigate();

  const diet = Diets.find(
    (item) => String(item.id) === String(id)
  );

  if (!diet) {
    return (
      <div className="not-found">
        <h1>Diet Plan Not Found</h1>
        <p>No diet plan was found for ID: {id}</p>

        <button onClick={() => navigate("/Dashboard")}>
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="diet-page">

      {/* NAVBAR */}

      <nav className="diet-navbar">

        <div className="logo">
          Nutri<span>Path</span>
        </div>

        <button
          className="back-btn"
          onClick={() => navigate("/Dashboard")}
        >
          ← Dashboard
        </button>

      </nav>


      {/* HERO */}

      <section className="diet-hero">

        <div className="diet-hero-content">

          <span className="large-category">
            {diet.category}
          </span>

          <h1>{diet.name}</h1>

          <p>
            {diet.goal}
          </p>

        </div>

        <div className="diet-hero-icon">
          🥗
        </div>

      </section>


      {/* QUICK INFORMATION */}

      <section className="diet-info-grid">

        <div className="info-box">

          <span>🔥</span>

          <div>
            <small>Daily Calories</small>
            <strong>
              {diet.dailyCalories || "Balanced"}
            </strong>
          </div>

        </div>


        <div className="info-box">

          <span>📅</span>

          <div>
            <small>Duration</small>
            <strong>
              {diet.duration || "Flexible"}
            </strong>
          </div>

        </div>


        <div className="info-box">

          <span>🎯</span>

          <div>
            <small>Goal</small>
            <strong>
              {diet.category}
            </strong>
          </div>

        </div>

      </section>


      {/* MAIN CONTENT */}

      <main className="diet-content">


        {/* INTRODUCTION */}

        {diet.introduction && (

          <section className="diet-content-card">

            <div className="content-title">
              <span>📖</span>

              <h2>Introduction</h2>
            </div>

            <p>
              {diet.introduction}
            </p>

          </section>

        )}


        {/* WHO SHOULD FOLLOW */}

        {diet.whoShouldFollow && (

          <section className="diet-content-card">

            <div className="content-title">
              <span>👥</span>

              <h2>Who Should Follow This Diet?</h2>
            </div>

            <p>
              {diet.whoShouldFollow}
            </p>

          </section>

        )}


        {/* HEALTH BENEFITS */}

        {diet.healthBenefits &&
          diet.healthBenefits.length > 0 && (

          <section className="diet-content-card">

            <div className="content-title">

              <span>💚</span>

              <h2>Health Benefits</h2>

            </div>


            <div className="benefit-grid">

              {diet.healthBenefits.map(
                (benefit, index) => (

                <div
                  className="benefit-item"
                  key={index}
                >

                  <span>✓</span>

                  <p>{benefit}</p>

                </div>

              ))}

            </div>

          </section>

        )}


        {/* DESCRIPTION */}

        {diet.description && (

          <section className="diet-content-card">

            <div className="content-title">

              <span>🥗</span>

              <h2>About This Diet</h2>

            </div>

            <p>
              {diet.description}
            </p>

          </section>

        )}


        {/* OTHER INFORMATION */}

       

        {diet.mealPlan && (
  <section className="diet-content-card">

    <div className="content-title">
      <span>🍽️</span>
      <h2>Daily Meal Plan</h2>
    </div>

    <div className="meal-plan-grid">

      <div className="meal-box">
        <h3>🌅 Breakfast</h3>
        <p>{diet.mealPlan.breakfast}</p>
      </div>

      <div className="meal-box">
        <h3>☀️ Mid Morning</h3>
        <p>{diet.mealPlan.midMorning}</p>
      </div>

      <div className="meal-box">
        <h3>🍛 Lunch</h3>
        <p>{diet.mealPlan.lunch}</p>
      </div>

      <div className="meal-box">
        <h3>☕ Evening Snack</h3>
        <p>{diet.mealPlan.eveningSnack}</p>
      </div>

      <div className="meal-box">
        <h3>🌙 Dinner</h3>
        <p>{diet.mealPlan.dinner}</p>
      </div>

    </div>

  </section>
)}

      </main>


      {/* BOTTOM BUTTON */}

      <div className="diet-bottom">

        <button
          onClick={() => navigate("/Dashboard")}
        >
          ← Explore More Diet Plans
        </button>

      </div>


      <footer>

        <p>
          © 2026 NutriPath | Personalized Diet Planner
        </p>

      </footer>

    </div>
  );
}

export default Diet;