import React, { useState } from "react";
import "../components/Logins.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
  const [indexNumber, setIndexNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);

  const api = "http://localhost:4000/api/v1/studentSignIn/student";
  const handleSubmit = async (e) => {
    setloading(true);
    const details = { indexNumber, email, password };
    e.preventDefault();

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const data = await response.json();
      console.log("Success:", data);
      if (response.ok === true) {

        navigate("/student/home");
      }
    } catch (err) {
      console.log("Sending failed");
      setloading(false);
    } finally {
      setloading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="login-main-container">
          <h1>Welcome!</h1>
          <label htmlFor="indexNumber">Index Number</label>
          <input
            type="number"
            id="indexNumber"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
            required
            placeholder="Enter your index number"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="youremail@yahoo.com"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="********"
          />
          <NavLink to="" className="forget-password">Forgot Password</NavLink>
          {loading ? (
            <button
              className="login-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Loading.....
            </button>
          ) : (
            <button
              className="login-submit"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          )}
          <div className="p">
            <p>Don't have an account?</p>
            <NavLink to="/student/register" className="login-signUp">Sign-up</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
