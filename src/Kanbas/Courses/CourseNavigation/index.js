import { Link, useParams, useLocation } from "react-router-dom";
import "../../kanbas.css";
function CourseNavigation() {
const links = ["Home", "Modules", "Assignments", "Grades"];
const { courseId } = useParams();
const { pathname } = useLocation();
return (
    <div className="list-group-coursenav" style={{ width: 150 }}>
        {links.map((link, index) => (
        <Link
        key={index}
        to={`/Kanbas/Courses/${courseId}/${link}`}
        className={`list-group-item-coursenav ${pathname.includes(link) && "active"}`}style={{ padding: '10px 15px' }} // Add padding as needed
        >
        {link}
        </Link>
        ))}
    </div>
    );
}
export default CourseNavigation;