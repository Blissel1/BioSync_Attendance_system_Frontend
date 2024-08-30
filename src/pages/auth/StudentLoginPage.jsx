// React modules
import { Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";
import { StudentContext } from "../../contexts/StudentContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";

// Assets

const StudentLoginPage = () => {
  const { adminLoginRoute } = useContext(NavigationContext);
  const {
    StudentLoginHandler,
    indexNumber,
    setIndexNumber,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(StudentContext);
  return (
    <section>
      <PageHeader page_name="Login as a Student" />
      <div
        className="d-flex justify-content-center align-items-start row"
        style={{ height: "70vh" }}
      >
        {/* Form */}
        <form
          onSubmit={(e) => StudentLoginHandler(e)}
          className="p-2 col-lg-5 col-sm-6 col-11"
        >
          <div className="mb-4">
            Not a Student ?{" "}
            <Link
              to={adminLoginRoute?.path}
              className="text-decoration-underline"
            >
              {adminLoginRoute?.description}
            </Link>
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

export default StudentLoginPage;
