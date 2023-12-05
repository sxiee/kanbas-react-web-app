import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./moduleReducer"
import { findModulesForCourse, createModule} from "./client";
import * as client from "./client";

function ModuleList() {
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
        };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
        dispatch(deleteModule(moduleId));
        });
        };

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
        });
        };


    const { courseId } = useParams();
    useEffect(() => {
        findModulesForCourse(courseId)
        .then((modules) =>
        dispatch(setModules(modules))
        );
        }, [courseId]);
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

return (
<ul className="module-list-group">
<div className="row mb-3">
        <div className="col">
        <button 
            className="btn btn-primary" 
            onClick={(handleUpdateModule)}
          >
            Update
          </button>
          <button 
            className="btn btn-success" 
            onClick={(handleAddModule)}
          >
            Add
          </button>
          <input 
            className="form-control inline-block" 
            value={module.name} 
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            placeholder="Module Name"
          />
          <textarea 
            className="form-control" 
            value={module.description} 
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            placeholder="Module Description"
          ></textarea>
        </div>
      </div>
{
modules
.filter((module) => module.course === courseId)
.map((module, index) => (
    <li key={index} className="module-list-group-item">
        <div className="module-header">
        <button 
              className="btn btn-danger" 
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete
            </button>
            <button 
              className="btn btn-success" 
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
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