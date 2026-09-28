import { useState } from "react";
import { NavLink } from "react-router-dom";


function Reg() {
  let [r, setr] = useState("");
  let [n, setn] = useState("");
  let [m, setm] = useState("");
  let [p, setp] = useState("");
  let [w, setw] = useState("");

  async function Save() {
    let result = await fetch(
      `http://localhost:8090/Reg?id=${r}&name=${n}&mobile=${m}&password=${p}`
    );

    let data = await result.json();
    setw(data);
  }

  return (
    <div className="container">

      <div className="left">

        <h1 className="logo">NutriPath</h1>

        <h2 className="quote">
          "Let food be the medicine and medicine be thefood."
        </h2>

        <p className="author">— Hippocrates</p>

        <img
          src="m.jpeg"
          alt="Healthy Food"
        />

      </div>

      <div className="right">

        <h1>Create account</h1>
        <p>Start your nutrition journey today</p>

        <label>ID</label>
        <input
          type="text"
          placeholder="Enter ID"
          onChange={(e) => setr(e.target.value)}
        />

        <label>Full Name</label>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setn(e.target.value)}
        />

        <label>Mobile</label>
        <input
          type="text"
          placeholder="Mobile"
          onChange={(e) => setm(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="********"
          onChange={(e) => setp(e.target.value)}
        />

        <button onClick={Save}>Create Account</button>

        <h4>{w}</h4>

        <p className="bottom">
          Already have an account?
          <NavLink to="/Login"> Login</NavLink>
        </p>

      </div>

    </div>
  );
}

export default Reg;