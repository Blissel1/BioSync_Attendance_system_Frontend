// ... React modules
import ReactDOM from "react-dom/client";

// ... Components
import App from "./App";

// ... Assets
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./layouts/app_layout_styles.css";
import "./layouts/navigation_styles.css";
import "./assets/css/utils.css";
import "./assets/css/theme.css";
import "./assets/css/root.css";

import "./components/header/breadcrumb.css";
import "./components/card/navcard.css";
import "./components/table/table_style.css";

import "./pages/dashboard_page/dashboard_styles.css";
import "./pages/welcome_page/welcome_style.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
