// React modules
import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";
import { StudentContext } from "../../contexts/StudentContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const StudentRegistrationPage = () => {
  const { adminRegistrationRoute } = useContext(NavigationContext);
  const {
    StudentRegistrationHandler,
    fullName,
    setFullName,
    indexNumber,
    setIndexNumber,
    email,
    setEmail,
    year,
    setYear,
    program,
    setProgram,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,

    studentYear,
    studentProgram,
  } = useContext(StudentContext);

  return (
    <section>
      <PageHeader page_name="Register as Student" />
      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "90vh" }}
      >
        {/* Form */}
        <form
          onSubmit={(e) => StudentRegistrationHandler(e)}
          className="p-2 col-lg-5 col-sm-6 col-11"
        >
          <div className="mb-4">
            Not a Student ?{" "}
            <Link
              to={adminRegistrationRoute?.path}
              className="text-decoration-underline"
            >
              {adminRegistrationRoute?.description}
            </Link>
          </div>

          {/* Full name */}
          <div className="form-floating mb-3">
            <input
              value={fullName || ""}
              onChange={(e) => setFullName(e?.target?.value)}
              required
              type="text"
              className="form-control"
              name="fullName"
              id="fullName"
              placeholder=""
            />
            <label htmlFor="fullName">Full Name</label>
          </div>

          {/* Index number */}
          <div className="form-floating mb-3">
            <input
              value={indexNumber || ""}
              onChange={(e) => setIndexNumber(e?.target?.value)}
              required
              type="text"
              className="form-control"
              name="indexNumber"
              id="indexNumber"
              placeholder=""
            />
            <label htmlFor="indexNumber">Index Number</label>
          </div>

          {/* Email */}
          <div className="form-floating mb-3">
            <input
              value={email || ""}
              onChange={(e) => setEmail(e?.target?.value)}
              required
              type="email"
              className="form-control"
              name="email"
              id="email"
              aria-describedby="emailHelpId"
              placeholder="abc@mail.com"
            />
            <label htmlFor="email" className="form-label">
              Email
            </label>
          </div>

          {/* Select Year */}
          <div className="mb-3">
            <select
              value={year || ""}
              onChange={(e) => setYear(e?.target?.value)}
              required
              className="form-select form-select-lg"
              name="year"
              id="year"
            >
              <option value="">Select your year\level</option>
              {studentYear.map((year, index) => {
                return (
                  <option value={year} key={index}>
                    Year {year}
                  </option>
                );
              })}
            </select>
            {/* <label htmlFor="year" className="form-label">
              Year
            </label> */}
          </div>

          {/* Select Program */}
          <div className="mb-3">
            <select
              value={program || ""}
              onChange={(e) => setProgram(e?.target?.value)}
              required
              className="form-select form-select-lg"
              name="program"
              id="program"
            >
              <option value="">Select your program</option>
              {studentProgram.map((program, index) => {
                return (
                  <option value={program} key={index}>
                    {program}
                  </option>
                );
              })}
            </select>
            {/* <label htmlFor="program" className="form-label">
              Year
            </label> */}
          </div>

          {/* Password */}
          <div className="form-floating mb-3">
            <input
              value={password || ""}
              onChange={(e) => setPassword(e?.target?.value)}
              required
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder=""
            />
            <label htmlFor="password" className="form-label">
              Password
            </label>
          </div>

          {/* Password Confirmation */}
          <div className="form-floating mb-3">
            <input
              value={confirmPassword || ""}
              onChange={(e) => setConfirmPassword(e?.target?.value)}
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirmPassword"
              placeholder=""
            />
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
          </div>

          {/* Btn */}
          <div className="mb-3 row justify-content-center">
            <button type="submit" className="btn btn_primary_dark_1 col-10">
              Register
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default StudentRegistrationPage;
