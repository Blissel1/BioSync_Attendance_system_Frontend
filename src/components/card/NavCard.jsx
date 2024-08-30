import { Link } from "react-router-dom";

const NavCard = (props) => {
  const {
    icon = "Icon",
    nav_name = "Name",
    path = "",
    color = "primary",
  } = props;

  return (
    <Link className={`nav_card_container bg_${color}_light`} to={path}>
      <div className={`nav_card_icon text_${color}`}>{icon}</div>
      <p className={`nav_card_name text_white bg_${color}`}>{nav_name}</p>
    </Link>
  );
};

export default NavCard;
