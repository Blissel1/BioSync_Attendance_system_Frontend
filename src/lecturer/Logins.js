import React, { useState } from "react";
import "../components/Logins.css";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const api = "http://localhost:4000/api/v1/adminSignIn";
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const details = { email, password };
    console.log(details);
    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });
      const data = await response.json();
      console.log(data);
      console.log("Success:", data);
      if (response.ok) {
        // Store the token in local storage

        localStorage.setItem("authToken", data.token);
        navigate("/admin/home");
      } else {
        console.error("Login failed:", data.message);
        // Handle login failure (e.g., display error message)
      }
    } catch (err) {
      console.log("Sending failed:", err);
      // Handle error (e.g., display error message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-main-container">
          <h1>Welcome!</h1>
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

          <NavLink to="" className="forget-password">
            Forgot Password
          </NavLink>
          {loading ? (
            <button className="login-submit" type="submit" disabled>
              Loading.....
            </button>
          ) : (
            <button className="login-submit" type="submit">
              Login
            </button>
          )}
          <div className="p">
            <p>Don't have an account?</p>
            <NavLink to="/student/Register" className="login-signUp">
              Sign-up
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
