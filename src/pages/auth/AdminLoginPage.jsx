// React modules
import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";
import { AdminContext } from "../../contexts/AdminContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const AdminLoginPage = () => {
  const { studentLoginRoute } = useContext(NavigationContext);
  const { AdminLoginHandler, email, setEmail, password, setPassword } =
    useContext(AdminContext);
  return (
    <section>
      <PageHeader page_name="Login as an Admin" />
      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "70vh" }}
      >
        <form
          onSubmit={(e) => AdminLoginHandler(e)}
          className="p-2 col-lg-5 col-sm-6 col-11"
        >
          <div className="mb-4">
            Not an Admin ?{" "}
            <Link
              to={studentLoginRoute?.path}
              className="text-decoration-underline"
            >
              {studentLoginRoute?.description}
            </Link>
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

          {/* Btn */}
          <div className="mb-3 row justify-content-center">
            <button type="submit" className="btn btn_primary_dark_1 col-10">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AdminLoginPage;
