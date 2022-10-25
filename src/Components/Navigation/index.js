import { Link } from "react-router-dom";
import "./index.css";
export default function Navigation() {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <Link to="/"> Home </Link>{" "}
        </li>
        <li>
          <Link to="/pokemon"> Pokemon </Link>{" "}
        </li>
        <li>
          <Link to="/signin">Signin </Link>
        </li>
      </ul>
    </div>
  );
}
