import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className="home">

            {/* Navigation */}
            <nav className="home-nav">

                <div className="logo">
                    Nutri<span>Path</span>
                </div>

                <div className="nav-links">
                    <NavLink to="/Login">
                        Login
                    </NavLink>

                    <NavLink
                        to="/Reg"
                        className="nav-register"
                    >
                        Register
                    </NavLink>
                </div>

            </nav>


            {/* Hero Section */}
            <div className="hero">

                <div className="hero-content">

                    <div className="welcome-badge">
                        PERSONALIZED NUTRITION
                    </div>

                    <h1>
                        Your Health.
                        <br />
                        <span>Your Plan.</span>
                    </h1>

                    <h2>
                        Your Personalized Diet Planner
                    </h2>

                    <p>
                        Eat healthy, stay fit, and achieve your
                        nutrition goals with personalized diet
                        plans designed just for you.
                    </p>


                    {/* Buttons */}
                    <div className="btns">

                        <NavLink to="/Login">
                            <button className="loginBtn">
                                Login
                            </button>
                        </NavLink>

                        <NavLink to="/Reg">
                            <button className="registerBtn">
                                Get Started
                            </button>
                        </NavLink>

                    </div>


                    {/* Features */}
                    <div className="home-features">

                        <div className="feature">
                            <div className="feature-number">
                                01
                            </div>

                            <div>
                                <strong>
                                    Personalized
                                </strong>

                                <p>
                                    Plans for your goals
                                </p>
                            </div>
                        </div>


                        <div className="feature">
                            <div className="feature-number">
                                02
                            </div>

                            <div>
                                <strong>
                                    Multiple Diets
                                </strong>

                                <p>
                                    Explore different plans
                                </p>
                            </div>
                        </div>


                        <div className="feature">
                            <div className="feature-number">
                                03
                            </div>

                            <div>
                                <strong>
                                    AI Assistant
                                </strong>

                                <p>
                                    Get nutrition guidance
                                </p>
                            </div>
                        </div>

                    </div>

                </div>


                {/* Right Side Card */}
                <div className="hero-card">

                    <div className="circle circle-one"></div>
                    <div className="circle circle-two"></div>

                    <div className="nutrition-card">

                        <div className="card-top">
                            <span>
                                NUTRIPATH
                            </span>

                            <span className="card-status">
                                ACTIVE
                            </span>
                        </div>

                        <div className="card-icon">
                            N
                        </div>

                        <h3>
                            Your Nutrition Journey
                        </h3>

                        <p>
                            Discover diet plans that fit
                            your lifestyle and goals.
                        </p>


                        <div className="card-stats">

                            <div>
                                <strong>12+</strong>
                                <small>Diet Plans</small>
                            </div>

                            <div>
                                <strong>AI</strong>
                                <small>Assistant</small>
                            </div>

                            <div>
                                <strong>24/7</strong>
                                <small>Guidance</small>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* Bottom */}
            <div className="home-footer">
                <span>
                    NutriPath
                </span>

                <span>
                    Personalized nutrition made simple
                </span>
            </div>

        </div>
    );
}

export default Home;