import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const { currentUser } = useSelector((state) => state.usersReducer);
  return (

    <div className="list-group">
            <Link
              to="/project/table"
              className="list-group-item list-group-item-action"
            >
              Users
            </Link>

            <Link
              to="/project/signin"
              className="list-group-item list-group-item-action"
            >
              SignIn
            </Link>

            <Link
              to="/project/signup"
              className="list-group-item list-group-item-action"
            >
              SignUp
            </Link>

            <Link
              to="/project/account"
              className="list-group-item list-group-item-action"
            >
              Account
            </Link>      </div>
      );
}

export default Navigation;