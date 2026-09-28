import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Personalize() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        age: "",
        activity: "",
        preference: "",
        goal: "",
        meals: "3"
    });

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function generatePlan(e) {

        e.preventDefault();

        if (
            !form.age ||
            !form.activity ||
            !form.preference ||
            !form.goal
        ) {
            alert("Please complete all required fields.");
            return;
        }

        localStorage.setItem(
            "nutripathPreferences",
            JSON.stringify(form)
        );

        navigate("/MyPlan");
    }

    return (

        <div className="personalize-page">

            <div className="personalize-header">

                <button
                    className="back-button"
                    onClick={() => navigate("/Dashboard")}
                >
                    ← Back to Dashboard
                </button>

                <div className="personalize-title">

                    <span className="small-title">
                        NUTRIPATH
                    </span>

                    <h1>
                        Create Your Personalized Plan
                    </h1>

                    <p>
                        Tell us about your lifestyle and preferences
                        to discover a suitable nutrition plan.
                    </p>

                </div>

            </div>


            <div className="personalize-container">

                <form
                    className="personalize-form"
                    onSubmit={generatePlan}
                >

                    {/* Age */}

                    <div className="form-group">

                        <label>
                            Age
                        </label>

                        <input
                            type="number"
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                            min="13"
                            max="100"
                        />

                    </div>


                    {/* Activity */}

                    <div className="form-group">

                        <label>
                            Activity Level
                        </label>

                        <select
                            name="activity"
                            value={form.activity}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select activity level
                            </option>

                            <option value="low">
                                Low Activity
                            </option>

                            <option value="moderate">
                                Moderately Active
                            </option>

                            <option value="high">
                                Highly Active
                            </option>

                        </select>

                    </div>


                    {/* Diet Preference */}

                    <div className="form-group">

                        <label>
                            Food Preference
                        </label>

                        <select
                            name="preference"
                            value={form.preference}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select preference
                            </option>

                            <option value="vegetarian">
                                Vegetarian
                            </option>

                            <option value="nonvegetarian">
                                Non-Vegetarian
                            </option>

                            <option value="vegan">
                                Vegan
                            </option>

                            <option value="eggetarian">
                                Eggetarian
                            </option>

                        </select>

                    </div>


                    {/* Goal */}

                    <div className="form-group">

                        <label>
                            Nutrition Goal
                        </label>

                        <select
                            name="goal"
                            value={form.goal}
                            onChange={handleChange}
                        >

                            <option value="">
                                Select your goal
                            </option>

                            <option value="balanced">
                                Balanced Healthy Eating
                            </option>

                            <option value="fitness">
                                Fitness & Strength
                            </option>

                            <option value="energy">
                                Improve Daily Energy
                            </option>

                            <option value="healthy">
                                Healthy Weight Management
                            </option>

                            <option value="muscle">
                                Support Muscle Development
                            </option>

                        </select>

                    </div>


                    {/* Meals */}

                    <div className="form-group">

                        <label>
                            Preferred Meals Per Day
                        </label>

                        <select
                            name="meals"
                            value={form.meals}
                            onChange={handleChange}
                        >

                            <option value="3">
                                3 Meals
                            </option>

                            <option value="4">
                                4 Meals
                            </option>

                            <option value="5">
                                5 Meals
                            </option>

                        </select>

                    </div>


                    <button
                        type="submit"
                        className="generate-plan-btn"
                    >
                        Generate My Plan →
                    </button>

                </form>


                {/* Information */}

                <div className="personalize-info">

                    <div className="info-circle">
                        N
                    </div>

                    <h2>
                        Your plan, your preferences.
                    </h2>

                    <p>
                        NutriPath uses your selected lifestyle,
                        food preference and nutrition goal to
                        suggest a suitable meal plan.
                    </p>


                    <div className="personalize-points">

                        <div>
                            <span>01</span>
                            <p>
                                Lifestyle-based recommendations
                            </p>
                        </div>

                        <div>
                            <span>02</span>
                            <p>
                                Food preferences considered
                            </p>
                        </div>

                        <div>
                            <span>03</span>
                            <p>
                                Simple daily meal structure
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Personalize;