import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {
  const [fullName, setFullName] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const api = "http://localhost:4000/api/v1/registerstudents";
  const handleSubmit = async (e) => {
    setLoading(true);
    const details = { fullName, indexNumber, email, program, year, password }; // Added college to details
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
      console.log("Response Data:", data);
      if (response.ok) {
        console.log("Registration Successful:", data);
        navigate("/student/home");
      } else {
        console.error("Registration Error:", data.message);
      }
    } catch (err) {
      console.error("Sending failed", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="registration-main-container">
          <h1>Register</h1>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Enter your full name"
          />
          <label htmlFor="indexNumber">Index Number</label>
          <input
            type="number"
            id="indexNumber"
            value={indexNumber}
            onChange={(e) => setIndexNumber(e.target.value)}
            required
            placeholder="Enter your index number"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        
          <label htmlFor="program">Program</label>
          <select
            id="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            required
          >
            <option value="">Select a program</option>
            <option value="Program 1">Program 1</option>
            <option value="Program 2">Program 2</option>
          </select>
          <label htmlFor="year">Year</label>
          <select
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option value="">Select a year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
            <option value="4">Year 4</option>
            <option value="5">Year 5</option>
            <option value="6">Year 6</option>
          </select>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm your password"
          />
          {loading ? (
            <button type="submit" className="registration-submit">
              Loading...
            </button>
          ) : (
            <button type="submit" className="registration-submit">
              Register
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Registration;
