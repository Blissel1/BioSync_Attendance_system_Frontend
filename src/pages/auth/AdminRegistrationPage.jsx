// React modules
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";
import { AdminContext } from "../../contexts/AdminContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const AdminRegistrationPage = () => {
  const { studentRegistrationRoute } = useContext(NavigationContext);
  const {
    AdminRegistrationHandler,
    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useContext(AdminContext);
  return (
    <section>
      <PageHeader page_name="Register as an Admin" />
      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "90vh" }}
      >
        <form
          onSubmit={(e) => AdminRegistrationHandler(e)}
          className="p-2 col-lg-5 col-sm-6 col-11"
        >
          <div className="mb-4">
            Not an Admin ?{" "}
            <Link
              to={studentRegistrationRoute?.path}
              className="text-decoration-underline"
            >
              {studentRegistrationRoute?.description}
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

export default AdminRegistrationPage;
