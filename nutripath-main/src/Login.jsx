import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Login() {

  let navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  async function loginData() {

    let result = await fetch(
      `http://localhost:8090/Login?id=${id}&password=${password}`
    );

    let res = await result.json();

    if (res == "Valid") {
      navigate("/Dashboard");
    } else {
      alert("Invalid Login");
    }
  }

  return (

    <div className="container">

      <div className="left">

        <h1 className="logo">NutriPath</h1>

        <h2 className="quote">
          "Let food be the medicine and medicine be the food."
        </h2>

        <p className="author">— Hippocrates</p>

        <img
          src="m.jpeg"
          alt="Healthy Food"
        />

      </div>

      <div className="right">

        <h1>Welcome back</h1>
        <p>Sign in to your dashboard</p>

        <label>ID</label>
        <input
          type="text"
          placeholder="Enter ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginData}>
          Sign In
        </button>

        <p className="bottom">
          Don't have an account?
          <NavLink to="/Reg"> Register</NavLink>
        </p>

      </div>

    </div>

  );
}

export default Login;