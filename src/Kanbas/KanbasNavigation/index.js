import { Link, useLocation } from "react-router-dom";
import "../kanbas.css";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const { pathname } = useLocation();

  return (
    <div className="sidenav">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item-sidenav ${pathname.includes(link) ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}

export default KanbasNavigation;
