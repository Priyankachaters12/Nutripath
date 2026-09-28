import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Diets from "./Diet.json";
import "./App.css";

function Dashboard() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    food: "Vegetarian",
    goal: "Healthy Eating",
    activity: "Moderate",
    meals: "3",
    allergy: "None"
  });

  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
    setSaved(false);
  }

  function saveProfile() {
    localStorage.setItem("nutripathProfile", JSON.stringify(profile));
    setSaved(true);
  }

  function viewDiet(id) {
    navigate(`/Diet/${id}`);
  }

  function openChat() {
    navigate("/Chatbot");
  }

  /*
    Basic recommendation system.

    It checks the diet JSON and tries to find diets
    related to the user's selected goal/category.
  */

  const recommendedDiets = Diets.filter((diet) => {
    const text = `
      ${diet.name || ""}
      ${diet.category || ""}
      ${diet.goal || ""}
      ${diet.description || ""}
    `.toLowerCase();

    const goal = profile.goal.toLowerCase();

    if (goal === "healthy eating") {
      return (
        text.includes("health") ||
        text.includes("balanced") ||
        text.includes("wellness") ||
        text.includes("fitness")
      );
    }

    if (goal === "fitness") {
      return (
        text.includes("fitness") ||
        text.includes("muscle") ||
        text.includes("protein")
      );
    }

    if (goal === "diabetes friendly") {
      return (
        text.includes("diabetic") ||
        text.includes("diabetes") ||
        text.includes("blood sugar")
      );
    }

    if (goal === "weight management") {
      return (
        text.includes("weight") ||
        text.includes("balanced") ||
        text.includes("fitness")
      );
    }

    return true;
  });

  return (
    <div className="dashboard-page">

      {/* NAVBAR */}

      <nav className="dashboard-nav">

        <div className="logo">
          Nutri<span>Path</span>
        </div>

        <div className="nav-buttons">

  <button onClick={() => navigate("/Dashboard")}>
    Dashboard
  </button>

  <button onClick={openChat}>
    🤖 AI Chat
  </button>

  <button onClick={() => navigate("/")}>
    🏠 Home
  </button>

</div>
      </nav>


      {/* WELCOME */}

      <section className="welcome-section">

        <div>

          <p className="small-title">
            YOUR PERSONAL NUTRITION SPACE
          </p>

          <h1>
            Welcome to your
            <span> Personalized Dashboard</span>
          </h1>

          <p>
            Tell NutriPath a little about your preferences and
            discover diet plans that match your lifestyle.
          </p>

        </div>

        <div className="welcome-icon">
          🥗
        </div>

      </section>


      {/* PROFILE */}

      <section className="personalization-card">

        <div className="section-heading">

          <div>
            <h2>👤 Personalize Your Plan</h2>

            <p>
              Select your preferences to get more relevant
              diet recommendations.
            </p>
          </div>

        </div>


        <div className="profile-grid">

          {/* FOOD */}

          <div className="input-group">

            <label>🥗 Food Preference</label>

            <select
              name="food"
              value={profile.food}
              onChange={handleChange}
            >
              <option>Vegetarian</option>
              <option>Non-Vegetarian</option>
              <option>Vegan</option>
              <option>Eggetarian</option>
            </select>

          </div>


          {/* GOAL */}

          <div className="input-group">

            <label>🎯 Main Goal</label>

            <select
              name="goal"
              value={profile.goal}
              onChange={handleChange}
            >
              <option>Healthy Eating</option>
              <option>Fitness</option>
              <option>Weight Management</option>
              <option>Muscle Support</option>
              <option>Diabetes Friendly</option>
            </select>

          </div>


          {/* ACTIVITY */}

          <div className="input-group">

            <label>🏃 Activity Level</label>

            <select
              name="activity"
              value={profile.activity}
              onChange={handleChange}
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </select>

          </div>


          {/* MEALS */}

          <div className="input-group">

            <label>🍽️ Meals Per Day</label>

            <select
              name="meals"
              value={profile.meals}
              onChange={handleChange}
            >
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

          </div>


          {/* ALLERGY */}

          <div className="input-group">

            <label>🚫 Food Allergy / Avoid</label>

            <input
              type="text"
              name="allergy"
              value={profile.allergy}
              onChange={handleChange}
              placeholder="Example: Nuts"
            />

          </div>

        </div>


        <button
          className="save-profile-btn"
          onClick={saveProfile}
        >
          {saved ? "✓ Preferences Saved" : "Save My Preferences"}
        </button>

      </section>


      {/* SUMMARY */}

      <section className="summary-section">

        <div className="summary-card">
          <div className="summary-icon">🥗</div>
          <h3>{profile.food}</h3>
          <p>Food Preference</p>
        </div>


        <div className="summary-card">
          <div className="summary-icon">🎯</div>
          <h3>{profile.goal}</h3>
          <p>Your Main Goal</p>
        </div>


        <div className="summary-card">
          <div className="summary-icon">🏃</div>
          <h3>{profile.activity}</h3>
          <p>Activity Level</p>
        </div>


        <div className="summary-card">
          <div className="summary-icon">🍽️</div>
          <h3>{profile.meals}</h3>
          <p>Meals Per Day</p>
        </div>

      </section>


      {/* RECOMMENDED */}

      <section className="diet-section">

        <div className="section-heading">

          <div>

            <p className="small-title">
              BASED ON YOUR PREFERENCES
            </p>

            <h2>✨ Recommended For You</h2>

          </div>

        </div>


        <div className="diet-grid">

          {recommendedDiets.length > 0 ? (

            recommendedDiets.map((diet) => (

              <div
                className="diet-card recommended-card"
                key={diet.id}
              >

                <div className="diet-card-top">

                  <span className="diet-number">
                    {String(diet.id).padStart(2, "0")}
                  </span>

                  <span className="category-badge">
                    {diet.category}
                  </span>

                </div>


                <h3>{diet.name}</h3>

                <p className="diet-goal">
                  {diet.goal}
                </p>


                <button
                  className="view-diet-btn"
                  onClick={() => viewDiet(diet.id)}
                >
                  View Full Plan →
                </button>

              </div>

            ))

          ) : (

            <p>
              No matching diet was found. Try changing your
              preferences.
            </p>

          )}

        </div>

      </section>


      {/* ALL DIETS */}

      <section className="diet-section">

        <div className="section-heading">

          <div>

            <p className="small-title">
              EXPLORE
            </p>

            <h2>🥗 All Diet Plans</h2>

          </div>

          <span className="diet-count">
            {Diets.length} Plans Available
          </span>

        </div>


        <div className="diet-grid">

          {Diets.map((diet) => (

            <div
              className="diet-card"
              key={diet.id}
            >

              <div className="diet-card-top">

                <span className="diet-number">
                  {String(diet.id).padStart(2, "0")}
                </span>

                <span className="category-badge">
                  {diet.category}
                </span>

              </div>


              <h3>{diet.name}</h3>

              <p className="diet-goal">
                {diet.goal}
              </p>


              <button
                className="view-diet-btn"
                onClick={() => viewDiet(diet.id)}
              >
                View Plan →
              </button>

            </div>

          ))}

        </div>

      </section>


      {/* AI */}

      <section className="ai-section">

        <div>

          <p className="small-title">
            NEED HELP?
          </p>

          <h2>🤖 Ask NutriPath AI</h2>

          <p>
            Have questions about your diet plans?
            Ask our AI assistant for guidance about
            the plans available in NutriPath.
          </p>

        </div>

        <button onClick={openChat}>
          Open AI Chat →
        </button>

      </section>


      <footer>
        <p>© 2026 NutriPath | Personalized Diet Planner</p>
      </footer>

    </div>
  );
}

export default Dashboard;