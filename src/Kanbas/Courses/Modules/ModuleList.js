import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./Modules.css";

function ModuleList() {
const { courseId } = useParams();
const modules = db.modules;
return (
<ul className="module-list-group">
{
modules
.filter((module) => module.course === courseId)
.map((module, index) => (
    <li key={index} className="module-list-group-item">
        <div className="module-header">
        <h3 className="module-title">{module.name}</h3>
        <p>{module.description}</p>
        </div>
    </li>
    ))
    }
</ul>
);
}
export default ModuleList;